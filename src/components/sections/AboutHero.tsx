"use client";

import Image from "next/image";
import { aboutFeatures } from "@/data/site";
import { assets } from "@/lib/assets";
import { IconImage } from "@/components/ui/IconImage";
import { Header } from "../layout/Header";
import { useLocale } from "@/hooks/useLocale";

export function AboutHero() {
  const { isArabic } = useLocale();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="px-6 pb-16 pt-4 md:px-16 md:pt-4"
    >
      {/* Navbar */}
      <Header active="About" />

      {/* Hero Content */}
      <div className="mx-auto mt-16 grid max-w-[1152px] items-center gap-12 lg:grid-cols-[1fr_528px]">
        
        {/* Left Content */}
        <div>
          <div className="py-6">
            <h1 className="max-w-[576px] text-[36px] font-bold leading-[1.2] text-ink md:text-[40px]">
              {isArabic
                ? "نقود الأنظمة القانونية بدقة واحترافية"
                : "Navigating Regulations with Precision"}
            </h1>

            <p className="mt-4 max-w-[576px] text-lg leading-[1.8] text-muted">
              {isArabic
                ? "تقف رواد القمة عند نقطة التقاء القيم السعودية الأصيلة والمعايير العالمية الحديثة للأعمال، لنقدم البنية المؤسسية التي تساعد المستثمرين المحليين والدوليين على النجاح ضمن رؤية 2030."
                : "ROAD ELQAMA Consultancy stands at the intersection of traditional Saudi values and modern global business standards. We provide the structural backbone for foreign and domestic investors to thrive within Vision 2030's framework."}
            </p>
          </div>

          {/* Features */}
          <div className="mt-4 flex flex-col gap-8 py-6">
            {aboutFeatures.map((feature) => {
              const currentFeature = feature as {
                label: string;
                icon:
                  | "featurePin"
                  | "featureRegulation"
                  | "featureSupport";
              };

              const translatedLabel =
                currentFeature.label === "Fast company formation"
                  ? isArabic
                    ? "تأسيس سريع للشركات"
                    : currentFeature.label
                  : currentFeature.label ===
                      "Deep knowledge of Saudi regulations"
                    ? isArabic
                      ? "خبرة عميقة بالأنظمة السعودية"
                      : currentFeature.label
                    : currentFeature.label === "End-to-end support"
                      ? isArabic
                        ? "دعم متكامل من البداية للنهاية"
                        : currentFeature.label
                      : currentFeature.label;

              return (
                <div
                  className={`flex items-center gap-6 ${
                    isArabic
                      ? "justify-start text-right"
                      : ""
                  }`}
                  key={currentFeature.label}
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#ebf1ff]/10">
                    <IconImage
                      name={currentFeature.icon}
                      size={22}
                    />
                  </span>

                  <span
                    className={`text-[22px] font-bold leading-[1.2] text-soft ${
                      isArabic ? "order-1" : ""
                    }`}
                  >
                    {translatedLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex h-[544px] overflow-hidden rounded-[32px]">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            src={assets.heroPerson}
            unoptimized
          />

          <div className="relative mt-auto flex h-[211px] w-full items-center justify-center rounded-[32px] border-l border-t border-white/10 bg-gradient-to-b from-[#5b7cb2]/0 to-[#27354c]/25 p-12 text-center backdrop-blur-[32px]">
            <p className="text-[28px] leading-[1.4] text-ink md:text-[32px]">
              {isArabic ? (
                <>
                  "نحن لا نقدم الاستشارات فقط،
                  <br />
                  بل ننفذ رؤية
                  <br />
                  مشروعك بالكامل."
                </>
              ) : (
                <>
                  "We don't just consult;
                  <br />
                  we execute the vision of
                  <br />
                  your enterprise."
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
