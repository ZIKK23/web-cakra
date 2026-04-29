"use client";

import { motion } from "framer-motion";
import { User, Trophy } from "lucide-react";
import { sectionMotionProps } from "./constants";
import { SectionHeading } from "./SectionHeading";

const CHAMPIONS = [
  { rank: 1, name: "Budi Santoso", school: "SMA Negeri 1", score: 980 },
  { rank: 2, name: "Siti Aminah", school: "SMA Negeri 2", score: 950 },
  { rank: 3, name: "Ahmad Fauzi", school: "SMA Negeri 3", score: 920 },
  { rank: 4, name: "Dewi Lestari", school: "SMA Negeri 4", score: 890 },
  { rank: 5, name: "Rizky Aditya", school: "SMA Negeri 5", score: 880 },
  { rank: 6, name: "Nisa Sabyan", school: "SMA Negeri 6", score: 870 },
  { rank: 7, name: "Reza Rahardian", school: "SMA Negeri 7", score: 860 },
  { rank: 8, name: "Putri Tanjung", school: "SMA Negeri 8", score: 850 },
  { rank: 9, name: "Kevin Sanjaya", school: "SMA Negeri 9", score: 840 },
  { rank: 10, name: "Maudy Ayunda", school: "SMA Negeri 10", score: 830 },
];

export function ChampionSection() {
  const top3 = CHAMPIONS.slice(0, 3);
  const remaining = CHAMPIONS.slice(3);

  return (
    <motion.section
      id="champion"
      {...sectionMotionProps}
      className="scroll-mt-28 border-t border-white/10 pt-16"
    >
      <div className="panel rounded-[28px] bg-black/40 p-6 sm:p-10 border border-white/5 space-y-12">
        <SectionHeading
          eyebrow="Cakra Champion"
          title="Leaderboard Peserta Terbaik"
          description="Apresiasi untuk siswa dengan pencapaian terbaik dalam penerapan AI dan literasi digital berlandaskan Pancasila."
        />

        {/* Podium Top 3 */}
        <div className="flex flex-col sm:flex-row items-end justify-center gap-4 sm:gap-6 pt-10">
          {/* Juara 2 */}
          <div className="flex flex-col items-center order-2 sm:order-1">
            <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 overflow-hidden border-2 border-[#b9aa8c]">
              <User className="h-10 w-10 text-white/50" />
            </div>
            <div className="flex w-32 flex-col items-center rounded-t-lg bg-gradient-to-t from-[rgba(244,235,208,0.2)] to-transparent p-4 pb-0 text-center sm:h-32">
              <span className="text-[#b9aa8c] font-serif text-3xl">2</span>
              <p className="mt-2 text-sm font-semibold text-[#f4ebd0]">{top3[1].name}</p>
              <p className="text-xs text-[#d6c8ad]">{top3[1].score} pts</p>
            </div>
          </div>

          {/* Juara 1 */}
          <div className="flex flex-col items-center order-1 sm:order-2">
            <Trophy className="mb-2 h-8 w-8 text-[#c5a059]" />
            <div className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 overflow-hidden border-4 border-[#c5a059]">
              <User className="h-12 w-12 text-white/50" />
            </div>
            <div className="flex w-36 flex-col items-center rounded-t-lg bg-gradient-to-t from-[rgba(197,160,89,0.3)] to-transparent p-4 pb-0 text-center sm:h-40">
              <span className="text-[#c5a059] font-serif text-4xl">1</span>
              <p className="mt-2 text-sm font-bold text-[#f4ebd0]">{top3[0].name}</p>
              <p className="text-xs text-[#d6c8ad]">{top3[0].score} pts</p>
            </div>
          </div>

          {/* Juara 3 */}
          <div className="flex flex-col items-center order-3 sm:order-3">
            <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 overflow-hidden border-2 border-[#8c7453]">
              <User className="h-10 w-10 text-white/50" />
            </div>
            <div className="flex w-32 flex-col items-center rounded-t-lg bg-gradient-to-t from-[rgba(140,116,83,0.2)] to-transparent p-4 pb-0 text-center sm:h-24">
              <span className="text-[#8c7453] font-serif text-2xl">3</span>
              <p className="mt-2 text-sm font-semibold text-[#f4ebd0]">{top3[2].name}</p>
              <p className="text-xs text-[#d6c8ad]">{top3[2].score} pts</p>
            </div>
          </div>
        </div>

        {/* Ranking 4-10 */}
        <div className="mx-auto max-w-2xl space-y-3 mt-10">
          {remaining.map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-[rgba(255,255,255,0.02)] px-6 py-4 transition hover:bg-white/5"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-[#b9aa8c]">
                  {user.rank}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#f4ebd0]">{user.name}</p>
                  <p className="text-xs text-[#9e927a]">{user.school}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-[#c5a059]">{user.score} pts</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
