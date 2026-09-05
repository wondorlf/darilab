import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { whatsappLink, WHATSAPP_DISPLAY, EMAIL } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 px-4 md:px-8 py-6 mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4 md:gap-8 items-center flex-wrap justify-center">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase text-center md:text-left">WhatsApp</span>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors">{WHATSAPP_DISPLAY}</a>
          </div>
          <div className="w-px h-8 bg-slate-300 hidden md:block"></div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase text-center md:text-left">Escríbenos</span>
            <a href={`mailto:${EMAIL}`} className="text-sm font-bold text-slate-700 hover:text-[#00AEEF] transition-colors">{EMAIL}</a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-2">© 2024 DariLab IPS • Carrera 7 # 5 - 26, Barrio Gavan, Tauramena - Casanare</p>
          <Link href="/pqrsf" className="text-xs font-bold text-[#00AEEF] hover:text-[#2B3990] transition-colors underline">Formulario PQRSF</Link>
        </div>
        
        <div className="flex gap-3 mt-4 md:mt-0">
          <a href="https://www.facebook.com/profile.php?id=100063478873317" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-200 transition-colors" aria-label="Facebook">
             <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-200 transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-200 transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
