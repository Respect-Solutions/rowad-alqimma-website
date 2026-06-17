"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

// Testimonials Data
const testimonials = [
  {
    quote: {
      en: "They handled everything from setup to licensing with complete professionalism. The process was smooth, fast, and fully transparent.",
      ar: "تولّى فريق رواد القمة جميع إجراءات التأسيس والترخيص باحترافية عالية. كانت العملية واضحة وسريعة، وتم تنفيذ كل خطوة بشفافية كاملة.",
    },

    name: {
      en: "Ahmed Al-Qahtani",
      ar: "أحمد القحطاني",
    },

    role: {
      en: "CEO, Al Riyadah Group",
      ar: "الرئيس التنفيذي، مجموعة الريادة",
    },

    avatar: "/assets/client1.png",
  },

  {
    quote: {
      en: "Working with them made entering the Saudi market much easier. Clear guidance, fast execution, and real results.",
      ar: "التعامل مع رواد القمة جعل دخولنا إلى السوق السعودي أكثر سهولة. حصلنا على توجيه واضح، وتنفيذ سريع، ونتائج حقيقية تجاوزت توقعاتنا.",
    },

    name: {
      en: "Khalid Al-Harbi",
      ar: "خالد الحربي",
    },

    role: {
      en: "Managing Director, Gulf Vision Co.",
      ar: "المدير التنفيذي، شركة جلف فيجن",
    },

    avatar: "/assets/client2.png",
  },
];


// Animation variants
const containerVariants: Variants = {
hidden: { opacity: 0 },

visible: {
opacity: 1,

transition: {
  staggerChildren: 0.15,
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
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
},


},
};

const cardHoverVariants: Variants = {
hover: {
y: -6,
borderColor: "rgba(255, 255, 255, 0.2)",


transition: {
  duration: 0.25,
  ease: "easeOut",
},


},
};

function TestimonialCard({
testimonial,
}: {
testimonial: (typeof testimonials)[0];
}) {
const { isArabic } = useLocale();

return (
  <motion.article
    whileHover="hover"
    className={`
    w-[85vw]
    shrink-0
    rounded-3xl
    border-2
    border-white/10
    bg-[#27354C]
    p-5
    sm:w-[420px]
    sm:p-7
    md:w-[560px]
    md:p-[34px]
    ${isArabic ? "text-right" : ""}
  `}
  >
    <motion.div
      variants={cardHoverVariants}
      className="flex h-full flex-col"
      style={{ willChange: "transform" }}
    >
      {" "}
      <p className="text-base leading-[1.8] text-soft sm:text-lg">
        "{isArabic ? testimonial.quote.ar : testimonial.quote.en}"{" "}
      </p>
      <div
        className={`mt-auto flex items-center gap-4 pt-6 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <span className="relative size-12 overflow-hidden rounded-xl">
          <Image
            alt={isArabic ? testimonial.name.ar : testimonial.name.en}
            fill
            src={testimonial.avatar}
            className="object-cover"
          />
        </span>

        <div>
          <strong className="block text-sm font-bold leading-[1.2] text-ink">
            {isArabic ? testimonial.name.ar : testimonial.name.en}
          </strong>

          <span className="block text-xs leading-[1.2] text-soft">
            {isArabic ? testimonial.role.ar : testimonial.role.en}
          </span>
        </div>
      </div>
    </motion.div>
  </motion.article>
);
}

export function Trust() {
const { isArabic } = useLocale();
const scrollContainerRef = useRef<HTMLDivElement>(null);

return ( <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-16"> <div className="absolute left-1/2 top-6 h-[300px] w-[90%] max-w-[732px] -translate-x-1/2 rounded-full blur-[75px] sm:h-[400px] md:h-[732px] md:w-[732px]" />


  <div className="relative mx-auto max-w-[1152px]">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className={`flex items-end gap-2 ${
          isArabic ? "flex-row-reverse justify-end" : ""
        }`}
      >
        <Image
          src="/assets/quote-mark.svg"
          alt="quote mark"
          width={26}
          height={18}
          className="h-auto w-auto"
        />

        <h2 className="text-2xl font-bold leading-[1.2] text-ink sm:text-4xl md:text-5xl">
          {isArabic ? "ثقة راسخة" : "Sovereign Trust"}
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        ref={scrollContainerRef}
        className={`
          mt-6
          flex
          gap-4
          overflow-x-auto
          rounded-2xl
          pb-4
          sm:mt-8
          ${isArabic ? "flex-row-reverse" : ""}
        `}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.3) transparent",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>

      <div className="mt-2 flex justify-center gap-1 md:hidden">
        <span className="h-1 w-6 rounded-full bg-white/30"></span>
        <span className="h-1 w-2 rounded-full bg-white/10"></span>
        <span className="h-1 w-2 rounded-full bg-white/10"></span>
      </div>
    </motion.div>
  </div>
</section>

);
}
