import { CompanyFormationBanner } from "@/components/sections/CompanyFormationBanner";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { TrustedStats } from "@/components/sections/TrustedStats";


export default function ServicePage() {
  return (
    <>
      <ServicesHero/>
      <CompanyFormationBanner />
      <TrustedStats/>
    </>
  );
}
