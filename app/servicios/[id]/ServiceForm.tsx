'use client';
import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { EMAILS, WEB3FORMS, WHATSAPP_NUMBER } from '@/lib/contact';
import { submitWeb3Forms } from '@/lib/web3forms';

type Channel = 'whatsapp' | 'email';

export default function ServiceForm({ defaultServiceId, serviceTitle }: { defaultServiceId: string; serviceTitle?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const title = serviceTitle || defaultServiceId;

  const readForm = (form: HTMLFormElement) => ({
    nombre: String(form.nombre?.value || '').trim(),
    telefono: String(form.telefono?.value || '').trim(),
    correo: String(form.correo?.value || '').trim(),
    fecha: String(form.fecha?.value || '').trim(),
    mensaje: String(form.mensaje?.value || '').trim(),
  });

  const sendByWhatsApp = (form: HTMLFormElement) => {
    const d = readForm(form);
    const lines = [
      `Hola DariLab IPS 👋, quiero agendar una cita para el servicio de *${title}*.`,
      '',
      `• Nombre: ${d.nombre}`,
      `• Teléfono: ${d.telefono}`,
    ];
    if (d.correo) lines.push(`• Correo: ${d.correo}`);
    if (d.fecha) lines.push(`• Fecha preferida: ${d.fecha}`);
    if (d.mensaje) lines.push(`• Nota: ${d.mensaje}`);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener',
    );
  };

  const sendByEmail = async (form: HTMLFormElement) => {
    const d = readForm(form);
    const payload: Record<string, string> = {
      servicio: title,
      nombre: d.nombre,
      telefono: d.telefono,
      correo: d.correo || 'No proporcionado',
      fecha_preferida: d.fecha || 'No indicada',
      mensaje: d.mensaje || '—',
      _subject: `Solicitud de turno — ${title}`,
      _captcha: 'false',
    };
    const result = await submitWeb3Forms(WEB3FORMS.booking, payload);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, channel: Channel) => {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;

    if (channel === 'whatsapp') {
      sendByWhatsApp(form);
      return;
    }

    setSending(true);
    await sendByEmail(form);
    setSending(false);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200 mt-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <CheckCircle2 className="w-5 h-5" />
          <p className="font-bold">¡Solicitud enviada!</p>
        </div>
        <p className="text-sm">Su solicitud de turno ha sido enviada a <strong>{EMAILS.autorizaciones}</strong>. Le contactaremos pronto.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-xs font-bold text-emerald-700 underline">Nueva solicitud</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(e, 'email');
      }}
      className="space-y-4"
    >
      <div className="space-y-1.5">
        <label htmlFor="nombre" className="text-[11px] font-bold uppercase text-slate-400">Nombre Completo</label>
        <input required name="nombre" id="nombre" type="text" placeholder="Ej. Juan Perez" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="telefono" className="text-[11px] font-bold uppercase text-slate-400">Teléfono</label>
        <input required name="telefono" id="telefono" type="tel" inputMode="tel" placeholder="+57 300 000 0000" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="correo" className="text-[11px] font-bold uppercase text-slate-400">Correo Electrónico (opcional)</label>
        <input name="correo" id="correo" type="email" placeholder="correo@ejemplo.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="fecha" className="text-[11px] font-bold uppercase text-slate-400">Fecha Preferida (opcional)</label>
        <input name="fecha" id="fecha" type="date" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="mensaje" className="text-[11px] font-bold uppercase text-slate-400">Mensaje (opcional)</label>
        <textarea name="mensaje" id="mensaje" rows={2} placeholder="¿Algo que debamos saber?" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none" />
      </div>
      <input type="hidden" name="service" value={defaultServiceId} />

      {error && (
        <div className="bg-red-50 text-red-800 p-3 rounded-xl border border-red-200 text-center">
          <p className="font-bold text-sm">{error}</p>
        </div>
      )}

      {/* Channel choice: WhatsApp or Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <button
          type="button"
          onClick={(e) => {
            const form = e.currentTarget.form;
            if (!form) return;
            if (!form.reportValidity()) return;
            sendByWhatsApp(form);
          }}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Enviar por WhatsApp
        </button>
        <button
          type="submit"
          disabled={sending}
          className="w-full bg-[#2B3990] hover:bg-[#202b6d] text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar por Correo
            </>
          )}
        </button>
      </div>
      <p className="text-[11px] text-slate-400 text-center -mt-1">
        Por correo su solicitud llega a <strong>{EMAILS.autorizaciones}</strong>. Le contactaremos al correo o teléfono proporcionado.
      </p>
    </form>
  );
}
