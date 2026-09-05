import type {Metadata} from 'next';
import {EMAIL, WHATSAPP_DISPLAY} from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    `Contáctenos por WhatsApp al ${WHATSAPP_DISPLAY} o por correo ${EMAIL}. ` +
    'Estamos en la Carrera 7 # 5-26, Barrio Gavan, Tauramena, Casanare.',
};

export default function ContactoLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}