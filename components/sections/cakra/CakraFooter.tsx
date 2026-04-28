"use client";

import { SITE_COPY } from "@/lib/home-content";

export function CakraFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#b9aa8c] lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-serif text-2xl text-[#f4ebd0]">CAKRA</p>
          <p className="mt-2 max-w-2xl leading-7">{SITE_COPY.footerNote}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#c5a059]">
          <span>Telkom University</span>
          <span>Literasi AI</span>
          <span>Pancasila</span>
        </div>
      </div>
    </footer>
  );
}
