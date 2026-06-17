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
        titleBlue="You've established your"
        title=" company in Saudi Arabia  now the most important question: how does the Saudi customer find you?"
        badge="Marketing & Strategic Consulting"
        description="Every service can be purchased separately — or as part of a complete package that fits your budget and goals."
        summary="Entering the Saudi market without a clear marketing strategy is like walking in the dark. The Saudi consumer is sophisticated, the competition is fierce, and this market has a uniqueness you won't find anywhere else.
At Rowad Al Qimma, we combine deep market knowledge with real marketing expertise  to build you a strong presence and sustainable growth inside the Saudi market."
        icon="/assets/business-setup.svg"
        exploreText="Explore Marketing & Strategic Consulting"
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
