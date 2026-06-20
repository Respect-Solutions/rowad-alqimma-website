"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const structures = [
  {
    number: "01",

    title: {
      en: "Limited Liability Company (LLC)",
      ar: "شركة ذات مسؤولية محدودة",
    },

    description: {
      en: "The most common structure for foreign investors. 100% foreign ownership, limited liability, and management flexibility. Suitable for most commercial, service, and technology sectors. Minimum capital: SAR 500,000 in most sectors.",
      ar: "أكثر أنواع الشركات استخدامًا للمستثمرين الأجانب، مع ملكية كاملة ومرونة في الإدارة وحماية للمسؤولية.",
    },
  },

  {
    number: "02",

    title: {
      en: "Foreign Company Branch",
      ar: "فرع شركة أجنبية",
    },

    description: {
      en: " If you already have an established company outside the Kingdom and want to open an official branch inside the Saudi market. The branch operates under your parent company's name and legal identity.",
      ar: "إذا كان لديك شركة قائمة خارج المملكة وترغب في التوسع داخل السوق السعودي بنفس الهوية القانونية.",
    },
  },

  {
    number: "03",

    title: {
      en: "Simplified Joint Stock Company",
      ar: "شركة مساهمة مبسطة",
    },

    description: {
      en: " For fast-scaling ventures and entrepreneurs planning to attract future investors. Greater flexibility in ownership structure and share distribution.",
      ar: "خيار مناسب للشركات الناشئة ورواد الأعمال الباحثين عن مرونة أكبر في هيكل الملكية.",
    },
  },

  {
    number: "04",

    title: {
      en: "Single-Person Company",
      ar: "شركة الشخص الواحد",
    },

    description: {
      en: "For the individual foreign entrepreneur looking to establish formally under their personal name — fully recognized legally inside the Kingdom.",
      ar: "حل مثالي لرواد الأعمال الراغبين في تأسيس شركة مملوكة بالكامل داخل المملكة.",
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
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export function CompanyStructures() {
  const { isArabic } = useLocale();

  return (
    <section className="bg-[#14263D] px-4 py-20 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-[1152px]">
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
            className="mx-auto text-center"
          >
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[56px]">
              {isArabic
                ? "ما هو هيكل الشركة المناسب لك؟"
                : "Which Company Structure Is Right for You?"}
            </h2>

            <p className="mx-auto mt-6 text-[16px] leading-[1.8] text-white/55 sm:text-[18px]">
              {isArabic
                ? "يعتمد اختيار الكيان القانوني المناسب على طبيعة نشاطك وأهدافك الاستثمارية وخططك المستقبلية داخل المملكة."
                : "Under Vision 2030, the Kingdom of Saudi Arabia has transformed into one of the fastest-growing economies in the world. Today, foreign investors enjoy rights that didn't exist before — and opportunities you won't find in any competing market."}
            </p>
          </motion.div>

          {/* Cards */}

          <motion.div
            variants={containerVariants}
            className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {structures.map((structure) => (
              <motion.article
                key={structure.number}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[430px]
                  flex-col
                  rounded-[32px]
                  border
                  border-white/10
                  bg-[#27354CB2]
                  px-7
                  py-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#B9C7E4]/40
                  hover:bg-[#31415CB2]
                "
              >
                {/* Number */}

                <span
                  className="
                    absolute
                    bottom-7
                    right-7
                    text-[58px]
                    font-bold
                    leading-none
                    text-white/70
                    transition
                    duration-300
                    group-hover:text-[#B9C7E4]
                  "
                >
                  {structure.number}
                </span>

                {/* Title */}

                <h3
                  className="
                    text-[24px]
                    font-bold
                    leading-[1.3]
                    text-white
                  "
                >
                  {isArabic ? structure.title.ar : structure.title.en}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-7
                    text-[15px]
                    leading-[1.8]
                    text-white/55
                  "
                >
                  {isArabic
                    ? structure.description.ar
                    : structure.description.en}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}

      

      {/* Decorative Rings */}

      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-52 top-20 h-[420px] w-[420px] rounded-full border border-white/5" />

        <div className="absolute -right-52 bottom-20 h-[520px] w-[520px] rounded-full border border-white/5" />
      </div> */}
    </section>
  );
}