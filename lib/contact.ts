// Información de contacto centralizada de DariLab IPS.
// Edite aquí si cambian los números, correo o mensajes por defecto.

// Número de WhatsApp en formato internacional sin "+" (solo dígitos).
// +57 314 238 4325 -> 573142384325
export const WHATSAPP_NUMBER = '573142384325';

// Número tal como se muestra al usuario en el sitio.
export const WHATSAPP_DISPLAY = '314 238 4325';

// Líneas telefónicas mostradas en la página de Contacto.
export const PHONE_NUMBERS = {
  whatsapp: '+573142384325',
  line2: '+573103291099',
  line3: '+573106799621',
};

export const EMAIL = 'darilab1999@gmail.com';

// Mensaje por defecto al abrir el chat de WhatsApp.
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola DariLab IPS 👋, vengo de su página web y quiero más información.';

/**
 * Construye un enlace wa.me con mensaje pre-cargado.
 * Uso: window.open(whatsappLink(texto), '_blank', 'noopener')
 */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}