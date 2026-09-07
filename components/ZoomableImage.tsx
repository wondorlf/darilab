'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function ZoomableImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');

  const close = useCallback(() => {
    setOpen(false);
    setZoomed(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const handleImgClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!zoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      setOrigin(
        `${((e.clientX - rect.left) / rect.width) * 100}% ${((e.clientY - rect.top) / rect.height) * 100}%`
      );
    }
    setZoomed((z) => !z);
  };

  return (
    <>
      <figure
        className={`relative group cursor-zoom-in ${className}`}
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className="rounded-2xl w-full h-72 md:h-[26rem] object-cover shadow-sm" />
        <span className="absolute inset-0 rounded-2xl bg-[#2B3990]/0 group-hover:bg-[#2B3990]/25 transition-colors flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#2B3990] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
            <ZoomIn className="w-4 h-4" />
            Ampliar imagen
          </span>
        </span>
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <p className="absolute top-5 left-5 text-white/60 text-xs">
            {zoomed ? 'Toque para reducir' : 'Toque la imagen para hacer zoom'}
          </p>
          <img
            src={src}
            alt={alt}
            onClick={(e) => { e.stopPropagation(); handleImgClick(e); }}
            className={`max-w-full max-h-[90vh] object-contain rounded-lg transition-transform duration-300 ease-out ${zoomed ? 'cursor-zoom-out scale-[2.4]' : 'cursor-zoom-in'}`}
            style={{ transformOrigin: origin }}
          />
        </div>
      )}
    </>
  );
}
