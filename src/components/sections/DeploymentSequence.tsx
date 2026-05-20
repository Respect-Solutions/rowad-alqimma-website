"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "Initial feasibility study and regulatory alignment for your specific industry.",
    icon: "/assets/consultation.svg",
    height: "xl:h-[430px]",
  },

  {
    id: "02",
    title: "Documentation",
    description:
      "Preparation of articles of association and all mandatory legal filings.",
    icon: "/assets/documentation.svg",
    height: "xl:h-[390px]",
  },

  {
    id: "03",
    title: "Processing",
    description:
      "Liaising with Saudi authorities for licensing and official certification.",
    icon: "/assets/processing.svg",
    height: "xl:h-[350px]",
  },

  {
    id: "04",
    title: "Completion",
    description:
      "Final hand-over of commercial registration and operational bank accounts.",
    icon: "/assets/completion.svg",
    height: "xl:h-[310px]",
  },
];

export function DeploymentSequence() {
  const { isArabic } = useLocale();

  // ─── Animation Variants ─────────────────────────────────────────────

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12 xl:px-0 xl:py-24">
      
      {/* Glow */}
      {/* <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#8FA8FF] blur-[180px]" /> */}

      <div className="relative z-10 mx-auto max-w-[1152px]">
        
        {/* Heading */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-[38px] font-bold leading-none text-white sm:text-[44px] md:text-[50px] lg:text-[56px]"
          >
            {isArabic
              ? "مراحل التنفيذ"
              : "Deployment Sequence"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-[650px] text-base leading-[1.7] text-white/55 sm:text-lg"
          >
            {isArabic
              ? "من البداية وحتى التشغيل الكامل."
              : "From onboarding to operational excellence."}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-14 grid items-stretch gap-6 md:grid-cols-2 xl:mt-16 xl:grid-cols-4 xl:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
        >
          {steps.map((step) => {
            const translatedTitle =
              step.title === "Consultation"
                ? isArabic
                  ? "الاستشارة"
                  : step.title
                : step.title === "Documentation"
                  ? isArabic
                    ? "التوثيق"
                    : step.title
                  : step.title === "Processing"
                    ? isArabic
                      ? "المعالجة"
                      : step.title
                    : step.title === "Completion"
                      ? isArabic
                        ? "الإنجاز"
                        : step.title
                      : step.title;

            const translatedDescription =
              step.title === "Consultation"
                ? isArabic
                  ? "دراسة الجدوى الأولية والتوافق التنظيمي لنشاطك."
                  : step.description
                : step.title === "Documentation"
                  ? isArabic
                    ? "إعداد العقود وكافة المستندات والمتطلبات القانونية."
                    : step.description
                  : step.title === "Processing"
                    ? isArabic
                      ? "التنسيق مع الجهات السعودية لإتمام التراخيص والاعتمادات."
                      : step.description
                    : step.title === "Completion"
                      ? isArabic
                        ? "تسليم السجل التجاري والحسابات التشغيلية النهائية."
                        : step.description
                      : step.description;

            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-[#27354CB2]
                  px-6
                  py-8
                  min-h-[300px]
                  backdrop-blur-[4px]
                  transition-all
                  duration-300
                  hover:bg-[#31415CB2]
                  md:min-h-[320px]
                  xl:rounded-[48px]
                  ${step.height}
                  ${isArabic ? "text-right" : ""}
                `}
              >
                
                {/* Number */}
                <span
                  className={`absolute top-6 text-[46px] font-bold leading-none text-white/70 sm:text-[56px] ${
                    isArabic
                      ? "left-6"
                      : "right-6"
                  }`}
                >
                  {step.id}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 4,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`flex h-[44px] w-[44px] items-center ${
                    isArabic
                      ? "justify-end"
                      : "justify-center"
                  }`}
                >
                  <Image
                    src={step.icon}
                    alt={translatedTitle}
                    width={24}
                    height={24}
                  />
                </motion.div>

                {/* Content */}
                <div className="mt-14">
                  <h3 className="text-[24px] font-bold leading-[1.2] text-white sm:text-[28px]">
                    {translatedTitle}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[1.8] text-white/55 sm:text-[16px]">
                    {translatedDescription}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
