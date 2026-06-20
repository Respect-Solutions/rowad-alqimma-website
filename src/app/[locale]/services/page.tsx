"use client";

import { Footer } from "@/components/layout/Footer";
import { CompanyFormationBanner } from "@/components/sections/CompanyFormationBanner";
import { CTASection } from "@/components/sections/CTASection";
import { OurServices } from "@/components/sections/OurServices";
import { SharedHero } from "@/components/sections/SharedHero";
import { TrustedStats } from "@/components/sections/TrustedStats";
import { WhyChooseApproach } from "@/components/sections/WhyChooseApproach";
import { WhyChooseSaudiFormation } from "@/components/sections/WhyChooseSaudiFormation";
import { useLocale } from "@/hooks/useLocale";

export default function ServicePage() {
  const { isArabic } = useLocale();

  return (
    <>
      <SharedHero
        activeNav="Services"
        variant="services"
        exploreText={
          isArabic
            ? "استكشف خدماتنا"
            : "Explore Our Services"
        }
        title={
          <>
            <span className="text-[#B9C7E4]">
              {isArabic
                ? "خدمات أعمال"
                : "Comprehensive"}
            </span>

            <br />

            <span className="text-[#EFF0F1]">
              {isArabic
                ? "متكاملة"
                : "Business Services"}
            </span>
          </>
        }
        cards={[
          {
            title: isArabic
              ? "السوق والنمو"
              : "Market & Growth",

            description: isArabic
              ? "نساعدك على دخول السوق السعودي وبناء علامتك التجارية وتوسيع أعمالك."
              : "We help you enter the Saudi market, build your brand, and scale your operations.",

            position: "left",
          },

          {
            title: isArabic
              ? "نبني أعمالك"
              : "We Build Your Business",

            description: isArabic
              ? "لا نقدم الاستشارات فقط، بل ننفذ وندعم أعمالك من التأسيس وحتى النمو."
              : "We don’t just consult — we execute and support your business from setup to growth.",

            position: "center",
          },

          {
            title: isArabic
              ? "الأساس القانوني"
              : "Legal Foundation",

            description: isArabic
              ? "نتولى جميع الإجراءات القانونية لتأسيس أعمالك بثقة وامتثال كامل."
              : "We handle all legal procedures to establish your business with full compliance and confidence.",

            position: "right",
          },
        ]}
      />

      <CompanyFormationBanner />

      <TrustedStats />

      <OurServices />

      <WhyChooseSaudiFormation/>

      {/* <WhyChooseApproach /> */}

      <CTASection />

      <Footer />
    </>
  );
}
