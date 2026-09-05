import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { Phone, MessageCircle, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import ServiceForm from './ServiceForm';
import { whatsappLink } from '@/lib/contact';

// Exportación estática: genera una página HTML por cada servicio.
export function generateStaticParams() {
  return servicesData.map(service => ({ id: service.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find(s => s.id === id);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/servicios/${service.id}` },
    openGraph: {
      title: `${service.title} | DariLab IPS`,
      description: service.description,
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find(s => s.id === resolvedParams.id);
  
  if (!service) {
    notFound();
  }
  
  const Icon = service.icon;
  const bookingMessage = `Hola, me gustaría agendar una cita para el servicio de ${service.title}. Mis datos son:`;
  const infoMessage = `Hola, quiero más información sobre el servicio de ${service.title}.`;

  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
      {/* Service Details Main Column */}
      <div className="flex-1 flex flex-col gap-8">
        
        {/* Service Hero */}
        <div className="relative rounded-3xl overflow-hidden h-64 md:h-96 flex items-end">
          <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
          <div className="relative z-10 p-6 md:p-10 w-full flex items-center gap-6">
            <div className={`p-4 ${service.theme.solid} rounded-2xl text-white shadow-lg hidden sm:flex`}>
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <Link href="/servicios" className="text-sky-300 hover:text-white text-xs font-bold uppercase tracking-widest mb-2 block transition-colors">
                &larr; Volver a Servicios
              </Link>
              <h1 className="text-white text-3xl md:text-5xl font-bold">{service.title}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Sobre el servicio</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {service.description}
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            En DariLab IPS, nuestro servicio de <strong>{service.title}</strong> cuenta con profesionales altamente capacitados y tecnología de vanguardia para asegurar diagnósticos precisos y un tratamiento efectivo. Cuidamos cada detalle para brindarle a usted y a su familia la tranquilidad y confianza que merecen en el cuidado de su salud.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
             <div>
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <CalendarDays className={`w-5 h-5 ${service.theme.solid.replace('bg-', 'text-')}`} />
                 Atención rápida y segura
               </h3>
               <p className="text-sm text-slate-500 mt-1">Nuestros asesores confirmarán su turno en menos de 2 horas tras la solicitud.</p>
             </div>
          </div>

          {service.recommendations && service.recommendations.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className={`w-8 h-8 rounded-lg ${service.theme.light} ${service.theme.text} flex items-center justify-center`}>
                  <Icon className="w-4 h-4" />
                </span>
                Recomendaciones y Preparación
              </h3>
              <ul className="space-y-3">
                {service.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                    <div className={`mt-0.5 w-6 h-6 rounded-full ${service.theme.countBg} ${service.theme.countText} flex items-center justify-center flex-shrink-0 text-xs font-bold`}>
                      {i + 1}
                    </div>
                    <span className="text-sm leading-relaxed">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Reservation */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-28">
           <h3 className="text-xl font-bold text-slate-800 mb-2">Solicitar Cita</h3>
           <p className="text-sm text-slate-500 mb-6">Elija el canal de su preferencia para agendar para <strong>{service.title}</strong>.</p>
           
           <div className="flex flex-col gap-3 mb-6">
             <a href={whatsappLink(bookingMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm">
               <Phone className="w-5 h-5" />
               Agendar por WhatsApp
             </a>
             <a href={whatsappLink(infoMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-slate-800 text-white font-bold py-3 px-4 rounded-xl hover:bg-slate-900 transition-colors shadow-sm">
               <MessageCircle className="w-5 h-5" />
               Consultar por WhatsApp
             </a>
           </div>

           <div className="relative py-4 mb-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-400 font-medium">o llene el formulario</span>
              </div>
           </div>

           {/* Form Component customized for this service */}
           <ServiceForm defaultServiceId={service.id} />
        </div>
      </div>
    </main>
  );
}
