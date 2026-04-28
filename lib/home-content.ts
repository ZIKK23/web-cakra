import type {
  DocumentationItem,
  GoldenPrompt,
  Module,
  Statistic,
  SurveyData,
  TimelineItem,
} from "./types";

export type TeamPillar = {
  title: string;
  label: string;
  description: string;
};

export type LearningModuleCard = Module & {
  accent: "gold" | "navy" | "cream";
  duration: string;
  highlights: string[];
};

export type DocumentationCard = DocumentationItem & {
  accent: "gold" | "navy" | "cream";
  slot: string;
};

export type ModuleDocument = {
  filename: string;
  title: string;
  subtitle: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  footer: string;
};

export const SITE_COPY = {
  brand: "CAKRA",
  fullName: "Cerdas AI Karakter Pancasila",
  heroBadge: "Modern Heritage x Generative AI",
  heroTitle: "Literasi AI yang etis, dekat dengan siswa, dan berpijak pada nilai Pancasila.",
  heroDescription:
    "Cakra menghadirkan modul belajar, pendampingan berkala, dan ruang eksplorasi prompt sederhana untuk membantu siswa SMP memanfaatkan AI secara bertanggung jawab.",
  heroPrimaryCta: "Lihat Modul",
  heroSecondaryCta: "Lihat Dokumentasi",
  footerNote:
    "Program sosial mahasiswa Telkom University untuk memperluas literasi digital yang aman, kritis, dan relevan di sekolah.",
};

export const NAV_ITEMS = [
  { id: "hero", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "timeline", label: "Kegiatan" },
  { id: "modules", label: "Modul" },
  { id: "playground", label: "Playground" },
  { id: "data", label: "Data" },
  { id: "documentation", label: "Dokumentasi" },
] as const;

export const PRODUCT_GOALS = [
  "Menyediakan platform literasi digital bagi siswa SMP agar mampu menggunakan AI secara etis sesuai nilai Pancasila.",
  "Menjadi repositori modul pembelajaran berbasis AI yang dapat diunduh dalam format PDF langsung dari website.",
  "Mendokumentasikan perjalanan proyek sosial mahasiswa Telkom University dari riset hingga evaluasi dampak.",
];

export const TEAM_PILLARS: TeamPillar[] = [
  {
    title: "Kurikulum yang membumi",
    label: "Visi",
    description:
      "Materi dirancang sederhana, kontekstual, dan cocok untuk ritme belajar siswa SMP di kelas maupun kegiatan pendampingan.",
  },
  {
    title: "Pendampingan bertahap",
    label: "Mentoring",
    description:
      "Setiap tahap program menekankan praktik aman: memahami prompt, memeriksa hasil AI, lalu mengaitkannya dengan karakter Pancasila.",
  },
  {
    title: "Dokumentasi sebagai bukti dampak",
    label: "Project Social",
    description:
      "Website ini bukan hanya etalase, tetapi arsip proses, refleksi, dan capaian proyek sosial mahasiswa Telkom University.",
  },
];

export const IMPACT_STATS: Statistic[] = [
  {
    value: "3",
    label: "modul inti siap diunduh untuk tugas, gambar, dan ujian",
  },
  {
    value: "3 tahap",
    label: "pendampingan utama dari riset hingga monitoring lapangan",
  },
  {
    value: "1 sandbox",
    label: "ruang coba prompt sederhana untuk belajar sebelum memakai AI sungguhan",
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "riset",
    phase: "riset",
    title: "Tahap Riset",
    description:
      "Tim memetakan kebutuhan siswa, kebiasaan penggunaan AI, serta isu etika digital yang paling dekat dengan aktivitas belajar sehari-hari.",
    date: "Maret 2026",
    status: "completed",
  },
  {
    id: "sosialisasi",
    phase: "sosialisasi",
    title: "Tahap Sosialisasi",
    description:
      "Siswa diperkenalkan pada konsep AI generatif, cara menyusun prompt, dan contoh penggunaan yang jujur, aman, dan menghargai proses belajar.",
    date: "April 2026",
    status: "ongoing",
  },
  {
    id: "monitoring",
    phase: "monitoring",
    title: "Tahap Monitoring",
    description:
      "Pendampingan berkala dilakukan untuk meninjau pemahaman, mengukur dampak, dan menguatkan refleksi atas penggunaan AI sesuai nilai Pancasila.",
    date: "Mei 2026",
    status: "upcoming",
  },
];

