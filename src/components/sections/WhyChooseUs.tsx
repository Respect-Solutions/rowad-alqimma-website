"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const reasons = [
  {
    en: "+150 companies launched in the past year",
    ar: "+150 شركة تم تأسيسها خلال العام الماضي",
  },
  {
    en: "Specialized legal consultants",
    ar: "مستشارون قانونيون متخصصون",
  },
  {
    en: "Full transparency in all dealings",
    ar: "شفافية كاملة في جميع التعاملات",
  },
  {
    en: "Fast execution & delivery",
    ar: "سرعة في التنفيذ والتسليم",
  },
  {
    en: "Experience with multiple nationalities",
    ar: "خبرة مع جنسيات متعددة",
  },
  {
    en: "Honest and reliable information",
    ar: "معلومات دقيقة وموثوقة",
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
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function WhyChooseUs() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <div
        className="
          mx-auto
          max-w-[1152px]
          rounded-[28px]
          border
          border-white/10
          bg-[#27354CB2]
          px-6
          py-8
          sm:px-8
          sm:py-10
          lg:px-10
          lg:py-12
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <div
              className={`
                flex
                flex-wrap
                items-end
                gap-2
                sm:gap-3
                ${
                  isArabic
                    ? "justify-end text-right"
                    : "justify-start text-left"
                }
              `}
            >
              <h2 className="text-[34px] font-bold leading-none text-white sm:text-4xl lg:text-[52px]">
                {isArabic ? "لماذا رواد القمة" : "Why Choose Rowad Al Qimma "}
              </h2>

              <span className="mb-1 text-sm text-white/45 sm:mb-2 sm:text-base">
                {isArabic
                  ? "مستقبل البنية القانونية"
                  : "The Future of Legal Architecture"}
              </span>
            </div>

            <p
              className={`
                mt-4
                max-w-[920px]
                text-sm
                leading-[1.7]
                text-white/55
                sm:text-base
                ${isArabic ? "text-right" : "text-left"}
              `}
            >
              {isArabic
                ? "نقدم خدمات قانونية متخصصة للغاية للمشاريع الطموحة، من قلب الرياض وحتى مشاريع المستقبل مثل نيوم."
                : "We provide hyper-specialized legal services for the world's most ambitious projects. From the heart of Riyadh to the frontiers of NEOM."}
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            className="
              mt-8
              grid
              gap-4
              sm:mt-10
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.en}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(180,197,255,0.2)",
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  flex
                  min-h-[88px]
                  items-center
                  justify-center
                  rounded-[14px]
                  border
                  border-white/10
                  bg-[#14263D]
                  px-6
                  text-center
                "
              >
                <span className="text-sm font-semibold leading-[1.5] text-white sm:text-base">
                  {isArabic ? reason.ar : reason.en}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
