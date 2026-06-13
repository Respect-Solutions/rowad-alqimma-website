"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function WhySaudiMarket() {
  const { isArabic } = useLocale();

  return (
    <section className="bg-[#14263D] px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
      <div className="mx-auto max-w-[1152px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="
            rounded-[32px]
            border
            border-white/10
            bg-[#27354CB2]
            px-8
            py-12
            text-center
            backdrop-blur-sm
            sm:px-12
            sm:py-14
            lg:px-20
            lg:py-16
          "
        >
          <h2 className="text-[36px] font-bold leading-none text-white sm:text-[48px] lg:text-[56px]">
            {isArabic ? "لماذا السوق السعودي؟" : "Why the Saudi Market?"}
          </h2>

          <p className="mx-auto mt-8 text-[16px] leading-[1.7] text-white/60 sm:text-[18px]">
            {isArabic
              ? "يُعد السوق السعودي اليوم واحدًا من أسرع الأسواق نموًا في المنطقة، وقد فتحت رؤية 2030 أبوابًا واسعة للاستثمار الأجنبي في مختلف القطاعات. رواد القمة هنا ليرشدك خلال هذه الرحلة ويجعل دخولك إلى السوق السعودي أكثر سهولة وأمانًا ونجاحًا."
              : "The Saudi market is today one of the fastest-growing markets in the region. Vision 2030 has opened wide doors for foreign investment across multiple sectors. Rawad Al Qimma is here to guide you through this journey — making your entry into this market smooth, safe, and rewarding."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
