"use client";

import { bentoCards } from "@/data/site";
import { IconImage } from "@/components/ui/IconImage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLocale } from "@/hooks/useLocale";

export function WhoWeAre() {
  const { isArabic } = useLocale();

  return (
    <section className="rounded-[48px] bg-main px-6 py-16 md:px-16">
      <div className="mx-auto max-w-[1152px]">
        <SectionTitle
          title={isArabic ? "من نحن" : "Who We Are"}
          subtitle={
            isArabic
              ? "نحن لا نقدم الدعم القانوني فقط، بل نصمم وننفذ ونطوّر البنية التحتية للأعمال."
              : "We don’t just provide legal support we design, execute, and scale business infrastructure."
          }
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {bentoCards.map((card) => {
            const isLight = "light" in card && card.light;

            const className =
              "className" in card
                ? card.className
                : "";

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
              titles[card.title as keyof typeof titles];

            const translatedBody =
              bodies[card.title as keyof typeof bodies];

            return (
              <article
                className={`flex min-h-[280px] flex-col justify-center rounded-3xl border-2 p-8 ${
                  isLight
                    ? "border-transparent bg-accent text-main"
                    : "border-white/10 bg-card/70 text-ink"
                } ${className}`}
                key={card.title}
              >
                <h3
                  className={`text-[32px] font-bold leading-[1.2] ${
                    isLight
                      ? "text-main"
                      : "text-ink"
                  }`}
                >
                  {translatedTitle}
                </h3>

                <p
                  className={`mt-4 text-lg leading-[1.2] ${
                    isLight
                      ? "text-graphite"
                      : "text-soft"
                  }`}
                >
                  {translatedBody}
                </p>

                {"action" in card ? (
                  <a
                    className="mt-8 flex items-center gap-2 text-base font-bold leading-[1.2] text-ink"
                    href="#"
                  >
                    <span className="flex-1">
                      {isArabic
                        ? "استكشف النظام"
                        : card.action}
                    </span>

                    <IconImage
                      name="arrowRight"
                      size={14}
                    />
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
