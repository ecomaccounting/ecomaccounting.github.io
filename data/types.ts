import {  FileText} from "lucide-react";
import { BookOpen } from "lucide-react";
import { FileBarChart } from "lucide-react";
import { Layers } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Building2 } from "lucide-react";
import { Briefcase } from "lucide-react";

export type NavItem = {
  title: string;
  link: string;
  children?: NavItem[];
};

export interface ServiceItem {
    id: string;
    parentId: string;
    name: string;    
    icon: string;
    shortDescription: string; 
    longDescription: string;
    highlights: string[];
    footer: boolean;
    
}
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  //date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  topic: string;
  home:boolean
}

export interface TeamMember {
  memberName: string;
  description: string;
  image: string;
}

export const iconMap: Record<string, any> = {
  "GST Registration & Filing": FileText,
  "Bookkeeping & Accounting": BookOpen,
  "Income Tax Returns": FileBarChart,
  "Marketplace Reconciliation": Layers,
  "Payment Gateway Integration": CreditCard,
  "Business Registration": Building2,
  "Small Business Advisory": Briefcase,
};

export interface Client {
  id: string; 
  logo: string;
  name: string;  
  industry: string; 
  brandName: string; 
  title: string; 
  position: string; 
  feedback: string; 
  shortFeedback: string;   
  description: string; 
  home: boolean;
}
