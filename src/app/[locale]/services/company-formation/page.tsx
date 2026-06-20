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
        titleBlue={{
          en: "Foreign Company Formation",
          ar: "تأسيس الشركات الأجنبية",
        }}
        title={{
          en: " in Saudi Arabia — Fast, Trusted & Completely Hassle-Free",
          ar: " في المملكة العربية السعودية",
        }}
        badge={{
          en: "Company Formation",
          ar: "تأسيس الشركات",
        }}
        description={{
          en: "We handle the entire process of establishing your foreign company inside the Kingdom—from legal documentation to issuing your Commercial Registration—with precision, speed, and complete professionalism.",
          ar: "نتولى جميع إجراءات تأسيس شركتك داخل المملكة العربية السعودية، بدءًا من إعداد المستندات القانونية وحتى إصدار السجل التجاري، باحترافية ودقة وسرعة.",
        }}
        summary={{
          en: `Rowad Al Qimma specializes in establishing foreign companies in Saudi Arabia. We manage every stage on your behalf—from preparing legal documents and obtaining government approvals to issuing your Commercial Registration.

With our experienced team, your company can be fully established within 35 to 40 business days, allowing you to enter the Saudi market confidently and without unnecessary delays.

No complexity. No hidden surprises. Just a smooth, transparent process from start to finish.`,
          ar: `تتخصص رواد القمة في تأسيس الشركات الأجنبية داخل المملكة العربية السعودية، حيث نتولى جميع الإجراءات نيابةً عنك، بدءًا من إعداد المستندات والحصول على الموافقات الرسمية وحتى إصدار السجل التجاري.

بفضل خبرتنا وفريقنا المتخصص، يمكنك تأسيس شركتك خلال 35 إلى 40 يوم عمل فقط، مع ضمان سير جميع الإجراءات بسلاسة وشفافية ووفقًا للأنظمة السعودية.

بدون تعقيدات... بدون مفاجآت... فقط رحلة تأسيس احترافية من البداية وحتى الانطلاق.`,
        }}
        icon="/assets/market-entry.svg"
        exploreText={{
          en: "Explore Company Formation",
          ar: "استكشف خدمات تأسيس الشركات",
        }}
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
