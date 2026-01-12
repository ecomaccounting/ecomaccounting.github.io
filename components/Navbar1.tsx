"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import BrandLogo from "./BrandLogo";

const SearchBar = dynamic(() => import("@/components/SearchBar"), {
  ssr: false,
});

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="
    nav-3d
    sticky top-0 z-50 w-full
    relative
    bg

    border-b border-[var(--border)]

    shadow-[0_4px_12px_rgba(0,0,0,0.08)]
    dark:shadow-[0_6px_20px_rgba(0,0,0,0.6)]

    transition-all duration-300
  "
    >
      <div className="container mx-auto flex items-center justify-between gap-3 p-4">

        {/* Logo */}
        {/* <Link
  href="/"
  aria-label="Task360 home"
  className="flex items-center gap-1 shrink-0"
>
  <Image
  src="/img/logo/task360-logo-s.png"
  width={40}
  height={40}
  alt="Task360 logo"
  priority
  className="
    h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10
    transition-transform duration-300 ease-out
    hover:rotate-6 hover:scale-[1.03]
    active:rotate-0
    motion-reduce:transform-none
  "
/>
  <span className="text-2xl font-semibold hidden md:inline text-[var(--brand)]">
    task360
  </span>
</Link> */}

<BrandLogo size="lg" textBreakpoint="md" />


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
          <Link href="/pricing" className="font-medium">
            Pricing
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
