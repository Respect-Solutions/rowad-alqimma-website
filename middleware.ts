import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "always",

  // Mapping slugs بين العربي والإنجليزي
  pathnames: {
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
  },
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
