import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/sections/FAQ";
import { MarketingInsights } from "@/components/sections/MarketingInsights";
import { MarketingServices } from "@/components/sections/MarketingServices";
import { SaudiMarketAnalysis } from "@/components/sections/SaudiMarketAnalysis";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ValuesStats } from "@/components/sections/ValuesStats";
import { WhyMarketingRowad } from "@/components/sections/WhyMarketingRowad";

export default function MarketingStrategicPage() {
  return (
    <>
      <ServiceHero
        titleBlue={{
          en: "You've established your",
          ar: "لقد أسست شركتك",
        }}
        title={{
          en: " company in Saudi Arabia now the most important question: how does the Saudi customer find you?",
          ar: " في المملكة العربية السعودية... والآن السؤال الأهم: كيف يجدك العميل السعودي؟",
        }}
        badge={{
          en: "Marketing & Strategic Consulting",
          ar: "الاستشارات التسويقية والاستراتيجية",
        }}
        description={{
          en: "Every service can be purchased separately — or as part of a complete package that fits your budget and goals.",
          ar: "يمكنك الحصول على كل خدمة بشكل مستقل أو ضمن باقة متكاملة تناسب ميزانيتك وأهدافك.",
        }}
        summary={{
          en: `Entering the Saudi market without a clear marketing strategy is like walking in the dark. The Saudi consumer is sophisticated, the competition is fierce, and this market has a uniqueness you won't find anywhere else.

At Rowad Al Qimma, we combine deep market knowledge with real marketing expertise to build you a strong presence and sustainable growth inside the Saudi market.`,
          ar: `دخول السوق السعودي دون استراتيجية تسويقية واضحة يشبه السير في الظلام. يتميز المستهلك السعودي بوعي كبير، والمنافسة قوية، كما أن هذا السوق يمتلك خصوصية لا تجدها في أي مكان آخر.

في رواد القمة نجمع بين المعرفة العميقة بالسوق والخبرة التسويقية الحقيقية لنساعدك على بناء حضور قوي وتحقيق نمو مستدام داخل السوق السعودي.`,
        }}
        icon="/assets/business-setup.svg"
        exploreText={{
          en: "Explore Marketing & Strategic Consulting",
          ar: "استكشف خدمات الاستشارات التسويقية والاستراتيجية",
        }}
      />

      <ValuesStats variant="features" />

      <MarketingInsights />

      <SaudiMarketAnalysis />

      <MarketingServices />

      <WhyMarketingRowad />

      <FAQSection variant="marketEntry" />

      <Footer />
    </>
  );
}
