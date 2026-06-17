import { Footer } from "@/components/layout/Footer";
import { CompanyFormationSteps } from "@/components/sections/CompanyFormationSteps";
import { CompanyStructures } from "@/components/sections/CompanyStructures";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQ";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ValuesStats } from "@/components/sections/ValuesStats";
import { WhyForeign } from "@/components/sections/WhyForeign";

const companyFormationFAQ = {
  en: [
    {
      question: "Do I need a Saudi partner to establish my company? ",
      answer:
        "No. In many sectors, foreign investors can establish a company with 100% foreign ownership, subject to MISA regulations and the nature of the business activity.",
    },
    {
      question: "How long does the company formation process take? ",
      answer:
        "The complete process typically takes between 35 and 40 business days, depending on approvals and documentation.",
    },
    {
      question: "What is the minimum capital requirement?",
      answer:
        "The complete process typically takes between 35 and 40 business days, depending on approvals and documentation.",
    },
    {
      question: "Are there any hidden fees? ",
      answer:
        "The complete process typically takes between 35 and 40 business days, depending on approvals and documentation.",
    },
  ],

  ar: [
    {
      question: "هل أحتاج إلى شريك سعودي لتأسيس شركتي؟",
      answer:
        "لا، في العديد من الأنشطة يمكن للمستثمر الأجنبي تأسيس شركة بملكية 100٪ وفقًا لأنظمة وزارة الاستثمار وطبيعة النشاط.",
    },
    {
      question: "كم تستغرق عملية تأسيس الشركة؟",
      answer:
        "تستغرق عملية التأسيس عادةً من 35 إلى 40 يوم عمل حسب استكمال المستندات والموافقات.",
    },
  ],
};

export default function CompanyFormationPage() {
  return (
    <>
      <ServiceHero
        titleBlue="Foreign Company Formation"
        title=" in Saudi Arabia Fast, Trusted & Completely Hassle-Free"
        badge="Company Formation"
        description="We handle the entire process of establishing your foreign company inside the Kingdom from legal documents to issuing the commercial registration  with precision and professionalism."
        summary="Rowad Al Qimma specializes in establishing foreign companies inside the Kingdom of Saudi Arabia. We handle every single step on your behalf — from the first document to the last signature — so you find yourself the owner of an officially registered company in the Saudi market in just 35 to 40 days.
 No complexity. No surprises. No wasted time."
        icon="/assets/market-entry.svg"
        exploreText="Explore Company Formation"
      />
      <ValuesStats />
      <WhyForeign />
      <CompanyStructures />
      <CompanyFormationSteps />
      <FAQSection variant="companyFormation" />
      <CTASection />
      <Footer />
    </>
  );
}
