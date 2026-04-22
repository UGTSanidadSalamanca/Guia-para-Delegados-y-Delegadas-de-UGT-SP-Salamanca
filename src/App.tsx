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
import { useLocalStorage } from './hooks/useLocalStorage';

type SectionId = 'dashboard' | string | 'checklist' | 'modelos' | 'faq' | 'flujo' | 'matriz' | 'emergencias' | 'directorio';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionId>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('print') === 'true') return 'print' as any;
    }
    return 'dashboard';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [isPrintingTriptico, setIsPrintingTriptico] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useLocalStorage('ugt_dark_mode', false);

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

  const filteredMenuItems = menuItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  if (isPrintingTriptico) {
    return <TripticoView onBack={() => setIsPrintingTriptico(false)} />;
  }

  return (
    <div className={[
      "min-h-screen font-sans flex transition-colors duration-300",
      isDarkMode ? "bg-zinc-950 text-zinc-100 dark" : "bg-zinc-100 text-zinc-900"
    ].join(" ")}>
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
        "fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-500 ease-in-out flex flex-col shadow-2xl flex-shrink-0 md:static md:w-80 md:translate-x-0 border-r",
        isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-100",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      ].join(" ")}>
        <div className={["p-8", isDarkMode ? "bg-zinc-900" : "bg-white"].join(" ")}>
          <div className="flex items-start justify-between">
            <h1 className={["text-2xl font-bold tracking-tight leading-tight", isDarkMode ? "text-white" : "text-zinc-900"].join(" ")}>
              Guía del <br/><span className="text-red-600 font-black">Delegado UGT</span>
              <span className="text-zinc-400 block mt-1 text-xs font-medium uppercase tracking-widest">Manual de Supervivencia</span>
            </h1>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={["p-2 rounded-xl transition-colors", isDarkMode ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"].join(" ")}
              >
                <Icon name={isDarkMode ? "Star" : "Star"} className="w-5 h-5" />
              </button>
              <button className="md:hidden text-zinc-400 hover:text-zinc-900 p-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                <Icon name="X" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 mb-6">
          <div className="relative group">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar sección..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={[
                "w-full border-none rounded-2xl py-3 pl-11 pr-4 text-sm font-medium transition-all outline-none",
                isDarkMode 
                  ? "bg-zinc-800 text-white focus:ring-2 focus:ring-red-900/30 focus:bg-zinc-700 placeholder-zinc-500" 
                  : "bg-zinc-100 text-zinc-900 focus:ring-2 focus:ring-red-100 focus:bg-white placeholder-zinc-500"
              ].join(" ")}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1 custom-scrollbar">
          {filteredMenuItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={[
                  "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 font-bold text-sm rounded-xl",
                  isActive 
                    ? "bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 shadow-sm shadow-red-100 dark:shadow-none" 
                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                ].join(" ")}
              >
                <Icon name={item.icon as any} className={["w-5 h-5 flex-shrink-0 transition-colors", isActive ? "text-red-600 dark:text-red-400" : "text-zinc-400 dark:text-zinc-500"].join(" ")} />
                <span>{item.title}</span>
              </button>
            );
          })}

          {filteredMenuItems.length === 0 && (
            <div className="p-8 text-center text-zinc-400">
              <Icon name="SearchX" className="w-8 h-8 mx-auto mb-2 opacity-20" />
              <p className="text-xs font-bold uppercase tracking-widest">Sin resultados</p>
            </div>
          )}
          
          <div className="mt-8 pt-6 border-t border-zinc-100 space-y-2 pb-4">
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsPrinting(true); }}
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-red-200 dark:shadow-none"
            >
              <Icon name="FileText" className="w-5 h-5" />
              <span>Manual Completo (PDF)</span>
            </button>
            <a 
              href="https://drive.google.com/file/d/1fADtMYZCTdJMUa1_WnTPwdfZJ9UnJkqX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 bg-zinc-900 dark:bg-black hover:bg-black text-white p-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-zinc-200 dark:shadow-none border border-transparent dark:border-zinc-800"
            >
              <Icon name="Map" className="w-5 h-5" />
              <span>Descargar Tríptico (Google Drive)</span>
            </a>
          </div>
        </nav>
        
        <div className={["p-8 flex flex-col gap-1 border-t", isDarkMode ? "bg-zinc-800/10 border-zinc-800" : "bg-zinc-50/50 border-zinc-100"].join(" ")}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">UGT Servicios Públicos</p>
          <p className="text-sm font-black text-red-600">Salamanca</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className={[
          "md:hidden backdrop-blur-md border-b p-4 flex items-center justify-between sticky top-0 z-30 transition-colors",
          isDarkMode ? "bg-zinc-950/80 border-zinc-800" : "bg-white/80 border-zinc-100"
        ].join(" ")}>
          <div className="flex items-center gap-3">
             <div className="bg-red-600 text-white font-black px-2 py-1 rounded text-xs">UGT</div>
             <h1 className={["font-bold text-lg tracking-tight leading-tight", isDarkMode ? "text-white" : "text-zinc-900"].join(" ")}>Guía<span className="text-red-600 font-black">Delegado</span></h1>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={["p-2 rounded-lg transition-colors", isDarkMode ? "text-zinc-400 hover:bg-zinc-800" : "text-zinc-500 hover:bg-zinc-100"].join(" ")}
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
