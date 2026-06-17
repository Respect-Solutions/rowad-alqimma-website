
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
// Counter component
const AnimatedCounter = ({
  targetValue,
  isArabic = false,
}: {
  targetValue: string;
  isArabic?: boolean;
}) => {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

const getNumericValue = (value: string): number => {
  return Number(value.replace(/[^\d]/g, ""));
};

  const numericTarget = getNumericValue(targetValue);

  const hasPlus = targetValue.includes("+");
  const hasPercent = targetValue.includes("%");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const duration = 1500;
    const stepTime = 16;
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

  const toArabicNumbers = (value: string) => {
    return value.replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
  };

const displayValue = () => {
  let formatted = count.toString();

  if (hasPercent) {
    formatted += "%";
  }

  if (hasPlus && !hasPercent) {
    formatted += "+";
  }

  if (isArabic) {
    formatted = formatted.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
    formatted = formatted.replace("%", "٪");
  }

  return formatted;
};

  return (
    <div ref={ref} className="inline-block">
      {isInView ? displayValue() : isArabic ? "٠" : "0"}
    </div>
  );
};

export function Stats({ variant = "default" }: StatsProps) {
  const isSecondary = variant === "secondary";
  const { isArabic } = useLocale();

  const translatedLabels = {
    Companies: isArabic ? "شركة أُسست بنجاح" : "Companies established",
    Years: isArabic ? "مستثمر من مختلف دول العالم" : "International Investors",
    "Global Offices": isArabic ? "قطاع مخدوم" : "Industries Served",
    "Success Rate": isArabic ? "معدل نجاح التنفيذ" : "Execution Success Rate",
  };

const translatedValues = {
  "10B+": "500+",
  "500+": "120+",
  "15+": "15+",
  "99%": "99%",
};

  return (
    <section
      className={`
        px-4
        sm:px-6
        md:px-16
        ${isSecondary ? "py-12 sm:py-16 md:py-24" : "py-6 sm:py-8 md:py-12"}
      `}
    >
      <Container
        className={`
          rounded-2xl
          sm:rounded-3xl
          ${
            isSecondary
              ? "bg-[#27354C] py-10 sm:py-16 md:py-20"
              : "py-6 sm:py-10 md:py-12"
          }
        `}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className={`
            grid
            grid-cols-1
            text-center
            sm:grid-cols-2
            lg:grid-cols-4
            ${isSecondary ? "gap-6 sm:gap-10" : "gap-4 sm:gap-6"}
          `}
        >
          {stats.map(([value, label]) => {
            const targetRaw =
              translatedValues[value as keyof typeof translatedValues] ?? value;

            return (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex flex-col items-center justify-center"
              >
                <motion.strong
                  variants={numberHoverVariants}
                  className={`
          block
          font-bold
          leading-none
          text-ink

          ${
            isSecondary
              ? "text-3xl sm:text-5xl md:text-6xl"
              : "text-2xl sm:text-4xl md:text-5xl"
          }
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
          max-w-[220px]
          leading-snug
          text-soft

          ${
            isSecondary
              ? "mt-2 text-sm sm:text-lg md:text-xl"
              : "mt-1 text-sm sm:text-base md:text-lg"
          }
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

