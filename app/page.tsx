import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Apple, ShieldCheck, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/services';
import HeroCarousel from '@/components/HeroCarousel';
import PromoModal from '@/components/PromoModal';
import { EMAIL, WHATSAPP_DISPLAY } from '@/lib/contact';
import { assetUrl } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Medicina, Laboratorio Clínico y Salud Ocupacional en Tauramena',
  description:
    'DariLab IPS es tu IPS de confianza en Tauramena, Casanare: medicina general y especializada, laboratorio clínico, odontología, rayos X, ecografías, salud ocupacional y CRC. Agenda tu cita por WhatsApp al ' + WHATSAPP_DISPLAY + '.',
  openGraph: {
    title: 'DariLab IPS | Medicina y Laboratorio Clínico en Tauramena, Casanare',
    description:
      'Medicina general y especializada, laboratorio clínico, odontología, salud ocupacional, imagenología y más. Agenda tu cita por WhatsApp al ' + WHATSAPP_DISPLAY + '.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'DariLab IPS',
  url: 'https://darilabips.com',
  telephone: '+573142384325',
  email: EMAIL,
  image: 'https://darilabips.com/logo.jpeg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Carrera 7 # 5 - 26, Barrio Gavan',
    addressLocality: 'Tauramena',
    addressRegion: 'Casanare',
    addressCountry: 'CO',
  },
  sameAs: ['https://www.facebook.com/profile.php?id=100063478873317'],
  priceRange: '$$',
};

export default function DariLabHomePage() {
  const highlightServices = servicesData.filter(svc => svc.highlight);

  return (
    <main className="flex-1 max-w-[1440px] mx-auto w-full p-4 md:p-6 lg:p-8 flex flex-col gap-10">

      {/* Datos estructurados para motores de búsqueda (Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Promo Splash Modal */}
      <PromoModal />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Services Highlight */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-4">
           <div>
             <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Servicios Destacados</h2>
             <p className="text-slate-500 mt-2 text-sm max-w-2xl">Conozca nuestros servicios médicos y de laboratorio más solicitados, pensados para el bienestar de nuestros pacientes corporativos y particulares.</p>
           </div>
           <Link href="/servicios" className="text-sm font-bold text-[#00AEEF] hover:text-[#009bd6] flex items-center gap-1 group whitespace-nowrap">
             Ver todo el portafolio
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightServices.map(svc => {
            const Icon = svc.icon;
            const t = svc.theme;
            return (
              <Link href={`/servicios/${svc.id}`} key={svc.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="h-32 overflow-hidden relative">
                  <div className={`absolute inset-0 ${t.overlay} group-hover:bg-transparent transition-colors z-10`} />
                  <img src={assetUrl(svc.image)} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className={`w-10 h-10 rounded-xl ${t.bgLight} ${t.text} flex justify-center items-center mb-3 -mt-10 z-20 relative shadow-sm border border-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{svc.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-3 mb-3 flex-1">{svc.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Blog & News Section */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm mb-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Blog de Salud</h2>
            <p className="text-slate-500 mt-1 text-sm">Artículos de interés y consejos de nuestros especialistas.</p>
          </div>
          <a href="#" className="hidden sm:flex text-sm font-bold text-[#00AEEF] hover:underline items-center gap-1">Ver todos los artículos</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group flex flex-col sm:flex-row items-center gap-5 cursor-pointer p-4 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-full sm:w-32 h-32 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] group-hover:scale-105 transition-transform duration-300">
                <Apple className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1 w-full text-left">
              <p className="text-xs text-slate-400 font-bold uppercase mb-1">Nutrición • 12 Oct</p>
              <h4 className="text-lg font-bold text-slate-700 group-hover:text-[#00AEEF] transition-colors mb-2">5 consejos para una dieta balanceada en la oficina</h4>
              <p className="text-sm text-slate-500 line-clamp-2">Descubra cómo mantener niveles óptimos de energía durante su jornada con estos simples hábitos de alimentación.</p>
            </div>
          </div>
          
          <div className="group flex flex-col sm:flex-row items-center gap-5 cursor-pointer p-4 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-full sm:w-32 h-32 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-[#86A06D]/10 flex items-center justify-center text-[#86A06D] group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1 w-full text-left">
              <p className="text-xs text-slate-400 font-bold uppercase mb-1">Prevención • 08 Oct</p>
              <h4 className="text-lg font-bold text-slate-700 group-hover:text-[#86A06D] transition-colors mb-2">La importancia de su chequeo ocupacional anual</h4>
              <p className="text-sm text-slate-500 line-clamp-2">Explicamos por qué realizarse las pruebas de ingreso y periódicas es vital para su seguridad a largo plazo.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
