'use client';
import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

// Contador de visitas (agregado y anónimo) vía Abacus, un servicio gratuito
// compatible con hosting estático (GitHub Pages): cada carga de página hace
// un GET que incrementa el contador y devuelve el total. No usa cookies ni
// datos personales (Ley 1581 / Habeas Data).
const NAMESPACE = 'darilabips.com';
const KEY = 'visits';
const ABACUS_URL = `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;

const AR_COLOMBIA_TZ = 'America/Bogota';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // Una sola petición por sesión de pestaña: evita inflar el contador en
    // cada navegación interna y se repite al reabrir el sitio.
    const storageKey = `visit-counted:${new Date().toLocaleDateString('en-CA', { timeZone: AR_COLOMBIA_TZ })}`;
    if (sessionStorage.getItem(storageKey) === '1') return;

    let cancelled = false;
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(ABACUS_URL, { signal: controller.signal });
        if (!res.ok) return;
        const data: unknown = await res.json();
        const value =
          typeof data === 'object' && data !== null && 'value' in data
            ? Number((data as {value: unknown}).value)
            : NaN;
        if (typeof value === 'number' && Number.isFinite(value) && !cancelled) {
          setVisits(value);
          sessionStorage.setItem(storageKey, '1');
        }
      } catch {
        // Fallo silencioso: el contador simplemente no se muestra.
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  if (visits === null) return null;

  return (
    <div
      // Oculto durante SSR/hidratación para que no parpadee en el borde.
      className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-1.5 rounded-full bg-white/95 border border-slate-200 shadow-sm px-3 py-1.5 text-xs font-semibold text-slate-600"
      aria-label={`Este sitio acumula ${visits} visitas`}
    >
      <Eye className="w-3.5 h-3.5 text-[#0077B6]" aria-hidden="true" />
      <span>{new Intl.NumberFormat('es-CO').format(visits)}</span>
    </div>
  );
}
