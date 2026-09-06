'use client';

import React, { useState } from 'react';
import { Send, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { submitWeb3Forms } from '@/lib/web3forms';
import { WEB3FORMS, EMAILS } from '@/lib/contact';

export default function PqrsfPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    tipoSolicitud: 'Petición',
    tipoPersona: 'Natural',
    tipoDocumento: 'CC',
    numeroDocumento: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    descripcion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const payload: Record<string, string> = {
      tipo_solicitud: formData.tipoSolicitud,
      tipo_persona: formData.tipoPersona,
      tipo_documento: formData.tipoDocumento,
      numero_documento: formData.numeroDocumento,
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      telefono: formData.telefono,
      correo: formData.email,
      descripcion: formData.descripcion,
      _subject: `PQRSF — ${formData.tipoSolicitud} de ${formData.nombres} ${formData.apellidos}`,
      _captcha: 'false',
    };

    const result = await submitWeb3Forms(WEB3FORMS.pqrsf, payload);
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.message);
    }
  };

  return (
    <main className="flex-1 w-full bg-slate-50 flex flex-col items-center">
      
      {/* Full Width Header Hero */}
      <div className="w-full bg-[#00AEEF] overflow-hidden flex items-center justify-center py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2B3990]/60"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">PQRSF</h1>
          <p className="text-white/90 text-lg">
            Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1000px] mx-auto p-4 md:p-6 lg:p-8 -mt-10 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          <div className="bg-sky-50 p-6 md:p-8 border-b border-sky-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Formulario de Radicación</h2>
            <p className="text-slate-600 text-sm md:text-base">
              A través de este formulario usted puede presentar sus peticiones, quejas, reclamos, sugerencias o felicitaciones. Por favor diligencie la mayor cantidad de información posible para brindarle una respuesta oportuna.
            </p>
          </div>

          <div className="p-6 md:p-8">
            {isSuccess ? (
              <div className="text-center py-12 px-6">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Solicitud Radicada!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Su {formData.tipoSolicitud.toLowerCase()} ha sido enviada a <strong>{EMAILS.autorizaciones}</strong>. Recibirá una respuesta por correo electrónico a <strong>{formData.email}</strong>.
                </p>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        tipoSolicitud: 'Petición', tipoPersona: 'Natural', tipoDocumento: 'CC',
                        numeroDocumento: '', nombres: '', apellidos: '', telefono: '', email: '', descripcion: ''
                      });
                    }}
                    className="bg-slate-100 text-slate-700 px-6 py-2 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    Nueva Solicitud
                  </button>
                  <Link href="/" className="bg-[#2B3990] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#20296b] transition-colors">
                    Volver al Inicio
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Tipo de Solicitud */}
                <div className="col-span-full">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tipo de Solicitud <span className="text-red-500">*</span></label>
                  <select 
                    name="tipoSolicitud" 
                    value={formData.tipoSolicitud}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800 font-medium"
                    required
                  >
                    <option value="Petición">Petición</option>
                    <option value="Queja">Queja</option>
                    <option value="Reclamo">Reclamo</option>
                    <option value="Sugerencia">Sugerencia</option>
                    <option value="Felicitación">Felicitación</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Tipo de Persona <span className="text-red-500">*</span></label>
                    <select 
                      name="tipoPersona" 
                      value={formData.tipoPersona}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800"
                      required
                    >
                      <option value="Natural">Persona Natural</option>
                      <option value="Juridica">Persona Jurídica</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Tipo de Documento <span className="text-red-500">*</span></label>
                    <select 
                      name="tipoDocumento" 
                      value={formData.tipoDocumento}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800"
                      required
                    >
                      <option value="CC">Cédula de Ciudadanía</option>
                      <option value="CE">Cédula de Extranjería</option>
                      <option value="TI">Tarjeta de Identidad</option>
                      <option value="NIT">NIT</option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Número de Documento <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="numero_documento"
                      value={formData.numeroDocumento}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800"
                      placeholder="Ej. 11223344"
                      required
                    />
                  </div>
                  <div className="hidden md:block"></div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nombres / Razón Social <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800"
                      placeholder="Ingrese sus nombres o razón social"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Apellidos <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800"
                      placeholder="Ingrese sus apellidos"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono de Contacto <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800"
                      placeholder="Ej. 300 000 0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Correo Electrónico <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Descripción de los hechos <span className="text-red-500">*</span></label>
                  <p className="text-slate-500 text-xs mb-3">Sea claro y detallado en la descripción. Indique fechas, lugares y circunstancias relacionadas con su solicitud.</p>
                  <textarea 
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:bg-white transition-all text-slate-800 resize-none line-clamp-10"
                    placeholder="Detalle su solicitud aquí..."
                    required
                  ></textarea>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 text-center">
                    <p className="font-bold text-sm">{error}</p>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#00AEEF] text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#009bd6] transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Radicar Solicitud <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center sm:text-left mt-2 sm:mt-0">
                    Al radicar, su solicitud será enviada a <strong>{EMAILS.autorizaciones}</strong>. Al enviarla, usted autoriza el tratamiento de sus datos personales conforme a nuestra Política de Tratamiento de Datos.
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
