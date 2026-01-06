"use client";

import { Search, Mic } from "lucide-react";

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  query,
  onQueryChange,
  onSearch,
}: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

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
    recognition.continuous = false;

    recognition.onresult = (event: any) => {
      const spokenText = event.results[0][0].transcript;
      onQueryChange(spokenText);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      alert("Microphone access denied or unavailable.");
    };

    recognition.start();
  };

  return (
    <div className="relative min-w-0">
      <div
        className="
      flex items-center
      gap-2
      rounded-xl
      bg-highlight
      px-2 py-1
      min-w-0
      ring-1 ring-black/10
      focus-within:ring-2 focus-within:ring-primary
      transition
    "
      >
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search services..."
          inputMode="search"
          className="
        flex-1 min-w-0
        bg-transparent
        outline-none
        text-normal
        placeholder:text-normal
        px-2 py-2
      "
        />

        <button
          type="button"
          onClick={startSpeechRecognition}
          aria-label="Voice search"
          className="ssj-btn w-9 h-9 shrink-0 flex items-center justify-center"
        >
          <Mic size={18} />
        </button>

        <button
          type="button"
          onClick={onSearch}
          aria-label="Search"
          className="ssj-btn w-9 h-9 shrink-0 flex items-center justify-center"
        >
          <Search size={18} />
        </button>
      </div>
    </div>
  );
}
