import { writeFile } from 'fs/promises';
import buildSearchIndex from './buildSearchIndex.js';   
import path from 'path';
const DataFolder = "../data"
const API_URL = "https://script.google.com/macros/s/AKfycbyHpQWZUpX9SLH1GCGGVnfAY1MPOwRsxIt8pJv9Auk8w2479YTLTewWojtBEU03W65o/exec";

async function fetchAndSaveData() {

    try {        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
        }
        
        const apiResponse = await response.json();        
        const fileName = path.join(DataFolder, `data1.json`);
        const jsonString = JSON.stringify(apiResponse, null, 2);

        await writeFile(fileName, jsonString);
        console.log(`✅ Saved data  to file: ${fileName}`);

    } catch (fileError) {
        console.error(`❌ Failed to write file ${fileError}`);
    }
}

await fetchAndSaveData();
await buildSearchIndex();