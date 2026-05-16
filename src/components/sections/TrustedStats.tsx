"use client";

import { Stats } from "./Stats";
import { useLocale } from "@/hooks/useLocale";

export function TrustedStats() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-14">
      <div className="mx-auto max-w-[1152px]">
        
        {/* Heading */}
        <h2 className="text-center text-[56px] font-bold leading-none text-[#B9C7E4]">
          {isArabic
            ? "موثوق به من قبل الشركات في جميع أنحاء السعودية"
            : "Trusted by Businesses Across Saudi Arabia"}
        </h2>

        {/* Stats */}
        <Stats />
      </div>
    </section>
  );
}
