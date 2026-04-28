"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import { PRODUCT_GOALS, TEAM_PILLARS } from "@/lib/home-content";

import { sectionMotionProps } from "./constants";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      {...sectionMotionProps}
      className="scroll-mt-28 border-t border-white/10 pt-16"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="About Cakra"
          title="Isi halaman dibuat lebih ringan agar pengunjung cepat memahami inti program."
          description="Cakra adalah landing page literasi digital untuk siswa SMP yang menghubungkan nilai Pancasila, pembelajaran AI, dan dokumentasi proyek sosial mahasiswa Telkom University."
        />

        <div className="space-y-4">
          <div className="panel rounded-[28px] p-6 sm:p-7">
            <div className="flex items-center gap-3 text-[#c5a059]">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.22em]">Tujuan Produk</p>
            </div>
            <div className="mt-5 space-y-4">
              {PRODUCT_GOALS.map((goal, index) => (
                <div key={goal} className="flex gap-4">
                  <span className="font-serif text-xl text-[#c5a059]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7 text-[#d6c8ad]">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {TEAM_PILLARS.map((pillar) => (
              <div key={pillar.title} className="panel rounded-[24px] p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c5a059]">
                  {pillar.label}
                </p>
                <h3 className="mt-3 font-serif text-xl text-[#f4ebd0]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#d6c8ad]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
