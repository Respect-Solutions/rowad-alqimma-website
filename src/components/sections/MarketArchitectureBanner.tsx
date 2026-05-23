"use client";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

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
    borderColor: "rgba(180, 197, 255, 0.2)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.99 },
};

export function MarketArchitectureBanner() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1152px] rounded-[20px] border border-white/10 bg-[#27354CB2] px-4 py-8 text-center sm:px-6 sm:py-9 md:px-8 md:py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} whileHover="hover" whileTap="tap">
            <motion.div
              variants={bannerHoverVariants}
              style={{ willChange: "transform" }}
            >
              <h2 className="text-xl font-bold leading-[1.2] text-white sm:text-3xl md:text-[32px]">
                {isArabic ? (
                  <>
                    دخول السوق السعودي يعتمد على بنية تنظيمية
                    <br className="hidden sm:block" />
                    متعددة المستويات، ويتطلب أكثر من مجرد وكيل محلي.
                  </>
                ) : (
                  <>
                    Saudi market entry is a multi layered regulatory
                    architecture.
                    <br className="hidden sm:block" />
                    Navigating it requires more than a local agent.
                  </>
                )}
              </h2>
              <p className="mx-auto mt-4 max-w-[1050px] text-sm leading-[1.7] text-white/55 sm:mt-5 sm:text-base">
                {isArabic
                  ? "العديد من الشركات العالمية تتعثر بسبب تعدد الجهات الاستشارية. نحن نقدم نهجًا موحدًا من خلال نظام Command Center لإدارة التأسيس المؤسسي بالكامل."
                  : "Global firms often falter due to fragmented advisory. We provide a single, unified Command Center approach to institutional setup."}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
