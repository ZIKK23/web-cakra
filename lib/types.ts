/**
 * Shared domain types used by content and UI sections.
 */
export interface Module {
  id: string;
  title: string;
  description: string;
  category: "tugas" | "gambar" | "ujian";
  thumbnail: string;
  pdfUrl: string;
}

export interface TimelineItem {
  id: string;
  phase: "Minggu 1-4" | "Minggu 5-8" | "Minggu 9-12";
  title: string;
  description: string;
  date: string;
  status: "completed" | "ongoing" | "upcoming";
}

export interface GoldenPrompt {
  id: string;
  title: string;
  prompt: string;
  category: string;
  example?: string;
  tags?: string[];
}

export interface SurveyData {
  id: string;
  question: string;
  data: {
    label: string;
    value: number;
  }[];
  chartType: "bar" | "pie" | "line" | "area";
}

export interface DocumentationItem {
  id: string;
  type: "image" | "video";
  url: string;
  title: string;
  description?: string;
  date: string;
  event?: string;
}

export interface Statistic {
  value: string;
  label: string;
}