export const LEARNING_MODULES: LearningModuleCard[] = [
  {
    id: "tugas",
    title: "Modul Tugas Cerdas",
    description:
      "Panduan memakai AI untuk membantu memahami materi, menyusun ide, dan mengecek hasil tugas tanpa menyalin jawaban mentah.",
    category: "tugas",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/api/modules/tugas",
    accent: "gold",
    duration: "15-20 menit",
    highlights: [
      "Membedakan bantuan belajar dan kecurangan akademik.",
      "Template prompt untuk meringkas, menjelaskan, dan memberi umpan balik.",
      "Checklist verifikasi sebelum jawaban dipakai kembali.",
    ],
  },
  {
    id: "gambar",
    title: "Modul Visual & Gambar",
    description:
      "Pendekatan aman untuk membuat ilustrasi pembelajaran, poster kelas, dan visual kreatif dengan instruksi yang jelas dan bertanggung jawab.",
    category: "gambar",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/api/modules/gambar",
    accent: "navy",
    duration: "20 menit",
    highlights: [
      "Cara menjelaskan objek, warna, dan suasana secara spesifik.",
      "Etika memakai gambar AI di lingkungan sekolah.",
      "Contoh prompt visual untuk poster literasi digital.",
    ],
  },
  {
    id: "ujian",
    title: "Modul Latihan Ujian",
    description:
      "Strategi menggunakan AI untuk latihan mandiri, membuat soal refleksi, dan memahami kesalahan tanpa bergantung penuh pada jawaban instan.",
    category: "ujian",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/api/modules/ujian",
    accent: "cream",
    duration: "15 menit",
    highlights: [
      "Latihan soal bertingkat dari mudah ke menengah.",
      "Simulasi tanya jawab yang mendorong siswa tetap berpikir aktif.",
      "Panduan evaluasi diri setelah menerima bantuan AI.",
    ],
  },
];

export const GOLDEN_PROMPTS: GoldenPrompt[] = [
  {
    id: "ringkas",
    title: "Ringkas Materi",
    category: "Belajar",
    prompt:
      "Bantu aku merangkum materi Pancasila kelas SMP menjadi 5 poin singkat, gunakan bahasa mudah dipahami, dan beri 1 contoh penerapan di sekolah.",
    example:
      "AI akan menampilkan ringkasan terstruktur lalu memberi contoh sikap gotong royong di kelas.",
    tags: ["jelas", "ringkas", "relevan"],
  },
  {
    id: "poster",
    title: "Ide Poster",
    category: "Kreatif",
    prompt:
      "Buatkan prompt gambar untuk poster literasi digital bertema jujur saat memakai AI, warna hangat, gaya ramah siswa SMP, dan ada simbol gotong royong.",
    example:
      "AI akan membantu menyusun instruksi visual yang lebih rinci untuk dipakai di alat pembuat gambar.",
    tags: ["visual", "aman", "Pancasila"],
  },
  {
    id: "latihan",
    title: "Latihan Ujian",
    category: "Evaluasi",
    prompt:
      "Berikan 3 soal latihan tentang etika digital untuk siswa SMP, lengkap dengan petunjuk berpikir, tetapi jangan langsung beri jawaban akhir sebelum aku mencoba.",
    example:
      "AI akan bertindak seperti mentor yang menuntun, bukan pengganti proses belajar.",
    tags: ["latihan", "bertahap", "jujur"],
  },
];

