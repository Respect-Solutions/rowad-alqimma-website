"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const features = [
  {
    title: "Foreign Investment",
    titleAr: "الاستثمار الأجنبي",
    description:
      "We don't stop at consulting, we implement and deliver results.",
    descriptionAr:
      "نحن لا نتوقف عند الاستشارات فقط، بل ننفذ ونحقق نتائج حقيقية.",
    icon: "/assets/foreign-investment.svg",
  },
  {
    title: "Beyond Legal Support",
    titleAr: "أكثر من دعم قانوني",
    description:
      "We combine legal expertise with business strategy and operational execution.",
    descriptionAr:
      "نجمع بين الخبرة القانونية والاستراتيجية التجارية والتنفيذ التشغيلي.",
    icon: "/assets/legal-support.svg",
  },
  {
    title: "One Integrated System",
    titleAr: "نظام متكامل",
    description:
      "Everything your business needs under one structured framework.",
    descriptionAr: "كل ما يحتاجه عملك ضمن إطار مؤسسي متكامل ومنظم.",
    icon: "/assets/integrated-system.svg",
  },
];

// Animation variants with explicit TypeScript typing
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardHoverVariants: Variants = {
  hover: {
    y: -5,
    borderColor: "rgba(180, 197, 255, 0.25)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

export function WhyChooseUs() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-[1152px] rounded-[20px] border border-white/10 bg-[#27354CB2] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h2 className="text-4xl font-bold leading-none text-white sm:text-5xl lg:text-[52px]">
                  {isArabic ? "لماذا نحن" : "Why Choose Us"}
                </h2>

                <span className="text-xs font-medium text-white/45 sm:text-sm">
                  {isArabic
                    ? "مستقبل البنية القانونية"
                    : "The Future of Legal Architecture"}
                </span>
              </div>

              <p className="mt-5 max-w-[820px] text-sm leading-[1.8] text-white/55">
                {isArabic
                  ? "نقدم خدمات قانونية متخصصة للغاية للمشاريع الطموحة، من قلب الرياض وحتى مشاريع المستقبل مثل نيوم."
                  : "We provide hyper-specialized legal services for the world's most ambitious projects. From the heart of Riyadh to the frontiers of NEOM."}
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="
                  flex
                  min-h-[120px]
                  flex-col
                  justify-between
                  rounded-[12px]
                  border
                  border-white/10
                  bg-[#14263D]
                  p-5
                  backdrop-blur-[12px]
                "
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="flex h-full flex-col justify-between"
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-[10px] bg-[#31425D] p-3">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={33}
                        height={33}
                        className="h-auto w-auto"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-white sm:text-[20px]">
                      {isArabic ? feature.titleAr : feature.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-center text-sm leading-[1.7] text-white/55">
                    {isArabic ? feature.descriptionAr : feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
