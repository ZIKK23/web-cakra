"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Bot, CheckCircle2, Sparkles, WandSparkles } from "lucide-react";

import { GOLDEN_PROMPTS } from "@/lib/home-content";
import type { SandboxResult } from "@/lib/simulate-prompt";
import { simulatePrompt } from "@/lib/simulate-prompt";
import { cn } from "@/lib/utils";

import { sectionMotionProps } from "./constants";
import { SectionHeading } from "./SectionHeading";

export function PlaygroundSection() {
  const [selectedPromptId, setSelectedPromptId] = useState(GOLDEN_PROMPTS[0].id);
  const [promptInput, setPromptInput] = useState(GOLDEN_PROMPTS[0].prompt);
  const [sandboxResult, setSandboxResult] = useState<SandboxResult>(() =>
    simulatePrompt(GOLDEN_PROMPTS[0].prompt),
  );
  const [isPending, startTransition] = useTransition();

  const handlePromptPreset = (promptId: string) => {
    const nextPrompt = GOLDEN_PROMPTS.find((item) => item.id === promptId);
    if (!nextPrompt) {
      return;
    }

    setSelectedPromptId(promptId);
    setPromptInput(nextPrompt.prompt);
    startTransition(() => {
      setSandboxResult(simulatePrompt(nextPrompt.prompt));
    });
  };

  return (
    <motion.section
      id="playground"
      {...sectionMotionProps}
      className="scroll-mt-28 border-t border-white/10 pt-16"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Interactive Playground"
            title="Prompt Sandbox tetap interaktif, tetapi tampil lebih bersih dan mudah dibaca."
            description="Pilih contoh Golden Prompt lalu ubah sesuai kebutuhan. Hasil simulasi di kanan membantu siswa memahami apakah prompt sudah cukup jelas dan etis."
          />

          <div className="panel rounded-[28px] p-6">
            <div className="flex items-center gap-3 text-[#c5a059]">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.22em]">Golden Prompt</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {GOLDEN_PROMPTS.map((prompt) => (
                <button
                  key={prompt.id}
                  type="button"
                  onClick={() => handlePromptPreset(prompt.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    selectedPromptId === prompt.id
                      ? "bg-[#c5a059] text-[#111111]"
                      : "chip text-[#f4ebd0] hover:bg-white/8",
                  )}
                >
                  {prompt.title}
                </button>
              ))}
            </div>

            <label
              htmlFor="prompt-sandbox"
              className="mt-6 block text-sm font-medium text-[#f4ebd0]"
            >
              Tulis prompt
            </label>
            <textarea
              id="prompt-sandbox"
              value={promptInput}
              onChange={(event) => setPromptInput(event.target.value)}
              className="mt-3 min-h-[220px] w-full rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm leading-7 text-[#f4ebd0] outline-none transition placeholder:text-[#9e927a] focus:border-[#c5a059]/45"
              placeholder="Contoh: bantu aku memahami materi dengan 4 poin singkat dan 1 contoh di sekolah."
            />

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://gemini.google.com/app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c5a059] px-5 py-3 text-sm font-semibold text-[#101010] transition hover:bg-[#d6b26f]"
              >
                <WandSparkles className="h-4 w-4" />
                Simulasikan
              </a>
              <p className="text-xs uppercase tracking-[0.18em] text-[#b9aa8c]">
                {promptInput.trim().length} karakter
              </p>
            </div>
          </div>
        </div>

        <motion.div
          key={sandboxResult.title + sandboxResult.summary}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="panel rounded-[28px] p-6 sm:p-7"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-[#c5a059]">
              <Bot className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.22em]">Hasil Simulasi</p>
            </div>
            <span className="text-xs uppercase tracking-[0.18em] text-[#b9aa8c]">
              {isPending ? "Memproses" : "Siap"}
            </span>
          </div>

          <h3 className="mt-5 font-serif text-3xl text-[#f4ebd0]">
            {sandboxResult.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#d6c8ad]">
            {sandboxResult.summary}
          </p>

          <div className="mt-6 rounded-[24px] border border-white/8 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">
              Checklist
            </p>
            <ul className="mt-4 space-y-3">
              {sandboxResult.checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-[#efe4c6]"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#c5a059]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-[24px] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">
              Simulasi jawaban AI
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#f4ebd0]">
              {sandboxResult.response.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
