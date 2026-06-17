"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const insights = [
  {
    title: {
      en: "95% of Saudis use the internet",
      ar: "95٪ من السعوديين يستخدمون الإنترنت",
    },

    description: {
      en: "one of the highest usage rates in the world",
      ar: "من أعلى معدلات الاستخدام في العالم",
    },
  },

  {
    title: {
      en: "Snapchat, TikTok & Instagram",
      ar: "سناب شات، تيك توك وإنستجرام",
    },

    description: {
      en: "are the most influential platforms — not Facebook",
      ar: "هي المنصات الأكثر تأثيرًا وليس فيسبوك",
    },
  },

  {
    title: {
      en: "Saudi influencers",
      ar: "المؤثرون السعوديون",
    },

    description: {
      en: "have extraordinary impact on purchase decisions — more than traditional advertising",
      ar: "لهم تأثير كبير على قرارات الشراء أكثر من الإعلانات التقليدية",
    },
  },

  {
    title: {
      en: "Trust and credibility",
      ar: "الثقة والمصداقية",
    },

    description: {
      en: "are the first and second purchase drivers for Saudi consumers",
      ar: "هما أهم عوامل اتخاذ قرار الشراء لدى المستهلك السعودي",
    },
  },

  {
    title: {
      en: "Ramadan and religious seasons",
      ar: "رمضان والمواسم الدينية",
    },

    description: {
      en: "have unique marketing dynamics unlike any other market",
      ar: "لها ديناميكيات تسويقية مختلفة عن أي سوق آخر",
    },
  },

  {
    title: {
      en: "E-commerce grew 30%",
      ar: "نمو التجارة الإلكترونية 30٪",
    },

    description: {
      en: "in 2024 and continues to rise",
      ar: "في عام 2024 وما زال النمو مستمرًا",
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
      staggerChildren: 0.1,
      delayChildren: 0.15,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function MarketingInsights() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#27354CB2] py-24">
      <div className="mx-auto max-w-[1152px] px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
        >
          {/* Heading */}

          <motion.div variants={itemVariants} className="mx-auto text-center">
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[56px]">
              {isArabic
                ? "لماذا تحتاج إلى تسويق متخصص للسوق السعودي؟"
                : "Why You Need Specialized Marketing for the Saudi Market"}
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.8] text-white/55">
              {isArabic
                ? "قبل أن تنفق ريالًا واحدًا على الإعلانات، يجب أن تفهم من تخاطبه."
                : "Before you spend a single riyal on advertising, you need to understand who you're speaking to."}
            </p>

            <p className=" text-[18px] font-semibold text-white">
              {isArabic
                ? "المستهلك السعودي اليوم مختلف تمامًا عما كان عليه قبل خمس سنوات."
                : "The Saudi consumer in 2025 is radically different from five years ago:"}
            </p>
          </motion.div>
          {/* Cards */}

          <motion.div
            variants={containerVariants}
            className="
              mt-16
              grid
              gap-6

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {insights.map((item) => (
              <motion.div
                key={item.title.en}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  rounded-[22px]
                  border
                  border-white
                  bg-[#27354CB2;
]
                  px-8
                  py-8
                  text-center
                  transition-all
                  duration-300
                  hover:border-[#B9C7E4]
                  hover:bg-[#2A3D5B]
                "
              >
                <h3
                  className="
                    text-[18px]
                    font-bold
                    leading-[1.3]
                    text-white
                    whitespace-nowrap
                  "
                >
                  {isArabic ? item.title.ar : item.title.en}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-5
                    text-[14px]
                    leading-[1.8]
                    text-white/60
                  "
                >
                  {isArabic ? item.description.ar : item.description.en}
                </p>

                {/* Hover Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[160px]
                    w-[160px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#8FA8FF]/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#8FA8FF]/15
                  "
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Bottom Statement */}

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-16  text-center"
          >
            <p
              className="
                text-[16px]
                font-semibold
                leading-[1.8]
                text-white
                lg:text-[16px]
              "
            >
              {isArabic ? (
                <>
                  المستثمر الأجنبي الذي يدخل بعقلية سوقه المحلي{" "}
                  <span className="text-[#B9C7E4]">يخسر.</span>
                  <br />
                  والذي يفهم السوق السعودي{" "}
                  <span className="text-[#B9C7E4]">يفوز.</span>
                </>
              ) : (
                <>
                  The foreign investor who enters with their home market mindset
                  loses. The one who understands the Saudi market wins.
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}

      
    </section>
  );
}