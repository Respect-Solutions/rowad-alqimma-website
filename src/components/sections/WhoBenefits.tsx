"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const beneficiaries = [
  {
    number: "1",
    title: {
      en: "The new foreign investor",
      ar: "المستثمر الأجنبي الجديد",
    },
    description: {
      en: "who has formed a company and needs to run it the right way.",
      ar: "الذي أسس شركته ويحتاج إلى إدارتها بالطريقة الصحيحة.",
    },
  },

  {
    number: "2",
    title: {
      en: "International companies",
      ar: "الشركات الدولية",
    },
    description: {
      en: "looking to open a branch or expand operations inside the Kingdom.",
      ar: "التي ترغب في افتتاح فرع أو التوسع داخل المملكة.",
    },
  },

  {
    number: "3",
    title: {
      en: "Solo entrepreneurs",
      ar: "رواد الأعمال الأفراد",
    },
    description: {
      en: "who need administrative support without hiring a full team.",
      ar: "الذين يحتاجون إلى دعم إداري دون توظيف فريق كامل.",
    },
  },

  {
    number: "4",
    title: {
      en: "Growing companies",
      ar: "الشركات المتنامية",
    },
    description: {
      en: "that have passed the launch phase and want professional restructuring.",
      ar: "التي تجاوزت مرحلة التأسيس وتحتاج إلى إعادة هيكلة احترافية.",
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

export function WhoBenefits() {
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
          {" "}
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="mx-auto text-center"
          >
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[58px]">
              {isArabic
                ? "من المستفيد من هذه الخدمة؟"
                : "Who Benefits Most from This Service?"}
            </h2>

            <p className="mt-5 text-[16px] leading-[1.8] text-white/55 sm:text-[18px]">
              {isArabic
                ? "تم تصميم هذه الخدمة خصيصًا لـ"
                : "Our service is designed specifically for:"}
            </p>
          </motion.div>
          {/* Items */}
          <motion.div
            variants={containerVariants}
            className="
              mt-20
              grid
              gap-10

              sm:grid-cols-2

              xl:grid-cols-4
            "
          >
            {beneficiaries.map((item) => (
              <motion.div
                key={item.number}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Circle */}

                <div
                  className="
                    flex
                    h-[92px]
                    w-[92px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white/10
                    bg-[#243550]
                    transition-all
                    duration-300
                    group-hover:border-[#B9C7E4]
                    group-hover:shadow-[0_0_40px_rgba(185,199,228,.2)]
                  "
                >
                  <span className="text-[34px] font-bold text-white">
                    {item.number}
                  </span>
                </div>
                {/* Title */}

                <h3
                  className="
                    mt-8
                    text-[18px]
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
                    mt-4
                    max-w-[230px]
                    text-[15px]
                    leading-[1.8]
                    text-white/55
                  "
                >
                  {isArabic ? item.description.ar : item.description.en}
                </p>

                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    top-0
                    h-[120px]
                    w-[120px]
                    rounded-full
                    bg-[#8FA8FF]/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#8FA8FF]/20
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}

      

      
    </section>
  );
}