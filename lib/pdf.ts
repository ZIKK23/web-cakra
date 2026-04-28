import { Buffer } from "node:buffer";

import type { ModuleDocument } from "./home-content";

function escapePdfText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\r?\n/g, " ");
}

function wrapText(value: string, maxLength: number) {
  const words = value.trim().split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const nextLine = line ? `${line} ${word}` : word;
    if (nextLine.length > maxLength && line) {
      lines.push(line);
      line = word;
      continue;
    }

    line = nextLine;
  }

  if (line) {
    lines.push(line);
  }

  return lines;
}

function buildPdf(objects: string[]) {
  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (let index = 0; index < objects.length; index += 1) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${offsets[index].toString().padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, "utf8");
}

export function createModulePdf(document: ModuleDocument) {
  const commands: string[] = [
    "BT",
    "/F2 24 Tf",
    "72 742 Td",
    `(${escapePdfText(document.title)}) Tj`,
    "0 -28 Td",
    "/F1 12 Tf",
  ];

  for (const line of wrapText(document.subtitle, 76)) {
    commands.push(`(${escapePdfText(line)}) Tj`);
    commands.push("0 -18 Td");
  }

  commands.push("0 -10 Td");

  for (const section of document.sections) {
    commands.push("/F2 16 Tf");
    commands.push(`(${escapePdfText(section.heading)}) Tj`);
    commands.push("0 -20 Td");
    commands.push("/F1 12 Tf");

    for (const item of section.body) {
      const wrapped = wrapText(`- ${item}`, 78);
      for (const line of wrapped) {
        commands.push(`(${escapePdfText(line)}) Tj`);
        commands.push("0 -16 Td");
      }
      commands.push("0 -4 Td");
    }

    commands.push("0 -8 Td");
  }

  commands.push("/F1 10 Tf");
  commands.push(`(${escapePdfText(document.footer)}) Tj`);
  commands.push("ET");

  const contentStream = commands.join("\n");

  return buildPdf([
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Count 1 /Kids [3 0 R] >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  ]);
}
