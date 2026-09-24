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
  Sprout,
  Wind,
  Baby,
  Droplets,
  FlaskConical,
  TestTube,
  UtensilsCrossed,
  Clock,
  Heart,
  Ban,
  ThermometerSun,
  Shirt,
  FileText,
  Dumbbell,
  Info,
  ListChecks,
  ScanLine,
  Pill,
  CalendarDays,
  type LucideIcon
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

export type PreparationGroup = {
  title: string;
  items: string[];
  /** Icono semántico opcional; si falta se deduce del título. */
  icon?: LucideIcon;
};

export type Service = {
  id: string;
  title: string;
  categories: string[];
  /** Id del servicio padre cuando este es una parte/examen de otro (ej. coprológico → laboratorio-clinico). */
  parentId?: string;
  description: string;
  icon: typeof Microscope;
  image: string;
  theme: typeof colors.emerald;
  highlight: boolean;
  recommendations: string[];
  preparationGroups?: PreparationGroup[];
};

export const servicesData: Service[] = [
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
    id: "ginecologia-y-obstetricia",
    title: "Ginecología y Obstetricia",
    categories: ["Medicina", "Especialidades"],
    description: "Atención especializada para su salud íntima, reproductiva y maternal: control ginecológico, planificación familiar, control prenatal y menopausia.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    theme: colors.pink,
    highlight: false,
    recommendations: [
      "Agende su cita con anticipación (jornadas de ginecología los miércoles).",
      "Traer historia clínica y resultados de exámenes previos.",
      "Para control prenatal: llevar carné maternal y órdenes médicas."
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
    id: "coprologico",
    title: "Coprológico, Sangre Oculta y Coproscópico",
    categories: ["Laboratorio Clínico"],
    parentId: "laboratorio-clinico",
    description: "Estudios coprológicos, coproscópicos y detección de sangre oculta en materia fecal para el diagnóstico de afecciones digestivas y parasitarias.",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
    theme: colors.teal,
    highlight: false,
    recommendations: [
      "Recoger la muestra en un recipiente estéril (cantidad moderada, aproximadamente un cuarto del tarro).",
      "Si es un bebé, no recoger la muestra directamente del pañal: poner el pañal del revés (sin gel absorbente) y esperar.",
      "Para sangre oculta: no haber ingerido carnes rojas ni ensaladas rojas (ej. remolacha) de 2 a 3 días antes, para evitar falsos positivos.",
      "El coproscópico sigue las mismas indicaciones del coprológico más las de sangre oculta, ya que va junto.",
      "Las muestras se reciben en cualquier momento."
    ],
    preparationGroups: [
      {
        title: 'Preparación para coprológico',
        items: [
          'Recoger la muestra en un recipiente estéril; cantidad moderada (aproximadamente un cuarto del tarro).',
          'Si es el caso de un bebé, no recoger la muestra directamente del pañal para evitar contaminación: poner el pañal del revés (por donde no tiene el gel absorbente) y esperar a que haga del cuerpo.'
        ]
      },
      {
        title: 'Preparación para sangre oculta en materia fecal',
        items: [
          'Recoger una cantidad moderada de la muestra (poca cantidad, aproximadamente un cuarto del tarro).',
          'No haber ingerido carnes rojas ni ensaladas rojas como la de remolacha, de 2 a 3 días antes (para evitar falsos positivos).'
        ]
      },
      {
        title: 'Preparación para coproscópico',
        items: [
          'Seguir las mismas indicaciones del coprológico, más las de sangre oculta en materia fecal, ya que va junto.',
          'Las muestras se reciben en cualquier momento.'
        ]
      }
    ]
  },
  {
    id: "espermograma",
    title: "Espermograma Básico",
    categories: ["Laboratorio Clínico", "Especialidades"],
    parentId: "laboratorio-clinico",
    description: "Estudio seminal para evaluar fertilidad y bienestar reproductivo: movilidad, morfología y concentración de espermatozoides. Resultados confiables para cuidar tu salud reproductiva.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop",
    theme: colors.sky,
    highlight: false,
    recommendations: [
      "Abstinencia sexual de 1 a 4 días antes del examen (permite obtener una muestra válida y con un resultado confiable).",
      "Entregar la muestra en un máximo de 20 minutos después de la recogida.",
      "No consumir alcohol ni drogas de 2 a 7 días antes del examen.",
      "Evitar saunas y baños calientes de 2 a 3 días antes.",
      "Recoger la muestra solo por masturbación; no usar preservativo ni lubricantes.",
      "Cada paciente debe traer su propio frasco estéril con tapa de rosca.",
      "Entregar la muestra en el laboratorio de DariLab lo antes posible dentro del tiempo establecido."
    ],
    preparationGroups: [
      {
        title: 'Abstinencia sexual',
        items: [
          'De 1 a 4 días antes del examen. La abstinencia sexual permite obtener una muestra válida y con un resultado confiable.'
        ]
      },
      {
        title: 'Tiempo de entrega de la muestra',
        items: [
          'La muestra debe entregarse en un máximo de 20 minutos después de la recogida.'
        ]
      },
      {
        title: 'Recomendaciones importantes',
        items: [
          'No consumir alcohol ni drogas de 2 a 7 días antes del examen.',
          'Evitar saunas y baños calientes de 2 a 3 días antes.',
          'Realizarlo en un ambiente tranquilo y fresco.',
          'Seguir las indicaciones del personal de salud.'
        ]
      },
      {
        title: 'Recolección de la muestra',
        items: [
          'La muestra debe obtenerse por masturbación.',
          'No es permitido el uso de preservativos ni lubricantes.',
          'Cada paciente debe traer su propio frasco estéril con tapa de rosca.',
          'Entregar la muestra en el laboratorio de DariLab lo antes posible dentro del tiempo establecido.'
        ]
      },
      {
        title: 'Importante',
        items: [
          'Un buen proceso asegura resultados confiables. Gracias por seguir las indicaciones.'
        ]
      }
    ]
  },
  {
    id: "uroanalisis-urocultivos",
    title: "Uroanálisis y Urocultivos",
    categories: ["Laboratorio Clínico"],
    parentId: "laboratorio-clinico",
    description: "Análisis de orina y cultivos urinarios para el diagnóstico de infecciones del tracto urinario y otras afecciones. Tu colaboración es muy importante para obtener resultados confiables.",
    icon: TestTube,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop",
    theme: colors.amber,
    highlight: false,
    recommendations: [
      "Uroanálisis: usar la primera orina de la mañana; hacer aseo previo de los genitales.",
      "Iniciar la micción y desechar el primer chorrito en el inodoro; recoger la segunda parte directamente en el frasco estéril.",
      "No recolectar la muestra durante el período menstrual.",
      "Si tuvo relaciones sexuales, esperar 2 a 3 días posteriores para recoger la muestra.",
      "Urocultivo: no automedicarse con ningún medicamento antes de la toma de la muestra.",
      "Si está en tratamiento y el examen es post-medicamento, realizarlo después de 7 días de haberlo terminado, salvo indicación médica diferente.",
      "Los urocultivos solo se reciben de lunes a jueves en horas de la mañana."
    ],
    preparationGroups: [
      {
        title: 'Preparación para uroanálisis',
        items: [
          'Usar la primera orina de la mañana.',
          'Realizar aseo previo de los genitales.',
          'Iniciar la micción y desechar el primer chorrito en el inodoro.',
          'Recoger la segunda parte de la orina directamente en el frasco estéril.',
          'No recolectar la muestra durante el período menstrual.',
          'Si tuvo relaciones sexuales, esperar 2 a 3 días posteriores para recoger la muestra.'
        ]
      },
      {
        title: 'Preparación para urocultivo',
        items: [
          'No automedicarse con ningún medicamento antes de la toma de la muestra.',
          'Si está en tratamiento y el examen es post-medicamento, realizarlo después de 7 días de haberlo terminado, salvo indicación médica diferente.',
          'Los urocultivos solo se reciben de lunes a jueves en horas de la mañana.'
        ]
      }
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
    parentId: "odontologia",
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
    ],
    preparationGroups: [
      {
        title: 'Radiografía de columna lumbosacra — Día anterior al examen',
        items: [
          'Almorzar caldos o comidas suaves; evite comidas pesadas o de difícil digestión.',
          'Tomar 1 botella de agua con gas después del almuerzo.',
          'A las 6:00 p.m. tomar 1 Travado oral y luego otra botella de agua con gas.',
          'No consumir carnes rojas, granos ni bebidas oscuras.',
          'No consumir absolutamente nada más después de esa hora.',
          'Llegar al estudio con intestino limpio y en ayunas para obtener excelente calidad en la toma del estudio radiológico.'
        ]
      },
      {
        title: 'Importante',
        items: [
          'Seguir estas indicaciones es fundamental para obtener imágenes de calidad y un diagnóstico preciso.'
        ]
      }
    ]
  },
  {
    id: "ecografias",
    title: "Ecografías",
    categories: ["Imagenología"],
    parentId: "rayos-x",
    description: "Imágenes precisas que cuidan tu salud. Diagnósticos confiables, atención rápida y segura con profesionales calificados.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
    theme: colors.rose,
    highlight: false,
    recommendations: [
      "Para ecografía abdominal: Requiere ayuno mínimo de 6 horas.",
      "Para ecografía pélvica: Tomar 4 a 6 vasos de agua 1 hora antes (vejiga llena).",
      "Llevar estudios previos para comparación."
    ],
    preparationGroups: [
      {
        title: 'Ecografía de abdomen total — Días previos al examen',
        items: [
          'Hacer dieta líquida: consumir únicamente alimentos líquidos y claros.',
          'No ingerir ningún tipo de carnes (rojas, pollo, pescado, embutidos, etc.).',
          'Evitar bebidas lácteas u oscuras: no consumir leche, yogur, chocolate, café, té, gaseosas oscuras o bebidas alcohólicas.',
          'Comer consomés o caldos claros de verduras o pollo, sin agregar papa.',
          'No ingesta de frutas: evitar todo tipo de frutas, jugos naturales y batidos.',
          'No ingesta de huevo en cualquiera de sus presentaciones.',
          'Tomar bastante líquido (agua natural en abundancia) durante el día previo al estudio.'
        ]
      },
      {
        title: 'El día de la cita',
        items: [
          'Ayuno de 6 a 8 horas antes del día de la cita (el ayuno permite mejor visualización de los órganos abdominales).',
          'Venir en ayunas completamente: no consumir ningún alimento ni bebida, ni siquiera agua, antes del estudio.',
          'Llevar estudios previos para comparación.'
        ]
      },
      {
        title: 'Importante',
        items: [
          'Seguir estas indicaciones es muy importante para obtener imágenes de calidad y un diagnóstico preciso.'
        ]
      }
    ]
  },
  {
    id: "electrocardiogramas",
    title: "Electrocardiogramas",
    categories: ["Especialidades", "Imagenología"],
    parentId: "rayos-x",
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
    parentId: "rayos-x",
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
    parentId: "crc-licencias",
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
    id: "terapia-respiratoria",
    title: "Terapia Respiratoria",
    categories: ["Especialidades"],
    description: "Evaluación y tratamiento integral de afecciones respiratorias: nebulizaciones, ejercicios de reexpansión pulmonar y fisioterapia respiratoria para niños y adultos.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop",
    theme: colors.teal,
    highlight: false,
    recommendations: [
      "Traer remisión médica u orden del tratamiento si la tiene.",
      "No usar inhaladores una hora antes de la sesión, salvo indicación médica.",
      "Vestir ropa cómoda que no ajuste en el tórax."
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
    parentId: "optometria",
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

/** Icono semántico para un grupo de preparación/recomendaciones (sin saturar: 1 por grupo). */
export function groupIconForTitle(title: string): LucideIcon {
  const t = title.toLowerCase();
  if (/(copro|fecal|sangre oculta|parásit|parasit)/.test(t)) return FlaskConical;
  if (/(uro|orina|muestra|recole|colectar|frasco|seminal)/.test(t)) return TestTube;
  if (/(ayuno|dieta|aliment|carne|fruta|huevo|comida|líquid|liquido|caldo)/.test(t)) return UtensilsCrossed;
  if (/(hora|día |dia |tiempo|minuto|fecha|mañana|manana|semana|antes del examen)/.test(t)) return Clock;
  if (/(bebé|bebe|pañal|panal)/.test(t)) return Baby;
  if (/(agua|vejiga|hidrat|líquido natural|liquido natural)/.test(t)) return Droplets;
  if (/(abstinencia|sexual|relacion)/.test(t)) return Heart;
  if (/(alcohol|droga|fumar|tabaco|automedic)/.test(t)) return Ban;
  if (/(sauna|calor|temperatura)/.test(t)) return ThermometerSun;
  if (/(ropa|vestir|camisa|prend|holgad)/.test(t)) return Shirt;
  if (/(cédula|cedula|documento|identidad|orden|remisi|autoriza|runt|historia|examen previo|estudio previo)/.test(t)) return FileText;
  if (/(ejercicio|actividad|físic|fisic|coordinac|aptitud)/.test(t)) return Dumbbell;
  if (/(locion|loción|crema|talco|lente|contacto|gafas|visión|vision|visual)/.test(t)) return Eye;
  if (/(medicamento|inhalador|tratamiento|pastilla)/.test(t)) return Pill;
  if (/(radiograf|imagen|rayos|columna|ecograf)/.test(t)) return ScanLine;
  if (/(importante|fundamental|asegurar|confiable)/.test(t)) return Info;
  if (/(ruido|audiometr|oído|oido|auditiv)/.test(t)) return Ear;
  if (/(cita|agenda|turno|jornada|anticipación|anticipacion)/.test(t)) return CalendarDays;
  if (/(recolec|recolección|recoleccion|recomendaciones importantes|preparación)/.test(t)) return ListChecks;
  return ListChecks;
}

/**
 * Grupos unificados de recomendación/preparación para el detalle.
 * Si hay preparationGroups se usan; si solo hay recommendations, se envuelve en un solo grupo con el mismo diseño.
 */
export function getDisplayGroups(service: Service): { title: string; items: string[]; icon: LucideIcon }[] {
  if (service.preparationGroups && service.preparationGroups.length > 0) {
    return service.preparationGroups.map(g => ({
      title: g.title,
      items: g.items,
      icon: g.icon ?? groupIconForTitle(g.title),
    }));
  }
  if (service.recommendations && service.recommendations.length > 0) {
    return [{
      title: 'Recomendaciones y preparación',
      items: service.recommendations,
      icon: service.icon,
    }];
  }
  return [];
}

/** Servicios hijos de un servicio padre (parte de él). */
export function getChildServices(parentId: string): Service[] {
  return servicesData.filter(s => s.parentId === parentId);
}

/** Servicio padre de uno dado, si existe. */
export function getParentService(service: Service): Service | undefined {
  if (!service.parentId) return undefined;
  return servicesData.find(s => s.id === service.parentId);
}

/** Servicios relacionados: hermanos (mismo padre) o hijos, sin repetir el actual. */
export function getRelatedServices(service: Service): Service[] {
  if (service.parentId) {
    return servicesData.filter(s => s.parentId === service.parentId && s.id !== service.id);
  }
  const children = getChildServices(service.id);
  if (children.length > 0) return children;
  // Sin padre ni hijos: otros servicios que comparten categoría principal
  const primary = service.categories[0];
  return servicesData.filter(s => s.id !== service.id && !s.parentId && s.categories.includes(primary)).slice(0, 6);
}

/** Servicios de una categoría ordenados: padres primero, hijos justo después de su padre. */
export function getServicesForCategory(category: string): Service[] {
  const inCategory = servicesData.filter(s => s.categories.includes(category));
  const roots = inCategory.filter(s => !s.parentId || !inCategory.some(p => p.id === s.parentId));
  const result: Service[] = [];
  for (const root of roots) {
    result.push(root);
    for (const child of inCategory.filter(s => s.parentId === root.id)) {
      result.push(child);
    }
  }
  // Huérfanos (parent fuera de la categoría)
  for (const s of inCategory) {
    if (!result.includes(s)) result.push(s);
  }
  return result;
}
