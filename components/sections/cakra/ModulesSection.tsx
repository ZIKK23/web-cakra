"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, Clock } from "lucide-react";

import { LEARNING_MODULES } from "@/lib/home-content";
import { cn } from "@/lib/utils";

import { moduleAccentClasses, sectionMotionProps } from "./constants";
import { SectionHeading } from "./SectionHeading";

export function ModulesSection() {
  return (
    <motion.section
      id="modules"
      {...sectionMotionProps}
      className="scroll-mt-28 border-t border-white/10 pt-16"
    >
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Learning Modules"
          title="Modul disusun ringkas, jelas, dan langsung bisa diunduh."
          description="Tiga kartu modul ini fokus pada kebutuhan belajar yang paling sering ditemui: tugas, visual, dan latihan ujian."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {LEARNING_MODULES.map((module) => (
            <article
              key={module.id}
              className="panel relative overflow-hidden rounded-[28px] p-6"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                )}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="chip rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#c5a059]">
                    {module.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#b9aa8c]">
                    {module.duration}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl text-[#f4ebd0]">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#d6c8ad]">
                  {module.description}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[#efe4c6]">
                  {module.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#c5a059]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {module.pdfUrl ? (
                  <a
                    href={module.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c5a059] px-4 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#d6b26f]"
                  >
                    Buka PDF
                    <Download className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-3 text-sm font-semibold text-white/40 cursor-not-allowed border border-white/10">
                    Segera Hadir
                    <Clock className="h-4 w-4" />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
