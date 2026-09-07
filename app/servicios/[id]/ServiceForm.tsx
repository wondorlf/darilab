'use client';
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/contact';

export default function ServiceForm({ defaultServiceId, serviceTitle }: { defaultServiceId: string; serviceTitle?: string }) {
  const title = serviceTitle || defaultServiceId;

  const sendByWhatsApp = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) || '').trim();

    const lines = [
      `Hola DariLab IPS 👋, quiero agendar una cita para el servicio de *${title}*.`,
      '',
      `• Nombre: ${get('nombre')}`,
      `• Teléfono: ${get('telefono')}`,
    ];
    if (get('fecha')) lines.push(`• Fecha preferida: ${get('fecha')}`);
    if (get('mensaje')) lines.push(`• Nota: ${get('mensaje')}`);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener',
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendByWhatsApp(e.currentTarget);
      }}
      className="space-y-4"
    >
      <div className="space-y-1.5">
        <label htmlFor="nombre" className="text-[11px] font-bold uppercase text-slate-500">Nombre Completo</label>
        <input required name="nombre" id="nombre" type="text" placeholder="Ej. Juan Perez" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="telefono" className="text-[11px] font-bold uppercase text-slate-500">Teléfono</label>
        <input required name="telefono" id="telefono" type="tel" inputMode="tel" placeholder="+57 300 000 0000" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="fecha" className="text-[11px] font-bold uppercase text-slate-500">Fecha Preferida (opcional)</label>
        <input name="fecha" id="fecha" type="date" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="mensaje" className="text-[11px] font-bold uppercase text-slate-500">Mensaje (opcional)</label>
        <textarea name="mensaje" id="mensaje" rows={2} placeholder="¿Algo que debamos saber?" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none" />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        Enviar por WhatsApp
      </button>
      <p className="text-[11px] text-slate-500 text-center -mt-1">
        Su solicitud se envía directamente por WhatsApp a DariLab IPS. Nuestro equipo le confirmará su turno.
      </p>
    </form>
  );
}
