import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData, categories } from '@/data/services';
import { assetUrl } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description:
    'Portafolio completo de servicios médicos y diagnósticos de DariLab IPS en Tauramena, Casanare: medicina, laboratorio clínico, odontología, salud ocupacional, imagenología, CRC y asesorías.',
};

export default function ServicesPage() {
  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-8">
      <div className="text-center max-w-2xl mx-auto mt-6 mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B3990] mb-4">Nuestros Servicios</h1>
        <p className="text-slate-600">
          En DariLab ofrecemos un portafolio completo de servicios médicos y diagnósticos con equipos de última tecnología y profesionales altamente calificados.
        </p>
      </div>
      
      {categories.map(category => {
        const categoryServices = servicesData.filter(svc => svc.categories.includes(category));
        if (categoryServices.length === 0) return null;
        
        return (
          <section key={category} className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#86A06D] rounded-full inline-block"></span>
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryServices.map(svc => {
                const Icon = svc.icon;
                const t = svc.theme;
                return (
                  <Link href={`/servicios/${svc.id}`} key={svc.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group flex flex-col h-full">
                    <div className="h-40 overflow-hidden relative">
                      <div className={`absolute inset-0 ${t.overlay} group-hover:bg-transparent transition-colors z-10`} />
                      <img src={assetUrl(svc.image)} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className={`w-12 h-12 rounded-xl border border-white flex justify-center items-center mb-4 -mt-12 z-20 relative shadow-sm ${t.solid} text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">{svc.title}</h3>
                      <p className="text-sm text-slate-500 line-clamp-3 mb-4 flex-1">{svc.description}</p>
                      <div className="mt-auto flex items-center text-sm font-bold text-slate-600 group-hover:text-[#86A06D] transition-colors">
                        Ver detalle
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
