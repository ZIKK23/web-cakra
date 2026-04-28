import { createModulePdf } from "@/lib/pdf";
import { MODULE_DOCUMENTS } from "@/lib/home-content";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const document = MODULE_DOCUMENTS[slug];

  if (!document) {
    return new Response("Module not found", { status: 404 });
  }

  const pdf = createModulePdf(document);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${document.filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
