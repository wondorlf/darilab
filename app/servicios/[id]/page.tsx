import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  servicesData,
  getParentService,
  getRelatedServices,
  getChildServices,
} from '@/data/services';
import { CalendarDays, CornerDownRight, Layers } from 'lucide-react';
import Link from 'next/link';
import ServiceForm from './ServiceForm';
import { assetUrl } from '@/lib/assets';

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
  const parent = getParentService(service);
  const children = getChildServices(service.id);
  const related = getRelatedServices(service).filter(r => r.id !== service.id);

  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
      {/* Service Details Main Column */}
      <div className="flex-1 flex flex-col gap-8">
        
        {/* Service Hero */}
        <div className="relative rounded-3xl overflow-hidden h-64 md:h-96 flex items-end">
          <img src={assetUrl(service.image)} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
          <div className="relative z-10 p-6 md:p-10 w-full flex items-center gap-6">
            <div className={`p-4 ${service.theme.solid} rounded-2xl text-white shadow-lg hidden sm:flex`}>
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <nav aria-label="Migas de pan" className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-2 flex flex-wrap items-center gap-2">
                <Link href="/servicios" className="hover:text-white transition-colors">
                  &larr; Servicios
                </Link>
                {parent && (
                  <>
                    <span aria-hidden="true" className="text-sky-500">/</span>
                    <Link href={`/servicios/${parent.id}`} className="hover:text-white transition-colors inline-flex items-center gap-1">
                      <CornerDownRight className="w-3 h-3" />
                      {parent.title}
                    </Link>
                  </>
                )}
              </nav>
              <h1 className="text-white text-3xl md:text-5xl font-bold">{service.title}</h1>
              {parent && (
                <p className="text-white/80 text-sm mt-2">
                  Parte de <Link href={`/servicios/${parent.id}`} className="underline hover:text-white">{parent.title}</Link>
                </p>
              )}
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

          {(service.preparationGroups && service.preparationGroups.length > 0) ? (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className={`w-8 h-8 rounded-lg ${service.theme.light} ${service.theme.text} flex items-center justify-center`}>
                  <Icon className="w-4 h-4" />
                </span>
                Recomendaciones y Preparación
              </h3>
              <div className="space-y-5">
                {service.preparationGroups.map((group, gi) => (
                  <div key={gi} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                    <div className={`px-5 py-3 ${service.theme.solid} ${service.theme.countText === 'text-white' ? 'text-white' : ''} font-bold text-sm uppercase tracking-wide`}>
                      {group.title}
                    </div>
                    <ul className="p-4 space-y-3">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <div className={`mt-0.5 w-6 h-6 rounded-full ${service.theme.countBg} ${service.theme.countText} flex items-center justify-center flex-shrink-0 text-xs font-bold`}>
                            {i + 1}
                          </div>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : service.recommendations && service.recommendations.length > 0 && (
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

          {children.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className={`w-8 h-8 rounded-lg ${service.theme.light} ${service.theme.text} flex items-center justify-center`}>
                  <Layers className="w-4 h-4" />
                </span>
                Exámenes y servicios incluidos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {children.map(child => {
                  const ChildIcon = child.icon;
                  return (
                    <Link
                      key={child.id}
                      href={`/servicios/${child.id}`}
                      className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/5 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-lg ${child.theme.solid} text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                        <ChildIcon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-bold text-slate-800 text-sm group-hover:text-[#0077B6] transition-colors">{child.title}</span>
                        <span className="text-slate-500 text-xs line-clamp-2 mt-0.5">{child.description}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className={`w-8 h-8 rounded-lg ${service.theme.light} ${service.theme.text} flex items-center justify-center`}>
                  <Layers className="w-4 h-4" />
                </span>
                {service.parentId ? 'Otros en esta línea' : 'Servicios relacionados'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {related.map(rel => (
                  <Link
                    key={rel.id}
                    href={`/servicios/${rel.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-[#00AEEF] hover:text-[#0077B6] transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full ${rel.theme.solid}`} aria-hidden="true" />
                    {rel.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Reservation */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-28">
           <h3 className="text-xl font-bold text-slate-800 mb-2">Solicitar Cita</h3>
           <p className="text-sm text-slate-500 mb-6">Diligencie el formulario y elija si enviarlo por WhatsApp o correo para agendar <strong>{service.title}</strong>.</p>

           {/* Form Component customized for this service */}
           <ServiceForm defaultServiceId={service.id} serviceTitle={service.title} />
        </div>
      </div>
    </main>
  );
}
