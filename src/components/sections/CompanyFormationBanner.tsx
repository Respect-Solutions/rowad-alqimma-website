"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const bannerHoverVariants: Variants = {
  hover: {
    y: -3,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export function CompanyFormationBanner() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1152px] rounded-[20px] border-2 border-white/10 bg-[#27354CB2] px-5 py-8 text-center backdrop-blur-[4px] sm:rounded-[24px] sm:px-8 sm:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-[30px] font-bold leading-[1.15] text-white sm:text-[44px] md:text-[56px]"
          >
            {isArabic
              ? "أكثر من مجرد تأسيس شركة"
              : "More Than Just Company Formation"}
          </motion.h2>

          <motion.div variants={itemVariants} whileHover="hover">
            <motion.p
              variants={bannerHoverVariants}
              className="mx-auto mt-4 max-w-[620px] text-[16px] leading-[1.7] text-white/55 sm:mt-6 sm:text-[22px] md:text-[24px]"
              style={{ willChange: "transform" }}
            >
              {isArabic ? (
                <>
                  نرافقك في كل خطوة من رحلة تأسيس شركتك
                  <br />
                  <span className="font-semibold text-white/90">
                    من الفكرة الأولى وحتى الانطلاق بثقة في السوق السعودي.
                  </span>
                </>
              ) : (
                <>
                  We don’t just help you register a business
                  <br />
                  <span className="font-semibold text-white/90">
                    we support you through every stage of your journey.
                  </span>
                </>
              )}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
;
