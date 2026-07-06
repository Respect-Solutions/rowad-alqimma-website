import { MetadataRoute } from "next";

const BASE_URL = "https://rowadalqimma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
      url: `${BASE_URL}/ar/services/company-formation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/services/company-formation`,
          en: `${BASE_URL}/en/services/company-formation`,
        },
      },
    },

    // ── Administrative Consulting ──────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/services/administrative-consulting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/services/administrative-consulting`,
          en: `${BASE_URL}/en/services/administrative-consulting`,
        },
      },
    },

    // ── Corporate Legal Advisory ───────────────────────────────────────────────
    {
      url: `${BASE_URL}/ar/services/corporate-legal-advisory`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/services/corporate-legal-advisory`,
          en: `${BASE_URL}/en/services/corporate-legal-advisory`,
        },
      },
    },

    // ── Marketing & Strategic Consulting ──────────────────────────────────────
    {
      url: `${BASE_URL}/ar/services/marketing-strategic-consulting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/services/marketing-strategic-consulting`,
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
  ];
}
