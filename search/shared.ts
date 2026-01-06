import {
  type Options as MiniSearchIndexOptions,
  type SearchOptions as MiniSearchSearchOptions
} from "minisearch";

export const miniSearchIndexOptions: MiniSearchIndexOptions = {
  fields: [
    "name",
    "shortDescription",
    "longDescription",
    "highlights",
    "keywords"
  ],

  storeFields: [
    "id",
   
  ],

  tokenize(text: string) {
    return (
      text
        ?.normalize("NFC")
        .toLowerCase()
        .match(/[0-9a-zA-Z\u0900-\u097F]+/gu) || []
    );
  },

  processTerm: normalizeTerm
};

/* ---------------------------------------
   SEARCH options (used ONLY in .search)
--------------------------------------- */
export const miniSearchQueryOptions: MiniSearchSearchOptions = {
  fuzzy: 0.2,
  prefix: true,
  combineWith: "OR",

  boost: {
      name: 5,
      keywords: 3,
      highlights: 4,
      shortDescription: 2,
      longDescription: 1,
    },

  boostDocument: (doc: any, term: string) =>
    doc.keywords?.includes(term) ? 1.5 : 1
};


function normalizeTerm(term: string) {
  if (!term) return ''
  const t = term.normalize('NFKC').toLowerCase().trim()
  
  if (/^[a-z]+$/.test(t)) {
    if (t.endsWith('ies') && t.length > 4) return t.slice(0, -3) + 'y'
    if (t.endsWith('es') && t.length > 4) return t.slice(0, -2)
    if (t.endsWith('s') && t.length > 3) return t.slice(0, -1)
  }

  return t
}

export const normalize = (s = '') =>
  s
    .toString()
    .normalize('NFC')
    .toLowerCase()    
    .trim()
