import MiniSearch from "minisearch";
//import rawQueryMap from "@/data/queryMap.json";
import { ServiceItem } from "@/data/types";
import { miniSearchQueryOptions } from "@/search/shared";

//const queryMap: Record<string, string> = rawQueryMap;

const normalizeQuery = (q: unknown): string => {
  if (typeof q !== "string") return "";

  return q
    .toLowerCase()
    .trim()
    .split(/\s+/)
    //.map(t => queryMap[t] || t)
    .join(" ");
};

export function useSearch(
  searchIndex: MiniSearch<ServiceItem> | null,
  rawQuery: string,
  
) {
  if (!searchIndex) return [];

  const cleanedQuery = normalizeQuery(rawQuery);
  let items: ServiceItem[];

  if (!cleanedQuery) {
    // ✅ Return full catalog
    items = [];
  } else {
    const results = searchIndex.search(
      cleanedQuery,
      miniSearchQueryOptions
    );

    items = results.map(p => ({
      id: p.id,
      icon:p.icon,
      name: (p.name),      
      highlights: p.highlights,      
      shortDescription: p.shortDescription,      
      keywords: "",            
      longDescription: "",
      parentId: "",
      footer:true,
      home:true,
      metaDescription:""      
    }));
  } 
  
  return items;
}
