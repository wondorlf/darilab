'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Stethoscope, Microscope, BriefcaseMedical, TestTube, Activity, FileText, HeartPulse, Sparkles, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { categories, servicesData } from '@/data/services';
import { whatsappLink } from '@/lib/contact';
import { assetUrl } from '@/lib/assets';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  // Separar categorias con mutiples servicios y categorías de un solo servicio
  const multiCategories = ['Especialidades', 'Salud Ocupacional', 'Imagenología', 'Asesorías y Proyectos'];
  const singleCategories = ['Medicina', 'Odontología', 'Laboratorio Clínico', 'Laboratorio Veterinario', 'CRC'];

  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex flex-wrap justify-between items-center gap-4 sticky top-0 z-50">
      <Link href="/" className="flex items-center">
        {/* Usamos el logo proporcionado asumiendo que se guardará en public/logo.jpg o lo simulamos con la imagen de URL si la tuvieramos. */}
        <div className="relative h-10 w-40 md:h-12 md:w-48">
          <img src={assetUrl('/logo.jpeg')} alt="DariLab IPS" className="w-full h-full object-contain" onError={(e) => {
            // Fallback en caso de que no esté en public aún 
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }} />
          {/* Logo Fallback (hidden by default) */}
          <div className="hidden flex items-center gap-2 md:gap-3">
             <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2B3990] rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
               D
             </div>
             <div className="flex flex-col">
               <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#2B3990] leading-none">DariLab</span>
               <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#00AEEF]">IPS Profesional</span>
             </div>
          </div>
        </div>
      </Link>

      <button 
        className="md:hidden p-2 text-slate-600 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-2 lg:gap-4 items-center flex-wrap justify-center">
        <Link href="/" className="text-sm font-semibold text-slate-600 px-4 py-1.5 rounded-full hover:bg-sky-100 hover:text-[#2B3990] transition-colors">Inicio</Link>
        <Link href="/nosotros" className="text-sm font-semibold text-slate-600 px-4 py-1.5 rounded-full hover:bg-sky-100 hover:text-[#2B3990] transition-colors">Nosotros</Link>
        <Link href="/pqrsf" className="text-sm font-semibold text-slate-600 px-4 py-1.5 rounded-full hover:bg-sky-100 hover:text-[#2B3990] transition-colors">PQRSF</Link>
        
        {/* Dropdown de Servicios */}
        <div className="relative group/nav">
          <Link href="/servicios" className="text-sm font-semibold text-slate-600 px-4 py-1.5 rounded-full hover:bg-sky-100 hover:text-[#2B3990] transition-colors flex items-center gap-1 cursor-pointer">
            Servicios
            <ChevronDown className="w-3 h-3 group-hover/nav:rotate-180 transition-transform" />
          </Link>

          {/* Mega Menu Overlay */}
          <div className="hidden md:block absolute top-full right-[-100px] lg:right-[-150px] pt-2 w-[700px] md:w-[750px] lg:w-[800px] max-w-[90vw] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 lg:p-8 grid grid-cols-3 gap-6 lg:gap-8">
              
              {/* Columna 1 y 2: Categorías Múltiples */}
              <div className="col-span-2 grid grid-cols-2 gap-8">
                {multiCategories.map(cat => {
                  const svcs = servicesData.filter(s => s.categories.includes(cat)).slice(0, 4); // Mostrar máximo 4 para no saturar
                  return (
                    <div key={cat}>
                      <Link href={`/servicios`} className="text-[#2B3990] font-bold mb-3 flex items-center hover:text-[#00AEEF] transition-colors">
                        {cat}
                      </Link>
                      <ul className="space-y-2">
                        {svcs.map(svc => (
                          <li key={svc.id}>
                            <Link href={`/servicios/${svc.id}`} className="text-sm text-slate-500 hover:text-[#86A06D] transition-colors flex items-start gap-2 group/item">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-1.5 group-hover/item:bg-[#86A06D] transition-colors flex-shrink-0"></span>
                              <span className="leading-tight">{svc.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link href="/servicios" className="text-xs font-semibold text-[#00AEEF] hover:underline mt-2 inline-block">Ver todos →</Link>
                    </div>
                  )
                })}
              </div>

              {/* Columna 3: Servicios Individuales (juntos) */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-[#86A06D] font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Integrales y Diagnóstico
                </h3>
                <ul className="space-y-4">
                  {singleCategories.map(cat => {
                    const svc = servicesData.find(s => s.categories.includes(cat));
                    if (!svc) return null;
                    const Icon = svc.icon;
                    return (
                      <li key={cat}>
                        <Link href={`/servicios/${svc.id}`} className="flex items-center gap-3 group/item">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${svc.theme.solid} group-hover/item:scale-110 transition-transform shadow-sm`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-slate-700 group-hover/item:text-[#2B3990] transition-colors leading-tight">{svc.title}</span>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>

        <a href={whatsappLink('Solicito mis resultados de exámenes')} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-600 px-4 py-1.5 rounded-full hover:bg-sky-100 hover:text-[#2B3990] transition-colors">Resultados</a>
        <Link href="/contacto" className="bg-[#00AEEF] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-[#009bd6] transition-colors ml-2">
          Contacto
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="w-full md:hidden flex flex-col gap-2 mt-2 pt-4 border-t border-slate-100 pb-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 px-4 py-2 rounded-xl hover:bg-sky-50 hover:text-[#2B3990] transition-colors">Inicio</Link>
          <Link href="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 px-4 py-2 rounded-xl hover:bg-sky-50 hover:text-[#2B3990] transition-colors">Nosotros</Link>
          <Link href="/pqrsf" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 px-4 py-2 rounded-xl hover:bg-sky-50 hover:text-[#2B3990] transition-colors">PQRSF</Link>
          
          <div className="flex flex-col">
            <button 
              onClick={() => setOpenMobileDropdown(!openMobileDropdown)} 
              className="text-sm font-bold text-slate-700 px-4 py-2 rounded-xl hover:bg-sky-50 hover:text-[#2B3990] transition-colors flex items-center justify-between"
            >
              Servicios
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown && (
              <div className="flex flex-col pl-6 pr-4 py-2 gap-2 bg-slate-50 mt-1 rounded-xl mx-2">
                <Link href="/servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold text-slate-600 py-1 hover:text-[#00AEEF]">Todos los Servicios →</Link>
                {multiCategories.slice(0,2).map(cat => (
                  <Link key={cat} href="/servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-500 py-1 hover:text-[#86A06D]">{cat}</Link>
                ))}
                {singleCategories.slice(0,3).map(cat => {
                   const svc = servicesData.find(s => s.categories.includes(cat));
                   return svc ? <Link key={cat} href={`/servicios/${svc.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-500 py-1 hover:text-[#86A06D]">{svc.title}</Link> : null;
                })}
              </div>
            )}
          </div>

          <a href={whatsappLink('Solicito mis resultados de exámenes')} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 px-4 py-2 rounded-xl hover:bg-sky-50 hover:text-[#2B3990] transition-colors">Resultados</a>
          <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#00AEEF] text-white px-4 py-3 rounded-xl text-center text-sm font-bold shadow-sm hover:bg-[#009bd6] transition-colors mt-2 mx-2">
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}
