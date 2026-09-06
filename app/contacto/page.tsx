'use client';
import React, { useState } from 'react';
import { MapPin, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { whatsappLink, WHATSAPP_DISPLAY, PHONE_NUMBERS, EMAILS } from '@/lib/contact';
import { assetUrl } from '@/lib/assets';
import { submitWeb3Forms } from '@/lib/web3forms';
import { WEB3FORMS } from '@/lib/contact';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {
      nombre: `${data.get('nombre')} ${data.get('apellido') || ''}`.trim(),
      correo: String(data.get('correo') || ''),
      motivo: String(data.get('motivo') || ''),
      mensaje: String(data.get('mensaje') || ''),
      _subject: `Contacto desde la web — ${data.get('motivo')}`,
      _captcha: 'false',
    };

    const result = await submitWeb3Forms(WEB3FORMS.contacto, payload);
    setSending(false);

    if (result.success) {
      setSent(true);
    } else {
      setError(result.message);
    }
  };

  return (
    <main className="flex-1 w-full flex flex-col">

      {/* Full Width Header Hero */}
      <div className="relative w-full bg-[#2B3990] overflow-hidden flex items-center justify-center py-20 px-6">
        <div className="absolute inset-0">
          <img
            src={assetUrl('/ubicacion.jpeg')}
            alt="Fondo"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2B3990]/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">Contáctenos</h1>
          <p className="text-white/90 text-lg">
            Estamos aquí para ayudarle con sus dudas o solicitudes. Puede contactarnos por nuestros canales directos o escribirnos por WhatsApp.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact info list */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-5">
            <div className="p-4 bg-[#00AEEF]/10 rounded-2xl text-[#00AEEF]">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Nuestra Ubicación</h3>
              <p className="text-slate-500 mt-1">Carrera 7 # 5 - 26<br/>Barrio Gavan<br/>Tauramena - Casanare</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-5">
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-600">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Líneas de Atención</h3>
              <p className="text-slate-500 mt-1">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 hover:text-emerald-700 hover:underline">
                  <MessageCircle className="w-4 h-4" /> WhatsApp: {WHATSAPP_DISPLAY}
                </a>
                <br/>
                <a href={`tel:${PHONE_NUMBERS.line2}`} className="hover:text-[#2B3990] hover:underline">Tel: 310 329 1099</a>
                <br/>
                <a href={`tel:${PHONE_NUMBERS.line3}`} className="hover:text-[#2B3990] hover:underline">Tel: 310 679 9621</a>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-5">
            <div className="p-4 bg-[#2B3990]/10 rounded-2xl text-[#2B3990]">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Correos Electrónicos</h3>
              <div className="text-slate-500 mt-1 text-sm space-y-0.5">
                <a href={`mailto:${EMAILS.contacto}`} className="block hover:text-[#2B3990] hover:underline">{EMAILS.contacto}</a>
                <a href={`mailto:${EMAILS.gerencia}`} className="block hover:text-[#2B3990] hover:underline">{EMAILS.gerencia}</a>
                <a href={`mailto:${EMAILS.autorizaciones}`} className="block hover:text-[#2B3990] hover:underline">{EMAILS.autorizaciones}</a>
                <a href={`mailto:${EMAILS.facturacion}`} className="block hover:text-[#2B3990] hover:underline">{EMAILS.facturacion}</a>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-3xl border border-slate-200 shadow-sm overflow-hidden h-64 relative mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.68817757912!2d-72.76615731976077!3d5.01869830872655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e16fd4ed73319cf%3A0xe7dc281ddde1c6db!2sTauramena%2C%20Casanare!5e0!3m2!1ses!2sco!4v1717364125860!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{border: 0, borderRadius: '1.25rem'}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación DariLab IPS"
            />
          </div>
        </div>

        {/* Contact Form -> Email via Web3Forms */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Escríbanos</h2>
          <p className="text-slate-500 mb-6 text-sm">Complete el formulario y le responderemos por correo electrónico. También puede escribirnos directamente al <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">{WHATSAPP_DISPLAY}</a>.</p>

          {sent && (
            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200 mb-6 text-center animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-2 mb-1">
                <CheckCircle2 className="w-5 h-5" />
                <p className="font-bold">¡Mensaje enviado!</p>
              </div>
              <p className="text-sm">Su correo ha sido enviado a {EMAILS.contacto}. Le responderemos pronto.</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 mb-6 text-center">
              <p className="font-bold text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="nombre" className="text-[11px] font-bold uppercase text-slate-400">Nombre</label>
                <input required name="nombre" id="nombre" type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="apellido" className="text-[11px] font-bold uppercase text-slate-400">Apellido</label>
                <input name="apellido" id="apellido" type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="correo" className="text-[11px] font-bold uppercase text-slate-400">Correo Electrónico</label>
              <input required name="correo" id="correo" type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="motivo" className="text-[11px] font-bold uppercase text-slate-400">Motivo</label>
              <select name="motivo" id="motivo" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all appearance-none">
                <option>Información General</option>
                <option>Felicitaciones</option>
                <option>Quejas o Reclamos</option>
                <option>Sugerencias</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="mensaje" className="text-[11px] font-bold uppercase text-slate-400">Mensaje</label>
              <textarea required name="mensaje" id="mensaje" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"></textarea>
            </div>

            <button type="submit" disabled={sending || sent} className="w-full bg-[#2B3990] hover:bg-[#202b6d] text-white font-bold py-4 rounded-xl mt-2 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Correo
                </>
              )}
            </button>
            <p className="text-[11px] text-slate-400 text-center -mt-1">
              Su mensaje será enviado a {EMAILS.contacto}
            </p>
          </form>
        </div>
      </div>
      </div>
    </main>
  );
}
