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
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 xl:px-0 xl:py-24">
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
            className="text-[30px] font-bold leading-none text-white sm:text-[44px] md:text-[50px] lg:text-[56px]"
          >
            {isArabic ? "كيف يعمل" : "HOW IT WORKS"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-[650px] text-sm leading-[1.7] text-white/55 sm:mt-4 sm:text-lg"
          >
            {isArabic
              ? "نرافقك في كل مرحلة، من البداية وحتى تشغيل أعمالك بكفاءة."
              : "From onboarding to operational excellence."}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-10 grid items-stretch gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:mt-16 xl:grid-cols-4 xl:items-end"
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
                  ? "نبدأ بدراسة جدوى مشروعك والتأكد من توافقه مع المتطلبات التنظيمية الخاصة بنشاطك."
                  : step.description
                : step.title === "Documentation"
                  ? isArabic
                    ? "نُعد عقد التأسيس وجميع المستندات والإجراءات القانونية المطلوبة لتأسيس شركتك."
                    : step.description
                  : step.title === "Processing"
                    ? isArabic
                      ? "نتولى التنسيق مع الجهات الحكومية في المملكة لإصدار التراخيص واستكمال جميع الموافقات الرسمية."
                      : step.description
                    : step.title === "Completion"
                      ? isArabic
                        ? "نسلمك السجل التجاري ونستكمل تجهيز الحسابات التشغيلية لتكون شركتك جاهزة للانطلاق."
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
                  rounded-[24px]
                  bg-[#27354CB2]
                  px-5
                  py-6
                  backdrop-blur-[4px]
                  transition-all
                  duration-300
                  hover:bg-[#31415CB2]
                  sm:rounded-[32px]
                  sm:px-6
                  sm:py-8
                  md:min-h-[320px]
                  xl:rounded-[48px]
                  ${step.height}
                  ${isArabic ? "text-right" : ""}
                `}
              >
                {/* Number */}
                <span
                  className={`absolute top-5 text-[38px] font-bold leading-none text-white/70 sm:top-6 sm:text-[56px] ${
                    isArabic ? "left-5 sm:left-6" : "right-5 sm:right-6"
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
                  className={`flex h-[40px] w-[40px] items-center sm:h-[44px] sm:w-[44px] ${
                    isArabic ? "justify-end" : "justify-center"
                  }`}
                >
                  <Image
                    src={step.icon}
                    alt={translatedTitle}
                    width={24}
                    height={24}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </motion.div>

                {/* Content */}
                <div className="mt-10 sm:mt-14">
                  <h3 className="text-[22px] font-bold leading-[1.2] text-white sm:text-[28px]">
                    {translatedTitle}
                  </h3>

                  <p className="mt-4 text-sm leading-[1.8] text-white/55 sm:mt-5 sm:text-[16px]">
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

