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
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 xl:px-0 xl:py-24">
      
      {/* Glow */}
      {/* <div className="absolute left-1/2 top-1/2 h-[500px] w-[1152px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8FA8FF] blur-[180px]" /> */}

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1125px] gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8"
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
          className={`relative rounded-[24px] border border-white/10 bg-[#27354C] px-5 py-6 backdrop-blur-[12px] sm:rounded-[28px] sm:px-8 md:px-10 md:py-10 lg:min-h-[520px] ${
            isArabic ? "text-right" : ""
          }`}
        >
          
          {/* Header */}
          <div
            className={`flex items-center gap-3 sm:gap-4 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <h2 className="text-[28px] font-bold text-white sm:text-[40px] lg:text-[48px]">
              {isArabic
                ? "رؤيتنا"
                : "Our Vision"}
            </h2>

            <Image
              src="/assets/vision.svg"
              alt="Vision"
              width={34}
              height={34}
              className="h-7 w-7 sm:h-[34px] sm:w-[34px]"
            />
          </div>

          {/* Content */}
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.8] text-white/80 sm:mt-8 sm:text-[24px] lg:mt-10 lg:text-[28px]">
            {isArabic
              ? "أن نكون المعماري الأول للنجاح التجاري في الشرق الأوسط، وأن نحول السوق السعودي إلى مركز عالمي للتكامل التجاري السلس والابتكار الاستثنائي."
              : "To be the first choice for Arab and international investors seeking to enter the Saudi market — built on a reputation of trust, transparency, and results."}
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
            className={`relative w-full rounded-[24px] border border-white/10 bg-[#27354C] px-5 py-6 backdrop-blur-[12px] sm:rounded-[28px] sm:px-8 md:px-10 md:py-10 ${
              isArabic ? "text-right" : ""
            }`}
          >
            
            {/* Header */}
            <div
              className={`flex items-center gap-3 sm:gap-4 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <h2 className="text-[28px] font-bold text-white sm:text-[40px] lg:text-[48px]">
                {isArabic
                  ? "مهمتنا"
                  : "Our Mission"}
              </h2>

              <Image
                src="/assets/mission.svg"
                alt="Mission"
                width={34}
                height={34}
                className="h-7 w-7 sm:h-[34px] sm:w-[34px]"
              />
            </div>

            {/* Content */}
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.9] text-white/70 sm:mt-8 sm:text-[21px] lg:text-[24px]">
              {isArabic
                ? "تمكين الشركات العالمية من خلال استراتيجيات قانونية دقيقة، وحوكمة شفافة، وتميز تشغيلي يضمن لكل عميل تأسيس قاعدة قوية ومستدامة ومربحة."
                : "We believe every investor deserves a reliable partner who walks with them step by step — providing accurate information, protecting their interests, and delivering on every promise, on time."}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

