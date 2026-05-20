"use client";

import { useLocale as useNextIntlLocale } from "next-intl";
import type { Locale } from "@/types";

export function useLocale() {
  const locale = useNextIntlLocale() as Locale;

  return {
    locale,
    isArabic: locale === "ar",
    isEnglish: locale === "en",
  };
}
