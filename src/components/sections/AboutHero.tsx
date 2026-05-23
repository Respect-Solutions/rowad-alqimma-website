"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { aboutFeatures } from "@/data/site";
import { assets } from "@/lib/assets";
import { Header } from "../layout/Header";
import { useLocale } from "@/hooks/useLocale";

// Animation variants
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const featureHoverVariants: Variants = {
  hover: {
    x: 6,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export function AboutHero() {
  const { isArabic } = useLocale();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="px-4 pb-10 pt-4 sm:px-6 sm:pb-12 md:px-16 md:pb-16"
    >
      {/* Navbar */}
      <Header active="About" />

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto mt-10 grid max-w-[1152px] items-center gap-8 sm:mt-12 sm:gap-10 md:mt-16 lg:grid-cols-[1fr_528px] lg:gap-12"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants}>
          <div className="py-2 sm:py-4 md:py-6">
            <motion.h1
              variants={itemVariants}
              className="max-w-[576px] text-[30px] font-bold leading-[1.2] text-ink sm:text-4xl md:text-[40px]"
            >
              {isArabic
                ? "نقود الأنظمة القانونية بدقة واحترافية"
                : "Navigating Regulations with Precision"}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-3 max-w-[576px] text-sm leading-[1.8] text-muted sm:mt-4 sm:text-lg"
            >
              {isArabic
                ? "تقف رواد القمة عند نقطة التقاء القيم السعودية الأصيلة والمعايير العالمية الحديثة للأعمال، لنقدم البنية المؤسسية التي تساعد المستثمرين المحليين والدوليين على النجاح ضمن رؤية 2030."
                : "ROAD ELQAMA Consultancy stands at the intersection of traditional Saudi values and modern global business standards. We provide the structural backbone for foreign and domestic investors to thrive within Vision 2030's framework."}
            </motion.p>
          </div>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            className="mt-2 flex flex-col gap-5 py-2 sm:mt-4 sm:gap-6 sm:py-4 md:gap-8 md:py-6"
          >
            {aboutFeatures.map((feature) => {
              const currentFeature = feature as {
                label: string;
                icon: "featurePin" | "featureRegulation" | "featureSupport";
              };

              const translatedLabel =
                currentFeature.label === "Fast company formation"
                  ? isArabic
                    ? "تأسيس سريع للشركات"
                    : currentFeature.label
                  : currentFeature.label ===
                      "Deep knowledge of Saudi regulations"
                    ? isArabic
                      ? "خبرة عميقة بالأنظمة السعودية"
                      : currentFeature.label
                    : currentFeature.label === "End-to-end support"
                      ? isArabic
                        ? "دعم متكامل من البداية للنهاية"
                        : currentFeature.label
                      : currentFeature.label;

              return (
                <motion.div
                  key={currentFeature.label}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`flex items-center gap-3 sm:gap-6 ${
                    isArabic ? "justify-start text-right" : ""
                  }`}
                >
                  <motion.span
                    variants={featureHoverVariants}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#ebf1ff]/10 sm:size-12"
                  >
                    <Image
                      src={
                        currentFeature.icon === "featurePin"
                          ? "/assets/featurePin.svg"
                          : currentFeature.icon === "featureRegulation"
                            ? "/assets/featureRegulation.svg"
                            : "/assets/featureSupport.svg"
                      }
                      alt={translatedLabel}
                      width={22}
                      height={22}
                      className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                    />
                  </motion.span>

                  <span
                    className={`text-lg font-bold leading-[1.3] text-soft sm:text-[22px] ${
                      isArabic ? "order-1" : ""
                    }`}
                  >
                    {translatedLabel}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={itemVariants}
          className="relative flex h-[340px] overflow-hidden rounded-[24px] sm:h-[480px] sm:rounded-[32px] md:h-[544px]"
        >
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            src={assets.heroPerson}
            unoptimized
          />

          <div className="relative mt-auto flex h-[150px] w-full items-center justify-center rounded-[24px] border-l border-t border-white/10 bg-gradient-to-b from-[#5b7cb2]/0 to-[#27354c]/25 p-5 text-center backdrop-blur-[32px] sm:h-[200px] sm:rounded-[32px] sm:p-8 md:h-[211px] md:p-12">
            <p className="text-lg leading-[1.5] text-ink sm:text-[28px] md:text-[32px]">
              {isArabic ? (
                <>
                  "نحن لا نقدم الاستشارات فقط،
                  <br />
                  بل ننفذ رؤية
                  <br />
                  مشروعك بالكامل."
                </>
              ) : (
                <>
                  "We don't just consult;
                  <br />
                  we execute the vision of
                  <br />
                  your enterprise."
                </>
              )}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

