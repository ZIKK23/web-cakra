"use client";

import { motion } from "framer-motion";

import { TIMELINE_ITEMS } from "@/lib/home-content";

import { sectionMotionProps } from "./constants";
import { SectionHeading } from "./SectionHeading";

function timelineStatusLabel(
  status: (typeof TIMELINE_ITEMS)[number]["status"],
) {
  if (status === "completed") {
    return "Selesai";
  }
  if (status === "ongoing") {
    return "Berjalan";
  }
  return "Berikutnya";
}

export function TimelineSection() {
  return (
    <motion.section
      id="timeline"
      {...sectionMotionProps}
      className="scroll-mt-28 border-t border-white/10 pt-16"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Activities & Timeline"
          title="Alur kegiatan ditampilkan bertahap supaya mudah diikuti dari awal sampai monitoring."
          description="Timeline ini menjaga halaman tetap rapi, tetapi tetap menjelaskan bahwa program tidak berhenti di satu sesi sosialisasi saja."
        />

        <div className="relative space-y-4 pl-5">
          <div className="absolute bottom-3 left-1.5 top-3 w-px bg-gradient-to-b from-[#c5a059] via-[#1b365d] to-transparent" />
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.id} className="relative pl-7">
              <div className="absolute left-[-0.15rem] top-7 h-3 w-3 rounded-full bg-[#c5a059]" />
              <div className="panel rounded-[26px] p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#c5a059]">
                    {item.date}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#b9aa8c]">
                    {timelineStatusLabel(item.status)}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-[#f4ebd0]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#d6c8ad]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
