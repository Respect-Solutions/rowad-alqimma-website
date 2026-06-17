"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const benefits = [
  {
    title: {
      en: "100% ownership — no Saudi partner required",
      ar: "ملكية أجنبية 100% دون الحاجة إلى شريك سعودي",
    },

    description: {
      en: "Under the new Investment Law, qualified foreign investors can establish wholly-owned companies in many sectors without requiring a Saudi partner.",
      ar: "بموجب نظام الاستثمار الجديد يمكن للمستثمر الأجنبي تأسيس شركة مملوكة بالكامل في العديد من القطاعات.",
    },

    wide: false,
  },

  {
    title: {
      en: "An economy in genuine boom",
      ar: "اقتصاد يشهد نمواً حقيقياً",
    },

    description: {
      en: "Foreign Direct Investment exceeded record levels while major sectors continue expanding rapidly across technology, healthcare, logistics and renewable energy.",
      ar: "يشهد الاقتصاد السعودي نمواً متسارعاً مع توسع كبير في قطاعات التقنية والخدمات اللوجستية والطاقة.",
    },

    wide: false,
  },

  {
    title: {
      en: "Mega-projects creating unprecedented opportunity",
      ar: "المشاريع العملاقة تخلق فرصاً غير مسبوقة",
    },

    description: {
      en: "NEOM, Qiddiya, Red Sea Development, Riyadh Vision and dozens of giga-projects continue creating opportunities across every industry.",
      ar: "مشروعات نيوم والبحر الأحمر والقدية وغيرها تخلق آلاف الفرص الاستثمارية الجديدة.",
    },

    wide: true,
  },

  {
    title: {
      en: "Full equality between foreign and local investors",
      ar: "مساواة كاملة بين المستثمر المحلي والأجنبي",
    },

    description: {
      en: "Modern regulations guarantee equal treatment, legal protection and investment opportunities.",
      ar: "تضمن الأنظمة الحديثة المساواة الكاملة في الحقوق والامتيازات الاستثمارية.",
    },

    wide: false,
  },

  {
    title: {
      en: "Competitive tax incentives",
      ar: "حوافز ضريبية تنافسية",
    },

    description: {
      en: "Saudi Arabia offers competitive tax incentives supporting manufacturing, technology and strategic industries.",
      ar: "تقدم المملكة مزايا ضريبية وتشغيلية تجعلها من أكثر الأسواق تنافسية.",
    },

    wide: false,
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
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function WhyForeign() {
  const { isArabic } = useLocale();

  return (
    <section className="bg-[#14263D] px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-[1152px]">
        {" "}
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
            className="mx-auto  text-center"
          >
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[56px]">
              {isArabic
                ? "لماذا يختار المستثمرون الأجانب المملكة العربية السعودية؟"
                : "Why Are Foreign Investors Choosing Saudi Arabia in 2025?"}
            </h2>

            <p className="mx-auto mt-6 text-[16px] leading-[1.8] text-white/55 sm:text-[18px]">
              {isArabic
                ? "في ظل رؤية المملكة 2030 أصبحت السعودية واحدة من أسرع الاقتصادات نمواً في العالم، وتوفر اليوم فرصاً استثمارية استثنائية للمستثمرين المحليين والدوليين."
                : "Under Vision 2030, the Kingdom of Saudi Arabia has transformed into one of the fastest-growing economies in the world. Today, foreign investors enjoy rights that didn't exist before — and opportunities you won't find in any competing market."}
            </p>
          </motion.div>

          {/* Cards */}

          <motion.div
            variants={containerVariants}
            className="mt-14 grid gap-5 lg:grid-cols-2"
          >
            {benefits.map((benefit) => (
              <motion.article
                key={benefit.title.en}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className={`
                  rounded-[22px]
                  border
                  border-white/10
                  bg-[#27354CB2]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-[#31415CB2]

                  ${benefit.wide ? "lg:col-span-2" : ""}

                  ${isArabic ? "text-right" : "text-center"}
                `}
              >
                <h3
                  className={`
                    text-[22px]
                    font-bold
                    leading-[1.4]
                    text-white

                    ${
                      benefit.wide
                        ? "mx-auto max-w-[820px] text-center text-[24px] lg:text-[28px]"
                        : ""
                    }
                  `}
                >
                  {isArabic ? benefit.title.ar : benefit.title.en}
                </h3>

                <p
                  className={`
                    mt-5
                    text-[15px]
                    leading-[1.8]
                    text-white/55
                    lg:text-[16px]

                    ${benefit.wide ? "mx-auto max-w-[900px] text-center" : ""}
                  `}
                >
                  {isArabic ? benefit.description.ar : benefit.description.en}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}