/**
 * Envía datos de formulario a Web3Forms, que redirige por correo al buzón
 * asociado con la access_key configurada en el panel de Web3Forms.
 *
 * Incluye protección anti-spam por honeypot: los bots rellenan campos
 * ocultos que los usuarios reales no ven; si llega con datos, se descarta.
 *
 * @param accessKey - Web3Forms access key que determina el destinatario
 * @param data     - Objeto con los campos del formulario (incluye honeypot)
 * @returns        - Respuesta de la API (success / error)
 */

// Nombre del campo trampa (honeypot). Debe existir como input oculto en el form.
export const HONEYPOT_NAME = 'empresa_web';

export async function submitWeb3Forms(
  accessKey: string,
  data: Record<string, string>,
): Promise<{ success: boolean; message: string }> {
  // Honeypot: si el campo oculto trae contenido, es un bot.
  // Se responde "éxito" simulado para no revelar el filtro.
  if (data[HONEYPOT_NAME] && data[HONEYPOT_NAME].trim() !== '') {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, message: 'Formulario enviado correctamente.' };
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: accessKey, ...data }),
    });
    const json = await res.json();
    if (json.success) {
      return { success: true, message: 'Formulario enviado correctamente.' };
    }
    return { success: false, message: json.message || 'Error al enviar. Intente de nuevo.' };
  } catch {
    return { success: false, message: 'Error de conexión. Verifique su internet.' };
  }
}
