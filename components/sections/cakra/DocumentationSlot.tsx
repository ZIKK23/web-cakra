import { Film, Images } from "lucide-react";

import type { DocumentationCard } from "@/lib/home-content";

type DocumentationSlotProps = {
  item: DocumentationCard;
};

export function DocumentationSlot({ item }: DocumentationSlotProps) {
  const Icon = item.type === "video" ? Film : Images;

  return (
    <article className="panel rounded-[28px] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="chip rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#c5a059]">
          {item.slot}
        </span>
        <Icon className="h-5 w-5 text-[#f4ebd0]" />
      </div>

      <div className="mt-5 flex aspect-[4/3] items-center justify-center rounded-[22px] border border-dashed border-[#c5a059]/25 bg-[rgba(255,255,255,0.02)]">
        <div className="flex flex-col items-center gap-3 text-center">
          <Icon className="h-8 w-8 text-[#c5a059]" />
          <div>
            <p className="text-sm font-medium text-[#f4ebd0]">
              {item.type === "video"
                ? "Tempat video dokumentasi"
                : "Tempat foto dokumentasi"}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#b9aa8c]">
              {item.event}
            </p>
          </div>
        </div>
      </div>

      <h3 className="mt-5 font-serif text-2xl text-[#f4ebd0]">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#d6c8ad]">{item.description}</p>
      {/*
      <div className="mt-4 rounded-[20px] bg-black/20 px-4 py-3">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#c5a059]">
          Simpan file di
        </p>
        <code className="mt-2 block break-all text-xs text-[#f4ebd0]">
          public{item.url}
        </code>
      </div>
      */}
    </article>
  );
}
