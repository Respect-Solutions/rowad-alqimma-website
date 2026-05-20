import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Rowad Elqimma",
  description:
    "Building the legal foundations for the future of trade and innovation in Saudi Arabia.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <NextIntlClientProvider locale={params.locale} messages={{}}>
      <div lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
