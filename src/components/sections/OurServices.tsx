"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";

const services = [
  {
    title: "Business Setup",
    titleAr: "تأسيس الشركات",
    icon: "/icons/business-setup.svg",
  },
  {
    title: "Legal Consulting",
    titleAr: "الاستشارات القانونية",
    icon: "/icons/legal-consulting.svg",
  },
  {
    title: "Business Consulting",
    titleAr: "استشارات الأعمال",
    icon: "/icons/business-consulting.svg",
  },
  {
    title: "Marketing Services",
    titleAr: "الخدمات التسويقية",
    icon: "/icons/marketing-services.svg",
  },
];

export function OurServices() {
  const { isArabic, locale } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] py-28">
      <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1B2F4B_100%)] px-6 py-12 md:px-10">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[48px] font-bold leading-[1.1] text-white">
            {isArabic
              ? "خدماتنا"
              : "Our Services"}
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-[1.7] text-white/55">
            {isArabic
              ? "كل خدمة مصممة لدعم جانب محدد من أعمالك، بدءًا من التأسيس القانوني وحتى التوسع والنمو داخل السوق."
              : "Each service is designed to support a specific layer of your business from legal setup to market execution and growth."}
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-[1152px]">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            
            {/* Featured Card */}
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[20px] border border-[#B4C5FF]/40 bg-[#10233D] px-8 text-center shadow-[0_0_80px_rgba(180,197,255,0.06)]">
              
              <div className="flex h-[96px] w-[96px] items-center justify-center">
                <Image
                  src="/icons/market-entry.svg"
                  alt="Market Entry Strategy"
                  width={84}
                  height={84}
                />
              </div>

              <h3 className="mt-8 text-[42px] font-bold leading-[1.1] text-white">
                {isArabic
                  ? "استراتيجية دخول السوق"
                  : "Market Entry Strategy"}
              </h3>

              <p className="mt-4 max-w-[420px] text-base leading-[1.7] text-white/60">
                {isArabic
                  ? "نساعدك على فهم السوق السعودي والدخول إليه بطريقة ناجحة ومدروسة."
                  : "We help you understand and enter the Saudi market successfully."}
              </p>
            </div>

            {/* Service List */}
            <div className="flex flex-col gap-4">
              {services.map((service) => (
                <button
                  key={service.title}
                  className="
                    flex
                    h-[84px]
                    items-center
                    gap-4
                    rounded-[14px]
                    border
                    border-white/10
                    bg-[#27354C]
                    px-6
                    text-left
                    backdrop-blur-[12px]
                    transition
                    duration-300
                    hover:border-[#B4C5FF]/30
                    hover:bg-[#31425D]
                  "
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                  />

                  <span className="text-[26px] font-semibold text-white">
                    {isArabic
                      ? service.titleAr
                      : service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            
            {/* Primary Button */}
            <Link
              href={`/${locale}/projects`}
              className="
                flex
                h-[58px]
                w-full
                max-w-[340px]
                items-center
                justify-center
                rounded-[12px]
                bg-[#0F223D]
                px-8
                text-sm
                font-bold
                text-white
                transition
                duration-300
                hover:bg-[#132B4B]
              "
            >
              {isArabic
                ? "ابدأ شركتك"
                : "Start Your Company"}
            </Link>

            {/* Secondary Button */}
            <Link
              href={`/${locale}/projects`}
              className="
                flex
                h-[58px]
                w-full
                max-w-[340px]
                items-center
                justify-center
                rounded-[12px]
                border
                border-white/10
                bg-transparent
                px-8
                text-sm
                font-semibold
                text-white/80
                transition
                duration-300
                hover:border-white/20
                hover:bg-white/5
                hover:text-white
              "
            >
              {isArabic
                ? "عرض دراسة الحالة"
                : "View Case Study"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
