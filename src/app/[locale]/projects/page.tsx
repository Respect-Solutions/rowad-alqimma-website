"use client";

import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ProjectsCarousel } from "@/components/sections/ProjectsShowcase";
import { SharedHero } from "@/components/sections/SharedHero";
import { useLocale } from "@/hooks/useLocale";

export default function ProjectsPage() {
  const { isArabic } = useLocale();

  return (
    <>
      <SharedHero
        activeNav="Projects"
        variant="projects"
        exploreText={
          isArabic ? "استكشف مشاريعنا" : "Explore Projects"
        }
        title={
          <>
            <span className="text-[#EFF0F1]">
              {isArabic ? "قصص نجاحنا" : "Our Success Stories"}
            </span>
          </>
        }
        cards={[
          {
            title: isArabic
              ? "ساعدنا العديد من الشركات في مختلف القطاعات على الدخول والنمو بنجاح داخل السوق السعودي."
              : "We’ve helped businesses across industries successfully enter and grow in the Saudi market.",
            position: "center",
          },
        ]}
      />

      <ProjectsCarousel />

      <CTASection />

      <Footer />
    </>
  );
}
