import { Footer } from "@/components/layout/Footer";
import { AdministrativeConsultingIntro } from "@/components/sections/AdministrativeConsultingIntro";
import { AdministrativeServices } from "@/components/sections/AdministrativeServices";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQ";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhoBenefits } from "@/components/sections/WhoBenefits";

export default function CorporateLegalPage() {
  return (
    <>
      <ServiceHero
        titleBlue={{
          en: "Administrative Consulting",
          ar: "الاستشارات الإدارية",
        }}
        title={{
          en: " for Foreign Investors in Saudi Arabia  Practical, Specialized & Always by Your Side",
          ar: " للمستثمرين الأجانب في المملكة العربية السعودية — عملية، متخصصة، ودائمًا إلى جانبك",
        }}
        badge={{
          en: "Corporate Legal Advisory",
          ar: "الاستشارات القانونية للشركات",
        }}
        description={{
          en: "You've established your company in Saudi Arabia — now the real challenge begins.",
          ar: "لقد أسست شركتك في المملكة العربية السعودية — والآن يبدأ التحدي الحقيقي.",
        }}
        summary={{
          en: `Many foreign investors successfully complete the formation stage, then find themselves facing questions they never expected: How do I manage a team in a different work culture? What regulations must I comply with? How do I build an organizational structure that actually works?

Rowad Al Qimma is here to answer — not with theoretical reports, but with practical solutions that get your company operational from day one.`,
          ar: `ينجح العديد من المستثمرين الأجانب في إتمام مرحلة التأسيس، ثم يجدون أنفسهم أمام أسئلة لم يتوقعوها: كيف أدير فريقًا في ثقافة عمل مختلفة؟ ما الأنظمة التي يجب أن ألتزم بها؟ وكيف أبني هيكلًا إداريًا يعمل بكفاءة؟

رواد القمة هنا لتجيب عن هذه الأسئلة — ليس بتقارير نظرية، بل بحلول عملية تساعد شركتك على العمل بكفاءة منذ اليوم الأول.`,
        }}
        icon="/assets/business-consulting.svg"
        exploreText={{
          en: "Explore Corporate Legal  Advisory",
          ar: "استكشف خدمات الاستشارات القانونية",
        }}
      />

      <AdministrativeConsultingIntro
        title={{
          en: "Why Do You Need Specialized Administrative Consulting in the Saudi Market?",
          ar: "لماذا تحتاج إلى استشارات إدارية متخصصة في السوق السعودي؟",
        }}
        boldOne={{
          en: "The Saudi market has a uniqueness you won't find anywhere else.",
          ar: "يتميز السوق السعودي بخصوصية لن تجدها في أي مكان آخر.",
        }}
        boldTwo={{
          en: "The Saudi management consulting market reached USD 3.98 billion in 2025 ",
          ar: "بلغ حجم سوق الاستشارات الإدارية في السعودية 3.98 مليار دولار في عام 2025 ",
        }}
        description={{
          en: " Regulations evolve, Saudization requirements change, and the work culture has its own dynamics. A foreign investor who enters without specialized administrative guidance pays the price of trial and error — and sometimes pays it dearly.",
          ar: "تتطور الأنظمة باستمرار، وتتغير متطلبات السعودة، كما أن ثقافة العمل لها طبيعتها الخاصة. المستثمر الأجنبي الذي يدخل السوق دون استشارة إدارية متخصصة يدفع ثمن التجربة والخطأ، وأحيانًا يكون هذا الثمن كبيرًا.",
        }}
        highlight={{
          en: "and is projected to hit USD 5.05 billion by 2030 — the reason is clear: smart companies invest in management, not just in formation. Mordor Intelligence",
          ar: "ومن المتوقع أن يصل إلى 5.05 مليار دولار بحلول عام 2030 — والسبب واضح: الشركات الذكية تستثمر في الإدارة، وليس فقط في التأسيس.",
        }}
        conclusion={{
          en: (
            <>
              At <span className="font-bold text-white">Rowad Al Qimma</span>,
              we deliver what foreign investors actually need — not what big
              consulting firms sell to their corporate giants.
            </>
          ),
          ar: (
            <>
              في <span className="font-bold text-white">رواد القمة</span>، نقدم
              للمستثمرين الأجانب ما يحتاجونه فعلاً، وليس مجرد ما تبيعه شركات
              الاستشارات الكبرى.
            </>
          ),
        }}
      />

      <AdministrativeServices />

      <WhoBenefits />

      <FAQSection variant="corporateLegal" />

      <CTASection />

      <Footer />
    </>
  );
}
