"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const steps = [
  {
    number: "01",
    title: {
      en: "Data & Document Collection",
      ar: "جمع البيانات والمستندات",
    },
    description: {
      en: "We begin by understanding your business activity and collecting all required information before starting the incorporation process.",
      ar: "نبدأ بفهم نشاطك التجاري وجمع جميع البيانات والمستندات المطلوبة قبل بدء إجراءات التأسيس.",
    },
  },

  {
    number: "02",
    title: {
      en: "External Company Document Preparation",
      ar: "إعداد مستندات الشركة الأم",
    },
    description: {
      en: "Our legal team prepares every required document according to Saudi regulations before submission.",
      ar: "يقوم فريقنا القانوني بإعداد جميع المستندات وفقًا للوائح والأنظمة السعودية.",
    },
  },

  {
    number: "03",
    title: {
      en: "Official Document Attestation",
      ar: "تصديق المستندات",
    },
    description: {
      en: "All documents are authenticated through the relevant authorities inside and outside Saudi Arabia.",
      ar: "يتم تصديق جميع المستندات من الجهات الرسمية داخل المملكة وخارجها.",
    },
  },

  {
    number: "04",
    title: {
      en: "MISA Registration & Investment License",
      ar: "ترخيص الاستثمار",
    },
    description: {
      en: "We obtain your investment license and complete all Ministry procedures.",
      ar: "نستخرج ترخيص الاستثمار ونستكمل جميع إجراءات الوزارة.",
    },
  },

  {
    number: "05",
    title: {
      en: "Trade Name Reservation",
      ar: "حجز الاسم التجاري",
    },
    description: {
      en: "We reserve your preferred trade name and prepare the commercial registration.",
      ar: "نقوم بحجز الاسم التجاري واستكمال جميع الإجراءات المرتبطة به.",
    },
  },

  {
    number: "06",
    title: {
      en: "Commercial Registration Issuance",
      ar: "إصدار السجل التجاري",
    },
    description: {
      en: "Your company becomes officially established and ready to operate inside Saudi Arabia.",
      ar: "تصبح شركتك جاهزة رسميًا للعمل داخل المملكة العربية السعودية.",
    },
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },

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
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: .55,
      ease: "easeOut",
    },
  },
};

export function CompanyFormationSteps() {
  const { isArabic } = useLocale();

  return (
    <section className="bg-[#14263D] py-24">
      <div className="mx-auto max-w-[1152px] px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}

          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-[900px] text-center"
          >
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[56px]">
              {isArabic
                ? "كيف نؤسس شركتك داخل المملكة؟"
                : "How We Establish Your Company in Saudi Arabia"}
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.8] text-white/55 sm:text-[18px]">
              {isArabic
                ? "نتولى جميع الإجراءات القانونية والإدارية حتى تصبح شركتك جاهزة للعمل داخل المملكة العربية السعودية."
                : "Our team manages every legal and administrative step required to establish your company inside Saudi Arabia from start to finish."}
            </p>
          </motion.div>

          {/* Timeline */}

          <motion.div
            variants={containerVariants}
            className="
              relative
              mt-20
              grid
              gap-y-20
              gap-x-12
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {/* Horizontal Line */}

            
            {/* Bottom Row Line */}
            

            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
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
                    h-[88px]
                    w-[88px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white/10
                    bg-[#243550]
                    transition-all
                    duration-300
                    group-hover:border-[#B9C7E4]
                    group-hover:shadow-[0_0_40px_rgba(185,199,228,.25)]
                  "
                >
                  <span className="text-[30px] font-bold text-white">
                    {step.number}
                  </span>
                </div>
                {/* Title */}

                <h3
                  className="
                    mt-8
                    max-w-[310px]
                    text-[24px]
                    font-bold
                    leading-[1.3]
                    text-white
                    lg:text-[28px]
                  "
                >
                  {isArabic ? step.title.ar : step.title.en}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-[310px]
                    text-[15px]
                    leading-[1.9]
                    text-white/55
                    lg:text-[16px]
                  "
                >
                  {isArabic ? step.description.ar : step.description.en}
                </p>

                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    top-0
                    h-[90px]
                    w-[90px]
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

      

      {/* Decorative Rings */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-52
            top-24
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-white/5
          "
        />

        <div
          className="
            absolute
            -right-56
            bottom-20
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-white/5
          "
        />
      </div>
    </section>
  );
}