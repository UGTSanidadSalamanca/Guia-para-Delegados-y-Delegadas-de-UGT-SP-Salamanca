import React, { useEffect } from 'react';
import { Icon } from './Icon';
import { goldenRules, directoryData } from '../data';

export function TripticoView({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-zinc-200 min-h-screen font-sans">
      {/* Override global print styles for this specific view to force Landscape and NO margins */}
      <style>{`
        @media print {
          @page {
            size: A4 landscape !important;
            margin: 0 !important;
          }
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
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
           <Icon name="AlertTriangle" className="text-yellow-400 w-5 h-5 shrink-0" />
           <span className="text-zinc-300 text-xs font-bold uppercase tracking-wider">
             Ajustes Impresión: Orientación <strong>HORIZONTAL</strong> / Márgenes <strong>NINGUNO</strong> / Gráficos de fondo <strong>SÍ</strong>.
           </span>
        </div>

        <button 
          onClick={() => window.print()} 
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 border-2 border-red-600 font-black uppercase tracking-widest flex items-center gap-3 transition-colors shadow-[4px_4px_0_#fff]"
        >
          <Icon name="Printer" /> Imprimir Tríptico
        </button>
      </div>

      <div className="flex flex-col gap-12 p-8 print:p-0 items-center">
        
        {/* ======================================= */}
        {/* HOJA 1: CARA EXTERIOR (Dorsos y Portada) */}
        {/* ======================================= */}
        <div className="bg-white w-[297mm] h-[210mm] grid grid-cols-3 break-after-page shadow-2xl print:shadow-none overflow-hidden relative border border-zinc-200 print:border-none">
           {/* Fold lines guides ONLY for screen */}
           <div className="absolute left-[99mm] top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-300 print:border-transparent z-10"></div>
           <div className="absolute left-[198mm] top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-300 print:border-transparent z-10"></div>

           {/* COLUMN 1: PALA IZQUIERDA (Dorso/Solapa que cierra) - DIRECTORIO Y QR */}
           <div className="p-8 flex flex-col h-full bg-zinc-50 border-r border-zinc-200">
              <h2 className="text-xl font-black uppercase tracking-tight text-red-600 mb-6 border-b-2 border-red-600 pb-2">Contacto Local</h2>
              
              <div className="mb-6 space-y-2 text-sm font-bold text-zinc-800">
                 <p className="font-black text-lg text-zinc-900 leading-none">{directoryData.main.name}</p>
                 <p>{directoryData.main.address}</p>
                 <p className="flex items-center gap-2 mt-2"><Icon name="Phone" className="w-4 h-4 text-red-600"/> {directoryData.main.phone}</p>
                 <p className="flex items-center gap-2"><Icon name="Mail" className="w-4 h-4 text-red-600"/> {directoryData.main.email}</p>
              </div>

              <div className="mb-auto space-y-1">
                 <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Sectores Destacados:</p>
                 {directoryData.sectors.slice(0, 5).map((s, i) => (
                    <div key={i} className="text-[10px] uppercase font-bold text-zinc-700 border-b border-zinc-200 pb-1">{s.name}</div>
                 ))}
                 <p className="text-[10px] italic text-zinc-500 mt-2">* Directorio completo en la App digital.</p>
              </div>

              {/* QR PLACEHOLDER */}
              <div className="mt-8 border-4 border-dashed border-zinc-900 p-4 bg-white text-center flex flex-col items-center justify-center min-h-[160px]">
                 <Icon name="Smartphone" className="w-8 h-8 text-zinc-400 mb-2" />
                 <p className="text-xs font-black uppercase tracking-tighter text-zinc-900 leading-tight">ESCANEA PARA ABRIR<br/>LA VERSIÓN DIGITAL</p>
                 <div className="w-24 h-24 border-2 border-zinc-200 mt-2 flex items-center justify-center">
                    <span className="text-[10px] text-zinc-400 font-bold uppercase text-center">Pegar<br/>QR Code<br/>Aquí</span>
                 </div>
              </div>
           </div>

           {/* COLUMN 2: PALA CENTRAL (Contraportada) - REGLAS DE ORO */}
           <div className="p-8 flex flex-col h-full bg-zinc-900 text-white">
              <h2 className="text-xl font-black uppercase tracking-widest text-white mb-8 border-b-2 border-zinc-700 pb-2">Reglas de Oro</h2>
              
              <div className="space-y-6">
                {goldenRules.map((rule, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-3xl font-black text-red-600 leading-none">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-black uppercase tracking-tight text-sm mb-1">{rule.title}</h3>
                      <p className="text-xs text-zinc-400 font-bold leading-tight">{rule.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t-2 border-zinc-800 text-center">
                 <Icon name="Shield" className="w-12 h-12 text-red-600 mx-auto mb-2" />
                 <p className="font-black uppercase text-[10px] tracking-widest text-zinc-500">Nunca actúes en solitario.</p>
              </div>
           </div>

           {/* COLUMN 3: PALA DERECHA (Portada) */}
           <div className="p-8 flex flex-col h-full bg-white relative">
              <div className="w-16 h-16 bg-red-600 text-white font-black text-2xl flex items-center justify-center mb-12">
                 UGT
              </div>
              
              <div className="mt-12">
                 <h1 className="text-[3rem] font-black uppercase tracking-tighter leading-[0.85] text-zinc-900 mb-6">
                   Manual<br/>de Acción<br/><span className="text-red-600">Sindical</span>
                 </h1>
                 <div className="border-l-4 border-red-600 pl-4">
                   <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 leading-snug">
                     Guía Rápida del<br/>Delegado y Delegada
                   </h2>
                 </div>
              </div>

              <div className="mt-auto border-t-4 border-zinc-900 pt-6">
                 <p className="font-black text-xl uppercase tracking-tighter leading-none text-zinc-900">Servicios Públicos</p>
                 <p className="font-black text-red-600 uppercase tracking-widest text-sm mt-1">Salamanca</p>
              </div>
           </div>
        </div>

        {/* ======================================= */}
        {/* HOJA 2: CARA INTERIOR (El contenido rudo) */}
        {/* ======================================= */}
        <div className="bg-white w-[297mm] h-[210mm] grid grid-cols-3 break-after-page shadow-2xl print:shadow-none overflow-hidden relative border border-zinc-200 print:border-none">
           {/* Fold lines guides ONLY for screen */}
           <div className="absolute left-[99mm] top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-300 print:border-transparent z-10"></div>
           <div className="absolute left-[198mm] top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-300 print:border-transparent z-10"></div>

           {/* COLUMN 1: PALA IZQUIERDA INTERIOR - PRIMEROS PASOS */}
           <div className="p-8 flex flex-col h-full bg-white border-r border-zinc-200">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-red-600 pb-2">
                 <Icon name="Timer" className="text-red-600 w-6 h-6" />
                 <h2 className="text-xl font-black uppercase tracking-tight text-zinc-900">Primeros Pasos</h2>
              </div>
              
              <div className="space-y-6 text-sm">
                 <div>
                    <h3 className="font-black uppercase text-zinc-900 mb-1 bg-zinc-200 inline-block px-2 py-0.5 text-xs">El primer día</h3>
                    <p className="font-bold text-zinc-700 leading-tight">Presentación formal a la empresa mediante escrito de constitución. Empieza a usar el Tablón Sindical inmediatamente.</p>
                 </div>
                 
                 <div>
                    <h3 className="font-black uppercase text-zinc-900 mb-1 bg-zinc-200 inline-block px-2 py-0.5 text-xs">A los 90 días</h3>
                    <p className="font-bold text-zinc-700 leading-tight">Debes haber completado la primera ronda de asambleas informativas y detectado los fuegos laborales de tu centro.</p>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-zinc-200">
                 <div className="bg-zinc-900 text-white p-4">
                    <h3 className="font-black uppercase text-red-500 mb-2 text-sm leading-tight">Evita el Acomodo</h3>
                    <p className="text-xs font-bold leading-relaxed text-zinc-300">
                      "No te conviertas en parte del mobiliario ni te burocratices. Mantén intacta la rebeldía del primer día, agita conciencias y exige proactividad. El sindicato está vivo si tú lo mantienes vivo."
                    </p>
                 </div>
              </div>
           </div>

           {/* COLUMN 2: PALA CENTRAL INTERIOR - BANDERAS ROJAS / EMERGENCIAS */}
           <div className="p-8 flex flex-col h-full bg-zinc-100 border-r border-zinc-200">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-zinc-900 pb-2">
                 <Icon name="AlertTriangle" className="text-zinc-900 w-6 h-6" />
                 <h2 className="text-xl font-black uppercase tracking-tight text-zinc-900">Banderas Rojas</h2>
              </div>

              <div className="space-y-6">
                 {/* Plazos */}
                 <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-black uppercase tracking-widest text-xs text-red-600 mb-2">Plazos Letales Legales</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                       <span className="font-black text-2xl text-zinc-900">20</span>
                       <span className="font-bold text-xs uppercase">Días (Despido / Sanción)</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                       <span className="font-black text-2xl text-zinc-900">1</span>
                       <span className="font-bold text-xs uppercase">Año (Reclamar Dinero)</span>
                    </div>
                 </div>

                 {/* Carta de Despido */}
                 <div className="bg-white p-4 shadow-sm border border-zinc-200">
                    <h3 className="font-black uppercase text-xs mb-2">Protocolo Despido IN SITU</h3>
                    <p className="text-xs font-bold text-zinc-700 mb-2">Firma SIEMPRE la carta añadiendo de tu puño y letra:</p>
                    <div className="bg-zinc-900 text-white font-mono font-black text-center p-2 tracking-widest">
                       "NO CONFORME"
                    </div>
                    <p className="text-[10px] font-bold text-zinc-500 mt-2 text-center">+ Fecha real y Tu Firma.</p>
                 </div>

                 {/* PRL */}
                 <div className="border-4 border-zinc-900 p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-600 text-white font-black text-[10px] px-2 py-0.5">ART. 21 LPRL</div>
                    <h3 className="font-black uppercase text-sm mb-1 mt-2">Emergencia PRL</h3>
                    <p className="text-xs font-bold text-zinc-800 leading-tight">Ante riesgo GRAVE e INMINENTE para la vida, tienes potestad para <strong>ordenar la PARALIZACIÓN DE LA ACTIVIDAD.</strong></p>
                 </div>
              </div>
           </div>

           {/* COLUMN 3: PALA DERECHA INTERIOR - DERECHOS Y GARANTÍAS */}
           <div className="p-8 flex flex-col h-full bg-white">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-red-600 pb-2">
                 <Icon name="Activity" className="text-red-600 w-6 h-6" />
                 <h2 className="text-xl font-black uppercase tracking-tight text-zinc-900">Garantías Clave</h2>
              </div>
              
              <ul className="space-y-6">
                 <li>
                    <h3 className="font-black text-sm uppercase text-zinc-900 mb-1">Crédito Horario</h3>
                    <p className="text-xs font-bold text-zinc-600 leading-tight">Horas mensuales retribuidas exclusivas para labores sindicales. Son un derecho y no pueden ser fiscalizadas por la empresa en su motivación.</p>
                 </li>
                 <li>
                    <h3 className="font-black text-sm uppercase text-zinc-900 mb-1">Expediente Contradictorio</h3>
                    <p className="text-xs font-bold text-zinc-600 leading-tight">Blindaje ante sanciones: la empresa no puede sancionarte sin escuchar antes a tu sindicato o comité. Garantía de indemnidad total frente al despido.</p>
                 </li>
                 <li>
                    <h3 className="font-black text-sm uppercase text-zinc-900 mb-1">Libertad de Expresión</h3>
                    <p className="text-xs font-bold text-zinc-600 leading-tight">Derecho a distribuir información y a usar el Tablón Sindical (y herramientas telemáticas) sin censura previa de la dirección.</p>
                 </li>
              </ul>

              <div className="mt-auto text-center border-t border-zinc-200 pt-4">
                 <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Herramienta de acción sindical rápida</p>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}
