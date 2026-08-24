"use client";

import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "@/hooks/useLocale";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();

  const { isArabic } = useLocale();

  const newLocale = isArabic ? "en" : "ar";

  return (
    <Link
      // Typed routing can't verify that `params` matches the dynamic
      // segments of `pathname` here, but they always describe the same
      // route since both come from the current page.
      // @ts-expect-error -- see next-intl docs on switching locales for dynamic routes
      href={{ pathname, params }}
      locale={newLocale}
      className="
        flex
        h-[46px]
        min-w-[46px]
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-white/10
        px-3
        text-[13px]
        font-semibold
        tracking-[0.08em]
        text-white
        backdrop-blur-md
        transition
        hover:bg-white/20
      "
    >
      {isArabic ? "EN" : "AR"}
    </Link>
  );
}
