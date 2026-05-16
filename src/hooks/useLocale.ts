"use client";

import { usePathname } from "next/navigation";

export function useLocale() {
  const pathname = usePathname();

  const locale = pathname.split("/")[1];

  const isArabic = locale === "ar";

  return {
    locale,
    isArabic,
    isEnglish: locale === "en",
  };
}
