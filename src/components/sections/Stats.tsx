"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/hooks/useLocale";

type StatsProps = {
  variant?: "default" | "secondary";
};

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const numberHoverVariants: Variants = {
  hover: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

// Counter component
const AnimatedCounter = ({
  targetValue,
  suffix = "",
  isArabic = false,
}: {
  targetValue: string;
  suffix?: string;
  isArabic?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Extract numeric value from strings like "500+", "120+", "15+", "99%"
  const getNumericValue = (value: string): number => {
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) return 0;
    const num = parseInt(numericMatch[0], 10);
    // Handle Arabic numerals if needed (they are already converted in translatedValues)
    return isNaN(num) ? 0 : num;
  };

  const numericTarget = getNumericValue(targetValue);
  const hasPlus = targetValue.includes("+");
  const hasPercent = targetValue.includes("%");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const increment = numericTarget / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  // Format the displayed value
  const displayValue = (): string => {
    let formatted = count.toString();
    if (hasPercent) formatted += "%";
    if (hasPlus && !hasPercent) formatted += "+";
    return formatted;
  };

  return (
    <div ref={ref} className="inline-block">
      {isInView ? displayValue() : "0"}
    </div>
  );
};

export function Stats({ variant = "default" }: StatsProps) {
  const isSecondary = variant === "secondary";
  const { isArabic } = useLocale();

  const translatedLabels = {
    Companies: isArabic ? "شركة تم تأسيسها" : "Companies established",
    Years: isArabic ? "مستثمر دولي" : "International Investors",
    "Global Offices": isArabic ? "قطاع مخدوم" : "Industries Served",
    "Success Rate": isArabic ? "معدل نجاح التنفيذ" : "Execution Success Rate",
  };

  const translatedValues = {
    "10B+": isArabic ? "+٥٠٠" : "500+",
    "500+": isArabic ? "+١٢٠" : "120+",
    "15+": isArabic ? "+١٥" : "15+",
    "99%": isArabic ? "٩٩٪" : "99%",
  };

  return (
    <section
      className={`
        px-4
        sm:px-6
        md:px-16
        ${isSecondary ? "py-16 sm:py-20 md:py-24" : "py-8 sm:py-12"}
      `}
    >
      <Container
        className={`
          rounded-3xl
          ${isSecondary ? "bg-[#27354C] py-12 sm:py-16 md:py-20" : "py-8 sm:py-10 md:py-12"}
        `}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className={`
            grid
            text-center
            sm:grid-cols-2
            lg:grid-cols-4
            ${isSecondary ? "gap-8 sm:gap-10" : "gap-5 sm:gap-6"}
          `}
        >
          {stats.map(([value, label]) => {
            const targetRaw =
              translatedValues[value as keyof typeof translatedValues];
            return (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.strong
                  variants={numberHoverVariants}
                  className={`
                    block
                    font-bold
                    leading-[1.2]
                    text-ink
                    ${isSecondary ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"}
                  `}
                  style={{ willChange: "transform" }}
                >
                  <AnimatedCounter
                    targetValue={targetRaw}
                    isArabic={isArabic}
                  />
                </motion.strong>

                <span
                  className={`
                    block
                    leading-[1.2]
                    text-soft
                    ${isSecondary ? "mt-2 text-lg sm:text-xl" : "mt-0.5 text-base sm:text-lg"}
                  `}
                >
                  {translatedLabels[label as keyof typeof translatedLabels]}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
