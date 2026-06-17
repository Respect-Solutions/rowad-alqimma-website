import { Footer } from "@/components/layout/Footer";
import { AdministrativeConsultingIntro } from "@/components/sections/AdministrativeConsultingIntro";
import { AdministrativeServices } from "@/components/sections/AdministrativeServices";
import { CompanyFormationSteps } from "@/components/sections/CompanyFormationSteps";
import { CompanyStructures } from "@/components/sections/CompanyStructures";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQ";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ValuesStats } from "@/components/sections/ValuesStats";
import { WhoBenefits } from "@/components/sections/WhoBenefits";
import { WhyForeign } from "@/components/sections/WhyForeign";

export default function CorporateLegalPage() {
  return (
    <>
      <ServiceHero
        titleBlue="Administrative Consulting"
        title=" for Foreign Investors in Saudi Arabia  Practical, Specialized & Always by Your Side"
        badge="Corporate Legal Advisory"
        description="You've established your company in Saudi Arabia — now the real challenge begins."
        summary="Many foreign investors successfully complete the formation stage, then find themselves facing questions they never expected: How do I manage a team in a different work culture? What regulations must I comply with? How do I build an organizational structure that actually works?
Rowad Al Qimma is here to answer — not with theoretical reports, but with practical solutions that get your company operational from day one."
        icon="/assets/business-consulting.svg"
        exploreText="Explore Corporate Legal  Advisory"
      />

      <AdministrativeConsultingIntro
        title="Why Do You Need Specialized Administrative Consulting in the Saudi Market?"
        boldOne="The Saudi market has a uniqueness you won't find anywhere else."
        boldTwo="The Saudi management consulting market reached USD 3.98 billion in 2025 "
        description=" Regulations evolve, Saudization requirements change, and the work culture has its own dynamics. A foreign investor who enters without specialized administrative guidance pays the price of trial and error — and sometimes pays it dearly."
        highlight="and is projected to hit USD 5.05 billion by 2030 — the reason is clear: smart companies invest in management, not just in formation. Mordor Intelligence"
        conclusion={
          <>
            At <span className="font-bold text-white">Rowad Al Qimma</span>, we
            deliver what foreign investors actually need — not what big
            consulting firms sell to their corporate giants.
          </>
        }
      />
      <AdministrativeServices />
      <WhoBenefits />
      <FAQSection variant="corporateLegal" />
      <CTASection />

      <Footer />
    </>
  );
}
