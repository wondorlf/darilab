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

// Correos electrónicos por departamento (@darilabips.com).
export const EMAILS = {
  contacto: 'contacto@darilabips.com',
  gerencia: 'gerencia@darilabips.com',
  autorizaciones: 'autorizaciones@darilabips.com',
  facturacion: 'facturacion@darilabips.com',
} as const;

// Correo principal (backward compat).
export const EMAIL = EMAILS.contacto;

// Web3Forms access keys (cada key redirige a un buzón de correo diferente).
export const WEB3FORMS = {
  contacto: '2dd64470-cf25-4ac8-98dd-5eb84ce6ded3', // → contacto@darilabips.com
  pqrsf: 'f0323c8c-4301-4c8a-b885-18e9e67b50ef',      // → gerencia@darilabips.com
  booking: '3c3719aa-1f11-4254-ba63-50172c02bb9d', // → autorizaciones@darilabips.com
} as const;

// Mensaje por defecto al abrir el chat de WhatsApp.
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola DariLab IPS 👋, vengo de su página web y quiero más información.';

/**
 * Construye un enlace wa.me con mensaje pre-cargado.
 * Uso: window.open(whatsappLink(texto), '_blank', 'noopener')
 */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}