import { 
  GoldenRule, ModuleData, ChecklistPhase, TemplateData, FAQData, 
  MatrixRow, RightsLimitRow, FlowStep, DirectoryData, CrisisStep,
  AppInfo, ResourceCategory
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
  },
  {
    id: 'modulo-6',
    title: 'Representación en la Empresa',
    icon: 'Users',
    content: {
      subtitle: 'Órganos unitarios y sindicales de representación',
      sections: [
        {
          heading: 'Representación Unitaria (Elegida por la plantilla)',
          body: [
            'Delegados de Personal: En empresas o centros de hasta 49 trabajadores (1 o 3 delegados).',
            'Comité de Empresa: Órgano colegiado en centros de 50 o más trabajadores. Se rige por las reglas de la mayoría.'
          ]
        },
        {
          heading: 'Representación Sindical (Elegida por la afiliación)',
          body: [
            'Secciones Sindicales: Agrupan a todos los afiliados a UGT en la empresa. Tienen derecho a reunirse, recaudar cuotas y distribuir información.',
            'Delegados Sindicales: Representan a la Sección Sindical (en empresas de más de 250 trabajadores). Tienen garantías equiparables al Comité.'
          ]
        },
        {
          heading: 'Derechos de Información y Consulta',
          body: [
            'Evolución económica: Derecho a ser informado trimestralmente sobre la situación de la empresa y sector.',
            'Contratación: Derecho a recibir la copia básica de los contratos en un plazo de 10 días.',
            'Vigilancia y Control: Capacidad de vigilar el cumplimiento normativo en temas laborales, seguridad social, empleo e igualdad.'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-7',
    title: 'Negociación Colectiva',
    icon: 'Handshake',
    content: {
      subtitle: 'La herramienta fundamental para mejorar las condiciones',
      sections: [
        {
          heading: 'El Convenio Colectivo',
          body: [
            'Estatutarios: Tienen eficacia general o "erga omnes" (aplican a toda la plantilla, independientemente de si está afiliada).',
            'Extraestatutarios: Tienen eficacia limitada solo a los trabajadores afiliados a los sindicatos firmantes o que se adhieran expresamente. Se rigen por el Código Civil.',
            'IMPORTANTE: Un convenio extraestatutario no puede contener condiciones peores que el convenio estatutario vigente en perjuicio del trabajador.'
          ]
        },
        {
          heading: 'Procedimiento de Negociación: Plazos Clave',
          body: [
            'Inicio: Se requiere un convenio vencido y denunciado, o inexistencia de convenio aplicable.',
            'Solicitud de negociación: comunicación escrita expresando legitimación, ámbitos y materias a negociar.',
            'Constitución de la mesa negociadora: plazo máximo de 1 mes desde la recepción de la solicitud.',
            'Envío del acuerdo a la autoridad laboral: 15 días desde la firma para trámite de registro.',
            'Publicación en el B.O. correspondiente: la autoridad laboral dispone de 20 días para publicarlo.',
            'El número máximo de miembros de la mesa negociadora es de 15 por cada parte en convenios sectoriales y 13 en convenios de empresa.'
          ]
        },
        {
          heading: 'Inaplicación del Convenio (Descuelgue) — Art. 82.3 ET',
          body: [
            'La empresa puede inaplicar ciertas condiciones del convenio por causas económicas (pérdidas, reducción de ingresos 2 trimestres consecutivos), técnicas, organizativas o de producción.',
            'Materias susceptibles de descuelgue: jornada, horario, turnos, sistema de remuneración, funciones y mejoras voluntarias de la Seguridad Social.',
            'Periodo de consultas previo máximo de 15 días con los representantes legales de los trabajadores.',
            'Si no hay acuerdo: Comisión Paritaria del convenio (7 días), luego VASAC/SIMA y en última instancia la CCNCC (Comisión Consultiva Nacional de Convenios Colectivos).',
            'El acuerdo de descuelgue debe notificarse a la Comisión Paritaria y a la Autoridad Laboral y publicarse en el Boletín correspondiente.'
          ]
        },
        {
          heading: 'Vigencia, Prórroga y Ultraactividad',
          body: [
            'La duración del convenio la fijan las partes libremente. No existe duración mínima ni máxima en la ley.',
            'Prórroga automática: salvo pacto en contrario, los convenios se prorrogan de año en año si no media denuncia expresa (art. 86.1 ET).',
            'Ultraactividad: tras la denuncia del convenio, si no se alcanza acuerdo en 1 año, pierde vigencia y se aplica el convenio de ámbito superior, salvo cláusula expresa de ultraactividad en el propio convenio.',
            'Las cláusulas de ultraactividad pactadas en el convenio son válidas y deben respetarse.'
          ]
        },
        {
          heading: 'Las Comisiones Paritarias y el VASAC',
          body: [
            'Órgano paritario para la aplicación e interpretación del convenio durante su vigencia. Es contenido mínimo obligatorio del convenio (art. 85.3.e ET).',
            'Cualquier conflicto debe pasar primero por la Comisión Paritaria antes de acudir al VASAC o a la vía judicial.',
            'VASAC (Acuerdo sobre Solución Autónoma de Conflictos): regula la mediación obligatoria y el arbitraje voluntario ante el SIMA para conflictos colectivos. La mediación ante el SIMA sustituye a la conciliación administrativa previa.'
          ]
        },
        {
          heading: 'Cómo Participar en tu Convenio',
          body: [
            'Durante la negociación: escucha las reivindicaciones de los trabajadores y hazlas llegar al sindicato; participa en las reuniones convocadas por la Federación; informa a la plantilla del contenido de la plataforma reivindicativa y de la marcha de las negociaciones.',
            'Durante su vigencia: observa y garantiza el cumplimiento de lo pactado usando todos los recursos: Comisión Paritaria, VASAC/SIMA, Inspección de Trabajo y jurisdicción social.',
            'Detecta las dificultades de interpretación del convenio para mejorar la redacción en la siguiente negociación.'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-8',
    title: 'Seguridad y Salud (PRL)',
    icon: 'Shield',
    content: {
      subtitle: 'La protección de la salud en el trabajo es prioritaria',
      sections: [
        {
          heading: 'Los Delegados de Prevención',
          body: [
            'Son los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo.',
            'Son designados por y entre los representantes del personal, conforme a la escala establecida en la ley.',
            'Tienen derecho a acompañar a los técnicos en las evaluaciones, tener acceso a la información sobre riesgos y paralizar la actividad en caso de riesgo grave e inminente.'
          ]
        },
        {
          heading: 'El Comité de Seguridad y Salud',
          body: [
            'Es el órgano paritario destinado a la consulta regular y periódica de las actuaciones de la empresa en prevención.',
            'Se constituye en todas las empresas o centros de trabajo con 50 o más trabajadores.',
            'Debe reunirse trimestralmente y siempre que lo solicite alguna de las representaciones en el mismo.'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-9',
    title: 'Estructura de UGT',
    icon: 'Network',
    content: {
      subtitle: 'Conoce tu organización: quiénes somos y cómo funcionamos',
      sections: [
        {
          heading: 'La UGT: Quiénes Somos',
          body: [
            'La Unión General de Trabajadores (UGT), constituida en 1888, es un sindicato de clase, progresista, democrático e independiente de gobiernos, partidos y empresarios.',
            'Es uno de los dos sindicatos más representativos de España. Su legitimidad procede de las elecciones sindicales periódicas en las empresas.',
            'La UGT es fundadora de la Confederación Sindical Internacional (CSI) y de la Confederación Europea de Sindicatos (CES).',
            'Defiende los intereses de todos los trabajadores: fijos, temporales, en desempleo, jubilados o en búsqueda de primer empleo.'
          ]
        },
        {
          heading: 'Estructura Territorial y Profesional',
          body: [
            'La UGT se organiza en dos estructuras complementarias: la profesional (por sectores productivos) y la territorial (por CC.AA., provincias y comarcas).',
            'Estructura profesional: FICA (Industria, Construcción y Agro), FESMC (Servicios, Movilidad y Consumo) y SP-UGT (Empleados de los Servicios Públicos).',
            'Las Federaciones se encargan de la negociación colectiva sectorial, atención a problemas sectoriales y asesoramiento sindical a delegados y comités de empresa.'
          ]
        },
        {
          heading: 'La Federación de Servicios Públicos (SP-UGT)',
          body: [
            'Agrupa a los trabajadores de: Administración del Estado, Administración Autonómica y Local, Postal, Salud, Atención Social, Servicios Públicos de Gestión Privada y Enseñanza (privada y pública).',
            'Sus órganos son: el Congreso Federal (órgano supremo, cada 4 años), el Comité Federal (entre Congresos, 2 veces/año), la Comisión Ejecutiva Federal o CEF (dirección permanente) y el Consejo Federal (órgano consultivo).',
            'Web de la Federación Territorial de Castilla y León: https://www.castillayleon.ugt-sp.es — allí encontrarás comunicados, convenios colectivos firmados, informes y datos de contacto de todas las secretarías y secciones sindicales.'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-10',
    title: 'Permisos Retribuidos',
    icon: 'Clock',
    content: {
      subtitle: 'Permisos del ET y del Convenio de Dependencia que debes conocer',
      sections: [
        {
          heading: 'Otros Permisos Retribuidos del ET (Art. 37)',
          body: [
            '1 día por traslado del domicilio habitual.',
            'Tiempo indispensable para el cumplimiento de un deber inexcusable de carácter público y personal (incluido el ejercicio del voto). Si el deber ocupa más del 20% de las horas laborables en 3 meses, la empresa puede pasar al trabajador a excedencia.',
            'Para realizar funciones sindicales o de representación del personal en los términos legales o convencionales.',
            'Tiempo indispensable para exámenes prenatales y técnicas de preparación al parto.',
            'Hasta 4 días por imposibilidad de acceder al centro de trabajo por causas de fuerza mayor (catástrofes, restricciones de movilidad). Transcurridos los 4 días, el permiso se prolonga hasta que desaparezcan las circunstancias.',
            'Fuerza mayor familiar: derecho a ausentarse por motivos familiares urgentes (enfermedad o accidente de familiar o conviviente que requiera presencia inmediata). Son retribuidas las horas equivalentes a 4 días al año.'
          ]
        },
        {
          heading: 'Permisos del Convenio Marco Estatal de Dependencia',
          body: [
            '4 días de libre disposición al año, considerados a todos los efectos como días efectivamente trabajados.',
            'Se solicitan con un mínimo de 7 días de antelación (3 días en caso de urgencia). La empresa puede denegar la fecha por razones organizativas justificadas, comunicándolo con al menos 48 horas de antelación.',
            'En todo caso, el personal disfrutará de estos 4 días antes del 15 de enero del año siguiente.',
            'Se requiere un periodo de trabajo previo de 3 meses por cada día de libre disposición.'
          ]
        }
      ]
    }
  },
  {
    id: 'modulo-11',
    title: '🗳️ Elecciones Sindicales',
    icon: 'ClipboardCheck',
    content: {
      subtitle: 'La base de tu poder representativo: cómo se organizan y ganan las elecciones',
      sections: [
        {
          heading: '¿Qué son y por qué importan?',
          body: [
            'Las elecciones sindicales son el mecanismo democrático por el que los trabajadores eligen a sus representantes (Delegados de Personal o miembros del Comité de Empresa).',
            'Su resultado determina qué sindicatos son más representativos y por tanto quiénes participan en la negociación colectiva, el diálogo social y los acuerdos con la Administración.',
            'Para UGT, cada voto y cada acta de elecciones sindicales es la fuente directa de su legitimidad y su capacidad de representación. Ganar elecciones = más fuerza negociadora.'
          ]
        },
        {
          heading: 'Quién puede convocarlas y cuándo',
          body: [
            'Pueden promoverlas: las organizaciones sindicales más representativas, las que cuenten con al menos el 10% de representantes en la empresa, y los propios trabajadores (33% de la plantilla, con un mínimo de 3 personas).',
            'El preaviso debe presentarse ante la oficina pública dependiente de la autoridad laboral con al menos 10 días hábiles de antelación al inicio del proceso.',
            'Los mandatos son de 4 años. Pueden convocarse nuevas elecciones antes de su finalización si así lo acuerdan los legitimados.'
          ]
        },
        {
          heading: 'Requisitos para ser candidato/a',
          body: [
            'Tener más de 18 años y una antigüedad mínima de 3 meses en la empresa (salvo que el convenio establezca otro plazo).',
            'No haber sido objeto de sanción firme de suspensión de empleo y sueldo en el último año.',
            'Las listas deben presentarse en los plazos establecidos en el calendario electoral ante la Mesa Electoral.'
          ]
        },
        {
          heading: 'El escrutinio: Sistema D\'Hondt (Comités de Empresa)',
          body: [
            'Para los Comités de Empresa (50+ trabajadores), los votos se cuentan por el sistema proporcional D\'Hondt.',
            'Cómo funciona: los votos de cada candidatura se dividen sucesivamente por 1, 2, 3... y los puestos se asignan a los cocientes más altos hasta cubrir todos los escaños.',
            'Ejemplo con 3 puestos: UGT 100 votos, CCOO 60 votos → cocientes: UGT (100, 50, 33), CCOO (60, 30). Resultado: UGT 2 escaños, CCOO 1.',
            'Para Delegados de Personal (menos de 50 trabajadores): sistema mayoritario, gana quien más votos obtiene individualmente.'
          ]
        },
        {
          heading: 'La Mesa Electoral',
          body: [
            'La Mesa Electoral gestiona todo el proceso: admite candidaturas, supervisa la votación, realiza el escrutinio y levanta el acta.',
            'Está formada por el trabajador de mayor antigüedad, el de mayor edad y el de menor edad en la empresa.',
            'Cualquier incidencia, impugnación de candidatura o reclamación debe dirigirse a la Mesa Electoral en los plazos establecidos.'
          ]
        },
        {
          heading: '🔧 Herramienta Interactiva: Manual de Elecciones UGT',
          body: [
            'Accede a la webapp oficial con calculadora de representantes, simulador de escrutinio D\'Hondt, calendarios de plazos y modelos de documentos: https://guiaeleccionesugt.netlify.app/',
            'Descarga el manual completo en PDF: https://drive.google.com/file/d/1FR-c149ZreyTDFrO0BVf2-I-TpKZdfxe/view?usp=sharing'
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
      { label: 'Impago de Salarios', nextStepId: 'impago' },
      { label: 'Acoso o Conflicto Grave', nextStepId: 'acoso' },
      { label: 'Inspección de Trabajo', nextStepId: 'inspeccion' },
      { label: 'Huelga / Paro Urgente', nextStepId: 'huelga' }
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
  },
  {
    id: 'impago',
    title: 'Impago de Salarios',
    description: 'El salario es un derecho fundamental y su falta es falta grave.',
    actions: [
      'Recopila todas las nóminas impagadas.',
      'Presenta escrito de reclamación interna solicitando fecha de abono.',
      'Recuerda que tienes 1 año para reclamar cantidades.',
      'Si el impago es generalizado, contacta con la asesoría jurídica.'
    ],
    templateId: 'req-info',
    isFinal: true
  },
  {
    id: 'inspeccion',
    title: 'Inspección de Trabajo',
    description: 'Presencia de un Inspector/a en el centro de trabajo.',
    actions: [
      'Acompaña al Inspector/a en todo momento (tienes derecho legal).',
      'Responde con la verdad pero de forma concisa.',
      'Anota qué documentos pide y qué áreas visita.',
      'Informa inmediatamente a la sede de UGT sobre la visita.'
    ],
    isFinal: true
  },
  {
    id: 'huelga',
    title: 'Huelga / Paro Urgente',
    description: 'La huelga es un derecho constitucional protegido.',
    actions: [
      'Verifica que la convocatoria sea legal y esté registrada.',
      'No impidas físicamente el acceso, pero ejerce el derecho al piquete informativo.',
      'Controla que no haya esquiroles (trabajadores de otras áreas o empresas).',
      'Documenta cualquier presión o amenaza de la empresa.'
    ],
    isFinal: true
  }
];

export const appInfo: AppInfo = {
  desarrollador: "Enrique Sánchez Hernández",
  cargo: "Secretaría de Formación y Comunicación de UGT Servicios Públicos en Salamanca",
  año: 2026
};

export const resourcesData: ResourceCategory[] = [
  {
    id: "estatutos",
    title: "Estatutos, Normativa y Ética",
    icon: "Shield",
    links: [
      { titulo: "Estatutos y Reglamentos de UGT Servicios Públicos", url: "https://ugt-sp.es/wp-content/uploads/2023/01/Estatutos_Federales_defi.pdf" },
      { titulo: "Estatutos Federales (Resolución 2025)", url: "https://ugt-sp.es/wp-content/uploads/RESOLUCION-ESTATUTOS-06-JUNIO-2025-para-Web.pdf" },
      { titulo: "Estatutos Confederales de UGT", url: "https://www.ugt.es/sites/default/files/portal-transparencia/ESTATUTOS%20CONFEDERALES-solo.pdf" },
      { titulo: "Código Ético de UGT", url: "https://www.ugt.es/sites/default/files/descargas/UGT-CodigoEtico.pdf" },
      { titulo: "Normativa Interna de UGT", url: "https://www.ugt.es/sites/default/files/normativa-interna-43-02092020-v2.pdf" }
    ]
  },
  {
    id: "manuales",
    title: "Manuales para Delegados",
    icon: "Archive",
    links: [
      { titulo: "Guía Oficial del Delegado Sindical UGT (Web oficial SP-CyL)", url: "https://castillayleon.ugt-sp.es/guia-del-delegado-sindical/" },
      { titulo: "Manual del Delegado de Prevención (UGT)", url: "https://www.ugt.es/sites/default/files/manual_actuacion_dp_web.pdf" }
    ]
  },
  {
    id: "legislacion",
    title: "Legislación y Portales",
    icon: "FileText",
    links: [
      { titulo: "Estatuto de los Trabajadores (Texto consolidado BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430" },
      { titulo: "Ley Orgánica de Libertad Sindical (LOLS)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1985-16660" },
      { titulo: "Ley de Prevención de Riesgos Laborales (LPRL)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292" },
      { titulo: "Ley Reguladora de la Jurisdicción Social (LRJS)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2011-15936" },
      { titulo: "Portal de Denuncias de la Inspección de Trabajo (OEITSS)", url: "https://oeitss.gob.es/tramites/personas-trabajadoras/denuncia" },
      { titulo: "Registro de Convenios Colectivos (REGCON)", url: "https://expinterweb.mites.gob.es/regcon/" }
    ]
  },
  {
    id: "ambito",
    title: "Ámbito Local y Sectorial",
    icon: "Map",
    links: [
      { titulo: "UGT Salamanca (Unión Provincial)", url: "https://ugtcyl.es/web/uniones/ugt-salamanca" },
      { titulo: "UGT Servicios Públicos Castilla y León", url: "https://castillayleon.ugt-sp.es/" },
      { titulo: "Sección Sindical UGT - Diputación de Salamanca", url: "https://transparencia.lasalina.es/opencms/opencms/transparencia/organigramaylegislacion/sindicatos/ugt.html" }
    ]
  },
  {
    id: "formacion",
    title: "Formación y Jurisprudencia",
    icon: "Zap",
    links: [
      { titulo: "Escuela Julián Besteiro (Formación Sindical)", url: "https://escuelajulianbesteiro.ugt.org/formacion-sindical-para-afiliados-delegados-y-cuadros-sindicales-de-ugt" },
      { titulo: "Doctrina del Tribunal Constitucional sobre Libertad Sindical", url: "https://hj.tribunalconstitucional.es/es/Resolucion/Show/4253" },
      { titulo: "Sentencia sobre Crédito Horario (Septiembre 2025)", url: "https://www.aparicioasociados.net/wp-content/uploads/2025/10/STS-18-septiembre-2025.pdf" }
    ]
  },
  {
    id: "elecciones",
    title: "🗳️ Elecciones Sindicales",
    icon: "ClipboardCheck",
    links: [
      { titulo: "Manual Interactivo de Elecciones UGT (Webapp: calculadora, simulador D'Hondt, modelos)", url: "https://guiaeleccionesugt.netlify.app/" },
      { titulo: "Manual de Elecciones Sindicales UGT (Descargar PDF)", url: "https://drive.google.com/file/d/1FR-c149ZreyTDFrO0BVf2-I-TpKZdfxe/view?usp=sharing" }
    ]
  }
];
