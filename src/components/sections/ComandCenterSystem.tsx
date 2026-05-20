"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const phases = [
  {
    id: "01",
    title: "Analysis",
    titleAr: "التحليل",
    description: "Regulatory feasibility and structural scoping.",
    descriptionAr: "تحليل الجدوى التنظيمية وتحديد الهيكل المؤسسي.",
    icon: "/assets/analysis.svg",
  },
  {
    id: "02",
    title: "Licensing",
    titleAr: "التراخيص",
    description: "Securing MISA investment certificates.",
    descriptionAr: "استخراج شهادات الاستثمار والتراخيص الرسمية.",
    icon: "/assets/licensing.svg",
  },
  {
    id: "03",
    title: "Banking",
    titleAr: "الخدمات البنكية",
    description: "Local capital account structuring.",
    descriptionAr: "تنظيم الحسابات البنكية ورأس المال المحلي.",
    icon: "/assets/banking.svg",
  },
  {
    id: "04",
    title: "Operational",
    titleAr: "التشغيل",
    description: "Visas, office space, and GOSI registration.",
    descriptionAr: "التأشيرات والمساحات المكتبية والتسجيلات الحكومية.",
    icon: "/assets/operational.svg",
  },
  {
    id: "05",
    title: "Continuity",
    titleAr: "الاستمرارية",
    description: "Ongoing compliance and annual renewals.",
    descriptionAr: "الامتثال المستمر والتجديدات السنوية.",
    icon: "/assets/continuity.svg",
  },
];

const features = [
  {
    en: "REGULATORY CONTROL",
    ar: "التحكم التنظيمي",
  },
  {
    en: "OWNERSHIP PROTECTION",
    ar: "حماية الملكية",
  },
  {
    en: "COMPLIANCE CONTINUITY",
    ar: "استمرارية الامتثال",
  },
  {
    en: "STRUCTURAL STABILITY",
    ar: "الاستقرار المؤسسي",
  },
];

// Animation variants with explicit TypeScript typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardHoverVariants: Variants = {
  hover: {
    y: -6,
    borderColor: "rgba(180, 197, 255, 0.3)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

const featureItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function CommandCenterSystem() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] py-16 sm:py-24 lg:py-32">
      <div className="mx-4 rounded-[32px] border border-white/10 bg-[#27354CB2] px-4 py-10 sm:mx-6 sm:px-6 sm:py-12 md:mx-8 md:px-8 md:py-14 lg:mx-auto  lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[56px]">
              {isArabic ? "نظام مركز التحكم" : "The Command Center System"}
            </h2>

            <p className="mt-4 text-base font-medium text-[#B4C5FF]/70 sm:text-lg">
              {isArabic
                ? "خمس مراحل متكاملة للتحول المؤسسي."
                : "Five distinct phases of institutional transformation."}
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 grid max-w-[1152px] gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 xl:grid-cols-5"
            variants={containerVariants}
          >
            {phases.map((phase) => (
              <motion.div
                key={phase.id}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative flex min-h-[130px] flex-col justify-between gap-4 rounded-[12px] border-2 border-white/10 bg-[#27354C] p-4 text-center backdrop-blur-[12px]"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="flex h-full flex-col justify-between"
                  style={{ willChange: "transform" }}
                >
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-[20px]">
                      {isArabic ? phase.titleAr : phase.title}
                    </h3>

                    <p className="mt-3 text-xs leading-[1.5] text-[#BEC1C4]/65 sm:mt-4 sm:text-sm">
                      {isArabic ? phase.descriptionAr : phase.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Image
                      src={phase.icon}
                      alt={phase.title}
                      width={24}
                      height={24}
                      className="opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                    />

                    <span className="text-xl font-bold text-[#D7C29A] sm:text-[24px]">
                      {phase.id}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-10 rounded-[18px] border border-white/10 bg-white/[0.02] px-4 py-5 sm:px-6 sm:py-6 md:px-8  max-w-[1152px] mx-auto"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 sm:gap-x-16 max-w-[1152px] mx-auto">
              {features.map((feature) => (
                <motion.div
                  key={feature.en}
                  variants={featureItemVariants}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-[#D7C29A] sm:h-[6px] sm:w-[6px]" />

                  <span className="text-xs font-semibold tracking-[0.08em] text-white/80 sm:text-sm">
                    {isArabic ? feature.ar : feature.en}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
