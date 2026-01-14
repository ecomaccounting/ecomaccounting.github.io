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
    longHighlights: string[];    
    metaDescription: string;
    footer: boolean;
    title:string;    
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
  bgColor:string;
  icon:string;
}

export type PricingType = 'Monthly' | 'One Time' | 'Retainer' | string;

/**
 * Main interface for a Service Package.
 * Optional fields are marked with '?' to accommodate the empty strings in your data.
 */
export interface ServicePackage {
  id: number;
  categoryName: string;
  heading: string;
  description: string;
  packageName: string;
  subtitle: string;
  price: string; // Kept as string to handle ranges like "50,000 - 1,50,000"
  pricingType: PricingType;
  bestFor: string;
  features: string[];
  
  // Optional fields based on the empty values in the sample
  services?: string;
  caseStudy?: string;
  timeline?: string;
  timelineDetails?: string | string[]; // Allow for both single string and array
  
  cta: string;
  
  // Supplementary notes/highlights
  note1?: string;
  note2?: string;
  highlight?: string;
}



export interface FAQItem {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  Service: string;
  title: string;
  description: string;         
}