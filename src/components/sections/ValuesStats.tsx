"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  type Variants,
  useInView,
} from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

type ValuesStatsProps = {
  variant?: "counter" | "features";
};

type CounterStat = {
  value: string;
  title: {
    en: string;
    ar: string;
  };
};

type FeatureStat = {
  value: string;
  description: {
    en: string;
    ar: string;
  };
};

const counterStats: CounterStat[] = [
  {
    value: "150+",
    title: {
      en: "Companies successfully established in less than a year",
      ar: "شركة تم تأسيسها بنجاح خلال أقل من عام",
    },
  },

  {
    value: "35-40",
    title: {
      en: "Average days to complete the full formation process",
      ar: "متوسط الأيام لإكمال عملية التأسيس بالكامل",
    },
  },

  {
    value: "10+",
    title: {
      en: "Nationalities served from around the world",
      ar: "جنسيات مختلفة تم خدمتها حول العالم",
    },
  },

  {
    value: "100%",
    title: {
      en: "Transparency guaranteed in every client interaction",
      ar: "شفافية كاملة في كل تعامل مع العملاء",
    },
  },
];

const featureStats: FeatureStat[] = [
  {
    value: "Saudi Arabia",
    description: {
      en: "the fastest-growing market in the region",
      ar: "أسرع الأسواق نموًا في المنطقة",
    },
  },

  {
    value: "150+",
    description: {
      en: "companies we've helped enter the market",
      ar: "شركة ساعدناها على دخول السوق",
    },
  },

  {
    value: "Flexible services",
    description: {
      en: "each service separately or as a full package",
      ar: "كل خدمة بشكل منفصل أو كباقة متكاملة",
    },
  },

  {
    value: "Real insight",
    description: {
      en: "into the Saudi consumer and their behavior",
      ar: "فهم عميق للمستهلك السعودي وسلوكه",
    },
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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
      ease: "easeOut",
    },
  },
};

const numberHoverVariants: Variants = {
  hover: {
    scale: 1.03,
    y: -2,

    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const AnimatedCounter = ({
  targetValue,
}: {
  targetValue: string;
  }) => {  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const getNumericValue = (value: string): number => {
    const numericMatch = value.match(/\d+/);

    if (!numericMatch) return 0;

    return parseInt(numericMatch[0], 10);
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

  const displayValue = () => {
    let formatted = count.toString();

    if (hasPercent) formatted += "%";
    if (hasPlus && !hasPercent) formatted += "+";

    return formatted;
  };

  return (
    <div ref={ref}>
      {isInView ? displayValue() : "0"}
    </div>
  );
};

export function ValuesStats({
  variant = "counter",
}: ValuesStatsProps) {
  const { isArabic } = useLocale();

  const stats = variant === "counter" ? counterStats : featureStats;

  return (
    <section className="bg-[#14263D] px-4 py-12 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-[1152px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="
            rounded-[32px]
            border
            border-white/10
            bg-[#27354CB2]
            px-8
            py-10
            backdrop-blur-sm
            sm:px-10
            lg:px-12
          "
        >
          <div
            className="
              grid
              gap-8
              text-center
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-col items-center"
              >
                {" "}
                {variant === "counter" ? (
                  <>
                    <motion.h3
                      variants={numberHoverVariants}
                      className="
                        text-[42px]
                        font-bold
                        leading-none
                        text-white
                        sm:text-[48px]
                      "
                    >
                      <AnimatedCounter targetValue={stat.value} />
                    </motion.h3>

                    <p
                      className="
                        mt-3
                        text-[18px]
                        leading-[1.4]
                        text-white/60
                      "
                    >
                      {isArabic
                        ? (stat as CounterStat).title.ar
                        : (stat as CounterStat).title.en}
                    </p>
                  </>
                ) : (
                  <>
                    <motion.h3
                      variants={numberHoverVariants}
                      className="
                        text-[32px]
                        font-bold
                        leading-[1.1]
                        text-white
                        lg:text-[32px]
                        whitespace-nowrap
                      "
                    >
                      {stat.value}
                    </motion.h3>

                    <p
                      className="
                        mt-3
                        max-w-[180px]
                        text-[16px]
                        leading-[1.5]
                        text-white/60
                      "
                    >
                      {isArabic
                        ? (stat as FeatureStat).description.ar
                        : (stat as FeatureStat).description.en}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}