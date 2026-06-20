"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import type { ReactNode } from "react";

type LocalizedText = {
  en: string;
  ar: string;
};

type LocalizedNode = {
  en: ReactNode;
  ar: ReactNode;
};

type AdministrativeConsultingIntroProps = {
  title?: LocalizedText;
  description?: LocalizedText;
  highlight?: LocalizedText;
  conclusion?: LocalizedNode;
  boldOne?: LocalizedText;
  boldTwo?: LocalizedText;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function AdministrativeConsultingIntro({
  title,
  description,
  highlight,
  conclusion,
  boldOne,
  boldTwo,
}: AdministrativeConsultingIntroProps) {
  const { isArabic } = useLocale();

  const t = (text?: LocalizedText) =>
    text ? (isArabic ? text.ar : text.en) : "";

  const tn = (node?: LocalizedNode) =>
    node ? (isArabic ? node.ar : node.en) : null;

  return (
    <section className="relative overflow-hidden bg-[#14263D] py-20 sm:py-24 lg:py-28">
      {/* <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F78FF]/10 blur-[140px]" /> */}

      <div className="relative z-10 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="mx-auto text-center"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-[34px] font-bold leading-[1.15] text-white sm:text-[46px] lg:text-[58px]"
          >
            {t(title)}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-[1152px] text-[16px] leading-[1.9] text-white/60 sm:text-[18px]"
          >
            <span className="font-bold text-white">{t(boldOne)}</span>{" "}
            {t(description)}
          </motion.p>

          {/* Highlight */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-10 max-w-[1152px] text-[18px] leading-[1.9] text-white/60 sm:text-[22px]"
          >
            <span className="font-bold text-white">{t(boldTwo)}</span>{" "}
            {t(highlight)}
          </motion.p>

          {/* Conclusion */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-8 max-w-[1152px] text-[16px] leading-[1.9] text-white/60 sm:text-[18px]"
          >
            {tn(conclusion)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
