"use client";

import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { WandSparkles } from "lucide-react";

import { IMPACT_STATS, SITE_COPY } from "@/lib/home-content";

type HeroSectionProps = {
  contentY: MotionValue<number>;
};

export function HeroSection({ contentY }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen flex-col justify-center scroll-mt-28"
    >
      <div className="relative mx-auto flex w-full max-w-6xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <motion.div style={{ y: contentY }} className="max-w-3xl">
          <h1
            className="mt-6 font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl"
            style={{
              background:
                "linear-gradient(135deg, #c5a059 0%, #f4ebd0 45%, #c5a059 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {SITE_COPY.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#d6c8ad] sm:text-lg">
            {SITE_COPY.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#playground"
              className="inline-flex items-center gap-2 rounded-full bg-[#c5a059] px-5 py-3 text-sm font-semibold text-[#0f0f0f] transition hover:bg-[#d6b26f]"
            >
              {SITE_COPY.heroPrimaryCta}
              <WandSparkles className="h-4 w-4" />
            </a>
            <a
              href="https://chat.whatsapp.com/DTUpvnV5XdKA8jRaeFoAns"
              target="_blank"
              rel="noopener noreferrer"
              className="chip inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#f4ebd0] transition hover:bg-white/8"
            >
              {SITE_COPY.heroSecondaryCta}
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="panel rounded-[24px] px-5 py-4">
                <p className="font-serif text-2xl text-[#c5a059]">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#d6c8ad]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#b9aa8c]">
            <span>Scroll untuk melihat isi program</span>
            <div className="h-px w-10 bg-[#c5a059]/35" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
