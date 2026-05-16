import type { Metadata } from "next";

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
    <div
      lang={params.locale}
      dir={params.locale === "ar" ? "rtl" : "ltr"}
    >
      {children}
    </div>
  );
}
