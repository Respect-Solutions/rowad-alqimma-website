import { defineRouting } from "next-intl/routing";

// Mapping slugs بين العربي والإنجليزي
const pathnames = {
  "/": "/",

  // صفحة من نحن
  "/about": {
    ar: "/من-نحن",
    en: "/about",
  },

  // صفحة اتصل بنا
  "/contact-us": {
    ar: "/اتصل-بنا",
    en: "/contact-us",
  },

  // صفحة المشاريع
  "/projects": {
    ar: "/المشاريع",
    en: "/projects",
  },

  // صفحة الخدمات
  "/services": {
    ar: "/الخدمات",
    en: "/services",
  },

  // تفاصيل الخدمات
  "/services/company-formation": {
    ar: "/الخدمات/تأسيس-الشركات-الأجنبية",
    en: "/services/company-formation",
  },
  "/services/marketing-strategic-consulting": {
    ar: "/الخدمات/الاستشارات-التسويقية-والاستراتيجية",
    en: "/services/marketing-strategic-consulting",
  },
  "/services/administrative-consulting": {
    ar: "/الخدمات/الاستشارات-الإدارية-للشركات",
    en: "/services/administrative-consulting",
  },
  "/services/corporate-legal-advisory": {
    ar: "/الخدمات/الاستشارات-القانونية-للشركات",
    en: "/services/corporate-legal-advisory",
  },

  // صفحة المقالات
  "/articles": {
    ar: "/المقالات",
    en: "/articles",
  },

  // تفاصيل المقالة
  "/articles/[slug]": {
    ar: "/المقالات/[slug]",
    en: "/articles/[slug]",
  },
} as const;

// Excludes dynamic templates (e.g. "/articles/[slug]"), which need the
// `{ pathname, params }` object form rather than a plain string href.
export type AppPathname = Exclude<keyof typeof pathnames, "/articles/[slug]">;

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "always",
  pathnames,
});
