"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

import { DOCUMENTATION_ITEMS } from "@/lib/home-content";

import { DocumentationSlot } from "./DocumentationSlot";
import { sectionMotionProps } from "./constants";
import { SectionHeading } from "./SectionHeading";

export function DocumentationSection() {
  return (
    <motion.section
      id="documentation"
      {...sectionMotionProps}
      className="scroll-mt-28 border-t border-white/10 pt-16"
    >
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Documentation"
            title="Bagian dokumentasi sekarang berupa slot yang rapi untuk foto dan video."
            description="Setiap kartu sudah menyiapkan judul, jenis aset, dan path file supaya nanti kamu bisa langsung memasukkan dokumentasi asli tanpa mengubah struktur halaman."
          />

          <div className="panel rounded-[28px] p-6">
            <div className="flex items-center gap-3 text-[#c5a059]">
              <Users className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.22em]">Cara isi dokumentasi</p>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-[#d6c8ad]">
              <p>
                Masukkan file ke folder public/documentation sesuai nama yang tertera di
                tiap kartu.
              </p>
              <p>Foto bisa memakai .jpg atau .webp, sedangkan video bisa memakai .mp4.</p>
              <p>
                Kalau nanti kamu sudah punya aset asli, saya bisa lanjut bantu tampilkan
                preview otomatis di slot ini.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {DOCUMENTATION_ITEMS.map((item) => (
            <DocumentationSlot key={item.id} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