export const SURVEY_DATA: SurveyData[] = [
  {
    id: "pemahaman-prompt",
    question: "Seberapa percaya diri siswa menyusun prompt setelah pendampingan?",
    chartType: "bar",
    data: [
      { label: "Masih bingung", value: 18 },
      { label: "Cukup paham", value: 49 },
      { label: "Siap mencoba", value: 33 },
    ],
  },
  {
    id: "etika-ai",
    question: "Apakah siswa memahami batas etis penggunaan AI untuk tugas sekolah?",
    chartType: "bar",
    data: [
      { label: "Perlu penguatan", value: 14 },
      { label: "Mulai paham", value: 38 },
      { label: "Paham dan waspada", value: 48 },
    ],
  },
  {
    id: "manfaat-modul",
    question: "Bagaimana penilaian awal terhadap modul literasi digital Cakra?",
    chartType: "bar",
    data: [
      { label: "Perlu revisi", value: 9 },
      { label: "Membantu", value: 41 },
      { label: "Sangat membantu", value: 50 },
    ],
  },
];

export const DOCUMENTATION_ITEMS: DocumentationCard[] = [
  {
    id: "doc-photo-1",
    type: "image",
    url: "/documentation/foto-kegiatan-01.jpg",
    title: "Foto pembukaan kegiatan",
    description:
      "Gunakan untuk momen pembukaan, briefing, atau penyampaian tujuan program di kelas.",
    date: "Slot Foto",
    event: "Dokumentasi",
    accent: "navy",
    slot: "Foto 01",
    // Rasio aman: 4:5 atau 16:10. Cocok untuk foto suasana kelas.
  },
  {
    id: "doc-photo-2",
    type: "image",
    url: "/documentation/foto-kegiatan-02.jpg",
    title: "Foto sesi sosialisasi",
    description:
      "Tempatkan foto guru, mentor, atau siswa saat materi literasi AI sedang disampaikan.",
    date: "Slot Foto",
    event: "Dokumentasi",
    accent: "gold",
    slot: "Foto 02",
    // Pilih foto terang dengan fokus jelas pada aktivitas utama.
  },
  {
    id: "doc-photo-3",
    type: "image",
    url: "/documentation/foto-kegiatan-03.jpg",
    title: "Foto diskusi kelompok",
    description:
      "Gunakan untuk foto interaksi siswa saat bertanya, berdiskusi, atau mencoba prompt bersama mentor.",
    date: "Slot Foto",
    event: "Dokumentasi",
    accent: "cream",
    slot: "Foto 03",
    // Cocok untuk momen yang menunjukkan kolaborasi dan partisipasi siswa.
  },
  {
    id: "doc-photo-4",
    type: "image",
    url: "/documentation/foto-kegiatan-04.jpg",
    title: "Foto penutupan atau refleksi",
    description:
      "Isi dengan foto sesi refleksi, penyerahan materi, atau dokumentasi akhir kegiatan.",
    date: "Slot Foto",
    event: "Dokumentasi",
    accent: "navy",
    slot: "Foto 04",
    // Gunakan foto horizontal jika ingin menampilkan lebih banyak peserta.
  },
  {
    id: "doc-video-1",
    type: "video",
    url: "/documentation/video-kegiatan-01.mp4",
    title: "Video sesi pembelajaran",
    description:
      "Sediakan untuk cuplikan mentor menjelaskan materi atau siswa saat praktik memakai prompt sandbox.",
    date: "Slot Video",
    event: "Dokumentasi",
    accent: "cream",
    slot: "Video 01",
    // Simpan video utama kegiatan atau thumbnail pendukung di path ini.
  },
  {
    id: "doc-video-2",
    type: "video",
    url: "/documentation/video-kegiatan-02.mp4",
    title: "Video rekap kegiatan",
    description:
      "Gunakan untuk video penutup, ringkasan kegiatan, atau kompilasi dokumentasi pendek.",
    date: "Slot Video",
    event: "Dokumentasi",
    accent: "gold",
    slot: "Video 02",
    // Format umum: MP4. Jika perlu, siapkan juga poster frame terpisah.
  },
];

