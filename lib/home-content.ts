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
  "brand": "CAKRA",
  "fullName": "Cipta Aksi Kreatif dan Riset Siswa",
  "heroTitle": "Membuka Pintu Pengetahuan: Sinergi Teknologi & Karakter",
  "heroDescription": "Ekosistem edukasi yang membekali siswa SMA dengan kemampuan praktis menggunakan Generative AI sebagai asisten akademik yang berintegritas dan berpijak pada nilai-nilai Pancasila.",
  "heroPrimaryCta": "Playground",
  "heroSecondaryCta": "Gabung Komunitas",
  "footerNote": "Proyek Sosial Mata Kuliah Pendidikan Pancasila - Program Studi Sistem Informasi Telkom University 2026."
}

export const NAV_ITEMS = [
  { id: "hero", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "timeline", label: "Kegiatan" },
  { id: "modules", label: "Modul" },
  { id: "champion", label: "Leaderboard" },
  { id: "data", label: "Data" },
  { id: "documentation", label: "Dokumentasi" },
] as const;

export const PRODUCT_GOALS = [
  "Mengedukasi siswa SMA mengenai penggunaan Generative AI yang etis dan produktif berlandaskan nilai Pancasila.",
  "Menyediakan akses modul edukasi gratis melalui E-Book Panduan CAKRA dan Landing Page yang responsif.",
  "Membangun komunitas mentorship CAKRA Care untuk pendampingan belajar dan diskusi etika digital bagi siswa."
];

export const TEAM_PILLARS: TeamPillar[] = [
  {
    "title": "Sinergi Teknologi & Karakter",
    "label": "Visi",
    "description": "Menciptakan pelajar yang melek AI dengan menjadikan Pancasila sebagai kompas moral dan filter etika digital`."
  },
  {
    "title": "Framework CAKRA Compass",
    "label": "Mentoring",
    "description": "Pendampingan praktis berbasis prinsip C-A-K-R-A untuk memastikan penggunaan AI yang jujur, kritis, dan bertanggung jawab."
  },
  {
    "title": "Ekosistem Berkelanjutan",
    "label": "Project Social",
    "description": "Menjamin dampak jangka panjang melalui modul gratis dan komunitas belajar bagi siswa SMA di Indonesia."
  }
];

export const IMPACT_STATS: Statistic[] = [
  {
    value: "6 Modul",
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
    "id": "persiapan",
    "phase": "Minggu 1-4",
    "title": "Persiapan & Pengembangan",
    "description": "Riset literasi digital, penyusunan modul workshop, pengembangan Landing Page dan draft E-Book CAKRA.",
    "date": "Mei 2026",
    "status": "completed"
  },
  {
    "id": "pelaksanaan",
    "phase": "Minggu 5-8",
    "title": "Workshop & Aktivasi",
    "description": "Pelaksanaan Workshop CAKRA Lab untuk siswa SMA dan aktivasi komunitas mentorship CAKRA Care.",
    "date": "Juni 2026",
    "status": "ongoing"
  },
  {
    "id": "finalisasi",
    "phase": "Minggu 9-12",
    "title": "Evaluasi & Penyerahan",
    "description": "Finalisasi seluruh aset edukasi, pengumpulan feedback, dan pelaporan dampak proyek secara komprehensif.",
    "date": "Juli 2026",
    "status": "upcoming"
  }
];

