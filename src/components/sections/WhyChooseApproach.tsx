"use client";

import { motion, Variants } from "framer-motion";
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

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const cardHoverVariants: Variants = {
  hover: {
    y: -6,
    borderColor: "rgba(255, 255, 255, 0.3)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

export function WhyChooseApproach() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1152px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-[30px] font-bold leading-[1.15] text-white sm:text-5xl md:text-[56px]">
              {isArabic
                ? "لماذا تختار هذا النهج"
                : "Why Choose This Approach"}
            </h2>

            <p className="mx-auto mt-3 max-w-[980px] text-[16px] leading-[1.7] text-white/55 sm:mt-5 sm:text-2xl md:text-[24px] md:leading-[1.5]">
              {isArabic
                ? "تفشل العديد من الشركات العالمية بسبب تعدد الجهات الاستشارية وتشتتها، بينما نقدم نحن نهجًا موحدًا ومتكاملًا لإطلاق الأعمال وبنائها."
                : "Global firms often falter due to fragmented advisory. We provide a single, unified Command Center approach to institutional setup."}
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:mt-16 lg:grid-cols-[1.5fr_0.9fr_0.9fr]"
            variants={containerVariants}
          >
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
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`
                    rounded-[22px]
                    border
                    border-white/10
                    backdrop-blur-[4px]
                    transition-all
                    duration-300
                    sm:rounded-[28px]
                    ${
                      card.size === "large"
                        ? "bg-[#14263D] px-5 py-6 sm:px-8 sm:py-10 lg:px-10"
                        : "bg-[#27354CB2] px-5 py-6 hover:bg-[#31425D] sm:px-6 sm:py-8 lg:px-8"
                    }
                  `}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className={`flex h-full flex-col justify-end ${
                      isArabic ? "text-right" : ""
                    }`}
                    style={{ willChange: "transform" }}
                  >
                    <h3
                      className={`
                        font-bold
                        leading-[1.15]
                        text-white
                        ${
                          card.size === "large"
                            ? "text-[28px] sm:text-4xl md:text-[42px]"
                            : "text-[24px] sm:text-3xl md:text-[36px]"
                        }
                      `}
                    >
                      {translatedTitle}
                    </h3>

                    <p className="mt-3 max-w-[320px] text-sm leading-[1.8] text-white/55 sm:mt-5 sm:text-lg md:mt-6">
                      {translatedDescription}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

