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
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-zinc-900 mb-6">
          ¡Bienvenido/a a la <br/><span className="text-red-600">primera línea!</span>
        </h2>
        <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-2xl">
          Has dado un paso valiente al asumir la representación de tus compañeros y compañeras bajo las siglas de <strong className="text-zinc-900 font-bold">UGT</strong>.
        </p>
        <div className="p-6 bg-red-50 rounded-2xl flex items-start gap-5">
          <div className="bg-red-600 p-3 rounded-xl shadow-lg shadow-red-200">
            <Icon name="Zap" className="w-6 h-6 text-white" />
          </div>
          <div className="text-sm font-medium text-red-900 leading-relaxed">
            <strong className="font-bold uppercase text-red-600 block mb-1 text-xs tracking-widest">Recuerda:</strong> 
            Tu labor como delegado/a es fundamental para lograr una sociedad más justa. Eres el enlace vital entre la plantilla y el Sindicato.
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-3xl font-black text-zinc-900 mb-8 tracking-tight flex items-center gap-4">
          <div className="bg-red-600 text-white p-3 rounded-2xl shadow-xl shadow-red-200">
            <Icon name="Star" className="w-6 h-6" />
          </div>
          Las Cuatro Reglas de Oro
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goldenRules.map((rule, idx) => (
            <motion.div 
              key={rule.id}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 flex flex-col transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-50 text-red-600 font-bold w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-lg">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 tracking-tight">{rule.title}</h4>
              </div>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">
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
    <div className="max-w-4xl mx-auto space-y-10 animate-in slide-in-from-right-4 duration-500">
      <header className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-red-600 text-white p-5 rounded-3xl shadow-xl shadow-red-200 shrink-0">
            <Icon name={module.icon} className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight">{module.title}</h2>
            {module.content.subtitle && (
              <p className="text-sm font-bold text-red-600 uppercase tracking-widest mt-2">{module.content.subtitle}</p>
            )}
          </div>
        </div>
      </header>

      <div className="space-y-8">
        {module.content.sections.map((section, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-50">
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-4">
              <span className="bg-zinc-100 text-zinc-400 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">{idx + 1}</span> 
              {section.heading}
            </h3>
            <ul className="space-y-6">
              {section.body.map((paragraph, pIdx) => (
                <li key={pIdx} className="flex gap-5 text-zinc-500 font-medium leading-relaxed">
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(227,6,19,0.3)]" />
                  </div>
                  <span className="text-base">{paragraph}</span>
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
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 mb-10">
        <div className="flex items-center gap-8 mb-10">
          <div className="bg-red-600 text-white p-6 rounded-3xl shadow-xl shadow-red-200">
            <Icon name="ClipboardCheck" className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-2">Checklist <span className="text-red-600">Temporal</span></h2>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Plan de acción progresiva (6 Meses)</p>
          </div>
        </div>

        <div className="mb-4 flex justify-between text-xs uppercase font-bold tracking-widest text-zinc-400">
          <span>Progreso del plan</span>
          <span className="text-red-600">{progress}%</span>
        </div>
        <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-red-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="space-y-10">
        {checklistPhases.map((phase) => (
          <div key={phase.phase} className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 overflow-hidden">
            <div className="bg-zinc-50 px-10 py-6 border-b border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{phase.title}</h3>
            </div>
            <div className="p-6 space-y-3">
              {phase.items.map((item) => {
                const isChecked = checkedIds.has(item.id);
                return (
                  <motion.div 
                    key={item.id}
                    className={["flex items-center gap-5 p-5 rounded-2xl transition-all cursor-pointer", isChecked ? 'bg-zinc-50 opacity-60' : 'bg-white hover:bg-zinc-50 border border-zinc-100 hover:border-red-200 shadow-sm'].join(' ')}
                    onClick={() => handleToggle(item.id)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={["flex items-center justify-center w-8 h-8 rounded-xl border-2 shrink-0 transition-all", isChecked ? 'bg-red-600 border-red-600 text-white' : 'border-zinc-200 text-transparent'].join(' ')}>
                      <Icon name="Check" className="w-5 h-5" />
                    </div>
                    <span className={["text-sm font-bold tracking-tight", isChecked ? 'text-zinc-400 line-through' : 'text-zinc-700'].join(' ')}>
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
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500 space-y-10">
      <header className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 flex items-center gap-8">
        <div className="bg-red-600 text-white p-6 rounded-3xl shadow-xl shadow-red-200 shrink-0">
          <Icon name="FileText" className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-2">Modelos <span className="text-red-600">Adaptables</span></h2>
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Plantillas base (Copiar y pegar)</p>
        </div>
      </header>

      <div className="grid gap-10">
        {templatesData.map(tpl => (
          <div key={tpl.id} className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-100 overflow-hidden flex flex-col">
            <div className="bg-zinc-50/50 p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-100">
              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-zinc-900 tracking-tight mb-2 truncate">{tpl.title}</h3>
                <p className="text-sm font-medium text-zinc-500">{tpl.description}</p>
              </div>
              <button
                onClick={() => handleCopy(tpl.id, tpl.content)}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest transition-all rounded-2xl shadow-lg shadow-zinc-200 shrink-0"
              >
                {copiedId === tpl.id ? (
                  <><Icon name="Check" className="w-4 h-4 text-green-400" /> Copiado</>
                ) : (
                  <><Icon name="Copy" className="w-4 h-4" /> Copiar</>
                )}
              </button>
            </div>
            <div className="p-10 overflow-x-auto bg-white">
              <pre className="text-xs text-zinc-600 font-mono font-medium whitespace-pre-wrap leading-relaxed">
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
      <header className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
        <div className="flex items-center gap-6">
          <div className="bg-red-600 text-white p-5 rounded-3xl shadow-xl shadow-red-200 shrink-0">
            <Icon name="MessageCircleQuestion" className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">Preguntas <span className="text-red-600">Rápidas</span></h2>
        </div>
        <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] md:text-right max-w-[150px]">Respuestas directas a dudas comunes</p>
      </header>

      <div className="space-y-6">
        {faqsData.map(faq => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className={["bg-white rounded-[2rem] transition-all overflow-hidden border", isOpen ? 'border-red-200 shadow-xl shadow-red-50' : 'border-zinc-100 shadow-sm hover:shadow-md'].join(' ')}>
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                <span className="text-lg font-bold tracking-tight text-zinc-900 pr-6">{faq.question}</span>
                <div className={["w-10 h-10 flex items-center justify-center shrink-0 rounded-2xl border-2 transition-all", isOpen ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-200' : 'border-zinc-100 text-zinc-400'].join(' ')}>
                  <Icon name={isOpen ? "ChevronDown" : "ChevronRight"} className="w-6 h-6" />
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="px-8 pb-8 text-zinc-500 font-medium leading-relaxed">
                      <div className="bg-zinc-50 p-6 rounded-2xl border-l-4 border-red-600">
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
    <div className="max-w-4xl mx-auto animate-in slide-in-from-right-4 duration-500 space-y-10">
      <header className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 flex items-center gap-8">
        <div className="bg-red-600 text-white p-6 rounded-3xl shadow-xl shadow-red-200 shrink-0">
          <Icon name="GitMerge" className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-2">Flujo de <span className="text-red-600">Conflictos</span></h2>
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">De lo interno a lo externo ante un problema laboral.</p>
        </div>
      </header>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 p-10 md:p-14 relative">
        {/* Vertical Line */}
        <div className="absolute left-[39px] md:left-[67px] top-[60px] bottom-[60px] w-1 bg-zinc-100 z-0"></div>

        <div className="space-y-14 relative z-10">
          {flowStepsData.map((step, idx) => (
            <div key={step.id} className="flex items-start gap-8 group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-zinc-100 rounded-2xl shadow-lg flex items-center justify-center font-black text-xl md:text-2xl shrink-0 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:scale-110">
                {step.id}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">{step.title}</h3>
                <p className="text-zinc-500 font-medium text-base mb-2">{step.desc}</p>
                {step.note && (
                  <p className="text-xs font-bold text-red-700 bg-red-50 p-3 rounded-xl border-l-4 border-red-600 mt-4">
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
      <header className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 flex items-center gap-8">
        <div className="bg-red-600 text-white p-6 rounded-3xl shadow-xl shadow-red-200 shrink-0">
          <Icon name="Table2" className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-2">Esquemas de <span className="text-red-600">Representación</span></h2>
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">¿Qué figura soy y cómo se activa?</p>
        </div>
      </header>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-zinc-50/80 border-b border-zinc-100">
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-zinc-400">Figura</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-zinc-400">Base Legal</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-zinc-400">Acceso / Votación</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-zinc-400">Umbral</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-zinc-400">Idea Fuerza</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {repMatrixData.map((row, idx) => (
                <tr key={idx} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 font-black text-red-600 text-sm whitespace-nowrap">{row.figura}</td>
                  <td className="p-6 font-bold text-zinc-400 text-[10px] whitespace-nowrap tracking-wide">{row.base}</td>
                  <td className="p-6 font-bold text-zinc-700 text-xs leading-relaxed">{row.acceso}</td>
                  <td className="p-6 font-bold text-zinc-900 text-xs">{row.umbral}</td>
                  <td className="p-6 font-medium text-zinc-500 text-xs italic leading-relaxed">{row.idea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-black text-zinc-900 mb-8 tracking-tight flex items-center gap-4">
          <div className="bg-red-600 text-white p-3 rounded-2xl shadow-xl shadow-red-200">
            <Icon name="ShieldAlert" className="w-6 h-6" />
          </div>
          Derechos vs Obligaciones
        </h3>
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-100">
                  <th className="p-6 font-bold uppercase text-xs tracking-widest text-zinc-400">Derechos / Garantías</th>
                  <th className="p-6 font-bold uppercase text-xs tracking-widest text-zinc-400">Límites / Obligaciones</th>
                </tr>
              </thead>
              <tbody>
                {rightsLimitsData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                    <td className="p-6 font-bold text-zinc-700 text-sm leading-relaxed">{row.derecho}</td>
                    <td className="p-6 font-bold text-red-600 text-sm leading-relaxed">{row.limite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmergenciasView() {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-4 duration-500 space-y-10">
      <header className="bg-red-600 p-10 rounded-[2.5rem] shadow-2xl shadow-red-200 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 backdrop-blur-md text-white p-6 rounded-3xl shadow-xl">
             <Icon name="AlertTriangle" className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-2">Protocolos de <br/><span className="text-zinc-900">Emergencia</span></h2>
            <p className="text-sm font-bold uppercase tracking-widest text-red-100">Asistencia inmediata para situaciones críticas</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* PLAZOS LETALES */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 flex flex-col overflow-hidden">
          <div className="bg-zinc-900 p-6 flex items-center gap-4">
            <Icon name="Timer" className="text-red-500 w-6 h-6" />
            <h3 className="text-white font-bold uppercase tracking-widest text-xs">Plazos Letales</h3>
          </div>
          <div className="p-8 space-y-8 flex-1">
            <div>
              <p className="text-red-600 font-black text-3xl leading-none mb-2">20 DÍAS</p>
              <p className="text-zinc-900 font-bold text-sm uppercase tracking-tight">Para demandar Despido o Sanción.</p>
              <p className="text-zinc-400 text-xs mt-2 font-medium">El reloj corre. No hay margen de error.</p>
            </div>
            <div className="pt-8 border-t border-zinc-100">
              <p className="text-zinc-900 font-black text-3xl leading-none mb-2">1 AÑO</p>
              <p className="text-zinc-800 font-bold text-sm uppercase tracking-tight">Para reclamar cantidades.</p>
              <p className="text-zinc-400 text-xs mt-2 font-medium">Salarios impagados, diferencias, etc.</p>
            </div>
          </div>
        </div>

        {/* CARTA DE DESPIDO */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-red-100 border-2 border-red-500 flex flex-col relative overflow-hidden transform md:scale-105 z-10">
          <div className="bg-red-500 p-6 flex items-center gap-4 relative z-10">
            <Icon name="FileWarning" className="text-white w-6 h-6" />
            <h3 className="text-white font-bold uppercase tracking-widest text-xs">Ante un Despido</h3>
          </div>
          <div className="p-8 space-y-6 flex-1 relative z-10">
            <p className="font-bold text-xl text-zinc-900 leading-tight">¿Qué hago si me entregan la carta ahora?</p>
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600">
              <p className="font-bold text-red-600 uppercase text-[10px] tracking-widest mb-2">Escribir SIEMPRE:</p>
              <p className="font-black text-zinc-900 text-2xl tracking-tighter">"NO CONFORME"</p>
              <p className="text-xs font-medium text-zinc-500 mt-4 leading-relaxed italic">
                Junto a la fecha y tu firma. NUNCA firmes un finiquito como "saldado y cerrado" sin consultar antes.
              </p>
            </div>
            <ul className="text-xs font-bold text-zinc-400 space-y-3">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/> <span className="text-zinc-900">Objetivo:</span> 20 días/año indemn.</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"/> <span className="text-zinc-900">Improcedente:</span> 33 días/año.</li>
            </ul>
          </div>
        </div>

        {/* EMERGENCIA PRL */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 flex flex-col overflow-hidden">
          <div className="bg-zinc-900 p-6 flex items-center gap-4">
            <Icon name="Activity" className="text-red-500 w-6 h-6" />
            <h3 className="text-white font-bold uppercase tracking-widest text-xs">Emergencia PRL</h3>
          </div>
          <div className="p-8 space-y-6 flex-1">
            <p className="font-bold text-xl text-zinc-900 leading-tight">Riesgo Grave e Inminente</p>
            <div className="space-y-4 pt-2">
              <div className="flex gap-4">
                <span className="bg-zinc-100 text-zinc-400 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                <p className="text-sm font-medium text-zinc-500 leading-relaxed">Cesa la actividad o evacúa el área afectada.</p>
              </div>
              <div className="flex gap-4">
                <span className="bg-zinc-100 text-zinc-400 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                <p className="text-sm font-medium text-zinc-500 leading-relaxed">El Comité puede acordar la <strong className="text-red-600">PARALIZACIÓN</strong>.</p>
              </div>
              <div className="flex gap-4">
                <span className="bg-zinc-100 text-zinc-400 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                <p className="text-sm font-medium text-zinc-500 leading-relaxed">Informa de inmediato a la empresa e ITSS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DirectorioView() {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-right-4 duration-500 space-y-10">
      <header className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 flex items-center gap-8">
        <div className="bg-red-600 text-white p-6 rounded-3xl shadow-xl shadow-red-200 shrink-0">
          <Icon name="Phone" className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-tight">Directorio <br/><span className="text-red-600 inline-block mt-1 font-black">{directoryData.main.name.replace('UGT Servicios Públicos ', '')}</span></h2>
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mt-2">Nunca actúes solo/a. Consulta a tu equipo.</p>
        </div>
      </header>

      {/* Main Contact */}
      <div className="bg-zinc-900 rounded-[2.5rem] p-10 flex flex-col xl:flex-row items-center justify-between gap-10 shadow-2xl shadow-zinc-900/20 border-b-8 border-red-600">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="bg-red-600 text-white p-5 rounded-2xl shadow-xl shadow-red-600/20 flex-shrink-0">
            <Icon name="MapPin" className="w-8 h-8" />
          </div>
          <div className="min-w-0">
            <p className="font-black text-2xl tracking-tighter text-white mb-1 truncate">{directoryData.main.name}</p>
            <p className="text-zinc-400 font-bold text-sm">{directoryData.main.address}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
          <a href={`tel:${directoryData.main.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-2xl transition-all border border-white/5 group">
            <Icon name="Phone" className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="font-black tracking-widest text-white text-lg">{directoryData.main.phone}</span>
          </a>
          <a href={`mailto:${directoryData.main.email}`} className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-2xl transition-all border border-white/5 group min-w-0 overflow-hidden">
            <Icon name="Mail" className="w-5 h-5 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-sm tracking-wide break-all text-zinc-100">{directoryData.main.email}</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SECTORES */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-zinc-900 tracking-tight flex items-center gap-3">
            <div className="w-2 h-8 bg-red-600 rounded-full" />
            Sectores
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {directoryData.sectors.map((contact, idx) => (
              <a key={idx} href={`mailto:${contact.email}`} className="group bg-white rounded-2xl border border-zinc-100 p-5 flex items-center justify-between transition-all hover:shadow-xl hover:shadow-zinc-200/50 hover:border-red-100">
                <span className="font-bold text-zinc-900 tracking-tight">{contact.name}</span>
                <div className="flex items-center gap-3 text-zinc-400 group-hover:text-red-600 transition-colors min-w-0">
                  <span className="text-[10px] font-bold break-all opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">{contact.email}</span>
                  <div className="bg-zinc-50 p-2 rounded-lg group-hover:bg-red-50 transition-colors">
                    <Icon name="Mail" className="w-4 h-4 flex-shrink-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* TRANSVERSAL */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-zinc-900 tracking-tight flex items-center gap-3">
            <div className="w-2 h-8 bg-zinc-900 rounded-full" />
            Áreas Transversales
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {directoryData.transversal.map((contact, idx) => (
              <a key={idx} href={`mailto:${contact.email}`} className="group bg-white rounded-2xl border border-zinc-100 p-5 flex items-center justify-between transition-all hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-800/10">
                <span className="font-bold text-zinc-900 tracking-tight">{contact.name}</span>
                <div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-900 transition-colors min-w-0">
                   <span className="text-[10px] font-bold break-all opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">{contact.email}</span>
                  <div className="bg-zinc-50 p-2 rounded-lg group-hover:bg-zinc-100 transition-colors">
                    <Icon name="Mail" className="w-4 h-4 flex-shrink-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
