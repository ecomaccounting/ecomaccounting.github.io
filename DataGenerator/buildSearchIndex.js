import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import MiniSearch from 'minisearch'
import { miniSearchIndexOptions, normalize } from "../lib/shared.js";

export default async function buildSearchIndex() {

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
   const catalogPath = path.join(__dirname, '../data/data1.json');
   const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));

   const productsForIndex = catalog.services.map(p => ({
         id: p.id,
         name: normalize(p.name),
         highlights: normalize(p.highlights?.join(' ')),
         shortDescription: normalize(p.shortDescription),
         longDescription: normalize(p.longDescription),         
         keywords: p.keywords
      }));

   const miniSearch = new MiniSearch(miniSearchIndexOptions);

   miniSearch.addAll(productsForIndex)


   const outputDir = path.join(__dirname, '../public/data')
   fs.mkdirSync(outputDir, { recursive: true })

   const outputPath = path.join(outputDir, 'search-index.json')
   const indexJSON = JSON.stringify(miniSearch)

   fs.writeFileSync(outputPath, indexJSON)

   console.log('✅ Search index built')
   console.log(`📦 Products indexed: ${productsForIndex.length}`)
   console.log(`📊 Index size: ${(indexJSON.length / 1024).toFixed(2)} KB`);
}
