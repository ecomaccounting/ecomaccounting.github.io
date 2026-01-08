"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("@/components/SearchBar"), {
  ssr: false,
});

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full navbar-frosted shadow-2xl  transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between gap-3 p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/img/logo/task360-logo-r.png"
            width={128}
            height={48}
            alt="Task360"
            priority
            className="h-10 w-auto md:h-12"
            title="task360"
          />
        </Link>

        {/* Search */}
        <div className="flex-1 min-w-0 sm:max-w-xl">
          <SearchBar />
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/our-story" className="font-medium">
            Our Story
          </Link>
          <Link href="/services" className="font-medium">
            Services
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden p-2"
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden border-t bg-light">
          <div className="flex flex-col p-4 gap-4">
            <Link href="/our-story" onClick={() => setMobileMenuOpen(false)}>
              Our Story
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
