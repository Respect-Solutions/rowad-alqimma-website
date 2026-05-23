"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "../ui/Button";
import { useLocale } from "@/hooks/useLocale";

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
  hidden: { opacity: 0, y: 20 },
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

export function CTASection() {
  const { isArabic, locale } = useLocale();

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-[1152px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className={`rounded-[28px] border-2 border-white/10 bg-accent px-5 py-8 text-center sm:rounded-3xl sm:px-8 sm:py-12 ${
            isArabic ? "rtl" : ""
          }`}
        >
          <motion.h2
            variants={itemVariants}
            className="text-[28px] font-bold leading-[1.2] text-main sm:text-4xl md:text-5xl"
          >
            {isArabic
              ? "هل أنت مستعد لبناء منظومتك القانونية؟"
              : "Ready to Deploy Your Legal Infrastructure?"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-[760px] text-sm leading-[1.8] text-graphite sm:mt-2 sm:text-lg"
          >
            {isArabic ? (
              <>
                لا تكتفِ بتوظيف محامٍ فقط، بل ابنِ نظامًا قانونيًا
                <br className="hidden sm:block" />
                يتطور مع طموحاتك المستقبلية.
              </>
            ) : (
              <>
                Don't just hire a lawyer. Install a system that scales with your
                ambition.
                <br className="hidden sm:block" />
                Connect with our architects today.
              </>
            )}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center sm:mt-12"
          >
            <motion.div
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto"
            >
              <Button
                className="h-[52px] w-full sm:min-w-[260px] sm:w-auto md:h-[62px] md:min-w-[438px]"
                variant="dark"
              >
                {isArabic ? "ابدأ تأسيس شركتك" : "Start Your Company"}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

