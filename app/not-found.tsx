import type {Metadata} from 'next';
import Link from 'next/link';
import {Search} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que busca no existe o fue movida.',
  robots: {index: false, follow: false},
};

export default function NotFound() {
  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 flex items-center justify-center">
      <section className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2B3990]/10 text-[#2B3990] mb-6">
          <Search className="w-7 h-7" aria-hidden="true" />
        </div>
        <p className="text-[#0077B6] font-bold uppercase text-sm tracking-widest mb-2">
          Error 404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Página no encontrada
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          La página que busca no existe o fue movida. Puede encontrar lo que
          necesita en nuestros servicios o contactarnos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2B3990] text-white font-semibold hover:bg-[#2B3990]/90 transition-colors"
          >
            Ir al inicio
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            Ver servicios
          </Link>
        </div>
      </section>
    </main>
  );
}
