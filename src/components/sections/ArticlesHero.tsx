"use client";

import { motion, type Variants } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { useLocale } from "@/hooks/useLocale";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ArticlesHero() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] pb-16">
      <div className="absolute bottom-[-550px] left-1/2 h-[1100px] w-[1409px] -translate-x-1/2 rounded-full border-t-[120px] border-[#acbef8] blur-[75px]" />

      <div className="relative z-10">
        <div className="px-4 pt-4 sm:px-6 md:px-16 md:pt-4">
          <Header active="Articles" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-[900px] px-4 pt-14 text-center sm:px-6 sm:pt-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent"
          >
            {isArabic ? "المقالات" : "Articles"}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-[32px] font-bold leading-[1.15] text-white sm:text-[48px] md:text-[56px]"
          >
            {isArabic ? "رؤى ومقالات الأعمال" : "Insights & Articles"}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.8] text-white/60"
          >
            {isArabic
              ? "إرشادات عملية حول تأسيس الشركات والاستشارات القانونية والإدارية والتسويقية في المملكة العربية السعودية."
              : "Practical guidance on company formation, legal, administrative and marketing consulting in Saudi Arabia."}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
