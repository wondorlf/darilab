'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CalendarHeart } from 'lucide-react';
import Link from 'next/link';
import { assetUrl } from '@/lib/assets';

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
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
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
            <div className="relative w-full">
               <img
                 src={assetUrl('/promo-ginecologia.jpeg')}
                 alt="Miércoles de Ginecología y Obstetricia en DariLab IPS"
                 className="w-full h-auto max-h-[70vh] object-contain bg-pink-50"
               />
            </div>
            <div className="bg-gradient-to-r from-[#2B3990] to-[#00AEEF] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white text-center sm:text-left">
                <h3 className="text-lg font-bold leading-tight">Miércoles de Ginecología y Obstetricia</h3>
                <p className="text-white/90 text-sm">Atención especializada para tu salud íntima, reproductiva y maternal.</p>
              </div>
              <Link
                href="/servicios/ginecologia-y-obstetricia"
                onClick={handleClose}
                className="shrink-0 bg-white text-[#2B3990] font-bold py-2.5 px-6 rounded-full hover:bg-pink-50 transition-colors shadow-lg"
              >
                Agenda tu cita
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
