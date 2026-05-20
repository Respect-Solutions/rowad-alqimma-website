"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export function VisionMission() {
  const { isArabic } = useLocale();

  // ─── Animations ─────────────────────────────────────────────

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
      y: 30,
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
      {/* <div className="absolute left-1/2 top-1/2 h-[500px] w-[1152px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8FA8FF] blur-[180px]" /> */}

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1125px] gap-6 lg:grid-cols-2 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={containerVariants}
      >
        
        {/* Vision Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.25,
            },
          }}
          className={`relative min-h-[420px] rounded-[28px] border border-white/10 bg-[#27354C] px-6 py-8 backdrop-blur-[12px] sm:px-8 md:px-10 md:py-10 lg:min-h-[520px] ${
            isArabic ? "text-right" : ""
          }`}
        >
          
          {/* Header */}
          <div
            className={`flex items-center  gap-4 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <h2 className="text-[34px] font-bold text-white sm:text-[40px] lg:text-[48px]">
              {isArabic
                ? "رؤيتنا"
                : "Our Vision"}
            </h2>

            <Image
              src="/assets/vision.svg"
              alt="Vision"
              width={34}
              height={34}
            />
          </div>

          {/* Content */}
          <p className="mt-8 max-w-[520px] text-[20px] leading-[1.7] text-white/80 sm:text-[24px] lg:mt-10 lg:text-[28px]">
            {isArabic
              ? "أن نكون المعماري الأول للنجاح التجاري في الشرق الأوسط، وأن نحول السوق السعودي إلى مركز عالمي للتكامل التجاري السلس والابتكار الاستثنائي."
              : "To be the premier architect of commercial success in the Middle East, transforming the Saudi Arabian market into a global hub of seamless business integration and unparalleled innovation."}
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.25,
            },
          }}
          className="flex items-center"
        >
          <div
            className={`relative w-full rounded-[28px] border border-white/10 bg-[#27354C] px-6 py-8 backdrop-blur-[12px] sm:px-8 md:px-10 md:py-10 ${
              isArabic ? "text-right" : ""
            }`}
          >
            
            {/* Header */}
            <div
              className={`flex items-center gap-4 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <h2 className="text-[34px] font-bold text-white sm:text-[40px] lg:text-[48px]">
                {isArabic
                  ? "مهمتنا"
                  : "Our Mission"}
              </h2>

              <Image
                src="/assets/mission.svg"
                alt="Mission"
                width={34}
                height={34}
              />
            </div>

            {/* Content */}
            <p className="mt-8 max-w-[520px] text-[18px] leading-[1.8] text-white/70 sm:text-[21px] lg:text-[24px]">
              {isArabic
                ? "تمكين الشركات العالمية من خلال استراتيجيات قانونية دقيقة، وحوكمة شفافة، وتميز تشغيلي يضمن لكل عميل تأسيس قاعدة قوية ومستدامة ومربحة."
                : "Empowering global enterprises through rigorous legal strategy, transparent governance, and operational excellence, ensuring every client builds a foundation that is both permanent and profitable."}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
