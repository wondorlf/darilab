import React from 'react';
import type { Metadata } from 'next';
import { Target, Lightbulb, HeartPulse, ShieldCheck, Microscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conozca la historia, misión, visión y valores de DariLab IPS: una institución prestadora de servicios de salud comprometida con la calidad y el bienestar de la comunidad de Tauramena, Casanare.',
};

export default function NosotrosPage() {
  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-10">
      
      {/* Banner / Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-slate-900 h-80 md:h-[400px] flex items-center">
        <div className="absolute inset-0 grid grid-cols-2">
           <img 
             src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop" 
             alt="Equipo médico" 
             className="w-full h-full object-cover opacity-60"
           />
           <img 
             src="/ubicacion.jpeg" 
             alt="Instalaciones del laboratorio" 
             className="w-full h-full object-cover opacity-60"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B3990]/90 to-transparent flex flex-col justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <span className="text-[#00AEEF] font-bold uppercase text-sm tracking-widest block mb-2">Sobre Nosotros</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">Comprometidos con su salud y bienestar</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              En DariLab IPS, combinamos la experiencia médica con tecnología avanzada para brindar atención integral y diagnósticos precisos.
            </p>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2B3990]/10 text-[#2B3990] font-bold text-xs uppercase tracking-wider mb-4">
            <HeartPulse className="w-4 h-4" /> Nuestra Historia
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Años de experiencia cuidando vidas</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
              Desde nuestra fundación, DariLab ha tenido un objetivo claro: democratizar el acceso a servicios de salud y de laboratorio clínico de la más alta calidad en la región.
            </p>
            <p>
              Nacimos de la vocación de un grupo de profesionales de la salud que vieron la necesidad de un centro de diagnóstico integral que no solo ofreciera resultados rápidos y precisos, sino también un trato humano y cercano a cada uno de nuestros pacientes.
            </p>
            <p>
              A lo largo de los años, hemos crecido, incorporando tecnología de punta y ampliando nuestro portafolio para incluir desde medicina general y especializada hasta salud ocupacional integral para el sector empresarial. Hoy, somos un referente de confianza y profesionalidad en nuestra comunidad.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1631815587646-b85a1bb02246?q=80&w=800&auto=format&fit=crop" alt="Historia 1" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-sm" />
          <img src="/ubicacion.jpeg" alt="Nuestras Instalaciones" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-sm mt-8" />
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Misión */}
        <div className="bg-[#2B3990] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Target className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#00AEEF]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              Brindar servicios de salud integrales y diagnósticos de laboratorio confiables, seguros y oportunos, apoyados en tecnología avanzada y un equipo humano altamente calificado, comprometido con la excelencia científica y un trato cálido para mejorar la calidad de vida de nuestros usuarios.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-[#00AEEF] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Lightbulb className="w-32 h-32" />
          </div>
          <div className="relative z-10 w-full h-full flex flex-col">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-white/90 leading-relaxed text-lg flex-1">
              Consolidarnos para el año 2028 como la Institución Prestadora de Servicios de Salud (IPS) líder y referente en la región, reconocida por la calidad superior de sus diagnósticos, su constante innovación tecnológica y organizativa, y su firme compromiso con la mejora continua y el bienestar integral de la comunidad.
            </p>
          </div>
        </div>

      </section>

      {/* Valores */}
      <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Nuestros Valores</h2>
          <p className="text-slate-600">Los pilares que fundamentan cada una de nuestras acciones y nuestro compromiso con sus resultados.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-[#86A06D]/10 text-[#86A06D] rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Confiabilidad</h3>
            <p className="text-sm text-slate-500">Resultados precisos y seguros bajo estrictos estándares de calidad.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-[#00AEEF]/10 text-[#00AEEF] rounded-xl flex items-center justify-center mx-auto mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Humanidad</h3>
            <p className="text-sm text-slate-500">Atención respetuosa, cálida y empática pensando en el paciente.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-[#2B3990]/10 text-[#2B3990] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Innovación</h3>
            <p className="text-sm text-slate-500">Actualización constante de nuestros equipos y conocimientos médicos.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Excelencia</h3>
            <p className="text-sm text-slate-500">Compromiso inquebrantable con ser los mejores en lo que hacemos.</p>
          </div>

        </div>
      </section>

      {/* Derechos y Deberes */}
      <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Derechos y Deberes</h2>
          <p className="text-slate-600">Conozca sus derechos como paciente y sus deberes para con su salud y nuestra institución.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Derechos */}
          <div className="bg-sky-50 rounded-2xl p-6 md:p-8 flex flex-col h-full border border-sky-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00AEEF] rounded-xl text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Sus Derechos</h3>
            </div>
            <ul className="space-y-4 text-slate-600 flex-1">
              <li className="flex items-start gap-3">
                <span className="text-[#00AEEF] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Recibir trato digno, respetuoso y considerado por parte de todo nuestro personal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AEEF] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Recibir atención médica e integral de manera oportuna y con calidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AEEF] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Mantener la estricta confidencialidad de su historia clínica y sus datos personales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AEEF] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Recibir información clara, completa y comprensible sobre su diagnóstico y tratamiento.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AEEF] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Elegir libremente a su médico dentro de la disponibilidad de la IPS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AEEF] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Aceptar o rechazar cualquier tratamiento mediante consentimiento informado.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00AEEF] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Poder presentar peticiones, quejas, reclamos o sugerencias sobre el servicio.</span>
              </li>
            </ul>
          </div>

          {/* Deberes */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 flex flex-col h-full border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2B3990] rounded-xl text-white flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Sus Deberes</h3>
            </div>
            <ul className="space-y-4 text-slate-600 flex-1">
              <li className="flex items-start gap-3">
                <span className="text-[#2B3990] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Tratar con respeto y consideración al personal de la salud, administrativo y a otros pacientes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2B3990] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Suministrar información veraz, clara y completa sobre su estado de salud, antecedentes y medicamentos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2B3990] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Cumplir las indicaciones, recomendaciones y tratamientos del equipo de salud.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2B3990] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Llegar puntualmente a sus citas y cancelarlas anticipadamente si no puede asistir.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2B3990] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Cuidar y hacer un uso racional de las instalaciones, equipos y dotación de la IPS.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2B3990] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Pagar oportunamente los servicios, copagos o cuotas moderadoras que le correspondan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2B3990] font-bold text-lg leading-none mt-0.5">•</span>
                <span>Firmar el consentimiento informado antes de cualquier procedimiento clínico que lo requiera.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
