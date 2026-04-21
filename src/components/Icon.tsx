import React from 'react';
import { 
  Zap, Map, Briefcase, Star, Clock, 
  ClipboardCheck, FileText, MessageCircleQuestion, 
  Eye, Archive, Network, UserPlus,
  CheckCircle2, Circle, Copy, Check,
  ChevronDown, ChevronRight, Menu, X, LayoutDashboard,
  GitMerge, Table2, ShieldAlert, ArrowDown,
  AlertTriangle, Timer, Phone, Mail, MapPin, Activity, FileWarning, Shield
} from 'lucide-react';
import { IconName } from '../types';

export const Icon = ({ name, className = '' }: { name: IconName; className?: string }) => {
  const icons: Record<string, React.ElementType> = {
    Zap, Map, Briefcase, Star, Clock,
    ClipboardCheck, FileText, MessageCircleQuestion,
    Eye, Archive, Network, UserPlus,
    CheckCircle2, Circle, Copy, Check,
    ChevronDown, ChevronRight, Menu, X,
    LayoutDashboard, GitMerge, Table2, ShieldAlert, ArrowDown,
    AlertTriangle, Timer, Phone, Mail, MapPin, Activity, FileWarning, Shield
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon className={className} /> : null;
};
