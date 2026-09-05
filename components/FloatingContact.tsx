'use client';
import React, { useState, useMemo } from 'react';
import { HelpCircle, X, Search, MessageSquare, ChevronLeft, FileText } from 'lucide-react';
import { servicesData } from '@/data/services';
import { useRouter } from 'next/navigation';
import { whatsappLink } from '@/lib/contact';

export default function FloatingContact() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState<'menu' | 'search' | 'contact'>('menu');
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      'Hola DariLab IPS 👋, quiero más información.',
      '',
      `*Nombre:* ${data.get('nombre')}`,
      `*Correo:* ${data.get('correo')}`,
      `*Teléfono:* ${data.get('telefono')}`,
      '',
      '*Consulta:*',
      data.get('consulta'),
    ].filter(Boolean).join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener');
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setActiveView('menu');
    }, 3000);
  };

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const normalize = (str: string) => 
      str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
    const query = normalize(searchQuery);

    return servicesData.filter(svc => {
      const matchTitle = normalize(svc.title).includes(query);
      const matchDesc = normalize(svc.description).includes(query);
      const matchId = normalize(svc.id).includes(query);
      const matchCategory = svc.categories.some(c => normalize(c).includes(query));
      
      const matchRecommendations = svc.recommendations 
        ? svc.recommendations.some(r => normalize(r).includes(query))
        : false;

      return matchTitle || matchDesc || matchId || matchCategory || matchRecommendations;
    });
  }, [searchQuery]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => { setIsOpen(true); setActiveView('menu'); setSearchQuery(''); }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#2B3990] text-white rounded-full shadow-lg hover:bg-[#202b6d] hover:scale-105 transition-all flex items-center justify-center animate-bounce-subtle"
        aria-label="Abrir centro de ayuda"
      >
        <HelpCircle className="w-8 h-8" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center p-4 sm:p-0 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full sm:max-w-md shadow-2xl overflow-hidden animate-in sm:zoom-in-95 slide-in-from-bottom duration-200 flex flex-col max-h-[90vh]">
            <div className={`p-6 text-white relative flex-shrink-0 flex items-center transition-colors duration-300 ${activeView === 'contact' ? 'bg-[#86A06D]' : activeView === 'search' ? 'bg-[#00AEEF]' : 'bg-[#2B3990]'}`}>
              {activeView !== 'menu' && (
                <button 
                  onClick={() => setActiveView('menu')}
                  className="mr-3 text-white/80 hover:text-white transition-colors"
                  aria-label="Volver atrás"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              <div>
                <h3 className="text-xl font-bold">
                  {activeView === 'menu' ? 'Centro de Ayuda' : activeView === 'search' ? 'Buscar Servicio' : 'Contáctenos'}
                </h3>
                <p className="text-white/90 text-sm mt-1 font-medium">
                  {activeView === 'menu' ? '¿En qué podemos ayudarle?' : activeView === 'search' ? 'Encuentre lo que necesita' : 'Déjenos sus datos'}
                </p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto w-full">
              {activeView === 'menu' && (
                <div className="space-y-4">
                  <button 
                    onClick={() => setActiveView('search')}
                    className="w-full flex items-center p-4 bg-slate-50 hover:bg-[#00AEEF]/10 rounded-2xl border border-slate-100 transition-colors text-left group"
                  >
                    <div className="w-12 h-12 bg-[#00AEEF]/10 text-[#00AEEF] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-[#00AEEF]/20 transition-all">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-800 text-lg group-hover:text-[#00AEEF] transition-colors leading-tight">Buscar un servicio</span>
                      <span className="text-slate-500 text-sm">Encuentra especialidades</span>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      router.push('/pqrsf');
                    }}
                    className="w-full flex items-center p-4 bg-slate-50 hover:bg-[#00AEEF]/10 rounded-2xl border border-slate-100 transition-colors text-left group"
                  >
                    <div className="w-12 h-12 bg-sky-100/50 text-[#00AEEF] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-sky-100 transition-all">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-800 text-lg group-hover:text-[#00AEEF] transition-colors leading-tight">PQRSF</span>
                      <span className="text-slate-500 text-sm">Peticiones, quejas y reclamos</span>
                    </div>
                  </button>

                  <button 
                    onClick={() => setActiveView('contact')}
                    className="w-full flex items-center p-4 bg-slate-50 hover:bg-[#86A06D]/10 rounded-2xl border border-slate-100 transition-colors text-left group"
                  >
                    <div className="w-12 h-12 bg-[#86A06D]/10 text-[#86A06D] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-[#86A06D]/20 transition-all">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-800 text-lg group-hover:text-[#86A06D] transition-colors leading-tight">Solicitar más información</span>
                      <span className="text-slate-500 text-sm">Contáctenos directamente</span>
                    </div>
                  </button>
                </div>
              )}

              {activeView === 'search' && (
                <div className="space-y-4 h-[350px] flex flex-col">
                  <div className="relative flex-shrink-0">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Ej. Medicina General, Optometría..." 
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 focus:border-[#00AEEF] transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                    {searchQuery.trim() === '' ? (
                       <div className="text-center text-slate-400 py-12 px-4 shadow-sm border border-slate-100 bg-slate-50 rounded-xl">
                          <Search className="w-8 h-8 mx-auto mb-3 text-slate-300" />
                          <span className="text-sm font-medium">Empiece a escribir para buscar servicios</span>
                       </div>
                    ) : filteredServices.length > 0 ? (
                      filteredServices.map(svc => {
                         const Icon = svc.icon;
                         return (
                          <button 
                            key={svc.id} 
                            onClick={() => {
                              setIsOpen(false);
                              router.push(`/servicios/${svc.id}`);
                            }}
                            className="w-full text-left flex items-center p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-100 transition-colors group shadow-sm hover:shadow"
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${svc.theme.solid} mr-4 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="block font-bold text-slate-800 text-sm group-hover:text-[#00AEEF] transition-colors leading-tight">{svc.title}</span>
                              <span className="text-slate-500 text-xs line-clamp-1 mt-0.5">{svc.description}</span>
                            </div>
                          </button>
                         )
                      })
                    ) : (
                      <div className="text-center text-slate-500 py-12 px-4 shadow-sm border border-slate-100 bg-slate-50 rounded-xl">
                        <span className="text-sm font-medium">No se encontraron servicios para &quot;{searchQuery}&quot;</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeView === 'contact' && (
                submitted ? (
                  <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl border border-emerald-200 text-center my-4 animate-in fade-in zoom-in-95 duration-300">
                    <p className="font-bold mb-2 text-lg">¡Mensaje listo en WhatsApp!</p>
                    <p className="text-sm font-medium">Se abrió WhatsApp con sus datos. Presione <strong>Enviar</strong> para completarlo.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-300">
                    <div className="space-y-1.5">
                      <label htmlFor="modal-nombre" className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Nombres y Apellidos</label>
                      <input required name="nombre" id="modal-nombre" type="text" placeholder="Ej. Ana Gómez" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#86A06D]/20 focus:border-[#86A06D] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="modal-correo" className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Correo Electrónico</label>
                      <input required name="correo" id="modal-correo" type="email" placeholder="correo@ejemplo.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#86A06D]/20 focus:border-[#86A06D] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="modal-telefono" className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Teléfono</label>
                      <input required name="telefono" id="modal-telefono" type="tel" placeholder="+57 300 000 0000" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#86A06D]/20 focus:border-[#86A06D] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="modal-consulta" className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Servicio o Descripción</label>
                      <textarea required name="consulta" id="modal-consulta" rows={3} placeholder="¿En qué podemos ayudarle?" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#86A06D]/20 focus:border-[#86A06D] transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl mt-2 transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Enviar por WhatsApp
                    </button>
                  </form>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
