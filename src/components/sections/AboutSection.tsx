"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function AboutSection() {
  const { isArabic } = useLocale();

  return (
    <section className="bg-[#14263D] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-[56px]">
              {isArabic ? "من نحن" : "About Us"}
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-sm leading-[1.8] text-white/55 sm:text-base">
              {isArabic
                ? "لا نكتفي بتقديم الاستشارات، بل نساعدك على تأسيس أعمالك، وإدارتها، وتنميتها داخل المملكة العربية السعودية."
                : "We don't just provide legal support we design, execute, and scale business infrastructure."}
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={itemVariants}
            className="
              mt-12
              rounded-[28px]
              border
              border-white/10
              bg-[#14263D]
              px-6
              py-8
              sm:px-10
              sm:py-10
              lg:px-12
              lg:py-12
            "
          >
            <div
              className={`
                flex
                flex-col-reverse
                items-center
                gap-10
                md:gap-12
                ${isArabic ? "lg:flex-row-reverse" : "lg:flex-row"}
              `}
            >
              {/* Content */}
              <div className="flex-1">
                <p
                  className={`
                    text-lg
                    leading-[1.7]
                    text-white/85
                    lg:text-[24px]
                    ${
                      isArabic
                        ? "text-center lg:text-right"
                        : "text-center lg:text-left"
                    }
                  `}
                >
                  {isArabic
                    ? "رواد القمة شركة متخصصة في دعم المستثمرين والشركات داخل المملكة العربية السعودية، حيث نقدم حلولًا متكاملة تشمل تأسيس الشركات، والاستشارات القانونية، والاستشارات الإدارية، والاستشارات التسويقية، لمساعدتك على دخول السوق السعودي بثقة وتحقيق نمو مستدام."
                    : "Rowad Al Qimma is a specialized firm in establishing foreign companies inside the Kingdom of Saudi Arabia, providing administrative, legal, and marketing consultations to investors seeking to enter the Saudi market."}
                </p>
              </div>

              {/* Logo */}
              <div className="shrink-0">
                <Image
                  src="/assets/logoAbout.png"
                  alt="Rowad Al Qimma"
                  width={180}
                  height={180}
                  className="
                    h-[120px]
                    w-[120px]
                    object-contain
                    sm:h-[140px]
                    sm:w-[140px]
                    lg:h-[180px]
                    lg:w-[180px]
                  "
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
