/**
 * Envía datos de formulario a Web3Forms, que redirige por correo al buzón
 * asociado con la access_key (contacto@, autorizaciones@, etc.).
 *
 * @param accessKey - Web3Forms access key que determina el destinatario
 * @param data     - Objeto con los campos del formulario
 * @returns        - Respuesta de la API (success / error)
 */
export async function submitWeb3Forms(
  accessKey: string,
  data: Record<string, string>,
): Promise<{ success: boolean; message: string }> {
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
