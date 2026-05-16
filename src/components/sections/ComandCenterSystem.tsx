"use client";

import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";

const phases = [
  {
    id: "01",
    title: "Analysis",
    titleAr: "التحليل",
    description:
      "Regulatory feasibility and structural scoping.",
    descriptionAr:
      "تحليل الجدوى التنظيمية وتحديد الهيكل المؤسسي.",
    icon: "/icons/analysis.svg",
  },
  {
    id: "02",
    title: "Licensing",
    titleAr: "التراخيص",
    description:
      "Securing MISA investment certificates.",
    descriptionAr:
      "استخراج شهادات الاستثمار والتراخيص الرسمية.",
    icon: "/icons/licensing.svg",
  },
  {
    id: "03",
    title: "Banking",
    titleAr: "الخدمات البنكية",
    description:
      "Local capital account structuring.",
    descriptionAr:
      "تنظيم الحسابات البنكية ورأس المال المحلي.",
    icon: "/icons/banking.svg",
  },
  {
    id: "04",
    title: "Operational",
    titleAr: "التشغيل",
    description:
      "Visas, office space, and GOSI registration.",
    descriptionAr:
      "التأشيرات والمساحات المكتبية والتسجيلات الحكومية.",
    icon: "/icons/operational.svg",
  },
  {
    id: "05",
    title: "Continuity",
    titleAr: "الاستمرارية",
    description:
      "Ongoing compliance and annual renewals.",
    descriptionAr:
      "الامتثال المستمر والتجديدات السنوية.",
    icon: "/icons/continuity.svg",
  },
];

const features = [
  {
    en: "REGULATORY CONTROL",
    ar: "التحكم التنظيمي",
  },
  {
    en: "OWNERSHIP PROTECTION",
    ar: "حماية الملكية",
  },
  {
    en: "COMPLIANCE CONTINUITY",
    ar: "استمرارية الامتثال",
  },
  {
    en: "STRUCTURAL STABILITY",
    ar: "الاستقرار المؤسسي",
  },
];

export function CommandCenterSystem() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] py-32">
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1B2F4B_100%)] px-8 py-14 shadow-[0_0_120px_rgba(201,214,255,0.08)]">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[56px] font-bold leading-[1.1] text-white">
            {isArabic
              ? "نظام مركز التحكم"
              : "The Command Center System"}
          </h2>

          <p className="mt-4 text-lg font-medium text-[#B4C5FF]/70">
            {isArabic
              ? "خمس مراحل متكاملة للتحول المؤسسي."
              : "Five distinct phases of institutional transformation."}
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-20 grid max-w-[1152px] gap-6 md:grid-cols-2 xl:grid-cols-5">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="
                group
                relative
                flex
                min-h-[130px]
                flex-col
                justify-between
                gap-4
                rounded-[12px]
                border-2
                border-white/10
                bg-[#27354C]
                p-4
                text-center
                backdrop-blur-[12px]
                transition
                duration-300
                hover:border-[#B4C5FF]/30
              "
            >
              <div>
                <h3 className="text-[20px] font-bold text-white">
                  {isArabic
                    ? phase.titleAr
                    : phase.title}
                </h3>

                <p className="mt-4 text-sm leading-[1.6] text-[#B4C5FF]/65">
                  {isArabic
                    ? phase.descriptionAr
                    : phase.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Image
                  src={phase.icon}
                  alt={phase.title}
                  width={24}
                  height={24}
                />

                <span className="text-[24px] font-bold text-[#D7C29A]">
                  {phase.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-10 rounded-[18px] border border-white/10 bg-white/[0.02] px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
            {features.map((feature) => (
              <div
                key={feature.en}
                className="flex items-center gap-3"
              >
                <span className="h-[6px] w-[6px] rounded-full bg-[#D7C29A]" />

                <span className="text-sm font-semibold tracking-[0.08em] text-white/80">
                  {isArabic
                    ? feature.ar
                    : feature.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
