"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const features = [
  {
    en: "150+ companies successfully established in less than a year",
    ar: "أكثر من 150 شركة أُسست بنجاح خلال أقل من عام",
  },
  {
    en: "Specialized legal consultants in Saudi investment law",
    ar: "فريق من المستشارين المتخصصين في أنظمة الاستثمار السعودي",
  },
  {
    en: "Full transparency — no hidden fees, no surprises",
    ar: "شفافية كاملة في جميع الإجراءات والتكاليف دون أي رسوم خفية",
  },
  {
    en: "Fast execution — only 35 to 40 days",
    ar: "إجراءات تأسيس سريعة خلال 35 إلى 40 يوم عمل في المتوسط",
  },
  {
    en: "Experience with 10+ nationalities from around the world",
    ar: "خبرة واسعة في خدمة مستثمرين من أكثر من 10 جنسيات مختلفة",
  },
  {
    en: "Honest and reliable information at every step",
    ar: "استشارات دقيقة ومعلومات موثوقة في كل مرحلة من رحلتك الاستثمارية",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function WhyChooseSaudiFormation() {
  const { isArabic } = useLocale();

  return (
    <section className="bg-[#14263D] px-4 py-14 sm:px-6 lg:px-0 lg:py-20">
      <div className="mx-auto max-w-[1152px]">
        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="mx-auto text-[34px] font-bold leading-[1.2] text-white sm:text-[48px] lg:text-[56px]"
          >
            {isArabic
              ? "لماذا يختار المستثمرون رواد القمة لتأسيس شركاتهم في المملكة؟"
              : "Why Choose Rowad Al Qimma to Establish Your Company in Saudi Arabia?"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-[900px] text-[18px] leading-[1.7] text-white/60"
          >
            {isArabic
              ? "نقدم أكثر من مجرد خدمة تأسيس شركات، بل نوفر شراكة متكاملة تساعدك على الانطلاق بثقة وتحقيق النجاح في السوق السعودي."
              : "Rowad Al Qimma is not just a service company — we are your strategic partner. Here's what sets us apart:"}
          </motion.p>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.en}
              variants={itemVariants}
              whileHover={{
                y: -4,
              }}
              className="
                flex
                min-h-[92px]
                items-center
                justify-center
                rounded-[24px]
                border
                border-white/10
                bg-[#27354CB2]
                px-8
                py-8
                text-center
                backdrop-blur-sm
              "
            >
              <p className="text-[20px] font-semibold leading-[1.4] text-white">
                {isArabic ? feature.ar : feature.en}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
