import {
  Rocket, Building2, Landmark, UserRound, Globe2, HeartHandshake,
  Users, User, FileCheck, FileSpreadsheet, Award, BadgeCheck,
  IdCard, ShieldCheck, Store, FileSignature, Ship, PenTool,
  Settings2, Calculator, NotebookText, Receipt, FileBarChart,
  Briefcase, ClipboardList, Layers3, TrendingUp, FolderX,
  FileEdit, Handshake, RefreshCcw, FileCheck2, Gavel, Globe,
  GraduationCap, Sprout, LineChart, Scale, SearchCheck,
  Presentation, Lock, Lightbulb, ChartSpline, Shuffle,
  BarChart3, Repeat, Sofa, Stethoscope
} from 'lucide-react';

export const AppIconMap: Record<string, React.ElementType> = {
  "Rocket": Rocket,
  "Building2": Building2,
  "Landmark": Landmark,
  "UserRound": UserRound,
  "Globe2": Globe2,
  "HeartHandshake": HeartHandshake,
  "Users": Users,
  "User": User,
  "FileCheck": FileCheck,
  "FileSpreadsheet": FileSpreadsheet,
  "Award": Award,
  "BadgeCheck": BadgeCheck,
  "IdCard": IdCard,
  "ShieldCheck": ShieldCheck,
  "Store": Store,
  "FileSignature": FileSignature,
  "Ship": Ship,
  "PenTool": PenTool,
  "Settings2": Settings2,
  "Calculator": Calculator,
  "NotebookText": NotebookText,
  "Receipt": Receipt,
  "FileBarChart": FileBarChart,
  "Briefcase": Briefcase,
  "ClipboardList": ClipboardList,
  "Layers3": Layers3,
  "TrendingUp": TrendingUp,
  "FolderX": FolderX,
  "FileEdit": FileEdit,
  "Handshake": Handshake,
  "RefreshCcw": RefreshCcw,
  "FileCheck2": FileCheck2,
  "Gavel": Gavel,
  "Globe": Globe,
  "GraduationCap": GraduationCap,
  "Sprout": Sprout,
  "LineChart": LineChart,
  "Scale": Scale,
  "SearchCheck": SearchCheck,
  "Presentation": Presentation,
  "Lock": Lock,
  "Lightbulb": Lightbulb,
  "ChartSpline": ChartSpline,
  "Shuffle": Shuffle,
  "BarChart3": BarChart3,
  "Repeat": Repeat,
  "Sofa": Sofa,
  "Stethoscope": Stethoscope,    
  default: Building2,
};

// lib/iconConstellation.ts

export const CONSTELLATION_ICONS = [
  "Rocket",
  "Building2",
  "Users",  
  "FileSpreadsheet",
  "ShieldCheck",  
  "Scale",
  "Gavel",
  "TrendingUp",
  "Calculator",
  "Handshake",
  "Store",
  "SearchCheck",
  
] as const;

export type ConstellationIcon =
  (typeof CONSTELLATION_ICONS)[number];

  export const ICON_POSITIONS = [
  { x: 12, y: 18 },
  { x: 28, y: 10 },
  { x: 46, y: 14 },
  { x: 70, y: 12 },
  { x: 86, y: 20 },

  { x: 8, y: 42 },
  { x: 18, y: 62 },
  { x: 30, y: 78 },

  { x: 72, y: 76 },
  { x: 84, y: 58 },
  { x: 92, y: 38 },

  { x: 58, y: 88 },
  { x: 42, y: 90 },
  { x: 90, y: 90 },
  { x: 10, y: 90 }
];
