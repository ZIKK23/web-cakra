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
        <div className="grid gap-6">
          <SectionHeading
            eyebrow="Documentation"
            title="Bagian dokumentasi sekarang berupa slot yang rapi untuk foto dan video."
            description="Setiap kartu sudah menyiapkan judul, jenis aset, dan path file supaya nanti kamu bisa langsung memasukkan dokumentasi asli tanpa mengubah struktur halaman."
          />
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
