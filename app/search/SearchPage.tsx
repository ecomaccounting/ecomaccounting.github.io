"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import MiniSearch from "minisearch";
import Service from "@/components/Services/Services";
import Breadcrumb from "@/components/common/BreadcrumbItem";
import { miniSearchIndexOptions, miniSearchQueryOptions } from "@/lib/shared";
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

  const SEARCH_SYNONYMS: Record<string, string> = {
    "pvt": "private",
    "ltd": "limited",
    "pvt ltd": "private limited",
    "plc": "private limited company",
    "llp": "limited liability partnership",
    "opc": "one person company",
    "prop": "proprietorship",
    "gst": "goods and services tax",
    "msme": "micro small medium enterprise",
    "sme": "small medium enterprise",
    "sec 8": "section 8 company",
    "ngo": "section 8 company",
    "udyam": "msme registration",
    "pf": "provident fund",
    "epf": "employee provident fund",
    "esic": "employee state insurance",
    "pt": "professional tax",
    "fssai": "food safety and standards authority of india",
    "iec": "import export code",
    "roc": "registrar of companies",
    "tds": "tax deducted at source",
    "itr": "income tax return",
    "cfo": "chief financial officer",
    "vcfo": "virtual cfo",
    "esop": "employee stock option plan",
    "sar": "stock appreciation rights",
    "ipo": "initial public offering",
    "fema": "foreign exchange management act",
    "dgft": "directorate general of foreign trade",
    "m&a": "mergers and acquisitions",
  };

  function normalizeQuery(query: string) {
    const tokens = query
      .toLowerCase()
      .trim()
      .split(/\s+/);

    const expandedTokens = tokens.flatMap((token) => {
      const mapped = SEARCH_SYNONYMS[token];
      return mapped ? [token, mapped] : [token];
    });

    return Array.from(new Set(expandedTokens)).join(" ");
  }

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

    const cleanedQuery = normalizeQuery(submittedQuery);

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
