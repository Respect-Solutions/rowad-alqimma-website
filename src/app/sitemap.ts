import { MetadataRoute } from "next";
import { getArticles } from "@/lib/seodashboard";

const BASE_URL = "https://rowadalqimma.com";

async function getAllArticleSlugs(locale: string): Promise<string[]> {
  const pageSize = 50;
  const slugs: string[] = [];
  let page = 1;

  while (true) {
    const { items, totalCount } = await getArticles({ locale, page, pageSize });
    slugs.push(...items.map((item) => item.slug));

    if (items.length === 0 || slugs.length >= totalCount) break;
    page += 1;
  }

  return slugs;
}

async function getArticleEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const [arSlugs, enSlugs] = await Promise.all([
      getAllArticleSlugs("ar"),
      getAllArticleSlugs("en"),
    ]);

    const arEntries: MetadataRoute.Sitemap = arSlugs.map((slug) => ({
      url: `${BASE_URL}/ar/المقالات/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    const enEntries: MetadataRoute.Sitemap = enSlugs.map((slug) => ({
      url: `${BASE_URL}/en/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    return [...arEntries, ...enEntries];
  } catch {
    // seodashboard unreachable or not configured — fall back to static pages only
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const articleEntries = await getArticleEntries();

  return [
    // ── Home ───────────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar`,
          en: `${BASE_URL}/en`,
        },
      },
    },

    // ── About ──────────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/من-نحن`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/من-نحن`,
          en: `${BASE_URL}/en/about`,
        },
      },
    },

    // ── Services overview ──────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/الخدمات`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/الخدمات`,
          en: `${BASE_URL}/en/services`,
        },
      },
    },

    // ── Company Formation ──────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/الخدمات/تأسيس-الشركات-الأجنبية`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/الخدمات/تأسيس-الشركات-الأجنبية`,
          en: `${BASE_URL}/en/services/company-formation`,
        },
      },
    },

    // ── Administrative Consulting ──────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/الخدمات/الاستشارات-الإدارية-للشركات`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/الخدمات/الاستشارات-الإدارية-للشركات`,
          en: `${BASE_URL}/en/services/administrative-consulting`,
        },
      },
    },

    // ── Corporate Legal Advisory ───────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/الخدمات/الاستشارات-القانونية-للشركات`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/الخدمات/الاستشارات-القانونية-للشركات`,
          en: `${BASE_URL}/en/services/corporate-legal-advisory`,
        },
      },
    },

    // ── Marketing & Strategic Consulting ──────────────────────────────────────
    {
      url: `${BASE_URL}/ar/الخدمات/الاستشارات-التسويقية-والاستراتيجية`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/الخدمات/الاستشارات-التسويقية-والاستراتيجية`,
          en: `${BASE_URL}/en/services/marketing-strategic-consulting`,
        },
      },
    },

    // ── Projects ───────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/المشاريع`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/المشاريع`,
          en: `${BASE_URL}/en/projects`,
        },
      },
    },

    // ── Contact ────────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/اتصل-بنا`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/اتصل-بنا`,
          en: `${BASE_URL}/en/contact-us`,
        },
      },
    },

    // ── Social Links ───────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/social-links`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // ── Articles (fetched from seodashboard CMS) ─────────────────────────────
    ...articleEntries,
  ];
}
