export type NavItem = {
  title: string;
  link: string;
  children?: NavItem[];
};

export interface ServiceItem {
    id: string;
    parentId: string;
    name: string;    
    shortDescription: string; 
    longDescription: string;
    highlights: string[] ;        
    footer: boolean ;
}
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
}