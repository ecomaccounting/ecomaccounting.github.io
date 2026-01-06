"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = exports.miniSearchQueryOptions = exports.miniSearchIndexOptions = void 0;
exports.miniSearchIndexOptions = {
    fields: [
        "name",
        "shortDescription",
        "longDescription",        
        "highlights",        
        "keywords"        
    ],
    storeFields: [
        "id",        
        "name",
        "shortDescription",
        "longDescription",        
        "highlights",        
        "keywords"        
    ],
    tokenize(text) {
        return (text
            ?.normalize("NFC")
            .toLowerCase()
            .match(/[0-9a-zA-Z\u0900-\u097F]+/gu) || []);
    },
    processTerm: normalizeTerm
};
/* ---------------------------------------
   SEARCH options (used ONLY in .search)
--------------------------------------- */
exports.miniSearchQueryOptions = {
    fuzzy: 0.2,
    prefix: true,
    combineWith: "OR",
    boost: {
        name: 5,
        highlights: 3.5,
        shortDescription: 3,
        longDescription: 2.5,        
        keywords: 2,
    },
    boostDocument: (doc, term) => doc.keywords?.includes(term) ? 1.5 : 1
};
function normalizeTerm(term) {
    if (!term)
        return '';
    const t = term.normalize('NFKC').toLowerCase().trim();
    
    if (/^[a-z]+$/.test(t)) {
        if (t.endsWith('ies') && t.length > 4)
            return t.slice(0, -3) + 'y';
        if (t.endsWith('es') && t.length > 4)
            return t.slice(0, -2);
        if (t.endsWith('s') && t.length > 3)
            return t.slice(0, -1);
    }
    return t;
}
const normalize = (s = '') => s
    .toString()
    .normalize('NFC')
    .toLowerCase()    
    .trim();
exports.normalize = normalize;
