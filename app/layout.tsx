import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { assetUrl } from '@/lib/assets';

// GitHub Pages sirve el dominio raíz (darilabips.com) apuntando los
// registros A en el DNS de Wix a las IPs de GitHub, sin transferir el dominio.
export const metadata: Metadata = {
  metadataBase: new URL('https://darilabips.com'),
  title: {
    default: 'DariLab IPS | Salud Integral en Tauramena, Casanare',
    template: '%s | DariLab IPS',
  },
  description:
    'DariLab IPS: medicina general y especializada, laboratorio clínico, odontología, salud ocupacional, imagenología y más en Tauramena, Casanare. Agenda tu cita por WhatsApp al 314 238 4325.',
  applicationName: 'DariLab IPS',
  keywords: [
    'DariLab IPS',
    'IPS Tauramena',
    'laboratorio clínico Casanare',
    'medicina general Tauramena',
    'salud ocupacional',
    'odontología',
    'rayos x',
    'ecografías',
    'CRC licencias de tránsito',
    'Tauramena',
    'Casanare',
  ],
  authors: [{name: 'DariLab IPS'}],
  creator: 'DariLab IPS',
  publisher: 'DariLab IPS',
  robots: {index: true, follow: true},
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://darilabips.com',
    siteName: 'DariLab IPS',
    title: 'DariLab IPS | Salud Integral en Tauramena, Casanare',
    description:
      'Medicina general y especializada, laboratorio clínico, odontología, salud ocupacional e imagenología en Tauramena, Casanare. Agenda tu cita por WhatsApp.',
    images: 'https://darilabips.com/og-image.jpg',
  },
  other: {
    'og:image': 'https://darilabips.com/og-image.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'DariLab IPS - Salud Integral en Tauramena, Casanare',
  },

  icons: {
    icon: assetUrl('/logo.jpeg'),
    apple: assetUrl('/logo.jpeg'),
  },
};

export const viewport: Viewport = {
  themeColor: '#2B3990',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning className="min-h-screen bg-slate-50 font-sans flex flex-col text-slate-800 w-full overflow-x-hidden">
        {/* Decorative background ribbons — company colors, behind everything */}
        <div aria-hidden="true" className="bg-ribbon bg-ribbon--ring w-[420px] h-[420px] -left-52 top-[8vh]"></div>
        <div aria-hidden="true" className="bg-ribbon bg-ribbon--thin w-[620px] h-[620px] -right-72 top-[38vh]"></div>
        <div aria-hidden="true" className="bg-ribbon bg-ribbon--dot w-56 h-56 -left-24 bottom-[10vh]"></div>
        <div aria-hidden="true" className="bg-ribbon bg-ribbon--dot-alt w-72 h-72 -right-28 bottom-[12vh]"></div>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}