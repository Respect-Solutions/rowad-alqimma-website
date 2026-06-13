"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
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
        className="mx-auto mt-10 grid max-w-[1152px] items-center gap-8 sm:mt-12 sm:gap-10 md:mt-16 lg:grid-cols-[1.1fr_420px] lg:gap-12"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants}>
          <div className="py-2 sm:py-4 md:py-6">
            <motion.h1
              variants={itemVariants}
              className="text-[42px] font-bold text-white sm:text-[52px]"
            >
              {isArabic ? "من نحن" : "About Us"}
            </motion.h1>

            <div className="mt-8 max-w-[620px] space-y-8">
              <p className="text-lg leading-[1.6] text-white/65">
                {isArabic
                  ? "رواد القمة شركة متخصصة في تأسيس الشركات الأجنبية داخل المملكة العربية السعودية، وتقديم الاستشارات الإدارية والقانونية والتسويقية للمستثمرين الراغبين في دخول السوق السعودي."
                  : "Rowad Al Qimma is a specialized firm in establishing foreign companies inside the Kingdom of Saudi Arabia, providing administrative, legal, and marketing consultations to investors seeking to enter the Saudi market."}
              </p>

              <p className="text-lg leading-[1.6] text-white/65">
                {isArabic
                  ? "تأسست الشركة بهدف أن تكون الجسر الموثوق بين المستثمرين العرب والدوليين وبين الفرص الاستثمارية الهائلة التي توفرها المملكة العربية السعودية ضمن رؤية 2030."
                  : "We were founded with one clear goal: to be the trusted bridge connecting Arab and international investors with the immense growth opportunities offered by the Saudi market under Vision 2030."}
              </p>

              <p className="text-lg leading-[1.6] text-white/65">
                {isArabic
                  ? "في أقل من عام، ساعدنا على تأسيس أكثر من 150 شركة لمستثمرين من جنسيات مختلفة حول العالم وما زلنا نواصل النمو."
                  : "In less than a year, we launched over 150 companies for investors of different nationalities around the world — and we're still growing."}
              </p>
            </div>

            <motion.p
              variants={itemVariants}
              className="mt-3 max-w-[576px] text-sm leading-[1.8] text-muted sm:mt-4 sm:text-lg"
            >
              {isArabic
                ? "تقف رواد القمة عند نقطة التقاء القيم السعودية الأصيلة والمعايير العالمية الحديثة للأعمال، لنقدم البنية المؤسسية التي تساعد المستثمرين المحليين والدوليين على النجاح ضمن رؤية 2030."
                : "Rowad Al Qimma Consultancy stands at the intersection of traditional Saudi values and modern global business standards. We provide the structural backbone for foreign and domestic investors to thrive within Vision 2030's framework."}
            </motion.p>
          </div>
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

