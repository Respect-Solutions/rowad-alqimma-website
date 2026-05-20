"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { assets } from "@/lib/assets";
import { IconImage } from "@/components/ui/IconImage";
import { useLocale } from "@/hooks/useLocale";

// Animation variants
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
    y: -6,
    borderColor: "rgba(255, 255, 255, 0.2)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

function TestimonialCard() {
  const { isArabic } = useLocale();

  return (
    <motion.article
      whileHover="hover"
      className={`w-[560px] shrink-0 rounded-3xl border-2 border-white/10 bg-[#27354C] p-[34px] ${
        isArabic ? "text-right" : ""
      }`}
    >
      <motion.div
        variants={cardHoverVariants}
        className="h-full"
        style={{ willChange: "transform" }}
      >
        <p className="text-lg leading-[1.8] text-soft">
          {isArabic
            ? '"قدمت لنا رواد القمة الوضوح الاستراتيجي الذي احتجناه لإدارة شراكات واستثمارات ضخمة داخل السوق السعودي، بخبرة قانونية وتنفيذية عالية."'
            : '"NEOM Justice provided the clarity we needed to navigate a multi-billion dollar joint venture. Their technical expertise is matched only by their local strategic foresight."'}
        </p>

        <div
          className={`mt-4 flex items-center gap-4 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <span className="relative size-12 overflow-hidden rounded-xl">
            <Image alt="" fill src={assets.testimonialAvatar} unoptimized />
          </span>

          <span>
            <strong className="block text-sm font-bold leading-[1.2] text-ink">
              {isArabic ? "ألكسندر فانس" : "Alexander Vance"}
            </strong>

            <span className="block text-xs leading-[1.2] text-soft">
              {isArabic
                ? "الرئيس التنفيذي - البنية التحتية التقنية"
                : "CEO, Global Tech Infrastructure"}
            </span>
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function Trust() {
  const { isArabic } = useLocale();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Optional: auto-scroll hint or just keep as is

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 md:px-16 md:py-16">
      {/* Background glow - responsive size */}
      <div className="absolute left-1/2 top-6 h-[400px] w-[90%] max-w-[732px] -translate-x-1/2 rounded-full blur-[75px] sm:h-[500px] md:h-[732px] md:w-[732px]" />

      <div className="relative mx-auto max-w-[1152px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className={`flex items-end gap-2 ${
              isArabic ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <Image
              src="/assets/quote-mark.svg"
              alt="quote mark"
              width={26}
              height={18}
              className="h-auto w-auto"
            />

            <h2 className="text-3xl font-bold leading-[1.2] text-ink sm:text-4xl md:text-5xl">
              {isArabic ? "ثقة راسخة" : "Sovereign Trust"}
            </h2>
          </motion.div>

          {/* Cards - responsive horizontal scroll on mobile, preserved layout on desktop */}
          <motion.div
            variants={containerVariants}
            className={`mt-8 flex gap-4 overflow-x-auto rounded-2xl pb-4 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.3) transparent",
            }}
            ref={scrollContainerRef}
          >
            <TestimonialCard />
            <TestimonialCard />
          </motion.div>

          {/* Optional: subtle scroll hint for mobile */}
          <div className="mt-2 flex justify-center gap-1 md:hidden">
            <span className="h-1 w-6 rounded-full bg-white/30"></span>
            <span className="h-1 w-2 rounded-full bg-white/10"></span>
            <span className="h-1 w-2 rounded-full bg-white/10"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
