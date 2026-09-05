'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop",
    title: "CRC - Licencias de Tránsito",
    description: "Centro de Reconocimiento de Conductores para la expedición de certificados médicos para licencias.",
    tag: "Trámites ágiles",
    linkText: "Agenda tu cita CRC",
    linkUrl: "/servicios/crc-licencias"
  },
  {
    image: "/laboratorio_clinico.jpeg",
    title: "Laboratorio Clínico",
    description: "Diagnósticos confiables, resultados que cuidan tu salud. Resultados precisos, entrega oportuna y atención humana.",
    tag: "Calidad que te da confianza",
    linkText: "Conoce más",
    linkUrl: "/servicios/laboratorio-clinico"
  },
  {
    image: "/odontologia.jpeg",
    title: "Servicio de Odontología",
    description: "Cuidamos tu sonrisa, cuidamos tu salud. Tratamientos personalizados y atención integral.",
    tag: "Tu sonrisa es nuestra prioridad",
    linkText: "Agenda tu cita",
    linkUrl: "/servicios/odontologia"
  },
  {
    image: "/rayos_x.jpeg",
    title: "Rayos X",
    description: "Tecnología avanzada para imágenes precisas al cuidado de tu salud. Equipos modernos y atención humanizada.",
    tag: "Diagnósticos con confianza",
    linkText: "Conoce más",
    linkUrl: "/servicios/rayos-x"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] group">
      {slides.map((slide, index) => (
        <Link 
          href={slide.linkUrl}
          key={index}
          className={`absolute inset-0 block transition-all duration-[1500ms] ease-in-out ${index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 pointer-events-none z-0 scale-105'}`}
        >
          <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#2B3990]/95 via-[#2B3990]/80 md:via-[#2B3990]/60 to-transparent"></div>
            
            <div className="relative z-10 w-full h-full flex flex-col justify-end md:justify-center p-6 md:p-16 max-w-2xl pb-16 md:pb-12">
              <span className={`text-[#00AEEF] font-bold uppercase text-xs md:text-sm tracking-widest block mb-2 md:mb-3 transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'}`}>
                {slide.tag}
              </span>
              <h1 className={`text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4 transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-8 opacity-0'}`}>
                {slide.title}
              </h1>
              <p className={`text-white/80 mt-1 md:mt-2 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 md:max-w-xl transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100 delay-700' : 'translate-y-8 opacity-0'}`}>
                {slide.description}
              </p>
              <div className={`transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100 delay-[900ms]' : 'translate-y-8 opacity-0'}`}>
                <span className="bg-[#00AEEF] text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold shadow-sm inline-block hover:bg-[#009bd6] transition-colors">
                  {slide.linkText}
                </span>
              </div>
            </div>
        </Link>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-2 z-30 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.preventDefault(); setCurrentSlide(index); }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-[#00AEEF] w-6 md:w-8' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
