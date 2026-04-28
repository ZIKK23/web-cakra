export type SandboxResult = {
  title: string;
  summary: string;
  checklist: string[];
  response: string[];
};

export function simulatePrompt(prompt: string): SandboxResult {
  const normalizedPrompt = prompt.trim().toLowerCase();

  if (!normalizedPrompt) {
    return {
      title: "Prompt belum diisi",
      summary:
        "Tambahkan konteks mata pelajaran, tujuan, dan batasan etika agar AI memberi jawaban yang lebih tepat.",
      checklist: [
        "Sebutkan topik atau mata pelajaran yang sedang dipelajari.",
        "Tentukan bentuk bantuan yang dibutuhkan, misalnya ringkasan atau latihan soal.",
        "Tambahkan batasan etika agar AI tidak menggantikan proses belajar siswa.",
      ],
      response: [
        "Contoh: bantu aku memahami materi ekosistem dengan 4 poin singkat dan 1 contoh di lingkungan sekolah.",
      ],
    };
  }

  const isVisualPrompt =
    normalizedPrompt.includes("gambar") ||
    normalizedPrompt.includes("poster") ||
    normalizedPrompt.includes("visual");
  const isQuizPrompt =
    normalizedPrompt.includes("ujian") ||
    normalizedPrompt.includes("latihan") ||
    normalizedPrompt.includes("soal");
  const hasEthicsRule =
    normalizedPrompt.includes("jujur") ||
    normalizedPrompt.includes("etis") ||
    normalizedPrompt.includes("aman") ||
    normalizedPrompt.includes("pancasila");
  const hasFormatInstruction =
    normalizedPrompt.includes("poin") ||
    normalizedPrompt.includes("langkah") ||
    normalizedPrompt.includes("format") ||
    normalizedPrompt.includes("tabel");

  if (isVisualPrompt) {
    return {
      title: "Simulasi output visual",
      summary:
        "Prompt ini sudah cocok untuk membantu menyusun instruksi gambar sebelum dipakai di alat AI visual.",
      checklist: [
        "Objek utama dan suasana visual sudah cukup jelas.",
        hasEthicsRule
          ? "Batasan etika sudah disebutkan."
          : "Tambahkan batasan etika agar visual tetap ramah siswa dan sesuai konteks sekolah.",
        hasFormatInstruction
          ? "Format hasil sudah diarahkan."
          : "Minta hasil dalam bentuk poin atau prompt final agar lebih mudah dipakai ulang.",
      ],
      response: [
        "AI akan membantu merinci tema, warna, komposisi, dan elemen poster yang paling relevan.",
        "Prompt akan lebih kuat jika menyebutkan target audiens, ukuran media, dan gaya visual.",
      ],
    };
  }

  if (isQuizPrompt) {
    return {
      title: "Simulasi mentor latihan",
      summary:
        "AI paling efektif bila diposisikan sebagai teman latihan yang memberi petunjuk bertahap, bukan pemberi jawaban instan.",
      checklist: [
        "Sudah ada indikasi bahwa siswa diminta mencoba sendiri terlebih dahulu.",
        hasEthicsRule
          ? "Nilai kejujuran sudah muncul dalam prompt."
          : "Tambahkan aturan agar AI tidak langsung memberi jawaban akhir.",
        hasFormatInstruction
          ? "Format latihan sudah cukup spesifik."
          : "Tentukan jumlah soal atau tingkat kesulitan supaya hasil lebih terarah.",
      ],
      response: [
        "AI dapat membuat soal latihan, memberi petunjuk, lalu membantu mengevaluasi kesalahan.",
        "Bagian pentingnya adalah refleksi setelah latihan: apa yang sudah dipahami tanpa bantuan AI.",
      ],
    };
  }

  return {
    title: "Simulasi ringkasan materi",
    summary:
      "Prompt ini mengarah ke penggunaan AI sebagai alat bantu belajar untuk memahami materi dan menyusun ulang informasi.",
    checklist: [
      normalizedPrompt.length > 80
        ? "Konteks prompt sudah cukup rinci."
        : "Tambahkan konteks kelas, topik, atau target hasil supaya jawaban lebih relevan.",
      hasEthicsRule
        ? "Batasan etika sudah tersampaikan."
        : "Masukkan unsur etika agar AI membantu belajar tanpa menggantikan usaha siswa.",
      hasFormatInstruction
        ? "Struktur keluaran sudah jelas."
        : "Coba minta hasil dalam bentuk 3 sampai 5 poin atau langkah singkat.",
    ],
    response: [
      "AI dapat menyederhanakan materi menjadi poin-poin inti yang mudah diingat.",
      "Hasil terbaik biasanya muncul jika prompt menyebutkan audiens, tingkat kelas, dan contoh penerapan.",
    ],
  };
}
