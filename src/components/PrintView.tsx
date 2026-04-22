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
    <div className="bg-zinc-100 min-h-screen font-sans">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm 15mm 20mm 15mm;
          }
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
          .avoid-break { page-break-inside: avoid; }
        }
        .printable-content {
          aspect-ratio: 210/297;
        }
      `}</style>
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
      <div className="w-full max-w-5xl mx-auto bg-white p-12 print:p-0 text-zinc-900 shadow-2xl print:shadow-none my-10 print:my-0">
        
        {/* 1. PORTADA */}
        <div className="page-break min-h-[250mm] flex flex-col justify-center border-[20px] border-zinc-900 p-20 relative overflow-hidden">
           <div className="absolute top-12 left-12 w-24 h-24 bg-red-600 flex items-center justify-center font-black text-white text-4xl tracking-tighter z-20 shadow-xl">UGT</div>
           
           <div className="mt-32">
             <h1 className="text-[4.5rem] font-black tracking-tighter leading-[0.9] mb-10 text-zinc-900">
               Manual de<br/>Acción<br/><span className="text-red-600">Sindical</span>
             </h1>
             <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-400 mb-10 border-l-[12px] border-red-600 pl-8 leading-snug">
               Guía Práctica del<br/>Delegado y Delegada
             </h2>
           </div>

           <div className="mt-auto pt-8 border-t-4 border-zinc-900">
             <p className="font-black text-xl uppercase tracking-widest text-zinc-900">{directoryData.main.name}</p>
             <p className="font-bold text-base text-red-600 mt-1">{directoryData.main.address}</p>
           </div>
        </div>

        {/* 2. ÍNDICE */}
        <div className="page-break min-h-[260mm] py-20 px-10">
          <h2 className="text-5xl font-black tracking-tighter mb-12 border-b-8 border-red-600 pb-6 inline-block">Índice</h2>
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
        <div className="page-break py-16 px-10">
           <div className="bg-zinc-900 border-l-[12px] border-red-600 px-8 py-6 mb-12">
             <h2 className="text-3xl font-black text-white">7. Checklist Temporal</h2>
           </div>
           
           <div className="space-y-10">
             {checklistPhases.map((phase) => (
                <div key={phase.phase} className="avoid-break border-2 border-zinc-100 rounded-3xl overflow-hidden">
                   <div className="bg-zinc-50 px-8 py-5 border-b border-zinc-100">
                      <h3 className="text-xl font-bold text-zinc-900">{phase.title}</h3>
                   </div>
                   <div className="p-8 space-y-4">
                      {phase.items.map((item) => (
                        <div key={item.id} className="flex items-start gap-4 pb-4 border-b border-zinc-50 last:border-0 last:pb-0">
                           <div className="w-5 h-5 border-2 border-red-600 rounded-md shrink-0 mt-1"></div>
                           <p className="font-bold text-zinc-700 text-xs leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                   </div>
                </div>
             ))}
           </div>
        </div>

        {/* 6. FLUJO DE CONFLICTOS */}
        <div className="page-break py-16 px-10">
           <div className="bg-zinc-900 px-8 py-6 mb-12 inline-flex items-center gap-6 rounded-2xl shadow-lg shadow-zinc-200">
             <Icon name="GitMerge" className="w-10 h-10 text-red-600" />
             <h2 className="text-3xl font-black text-white">8. Flujo de Conflictos</h2>
           </div>

           <div className="border-l-4 border-zinc-100 pl-12 ml-6 space-y-12 relative">
              {flowStepsData.map((step) => (
                <div key={step.id} className="relative avoid-break">
                   <div className="absolute -left-[74px] top-0 w-12 h-12 bg-white border-4 border-red-600 rounded-xl flex items-center justify-center font-black text-zinc-900 text-lg shadow-xl shadow-red-100">
                     {step.id}
                   </div>
                   <h3 className="text-2xl font-bold text-zinc-900 mb-3 pt-2">{step.title}</h3>
                   <p className="font-medium text-zinc-500 text-base leading-relaxed mb-4">{step.desc}</p>
                   {step.note && (
                     <div className="bg-red-50 p-6 rounded-2xl border-l-[6px] border-red-600 mt-6 shadow-sm">
                        <p className="font-bold uppercase text-[10px] tracking-widest text-red-600 mb-2">Nota Táctica:</p>
                        <p className="font-bold text-sm text-red-900 leading-relaxed">{step.note}</p>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* 7. MATRICES DE REPRESENTACION */}
        <div className="page-break py-16 px-10">
           <div className="mb-12 border-b-4 border-zinc-900 pb-4">
             <h2 className="text-4xl font-black tracking-tighter text-zinc-900">9. Mapas de Representación</h2>
           </div>

           <div className="avoid-break mb-16">
             <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-3">
                <div className="w-2 h-6 bg-red-600 rounded-full" />
                A. Figuras y Umbrales
             </h3>
             <div className="overflow-hidden border-2 border-zinc-900 rounded-2xl">
               <table className="w-full text-left border-collapse table-fixed">
                 <thead className="bg-zinc-900 text-white">
                   <tr>
                     <th className="p-4 font-bold uppercase text-[10px] tracking-widest border-r border-zinc-700 w-1/5">Figura</th>
                     <th className="p-4 font-bold uppercase text-[10px] tracking-widest border-r border-zinc-700 w-1/5">Base Legal</th>
                     <th className="p-4 font-bold uppercase text-[10px] tracking-widest border-r border-zinc-700 w-1/5">Umbral</th>
                     <th className="p-4 font-bold uppercase text-[10px] tracking-widest">Idea Fuerza</th>
                   </tr>
                 </thead>
                 <tbody>
                   {repMatrixData.map((row, idx) => (
                     <tr key={idx} className="border-b border-zinc-200 last:border-0">
                       <td className="p-4 border-r border-zinc-200 font-black text-red-600 text-xs">{row.figura}</td>
                       <td className="p-4 border-r border-zinc-200 font-bold text-zinc-400 text-[10px]">{row.base}</td>
                       <td className="p-4 border-r border-zinc-200 font-black text-zinc-900 text-[10px]">{row.umbral}</td>
                       <td className="p-4 font-bold text-zinc-600 text-[10px] leading-relaxed">{row.idea}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>

           <div className="avoid-break">
             <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-6 bg-zinc-900 rounded-full" />
                B. Derechos vs Límites
             </h3>
             <div className="overflow-hidden border-2 border-zinc-900 rounded-2xl">
               <table className="w-full text-left border-collapse table-fixed">
                 <thead className="bg-zinc-100 text-zinc-900">
                   <tr>
                     <th className="p-4 font-bold uppercase text-[10px] tracking-widest border-r border-zinc-300 w-1/2">Derechos / Garantías</th>
                     <th className="p-4 font-bold uppercase text-[10px] tracking-widest">Límites / Obligaciones</th>
                   </tr>
                 </thead>
                 <tbody>
                   {rightsLimitsData.map((row, idx) => (
                     <tr key={idx} className="border-b border-zinc-100 last:border-0">
                       <td className="p-4 border-r border-zinc-100 font-bold text-zinc-800 text-xs leading-snug">{row.derecho}</td>
                       <td className="p-4 font-black text-red-600 text-xs uppercase leading-snug">{row.limite}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        </div>

        {/* 8. MODELOS ADAPTABLES */}
        <div className="page-break py-16 px-10">
           <div className="bg-red-600 px-8 py-6 mb-12 inline-flex items-center gap-6 rounded-2xl shadow-xl shadow-red-200">
             <Icon name="FileText" className="w-10 h-10 text-white" />
             <h2 className="text-3xl font-black text-white">10. Modelos Base</h2>
           </div>

           <div className="space-y-12">
             {templatesData.map((tpl) => (
               <div key={tpl.id} className="avoid-break border-2 border-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 shadow-sm">
                 <div className="bg-zinc-50 px-10 py-8 border-b border-zinc-100">
                   <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tpl.title}</h3>
                   <p className="font-medium text-zinc-400 text-xs">{tpl.description}</p>
                 </div>
                 <div className="p-10 bg-white">
                   <pre className="font-mono text-xs font-bold text-zinc-600 whitespace-pre-wrap leading-relaxed bg-zinc-50/50 p-6 rounded-2xl border border-zinc-100">
                     {tpl.content.trim()}
                   </pre>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 9. EMERGENCIAS Y BANDERAS ROJAS / FAQ */}
        <div className="page-break py-16 px-10">
           <div className="mb-12 border-b-8 border-red-600 pb-6 flex items-end gap-6">
             <Icon name="AlertTriangle" className="w-14 h-14 text-red-600" />
             <h2 className="text-4xl font-black text-zinc-900">11. Protocolos de Emergencia</h2>
           </div>

           <div className="grid grid-cols-2 gap-8 mb-16">
             {/* Plazos */}
             <div className="avoid-break bg-zinc-900 rounded-[2.5rem] p-10 text-white shadow-2xl">
               <h3 className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-8">Plazos Letales</h3>
               <div className="mb-8">
                 <p className="text-red-600 font-black text-4xl mb-2">20 DÍAS</p>
                 <p className="font-bold text-sm">Demanda de Despido / Sanción</p>
               </div>
               <div className="border-t border-zinc-800 pt-8">
                 <p className="text-zinc-500 font-black text-4xl mb-2">1 AÑO</p>
                 <p className="font-bold text-sm">Reclamación de Cantidades</p>
               </div>
             </div>

             {/* Despido */}
             <div className="avoid-break border-4 border-red-500 rounded-[2.5rem] p-10 bg-white shadow-xl shadow-red-50">
               <h3 className="text-red-600 font-bold uppercase tracking-widest text-[10px] mb-8">Ante Carta de Despido</h3>
               <p className="font-black text-xl mb-6 text-zinc-900">Firmar siempre añadiendo:</p>
               <div className="bg-red-50 rounded-2xl p-6 mb-6 border-l-8 border-red-600">
                 <p className="font-black text-3xl font-mono text-zinc-900 leading-none">"NO CONFORME"</p>
               </div>
               <p className="font-bold text-[11px] text-zinc-400 leading-tight">Obligatorio junto a la fecha y firma real para preservar tus derechos legales.</p>
             </div>
           </div>

           <h2 className="text-3xl font-black text-zinc-900 mb-10 border-t-2 border-zinc-100 pt-16">12. Preguntas Frecuentes (FAQ)</h2>
           <div className="space-y-6">
             {faqsData.map(faq => (
               <div key={faq.id} className="avoid-break bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
                 <h4 className="font-bold text-lg text-zinc-900 mb-4">{faq.question}</h4>
                 <div className="border-l-4 border-red-600 pl-6 font-medium text-zinc-500 text-sm leading-relaxed">
                   {faq.answer}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 10. DIRECTORIO */}
        <div className="py-20 px-10 min-h-[260mm] flex flex-col">
           <div className="bg-zinc-900 rounded-[3rem] p-16 text-center border-b-[12px] border-red-600 mb-16 shadow-2xl">
             <h2 className="text-5xl font-black text-white tracking-tighter mb-4">13. Directorio Local</h2>
             <p className="font-bold uppercase tracking-widest text-xs text-zinc-500">Nunca actúes en solitario. Consulta a tu equipo.</p>
           </div>

           <div className="grid grid-cols-2 gap-x-12 gap-y-16">
             <div className="avoid-break col-span-2 text-center border-4 border-zinc-100 rounded-[2.5rem] p-10 mb-8 bg-zinc-50/50">
               <h3 className="text-3xl font-black text-red-600 mb-2 tracking-tight">{directoryData.main.name}</h3>
               <p className="text-xl font-bold text-zinc-900 tracking-tight">{directoryData.main.address}</p>
               <div className="mt-8 flex justify-center gap-12 font-black text-2xl text-zinc-900">
                 <div className="flex items-center gap-3"><Icon name="Phone" className="w-6 h-6 text-red-600" /> {directoryData.main.phone}</div>
                 <div className="flex items-center gap-3"><Icon name="Mail" className="w-6 h-6 text-red-600" /> {directoryData.main.email}</div>
               </div>
             </div>

             <div className="avoid-break">
               <h3 className="text-2xl font-bold border-b-4 border-red-600 pb-3 mb-8 text-zinc-900">Sectores</h3>
               <ul className="space-y-4">
                 {directoryData.sectors.map((s, idx) => (
                   <li key={idx} className="flex flex-col border-b border-zinc-50 pb-2">
                     <span className="font-black text-zinc-900 text-sm tracking-tight">{s.name}</span>
                     <span className="font-bold text-zinc-400 text-xs">{s.email}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="avoid-break">
               <h3 className="text-2xl font-bold border-b-4 border-zinc-900 pb-3 mb-8 text-zinc-900">Transversales</h3>
               <ul className="space-y-4">
                 {directoryData.transversal.map((s, idx) => (
                   <li key={idx} className="flex flex-col border-b border-zinc-50 pb-2">
                     <span className="font-black text-zinc-900 text-sm tracking-tight">{s.name}</span>
                     <span className="font-bold text-zinc-400 text-xs">{s.email}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>

           <div className="mt-auto text-center pt-20">
             <div className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" className="w-10 h-10 text-red-600" />
             </div>
             <p className="font-black uppercase tracking-[0.3em] text-xs text-zinc-300">Unión General de Trabajadoras y Trabajadores</p>
           </div>
        </div>

      </div>
    </div>
  );
}
