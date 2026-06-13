"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const faqData = {
  en: [
    {
      question: "How can I trust you as a company",
      answer:
        " Your trust is the foundation of our work. We have a documented record of over 150 successfully established companies in the past year, and we operate with complete transparency at every step.",
    },

    {
      question: "Are there any hidden fees?",
      answer:
        "Absolutely not. We are fully committed to transparency — all costs are determined upfront and clearly stated before any procedure begins.",
    },

    {
      question: "How long does the company formation process take?",
      answer:
        " The process takes an average of 35 to 40 business days, covering all procedures from the very beginning until you receive the commercial registration.",
    },

    {
      question: "Do you serve all nationalities?",
      answer:
        " Yes, we serve investors from various nationalities around the world, and we have extensive experience handling the specific requirements of different nationalities",
    },
  ],

  ar: [
    {
      question: "كم تستغرق مرحلة التقييم الأولي؟",

      answer:
        "تستغرق مرحلة التقييم الأولي عادة من 24 إلى 48 ساعة. نقوم بدراسة نموذج عملك وأهدافك ومدى جاهزية المشروع لتقديم خطة واضحة ومنظمة للدخول أو التأسيس داخل السوق السعودي.",
    },

    {
      question: "هل تتولون إجراءات التراخيص القانونية؟",

      answer:
        "نعم — نقوم بإدارة عملية التراخيص بالكامل من البداية وحتى النهاية، بما يشمل الموافقات التنظيمية وتجهيز المستندات والتنسيق مع الجهات المختصة لضمان الامتثال الكامل.",
    },

    {
      question: "ما القطاعات التي تتخصصون فيها؟",

      answer:
        "نعمل مع العديد من القطاعات المختلفة مثل التقنية والتجزئة والاستشارات والقطاع الصناعي. كما أن منهجيتنا مرنة بما يسمح لنا بدعم مختلف نماذج الأعمال داخل السوق السعودي.",
    },
  ],
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function FAQSection() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  const { isArabic } = useLocale();

  const faqs = isArabic
    ? faqData.ar
    : faqData.en;

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) =>
      prev === index ? null : index,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-14 sm:px-6 sm:py-16 md:py-24">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative z-10 mx-auto max-w-[1152px]">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className={`text-center ${
            isArabic ? "rtl" : ""
          }`}
        >
          <motion.h2
            variants={itemVariants}
            className="text-[32px] font-bold leading-[1.1] text-white sm:text-[42px] md:text-[56px]"
          >
            {isArabic
              ? "الأسئلة الشائعة"
              : "Frequently Asked Questions"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-[650px] text-sm leading-[1.8] text-white/55 sm:mt-5 sm:text-base md:text-lg"
          >
            {isArabic
              ? "كل ما تحتاج معرفته حول تأسيس الأعمال والخدمات القانونية والدعم التشغيلي داخل المملكة العربية السعودية."
              : "Everything you need to know about our business setup, legal process, and operational support."}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={containerVariants}
          className="mt-10 flex flex-col gap-4 sm:mt-12 md:mt-14"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              className="overflow-hidden"
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`
                  group
                  flex
                  min-h-[68px]
                  w-full
                  items-center
                  justify-between
                  gap-4
                  rounded-[18px]
                  border
                  border-white/15
                  bg-[#24344D]
                  px-4
                  py-4
                  transition-all
                  duration-300
                  hover:bg-[#2B3C57]

                  sm:min-h-[74px]
                  sm:rounded-[22px]
                  sm:px-6

                  ${
                    isArabic
                      ? "flex-row-reverse text-right"
                      : "text-left"
                  }
                `}
              >
                <span
                  className="
                    flex-1
                    text-sm
                    font-medium
                    leading-[1.6]
                    text-white

                    sm:text-[17px]
                  "
                >
                  {faq.question}
                </span>

                {/* Plus Icon */}
                <motion.div
                  animate={{
                    rotate:
                      openIndex === index
                        ? 45
                        : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-sm
                    text-white/80

                    sm:h-[34px]
                    sm:w-[34px]
                  "
                >
                  +
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.25,
                        0.1,
                        0.25,
                        1,
                      ],
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                        mt-3
                        rounded-[20px]
                        border
                        border-white/10
                        bg-[#4A566B]
                        px-4
                        py-5

                        sm:rounded-[24px]
                        sm:px-8
                        sm:py-7
                      "
                    >
                      <p
                        className={`
                          mx-auto
                          max-w-[950px]
                          text-sm
                          leading-[1.9]
                          text-white/90

                          sm:text-[17px]

                          ${
                            isArabic
                              ? "text-right"
                              : "text-left sm:text-center"
                          }
                        `}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

