import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommandCenterSystem } from "@/components/sections/ComandCenterSystem";
import { CTASection } from "@/components/sections/CTASection";
import { DeploymentSequence } from "@/components/sections/DeploymentSequence";
import { HomeHero } from "@/components/sections/HomeHero";
import { MarketArchitectureBanner } from "@/components/sections/MarketArchitectureBanner";
import { MarketReadinessIndex } from "@/components/sections/MarketReadinessIndex";
import { OurServices } from "@/components/sections/OurServices";
import { Stats } from "@/components/sections/Stats";
import { Trust} from "@/components/sections/Trust";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQSection } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="mx-auto overflow-hidden rounded-[32px] bg-main">
      <HomeHero />
      <AboutSection/>
      <Stats />
      <OurServices />
      <WhyChooseUs />
      <MarketArchitectureBanner />
      <MarketReadinessIndex />
      <DeploymentSequence />
      <FAQSection/>
      {/* <WhoWeAre /> */}
      {/* <CommandCenterSystem /> */}
      <Trust />
      <CTASection />
      <Footer />
    </main>
  );
}
