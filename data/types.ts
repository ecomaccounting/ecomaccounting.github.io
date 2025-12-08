export type NavItem = {
  title: string;
  link: string;
  children?: NavItem[];
};

export interface ServiceItem {
    id: string;
    parentId: string | null;
    name: string;    
    shortDescription: string; 
    longDescription: string;
    highlights: string[] | null;    
    banner: string | null; 
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