export const LEARNING_MODULES: LearningModuleCard[] = [
  {
    id: "starter-pack",
    title: "#1 The AI Starter Pack",
    description: "Pengenalan dasar AI dan cara kerjanya sebagai asisten belajar sehari-hari.",
    category: "dasar",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/assets/pdf/modul1.pdf",
    accent: "gold",
    duration: "15 menit",
    highlights: ["Konsep dasar AI", "Mengenal berbagai tools AI", "Etika dasar penggunaan AI"],
  },
  {
    id: "gemini",
    title: "#2 Gemini: Teman Belajarmu",
    description: "Cara efektif menggunakan Gemini untuk berdiskusi, bertanya, dan mencari penjelasan materi.",
    category: "belajar",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/assets/pdf/modul2.pdf",
    accent: "navy",
    duration: "20 menit",
    highlights: ["Fitur-fitur Gemini", "Teknik bertanya yang efektif", "Memilah informasi dari Gemini"],
  },
  {
    id: "notebooklm",
    title: "#3 NotebookLM: Riset Jadi Mudah",
    description: "Mengelola sumber belajar, buku, dan jurnal menggunakan NotebookLM untuk riset yang terstruktur.",
    category: "riset",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/assets/pdf/modul3.pdf",
    accent: "cream",
    duration: "25 menit",
    highlights: ["Upload dokumen sumber", "Membuat ringkasan otomatis", "Tanya jawab berbasis dokumen"],
  },
  {
    id: "prompting",
    title: "#4 Seni Prompting",
    description: "Panduan menyusun instruksi yang spesifik, jelas, dan mendapatkan hasil yang akurat.",
    category: "teknik",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/assets/pdf/modul4.pdf",
    accent: "gold",
    duration: "20 menit",
    highlights: ["Struktur prompt yang baik", "Menghindari bias", "Iterasi prompt"],
  },
  {
    id: "visualizing",
    title: "#5 Visualizing Ideas",
    description: "Menggunakan AI untuk membuat ilustrasi, poster, dan memvisualisasikan ide presentasi.",
    category: "visual",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/assets/pdf/modul5.pdf",
    accent: "navy",
    duration: "20 menit",
    highlights: ["Prompt untuk gambar", "Gaya visual dan warna", "Etika gambar AI"],
  },
  {
    id: "final-project",
    title: "#6 Final Project & Etika AI",
    description: "Menerapkan semua ilmu untuk proyek akhir dan memahami dampak etis dari AI.",
    category: "etika",
    thumbnail: "/images/LOGO-CAKRA.png",
    pdfUrl: "/assets/pdf/modul6.pdf",
    accent: "cream",
    duration: "30 menit",
    highlights: ["Panduan Final Project", "Ceklis integritas", "Masa depan AI dan Pancasila"],
  },
];

export const GOLDEN_PROMPTS: GoldenPrompt[] = [
  {
    id: "ringkas",
    title: "Ringkas Materi",
    category: "Belajar",
    prompt:
      "Bantu aku merangkum materi Pancasila kelas SMP menjadi 5 poin singkat, gunakan bahasa mudah dipahami, dan beri 1 contoh penerapan di sekolah. [Instruksi: Lampirkan dokumen pendukung materi di sini]",
    example:
      "AI akan menampilkan ringkasan terstruktur lalu memberi contoh sikap gotong royong di kelas.",
    tags: ["jelas", "ringkas", "relevan"],
  },
  {
    id: "poster",
    title: "Ide Poster",
    category: "Kreatif",
    prompt:
      "Buatkan prompt gambar untuk poster literasi digital bertema jujur saat memakai AI, warna hangat, gaya ramah siswa SMP, dan ada simbol gotong royong. [Instruksi: Lampirkan dokumen referensi visual di sini]",
    example:
      "AI akan membantu menyusun instruksi visual yang lebih rinci untuk dipakai di alat pembuat gambar.",
    tags: ["visual", "aman", "Pancasila"],
  },
  {
    id: "latihan",
    title: "Latihan Ujian",
    category: "Evaluasi",
    prompt:
      "Berikan 3 soal latihan tentang etika digital untuk siswa SMP, lengkap dengan petunjuk berpikir, tetapi jangan langsung beri jawaban akhir sebelum aku mencoba. [Instruksi: Lampirkan dokumen kisi-kisi atau soal sebelumnya di sini]",
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
      "CAKRA | Cipta Aksi Kreatif dan Riset Siswa | Telkom University Social Project",
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
      "CAKRA | Cipta Aksi Kreatif dan Riset Siswa | Telkom University Social Project",
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
      "CAKRA | Cipta Aksi Kreatif dan Riset Siswa | Telkom University Social Project",
  },
};
