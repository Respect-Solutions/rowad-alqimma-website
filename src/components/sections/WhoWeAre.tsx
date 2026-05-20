"use client";

import { motion, type Variants } from "framer-motion";
import { bentoCards } from "@/data/site";
import { IconImage } from "@/components/ui/IconImage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLocale } from "@/hooks/useLocale";

export function WhoWeAre() {
  const { isArabic } = useLocale();

  // ─── Animation Variants ─────────────────────────────────────────────

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -6,

      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },

    tap: {
      scale: 0.98,
    },
  };

  // ─── Render ─────────────────────────────────────────────────────────

  return (
    <section className="rounded-[32px] bg-main px-5 py-14 sm:px-6 md:rounded-[48px] md:px-10 md:py-16 lg:px-16">
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
          
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <SectionTitle
              title={isArabic ? "من نحن" : "Who We Are"}
              subtitle={
                isArabic
                  ? "نحن لا نقدم الدعم القانوني فقط، بل نصمم وننفذ ونطوّر البنية التحتية للأعمال."
                  : "We don't just provide legal support we design, execute, and scale business infrastructure."
              }
            />
          </motion.div>

          {/* Cards */}
          <motion.div
            className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-3"
            variants={containerVariants}
          >
            {bentoCards.map((card) => {
              const isLight =
                "light" in card && card.light;

              const className =
                "className" in card
                  ? card.className
                  : "";

              // ─── Translations ─────────────────────────────

              const titles = {
                "Command Center System": isArabic
                  ? "نظام مركز التحكم"
                  : "Command Center System",

                "Speed & Efficiency": isArabic
                  ? "السرعة والكفاءة"
                  : "Speed & Efficiency",

                Transparency: isArabic
                  ? "الشفافية"
                  : "Transparency",

                "Execution First": isArabic
                  ? "التنفيذ أولاً"
                  : "Execution First",
              };

              const bodies = {
                "Command Center System": isArabic
                  ? "يمنحك نظامنا المتكامل رؤية كاملة لكل خطوة، من التوثيق وحتى التنفيذ، لضمان أن يكون عملك منظمًا ومتوافقًا وجاهزًا للنمو."
                  : card.body,

                "Speed & Efficiency": isArabic
                  ? "نسرّع عملية التأسيس من خلال إجراءات محسّنة وقنوات تنظيمية مباشرة لتقليل التأخير وتشغيل أعمالك بسرعة."
                  : card.body,

                Transparency: isArabic
                  ? "كل خطوة ومستند وتكلفة يتم توضيحها وتنظيمها بشكل كامل لتمنحك الثقة والسيطرة طوال الرحلة."
                  : card.body,

                "Execution First": isArabic
                  ? "نحن لا نتوقف عند تقديم النصائح، بل ننفذ وندير ونحقق النتائج لتحويل الخطط إلى أعمال حقيقية."
                  : card.body,
              };

              const translatedTitle =
                titles[
                  card.title as keyof typeof titles
                ];

              const translatedBody =
                bodies[
                  card.title as keyof typeof bodies
                ];

              return (
                <motion.article
                  key={card.title}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`flex min-h-[260px] flex-col justify-center rounded-[28px] border-2 p-6 transition-all sm:min-h-[280px] sm:p-8 ${
                    isLight
                      ? "border-transparent bg-accent text-main"
                      : "border-white/10 bg-card/70 text-ink"
                  } ${className}`}
                >
                  <motion.div variants={cardHoverVariants}>
                    
                    {/* Title */}
                    <h3
                      className={`text-[28px] font-bold leading-[1.2] sm:text-[32px] ${
                        isLight
                          ? "text-main"
                          : "text-ink"
                      }`}
                    >
                      {translatedTitle}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-4 text-base leading-[1.6] sm:text-lg ${
                        isLight
                          ? "text-graphite"
                          : "text-soft"
                      }`}
                    >
                      {translatedBody}
                    </p>

                    {/* Arrow */}
                    {"action" in card ? (
                      <motion.a
                        className="mt-8 flex items-center gap-2 text-base font-bold leading-[1.2] text-ink"
                        href="#"
                        whileHover={{
                          x: 4,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <IconImage
                          name="arrowRight"
                          size={14}
                        />
                      </motion.a>
                    ) : null}
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
