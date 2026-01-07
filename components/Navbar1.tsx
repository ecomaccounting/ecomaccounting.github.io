"use client";

import Link from "next/link";
import Image from "next/image";
// import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";

export default function Navbar() {
  const SearchBar = dynamic(() => import("@/components/SearchBar"), {
    ssr: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-light relative sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-3 p-4">

        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* Mobile Logo: Shown by default, hidden from 'md' upwards */}
          <Image
            src="/img/logo/logos.png"
            height={40} // Adjusted height for mobile if needed
            width={40}  // Adjusted width for mobile if needed
            alt="Task360"
            priority
            className="block md:hidden"
          />

          {/* Desktop Logo: Hidden by default, shown from 'md' upwards */}
          <Image
            src="/img/logo/logor.png"
            height={48}
            width={128}
            alt="Task360"
            priority
            className="hidden md:block"
          />
        </Link>

        {/* 🔹 Search */}
        <div className="flex-1 min-w-0 sm:max-w-xl">
          <SearchBar />
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
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50" />
    </nav>
  );
}
