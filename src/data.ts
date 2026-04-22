import { 
  GoldenRule, ModuleData, ChecklistPhase, TemplateData, FAQData, MatrixRow, RightsLimitRow, FlowStep, CrisisStep
} from './types';

export const goldenRules: GoldenRule[] = [
  {
    id: 'visibilidad',
    title: 'Visibilidad',
    description: 'Usa siempre tu botón/distintivo de UGT y mantén actualizado el tablón de anuncios. Tu presencia debe ser notoria.',
    icon: 'Eye'
  },
  {
    id: 'metodo-documental',
    title: 'Método Documental',
    description: 'Lo que no se registra, no se puede defender. Documenta todo: actas, escritos, e-mails y acuses de recibo.',
    icon: 'Archive'
  },
  {
    id: 'coordinacion',
    title: 'Coordinación',
    description: 'Nunca actúes en solitario ante decisiones sensibles. Consulta con tu Sección Sindical o la Federación antes de firmar.',
    icon: 'Network'
  },
  {
    id: 'afiliacion',
    title: 'Afiliación como Prioridad',
    description: 'Tu fuerza emana del número de personas que representas. Invitar a la plantilla a afiliarse a UGT es tu tarea diaria.',
    icon: 'UserPlus'
  }
];

export const modulesData: ModuleData[] = [
  {
    id: 'modulo-1',
    title: '¡Acabo de ser elegido!',
    icon: 'Zap',
    content: {
      subtitle: 'Protocolo de Actuación Inmediata (Las primeras 48 horas)',
      sections: [
        {
          heading: '1. Notificación Formal',
          body: [
            'Asegúrate de que el sindicato ha registrado formalmente tu nombramiento en la oficina pública correspondiente.',
            'Comunica oficialmente a la empresa tu elección mediante escrito con registro de entrada (acuse de recibo).'
          ]
        },
        {
          heading: '2. Presentación ante RR.HH.',
          body: [
            'Solicita una breve reunión de cortesía con Recursos Humanos o la Dirección para presentarte institucionalmente como delegado/a de UGT.',
            'Mantén un tono cordial pero firme, estableciendo las bases de un diálogo social constructivo.'
          ]
        },
        {
          heading: '3. Primera Ronda con la Plantilla',
          body: [
            'Recorre tu centro de trabajo para agradecer el apoyo a quienes te votaron e informando a toda la plantilla de tu disponibilidad.',
            'Es el momento ideal para ubicar el Tablón Sindical y hacer tu primera publicación visible.'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-2',
    title: 'Mi sitio en UGT',
    icon: 'Map',
    content: {
      subtitle: 'Conoce la estructura de tu Sindicato para saber dónde acudir',
      sections: [
        {
          heading: 'La Sección Sindical',
          body: [
            'Es la célula básica del sindicato en la empresa. Está formada por todos los afiliados/as de UGT en el centro de trabajo.',
            'Es tu equipo de apoyo diario y de donde emana la postura colectiva ante la gestión diaria.'
          ]
        },
        {
          heading: 'La Federación',
          body: [
            'Agrupa a los trabajadores por sectores productivos (Servicios Públicos, Industria, Servicios, etc.).',
            'Te brindan soporte técnico, sectorial y participan en la negociación de tu Convenio Colectivo.'
          ]
        },
        {
          heading: 'La Unión Territorial',
          body: [
            'La estructura de UGT en tu ámbito geográfico (Local, Comarcal, Provincial o Autonómico).',
            'Aquí encontrarás los servicios directos al afiliado/a y la Asesoría Jurídica del Sindicato.'
          ]
        },
        {
          heading: 'La Confederación',
          body: [
            'Es el nivel estatal que agrupa todas las Federaciones y Uniones, encargado del diálogo social al máximo nivel (Gobierno, Patronales).'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-3',
    title: 'Mi maletín de herramientas',
    icon: 'Briefcase',
    content: {
      subtitle: 'Conoce tus derechos y garantías legales (Art. 68 ET)',
      sections: [
        {
          heading: 'Crédito Horario',
          body: [
            'Dispones de una escala legal de horas mensuales (de 15h a 40h, según plantilla) para ejercer tu labor.',
            'Recuerda: Este tiempo es "patrimonio del sindicato" destinado a informar, formarte, reunirte y actuar en defensa de la plantilla.'
          ]
        },
        {
          heading: 'Derecho de Información',
          body: [
            'Como delegado/a sindical tienes derecho a acceder a la misma documentación e informes que el Comité de Empresa.'
          ]
        },
        {
          heading: 'Audiencia Previa',
          body: [
            'Tienes el derecho irrenunciable a ser oído por la empresa ANTES de que se sancione a un afiliado/a o a otro representante laboral.'
          ]
        },
        {
          heading: 'Prioridad de Permanencia',
          body: [
            'Gozas de máxima protección frente a despidos, especialmente los basados en causas económicas, técnicas, organizativas o de producción (ERE/ERTE).'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-4',
    title: 'Mi compromiso y Ética',
    icon: 'Star',
    content: {
      subtitle: 'Responsabilidades de llevar las siglas de UGT',
      sections: [
        {
          heading: 'Probidad y Honestidad',
          body: [
            'Tu conducta debe ser intachable. Eres la imagen de UGT ante la plantilla y la dirección.',
            'Nunca utilices tu puesto de representación para obtener ventajas laborales personales.'
          ]
        },
        {
          heading: 'Deber de Sigilo Profesional',
          body: [
            'Recibirás información confidencial de la empresa. Tienes la obligación legal y ética de mantener el sigilo cuando la dirección lo exija expresamente.',
            'Aplica la "Confidencialidad Estratégica": usa los datos de forma inteligente en la negociación sin vulnerar la legalidad.'
          ]
        },
        {
          heading: 'Captación de Afiliados',
          body: [
            'Un sindicato sin afiliados pierde su fuerza de presión. Aprovecha tus rondas, reuniones e hitos conseguidos para fomentar la afiliación a UGT.'
          ]
        },
        {
          heading: 'Formación Continua',
          body: [
            'La ley laboral evoluciona constantemente. Es tu deber formarte continuamente acudiendo a los cursos que ofrece el sindicato.'
          ]
        },
        {
          heading: 'Resiliencia ante el Desánimo',
          body: [
            'La acción sindical es una carrera de fondo y, a menudo, ingrata. Afrontarás incomprensión de la dirección e, incluso, apatía o críticas infundadas por parte de tu propia plantilla.',
            'Las circunstancias adversas no deben minar tu moral. Ante la frustración, no te aísles ni asumas las cargas a solas. Apóyate siempre en tu equipo de UGT Salamanca; compartir la carga emocional es vital para no quemarse.'
          ]
        },
        {
          heading: 'Huye del Acomodo y la Burocracia',
          body: [
            'Es un enorme peligro caer en la idiosincrasia del acomodo. Esta desidia o inercia no solo amenaza en el puesto de trabajo, sino que a veces también permea dentro del propio sindicato o en tu Sección Sindical.',
            'No te conviertas en un "delegado de despacho". Lucha contra actitudes pasivas, evita burocratizarte y no aceptes el "siempre se ha hecho así" dentro de nuestra organización.',
            'Mantén intacta la rebeldía del primer día: pisa tu centro de trabajo, dinamiza tu estructura sindical, agita conciencias y exige proactividad tanto a la empresa como a tu propio equipo de UGT. El sindicato está vivo si tú lo mantienes vivo.'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-5',
    title: 'Gestión del Tiempo Sindical',
    icon: 'Clock',
    content: {
      subtitle: 'Uso racional y estratégico de tu crédito horario',
      sections: [
        {
          heading: 'La preautorización NO es necesaria',
          body: [
            'La empresa no debe autorizar previamente tu tiempo sindical, pero TÚ debes "preavisar" con una antelación mínima razonable.'
          ]
        },
        {
          heading: 'Justificación Genérica',
          body: [
            'No estás obligado/a a dar detalles exhaustivos que vulneren tu privacidad o la estrategia sindical.',
            'Basta con una justificación genérica en el parte: "Reunión con el sindicato", "Gestiones en el local sindical", etc.'
          ]
        },
        {
          heading: 'Bolsas de Horas (Acumulación)',
          body: [
            'El convenio colectivo puede permitir la acumulación de las horas de los distintos delegados/as en bolsas.',
            'Gestiona las horas de manera solidaria junto con tu Sección Sindical para cubrir las necesidades reales donde se te precise.'
          ]
        }
      ]
    }
  }
];

export const checklistPhases: ChecklistPhase[] = [
  {
    phase: 'primeros-30',
    title: 'Los Primeros 30 Días',
    items: [
      { id: '30-1', text: 'Comprobar el registro oficial del acta de elecciones.' },
      { id: '30-2', text: 'Notificar y hacer presentación formal a la Dirección o RR.HH.' },
      { id: '30-3', text: 'Definir la ubicación del Tablón Sindical y decorarlo con identidad UGT.' },
      { id: '30-4', text: 'Identificar convenio aplicable y localizar artículos de derechos y crédito horario.' },
      { id: '30-5', text: 'Crear sistema básico de documentación (carpeta actas, registro de solicitudes).' },
    ]
  },
  {
    phase: 'primeros-90',
    title: 'A los 90 Días',
    items: [
      { id: '90-1', text: 'Celebrar asamblea informativa y levantar actas (problemas recurrentes).' },
      { id: '90-2', text: 'Solicitar información estructural formal (contratación, jornada, horas extra).' },
      { id: '90-3', text: 'Asegurar protocolo de horas con RRHH (preaviso y justificación razonable).' },
      { id: '90-4', text: 'Reunión de coordinación en la sede de UGT (Federación).' },
    ]
  },
  {
    phase: 'primeros-180',
    title: 'A los 180 Días',
    items: [
      { id: '180-1', text: 'Elaborar un plan de acción sindical (3-5 objetivos medibles).' },
      { id: '180-2', text: 'Auditoría práctica de cumplimiento del convenio actual.' },
      { id: '180-3', text: 'Revisión del cumplimiento de Prevención de Riesgos Laborales (PRL).' },
      { id: '180-4', text: 'Cierre de "informe semestral" a la plantilla: avances y lucha activa.' },
    ]
  }
];

export const templatesData: TemplateData[] = [
  {
    id: 'req-info',
    title: 'Modelo A: Solicitud de Información',
    description: 'Plantilla para solicitar documentación obligatoria a la empresa (Art. 64 ET).',
    content: `A la atención de: [Dirección / RR.HH. / Gerencia]
Empresa: [Nombre + CIF]
Centro: [Dirección]
Fecha: [dd/mm/aaaa]

ASUNTO: Solicitud de información para el ejercicio de funciones de representación

D./Dña. [Nombre y apellidos], en calidad de [delegado/a de personal / miembro del comité de empresa] por UGT,
EXPONE:
1) Que, para el adecuado ejercicio de las funciones de representación, resulta necesaria la siguiente información/documentación:
- [lista concreta: plantilla por centros, contratos temporales, subcontratas, registro jornada, etc.]
2) Que la información se solicita en formato [digital / papel] y, en su caso, con el carácter reservado que la empresa estime y comunique expresamente.

SOLICITA:
Que se facilite la información indicada en el plazo de [X días hábiles] o, en su defecto, se proponga fecha y formato de entrega.

Firma:
[Nombre + DNI]
[Cargo / Órgano]`
  },
  {
    id: 'uso-credito',
    title: 'Modelo B: Aviso de Crédito Horario',
    description: 'Comunicación de ausencia por funciones sindicales (preaviso justificado).',
    content: `A la atención de: [RR.HH. / Responsable de centro]
Fecha: [dd/mm/aaaa]

ASUNTO: Comunicación de ausencia por funciones sindicales o de representación (preaviso)

D./Dña. [Nombre], [cargo representativo] de UGT, comunica que hará uso de:
- [crédito horario / permiso retribuido por funciones de representación]

Día(s): [dd/mm/aaaa]
Horario aproximado: [hh:mm - hh:mm]
Finalidad (justificación genérica): [reunión / asamblea / formación / consulta legal / actividad representativa]

Se ruega confirmación de recepción.

Firma:`
  },
  {
    id: 'convocatoria-asamblea',
    title: 'Modelo C: Convocatoria de Asamblea',
    description: 'Aviso formal para convocar a la plantilla o a una parte de ella.',
    content: `A la atención de: [Dirección de centro]
Fecha: [dd/mm/aaaa]

ASUNTO: Convocatoria de asamblea de trabajadores

El [comité de empresa / delegados de personal], convoca asamblea de la plantilla del centro:
Fecha: [dd/mm/aaaa]
Hora: [hh:mm]
Lugar: [sala / comedor / espacio habilitado]

Orden del día:
1) [punto 1]
2) [punto 2]
3) Ruegos y preguntas

Presidirá la asamblea: [órgano / nombre(s)]
Se adoptarán medidas para garantizar el normal desarrollo.

Firma:`
  },
  {
    id: 'req-vulneracion',
    title: 'Modelo D: Requerimiento Previo',
    description: 'Requerimiento para cese de conducta lesiva de derechos representativos.',
    content: `A la atención de: [Dirección / RR.HH.]
Fecha: [dd/mm/aaaa]

ASUNTO: Requerimiento para cese de conducta lesiva de derechos representativos

EXPONE:
- Hechos: [cronología breve y objetiva]
- Derecho afectado: [información/consulta, crédito horario, etc.]
- Impacto: [imposibilidad de ejercer funciones / perjuicio colectivo]

REQUIERE:
1) Cese inmediato de la actuación descrita.
2) Restitución/normalización mediante: [entrega información / reconocimiento horas / convocatoria reunión, etc.]
3) Propuesta de reunión en fecha [X] para resolver.

Se advierte que, de persistir, se valorará acudir a mediación/conciliación, ITSS y/o vía judicial.

Firma:`
  },
  {
    id: 'denuncia-itss',
    title: 'Modelo E: Denuncia ITSS',
    description: 'Estructura básica para elevar denuncia a la Inspección de Trabajo.',
    content: `DESTINATARIO: Inspección Provincial de Trabajo y Seguridad Social de [Provincia]

DATOS EMPRESA: [Nombre, CIF, centro, actividad]

HECHOS: [descripción detallada con fechas, turnos, personas implicadas]

NORMATIVA AFECTADA (si se conoce): [laboral / igualdad / PRL / seguridad social]

PRUEBAS: [adjuntos y dónde se obtienen]

PETICIÓN: Que se investiguen los hechos y se adopten medidas conforme a derecho.

Firma y datos del denunciante (según requisito de identificación formal)`
  }
];

export const faqsData: FAQData[] = [
  {
    id: 'faq-1',
    question: '¿Tengo que resolverlo todo yo solo/a?',
    answer: 'Rotundamente NO. La regla de oro en el sindicalismo es la Coordinación. Cualquier problema complejo debe ser consultado con tu Sección Sindical, la Federación o nuestra asesoría jurídica.'
  },
  {
    id: 'faq-2',
    question: '¿Qué hago si la empresa me exige detalles sobre mis horas sindicales?',
    answer: 'La empresa tiene derecho al preaviso y a una justificación, pero la doctrina admite una justificación GENÉRICA ("reunión", "formación", "consulta legal"). El exceso de detalle puede vulnerar la libertad sindical.'
  },
  {
    id: 'faq-3',
    question: 'Error común: "Hacer sin documentar"',
    answer: 'PELIGRO: Si no dejas escritos o actas, pierdes la trazabilidad y la capacidad de prueba en mediación, ITSS o juzgado. Siempre solicita acuse de recibo físico o manda correos trazables.'
  },
  {
    id: 'faq-4',
    question: 'Error común: "Horas sin patrón / Uso impropio"',
    answer: 'Ausentarte sin justificación mínima dispara el conflicto. El crédito horario es instrumental; su uso "privado" o injustificado es sancionable. Mantén coherencia y trazabilidad.'
  }
];

export const flowStepsData: FlowStep[] = [
  { id: '1', title: 'Detección del Problema', desc: 'Recoger hechos y pruebas físicas.', note: 'Partes, cuadrantes, correos, testigos.' },
  { id: '2', title: 'Clasificar el Conflicto', desc: 'Identificar si es: individual, colectivo, PRL o Derechos Fundamentales.' },
  { id: '3', title: 'Consulta Interna UGT', desc: 'Escalar a Sección Sindical, Federación o Asesoría Jurídica de UGT.' },
  { id: '4', title: 'Actuación Interna con Empresa', desc: 'Reunión ejecutiva y solicitud escrita.', note: 'Levantar siempre ACTA o documento de prueba.' },
  { id: '5', title: '¿Acuerdo y Resolución?', desc: 'Si hay acuerdo, cerrar con actas y dar seguimiento.' },
  { id: '6', title: 'Escalada Extrajudicial', desc: 'En caso negativo: mediación / conciliación ante servicio competente.' },
  { id: '7', title: 'Vía Judicial o ITSS', desc: 'Si falla extrajudicial, presentar denuncia a ITSS o demanda social.', note: 'Cuidado con los plazos de caducidad.' }
];

export const repMatrixData: MatrixRow[] = [
  { figura: 'Delegado/a de personal', base: 'ET art. 62', acceso: 'Sufragio personal, directo y secreto', umbral: '11-49 trabajadores (posible 6-10)', idea: 'Representación unitaria en centros pequeños. Mismas competencias.' },
  { figura: 'Comité de empresa', base: 'ET arts. 63, 66', acceso: 'Elección; órgano colegiado', umbral: '≥ 50 trabajadores', idea: 'Órgano colegiado con reglamento interno y capacidad de acción.' },
  { figura: 'Delegado/a sindical', base: 'LOLS art. 10', acceso: 'Elegido por y entre afiliados de la sección', umbral: '> 250 trabajadores', idea: 'Conecta estructura sindical con empresa. Garantías equiparables al comité.' },
  { figura: 'Sección sindical', base: 'LOLS art. 8', acceso: 'Constitución por afiliados', umbral: 'Puntual', idea: 'Derechos de tablón, local (Si >250) y negociación.' },
  { figura: 'Delegado/a prevención', base: 'LPRL 35-37', acceso: 'Designación por y entre representantes', umbral: 'Escala (desde 50)', idea: 'Funciones específicas PRL, reglas especiales sobre crédito horario.' }
];

export const rightsLimitsData: RightsLimitRow[] = [
  { derecho: 'Información/consulta y acceso a documentación', limite: 'SIGILO sobre información reservada y comunicada expresamente como tal.' },
  { derecho: 'Protección frente a sanciones, no discriminación', limite: 'Evitar "uso privado" o fraudulento del crédito. Actuar con coherencia.' },
  { derecho: 'Crédito horario por escala; posible acumulación', limite: 'PREAVISO y justificación genérica en ausencias por funciones sindicales.' },
  { derecho: 'Convocar asambleas y desarrollar labor informativa', limite: 'No perturbar el normal desenvolvimiento del trabajo en la empresa.' }
];

export const directoryData = {
  main: {
    name: "UGT Servicios Públicos Salamanca",
    address: "C/ Gran Vía, 79-81, 37001 SALAMANCA",
    phone: "923 271 947",
    email: "ugt@salamanca.ugt.org"
  },
  sectors: [
    { name: "Sector Local", email: "local.salamanca@ugt-sp.ugt.org" },
    { name: "A.G.E. (Central)", email: "central.salamanca@ugt-sp.ugt.org" },
    { name: "Sector Autonómico", email: "autonomica.salamanca@ugt-sp.ugt.org" },
    { name: "Educación Pública", email: "educacion.salamanca@ugt-sp.ugt.org" },
    { name: "Enseñanza Privada", email: "ensenanzaprivada.salamanca@ugt-sp.ugt.org" },
    { name: "Univ. de Salamanca", email: "ugt@usal.es" },
    { name: "Sanidad", email: "sanidad.salamanca@ugt-sp.ugt.org" },
    { name: "Sociosanitarios", email: "sociosanitarios.salamanca@ugt-sp.ugt.org" },
    { name: "Sector Postal", email: "postal.salamanca@ugt-sp.ugt.org" }
  ],
  transversal: [
    { name: "Secretaría General", email: "general.salamanca@ugt-sp.ugt.org" },
    { name: "Organización", email: "organizacion.salamanca@ugt-sp.ugt.org" },
    { name: "Administración", email: "administracion.salamanca@ugt-sp.ugt.org" },
    { name: "Formación", email: "formacion.salamanca@ugt-sp.ugt.org" },
    { name: "Salud Laboral", email: "saludlaboral.salamanca@ugt-sp.ugt.org" }
  ]
};

export const crisisSteps: CrisisStep[] = [
  {
    id: 'start',
    title: '¿Qué ha sucedido?',
    description: 'Selecciona la situación para recibir instrucciones inmediatas.',
    actions: [],
    options: [
      { label: 'Carta de Despido / Sanción', nextStepId: 'despido' },
      { label: 'Modificación de Horario / Turno', nextStepId: 'horario' },
      { label: 'Accidente Laboral', nextStepId: 'accidente' },
      { label: 'Acoso o Conflicto Grave', nextStepId: 'acoso' }
    ]
  },
  {
    id: 'despido',
    title: 'Protocolo ante Despido/Sanción',
    description: 'Actúa con calma. Tu firma con reservas es tu mejor defensa inicial.',
    actions: [
      'Escribe "NO CONFORME" junto a tu firma obligatoriamente.',
      'Pon la FECHA Y HORA real del momento de la firma.',
      'Pide una copia de todo lo que firmes. Si se niegan, no firmes nada.',
      'No des explicaciones ni reconozcas hechos en ese momento.'
    ],
    templateId: 'req-vulneracion',
    isFinal: true
  },
  {
    id: 'horario',
    title: 'Modificación de Condiciones',
    description: 'La empresa debe seguir un procedimiento legal (Art. 41 ET).',
    actions: [
      'Solicita la notificación por escrito si ha sido verbal.',
      'Comprueba si se han dado los 15 días de preaviso legal.',
      'No firmes la aceptación sin consultar antes con el sindicato.',
      'Documenta cómo afecta este cambio a tu conciliación.'
    ],
    templateId: 'req-info',
    isFinal: true
  },
  {
    id: 'accidente',
    title: 'Urgencia: Accidente Laboral',
    description: 'La prioridad es la salud y la seguridad jurídica posterior.',
    actions: [
      'Asegúrate de que el trabajador recibe asistencia médica inmediata.',
      'Llama a Salud Laboral de UGT Salamanca inmediatamente.',
      'Haz fotos del lugar del accidente y recoge nombres de testigos.',
      'Verifica si se ha avisado a la Inspección de Trabajo si es grave.'
    ],
    isFinal: true
  },
  {
    id: 'acoso',
    title: 'Protocolo de Acoso/Conflicto',
    description: 'Protege a la víctima y blinda las pruebas.',
    actions: [
      'Activa el Protocolo de Acoso de la empresa de inmediato.',
      'Informa a la Federación de UGT de forma confidencial.',
      'Recomienda a la persona afectada que no borre ningún mensaje/email.',
      'Evita confrontaciones directas sin presencia de otro delegado.'
    ],
    isFinal: true
  }
];
