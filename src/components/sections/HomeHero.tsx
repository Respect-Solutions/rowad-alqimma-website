"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Header } from "../layout/Header";
import { useLocale } from "@/hooks/useLocale";

export function HomeHero() {
  const { isArabic, locale } = useLocale();

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

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },

    hover: {
      scale: 1.02,

      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },

    tap: {
      scale: 0.98,
    },
  };

  // ─── Render ─────────────────────────────────────────────────────────

  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden overflow-x-hidden bg-[#14263D]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt=""
          className="object-cover object-center brightness-75"
          fill
          priority
          src="/assets/home-hero-bg.jpg"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00132A]/25" />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(360deg, rgba(4, 29, 60, 0.75) 5.29%, rgba(33, 57, 93, 0.623798) 18.75%, rgba(37, 61, 98, 0.606516) 25.48%, rgba(43, 66, 103, 0.584296) 37.02%, rgba(55, 78, 117, 0.531119) 49.52%, rgba(180, 197, 255, 0) 100%), linear-gradient(270deg, rgba(102, 102, 102, 0) 0%, rgba(20, 38, 60, 0.75) 100%), linear-gradient(270deg, rgba(20, 38, 60, 0.75) 0%, rgba(20, 38, 60, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #00132A 100%)",
          }}
        />
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute bottom-[-1100px] left-1/2 z-[1] h-[1585px] w-[1409px] -translate-x-1/2 rounded-full border-t-[120px] border-[#acbef8] blur-[75px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 pt-4 sm:px-6 md:px-12 lg:px-16"
        >
          <Header active="Home" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="mt-auto px-6 pb-16 text-center sm:px-8 sm:pb-20 md:px-12 md:pb-24 lg:px-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto">
            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[36px] font-bold leading-[1.2] text-white sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[60px] md:leading-[1.15]"
            >
              {isArabic ? (
                <>
                  ابنِ وأدر وطوّر أعمالك
                  <br className="hidden md:block" />
                  قانونيًا واستراتيجيًا
                </>
              ) : (
                <>
                  Build, Operate, and Scale Your Business
                  <br className="hidden md:block" />
                  Legally and Strategically.
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-[90%] text-sm leading-[1.7] text-white/80 sm:mt-6 sm:max-w-none sm:text-[17px] md:text-lg lg:max-w-3xl"
            >
              {isArabic
                ? "نحن لا نقدم الاستشارات القانونية فقط، بل ننفذ ونبني وندعم أعمالك من التأسيس وحتى النمو داخل المملكة العربية السعودية."
                : "We go beyond legal consulting. We execute, structure, and support your business from setup to growth in Saudi Arabia."}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mt-8 flex flex-col gap-3 sm:mt-10 sm:grid sm:max-w-[640px] sm:grid-cols-2 sm:gap-4"
            >
              {/* Primary Button */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  className="flex h-[56px] w-full items-center justify-center rounded-[14px] bg-white text-sm font-bold leading-[1.2] text-[#00132A] transition-shadow hover:shadow-lg hover:shadow-white/10 active:shadow-md sm:h-[62px]"
                  href={`/${locale}/projects`}
                >
                  {isArabic ? "ابدأ شركتك" : "Start Your Company"}
                </Link>
              </motion.div>

              {/* Secondary Button */}
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  className="flex h-[56px] w-full items-center justify-center rounded-[14px] border border-white/20 bg-white/10 text-sm font-bold leading-[1.2] text-white backdrop-blur-sm transition-shadow hover:bg-white/15 hover:shadow-md active:bg-white/20 sm:h-[62px]"
                  href={`/${locale}/services`}
                >
                  {isArabic ? "استكشف خدماتنا" : "Explore Our Services"}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
