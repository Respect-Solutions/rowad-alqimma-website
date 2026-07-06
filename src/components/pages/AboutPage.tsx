import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutHero } from "@/components/sections/AboutHero";
import { DeploymentSequence } from "@/components/sections/DeploymentSequence";
import { Stats } from "@/components/sections/Stats";
import { Trust } from "@/components/sections/Trust";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhoWeAre } from "@/components/sections/WhoWeAre";

type AboutPageProps = {
  active?: "Home" | "About" | "Services" | "Projects";
  variant?: "full" | "home" | "services";
};

export function AboutPage({
  active = "About",
  variant = "full",
}: AboutPageProps) {
  return (
    <main className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-main">
      <Header active={active} />
      {variant !== "services" ? <AboutHero /> : null}
      {variant !== "services" ? <WhoWeAre /> : null}
      {variant !== "home" ? <VisionMission /> : null}
      <Stats />
      <DeploymentSequence />
      <Trust />
      <Footer />
    </main>
  );
}
