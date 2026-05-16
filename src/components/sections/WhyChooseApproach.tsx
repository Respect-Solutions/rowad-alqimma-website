"use client";

import { useLocale } from "@/hooks/useLocale";

const approachCards = [
  {
    title: "Market Intelligence",
    description:
      "We provide deep insights into the Saudi market, including competitors, demand, and opportunities.",
    size: "large",
  },
  {
    title: "Risk Reduction",
    description:
      "Avoid costly mistakes with expert guidance tailored to your business model.",
    size: "small",
  },
  {
    title: "Strategic Entry Plan",
    description:
      "We design a clear roadmap to help you enter the market with confidence and precision.",
    size: "small",
  },
];

export function WhyChooseApproach() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-24">
      <div className="mx-auto max-w-[1152px]">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[56px] font-bold leading-[1.1] text-white">
            {isArabic
              ? "لماذا تختار هذا النهج"
              : "Why Choose This Approach"}
          </h2>

          <p className="mx-auto mt-5 max-w-[980px] text-[24px] leading-[1.5] text-white/55">
            {isArabic
              ? "تفشل العديد من الشركات العالمية بسبب تعدد الجهات الاستشارية وتشتتها، بينما نقدم نحن نهجًا موحدًا ومتكاملًا لإطلاق الأعمال وبنائها."
              : "Global firms often falter due to fragmented advisory. We provide a single, unified Command Center approach to institutional setup."}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.5fr_0.9fr_0.9fr]">
          {approachCards.map((card) => {
            const translatedTitle =
              card.title === "Market Intelligence"
                ? isArabic
                  ? "فهم السوق"
                  : card.title
                : card.title === "Risk Reduction"
                  ? isArabic
                    ? "تقليل المخاطر"
                    : card.title
                  : card.title === "Strategic Entry Plan"
                    ? isArabic
                      ? "خطة دخول استراتيجية"
                      : card.title
                    : card.title;

            const translatedDescription =
              card.title === "Market Intelligence"
                ? isArabic
                  ? "نوفر تحليلات عميقة للسوق السعودي تشمل المنافسين والفرص والطلب."
                  : card.description
                : card.title === "Risk Reduction"
                  ? isArabic
                    ? "تجنب الأخطاء المكلفة من خلال استشارات مخصصة لنشاطك التجاري."
                    : card.description
                  : card.title === "Strategic Entry Plan"
                    ? isArabic
                      ? "نضع خارطة طريق واضحة لدخول السوق بثقة ودقة."
                      : card.description
                    : card.description;

            return (
              <div
                key={card.title}
                className={`
                  rounded-[28px]
                  border
                  border-white/10
                  backdrop-blur-[4px]
                  transition
                  duration-300
                  hover:border-white/20

                  ${
                    card.size === "large"
                      ? "bg-[#14263D] min-h-[260px] px-10 py-10"
                      : "bg-[#27354CB2] hover:bg-[#31425D] min-h-[260px] px-8 py-8"
                  }
                `}
              >
                <div
                  className={`flex h-full flex-col justify-end ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <h3
                    className={`
                      font-bold
                      leading-[1.1]
                      text-white
                      ${
                        card.size === "large"
                          ? "text-[42px]"
                          : "text-[36px]"
                      }
                    `}
                  >
                    {translatedTitle}
                  </h3>

                  <p className="mt-6 max-w-[320px] text-lg leading-[1.7] text-white/55">
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
