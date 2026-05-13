import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { CTASection } from "@/components/sections/CTASection";
import { DeploymentSequence } from "@/components/sections/DeploymentSequence";
import { Stats } from "@/components/sections/Stats";
import { Trust } from "@/components/sections/Trust";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhoWeAre } from "@/components/sections/WhoWeAre";


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <Stats variant="secondary" />
      <DeploymentSequence />
      <Trust />
      <CTASection />
      <Footer/>
    </>
  );
}
;
