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
    <section className="px-4 py-12 sm:px-6 md:px-16 md:py-16">
      <div className="mx-auto max-w-[1152px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className={`rounded-3xl border-2 border-white/10 bg-accent px-6 py-10 text-center sm:px-8 sm:py-12 ${
            isArabic ? "rtl" : ""
          }`}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold leading-[1.2] text-main sm:text-4xl md:text-5xl"
          >
            {isArabic
              ? "هل أنت مستعد لبناء منظومتك القانونية؟"
              : "Ready to Deploy Your Legal Infrastructure?"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-2 text-base leading-[1.7] text-graphite sm:text-lg"
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
            className="mt-10 flex justify-center sm:mt-12"
          >
            <motion.div
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                className="h-[56px] w-full max-w-[438px] sm:h-[60px] md:h-[62px]"
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
