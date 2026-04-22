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

      <div className={[
        "fixed inset-y-0 left-0 z-50 w-72 bg-white text-zinc-900 transform transition-transform duration-500 ease-in-out flex flex-col shadow-2xl flex-shrink-0 md:static md:w-80 md:translate-x-0 border-r border-zinc-100",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      ].join(" ")}>
        <div className="p-8 bg-white">
          <div className="flex items-start justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 leading-tight">
              Guía del <br/><span className="text-red-600 font-black">Delegado UGT</span>
              <span className="text-zinc-400 block mt-1 text-xs font-medium uppercase tracking-widest">Manual de Supervivencia</span>
            </h1>
            <button className="md:hidden text-zinc-400 hover:text-zinc-900 p-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Icon name="X" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1 custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={[
                  "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 font-bold text-sm rounded-xl",
                  isActive 
                    ? "bg-red-50 text-red-600 shadow-sm shadow-red-100" 
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                ].join(" ")}
              >
                <Icon name={item.icon as any} className={["w-5 h-5 flex-shrink-0 transition-colors", isActive ? "text-red-600" : "text-zinc-400"].join(" ")} />
                <span>{item.title}</span>
              </button>
            );
          })}
          
          <div className="mt-8 pt-6 border-t border-zinc-100 space-y-2">
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsPrinting(true); }}
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-red-200"
            >
              <Icon name="FileText" className="w-5 h-5" />
              <span>Descargar PDF (A4)</span>
            </button>
            <a 
              href="https://drive.google.com/file/d/1fADtMYZCTdJMUa1_WnTPwdfZJ9UnJkqX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 bg-zinc-50 hover:bg-zinc-100 text-zinc-600 p-3 rounded-xl font-bold text-xs transition-colors border border-zinc-200"
            >
              <Icon name="Map" className="w-5 h-5" />
              <span>Descargar Tríptico</span>
            </a>
          </div>
        </nav>
        
        <div className="p-8 bg-zinc-50/50 border-t border-zinc-100 flex flex-col gap-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">UGT Servicios Públicos</p>
          <p className="text-sm font-black text-red-600">Salamanca</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden bg-white/80 backdrop-blur-md border-b border-zinc-100 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
             <div className="bg-red-600 text-white font-black px-2 py-1 rounded text-xs">UGT</div>
             <h1 className="font-bold text-lg tracking-tight text-zinc-900 leading-tight">Guía<span className="text-red-600 font-black">Delegado</span></h1>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-lg transition-colors"
          >
            <Icon name="Menu" className="w-6 h-6" />
          </button>
        </header>

        <main className="flex-1 p-4 md:p-12 overflow-x-hidden break-words">
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
