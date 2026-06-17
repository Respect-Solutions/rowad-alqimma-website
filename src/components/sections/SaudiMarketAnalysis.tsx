"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const analysisItems = [
  {
    title: {
      en: "Market Size & Growth Opportunity Assessment",
      ar: "تقييم حجم السوق وفرص النمو",
    },
    description: {
      en: "We measure your target market's size, expected growth rates, and the most promising sectors for your specific activity — with real numbers, not guesses.",
      ar: "نقوم بتحليل حجم السوق ومعدلات النمو والقطاعات الواعدة اعتمادًا على بيانات حقيقية.",
    },
  },

  {
    title: {
      en: "Local & International Competitor Analysis",
      ar: "تحليل المنافسين المحليين والدوليين",
    },
    description: {
      en: "Who are your competitors in Saudi Arabia? What are their strengths and weaknesses? Where is the market gap you can fill?",
      ar: "تحليل المنافسين ونقاط القوة والضعف والفرص المتاحة داخل السوق السعودي.",
    },
  },

  {
    title: {
      en: "Saudi Consumer Behavior Understanding",
      ar: "فهم سلوك المستهلك السعودي",
    },
    description: {
      en: "Understand where your customers spend time, what influences their decisions, and why they trust specific brands.",
      ar: "فهم سلوك المستهلك والعوامل المؤثرة في قراراته الشرائية.",
    },
  },

  {
    title: {
      en: "Precise Target Audience Definition",
      ar: "تحديد الجمهور المستهدف",
    },
    description: {
      en: "We identify your ideal customer based on demographics, purchasing power, interests, and preferred channels.",
      ar: "تحديد الجمهور المستهدف بناءً على العمر والاهتمامات والقوة الشرائية.",
    },
  },

  {
    title: {
      en: "Keyword & Digital Search Analysis",
      ar: "تحليل الكلمات المفتاحية",
    },
    description: {
      en: "Search demand analysis across Google, YouTube, Snapchat, TikTok, and other platforms relevant to your sector.",
      ar: "تحليل عمليات البحث والكلمات المفتاحية الخاصة بنشاطك.",
    },
  },

  {
    title: {
      en: "Actionable Strategic Recommendations",
      ar: "توصيات استراتيجية عملية",
    },
    description: {
      en: "Receive a clear, data-driven roadmap for entering and growing inside the Saudi market.",
      ar: "خطة واضحة مبنية على البيانات تساعدك على دخول السوق السعودي والنمو فيه.",
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

export function SaudiMarketAnalysis() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] py-24">
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

          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-[900px] text-center"
          >
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[56px]">
              {isArabic ? "تحليل السوق السعودي" : "Saudi Market Analysis"}
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[1.8] text-white/60">
              {isArabic
                ? "تحليل السوق ليس رفاهية، بل هو الخطوة التي تحدد نجاح كل خطوة تالية."
                : "Market analysis isn't a luxury — it's the step that determines the success of every step that follows."}
            </p>

            <h3 className="mt-2 text-[22px] font-semibold text-white">
              {isArabic
                ? "ماذا يتضمن تحليل السوق السعودي؟"
                : "What Does Saudi Market Analysis Include?"}
            </h3>
          </motion.div>
          {/* Analysis Cards */}

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
            {analysisItems.map((item) => (
              <motion.div
                key={item.title.en}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
                  group
                  relative
                  flex
                  flex-col

                  transition-all
                  duration-300

                  hover:border-[#B9C7E4]
                  hover:bg-[#2D3C55]

  rounded-[24px]
  border-2
  border-[#FFFFFF1A]
  bg-[#27354CB2]
  p-8
  backdrop-blur-[40px]
                "
              >
                {/* Title */}

                <h3
                  className="
                    text-[24px]
                    font-bold
                    leading-[1.3]
                    text-white
                  "
                >
                  {isArabic ? item.title.ar : item.title.en}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-6
                    text-[16px]
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
                    inset-0
                    rounded-[24px]
                    bg-[#8FA8FF]/0
                    transition-all
                    duration-500
                    group-hover:bg-[#8FA8FF]/5
                  "
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Bottom Statement */}

          
        </motion.div>
      </div>

      {/* Background Glow */}

      
      
    </section>
  );
}