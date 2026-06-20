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
        exploreText={isArabic ? "اكتشف خدماتنا" : "Explore Our Services"}
        title={
          <>
            <span className="text-[#B9C7E4]">
              {isArabic ? "حلول أعمال" : "Comprehensive"}
            </span>

            <br />

            <span className="text-[#EFF0F1]">
              {isArabic ? "متكاملة" : "Business Services"}
            </span>
          </>
        }
        cards={[
          {
            title: isArabic ? "النمو والتوسع" : "Market & Growth",

            description: isArabic
              ? "نساعدك على دخول السوق السعودي، وبناء حضور قوي، ووضع خطة واضحة للنمو والتوسع."
              : "We help you enter the Saudi market, build your brand, and scale your operations.",

            position: "left",
          },

          {
            title: isArabic ? "نبني نجاحك" : "We Build Your Business",

            description: isArabic
              ? "من الفكرة وحتى التشغيل، نتولى التنفيذ ونوفر لك الدعم اللازم في كل مرحلة من رحلة أعمالك."
              : "We don’t just consult — we execute and support your business from setup to growth.",

            position: "center",
          },

          {
            title: isArabic ? "أساس قانوني متين" : "Legal Foundation",

            description: isArabic
              ? "نتولى جميع الإجراءات القانونية والتنظيمية لضمان انطلاقة آمنة ومتوافقة مع الأنظمة السعودية."
              : "We handle all legal procedures to establish your business with full compliance and confidence.",

            position: "right",
          },
        ]}
      />

      <CompanyFormationBanner />

      <TrustedStats />

      <OurServices />

      <WhyChooseSaudiFormation />

      {/* <WhyChooseApproach /> */}

      <CTASection />

      <Footer />
    </>
  );
}
