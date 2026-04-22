import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './components/Icon';
import { modulesData } from './data';
import { 
  Dashboard, ModuleView, ChecklistView, 
  TemplatesView, FAQView, ConflictFlowView, MatrixView,
  EmergenciasView, DirectorioView
} from './components/Views';
import { PrintView } from './components/PrintView';
import { TripticoView } from './components/TripticoView';

type SectionId = 'dashboard' | string | 'checklist' | 'modelos' | 'faq' | 'flujo' | 'matriz' | 'emergencias' | 'directorio';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionId>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const menuItems = [
    { id: 'dashboard', title: 'Inicio / Reglas de Oro', icon: 'LayoutDashboard' },
    ...modulesData.map(m => ({ id: m.id, title: m.title, icon: m.icon })),
    { id: 'checklist', title: 'Checklist Temporal', icon: 'ClipboardCheck' },
    { id: 'modelos', title: 'Modelos Adaptables', icon: 'FileText' },
    { id: 'flujo', title: 'Flujo de Conflictos', icon: 'GitMerge' },
    { id: 'matriz', title: 'Mapas Representación', icon: 'Table2' },
    { id: 'faq', title: 'Preguntas Rápidas', icon: 'MessageCircleQuestion' },
    { id: 'emergencias', title: '🚨 Banderas Rojas', icon: 'AlertTriangle' },
    { id: 'directorio', title: '📞 Directorio Salamanca', icon: 'Phone' },
  ] as const;

  const navigate = (id: SectionId) => {
    setCurrentSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentSection === 'dashboard') return <Dashboard />;
    if (currentSection === 'checklist') return <ChecklistView />;
    if (currentSection === 'modelos') return <TemplatesView />;
    if (currentSection === 'flujo') return <ConflictFlowView />;
    if (currentSection === 'matriz') return <MatrixView />;
    if (currentSection === 'emergencias') return <EmergenciasView />;
    if (currentSection === 'directorio') return <DirectorioView />;
    if (currentSection === 'faq') return <FAQView />;
    // Must be a module
    return <ModuleView moduleId={currentSection} />;
  };

  if (isPrinting) {
    return <PrintView onBack={() => setIsPrinting(false)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-900/80 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={[
        "fixed inset-y-0 left-0 z-50 w-72 bg-zinc-900 text-white transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl flex-shrink-0 md:static md:w-80 md:translate-x-0 border-r border-zinc-800",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      ].join(" ")}>
        <div className="p-6 bg-red-600 border-b-4 border-zinc-950">
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-black tracking-tighter text-white leading-[0.85] uppercase">
              Guía del <br/>Delegado<span className="text-zinc-900 block mt-2 text-xl">UGT Supervivencia</span>
            </h1>
            <button className="md:hidden text-white bg-zinc-900 hover:bg-black p-1 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Icon name="X" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1 custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={[
                  "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors font-black uppercase text-xs tracking-wider border-2",
                  isActive ? "bg-white text-zinc-900 border-zinc-900 shadow-sm" : "text-zinc-400 border-transparent hover:bg-zinc-800 hover:text-white"
                ].join(" ")}
              >
                <Icon name={item.icon as any} className={["w-5 h-5 flex-shrink-0", isActive ? "text-red-600" : "text-zinc-500"].join(" ")} />
                <span className="truncate">{item.title}</span>
              </button>
            );
          })}
          
          <div className="mt-8 pt-4 border-t-2 border-zinc-800 space-y-2">
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsPrinting(true); }}
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-zinc-100 text-white hover:text-red-600 p-3 border-2 border-transparent hover:border-red-600 font-black uppercase tracking-wider text-xs transition-colors"
            >
              <Icon name="FileText" className="w-5 h-5" />
              <span>Descargar Guía (A4)</span>
            </button>
            <a 
              href="https://drive.google.com/file/d/1fADtMYZCTdJMUa1_WnTPwdfZJ9UnJkqX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 bg-zinc-800 hover:bg-red-600 text-white p-3 border-2 border-zinc-700 hover:border-red-600 font-black uppercase tracking-wider text-xs transition-colors"
            >
              <Icon name="Map" className="w-5 h-5" />
              <span>Descargar Tríptico</span>
            </a>
          </div>
        </nav>
        
        <div className="p-6 bg-zinc-950 border-t-2 border-zinc-800 flex flex-col gap-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">UGT Servicios Públicos</p>
          <p className="text-xs font-bold text-red-600">Salamanca</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b-4 border-red-600 p-4 flex items-center justify-between shadow-sm sticky top-0 z-30">
          <div className="flex items-center gap-3">
             <div className="bg-red-600 text-white font-black px-2 py-1 text-sm">UGT</div>
             <h1 className="font-black text-xl tracking-tighter uppercase leading-none truncate">Guía<br/><span className="text-red-600">Delegado</span></h1>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
          >
            <Icon name="Menu" className="w-6 h-6" />
          </button>
        </header>

        <main className="flex-1 p-6 md:p-12 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
