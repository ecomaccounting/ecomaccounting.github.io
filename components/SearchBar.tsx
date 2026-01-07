"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Mic } from "lucide-react";

interface SearchBarProps {
  initialQuery?: string;
}

export default function SearchBar({ initialQuery = "" }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q");

  const [query, setQuery] = useState(initialQuery);

  /* -------------------------------------------
     Sync once from URL (on mount / URL change)
  ------------------------------------------- */
useEffect(() => {
  if (urlQuery !== null && urlQuery !== query) {
    setQuery(urlQuery);
  }
}, [urlQuery]);


  /* -------------------------------------------
     Execute search (single source of truth)
  ------------------------------------------- */
  const executeSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    router.push(`/search?q=${encodeURIComponent(trimmed)}`, {
      scroll: false,
    });
  };

  /* -------------------------------------------
     Keyboard handler
  ------------------------------------------- */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeSearch();
    }
  };

  /* -------------------------------------------
     Voice search
  ------------------------------------------- */
  const startSpeechRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice search is not supported on this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      setQuery(spokenText);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      alert("Microphone access denied or unavailable.");
    };

    recognition.start();
  };

  /* -------------------------------------------
     UI
  ------------------------------------------- */
  return (
    <div className="relative min-w-0">
      <div
        className="
          flex items-center gap-0
          rounded-xl bg-highlight
          px-1 py-1 min-w-0
          ring-1 ring-black/10
          focus-within:ring-2 focus-within:ring-primary
          transition
        "
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search services..."
          inputMode="search"
          className="
            flex-1 min-w-0
            bg-transparent outline-none
            text-normal placeholder:text-normal
            p-1
          "
        />

        <button
          type="button"
          onClick={startSpeechRecognition}
          aria-label="Voice search"
          className="button cursor-pointer w-14 h-9 shrink-0 flex items-center justify-center"
        >
          <Mic size={18} />
        </button>

        <button
          type="button"
          onClick={executeSearch}
          aria-label="Search"
          className="button cursor-pointer w-14 h-9 shrink-0 flex items-center justify-center"
        >
          <Search size={18} />
        </button>
      </div>
    </div>
  );
}
