import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAKRA | Literasi AI Berkarakter Pancasila",
  description:
    "Platform literasi digital untuk siswa SMP yang memadukan pembelajaran AI, etika digital, dan nilai Pancasila.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
