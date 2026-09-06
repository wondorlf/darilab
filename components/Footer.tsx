import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';
import { whatsappLink, WHATSAPP_DISPLAY, EMAILS } from '@/lib/contact';

const emailList = [
  { label: 'Contacto', email: EMAILS.contacto },
  { label: 'Gerencia', email: EMAILS.gerencia },
  { label: 'Autorizaciones', email: EMAILS.autorizaciones },
  { label: 'Facturación', email: EMAILS.facturacion },
];

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 px-4 md:px-8 py-8 mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        {/* Top row: WhatsApp + Social, centered together */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 transition-colors"
            aria-label="WhatsApp"
          >
            <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-emerald-500">
              <MessageCircle className="w-4 h-4" />
            </span>
            <span className="text-sm font-bold">{WHATSAPP_DISPLAY}</span>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100063478873317" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-200 transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/ipsdarilabsas" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-200 transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Email grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {emailList.map(({ label, email }) => (
            <div key={email} className="flex items-start gap-2 bg-white rounded-xl px-3 py-2.5 border border-slate-200">
              <Mail className="w-4 h-4 text-[#00AEEF] mt-0.5 flex-shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
                <a href={`mailto:${email}`} className="text-xs font-semibold text-slate-700 hover:text-[#00AEEF] transition-colors truncate">{email}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: copyright + PQRSF */}
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-2">© 2026 DariLab IPS • Carrera 7 # 5 - 26, Barrio Gavan, Tauramena - Casanare</p>
          <Link href="/pqrsf" className="text-xs font-bold text-[#00AEEF] hover:text-[#2B3990] transition-colors underline">Formulario PQRSF</Link>
        </div>
      </div>
    </footer>
  );
}
