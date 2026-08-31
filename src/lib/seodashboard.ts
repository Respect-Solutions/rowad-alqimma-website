import { cache } from "react";
import { getPathname } from "@/i18n/navigation";

// ─── Config ────────────────────────────────────────────────────────────────

const ARTICLES_SECTION_SLUG = process.env.SEODASHBOARD_ARTICLES_SECTION_SLUG || "news";

function getConfig(): { apiUrl: string; siteSlug: string } {
  const apiUrl = process.env.SEODASHBOARD_API_URL;
  const siteSlug = process.env.SEODASHBOARD_SITE_SLUG;

  if (!apiUrl || !siteSlug) {
    throw new Error(
      "Articles are not configured: set SEODASHBOARD_API_URL and SEODASHBOARD_SITE_SLUG in the environment.",
    );
  }

  return { apiUrl, siteSlug };
}

// ─── Wagtail API v2 shapes ─────────────────────────────────────────────────

type WagtailMeta = {
  type: string;
  slug: string;
  first_published_at: string | null;
};

type WagtailPage<TFields> = {
  id: number;
  meta: WagtailMeta;
  title: string;
} & TFields;

type WagtailListResponse<TFields> = {
  meta: { total_count: number };
  items: WagtailPage<TFields>[];
};

type SummaryFields = {
  date?: string | null;
  excerpt?: string | null;
  cover_image?: unknown;
};

type DetailFields = SummaryFields & {
  meta_description?: string | null;
  body?: unknown;
};

// ─── Public types ──────────────────────────────────────────────────────────

export type ArticleSummary = {
  id: number;
  slug: string;
  title: string;
  date: string | null;
  excerpt: string;
  coverImageUrl: string | null;
  coverImageAlt: string;
};

export type ArticleDetail = ArticleSummary & {
  metaDescription: string;
  body: unknown;
};

// ─── Low-level fetch helper ──────────────────────────────────────────────

async function wagtailGet<T>(path: string): Promise<T> {
  const { apiUrl } = getConfig();

  const fetchOnce = () => fetch(`${apiUrl}${path}`, { next: { revalidate: 300 } });

  let res: Response;
  try {
    res = await fetchOnce();
  } catch {
    // seodashboard has intermittent connection blips — retry once before
    // giving up, rather than failing the whole page on a transient hiccup.
    res = await fetchOnce();
  }

  if (!res.ok) {
    throw new Error(`seodashboard request failed (${res.status}): ${path}`);
  }

  return res.json() as Promise<T>;
}

// ─── Image resolution ──────────────────────────────────────────────────────
// seodashboard's custom image serializer returns
// { url, full_url, width, height, alt }. full_url is already absolute;
// the other shapes below are kept as a fallback in case a field ever
// comes back without full_url (e.g. a differently-configured image field).

function resolveCoverImage(image: unknown): { url: string | null; alt: string } {
  if (!image) return { url: null, alt: "" };

  if (typeof image === "string") return { url: absolutize(image), alt: "" };

  if (typeof image === "object") {
    const obj = image as Record<string, unknown>;
    const meta = obj.meta as Record<string, unknown> | undefined;
    const original = obj.original as Record<string, unknown> | undefined;
    const rendition = obj.rendition as Record<string, unknown> | undefined;

    const fullUrl = obj.full_url as string | undefined;
    const url =
      fullUrl ??
      (obj.url as string | undefined) ??
      (meta?.download_url as string | undefined) ??
      (original?.url as string | undefined) ??
      (rendition?.url as string | undefined);

    const alt = typeof obj.alt === "string" ? obj.alt : "";

    return { url: url ? absolutize(url) : null, alt };
  }

  return { url: null, alt: "" };
}

