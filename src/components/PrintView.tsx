import React, { useEffect } from 'react';
import { Icon } from './Icon';
import { 
  goldenRules, modulesData, checklistPhases, 
  templatesData, repMatrixData, rightsLimitsData, flowStepsData, directoryData, faqsData
} from '../data';

export function PrintView({ onBack }: { onBack: () => void }) {
  
  useEffect(() => {
    // Scroll to top when PrintView mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* CONTROL BAR (NON-PRINTABLE) */}
      <div className="print:hidden bg-zinc-900 border-b-4 border-red-600 p-4 sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl">
        <button 
          onClick={onBack} 
          className="text-white hover:text-red-400 font-bold uppercase tracking-widest flex items-center gap-2 transition-colors text-sm"
        >
          <Icon name="ChevronRight" className="w-5 h-5 rotate-180" /> Volver a la App
        </button>
        
        <div className="flex items-center gap-4 bg-zinc-800 p-2 rounded">
           <Icon name="AlertTriangle" className="text-yellow-400 w-5 h-5" />
           <span className="text-zinc-300 text-xs font-bold uppercase tracking-wider">Ajuste de Impresión: Activar "Gráficos de fondo" / "Background Graphics" y Márgenes por Defecto.</span>
        </div>

        <button 
          onClick={() => window.print()} 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 border-2 border-red-600 font-black uppercase tracking-widest flex items-center gap-3 transition-colors shadow-[4px_4px_0_#fff]"
        >
          <Icon name="FileText" /> Imprimir / Guardar PDF
        </button>
      </div>

      {/* DOCUMENT CONTAINER */}
      <div className="w-full max-w-4xl mx-auto bg-white p-8 md:p-12 print:p-0 text-zinc-900">
        
        {/* 1. PORTADA */}
        <div className="break-after-page min-h-[250mm] flex flex-col justify-center border-[10px] border-zinc-900 p-10 relative overflow-hidden">
           <div className="absolute top-8 left-8 w-20 h-20 bg-red-600 flex items-center justify-center font-black text-white text-3xl tracking-tighter z-20">UGT</div>
           
           <div className="mt-32">
             <h1 className="text-[3.2rem] md:text-[4rem] font-black uppercase tracking-tighter leading-[0.9] mb-6 text-zinc-900">
               Manual<br/>de Acción<br/><span className="text-red-600">Sindical</span>
             </h1>
             <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-zinc-500 mb-10 border-l-8 border-red-600 pl-6">
               Guía del Delegado y Delegada
             </h2>
           </div>

           <div className="mt-auto pt-8 border-t-4 border-zinc-900">
             <p className="font-black text-xl uppercase tracking-widest text-zinc-900">{directoryData.main.name}</p>
             <p className="font-bold text-base text-red-600 mt-1">{directoryData.main.address}</p>
           </div>
        </div>

        {/* 2. ÍNDICE */}
        <div className="break-after-page min-h-[257mm] py-10">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 border-b-6 border-red-600 pb-4 inline-block">Índice</h2>
          <ul className="space-y-4 text-lg font-bold tracking-tight uppercase text-zinc-800">
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2"><span>1. Las Cuatro Reglas de Oro</span></li>
            {modulesData.map((m, idx) => (
              <li key={m.id} className="flex justify-between border-b-2 border-zinc-100 pb-2">
                <span>{idx + 2}. {m.title}</span>
              </li>
            ))}
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2"><span>7. Checklist (6 Meses)</span></li>
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2"><span>8. Flujo de Conflictos</span></li>
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2"><span>9. Tablas de Representación</span></li>
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2"><span>10. Formulario y Modelos Adaptables</span></li>
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2 text-red-600"><span>11. Protocolos de Emergencia</span></li>
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2"><span>12. Banderas Rojas y FAQ</span></li>
            <li className="flex justify-between border-b-2 border-zinc-100 pb-2"><span>13. Directorio de Contacto</span></li>
          </ul>
        </div>

        {/* 3. REGLAS DE ORO */}
        <div className="break-after-page py-10">
          <div className="bg-zinc-900 text-white px-6 py-4 mb-8 inline-block">
            <h2 className="text-3xl font-black uppercase tracking-tighter">1. Reglas de Oro</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
             {goldenRules.map((rule, idx) => (
               <div key={rule.id} className="border-2 border-zinc-900 p-5 flex flex-col break-inside-avoid">
                  <div className="flex items-center gap-3 mb-4 border-b-2 border-red-600 pb-3">
                    <span className="text-2xl font-black text-red-600">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-lg font-black uppercase tracking-tight leading-none text-zinc-900">{rule.title}</h3>
                  </div>
                  <p className="font-bold text-zinc-700 leading-snug text-xs flex-1">{rule.description}</p>
               </div>
             ))}
          </div>
        </div>

        {/* 4. MODULOS */}
        {modulesData.map((module, idx) => (
          <div key={module.id} className="break-after-page py-10">
             <header className="mb-8">
               <div className="flex items-center gap-4 mb-3">
                 <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center shrink-0">
                    <Icon name={module.icon} className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
                   {idx + 2}. {module.title}
                 </h2>
               </div>
               {module.content.subtitle && (
                 <p className="text-base font-black uppercase tracking-widest text-zinc-500 mt-4 border-l-4 border-zinc-900 pl-4">{module.content.subtitle}</p>
               )}
             </header>

             <div className="space-y-6">
                {module.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="border border-zinc-200 p-6 break-inside-avoid">
                     <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-3 border-b border-red-600 pb-1 inline-block">
                       {sIdx + 1}. {section.heading}
                     </h3>
                     <div className="space-y-3 mt-4">
                        {section.body.map((para, pIdx) => (
                          <div key={pIdx} className="flex gap-3">
                             <div className="w-2 h-2 bg-zinc-900 mt-1.5 shrink-0 text-zinc-900"></div>
                             <p className="font-bold text-zinc-800 leading-snug text-sm text-justify">{para}</p>
                          </div>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        ))}

        {/* 5. CHECKLIST */}
        <div className="break-after-page py-10">
           <div className="bg-zinc-900 text-white px-6 py-4 mb-8 inline-block border-l-8 border-red-600">
             <h2 className="text-3xl font-black uppercase tracking-tighter">7. Checklist Temporal</h2>
           </div>
           
           <div className="space-y-10">
             {checklistPhases.map((phase) => (
                <div key={phase.phase} className="border-2 border-zinc-900 break-inside-avoid">
                   <div className="bg-zinc-900 text-white p-3">
                      <h3 className="text-xl font-black uppercase tracking-widest">{phase.title}</h3>
                   </div>
                   <div className="p-4 space-y-3">
                      {phase.items.map((item) => (
                        <div key={item.id} className="flex items-start gap-3 pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                           <div className="w-4 h-4 border-2 border-red-600 shrink-0 mt-1"></div>
                           <p className="font-bold text-zinc-800 uppercase text-[11px] leading-tight">{item.text}</p>
                        </div>
                      ))}
                   </div>
                </div>
             ))}
           </div>
        </div>

        {/* 6. FLUJO DE CONFLICTOS */}
        <div className="break-after-page py-10">
           <div className="bg-zinc-900 text-white px-6 py-4 mb-8 inline-flex items-center gap-4">
             <Icon name="GitMerge" className="w-8 h-8 text-red-600" />
             <h2 className="text-3xl font-black uppercase tracking-tighter">8. Flujo de Conflictos</h2>
           </div>

           <div className="border-l-4 border-zinc-900 pl-8 ml-4 space-y-8 relative">
              {flowStepsData.map((step) => (
                <div key={step.id} className="relative break-inside-avoid">
                   <div className="absolute -left-[54px] top-0 w-10 h-10 bg-white border-4 border-red-600 rounded-full flex items-center justify-center font-black text-zinc-900 text-sm">
                     {step.id}
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-1 pt-1">{step.title}</h3>
                   <p className="font-bold text-zinc-700 text-sm leading-tight mb-2">{step.desc}</p>
                   {step.note && (
                     <div className="bg-zinc-100 p-3 border-l-4 border-red-600 mt-3">
                        <p className="font-black uppercase text-[10px] tracking-widest text-red-700 mb-1">Nota Táctica:</p>
                        <p className="font-bold text-xs text-zinc-800 leading-tight">{step.note}</p>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* 7. MATRICES DE REPRESENTACION */}
        <div className="break-after-page py-10">
           <div className="mb-8 border-b-4 border-zinc-900 pb-3">
             <h2 className="text-3xl font-black uppercase tracking-tighter">9. Mapas de Representación</h2>
           </div>

           <h3 className="text-xl font-black uppercase tracking-widest text-red-600 mb-4">A. Figuras y Umbrales</h3>
           <table className="w-full text-left border-2 border-zinc-900 mb-12 break-inside-avoid">
             <thead className="bg-zinc-900 text-white">
               <tr>
                 <th className="p-3 font-black uppercase text-[10px] tracking-widest border-r border-zinc-700">Figura</th>
                 <th className="p-3 font-black uppercase text-[10px] tracking-widest border-r border-zinc-700">Base</th>
                 <th className="p-3 font-black uppercase text-[10px] tracking-widest border-r border-zinc-700">Umbral</th>
                 <th className="p-3 font-black uppercase text-[10px] tracking-widest">Idea Fuerza</th>
               </tr>
             </thead>
             <tbody>
               {repMatrixData.map((row, idx) => (
                 <tr key={idx} className="border-b border-zinc-200">
                   <td className="p-3 border-r border-zinc-200 font-black text-red-600 text-xs align-top">{row.figura}</td>
                   <td className="p-3 border-r border-zinc-200 font-bold text-zinc-600 text-[10px] align-top">{row.base}</td>
                   <td className="p-3 border-r border-zinc-200 font-black text-zinc-900 text-[10px] align-top">{row.umbral}</td>
                   <td className="p-3 font-bold text-zinc-700 text-[10px] align-top">{row.idea}</td>
                 </tr>
               ))}
             </tbody>
           </table>

           <h3 className="text-xl font-black uppercase tracking-widest text-red-600 mb-4">B. Derechos vs Límites</h3>
           <table className="w-full text-left border-2 border-zinc-900 break-inside-avoid">
             <thead className="bg-zinc-200 text-zinc-900 border-b-2 border-zinc-900">
               <tr>
                 <th className="p-3 font-black uppercase text-[10px] tracking-widest border-r border-zinc-900">Derechos / Garantías</th>
                 <th className="p-3 font-black uppercase text-[10px] tracking-widest">Límites / Obligaciones</th>
               </tr>
             </thead>
             <tbody>
               {rightsLimitsData.map((row, idx) => (
                 <tr key={idx} className="border-b border-zinc-200">
                   <td className="p-3 border-r border-zinc-900 font-bold text-zinc-900 text-xs">{row.derecho}</td>
                   <td className="p-3 font-black text-red-700 text-xs uppercase">{row.limite}</td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>

        {/* 8. MODELOS ADAPTABLES */}
        <div className="break-after-page py-10">
           <div className="bg-red-600 text-white px-6 py-4 mb-8 inline-flex items-center gap-4">
             <Icon name="FileText" className="w-8 h-8" />
             <h2 className="text-3xl font-black uppercase tracking-tighter">10. Modelos Base</h2>
           </div>

           <div className="space-y-10">
             {templatesData.map((tpl) => (
               <div key={tpl.id} className="border-2 border-zinc-900 break-inside-avoid mb-6">
                 <div className="bg-zinc-100 border-b-2 border-zinc-900 p-4">
                   <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-1">{tpl.title}</h3>
                   <p className="font-bold text-zinc-700 text-[10px]">{tpl.description}</p>
                 </div>
                 <div className="p-6 bg-white">
                   <pre className="font-mono text-xs font-bold text-zinc-800 whitespace-pre-wrap leading-relaxed">
                     {tpl.content}
                   </pre>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 9. EMERGENCIAS Y BANDERAS ROJAS / FAQ */}
        <div className="break-after-page py-10">
           <div className="mb-8 border-b-6 border-red-600 pb-3 flex items-end gap-3">
             <Icon name="AlertTriangle" className="w-10 h-10 text-red-600" />
             <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-900">11. Protocolos de Emergencia</h2>
           </div>

           <div className="grid grid-cols-2 gap-6 mb-12">
             {/* Plazos */}
             <div className="border-4 border-zinc-900 p-5 break-inside-avoid">
               <h3 className="bg-zinc-900 text-white font-black uppercase tracking-widest inline-block px-3 py-1 mb-4 -mx-5 text-xs">Plazos Letales</h3>
               <div className="mb-4">
                 <p className="text-red-600 font-black text-3xl leading-none">20 DÍAS</p>
                 <p className="font-black uppercase text-[10px] mt-1 text-zinc-900">Demanda de Despido/Sanción</p>
               </div>
               <div className="border-t-2 border-zinc-200 pt-4">
                 <p className="text-zinc-900 font-black text-3xl leading-none">1 AÑO</p>
                 <p className="font-black uppercase text-[10px] mt-1 text-zinc-900">Reclamar Cantidad</p>
               </div>
             </div>

             {/* Despido */}
             <div className="border-4 border-red-600 p-5 break-inside-avoid">
               <h3 className="bg-red-600 text-white font-black uppercase tracking-widest inline-block px-3 py-1 mb-4 -mx-5 text-xs">Ante Carta Despido</h3>
               <p className="font-black uppercase mb-3 text-xs text-zinc-900">Firmar siempre:</p>
               <div className="bg-red-100 border-l-4 border-red-600 p-3 mb-3">
                 <p className="font-black text-2xl font-mono px-1 text-red-600">"NO CONFORME"</p>
               </div>
               <p className="font-bold text-[10px] text-zinc-800 leading-tight">+ Fecha y firma. Obligatorio por seguridad jurídica.</p>
             </div>
           </div>

           <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 mb-6 border-t-4 border-zinc-900 pt-8">12. Preguntas Frecuentes (FAQ)</h2>
           <div className="space-y-4">
             {faqsData.map(faq => (
               <div key={faq.id} className="border-2 border-zinc-200 p-4 break-inside-avoid">
                 <h4 className="font-black uppercase tracking-tight text-base text-zinc-900 mb-2">{faq.question}</h4>
                 <div className="border-l-2 border-red-600 pl-3 py-1 font-bold text-zinc-700 text-xs leading-snug">
                   {faq.answer}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 10. DIRECTORIO */}
        <div className="py-8 min-h-[257mm] flex flex-col">
           <div className="bg-zinc-900 text-white p-10 text-center border-b-6 border-red-600 mb-10">
             <h2 className="text-4xl font-black uppercase tracking-tighter mb-3">13. Directorio de Contactos</h2>
             <p className="font-black uppercase tracking-widest text-[10px] text-zinc-400">Nunca actúes en solitario.</p>
           </div>

           <div className="grid grid-cols-2 gap-x-8 gap-y-10">
             <div className="col-span-2 text-center border-2 border-zinc-900 p-6 mb-6">
               <h3 className="text-2xl font-black uppercase tracking-tighter text-red-600 mb-1">{directoryData.main.name}</h3>
               <p className="text-lg font-bold uppercase tracking-widest text-zinc-900">{directoryData.main.address}</p>
               <div className="mt-4 flex justify-center gap-8 font-black text-xl truncate text-zinc-900">
                 <span>📞 {directoryData.main.phone}</span>
                 <span>✉️ {directoryData.main.email}</span>
               </div>
             </div>

             <div>
               <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-red-600 pb-1 mb-4 text-red-600">Sectores</h3>
               <ul className="space-y-3">
                 {directoryData.sectors.map((s, idx) => (
                   <li key={idx} className="flex flex-col border-b border-zinc-200 pb-1 break-inside-avoid">
                     <span className="font-black uppercase text-zinc-900 text-xs">{s.name}</span>
                     <span className="font-bold text-zinc-600 text-[10px]">{s.email}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div>
               <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-zinc-900 pb-1 mb-4 text-zinc-900">Transversales</h3>
               <ul className="space-y-3">
                 {directoryData.transversal.map((s, idx) => (
                   <li key={idx} className="flex flex-col border-b border-zinc-200 pb-1 break-inside-avoid">
                     <span className="font-black uppercase text-zinc-900 text-xs">{s.name}</span>
                     <span className="font-bold text-zinc-600 text-[10px]">{s.email}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>

           <div className="mt-auto text-center pt-10 opacity-50">
             <Icon name="Shield" className="w-12 h-12 mx-auto mb-3 text-red-600" />
             <p className="font-black uppercase tracking-widest text-xs text-zinc-900">FIN DEL DOCUMENTO</p>
           </div>
        </div>

      </div>
    </div>
  );
}
