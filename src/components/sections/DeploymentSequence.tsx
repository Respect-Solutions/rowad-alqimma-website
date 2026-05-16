"use client";

import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "Initial feasibility study and regulatory alignment for your specific industry.",
    icon: "/icons/consultation.svg",
    height: "h-[430px]",
  },
  {
    id: "02",
    title: "Documentation",
    description:
      "Preparation of articles of association and all mandatory legal filings.",
    icon: "/icons/documentation.svg",
    height: "h-[390px]",
  },
  {
    id: "03",
    title: "Processing",
    description:
      "Liaising with Saudi authorities for licensing and official certification.",
    icon: "/icons/processing.svg",
    height: "h-[350px]",
  },
  {
    id: "04",
    title: "Completion",
    description:
      "Final hand-over of commercial registration and operational bank accounts.",
    icon: "/icons/completion.svg",
    height: "h-[310px]",
  },
];

export function DeploymentSequence() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] max-w-[1152px] mx-auto px-6 py-24">
      
      {/* Glow */}
      <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[56px] font-bold leading-none text-white">
            {isArabic
              ? "مراحل التنفيذ"
              : "Deployment Sequence"}
          </h2>

          <p className="mt-4 text-lg text-white/55">
            {isArabic
              ? "من البداية وحتى التشغيل الكامل."
              : "From onboarding to operational excellence."}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid items-end gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const translatedTitle =
              step.title === "Consultation"
                ? isArabic
                  ? "الاستشارة"
                  : step.title
                : step.title === "Documentation"
                  ? isArabic
                    ? "التوثيق"
                    : step.title
                  : step.title === "Processing"
                    ? isArabic
                      ? "المعالجة"
                      : step.title
                    : step.title === "Completion"
                      ? isArabic
                        ? "الإنجاز"
                        : step.title
                      : step.title;

            const translatedDescription =
              step.title === "Consultation"
                ? isArabic
                  ? "دراسة الجدوى الأولية والتوافق التنظيمي لنشاطك."
                  : step.description
                : step.title === "Documentation"
                  ? isArabic
                    ? "إعداد العقود وكافة المستندات والمتطلبات القانونية."
                    : step.description
                  : step.title === "Processing"
                    ? isArabic
                      ? "التنسيق مع الجهات السعودية لإتمام التراخيص والاعتمادات."
                      : step.description
                    : step.title === "Completion"
                      ? isArabic
                        ? "تسليم السجل التجاري والحسابات التشغيلية النهائية."
                        : step.description
                      : step.description;

            return (
              <div
                key={step.id}
                className={`
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-[#223552]
                  px-6
                  py-8
                  ${step.height}
                  ${isArabic ? "text-right" : ""}
                `}
              >
                
                {/* Number */}
                <span
                  className={`absolute top-6 text-[56px] font-bold leading-none text-white/70 ${
                    isArabic ? "left-6" : "right-6"
                  }`}
                >
                  {step.id}
                </span>

                {/* Icon */}
                <div
                  className={`flex h-[44px] w-[44px] items-center rounded-[12px] ${
                    isArabic
                      ? "justify-end"
                      : "justify-center"
                  }`}
                >
                  <Image
                    src={step.icon}
                    alt={translatedTitle}
                    width={24}
                    height={24}
                  />
                </div>

                {/* Content */}
                <div className="mt-14">
                  <h3 className="text-[24px] font-bold leading-[1.1] text-white">
                    {translatedTitle}
                  </h3>

                  <p className="mt-5 text-[16px] font-normal leading-[1.7] text-white/55">
                    {translatedDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
