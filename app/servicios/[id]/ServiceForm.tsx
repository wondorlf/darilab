'use client';
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { EMAILS } from '@/lib/contact';
import { submitWeb3Forms } from '@/lib/web3forms';
import { WEB3FORMS } from '@/lib/contact';

export default function ServiceForm({ defaultServiceId }: { defaultServiceId: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {
      servicio: defaultServiceId,
      nombre: String(data.get('nombre') || ''),
      telefono: String(data.get('telefono') || ''),
      correo: String(data.get('correo') || ''),
      _subject: `Solicitud de turno — ${defaultServiceId}`,
      _captcha: 'false',
    };

    const result = await submitWeb3Forms(WEB3FORMS.booking, payload);
    setSending(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200 mt-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <CheckCircle2 className="w-5 h-5" />
          <p className="font-bold">¡Solicitud enviada!</p>
        </div>
        <p className="text-sm">Su solicitud de turno ha sido enviada a <strong>{EMAILS.contacto}</strong>. Le contactaremos pronto.</p>
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
      <input type="hidden" name="service" value={defaultServiceId} />

      {error && (
        <div className="bg-red-50 text-red-800 p-3 rounded-xl border border-red-200 text-center">
          <p className="font-bold text-sm">{error}</p>
        </div>
      )}

      <button type="submit" disabled={sending} className="w-full bg-[#2B3990] hover:bg-[#202b6d] text-white font-bold py-3 rounded-xl mt-4 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
        {sending ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Solicitar Turno
          </>
        )}
      </button>
      <p className="text-[11px] text-slate-400 text-center -mt-2">
        Le contactaremos al correo o teléfono proporcionado.
      </p>
    </form>
  );
}
