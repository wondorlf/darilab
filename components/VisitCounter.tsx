'use client';
import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

// Contador de visitas (agregado y anónimo) vía Abacus, un servicio gratuito
// compatible con hosting estático (GitHub Pages). No usa cookies ni datos
// personales (Ley 1581 / Habeas Data).
//
// Comportamiento:
// - Primer acceso del día por dispositivo: GET /hit/... incrementa y devuelve el total.
// - Accesos posteriores del mismo día: GET /get/... solo LEE el total (no infla el conteo).
// - Si la API falla, el contador simplemente no se muestra.
const NAMESPACE = 'darilabips.com';
const KEY = 'visits';
const ABACUS_BASE = 'https://abacus.jasoncameron.dev';
const HIT_URL = `${ABACUS_BASE}/hit/${NAMESPACE}/${KEY}`;
const GET_URL = `${ABACUS_BASE}/get/${NAMESPACE}/${KEY}`;

const TZ = 'America/Bogota';

/** Marca por día en localStorage: permite 1 incremento por dispositivo/día. */
function todayStorageKey(): string {
  const day = new Date().toLocaleDateString('en-CA', { timeZone: TZ });
  return `visit-counted:${day}`;
}

/** Limpia marcas de días anteriores (quedan obsoletas). */
function pruneOldKeys(todayKey: string): void {
  try {
    const stale: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith('visit-counted:') && k !== todayKey) stale.push(k);
    }
    stale.forEach((k) => localStorage.removeItem(k));
  } catch {
    // localStorage puede estar bloqueado (navegación privada); ignorar.
  }
}

function extractValue(data: unknown): number | null {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    const value = Number((data as {value: unknown}).value);
    if (Number.isFinite(value)) return value;
  }
  return null;
}

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const todayKey = todayStorageKey();
    pruneOldKeys(todayKey);
    // Ya contó hoy: solo lectura; si no: incrementa (y devuelve el total).
    const url = localStorage.getItem(todayKey) === '1' ? GET_URL : HIT_URL;

    let cancelled = false;
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        // /get responde 404 si la clave aún no existe (no debería pasar si
        // ya contó hoy, pero si ocurre el contador no se muestra).
        if (!res.ok) return;
        const value = extractValue(await res.json());
        if (value !== null && !cancelled) {
          setVisits(value);
          try {
            localStorage.setItem(todayKey, '1');
          } catch {
            // Sin localStorage: contaría en cada carga; aceptable.
          }
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
      className="fixed bottom-4 left-4 z-40 flex items-center gap-1.5 rounded-full bg-white/95 border border-slate-200 shadow-sm px-2.5 py-1 text-[11px] font-semibold text-slate-600 md:bottom-6 md:left-6 md:px-3 md:py-1.5 md:text-xs"
      aria-label={`Este sitio acumula ${visits} visitas`}
    >
      <Eye className="w-3.5 h-3.5 text-[#0077B6]" aria-hidden="true" />
      <span>{new Intl.NumberFormat('es-CO').format(visits)}</span>
    </div>
  );
}
