import { Footer } from "@/components/layout/Footer";
import { AdministrativeConsultingIntro } from "@/components/sections/AdministrativeConsultingIntro";
import { AdministrativeServices } from "@/components/sections/AdministrativeServices";
import { FAQSection } from "@/components/sections/FAQ";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhoBenefitsCompanies } from "@/components/sections/WhoBenefitsCompanies";

export default function AdministrativePage() {
  return (
    <>
      <ServiceHero
        titleBlue={{
          en: "Administrative Consulting",
          ar: "الاستشارات الإدارية",
        }}
        title={{
          en: " for Foreign Investors in Saudi Arabia — Practical, Specialized & Always by Your Side",
          ar: " للشركات في المملكة العربية السعودية",
        }}
        badge={{
          en: "Administrative Consulting for Companies",
          ar: "الاستشارات الإدارية للشركات",
        }}
        description={{
          en: "You've established your company in Saudi Arabia — now the real challenge begins.",
          ar: "تأسيس الشركة هو البداية... أما النجاح فيعتمد على إدارة أعمالك باحتراف.",
        }}
        summary={{
          en: `Many foreign investors successfully complete the formation stage, then find themselves facing questions they never expected: How do I manage a team in a different work culture? What regulations must I comply with? How do I build an organizational structure that actually works?

Rowad Al Qimma is here to answer — not with theoretical reports, but with practical solutions that get your company operational from day one.`,
          ar: `بعد تأسيس شركتك، تبدأ تحديات الإدارة اليومية، والامتثال للأنظمة، وبناء فريق عمل فعّال، وتنظيم العمليات الداخلية. في رواد القمة، نقدم استشارات إدارية عملية تساعدك على بناء هيكل إداري قوي، وتحسين كفاءة التشغيل، وضمان نمو أعمالك بثقة واستقرار داخل السوق السعودي.`,
        }}
        icon="/assets/legal-consulting.svg"
        exploreText={{
          en: "Explore Administrative Consulting for Companies",
          ar: "استكشف خدمات الاستشارات الإدارية",
        }}
      />

      <AdministrativeConsultingIntro
        title={{
          en: "Why Do You Need Specialized Administrative Consulting in the Saudi Market?",
          ar: "لماذا تحتاج إلى استشارات إدارية متخصصة في السوق السعودي؟",
        }}
        boldOne={{
          en: "The Saudi market has a uniqueness you won't find anywhere else.",
          ar: "السوق السعودي يتمتع بخصوصية لن تجدها في أي سوق آخر.",
        }}
        boldTwo={{
          en: "The Saudi management consulting market reached USD 3.98 billion in 2025",
          ar: "بلغ حجم سوق الاستشارات الإدارية في السعودية 3.98 مليار دولار في عام 2025",
        }}
        description={{
          en: "Regulations evolve, Saudization requirements change, and the work culture has its own dynamics. A foreign investor who enters without specialized administrative guidance pays the price of trial and error — and sometimes pays it dearly.",
          ar: "الأنظمة تتطور باستمرار، ومتطلبات السعودة تتغير، وثقافة العمل لها طبيعتها الخاصة. المستثمر الأجنبي الذي يدخل السوق دون استشارة إدارية متخصصة غالباً ما يدفع ثمن التجربة والخطأ، وقد يكون هذا الثمن كبيراً.",
        }}
        highlight={{
          en: "and is projected to hit USD 5.05 billion by 2030 — the reason is clear: smart companies invest in management, not just in formation. (Mordor Intelligence)",
          ar: "ومن المتوقع أن يصل إلى 5.05 مليار دولار بحلول عام 2030، والسبب واضح: الشركات الذكية تستثمر في الإدارة، وليس فقط في التأسيس.",
        }}
        conclusion={{
          en: (
            <>
              At <span className="font-bold text-white">Rowad Al Qimma</span>,
              we deliver what foreign investors actually need — not what large
              consulting firms typically offer.
            </>
          ),
          ar: (
            <>
              في <span className="font-bold text-white">رواد القمة</span> نقدم
              ما يحتاجه المستثمر الأجنبي فعلاً، وليس مجرد حلول نظرية أو تقارير
              تقليدية.
            </>
          ),
        }}
      />

      <AdministrativeServices />

      <WhoBenefitsCompanies />

      <FAQSection variant="administrativeConsulting" />

      <Footer />
    </>
  );
}
