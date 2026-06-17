"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocale } from "@/hooks/useLocale";

type ServiceHeroProps = {
  titleBlue: string;
  title: string;
  badge: string;
  description: string;
  summary: string;
  icon: string;
  backHref?: string;
  exploreText?: string;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ServiceHero({
  titleBlue,
  title,
  badge,
  description,
  summary,
  icon,
  backHref = "/services",
  exploreText,
}: ServiceHeroProps) {
  const { locale, isArabic } = useLocale();

  const handleScrollDown = () => {
    const sections = document.querySelectorAll("section");

    if (sections.length > 1) {
      sections[1].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative h-[100vh] overflow-hidden bg-[#14263D]">
      {/* Background Glow */}

      {/* <div className="absolute left-1/2 top-[20%] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[#4F78FF]/10 blur-[140px]" /> */}

      {/* Bottom Arc */}

      <div className="absolute bottom-[-620px] left-1/2 h-[1300px] w-[1600px] -translate-x-1/2 rounded-full border-t-[120px] border-[#B4C5FF] blur-[80px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1152px] flex-col px-4 py-8 sm:px-6 lg:px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex min-h-screen flex-col"
        >
          {/* Top Bar */}
          <motion.div
            variants={itemVariants}
            className={`flex items-center justify-between ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            {/* Back Button */}
            <Link
              href={`/${locale}${backHref}`}
              className={`group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <FaArrowLeft
                className={`transition-transform duration-300 ${
                  isArabic
                    ? "rotate-180 group-hover:translate-x-1"
                    : "group-hover:-translate-x-1"
                }`}
              />

              <span className="text-sm font-medium sm:text-base">
                {isArabic ? "العودة للخدمات" : "Back to Services"}
              </span>
            </Link>

            {/* Service Badge */}
            <div
              className={`flex items-center gap-3 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#EBF1FF12] backdrop-blur-xl">
                <Image src={icon} alt={badge} width={24} height={24} />
              </div>

              <span className="text-lg font-semibold text-white sm:text-xl">
                {badge}
              </span>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <motion.h1
              variants={itemVariants}
              className="
                
                text-[64px]
                font-bold
                leading-[1.08]
                text-white
                sm:text-[52px]
                lg:text-[64px]
              "
            >
              <span className="text-[#B9C7E4]">{titleBlue}</span>
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="
                mt-6
                text-[18px]
                leading-[1.8]
                text-white/60
                sm:text-[19px]
              "
            >
              {description}
            </motion.p>

            {/* Glass Card */}
            <motion.div
              variants={itemVariants}
              className="
                mt-12
                w-full
                rounded-[36px]
                border
                border-[#B9C7E4]
                bg-[#EBF1FF14]
                px-8
                py-10
                backdrop-blur-[64px]
                sm:px-12
                sm:py-12
              "
            >
              {" "}
              <p
                className="
                  mx-auto
                  text-[18px]
                  leading-[1.8]
                  text-white
                  sm:text-[18px]
                  lg:text-[18px]
                "
              >
                {summary}
              </p>
            </motion.div>

            {/* Explore */}
            <motion.button
              variants={itemVariants}
              onClick={handleScrollDown}
              className="
                group
                mt-14
                flex
                flex-col
                items-center
                text-white
              "
            >
              <span className="text-[18px] font-semibold">{exploreText}</span>

              <span
                className="
                  mt-3
                  animate-bounce
                  text-white/70
                  transition
                  duration-300
                  group-hover:text-white
                "
              >
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L12 12L22 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Glow */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          top-[25%]
          h-36
          w-36
          rounded-full
          bg-[#8FA8FF]/10
          blur-[100px]
        "
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[15%]
          left-[8%]
          h-40
          w-40
          rounded-full
          bg-[#4D79FF]/10
          blur-[120px]
        "
      />
    </section>
  );
}