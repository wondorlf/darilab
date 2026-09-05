import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'PQRSF',
  description:
    'Presente sus peticiones, quejas, reclamos, sugerencias y felicitaciones a DariLab IPS a través de nuestro formulario PQRSF, que se envía directamente por WhatsApp.',
};

export default function PqrsfLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}