export const MODULE_DOCUMENTS: Record<string, ModuleDocument> = {
  tugas: {
    filename: "cakra-modul-tugas.pdf",
    title: "Modul Tugas Cerdas",
    subtitle:
      "Panduan singkat memakai AI untuk memahami materi, mencari ide, dan mengecek hasil tugas dengan tetap jujur.",
    sections: [
      {
        heading: "Tujuan Belajar",
        body: [
          "Memahami kapan AI boleh dipakai sebagai alat bantu belajar.",
          "Menyusun prompt yang spesifik agar hasil lebih relevan.",
          "Mengecek ulang hasil AI sebelum dipakai untuk tugas sekolah.",
        ],
      },
      {
        heading: "Langkah Praktik",
        body: [
          "Tuliskan mata pelajaran, tujuan, dan bentuk bantuan yang dibutuhkan.",
          "Minta AI memberi penjelasan atau rangkuman, bukan jawaban final untuk disalin.",
          "Bandingkan hasil AI dengan buku, catatan, atau arahan guru.",
        ],
      },
      {
        heading: "Refleksi Etis",
        body: [
          "Apakah saya tetap memahami materi setelah memakai AI?",
          "Apakah jawaban akhir sudah saya susun ulang dengan bahasa sendiri?",
          "Apakah penggunaan AI ini menghargai proses belajar dan kejujuran?",
        ],
      },
    ],
    footer:
      "CAKRA | Cerdas AI Karakter Pancasila | Telkom University Social Project",
  },
  gambar: {
    filename: "cakra-modul-gambar.pdf",
    title: "Modul Visual & Gambar",
    subtitle:
      "Panduan membuat prompt visual yang jelas, aman, dan cocok dipakai untuk poster atau ilustrasi pembelajaran.",
    sections: [
      {
        heading: "Tujuan Belajar",
        body: [
          "Menjelaskan objek, warna, dan suasana gambar dengan rinci.",
          "Menggunakan AI untuk mendukung kreativitas, bukan mengganti proses berpikir.",
          "Memahami etika saat menampilkan hasil gambar AI.",
        ],
      },
      {
        heading: "Langkah Praktik",
        body: [
          "Sebutkan tema, target audiens, dan pesan utama poster.",
          "Tambahkan gaya visual yang ramah siswa SMP dan konteks sekolah.",
          "Uji beberapa variasi prompt lalu pilih hasil yang paling sesuai.",
        ],
      },
      {
        heading: "Refleksi Etis",
        body: [
          "Apakah gambar tetap menghormati nilai kesopanan dan keberagaman?",
          "Apakah hasil AI diberi konteks saat dipresentasikan di kelas?",
          "Apakah saya memahami alasan memilih visual tersebut?",
        ],
      },
    ],
    footer:
      "CAKRA | Cerdas AI Karakter Pancasila | Telkom University Social Project",
  },
  ujian: {
    filename: "cakra-modul-latihan-ujian.pdf",
    title: "Modul Latihan Ujian",
    subtitle:
      "Panduan menggunakan AI untuk latihan bertahap, refleksi kesalahan, dan penguatan pemahaman sebelum ujian.",
    sections: [
      {
        heading: "Tujuan Belajar",
        body: [
          "Memakai AI untuk membuat soal latihan yang sesuai level siswa.",
          "Mendorong siswa berpikir lebih dulu sebelum membuka jawaban.",
          "Menggunakan umpan balik AI sebagai bahan evaluasi diri.",
        ],
      },
      {
        heading: "Langkah Praktik",
        body: [
          "Minta AI membuat 3 sampai 5 soal latihan dari topik tertentu.",
          "Gunakan petunjuk bertahap dan minta jawaban dibuka setelah mencoba.",
          "Catat kesalahan yang sering muncul lalu ulangi latihan serupa.",
        ],
      },
      {
        heading: "Refleksi Etis",
        body: [
          "Apakah saya sudah berusaha menjawab sendiri sebelum meminta bantuan?",
          "Apakah AI dipakai untuk belajar, bukan untuk curang saat ujian?",
          "Apakah saya bisa menjelaskan ulang materi tanpa bantuan AI?",
        ],
      },
    ],
    footer:
      "CAKRA | Cerdas AI Karakter Pancasila | Telkom University Social Project",
  },
};
