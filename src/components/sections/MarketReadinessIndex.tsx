"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/hooks/useLocale";

export function MarketReadinessIndex() {
  const { isArabic } = useLocale();

  const [capital, setCapital] = useState(95);
  const [regulatory, setRegulatory] = useState(80);
  const [operational, setOperational] = useState(65);
  const [showModal, setShowModal] = useState(false);

  const sliderBg = (value: number) =>
    isArabic
      ? `linear-gradient(to left, #C9D6FF 0%, #C9D6FF ${value}%, rgba(255,255,255,0.1) ${value}%, rgba(255,255,255,0.1) 100%)`
      : `linear-gradient(to right, #C9D6FF 0%, #C9D6FF ${value}%, rgba(255,255,255,0.1) ${value}%, rgba(255,255,255,0.1) 100%)`;

  const result = useMemo(() => {
    const score = Math.round(
      capital * 0.3 + regulatory * 0.4 + operational * 0.3
    );

    let level = "";
    let message = "";

    if (score <= 40) {
      level = isArabic ? "غير جاهز" : "Not Ready";

      message = isArabic
        ? "يتطلب مشروعك تأسيسًا وهيكلة أساسية قبل دخول السوق."
        : "Your business requires foundational structuring before entering the market.";
    } else if (score <= 70) {
      level = isArabic ? "جاهزية جزئية" : "Partially Ready";

      message = isArabic
        ? "أنت جاهز جزئيًا، ومع بعض التحسينات التشغيلية والاستراتيجية يمكنك دخول السوق بنجاح."
        : "You are partially ready. With the right adjustments, you can successfully enter the market.";
    } else {
      level = isArabic ? "جاهز للسوق" : "Market Ready";

      message = isArabic
        ? "أنت في وضع ممتاز لدخول السوق، ويمكن لفريقنا مساعدتك في تسريع التنفيذ والتوسع."
        : "You are well-positioned to enter the market. Our team can support you in accelerating execution.";
    }

    const lowestFactor = Math.min(
      capital,
      regulatory,
      operational
    );

    let insight = "";

    if (lowestFactor === regulatory) {
      insight = isArabic
        ? "أكبر نقطة ضعف لديك هي التوافق التنظيمي."
        : "Your biggest gap is regulatory alignment.";
    } else if (lowestFactor === operational) {
      insight = isArabic
        ? "الجاهزية التشغيلية تحتاج إلى تحسين."
        : "Operational readiness needs improvement.";
    } else {
      insight = isArabic
        ? "هيكلة رأس المال تحتاج إلى تعزيز."
        : "Capital structure should be strengthened.";
    }

    return {
      score,
      level,
      message,
      insight,
    };
  }, [capital, regulatory, operational, isArabic]);

  return (
    <>
      <section
        dir={isArabic ? "rtl" : "ltr"}
        className="relative overflow-hidden bg-[#14263D] px-6 py-16"
      >
        <div className="mx-auto max-w-[1152px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1D304A_100%)] px-10 py-12">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-[52px] font-bold leading-none text-white">
              {isArabic
                ? "مؤشر الجاهزية السوقية"
                : "Market Readiness Index"}
            </h2>

            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
              {isArabic
                ? "محرك التحليل"
                : "Analysis Engine"}
            </span>
          </div>

          {/* Sliders */}
          <div className="mt-14 flex flex-col gap-10">
            
            {/* Capital */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">
                  {isArabic
                    ? "تقييم رأس المال"
                    : "Capital Requirement Audit"}
                </span>

                <span className="text-sm font-semibold text-white/70">
                  {capital}%
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={capital}
                onChange={(e) =>
                  setCapital(Number(e.target.value))
                }
                className="slider"
                style={{
                  background: sliderBg(capital),
                }}
              />
            </div>

            {/* Regulatory */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">
                  {isArabic
                    ? "التوافق التنظيمي"
                    : "Regulatory Alignment"}
                </span>

                <span className="text-sm font-semibold text-white/70">
                  {regulatory}%
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={regulatory}
                onChange={(e) =>
                  setRegulatory(Number(e.target.value))
                }
                className="slider"
                style={{
                  background: sliderBg(regulatory),
                }}
              />
            </div>

            {/* Operational */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">
                  {isArabic
                    ? "الجاهزية التشغيلية"
                    : "Operational Viability"}
                </span>

                <span className="text-sm font-semibold text-white/70">
                  {operational}%
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={operational}
                onChange={(e) =>
                  setOperational(Number(e.target.value))
                }
                className="slider"
                style={{
                  background: sliderBg(operational),
                }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="flex h-[64px] items-center justify-center rounded-full bg-white px-10 text-sm font-bold text-[#14263D] transition hover:bg-white/90"
            >
              {isArabic
                ? "احسب جاهزية شركتك"
                : "Calculate Your Readiness"}
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[999] overflow-y-auto bg-black/60 px-6 py-10 backdrop-blur-sm"
        >
          <div className="flex min-h-full items-center justify-center">
            
            {/* Modal Content */}
            <div
              dir={isArabic ? "rtl" : "ltr"}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-[780px] rounded-[28px] border border-white/10 bg-[#14263D] p-7 ${
                isArabic ? "text-right" : ""
              }`}
            >
              
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className={`absolute top-5 text-3xl text-white/50 transition hover:text-white ${
                  isArabic ? "left-5" : "right-5"
                }`}
              >
                ×
              </button>

              {/* Score */}
              <h2 className="text-center text-[34px] font-bold leading-[1.2] text-white">
                {isArabic
                  ? "درجة جاهزية شركتك:"
                  : "Your Market Readiness Score:"}{" "}
                <span className="text-[#C9D6FF]">
                  {result.score}%
                </span>
              </h2>

              {/* Cards */}
              <div className="mt-6 flex flex-col gap-3">
                
                {/* Current Level */}
                <div className="rounded-[20px] border border-[#C9D6FF] bg-[#27354C] p-4">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-[22px] font-bold text-white">
                        {result.level}
                      </h3>

                      <p className="mt-2 max-w-[520px] text-sm leading-[1.5] text-white/65">
                        {result.message}
                      </p>
                    </div>

                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/70">
                      {result.score}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Insight */}
              <div className="mt-5 text-center">
                <p className="text-base text-[#C9D6FF]">
                  {result.insight}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5 flex justify-center">
                <button className="flex h-[54px] items-center justify-center rounded-full bg-[#C9D6FF] px-10 text-sm font-bold text-[#14263D] transition hover:bg-[#dbe4ff]">
                  {isArabic
                    ? "ابدأ دخول السوق"
                    : "Start Your Market Entry"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
