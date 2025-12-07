export type NavItem = {
  title: string;
  link: string;
  children?: NavItem[];
};

export interface ServiceItem {
    id: string;
    parentId: string;
    name: string;
    hierarchyLevel: number;    
    shortDescription: string | null; 
    longDescription: string | null;
    highlights: string | null;    
    banner: string | null; 
}