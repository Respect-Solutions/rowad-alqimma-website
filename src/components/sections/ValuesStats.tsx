"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants, useInView } from "framer-motion";
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
  value: {
    en: string;
    ar: string;
  };
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
      ar: "أكثر من 150 شركة أُسست بنجاح خلال أقل من عام",
    },
  },
  {
    value: "40",
    title: {
      en: "Average company formation completed within 35–40 business days",
      ar: "متوسط مدة تأسيس الشركة يتراوح بين ٣٥ و٤٠ يوم عمل",
    },
  },
  {
    value: "10+",
    title: {
      en: "Nationalities served from around the world",
      ar: "مستثمرون من أكثر من ١٠ جنسيات مختلفة",
    },
  },
  {
    value: "100%",
    title: {
      en: "Transparency guaranteed in every client interaction",
      ar: "التزام كامل بالشفافية في جميع مراحل العمل",
    },
  },
];

const featureStats: FeatureStat[] = [
  {
    value: {
      en: "Saudi Arabia",
      ar: "السوق السعودي",
    },
    description: {
      en: "the fastest-growing market in the region",
      ar: "إحدى أسرع البيئات الاستثمارية نمواً في المنطقة",
    },
  },
  {
    value: {
      en: "150+",
      ar: "150+",
    },
    description: {
      en: "companies we've helped enter the market",
      ar: "شركة ساعدناها على دخول السوق السعودي",
    },
  },
  {
    value: {
      en: "Flexible services",
      ar: "خدمات مرنة",
    },
    description: {
      en: "each service separately or as a full package",
      ar: "اختر كل خدمة بشكل مستقل أو ضمن باقة متكاملة",
    },
  },
  {
    value: {
      en: "Real insight",
      ar: "رؤية دقيقة",
    },
    description: {
      en: "into the Saudi consumer and their behavior",
      ar: "فهم عميق للسوق السعودي واحتياجات المستثمرين",
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

const AnimatedCounter = ({ targetValue }: { targetValue: string }) => {
  const { isArabic } = useLocale();

  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const getNumericValue = (value: string): number => {
    const numbers = value.match(/\d+/g);

    if (!numbers) return 0;

    return parseInt(numbers[numbers.length - 1], 10);
  };

  const numericTarget = getNumericValue(targetValue);

  const hasPlus = targetValue.includes("+");
  const hasPercent = targetValue.includes("%");
  const hasRange = targetValue.includes("-");

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

  const toArabicNumbers = (text: string) =>
    text.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);

  const displayValue = () => {
    let formatted = "";

    if (hasRange) {
      const first = targetValue.match(/\d+/)?.[0] ?? "0";
      formatted = `${first}-${count}`;
    } else {
      formatted = count.toString();
    }

    if (hasPercent) {
      formatted += isArabic ? "٪" : "%";
    }

    if (hasPlus && !hasPercent) {
      formatted += "+";
    }

    return isArabic ? toArabicNumbers(formatted) : formatted;
  };

  return (
    <div ref={ref}>{isInView ? displayValue() : isArabic ? "٠" : "0"}</div>
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
                key={
                  variant === "counter"
                    ? (stat as CounterStat).value
                    : (stat as FeatureStat).value.en
                }
                variants={itemVariants}
                whileHover="hover"
                className="flex flex-col items-center"
              >
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
                      <AnimatedCounter
                        targetValue={(stat as CounterStat).value}
                      />
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
                      {isArabic
                        ? (stat as FeatureStat).value.ar
                        : (stat as FeatureStat).value.en}
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