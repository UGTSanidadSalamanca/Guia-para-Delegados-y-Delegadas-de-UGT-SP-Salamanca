import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { 
  goldenRules, modulesData, checklistPhases, 
  templatesData, faqsData, repMatrixData, rightsLimitsData, flowStepsData, directoryData
} from '../data';
import { ChecklistItem } from '../types';

export function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="bg-white p-6 md:p-10 shadow-sm border-2 border-zinc-900">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] uppercase text-zinc-900 mb-6">
          ¡Bienvenido/a a la <br/><span className="text-red-600">primera línea!</span>
        </h2>
        <p className="text-zinc-600 text-lg font-bold leading-snug mb-8">
          Has dado un paso valiente al asumir la representación de tus compañeros y compañeras bajo las siglas de <strong className="text-zinc-900 font-black">UGT</strong>. Esta herramienta interactiva es tu manual de supervivencia para los primeros 180 días en el cargo.
        </p>
        <div className="p-6 bg-red-50 border-l-4 border-red-600 flex items-start gap-4">
          <Icon name="Zap" className="w-8 h-8 flex-shrink-0 text-red-600 mt-1" />
          <div className="text-sm font-semibold italic text-red-900">
            <strong className="font-black uppercase text-red-600 block mb-1 text-xs tracking-widest">Recuerda:</strong> 
            Tu labor como delegado/a es fundamental para lograr una sociedad más justa. Eres el enlace vital entre la plantilla y el Sindicato.
          </div>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-3xl font-black text-zinc-900 mb-6 uppercase tracking-tighter flex items-center gap-3">
          <span className="bg-red-600 text-white p-2"><Icon name="Star" className="w-8 h-8" /></span>
          Las Cuatro Reglas de Oro
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goldenRules.map((rule, idx) => (
            <motion.div 
              key={rule.id}
              whileHover={{ y: -4 }}
              className="bg-white p-6 shadow-sm border-2 border-zinc-200 hover:border-zinc-900 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-zinc-900 text-white font-black w-12 h-12 flex items-center justify-center shrink-0 text-xl tracking-tighter">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xl font-black uppercase text-zinc-900 tracking-tight leading-none">{rule.title}</h4>
              </div>
              <p className="text-zinc-600 text-sm font-bold leading-relaxed border-l-2 border-red-600 pl-4 mt-auto">
                {rule.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ModuleView({ moduleId }: { moduleId: string }) {
  const module = modulesData.find(m => m.id === moduleId);
  
  if (!module) return <div>Module not found</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="bg-white p-8 border-b-4 border-red-600 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-zinc-900 text-white p-3 shrink-0">
              <Icon name={module.icon} className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-zinc-900">{module.title}</h2>
          </div>
          {module.content.subtitle && (
            <p className="text-sm font-black leading-tight text-zinc-500 uppercase tracking-widest mt-6">{module.content.subtitle}</p>
          )}
        </div>
      </header>

      <div className="space-y-6">
        {module.content.sections.map((section, idx) => (
          <div key={idx} className="bg-white p-8 border-2 border-zinc-200">
            <h3 className="text-2xl font-black text-zinc-900 mb-6 uppercase tracking-tight border-b-2 border-zinc-100 pb-4">
              <span className="text-red-600 mr-2">{String(idx + 1).padStart(2, '0')}</span> 
              {section.heading}
            </h3>
            <ul className="space-y-4">
              {section.body.map((paragraph, pIdx) => (
                <li key={pIdx} className="flex gap-4 text-zinc-700 font-bold leading-relaxed">
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-600" />
                  </div>
                  <span className="text-sm">{paragraph}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChecklistView() {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('ugt-checklist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const handleToggle = (id: string) => {
    setCheckedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem('ugt-checklist', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const totalItems = checklistPhases.reduce((acc, p) => acc + p.items.length, 0);
  const progress = Math.round((checkedIds.size / totalItems) * 100) || 0;

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="bg-white p-8 border-2 border-zinc-900 mb-8">
        <div className="flex items-start gap-6 mb-8">
          <div className="bg-red-600 text-white p-4 shrink-0">
            <Icon name="ClipboardCheck" className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-zinc-900 mb-4">Checklist<br/><span className="text-red-600">Temporal</span></h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Plan de acción progresiva (6 Meses)</p>
          </div>
        </div>

        <div className="mb-3 flex justify-between text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">
          <span>Implantación del plan</span>
          <span className="text-red-600">{progress}%</span>
        </div>
        <div className="w-full bg-zinc-200 h-2">
          <motion.div 
            className="h-full bg-red-600"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="space-y-8">
        {checklistPhases.map((phase) => (
          <div key={phase.phase} className="bg-white border-2 border-zinc-200">
            <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">{phase.title}</h3>
            </div>
            <div className="p-4 space-y-2">
              {phase.items.map((item) => {
                const isChecked = checkedIds.has(item.id);
                return (
                  <motion.div 
                    key={item.id}
                    className={["flex items-center gap-4 p-4 border-2 transition-colors cursor-pointer", isChecked ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-red-600'].join(' ')}
                    onClick={() => handleToggle(item.id)}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className={["flex items-center justify-center w-8 h-8 border-2 shrink-0 transition-colors", isChecked ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-300 text-transparent'].join(' ')}>
                      <Icon name="Check" className="w-5 h-5" />
                    </div>
                    <span className={["text-sm font-bold uppercase leading-snug", isChecked ? 'text-zinc-400 line-through' : 'text-zinc-900'].join(' ')}>
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TemplatesView() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500 space-y-8">
      <div className="flex items-start gap-6 mb-8">
        <div className="bg-red-600 text-white p-4 shrink-0">
          <Icon name="FileText" className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-zinc-900 mb-4">Modelos <br/><span className="text-red-600">Adaptables</span></h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Plantillas base (Copiar y pegar)</p>
        </div>
      </div>

      <div className="grid gap-8">
        {templatesData.map(tpl => (
          <div key={tpl.id} className="bg-white border-2 border-zinc-900 flex flex-col">
            <div className="bg-zinc-100 p-6 flex flex-col md:flex-row md:items-start justify-between gap-6 border-b-2 border-zinc-900">
              <div>
                <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight leading-none mb-3">{tpl.title}</h3>
                <p className="text-sm font-bold text-zinc-600">{tpl.description}</p>
              </div>
              <button
                onClick={() => handleCopy(tpl.id, tpl.content)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider transition-colors shrink-0"
                title="Copiar al portapapeles"
              >
                {copiedId === tpl.id ? (
                  <><Icon name="Check" className="w-4 h-4" /> Copiado</>
                ) : (
                  <><Icon name="Copy" className="w-4 h-4" /> Copiar M.</>
                )}
              </button>
            </div>
            <div className="p-8 overflow-x-auto bg-white">
              <pre className="text-xs text-zinc-800 font-mono font-bold whitespace-pre-wrap leading-loose">
                {tpl.content.trim()}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FAQView() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="mb-10 flex flex-col md:flex-row items-start md:items-end justify-between border-b-4 border-red-600 pb-8 gap-4">
        <div>
          <div className="inline-flex bg-zinc-900 text-white p-3 mb-6">
            <Icon name="MessageCircleQuestion" className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-zinc-900">Preguntas<br/><span className="text-red-600">Rápidas</span></h2>
        </div>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-right max-w-[200px]">Respuestas directas a dudas comunes</p>
      </div>

      <div className="space-y-4">
        {faqsData.map(faq => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className={["bg-white border-2 transition-colors", isOpen ? 'border-zinc-900' : 'border-zinc-200 hover:border-zinc-400'].join(' ')}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                <span className="text-lg font-black uppercase tracking-tight text-zinc-900 pr-4">{faq.question}</span>
                <div className={["w-8 h-8 flex items-center justify-center shrink-0 border-2", isOpen ? 'border-red-600 text-red-600' : 'border-zinc-300 text-zinc-400'].join(' ')}>
                  <Icon name={isOpen ? "ChevronDown" : "ChevronRight"} className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-zinc-600 text-sm font-bold leading-relaxed border-t-2 border-zinc-100 mt-2">
                      <div className="border-l-4 border-red-600 pl-4 py-1">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ConflictFlowView() {
  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-right-4 duration-500 space-y-8">
      <header className="bg-white p-8 border-b-4 border-red-600 shadow-sm flex items-start gap-4">
        <div className="bg-zinc-900 text-white p-3 shrink-0 hidden md:block">
           <Icon name="GitMerge" className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-zinc-900 mb-4">Flujo de <br/><span className="text-red-600">Conflictos</span></h2>
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">De lo interno a lo externo ante un problema laboral.</p>
        </div>
      </header>

      <div className="bg-white border-2 border-zinc-200 p-6 md:p-10 relative shadow-sm">
        {/* Vertical Line */}
        <div className="absolute left-[39px] md:left-[55px] top-[40px] bottom-[40px] w-1 bg-zinc-200 z-0"></div>

        <div className="space-y-12 relative z-10">
          {flowStepsData.map((step, idx) => (
            <div key={step.id} className="flex items-start gap-6 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-zinc-900 rounded-full flex items-center justify-center font-black text-lg md:text-xl shrink-0 text-red-600 group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-colors">
                {step.id}
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight mb-2">{step.title}</h3>
                <p className="text-zinc-600 font-bold text-sm mb-1">{step.desc}</p>
                {step.note && (
                  <p className="text-xs font-semibold italic text-red-700 bg-red-50 p-2 border-l-2 border-red-600 mt-2">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MatrixView() {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-right-4 duration-500 space-y-10">
      <header className="bg-white p-8 border-b-4 border-red-600 shadow-sm flex items-start gap-4">
        <div className="bg-zinc-900 text-white p-3 shrink-0 hidden md:block">
           <Icon name="Table2" className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-zinc-900 mb-4">Esquemas de<br/><span className="text-red-600">Representación</span></h2>
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">¿Qué figura soy y cómo se activa?</p>
        </div>
      </header>

      <div className="bg-white border-2 border-zinc-900 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-zinc-900 text-white">
              <th className="p-4 font-black uppercase text-xs tracking-wider border-r border-zinc-700">Figura</th>
              <th className="p-4 font-black uppercase text-xs tracking-wider border-r border-zinc-700">Base Legal</th>
              <th className="p-4 font-black uppercase text-xs tracking-wider border-r border-zinc-700">Acceso / Votación</th>
              <th className="p-4 font-black uppercase text-xs tracking-wider border-r border-zinc-700">Umbral</th>
              <th className="p-4 font-black uppercase text-xs tracking-wider">Idea Fuerza</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {repMatrixData.map((row, idx) => (
              <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50">
                <td className="p-4 border-r border-zinc-200 font-black text-red-600 text-sm whitespace-nowrap">{row.figura}</td>
                <td className="p-4 border-r border-zinc-200 font-bold text-zinc-500 text-xs whitespace-nowrap">{row.base}</td>
                <td className="p-4 border-r border-zinc-200 font-bold text-zinc-800 text-xs">{row.acceso}</td>
                <td className="p-4 border-r border-zinc-200 font-bold text-zinc-800 text-xs">{row.umbral}</td>
                <td className="p-4 font-semibold text-zinc-700 text-xs italic">{row.idea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-black text-zinc-900 mb-4 uppercase tracking-tighter flex items-center gap-2">
          <Icon name="ShieldAlert" className="text-red-600" />
          Derechos vs Obligaciones (Límites)
        </h3>
        <div className="bg-white border-2 border-zinc-900 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-zinc-100 text-zinc-900 border-b-2 border-zinc-900">
                <th className="p-4 font-black uppercase text-xs tracking-wider border-r-2 border-zinc-900">Derechos / Garantías</th>
                <th className="p-4 font-black uppercase text-xs tracking-wider">Límites / Obligaciones</th>
              </tr>
            </thead>
            <tbody>
              {rightsLimitsData.map((row, idx) => (
                <tr key={idx} className="border-b border-zinc-200">
                  <td className="p-4 border-r-2 border-zinc-900 font-bold text-zinc-800 text-sm">{row.derecho}</td>
                  <td className="p-4 font-bold text-red-700 text-sm">{row.limite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function EmergenciasView() {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-4 duration-500 space-y-8">
      <header className="bg-red-600 p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b-4 border-zinc-900">
        <div className="flex items-center gap-4">
          <div className="bg-white text-red-600 p-3 shrink-0">
             <Icon name="AlertTriangle" className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-white mb-2">Protocolos de<br/><span className="text-zinc-900">Emergencia</span></h2>
            <p className="text-sm font-bold uppercase tracking-widest text-red-200">Asistencia inmediata para situaciones críticas</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PLAZOS LETALES */}
        <div className="bg-white border-4 border-zinc-900 flex flex-col">
          <div className="bg-zinc-900 p-4 flex items-center gap-3">
            <Icon name="Timer" className="text-red-500 w-6 h-6" />
            <h3 className="text-white font-black uppercase tracking-widest">Plazos Letales</h3>
          </div>
          <div className="p-6 space-y-6 flex-1">
            <div>
              <p className="text-red-600 font-black text-2xl leading-none mb-1">20 DÍAS HÁBILES</p>
              <p className="text-zinc-800 font-bold text-sm uppercase">Para demandar Despido o Sanción.</p>
              <p className="text-zinc-500 text-xs mt-1">El reloj corre. No hay margen de error.</p>
            </div>
            <div className="border-t-2 border-zinc-100 pt-4">
              <p className="text-zinc-900 font-black text-2xl leading-none mb-1">1 AÑO</p>
              <p className="text-zinc-800 font-bold text-sm uppercase">Para reclamar cantidades.</p>
              <p className="text-zinc-500 text-xs mt-1">Salarios impagados, diferencias de convenio, etc.</p>
            </div>
          </div>
        </div>

        {/* CARTA DE DESPIDO */}
        <div className="bg-white border-4 border-red-600 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5">
            <Icon name="FileWarning" className="w-32 h-32" />
          </div>
          <div className="bg-red-600 p-4 flex items-center gap-3 relative z-10">
            <Icon name="FileWarning" className="text-white w-6 h-6" />
            <h3 className="text-white font-black uppercase tracking-widest">Ante un Despido</h3>
          </div>
          <div className="p-6 space-y-4 flex-1 relative z-10">
            <p className="font-black text-xl uppercase text-zinc-900">¿Qué hago si me dan la carta ahora?</p>
            <div className="bg-red-50 border-l-4 border-red-600 p-4">
              <p className="font-black text-red-700 uppercase text-sm mb-1">1. Escribir SIEMPRE:</p>
              <p className="font-mono text-zinc-900 text-lg">"NO CONFORME"</p>
              <p className="font-bold text-sm text-zinc-600 mt-2">Junto a la FECHA DEL DÍA y TU FIRMA. La empresa NO te puede obligar a firmar un finiquito como "saldado y cerrado".</p>
            </div>
            <ul className="text-xs font-bold text-zinc-600 space-y-2 mt-4">
              <li>• <strong className="text-zinc-900">Objetivo:</strong> 20 días/año indemnización.</li>
              <li>• <strong className="text-zinc-900">Improcedente:</strong> 33 días/año (desde 2012).</li>
              <li>• Entregar copia urgente a la asesoría de UGT.</li>
            </ul>
          </div>
        </div>

        {/* EMERGENCIA PRL */}
        <div className="bg-white border-4 border-zinc-900 flex flex-col">
          <div className="bg-zinc-900 p-4 flex items-center gap-3">
            <Icon name="Activity" className="text-red-500 w-6 h-6" />
            <h3 className="text-white font-black uppercase tracking-widest">Emergencia PRL</h3>
          </div>
          <div className="p-6 space-y-4 flex-1">
            <p className="font-black text-xl uppercase text-zinc-900">Riesgo Grave e Inminente</p>
            <p className="font-bold text-sm text-zinc-600 leading-relaxed">
              Si hay un peligro inmediato que amenace la vida o salud de los trabajadores (Art. 21 LPRL):
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <span className="bg-zinc-900 text-white w-5 h-5 flex items-center justify-center font-black text-xs shrink-0 rounded">1</span>
                <span className="text-sm font-bold text-zinc-800">Cesa la actividad o evacúa el área afectada.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-zinc-900 text-white w-5 h-5 flex items-center justify-center font-black text-xs shrink-0 rounded">2</span>
                <span className="text-sm font-bold text-zinc-800">El Comité o Delegados de Prevención pueden acordar la <strong className="text-red-600">PARALIZACIÓN</strong> por mayoría.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-zinc-900 text-white w-5 h-5 flex items-center justify-center font-black text-xs shrink-0 rounded">3</span>
                <span className="text-sm font-bold text-zinc-800">Informar de inmediato a la empresa y a la ITSS.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DirectorioView() {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-right-4 duration-500 space-y-8">
      <header className="bg-white p-8 border-b-4 border-red-600 shadow-sm flex items-start gap-4">
        <div className="bg-zinc-900 text-white p-3 shrink-0 hidden md:block">
           <Icon name="Phone" className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] uppercase text-zinc-900 mb-4">Directorio<br/><span className="text-red-600">{directoryData.main.name.replace('UGT Servicios Públicos ', '')}</span></h2>
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Nunca actúes en solitario. Consulta a tu equipo.</p>
        </div>
      </header>

      {/* Main Contact */}
      <div className="bg-zinc-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-red-600">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="bg-red-600 p-4 rounded-full"><Icon name="MapPin" className="w-6 h-6" /></div>
          <div>
            <p className="font-black text-xl tracking-tight">{directoryData.main.name}</p>
            <p className="text-zinc-400 font-bold">{directoryData.main.address}</p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 w-full xl:w-auto">
          <a href={`tel:${directoryData.main.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 bg-zinc-800 hover:bg-red-600 p-4 transition-colors">
            <Icon name="Phone" className="w-5 h-5 text-red-500" />
            <span className="font-black tracking-widest">{directoryData.main.phone}</span>
          </a>
          <a href={`mailto:${directoryData.main.email}`} className="flex items-center gap-3 bg-zinc-800 hover:bg-red-600 p-4 transition-colors min-w-0">
            <Icon name="Mail" className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span className="font-bold text-sm tracking-wide break-all">{directoryData.main.email}</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SECTORES */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter border-b-2 border-red-600 pb-2">Sectores</h3>
          <div className="grid grid-cols-1 gap-3">
            {directoryData.sectors.map((contact, idx) => (
              <a key={idx} href={`mailto:${contact.email}`} className="group bg-white border-2 border-zinc-200 hover:border-zinc-900 p-4 flex items-center justify-between transition-colors shadow-sm">
                <span className="font-black text-zinc-800 uppercase tracking-tight">{contact.name}</span>
                <div className="flex items-center gap-2 text-zinc-500 group-hover:text-red-600 transition-colors min-w-0">
                  <span className="text-[10px] font-bold break-all">{contact.email}</span>
                  <Icon name="Mail" className="w-4 h-4 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* TRANSVERSAL */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter border-b-2 border-zinc-900 pb-2">Áreas Transversales</h3>
          <div className="grid grid-cols-1 gap-3">
            {directoryData.transversal.map((contact, idx) => (
              <a key={idx} href={`mailto:${contact.email}`} className="group bg-white border-2 border-zinc-200 hover:border-zinc-900 p-4 flex items-center justify-between transition-colors shadow-sm">
                <span className="font-black text-zinc-800 uppercase tracking-tight">{contact.name}</span>
                <div className="flex items-center gap-2 text-zinc-500 group-hover:text-red-600 transition-colors min-w-0">
                  <span className="text-[10px] font-bold break-all">{contact.email}</span>
                  <Icon name="Mail" className="w-4 h-4 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
