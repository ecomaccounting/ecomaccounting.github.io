"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import MiniSearch from "minisearch";
import Service from "@/components/Services";
import Breadcrumb from "@/components/BreadcrumbItem";
import { miniSearchIndexOptions, miniSearchQueryOptions } from "@/search/shared";
import data from "@/data/data1.json";
import { ServiceItem } from "@/data/types";

export default function ServiceSearch() {
  const allServices: ServiceItem[] = data.services;
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get("q") || "";
  const queryFromUrl = decodeURIComponent(rawQuery).replace(/^web\+ssj:(\/\/)?/i, "");

  const [submittedQuery, setSubmittedQuery] = useState(queryFromUrl);
  const [searchIndex, setSearchIndex] = useState<MiniSearch<any> | null>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<{ id: string; score: number }[] | null>(null);

  useEffect(() => {
    setSubmittedQuery(queryFromUrl);
  }, [queryFromUrl]);

  useEffect(() => {
    let cancelled = false;

    async function loadIndex() {
      try {
        const res = await fetch("/data/search-index.json");
        const json = await res.text();
        if (cancelled) return;

        const index = MiniSearch.loadJSON(json, miniSearchIndexOptions);
        setSearchIndex(index);        
        setIsLoading(false); 
      } catch (error) {
        console.error("Failed to load search index:", error);
        setIsLoading(false);
      }
    }

    loadIndex();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    // If there is no query, we set results to null to indicate "show all"
    if (!searchIndex || !submittedQuery.trim()) {
      setSearchResults(null);
      return;
    }

    const cleanedQuery = submittedQuery
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join(" ");

    const results = searchIndex.search(cleanedQuery, miniSearchQueryOptions);
    const normalizedResults = results.map(r => ({ id: r.id.toString().toLowerCase(), score: r.score }));
    setSearchResults(normalizedResults);
  }, [searchIndex, submittedQuery]);

  const hydratedServices = useMemo(() => {
    // PRELOAD LOGIC: If no search results (null), show all services
    if (searchResults === null) {
      return allServices as ServiceItem[];
    }

    const map = new Map(allServices.map(s => [s.id.toLowerCase(), s]));
    return searchResults
      .map(r => map.get(r.id))
      .filter(Boolean) as ServiceItem[];
  }, [searchResults]);

  return (
    <div className="container mx-auto">
      <Breadcrumb
        items={[{ name: "Home", href: "/" }, { name: "Search" }]}
      />

      <div className="m-4 font-medium">
        {isLoading ? (
          "Loading services..."
        ) : (
          `${hydratedServices.length} services ${submittedQuery ? 'found' : 'available'}`
        )}
      </div>

      {!isLoading && hydratedServices.length > 0 && (
        <Service services={hydratedServices} />
      )}

      {!isLoading && hydratedServices.length === 0 && (
        <div className="text-center py-20 text-muted">
          No services found for "{submittedQuery}".
        </div>
      )}
    </div>
  );
}