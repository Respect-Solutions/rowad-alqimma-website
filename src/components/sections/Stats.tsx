"use client";

import { stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/hooks/useLocale";

type StatsProps = {
  variant?: "default" | "secondary";
};

export function Stats({
  variant = "default",
}: StatsProps) {
  const isSecondary = variant === "secondary";

  const { isArabic } = useLocale();

  const translatedLabels = {
    Companies: isArabic
      ? "شركة تم تأسيسها"
      : "Companies established",

    Years: isArabic
      ? "مستثمر دولي"
      : "International Investors",

    "Global Offices": isArabic
      ? "قطاع مخدوم"
      : "Industries Served",

    "Success Rate": isArabic
      ? "معدل نجاح التنفيذ"
      : "Execution Success Rate",
  };

  const translatedValues = {
    "10B+": isArabic
      ? "+٥٠٠"
      : "500+",

    "500+": isArabic
      ? "+١٢٠"
      : "120+",

    "15+": isArabic
      ? "+١٥"
      : "15+",

    "99%": isArabic
      ? "٩٩٪"
      : "99%",
  };

  return (
    <section
      className={`
        px-6
        md:px-16
        ${isSecondary ? "py-24 " : ""}
      `}
    >
      <Container
        className={`
          rounded-3xl
          ${
            isSecondary
              ? "bg-[#27354C] py-20"
              : "py-12"
          }
        `}
      >
        <div
          className={`
            grid
            text-center
            sm:grid-cols-2
            lg:grid-cols-4
            ${
              isSecondary
                ? "gap-10"
                : "gap-6"
            }
          `}
        >
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong
                className={`
                  block
                  font-bold
                  leading-[1.2]
                  text-ink
                  ${
                    isSecondary
                      ? "text-6xl"
                      : "text-5xl"
                  }
                `}
              >
                {
                  translatedValues[
                    value as keyof typeof translatedValues
                  ]
                }
              </strong>

              <span
                className={`
                  block
                  leading-[1.2]
                  text-soft
                  ${
                    isSecondary
                      ? "mt-2 text-xl"
                      : "mt-0.5 text-lg"
                  }
                `}
              >
                {
                  translatedLabels[
                    label as keyof typeof translatedLabels
                  ]
                }
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
