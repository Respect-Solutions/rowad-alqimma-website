import { Metadata } from "next";
import { getTranslations } from "next-intl/server"; // افتراض استخدام next-intl
import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { VisionMission } from "@/components/sections/VisionMission";
import { Stats } from "@/components/sections/Stats";
import { DeploymentSequence } from "@/components/sections/DeploymentSequence";
import { Trust } from "@/components/sections/Trust";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ValuesStats } from "@/components/sections/ValuesStats";
import { WhySaudiMarket } from "@/components/sections/WhySaudiMarket";

// Dynamic imports للمكونات التي تظهر أسفل الصفحة - تُحمّل عند الحاجة فقط
const DynamicTrust = dynamic(() =>
  import("@/components/sections/Trust").then((mod) => ({ default: mod.Trust })),
);
const DynamicCTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((mod) => ({
    default: mod.CTASection,
  })),
);
const DynamicFooter = dynamic(() =>
  import("@/components/layout/Footer").then((mod) => ({ default: mod.Footer })),
);

// تعريف Props للصفحة مع دعم i18n routing
interface AboutPageProps {
  params: {
    locale: string;
  };
}

// توليد البيانات الوصفية للصفحة حسب اللغة
export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = params;
  const isArabic = locale === "ar";

  const companyNameAr = "رواد القمة";
  const companyNameEn = "Rowad Alqimma";

  const title = isArabic
    ? `من نحن | ${companyNameAr}`
    : `About Us | ${companyNameEn}`;

  const description = isArabic
    ? `تعرف على قصة ${companyNameAr}، رؤيتنا، رسالتنا، وفريقنا المتميز. اكتشف كيف نقدم حلولاً مبتكرة لعملائنا.`
    : `Learn about the story of ${companyNameEn}, our vision, mission, and dedicated team. Discover how we deliver innovative solutions to our clients.`;

  const canonicalPath = isArabic ? "/من-نحن" : "/about";
  const baseUrl = "https://rowadalqimma.com"; // استبدل بالنطاق الفعلي

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      languages: {
        ar: `${baseUrl}/من-نحن`,
        en: `${baseUrl}/about`,
        "x-default": `${baseUrl}/about`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${canonicalPath}`,
      siteName: isArabic ? companyNameAr : companyNameEn,
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og-about.jpg`, // تأكد من وجود الصورة
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og-about.jpg`],
    },
  };
}

// توليد المسارات الثابتة لكل اللغات المدعومة
export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = params;
  const isArabic = locale === "ar";
  const companyNameAr = "رواد القمة";
  const companyNameEn = "Rowad Alqimma";
  const baseUrl = "https://rowadalqimma.com";

  // Structured Data للمنظمة وصفحة About
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: isArabic ? companyNameAr : companyNameEn,
    url: baseUrl,
    description: isArabic
      ? "شركة رائدة في تقديم الحلول المبتكرة"
      : "A leading company in providing innovative solutions",
    sameAs: [
      "https://www.facebook.com/rowadalqimma",
      "https://www.twitter.com/rowadalqimma",
      "https://www.linkedin.com/company/rowadalqimma",
      "https://www.instagram.com/rowadalqimma",
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isArabic ? "من نحن" : "About Us",
    description: isArabic
      ? `تعرف على ${companyNameAr} وقصتنا`
      : `Learn about ${companyNameEn} and our story`,
    url: `${baseUrl}${isArabic ? "/من-نحن" : "/about"}`,
    isPartOf: {
      "@type": "WebSite",
      name: isArabic ? companyNameAr : companyNameEn,
      url: baseUrl,
    },
  };

  return (
    <>
      {/* Structured Data - JSON-LD */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={aboutPageSchema} />

      {/* Main Content */}
      <main
        id="main-content"
        aria-label={
          isArabic
            ? `محتوى صفحة من نحن - ${companyNameAr}`
            : `About page content - ${companyNameEn}`
        }
        role="main"
      >
        <AboutHero />
        <AboutSection />
        <Stats/>
        {/* <WhoWeAre /> */}
        <VisionMission />
        {/* <Stats variant="secondary" /> */}
        <ValuesSection/>
        <ValuesStats />
        <WhySaudiMarket/>
        {/* <DeploymentSequence /> */}
        {/* <DynamicTrust /> */}
        <DynamicCTASection />
        <DynamicFooter />
      </main>
    </>
  );
}
