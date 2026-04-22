export type IconName = 
  | 'Zap' | 'Map' | 'Briefcase' | 'Star' | 'Clock' 
  | 'ClipboardCheck' | 'FileText' | 'MessageCircleQuestion' 
  | 'Eye' | 'Archive' | 'Network' | 'UserPlus' | 'CheckCircle2' | 'Circle' | 'Copy' | 'Check' | 'ChevronDown' | 'ChevronRight' | 'Menu' | 'X' | 'LayoutDashboard'
  | 'GitMerge' | 'Table2' | 'ShieldAlert' | 'ArrowDown'
  | 'AlertTriangle' | 'Timer' | 'Phone' | 'Mail' | 'MapPin' | 'Activity' | 'FileWarning' | 'Shield' | 'Printer' | 'Smartphone' | 'Search' | 'SearchX';

export interface GoldenRule {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface ModuleData {
  id: string;
  title: string;
  icon: IconName;
  content: {
    subtitle?: string;
    sections: {
      heading: string;
      body: string[];
    }[];
  };
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ChecklistPhase {
  phase: string;
  title: string;
  items: ChecklistItem[];
}

export interface TemplateData {
  id: string;
  title: string;
  description: string;
  content: string;
}

export interface FAQData {
  id: string;
  question: string;
  answer: string;
}

export interface MatrixRow {
  figura: string;
  base: string;
  acceso: string;
  umbral: string;
  idea: string;
}

export interface RightsLimitRow {
  derecho: string;
  limite: string;
}

export interface FlowStep {
  id: string;
  title: string;
  desc: string;
  note?: string;
}

export interface DirectoryContact {
  name: string;
  email: string;
}

export interface DirectoryData {
  main: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  sectors: DirectoryContact[];
  transversal: DirectoryContact[];
}

export interface CrisisOption {
  label: string;
  nextStepId: string;
}

export interface CrisisStep {
  id: string;
  question?: string;
  title: string;
  description: string;
  actions: string[];
  templateId?: string;
  options?: CrisisOption[];
  isFinal?: boolean;
}
