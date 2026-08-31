import { notFound, permanentRedirect, redirect } from "next/navigation";
import { resolveRedirect } from "@/lib/seodashboard";

// Catch-all for legacy paths that don't structurally match any existing
// route (removed pages/sections — not just old article slugs, which are
// handled inside articles/[slug]). Next.js gives existing static/dynamic
// routes structural priority over this, so real routes are unaffected.

type PageProps = {
  params: { locale: string; rest: string[] };
};

export default async function CatchAllPage({ params }: PageProps) {
  const path = `/${params.locale}/${params.rest.map(decodeURIComponent).join("/")}`;
  const redirection = await resolveRedirect(path);

  if (redirection) {
    (redirection.permanent ? permanentRedirect : redirect)(redirection.destination);
  }

  notFound();
}