function absolutize(url: string): string {
  if (/^https?:\/\//.test(url)) return url;
  const { apiUrl } = getConfig();
  return `${apiUrl}${url.startsWith("/") ? "" : "/"}${url}`;
}

// ─── Mapping ────────────────────────────────────────────────────────────────

function toArticleSummary(item: WagtailPage<SummaryFields>): ArticleSummary {
  const cover = resolveCoverImage(item.cover_image);

  return {
    id: item.id,
    slug: item.meta.slug,
    title: item.title,
    date: item.date ?? item.meta.first_published_at,
    excerpt: item.excerpt ?? "",
    coverImageUrl: cover.url,
    coverImageAlt: cover.alt,
  };
}

function toArticleDetail(item: WagtailPage<DetailFields>): ArticleDetail {
  return {
    ...toArticleSummary(item),
    metaDescription: item.meta_description ?? "",
    body: item.body ?? null,
  };
}

// ─── Section resolution ─────────────────────────────────────────────────────
// Content in seodashboard is nested per-locale: Home -> locale section
// ("en" / "ar") -> "news" section -> articles. Resolution is scoped with
// child_of at every step so slugs reused by another tenant on the same
// seodashboard instance can't collide with this site's pages.

const getArticlesSectionId = cache(async (locale: string): Promise<number> => {
  const { siteSlug } = getConfig();

  const home = await wagtailGet<WagtailListResponse<Record<string, never>>>(
    `/api/v2/pages/?type=home.GenericHomePage&slug=${encodeURIComponent(siteSlug)}&fields=h1_title`,
  );

  const homeId = home.items[0]?.id;

  if (!homeId) {
    throw new Error(`seodashboard: no home page found for site slug "${siteSlug}"`);
  }

  const localeSection = await wagtailGet<WagtailListResponse<Record<string, never>>>(
    `/api/v2/pages/?type=home.GenericSectionPage&child_of=${homeId}&slug=${encodeURIComponent(locale)}&fields=h1_title`,
  );

  const localeSectionId = localeSection.items[0]?.id;

  if (!localeSectionId) {
    throw new Error(`seodashboard: no "${locale}" locale section found under home page ${homeId}`);
  }

  const articlesSection = await wagtailGet<WagtailListResponse<Record<string, never>>>(
    `/api/v2/pages/?type=home.GenericSectionPage&child_of=${localeSectionId}&slug=${ARTICLES_SECTION_SLUG}&fields=h1_title`,
  );

  const sectionId = articlesSection.items[0]?.id;

  if (!sectionId) {
    throw new Error(
      `seodashboard: no "${ARTICLES_SECTION_SLUG}" section found under locale section ${localeSectionId}`,
    );
  }

  return sectionId;
});

// ─── Public API ──────────────────────────────────────────────────────────

export async function getArticles({
  locale,
  page = 1,
  pageSize = 9,
}: {
  locale: string;
  page?: number;
  pageSize?: number;
}): Promise<{
  items: ArticleSummary[];
  totalCount: number;
}> {
  const sectionId = await getArticlesSectionId(locale);
  const offset = (page - 1) * pageSize;

  const data = await wagtailGet<WagtailListResponse<SummaryFields>>(
    `/api/v2/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=date,excerpt,cover_image&order=-date&limit=${pageSize}&offset=${offset}`,
  );

  return {
    items: data.items.map(toArticleSummary),
    totalCount: data.meta.total_count,
  };
}

export async function getArticleBySlug(locale: string, slug: string): Promise<ArticleDetail | null> {
  const sectionId = await getArticlesSectionId(locale);

  const data = await wagtailGet<WagtailListResponse<DetailFields>>(
    `/api/v2/pages/?type=home.GenericDetailPage&child_of=${sectionId}&slug=${encodeURIComponent(slug)}&fields=meta_description,date,excerpt,cover_image,body`,
  );

  const item = data.items[0];
  return item ? toArticleDetail(item) : null;
}

// ─── Redirect resolution ────────────────────────────────────────────────────
// Wagtail's Redirects dashboard (wagtail.contrib.redirects) is only consulted
// by Django's own request handling, which this site never routes through —
// it only calls the JSON API. This resolves a dashboard-configured redirect
// for a given browser-visible path via a small custom endpoint, so editors'
// redirects take effect without a frontend deploy.

type ResolveRedirectApiResponse =
  | { found: false }
  | {
      found: true;
      is_permanent: boolean;
      target: { kind: "url"; url: string };
    }
  | {
      found: true;
      is_permanent: boolean;
      target: {
        kind: "page";
        page_type: string;
        slug: string;
        parent_slug: string;
        grandparent_slug: string;
      };
    };

export type RedirectResolution = { destination: string; permanent: boolean } | null;

export async function resolveRedirect(path: string): Promise<RedirectResolution> {
  const hostname = process.env.SEODASHBOARD_SITE_HOSTNAME;
  const qs = new URLSearchParams({ path });
  if (hostname) qs.set("hostname", hostname);

  let data: ResolveRedirectApiResponse;
  try {
    data = await wagtailGet<ResolveRedirectApiResponse>(`/api/v2/redirects/resolve/?${qs.toString()}`);
  } catch {
    // Fail open — a CMS hiccup here must not turn a real 404 into a 500.
    return null;
  }

  if (!data.found) return null;

  if (data.target.kind === "url") {
    return { destination: data.target.url, permanent: data.is_permanent };
  }

  // Only the articles section is CMS-backed on this frontend today — anything
  // else, don't guess, treat as not-found.
  if (data.target.page_type !== "home.GenericDetailPage" || data.target.parent_slug !== ARTICLES_SECTION_SLUG) {
    return null;
  }

  const locale = data.target.grandparent_slug === "en" ? "en" : "ar";

  return {
    destination: getPathname({ locale, href: { pathname: "/articles/[slug]", params: { slug: data.target.slug } } }),
    permanent: data.is_permanent,
  };
}

// ─── Presentation helpers ──────────────────────────────────────────────────

export function formatArticleDate(iso: string | null, locale: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function getBodyReadingMinutes(body: unknown): number {
  const words = extractPlainText(body).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function extractPlainText(body: unknown): string {
  if (!body) return "";

  if (typeof body === "string") return body.replace(/<[^>]+>/g, " ");

  if (Array.isArray(body)) {
    return body
      .map((block: unknown) => {
        const value = (block as { value?: unknown } | undefined)?.value;
        if (typeof value === "string") return value.replace(/<[^>]+>/g, " ");
        if (typeof value === "object" && value && "text" in value) {
          const text = (value as { text?: unknown }).text;
          return typeof text === "string" ? text : "";
        }
        return "";
      })
      .join(" ");
  }

  return "";
}
