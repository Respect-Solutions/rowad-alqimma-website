"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const reasons = [
  {
    title: {
      en: "We Understand the Saudi Market from the Inside",
      ar: "نفهم السوق السعودي من الداخل",
    },
    description: {
      en: "We're not an international marketing agency applying generic templates to the Saudi market. We live this market daily — we understand its culture, seasons, platforms, and consumers.",
      ar: "لسنا وكالة تطبق قوالب جاهزة، بل نعيش السوق السعودي وندرك ثقافته ومواسمه ومنصاته وسلوك المستهلك.",
    },
  },

  {
    title: {
      en: "We Connect Marketing to Business Reality",
      ar: "نربط التسويق بواقع الأعمال",
    },
    description: {
      en: "Our real advantage: we understand your company from the inside — from legal formation to operations — so our marketing reflects your company's actual reality and true goals.",
      ar: "نفهم شركتك من الداخل، من التأسيس وحتى التشغيل، لذلك تعكس خططنا التسويقية واقع نشاطك الحقيقي.",
    },
  },

  {
    title: {
      en: "Genuine Flexibility — One Service or All Services",
      ar: "مرونة حقيقية في اختيار الخدمات",
    },
    description: {
      en: "We don't force a package you don't need. You pay only for what you actually need.",
      ar: "لا نفرض باقة ثابتة، بل تختار ما تحتاجه فقط وتدفع مقابل الخدمات التي تناسبك.",
    },
  },

  {
    title: {
      en: "Full Transparency in Results & Costs",
      ar: "شفافية كاملة في النتائج والتكاليف",
    },
    description: {
      en: "Clear reports, real numbers, and no complex marketing jargon that hides actual results.",
      ar: "تقارير واضحة، أرقام حقيقية، وشفافية كاملة دون تعقيد أو مبالغة.",
    },
  },

  {
    title: {
      en: "Continuous WhatsApp Support",
      ar: "دعم مستمر عبر واتساب",
    },
    description: {
      en: "Our team is always available—for your questions, ideas, and any emergency that needs a quick response.",
      ar: "فريقنا متاح دائمًا للإجابة عن استفساراتك ومتابعة أي مستجدات بسرعة.",
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

export function WhyMarketingRowad() {
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
                ? "لماذا رواد القمة للتسويق؟"
                : "Why Rowad Al Qimma for Marketing?"}
            </h2>
          </motion.div>
          {/* Cards */}

          <motion.div variants={containerVariants} className="mt-16 space-y-8">
            {/* Top Row */}

            <div className="grid gap-6 lg:grid-cols-3">
              {reasons.slice(0, 3).map((item) => (
                <motion.div
                  key={item.title.en}
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
                    overflow-hidden

                    rounded-[24px]
                    border-2
                    border-[#FFFFFF1A]

                    bg-[#27354CB2]

                    p-8

                    backdrop-blur-[40px]

                    transition-all
                    duration-300

                    hover:border-[#B9C7E4]
                    hover:bg-[#2B3D58]
                  "
                >
                  <h3
                    className="
                      max-w-[260px]
                      text-[28px]
                      font-bold
                      leading-[1.25]
                      text-white
                    "
                  >
                    {isArabic ? item.title.ar : item.title.en}
                  </h3>

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

                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-[180px]
                      w-[180px]
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
            </div>
            {/* Bottom Row */}

            <div className="grid gap-6 lg:grid-cols-2">
              {reasons.slice(3).map((item) => (
                <motion.div
                  key={item.title.en}
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
                    overflow-hidden

                    rounded-[24px]
                    border-2
                    border-[#FFFFFF1A]

                    bg-[#27354CB2]

                    p-8

                    backdrop-blur-[40px]

                    transition-all
                    duration-300

                    hover:border-[#B9C7E4]
                    hover:bg-[#2B3D58]
                  "
                >
                  <h3
                    className="
                      text-[28px]
                      font-bold
                      leading-[1.25]
                      text-white
                    "
                  >
                    {isArabic ? item.title.ar : item.title.en}
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-[520px]
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
                      left-1/2
                      top-1/2
                      h-[220px]
                      w-[220px]
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
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}
    </section>
  );
}
