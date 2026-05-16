"use client";

import { footerColumns } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/hooks/useLocale";

export function Footer() {
  const { isArabic } = useLocale();

  const translatedColumns = {
    Links: isArabic ? "الروابط" : "Links",

    Legal: isArabic ? "الخدمات القانونية" : "Legal",

    Contacts: isArabic ? "التواصل" : "Contacts",
  };

  const translatedLinks: Record<string, string> = {
    "Foreign Investment": isArabic
      ? "الاستثمار الأجنبي"
      : "Foreign Investment",

    "Mergers & Acquisitions": isArabic
      ? "الاندماج والاستحواذ"
      : "Mergers & Acquisitions",

    "Dispute Resolution": isArabic
      ? "حل النزاعات"
      : "Dispute Resolution",

    "Fintech Law": isArabic
      ? "قانون التقنية المالية"
      : "Fintech Law",

    "Privacy Policy": isArabic
      ? "سياسة الخصوصية"
      : "Privacy Policy",

    "Terms of Service": isArabic
      ? "شروط الخدمة"
      : "Terms of Service",
  };

  return (
    <footer className="rounded-t-3xl border-2 border-white/10 bg-main px-6 py-12 md:px-16 md:py-12">
      <Container>
        <div
          className={`grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-0 ${
            isArabic ? "text-right" : ""
          }`}
        >
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold leading-[1.2] text-ink">
              {isArabic ? "رواد القمة" : "Rowad Elqimma"}
            </h2>

            <p className="mt-3 max-w-[283px] text-sm leading-[1.8] text-soft">
              {isArabic
                ? "نبني الأسس القانونية لمستقبل التجارة والابتكار داخل المملكة العربية السعودية."
                : "Building the legal foundations for the future of trade and innovation in Saudi Arabia."}
            </p>
          </div>

          {/* Columns */}
          {footerColumns.map((column) => (
            <div
              className="flex flex-col gap-3"
              key={column.title}
            >
              <h3 className="text-lg font-bold leading-[1.2] text-ink">
                {
                  translatedColumns[
                    column.title as keyof typeof translatedColumns
                  ]
                }
              </h3>

              {column.links.map((link, index) => (
                <a
                  className="text-sm leading-[1.8] text-soft transition hover:text-ink"
                  href="#"
                  key={`${link}-${index}`}
                >
                  {translatedLinks[link] || link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-base font-bold leading-[1.2] text-ink">
          {isArabic
            ? "© 2024 رواد القمة. جميع الحقوق محفوظة."
            : "© 2024 Rowad Elqimma. All Rights Reserved."}
        </p>
      </Container>
    </footer>
  );
}
