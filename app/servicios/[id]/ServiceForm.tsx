'use client';
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/contact';

export default function ServiceForm({ defaultServiceId }: { defaultServiceId: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      'Hola DariLab IPS 👋, quiero solicitar un turno.',
      '',
      `*Servicio:* ${data.get('service')}`,
      `*Nombre:* ${data.get('nombre')}`,
      `*Teléfono:* ${data.get('telefono')}`,
      data.get('correo') ? `*Correo:* ${data.get('correo')}` : '',
    ].filter(Boolean).join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200 mt-4 text-center">
        <p className="font-bold mb-1">¡Solicitud lista en WhatsApp!</p>
        <p className="text-sm">Se abrió WhatsApp con sus datos. Presione <strong>Enviar</strong> en el chat para completar la solicitud.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-xs font-bold text-emerald-700 underline">Nueva solicitud</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="nombre" className="text-[11px] font-bold uppercase text-slate-400">Nombre Completo</label>
        <input required name="nombre" id="nombre" type="text" placeholder="Ej. Juan Perez" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="telefono" className="text-[11px] font-bold uppercase text-slate-400">Teléfono</label>
        <input required name="telefono" id="telefono" type="tel" placeholder="+57 300 000 0000" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="correo" className="text-[11px] font-bold uppercase text-slate-400">Correo Electrónico (opcional)</label>
        <input name="correo" id="correo" type="email" placeholder="correo@ejemplo.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      {/* Hidden input to pass the service ID */}
      <input type="hidden" name="service" value={defaultServiceId} />

      <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl mt-4 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2">
        <MessageCircle className="w-5 h-5" />
        Solicitar Turno por WhatsApp
      </button>
      <p className="text-[11px] text-slate-400 text-center -mt-2">
        Se abrirá WhatsApp con su solicitud lista para enviar.
      </p>
    </form>
  );
}