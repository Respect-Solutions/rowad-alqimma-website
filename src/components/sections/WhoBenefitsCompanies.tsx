"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const beneficiaries = [
  {
    number: "1",
    title: {
      en: "Established Companies",
      ar: "الشركات القائمة",
    },
    description: {
      en: "that need to improve their internal management systems and operational efficiency.",
      ar: "التي تحتاج إلى تطوير أنظمتها الإدارية ورفع كفاءة التشغيل.",
    },
  },

  {
    number: "2",
    title: {
      en: "International Companies",
      ar: "الشركات الدولية",
    },
    description: {
      en: "expanding into Saudi Arabia and looking for administrative guidance that aligns with local regulations.",
      ar: "التي تتوسع داخل المملكة وتحتاج إلى إدارة تتوافق مع الأنظمة السعودية.",
    },
  },

  {
    number: "3",
    title: {
      en: "Growing Businesses",
      ar: "الشركات المتنامية",
    },
    description: {
      en: "that need scalable administrative processes before expanding further.",
      ar: "التي تحتاج إلى تطوير عملياتها الإدارية قبل مرحلة التوسع.",
    },
  },

  {
    number: "4",
    title: {
      en: "Organizations Under Restructuring",
      ar: "الشركات التي تعيد الهيكلة",
    },
    description: {
      en: "looking to optimize workflows, responsibilities, and organizational performance.",
      ar: "التي تسعى لإعادة تنظيم الهيكل الإداري وتحسين الأداء.",
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

export function WhoBenefitsCompanies() {
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

          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[58px]">
              {isArabic
                ? "من المستفيد أكثر من هذه الخدمة؟"
                : "Who Benefits Most from This Service?"}
            </h2>

            <p className="mt-5 text-[16px] leading-[1.8] text-white/55 sm:text-[18px]">
              {isArabic
                ? "تم تصميم هذه الخدمة خصيصًا للشركات التي تسعى إلى تطوير إدارتها وتحقيق نمو مستدام."
                : "Our service is designed specifically for companies seeking stronger management and sustainable growth."}
            </p>
          </motion.div>
          {/* Items */}

          <motion.div
            variants={containerVariants}
            className="
              mt-20
              grid
              gap-x-24
              gap-y-20

              md:grid-cols-2
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
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Circle */}

                <div
                  className="
                    relative
                    z-10
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
                    max-w-[320px]
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
                    mt-5
                    max-w-[340px]
                    text-[16px]
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