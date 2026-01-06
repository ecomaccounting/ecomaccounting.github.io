"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawQuery = decodeURIComponent(searchParams.get("q") || "");
  const initialQuery = rawQuery.replace(/^web\+ssj:(\/\/)?/i, "");

  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = () => {
    const q = inputQuery.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="bg-light border-b">
      <div className="container mx-auto flex items-center justify-between gap-3 p-4">

        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/task360.svg"
            height={32}
            width={32}
            alt="Task360"
            priority
          />
          {/* Text hidden only on mobile */}
          <span className="hidden sm:inline text-xl tracking-wide">
            task360
          </span>
        </Link>

        {/* 🔹 Search */}
        <div className="flex-1 min-w-0 sm:max-w-xl">
          <SearchBar
            initialQuery={inputQuery}
          />
        </div>

        {/* 🔹 Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/our-story" className="font-medium whitespace-nowrap">
            Our Story
          </Link>
          <Link href="/services" className="font-medium whitespace-nowrap">
            Services
          </Link>
        </div>

        {/* 🔹 Mobile Hamburger */}
        <button
          className="sm:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t bg-light">
          <div className="flex flex-col p-4 gap-4">
            <Link
              href="/our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="font-medium"
            >
              Our Story
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="font-medium"
            >
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
