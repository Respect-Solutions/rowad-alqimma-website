"use client";

import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const values = [
  {
    id: "01",
    title: "Transparency",
    titleAr: "الشفافية",
    description:
      "No hidden fees, no empty promises. Everything is clear from the start.",
    descriptionAr:
      "نؤمن بأن الثقة تبدأ بالوضوح، لذلك نعرض جميع الإجراءات والتكاليف منذ البداية دون أي مفاجآت.",
    height: "xl:h-[498px]",
    paddingBottom: "pb-[160px]",
  },

  {
    id: "02",
    title: "Integrity",
    titleAr: "النزاهة",
    description: "We stand by what we say and deliver what we promise.",
    descriptionAr:
      "نلتزم بما نعد به، ونجعل المصداقية أساس كل تعامل مع عملائنا.",
    height: "xl:h-[466px]",
    paddingBottom: "pb-[128px]",
  },

  {
    id: "03",
    title: "Speed",
    titleAr: "سرعة الإنجاز",
    description:
      "We respect your time and work efficiently to complete your task quickly.",
    descriptionAr:
      "نعمل بكفاءة عالية لإنجاز جميع الإجراءات في أسرع وقت ممكن دون المساس بالجودة.",
    height: "xl:h-[434px]",
    paddingBottom: "pb-[96px]",
  },

  {
    id: "04",
    title: "True Partnership",
    titleAr: "شراكة حقيقية",
    description:
      "We are not just a service provider, we are invested in your success.",
    descriptionAr:
      "لا نكتفي بتقديم الخدمة، بل نعمل كشريك يرافقك في كل خطوة حتى تحقق أهدافك.",
    height: "xl:h-[402px]",
    paddingBottom: "pb-[40px]",
  },

  {
    id: "05",
    title: "Diverse Expertise",
    titleAr: "خبرة متنوعة",
    description:
      "We've served investors from multiple nationalities and industries.",
    descriptionAr:
      "خبرتنا تمتد إلى العمل مع مستثمرين من جنسيات وقطاعات مختلفة، مما يمنحنا فهماً عميقاً لاحتياجات كل عميل.",
    height: "xl:h-[370px]",
    paddingBottom: "pb-[40px]",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },

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

export function ValuesSection() {
  const { isArabic } = useLocale();

  return (
    <section className="bg-[#14263D] px-4 py-16 sm:px-6 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-[1152px]">
        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[38px] font-bold text-white sm:text-[50px] lg:text-[56px]"
          >
            {isArabic ? "قيمنا" : "Our Values"}
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-4 text-white/55">
            {isArabic
              ? "من البداية وحتى التميز التشغيلي."
              : "From onboarding to operational excellence."}
          </motion.p>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="
            mt-14
            grid
            gap-5
            sm:grid-cols-2
            xl:grid-cols-5
            xl:items-end
          "
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[42px]
                bg-[#27354CB2]
                px-8
                py-10
                backdrop-blur-sm
                ${value.height}
              `}
            >
              {/* Number */}

              <span className="block text-[64px] font-bold leading-none text-white/80">
                {value.id}
              </span>

              {/* Content */}

              <div className="mt-8">
                <h3 className="text-[22px] font-bold leading-[1.2] text-white">
                  {isArabic ? value.titleAr : value.title}
                </h3>

                <p className="mt-5 text-sm leading-[1.7] text-white/55">
                  {isArabic ? value.descriptionAr : value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
