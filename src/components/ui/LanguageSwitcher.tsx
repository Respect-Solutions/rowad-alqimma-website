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
