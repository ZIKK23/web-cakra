"use client";

import { motion } from "framer-motion";
import { ChartColumn } from "lucide-react";

import { SURVEY_DATA } from "@/lib/home-content";
import { cn } from "@/lib/utils";

import { sectionMotionProps } from "./constants";
import { SectionHeading } from "./SectionHeading";

export function SurveyDataSection() {
  return (
    <motion.section
      id="data"
      {...sectionMotionProps}
      className="scroll-mt-28 border-t border-white/10 pt-16"
    >
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Data & Survey"
          title="Bagian data diringkas menjadi tiga kartu agar mudah dipahami dalam sekali lihat."
          description="Visualisasi ini tetap menjelaskan proyeksi dampak program terhadap pemahaman etika AI siswa."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {SURVEY_DATA.map((survey) => (
            <div key={survey.id} className="panel rounded-[28px] p-6">
              <div className="flex items-center gap-3 text-[#c5a059]">
                <ChartColumn className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.18em]">Ringkasan Survei</p>
              </div>

              <h3 className="mt-4 font-serif text-2xl text-[#f4ebd0]">
                {survey.question}
              </h3>

              <div className="mt-6 space-y-4">
                {survey.data.map((item, index) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between gap-3 text-sm text-[#efe4c6]">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/8">
                      <div
                        className={cn(
                          "h-full rounded-full bg-gradient-to-r",
                          index === 0 && "from-[#4b463d] to-[#7d7360]",
                          index === 1 && "from-[#1b365d] to-[#4e76aa]",
                          index === 2 && "from-[#c5a059] to-[#e8c87f]",
                        )}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
