"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import MiniSearch from "minisearch";
import Service from "@/components/Services";
import Breadcrumb from "@/components/BreadcrumbItem";
import { miniSearchIndexOptions, miniSearchQueryOptions } from "@/search/shared";
import { ServiceItem } from "@/data/types";

export default function ServiceSearch() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get("q") || "";
  const queryFromUrl = decodeURIComponent(rawQuery).replace(
    /^web\+ssj:(\/\/)?/i,
    ""
  );

  const [submittedQuery, setSubmittedQuery] = useState(queryFromUrl);

  const [allServices, setAllServices] = useState<ServiceItem[]>([]);
  const [searchIndex, setSearchIndex] = useState<MiniSearch<any> | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<
    { id: string; score: number }[] | null
  >(null);

  /* -----------------------------------------
   Sync query from URL
  ------------------------------------------ */
  useEffect(() => {
    setSubmittedQuery(queryFromUrl);
  }, [queryFromUrl]);

  /* -----------------------------------------
   Load service data (CLIENT SIDE)
  ------------------------------------------ */
  useEffect(() => {
    let cancelled = false;

    async function loadServices() {
      try {
        const res = await fetch("/data/servicesData.json");
        const json = await res.json();

        if (!cancelled) {
          setAllServices(json.services ?? []);
        }
      } catch (err) {
        console.error("Failed to load services:", err);
      }
    }

    loadServices();
    return () => {
      cancelled = true;
    };
  }, []);

  /* -----------------------------------------
   Load MiniSearch index
  ------------------------------------------ */
  useEffect(() => {
    let cancelled = false;

    async function loadIndex() {
      try {
        const res = await fetch("/data/search-index.json");
        const json = await res.text();

        if (cancelled) return;

        const index = MiniSearch.loadJSON(
          json,
          miniSearchIndexOptions
        );

        setSearchIndex(index);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load search index:", error);
        setIsLoading(false);
      }
    }

    loadIndex();
    return () => {
      cancelled = true;
    };
  }, []);

  /* -----------------------------------------
   Run search
  ------------------------------------------ */
  useEffect(() => {
    if (!searchIndex || !submittedQuery.trim()) {
      setSearchResults(null); // show all
      return;
    }

    const cleanedQuery = submittedQuery
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join(" ");

    const results = searchIndex.search(
      cleanedQuery,
      miniSearchQueryOptions
    );

    setSearchResults(
      results.map((r) => ({
        id: r.id.toString().toLowerCase(),
        score: r.score,
      }))
    );
  }, [searchIndex, submittedQuery]);

  /* -----------------------------------------
   Hydrate services from search results
  ------------------------------------------ */
  const hydratedServices = useMemo(() => {

    if (searchResults === null) {
      return allServices;
    }

    const serviceMap = new Map(
    allServices.map((s) => [s.id.toLowerCase(), s])
  );
  
  return searchResults
    .map((result) => serviceMap.get(result.id))
    .filter((service): service is ServiceItem => !!service);     

  }, [searchResults, allServices]);

  /* -----------------------------------------
   Render
  ------------------------------------------ */
  return (
    <div className="container mx-auto">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Search" },
        ]}
      />

      <div className="m-4 font-medium">
        {isLoading
          ? "Loading services..."
          : `${hydratedServices.length} services ${submittedQuery ? "found" : "available"
          }`}
      </div>

      {!isLoading && hydratedServices.length > 0 && (
        <Service services={hydratedServices} />
      )}

      {!isLoading && hydratedServices.length === 0 && (
        <div className="text-center py-20 text-muted">
          No services found for - {submittedQuery}.
        </div>
      )}
    </div>
  );
}
