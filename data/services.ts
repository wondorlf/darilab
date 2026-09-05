import { 
  Microscope, 
  Stethoscope, 
  Activity, 
  HeartPulse,
  Car,
  BriefcaseMedical,
  Ear,
  Smile,
  Eye,
  Brain,
  Bone,
  Dog,
  Users,
  LineChart,
  ClipboardList,
  ShieldAlert,
  Sprout
} from 'lucide-react';

const colors = {
  emerald: { bgLight: 'bg-[#86A06D]', text: 'text-white', hoverBg: 'group-hover:bg-[#72895c]', overlay: 'bg-[#86A06D]/30', solid: 'bg-[#86A06D]', light: 'bg-[#86A06D]/20', countBg: 'bg-[#86A06D]', countText: 'text-white' },
  blue: { bgLight: 'bg-[#2B3990]', text: 'text-white', hoverBg: 'group-hover:bg-[#202b6d]', overlay: 'bg-[#2B3990]/30', solid: 'bg-[#2B3990]', light: 'bg-[#2B3990]/20', countBg: 'bg-[#2B3990]', countText: 'text-white' },
  sky: { bgLight: 'bg-[#00AEEF]', text: 'text-white', hoverBg: 'group-hover:bg-[#009bd6]', overlay: 'bg-[#00AEEF]/30', solid: 'bg-[#00AEEF]', light: 'bg-[#00AEEF]/20', countBg: 'bg-[#00AEEF]', countText: 'text-white' },
  amber: { bgLight: 'bg-amber-300', text: 'text-amber-900', hoverBg: 'group-hover:bg-amber-400', overlay: 'bg-amber-500/20', solid: 'bg-amber-400', light: 'bg-amber-100', countBg: 'bg-amber-200', countText: 'text-amber-800' },
  slate: { bgLight: 'bg-slate-300', text: 'text-slate-800', hoverBg: 'group-hover:bg-slate-400', overlay: 'bg-slate-500/20', solid: 'bg-slate-400', light: 'bg-slate-100', countBg: 'bg-slate-200', countText: 'text-slate-700' },
  indigo: { bgLight: 'bg-indigo-300', text: 'text-indigo-900', hoverBg: 'group-hover:bg-indigo-400', overlay: 'bg-indigo-500/20', solid: 'bg-indigo-400', light: 'bg-indigo-100', countBg: 'bg-indigo-200', countText: 'text-indigo-800' },
  pink: { bgLight: 'bg-pink-300', text: 'text-pink-900', hoverBg: 'group-hover:bg-pink-400', overlay: 'bg-pink-500/20', solid: 'bg-pink-400', light: 'bg-pink-100', countBg: 'bg-pink-200', countText: 'text-pink-800' },
  cyan: { bgLight: 'bg-cyan-300', text: 'text-cyan-900', hoverBg: 'group-hover:bg-cyan-400', overlay: 'bg-cyan-500/20', solid: 'bg-cyan-400', light: 'bg-cyan-100', countBg: 'bg-cyan-200', countText: 'text-cyan-800' },
  rose: { bgLight: 'bg-rose-300', text: 'text-rose-900', hoverBg: 'group-hover:bg-rose-400', overlay: 'bg-rose-500/20', solid: 'bg-rose-400', light: 'bg-rose-100', countBg: 'bg-rose-200', countText: 'text-rose-800' },
  violet: { bgLight: 'bg-violet-300', text: 'text-violet-900', hoverBg: 'group-hover:bg-violet-400', overlay: 'bg-violet-500/20', solid: 'bg-violet-400', light: 'bg-violet-100', countBg: 'bg-violet-200', countText: 'text-violet-800' },
  orange: { bgLight: 'bg-orange-300', text: 'text-orange-900', hoverBg: 'group-hover:bg-orange-400', overlay: 'bg-orange-500/20', solid: 'bg-orange-400', light: 'bg-orange-100', countBg: 'bg-orange-200', countText: 'text-orange-800' },
  teal: { bgLight: 'bg-teal-300', text: 'text-teal-900', hoverBg: 'group-hover:bg-teal-400', overlay: 'bg-teal-500/20', solid: 'bg-teal-400', light: 'bg-teal-100', countBg: 'bg-teal-200', countText: 'text-teal-800' }
};

export const categories = [
  'Medicina',
  'Especialidades',
  'CRC',
  'Laboratorio Clínico',
  'Laboratorio Veterinario',
  'Odontología',
  'Salud Ocupacional',
  'Imagenología',
  'Asesorías y Proyectos'
];

