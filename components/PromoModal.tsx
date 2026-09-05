'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CalendarHeart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check local storage for the dismiss timestamp
    const dismissedAt = localStorage.getItem('promo_dismissed_at');
    const now = Date.now();
    const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
    
    let shouldShow = true;

    if (dismissedAt) {
      const timeSinceDismissed = now - parseInt(dismissedAt, 10);
      if (timeSinceDismissed < SESSION_TIMEOUT) {
        shouldShow = false;
      }
    }

    if (shouldShow) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    localStorage.setItem('promo_dismissed_at', Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full text-slate-700 hover:bg-white transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Contenido Visual */}
            <div className="relative w-full h-auto flex flex-col justify-center items-center">
               <Image 
                 src="/ecografias.jpeg" 
                 alt="Promoción Especial"
                 width={1200}
                 height={800}
                 className="w-full h-auto object-cover max-h-[80vh]"
               />
               <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent flex flex-col md:flex-row items-center justify-between gap-4">
                 <div className="text-white">
                   <h3 className="text-2xl font-bold mb-1">Nuevo Servicio de Ecografías</h3>
                   <p className="text-white/80">Imágenes precisas que cuidan tu salud.</p>
                 </div>
                 <Link 
                   href="/servicios/ecografias" 
                   onClick={handleClose}
                   className="shrink-0 bg-[#00AEEF] text-white font-bold py-3 px-8 rounded-full hover:bg-[#009bd6] transition-colors shadow-lg"
                 >
                   Ver detalles
                 </Link>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
