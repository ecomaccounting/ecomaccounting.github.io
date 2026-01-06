"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MiniSearch from "minisearch";
import Service from "@/components/Services";
import { useSearch } from "@/search/useSearch";
import { miniSearchIndexOptions } from "@/search/shared";
import Breadcrumb from "@/components/BreadcrumbItem";


export default function ServiceSearch() {
  const searchParams = useSearchParams();
  const rawQuery = decodeURIComponent(searchParams.get("q") || "");
  const initialQuery = rawQuery.replace(/^web\+ssj:(\/\/)?/i, "");

  // 🔹 Submitted (actual search) state
  const [submittedQuery, setSubmittedQuery] = useState(initialQuery);


  const [searchIndex, setSearchIndex] = useState<MiniSearch<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /* ----------------------------
     Load MiniSearch index
  ----------------------------- */
  useEffect(() => {
    let cancelled = false;

    async function loadIndex() {
      setIsLoading(true);
      const res = await fetch("/data/search-index.json");
      const indexJSON = await res.text();
      if (cancelled) return;

      setSearchIndex(
        MiniSearch.loadJSON(indexJSON, miniSearchIndexOptions)
      );
      setIsLoading(false);
    }

    loadIndex();
    return () => { cancelled = true };
  }, []);

  /* ----------------------------
     Search runs ONLY on submit
  ----------------------------- */
  const results = useSearch(
    searchIndex,
    submittedQuery
  );



  return (
    <div className="container mx-auto">
      <Breadcrumb items={[
        { name: "Home", href: "/" },
        { name: "Search" }
      ]} />

      <div className="flex items-center gap-3 m-4">
        {/* LEFT: takes remaining space */}
        <div className="flex-1 font-medium truncate">
          {submittedQuery && (
            <span className="text-primary">
              {" "}
            </span>
          )}
          {results.length} services found
        </div>


      </div>
      <div className="p-4">
        <Service services={results} />
      </div>
      {!isLoading && results.length === 0 && (
        <div className="text-center py-20">
          No results found.
        </div>
      )}
    </div>
  );
}