export const servicesData = [
  {
    id: "medicina-general",
    title: "Medicina General",
    categories: ["Medicina", "Especialidades"],
    description: "Atención primaria para el diagnóstico, tratamiento y prevención de enfermedades comunes.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    theme: colors.emerald,
    highlight: false,
    recommendations: [
      "Traer historia clínica previa si la tiene.",
      "Traer lista de medicamentos que toma actualmente.",
      "Llegar 15 minutos antes de su cita."
    ]
  },
  {
    id: "medicina-especializada",
    title: "Medicina Especializada",
    categories: ["Medicina", "Especialidades"],
    description: "Atención experta en diversas ramas de la medicina para tratar condiciones específicas.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
    theme: colors.blue,
    highlight: false,
    recommendations: [
      "Presentar remisión médica si aplica.",
      "Traer exámenes previos relacionados a su condición.",
      "Asistir con un acompañante si requiere asistencia."
    ]
  },
  {
    id: "laboratorio-clinico",
    title: "Laboratorio Clínico",
    categories: ["Laboratorio Clínico"],
    description: "Diagnósticos confiables, resultados que cuidan tu salud. Resultados precisos, entrega oportuna y atención humana.",
    icon: Microscope,
    image: "/laboratorio_clinico.jpeg",
    theme: colors.sky,
    highlight: true,
    recommendations: [
      "Ayuno estricto de 8 a 12 horas para exámenes de rutina.",
      "No realizar ejercicio físico intenso el día anterior.",
      "Traer la orden médica impresa o digital."
    ]
  },
  {
    id: "laboratorio-veterinario",
    title: "Laboratorio Veterinario",
    categories: ["Laboratorio Veterinario"],
    description: "Análisis clínicos de alta calidad para el diagnóstico y seguimiento de mascotas.",
    icon: Dog,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    theme: colors.amber,
    highlight: false,
    recommendations: [
      "Consultar con el veterinario si la mascota requiere ayuno.",
      "Traer a las mascotas con correa o en su guacal.",
      "Presentar carnet de vacunación vigente."
    ]
  },
  {
    id: "salud-ocupacional",
    title: "Salud Ocupacional",
    categories: ["Salud Ocupacional", "Medicina"],
    description: "Exámenes médicos ocupacionales para ingreso, retiro o seguimiento de trabajadores.",
    icon: BriefcaseMedical,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    theme: colors.slate,
    highlight: true,
    recommendations: [
      "Presentar documento de identidad original.",
      "Llevar carta de autorización de la empresa (si aplica).",
      "Asistir descansado y haber dormido mínimo 6 horas.",
      "Llevar gafas o lentes de contacto si los usa regularmente."
    ]
  },
  {
    id: "crc-licencias",
    title: "CRC Licencias de Tránsito",
    categories: ["CRC"],
    description: "Centro de Reconocimiento de Conductores para la expedición de certificados médicos para licencias y porte de armas.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    theme: colors.indigo,
    highlight: true,
    recommendations: [
      "Presentar cédula de ciudadanía original vigente.",
      "Estar registrado en el RUNT.",
      "Llevar gafas o lentes de contacto si los requiere para conducir.",
      "Disponer de al menos 2 horas para todo el proceso."
    ]
  },
  {
    id: "fonoaudiologia",
    title: "Fonoaudiología",
    categories: ["Especialidades", "Salud Ocupacional"],
    description: "Evaluación y tratamiento de trastornos de la comunicación, habla, lenguaje y audición.",
    icon: Ear,
    image: "https://images.unsplash.com/photo-1596088869451-491e167efabb?q=80&w=800&auto=format&fit=crop",
    theme: colors.pink,
    highlight: false,
    recommendations: [
      "Evitar la exposición a ruidos fuertes 24 horas antes de la audiometría.",
      "Llevar audífonos previos si ya los usa.",
      "Limpiar conducto auditivo externo si aplica."
    ]
  },
  {
    id: "odontologia",
    title: "Odontología",
    categories: ["Odontología"],
    description: "Servicios integrales para cuidar tu sonrisa, cuidar tu salud. Atención integral y tecnología moderna.",
    icon: Smile,
    image: "/odontologia.jpeg",
    theme: colors.cyan,
    highlight: false,
    recommendations: [
      "Asistir con buen cepillado e higiene bucal.",
      "Llevar radiografías panorámicas previas si las tiene.",
      "Llegar 10 minutos antes de su cita."
    ]
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    categories: ["Odontología", "Especialidades"],
    description: "Corrección de la posición de los dientes y maxilares para una sonrisa saludable y funcional.",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    theme: colors.emerald,
    highlight: false,
    recommendations: [
      "Excelente higiene oral previa.",
      "Llevar radiografías panorámicas previas.",
      "Llegar 10 minutos antes de su cita."
    ]
  },
  {
    id: "rayos-x",
    title: "Imagenología (Rayos X)",
    categories: ["Imagenología", "Salud Ocupacional"],
    description: "Tecnología avanzada para imágenes precisas al cuidado de tu salud. Imágenes de alta calidad y rápida atención.",
    icon: Activity,
    image: "/rayos_x.jpeg",
    theme: colors.slate,
    highlight: true,
    recommendations: [
      "Avisar al técnico en caso de sospecha de embarazo.",
      "Retirar joyas, relojes u objetos metálicos de la zona a examinar.",
      "Llevar la orden médica autorizada."
    ]
  },
  {
    id: "ecografias",
    title: "Ecografías",
    categories: ["Imagenología"],
    description: "Imágenes precisas que cuidan tu salud. Diagnósticos confiables, atención rápida y segura con profesionales calificados.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
    theme: colors.rose,
    highlight: false,
    recommendations: [
      "Para ecografía abdominal: Requiere ayuno mínimo de 6 horas.",
      "Para ecografía pélvica: Tomar 4 a 6 vasos de agua 1 hora antes (vejiga llena).",
      "Llevar estudios previos para comparación."
    ]
  },
  {
    id: "electrocardiogramas",
    title: "Electrocardiogramas",
    categories: ["Especialidades", "Imagenología"],
    description: "Examen que registra la actividad eléctrica del corazón para detectar anomalías cardíacas.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1560306990-18fa759c8713?q=80&w=800&auto=format&fit=crop",
    theme: colors.rose,
    highlight: false,
    recommendations: [
      "No aplicar lociones, cremas o talcos en el pecho.",
      "Llevar ropa holgada o camisa de botones.",
      "No hacer ejercicio intenso antes de la prueba."
    ]
  },
  {
    id: "espirometria",
    title: "Espirometría",
    categories: ["Especialidades", "Salud Ocupacional", "Imagenología"],
    description: "Pruebas de función pulmonar para evaluar y diagnosticar problemas respiratorios.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop",
    theme: colors.sky,
    highlight: false,
    recommendations: [
      "No fumar por lo menos 4 a 6 horas antes de la prueba.",
      "No usar inhaladores 24 horas antes, a menos que el médico indique lo contrario.",
      "Usar ropa cómoda, no apretada en cuello o tórax."
    ]
  },
  {
    id: "optometria",
    title: "Optometría",
    categories: ["Especialidades", "Salud Ocupacional"],
    description: "Examen visual completo para el cuidado preventivo y correctivo de sus ojos.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1542432389-a40026383873?q=80&w=800&auto=format&fit=crop",
    theme: colors.blue,
    highlight: false,
    recommendations: [
      "Llevar sus gafas o lentes de contacto actuales.",
      "Haber descansado la vista minimamente la noche anterior.",
      "Traer estuche protector para lentes de contacto si los usa."
    ]
  },
  {
    id: "psicologia",
    title: "Psicología",
    categories: ["Especialidades", "Salud Ocupacional"],
    description: "Apoyo y acompañamiento psicológico profesional para mejorar su bienestar mental.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    theme: colors.violet,
    highlight: false,
    recommendations: [
      "Disposición para conversar abierta y tranquilamente.",
      "Separar 1 hora aproximada para su sesión entera.",
      "Estar en un entorno tranquilo si es atención remota."
    ]
  },
  {
    id: "coordinacion-motriz",
    title: "Coordinación Motriz",
    categories: ["Especialidades", "CRC"],
    description: "Evaluación de aptitudes físicas, mentales y de coordinación motriz.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?q=80&w=800&auto=format&fit=crop",
    theme: colors.amber,
    highlight: false,
    recommendations: [
      "Descanso adecuado antes del examen.",
      "Evitar el consumo de estimulantes previos a la prueba.",
      "Llevar documento de identidad."
    ]
  },
  {
    id: "terapia-fisica",
    title: "Fisioterapia / Terapia Física",
    categories: ["Especialidades"],
    description: "Cuidamos tu movimiento, mejoramos tu calidad de vida. Rehabilitación, prevención y bienestar con tecnología moderna.",
    icon: Bone,
    image: "/terapia_fisica.jpeg",
    theme: colors.orange,
    highlight: false,
    recommendations: [
      "Vestir ropa y zapatos cómodos/deportivos.",
      "Traer remisión médica u orden del tratamiento.",
      "Asistir 10 minutos antes para preparación."
    ]
  },
  {
    id: "medicina-laboral",
    title: "Medicina Laboral",
    categories: ["Salud Ocupacional", "Medicina", "Asesorías y Proyectos"],
    description: "Diagnóstico y calificación de origen de enfermedades, análisis de puestos de trabajo y reintegro laboral.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    theme: colors.indigo,
    highlight: false,
    recommendations: [
      "Presentar toda la documentación y exámenes clínicos previos.",
      "Revisión y carta de la empresa o ARL.",
      "Análisis del historial laboral."
    ]
  },
  {
    id: "visiometria",
    title: "Visiometría",
    categories: ["Especialidades", "Salud Ocupacional"],
    description: "Evaluación gruesa de la función visual en el entorno laboral.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1517948430535-1e2469d314fe?q=80&w=800&auto=format&fit=crop",
    theme: colors.sky,
    highlight: false,
    recommendations: [
      "Llevar sus gafas o corrección visual si las requiere constantemente.",
      "Asistir en óptimas condiciones de descanso."
    ]
  },
  {
    id: "epidemiologia",
    title: "Epidemiología",
    categories: ["Asesorías y Proyectos"],
    description: "Asesorías en epidemiología, análisis de datos de salud y vigilancia.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    theme: colors.blue,
    highlight: false,
    recommendations: [
      "Proporcionar bases de datos anonimizadas previas.",
      "Documentación histórica y reportes requeridos."
    ]
  },
  {
    id: "asesorias-pve",
    title: "Asesorías P.V.E. y Capacitaciones",
    categories: ["Asesorías y Proyectos", "Salud Ocupacional"],
    description: "Programas de Vigilancia Epidemiológica y capacitación al personal de la empresa.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800&auto=format&fit=crop",
    theme: colors.emerald,
    highlight: false,
    recommendations: [
      "Revisión de la matriz de riesgos de la empresa.",
      "Coordinación de horarios para todos los participantes."
    ]
  },
  {
    id: "asesorias-ocupacional",
    title: "Asesorías en Salud Ocupacional",
    categories: ["Asesorías y Proyectos", "Salud Ocupacional"],
    description: "Consultorías integrales de salud y seguridad en el trabajo.",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    theme: colors.amber,
    highlight: false,
    recommendations: [
      "Contacto directo con el responsable de SST de la empresa.",
      "Facilitar auditorías y matrices de prevención."
    ]
  },
  {
    id: "programas-salud-publica",
    title: "Programas de Salud Pública",
    categories: ["Asesorías y Proyectos"],
    description: "Planificación, ejecución y seguimiento de programas comunitarios en salud pública.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop",
    theme: colors.teal,
    highlight: false,
    recommendations: [
      "Información estadística básica de la población a intervenir.",
      "Alineación con secretaría u órganos gubernamentales."
    ]
  },
  {
    id: "administracion-salud-ocupacional",
    title: "Administración en Salud Ocupacional",
    categories: ["Asesorías y Proyectos", "Salud Ocupacional"],
    description: "Planificación, ejecución y seguimiento de programas de salud y seguridad en el trabajo.",
    icon: BriefcaseMedical,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    theme: colors.slate,
    highlight: false,
    recommendations: [
      "Presentación del cronograma anual del SG-SST.",
      "Revisión de reportes de ARL."
    ]
  },
  {
    id: "consultorias-salud",
    title: "Interventorías y Consultorías en Salud",
    categories: ["Asesorías y Proyectos"],
    description: "Evaluación y control de programas y proyectos del sector salud.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1551836022-b06985bceb24?q=80&w=800&auto=format&fit=crop",
    theme: colors.blue,
    highlight: false,
    recommendations: [
      "Adjuntar contratos e historial del proyecto a intervenir.",
      "Métricas y KPIs esperados e iniciales."
    ]
  },
  {
    id: "bienestar-trabajador",
    title: "Bienestar del Trabajador (IMESBITAP)",
    categories: ["Asesorías y Proyectos", "Salud Ocupacional"],
    description: "Implementación de estrategias saludables en el ámbito laboral para bienestar y productividad.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    theme: colors.emerald,
    highlight: false,
    recommendations: [
      "Mediciones iniciales de clima laboral.",
      "Diagnósticos de estilo de vida del entorno laboral."
    ]
  }
];
