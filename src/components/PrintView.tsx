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
      <div className="w-full max-w-4xl mx-auto bg-white p-8 md:p-12 print:py-0 print:px-4 text-zinc-900">
        
        {/* 1. PORTADA */}
        <div className="break-after-page min-h-[297mm] flex flex-col justify-center border-[16px] border-zinc-900 p-16 relative">
           <div className="absolute top-12 left-12 w-32 h-32 bg-red-600 flex items-center justify-center font-black text-white text-5xl tracking-tighter">UGT</div>
           
           <div className="mt-40">
             <h1 className="text-[5rem] md:text-[6rem] font-black uppercase tracking-tighter leading-[0.8] mb-8 text-zinc-900">
               Manual<br/>de Acción<br/><span className="text-red-600">Sindical</span>
             </h1>
             <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-zinc-600 mb-12 border-l-8 border-red-600 pl-6">
               Guía del Delegado y Delegada
             </h2>
           </div>

           <div className="mt-auto pt-12 border-t-8 border-zinc-900">
             <p className="font-black text-2xl uppercase tracking-widest text-zinc-900">{directoryData.main.name}</p>
             <p className="font-bold text-lg text-red-600 mt-2">{directoryData.main.address}</p>
           </div>
        </div>

        {/* 2. ÍNDICE */}
        <div className="break-after-page min-h-[297mm] py-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-12 border-b-8 border-red-600 pb-6 inline-block">Índice</h2>
          <ul className="space-y-6 text-xl font-bold tracking-tight uppercase text-zinc-800">
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
        <div className="break-after-page py-16">
          <div className="bg-zinc-900 text-white p-8 mb-12 inline-block">
            <h2 className="text-4xl font-black uppercase tracking-tighter">1. Reglas de Oro</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
             {goldenRules.map((rule, idx) => (
               <div key={rule.id} className="border-4 border-zinc-900 p-6 flex flex-col">
                  <div className="flex items-center gap-4 mb-6 border-b-4 border-red-600 pb-4">
                    <span className="text-3xl font-black text-red-600">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl font-black uppercase tracking-tight leading-none">{rule.title}</h3>
                  </div>
                  <p className="font-bold text-zinc-700 leading-relaxed text-sm flex-1">{rule.description}</p>
               </div>
             ))}
          </div>
        </div>

        {/* 4. MODULOS */}
        {modulesData.map((module, idx) => (
          <div key={module.id} className="break-after-page py-16">
             <header className="mb-12">
               <div className="flex items-center gap-4 mb-4">
                 <div className="bg-red-600 text-white w-16 h-16 flex items-center justify-center shrink-0">
                    <Icon name={module.icon} className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.8] text-zinc-900">
                   {idx + 2}. {module.title}
                 </h2>
               </div>
               {module.content.subtitle && (
                 <p className="text-lg font-black uppercase tracking-widest text-zinc-500 mt-6 border-l-8 border-zinc-900 pl-4">{module.content.subtitle}</p>
               )}
             </header>

             <div className="space-y-8">
                {module.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="border-2 border-zinc-200 p-8">
                     <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                       {sIdx + 1}. {section.heading}
                     </h3>
                     <div className="space-y-4 mt-6">
                        {section.body.map((para, pIdx) => (
                          <div key={pIdx} className="flex gap-4">
                             <div className="w-3 h-3 bg-zinc-900 mt-1.5 shrink-0"></div>
                             <p className="font-bold text-zinc-800 leading-relaxed text-justify">{para}</p>
                          </div>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        ))}

        {/* 5. CHECKLIST */}
        <div className="break-after-page py-16">
           <div className="bg-zinc-900 text-white p-8 mb-12 inline-block border-l-8 border-red-600">
             <h2 className="text-4xl font-black uppercase tracking-tighter">7. Checklist Temporal</h2>
           </div>
           
           <div className="space-y-12">
             {checklistPhases.map((phase) => (
                <div key={phase.phase} className="border-4 border-zinc-900">
                   <div className="bg-zinc-900 text-white p-4">
                      <h3 className="text-2xl font-black uppercase tracking-widest">{phase.title}</h3>
                   </div>
                   <div className="p-6 space-y-4">
                      {phase.items.map((item) => (
                        <div key={item.id} className="flex items-start gap-4 pb-4 border-b-2 border-zinc-100 last:border-0 last:pb-0">
                           <div className="w-6 h-6 border-4 border-red-600 shrink-0 mt-1"></div>
                           <p className="font-bold text-zinc-800 uppercase text-sm leading-snug">{item.text}</p>
                        </div>
                      ))}
                   </div>
                </div>
             ))}
           </div>
        </div>

        {/* 6. FLUJO DE CONFLICTOS */}
        <div className="break-after-page py-16">
           <div className="bg-zinc-900 text-white p-8 mb-12 inline-flex items-center gap-4">
             <Icon name="GitMerge" className="w-10 h-10 text-red-600" />
             <h2 className="text-4xl font-black uppercase tracking-tighter">8. Flujo de Conflictos</h2>
           </div>

           <div className="border-l-8 border-zinc-900 pl-8 ml-4 space-y-10 relative">
              {flowStepsData.map((step) => (
                <div key={step.id} className="relative">
                   <div className="absolute -left-[54px] top-0 w-12 h-12 bg-white border-8 border-red-600 rounded-full flex items-center justify-center font-black text-zinc-900">
                     {step.id}
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-2 pt-1">{step.title}</h3>
                   <p className="font-bold text-zinc-700 text-lg mb-2">{step.desc}</p>
                   {step.note && (
                     <div className="bg-zinc-100 p-4 border-l-4 border-red-600 mt-4">
                        <p className="font-black uppercase text-xs tracking-widest text-red-700 mb-1">Nota Táctica:</p>
                        <p className="font-bold text-sm text-zinc-800">{step.note}</p>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* 7. MATRICES DE REPRESENTACION */}
        <div className="break-after-page py-16">
           <div className="mb-12 border-b-8 border-zinc-900 pb-4">
             <h2 className="text-4xl font-black uppercase tracking-tighter">9. Mapas de Representación</h2>
           </div>

           <h3 className="text-2xl font-black uppercase tracking-widest text-red-600 mb-6">A. Figuras y Umbrales</h3>
           <table className="w-full text-left border-4 border-zinc-900 mb-16 break-inside-avoid">
             <thead className="bg-zinc-900 text-white">
               <tr>
                 <th className="p-4 font-black uppercase text-xs tracking-widest border-r-2 border-zinc-700">Figura</th>
                 <th className="p-4 font-black uppercase text-xs tracking-widest border-r-2 border-zinc-700">Base</th>
                 <th className="p-4 font-black uppercase text-xs tracking-widest border-r-2 border-zinc-700">Umbral</th>
                 <th className="p-4 font-black uppercase text-xs tracking-widest">Idea Fuerza</th>
               </tr>
             </thead>
             <tbody>
               {repMatrixData.map((row, idx) => (
                 <tr key={idx} className="border-b-2 border-zinc-200">
                   <td className="p-4 border-r-2 border-zinc-200 font-black text-red-600 text-sm align-top">{row.figura}</td>
                   <td className="p-4 border-r-2 border-zinc-200 font-bold text-zinc-600 text-xs align-top">{row.base}</td>
                   <td className="p-4 border-r-2 border-zinc-200 font-black text-zinc-900 text-xs align-top">{row.umbral}</td>
                   <td className="p-4 font-bold text-zinc-700 text-xs align-top">{row.idea}</td>
                 </tr>
               ))}
             </tbody>
           </table>

           <h3 className="text-2xl font-black uppercase tracking-widest text-red-600 mb-6">B. Derechos vs Límites</h3>
           <table className="w-full text-left border-4 border-zinc-900 break-inside-avoid">
             <thead className="bg-zinc-200 text-zinc-900 border-b-4 border-zinc-900">
               <tr>
                 <th className="p-4 font-black uppercase text-xs tracking-widest border-r-4 border-zinc-900">Derechos / Garantías</th>
                 <th className="p-4 font-black uppercase text-xs tracking-widest">Límites / Obligaciones</th>
               </tr>
             </thead>
             <tbody>
               {rightsLimitsData.map((row, idx) => (
                 <tr key={idx} className="border-b-2 border-zinc-200">
                   <td className="p-4 border-r-4 border-zinc-900 font-bold text-zinc-900 text-sm">{row.derecho}</td>
                   <td className="p-4 font-black text-red-700 text-sm uppercase">{row.limite}</td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>

        {/* 8. MODELOS ADAPTABLES */}
        <div className="break-after-page py-16">
           <div className="bg-red-600 text-white p-8 mb-12 inline-flex items-center gap-4">
             <Icon name="FileText" className="w-10 h-10" />
             <h2 className="text-4xl font-black uppercase tracking-tighter">10. Modelos Base</h2>
           </div>

           <div className="space-y-12">
             {templatesData.map((tpl) => (
               <div key={tpl.id} className="border-4 border-zinc-900 break-inside-avoid mb-8">
                 <div className="bg-zinc-100 border-b-4 border-zinc-900 p-6">
                   <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-2">{tpl.title}</h3>
                   <p className="font-bold text-zinc-700 text-sm">{tpl.description}</p>
                 </div>
                 <div className="p-8 bg-white">
                   <pre className="font-mono text-sm font-bold text-zinc-800 whitespace-pre-wrap leading-relaxed">
                     {tpl.content}
                   </pre>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 9. EMERGENCIAS Y BANDERAS ROJAS / FAQ */}
        <div className="break-after-page py-16">
           <div className="mb-12 border-b-8 border-red-600 pb-4 flex items-end gap-4">
             <Icon name="AlertTriangle" className="w-12 h-12 text-red-600" />
             <h2 className="text-4xl font-black uppercase tracking-tighter text-zinc-900">11. Protocolos de Emergencia</h2>
           </div>

           <div className="grid grid-cols-2 gap-8 mb-16">
             {/* Plazos */}
             <div className="border-8 border-zinc-900 p-6">
               <h3 className="bg-zinc-900 text-white font-black uppercase tracking-widest inline-block px-4 py-2 mb-6 -mx-6">Plazos Letales</h3>
               <div className="mb-6">
                 <p className="text-red-600 font-black text-4xl leading-none">20 DÍAS</p>
                 <p className="font-black uppercase text-sm mt-2">Demanda de Despido/Sanción</p>
               </div>
               <div className="border-t-4 border-zinc-200 pt-6">
                 <p className="text-zinc-900 font-black text-4xl leading-none">1 AÑO</p>
                 <p className="font-black uppercase text-sm mt-2">Reclamar Cantidad</p>
               </div>
             </div>

             {/* Despido */}
             <div className="border-8 border-red-600 p-6">
               <h3 className="bg-red-600 text-white font-black uppercase tracking-widest inline-block px-4 py-2 mb-6 -mx-6">Ante Carta Despido</h3>
               <p className="font-black uppercase mb-4">Firmar siempre:</p>
               <div className="bg-red-100 border-l-8 border-red-600 p-4 mb-4">
                 <p className="font-black text-3xl font-mono px-2">"NO CONFORME"</p>
               </div>
               <p className="font-bold text-sm text-zinc-800">+ Fecha y firma. Obligatorio por seguridad jurídica.</p>
             </div>
           </div>

           <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 mb-8 border-t-8 border-zinc-900 pt-12">12. Preguntas Frecuentes (FAQ)</h2>
           <div className="space-y-6">
             {faqsData.map(faq => (
               <div key={faq.id} className="border-4 border-zinc-200 p-6 break-inside-avoid">
                 <h4 className="font-black uppercase tracking-tight text-lg text-zinc-900 mb-4">{faq.question}</h4>
                 <div className="border-l-4 border-red-600 pl-4 py-1 font-bold text-zinc-700 text-sm leading-relaxed">
                   {faq.answer}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 10. DIRECTORIO */}
        <div className="py-16 min-h-[297mm] flex flex-col">
           <div className="bg-zinc-900 text-white p-12 text-center border-b-8 border-red-600 mb-16">
             <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">13. Directorio de Contactos</h2>
             <p className="font-black uppercase tracking-widest text-zinc-400">Nunca actúes en solitario.</p>
           </div>

           <div className="grid grid-cols-2 gap-x-12 gap-y-16">
             <div className="col-span-2 text-center border-4 border-zinc-900 p-8 mb-8">
               <h3 className="text-3xl font-black uppercase tracking-tighter text-red-600 mb-2">{directoryData.main.name}</h3>
               <p className="text-xl font-bold uppercase tracking-widest">{directoryData.main.address}</p>
               <div className="mt-6 flex justify-center gap-12 font-black text-2xl truncate">
                 <span>📞 {directoryData.main.phone}</span>
                 <span>✉️ {directoryData.main.email}</span>
               </div>
             </div>

             <div>
               <h3 className="text-2xl font-black uppercase tracking-widest border-b-4 border-red-600 pb-2 mb-6">Sectores</h3>
               <ul className="space-y-4">
                 {directoryData.sectors.map((s, idx) => (
                   <li key={idx} className="flex flex-col border-b-2 border-zinc-200 pb-2">
                     <span className="font-black uppercase text-zinc-900">{s.name}</span>
                     <span className="font-bold text-zinc-600">{s.email}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div>
               <h3 className="text-2xl font-black uppercase tracking-widest border-b-4 border-zinc-900 pb-2 mb-6">Transversales</h3>
               <ul className="space-y-4">
                 {directoryData.transversal.map((s, idx) => (
                   <li key={idx} className="flex flex-col border-b-2 border-zinc-200 pb-2">
                     <span className="font-black uppercase text-zinc-900">{s.name}</span>
                     <span className="font-bold text-zinc-600">{s.email}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>

           <div className="mt-auto text-center pt-16 opacity-50">
             <Icon name="Shield" className="w-16 h-16 mx-auto mb-4" />
             <p className="font-black uppercase tracking-widest">FIN DEL DOCUMENTO</p>
           </div>
        </div>

      </div>
    </div>
  );
}
