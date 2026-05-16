"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/hooks/useLocale";

export function LanguageSwitcher() {
  const pathname = usePathname();

  const { isArabic } = useLocale();

  const newLocale = isArabic ? "en" : "ar";

  const redirectedPathname =
    "/" +
    newLocale +
    pathname.replace(/^\/(en|ar)/, "");

  return (
    <Link
      href={redirectedPathname}
      className="
        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-white/10
        text-sm
        font-bold
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
;
