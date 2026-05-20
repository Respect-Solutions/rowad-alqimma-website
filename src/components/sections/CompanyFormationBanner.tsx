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
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-10">
      <div className="mx-auto max-w-[1152px] rounded-[24px] border-2 border-white/10 bg-[#27354CB2] px-8 py-12 text-center backdrop-blur-[4px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-[56px] font-bold leading-[1.1] text-white"
          >
            {isArabic
              ? "أكثر من مجرد تأسيس شركة"
              : "More Than Just Company Formation"}
          </motion.h2>

          <motion.div variants={itemVariants} whileHover="hover">
            <motion.p
              variants={bannerHoverVariants}
              className="mx-auto mt-6 max-w-[620px] text-[24px] leading-[1.5] text-white/55"
              style={{ willChange: "transform" }}
            >
              {isArabic ? (
                <>
                  نحن لا نساعدك فقط في تسجيل شركتك
                  <br />
                  <span className="font-semibold text-white/90">
                    بل ندعمك في كل مرحلة من رحلتك.
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
