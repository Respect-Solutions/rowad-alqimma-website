"use client";

import { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import Link from "next/link";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const buttonHoverVariants: Variants = {
  hover: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
  hover: {
    y: -4,
    borderColor: "rgba(201, 214, 255, 0.4)",
    transition: { duration: 0.2 },
  },
};

export function MarketReadinessIndex() {
  const { isArabic, locale } = useLocale();


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
      capital * 0.3 + regulatory * 0.4 + operational * 0.3,
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

    const lowestFactor = Math.min(capital, regulatory, operational);

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
        className="relative overflow-hidden bg-[#14263D] px-4 py-10 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-[1152px] rounded-[24px] border border-white/10 bg-[#27354CB2] px-4 py-6 sm:rounded-[28px] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between"
            >
              <h2 className="max-w-[700px] text-2xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[52px]">
                {isArabic
                  ? "مؤشر الجاهزية السوقية"
                  : "Market Readiness Index"}{" "}
              </h2>

              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-sm">
                {isArabic ? "محرك التحليل" : "Analysis Engine"}
              </span>
            </motion.div>

            {/* Sliders */}
            <motion.div
              variants={containerVariants}
              className="mt-8 flex flex-col gap-6 sm:mt-12 sm:gap-10 md:mt-14"
            >
              {/* Capital */}
              <motion.div variants={itemVariants}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white/90 sm:text-base">
                    {isArabic
                      ? "تقييم متطلبات رأس المال"
                      : "Capital Requirement Audit"}
                  </span>

                  <span className="shrink-0 text-sm font-semibold text-white/70">
                    {capital}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={capital}
                  onChange={(e) => setCapital(Number(e.target.value))}
                  className="slider w-full cursor-pointer"
                  style={{
                    background: sliderBg(capital),
                  }}
                />
              </motion.div>

              {/* Regulatory */}
              <motion.div variants={itemVariants}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white/90 sm:text-base">
                    {isArabic ? "التوافق التنظيمي" : "Regulatory Alignment"}
                  </span>

                  <span className="shrink-0 text-sm font-semibold text-white/70">
                    {regulatory}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={regulatory}
                  onChange={(e) => setRegulatory(Number(e.target.value))}
                  className="slider w-full cursor-pointer"
                  style={{
                    background: sliderBg(regulatory),
                  }}
                />
              </motion.div>

              {/* Operational */}
              <motion.div variants={itemVariants}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white/90 sm:text-base">
                    {isArabic ? "الجاهزية التشغيلية" : "Operational Viability"}
                  </span>

                  <span className="shrink-0 text-sm font-semibold text-white/70">
                    {operational}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={operational}
                  onChange={(e) => setOperational(Number(e.target.value))}
                  className="slider w-full cursor-pointer"
                  style={{
                    background: sliderBg(operational),
                  }}
                />
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center sm:mt-14 md:mt-16"
            >
              <motion.button
                onClick={() => setShowModal(true)}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex h-[52px] w-full items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-[#14263D] transition-shadow hover:shadow-lg sm:h-[60px] sm:w-auto sm:px-8 md:h-[64px] md:px-10"
              >
                {isArabic ? "احسب جاهزية شركتك" : "Calculate Your Readiness"}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal with animation */}
      {showModal && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[999] overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-sm sm:px-6"
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              dir={isArabic ? "rtl" : "ltr"}
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              className={`relative w-full max-w-[780px] rounded-[28px] border border-white/10 bg-[#14263D] p-5 shadow-2xl sm:p-6 md:p-7 ${
                isArabic ? "text-right" : ""
              }`}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setShowModal(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className={`absolute top-4 text-3xl text-white/50 transition-colors hover:text-white ${
                  isArabic ? "left-4" : "right-4"
                } sm:top-5 sm:left-5 sm:right-5`}
              >
                ×
              </motion.button>

              {/* Score */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center text-2xl font-bold leading-[1.2] text-white sm:text-3xl md:text-[34px]"
              >
                {isArabic
                  ? "درجة جاهزية شركتك:"
                  : "Your Market Readiness Score:"}{" "}
                <span className="text-[#C9D6FF]">{result.score}%</span>
              </motion.h2>

              {/* Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-6 flex flex-col gap-3"
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="rounded-[20px] border border-[#C9D6FF] bg-[#27354C] p-3 transition-shadow hover:shadow-lg sm:p-4"
                >
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-[22px]">
                        {result.level}
                      </h3>

                      <p className="mt-2 max-w-[520px] text-sm leading-[1.5] text-white/65">
                        {result.message}
                      </p>
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/70 sm:px-4 sm:py-2">
                      {result.score}%
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Insight */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-5 text-center"
              >
                <p className="text-sm text-[#C9D6FF] sm:text-base">
                  {result.insight}
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-5 flex justify-center"
              >
                <Link href={`/${locale}/contact-us`}>
                  <motion.button
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex h-[48px] items-center justify-center rounded-full bg-[#C9D6FF] px-6 text-sm font-bold text-[#14263D] transition-shadow hover:shadow-lg sm:h-[52px] sm:px-8 md:h-[54px] md:px-10"
                  >
                    {isArabic ? "ابدأ دخول السوق" : "Start Your Market Entry"}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Add global styles for range input if not already present */}
      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 6px;
          outline: none;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c9d6ff;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c9d6ff;
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </>
  );
}

