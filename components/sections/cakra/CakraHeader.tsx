"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

import { NAV_ITEMS, SITE_COPY } from "@/lib/home-content";

export function CakraHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 bg-[rgba(10,14,22,0.75)] p-3 backdrop-blur-xl sm:gap-4 sm:px-4">
        <div className="flex w-full items-center justify-between md:w-auto">
          <a href="#hero" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a059]/30 bg-[#1b365d]/20">
              <Image
                src="/images/LOGO-CAKRA.png"
                alt="Logo Cakra"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate font-serif text-sm text-[#f4ebd0] sm:text-base">
                {SITE_COPY.brand}
              </p>
              <p className="hidden truncate text-[11px] uppercase tracking-[0.22em] text-[#c5a059] sm:block">
                {SITE_COPY.fullName}
              </p>
            </div>
          </a>

          {/* Hamburger button for mobile */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-[#d6c8ad] transition hover:bg-white/10 hover:text-[#f4ebd0] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:w-auto md:justify-center md:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full px-3 py-2 text-sm text-[#d6c8ad] transition hover:bg-white/6 hover:text-[#f4ebd0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Playground Button */}
        <a
          href="#playground"
          className="hidden shrink-0 items-center gap-1 rounded-full bg-[#c5a059] px-3 py-2 text-xs font-semibold text-[#0f0f0f] transition hover:bg-[#d6b26f] md:inline-flex sm:gap-2 sm:px-4 sm:text-sm"
        >
          Playground
          <ArrowRight className="hidden h-4 w-4 sm:block" />
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,14,22,0.95)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-[#d6c8ad] hover:text-[#f4ebd0] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#playground"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#c5a059] px-4 py-3 text-sm font-semibold text-[#0f0f0f] transition hover:bg-[#d6b26f]"
            >
              Playground
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
