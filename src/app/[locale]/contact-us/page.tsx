"use client";

import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { SharedHero } from "@/components/sections/SharedHero";
import { useLocale } from "@/hooks/useLocale";

export default function ContactUsPage() {
  const { isArabic } = useLocale();

  return (
    <>
      <SharedHero
        activeNav="Contact"
        variant="projects"
        exploreText={isArabic ? "دعنا نتواصل" : "Let’s Connect"}
        title={
          <>
            <span className="text-[#EFF0F1]">
              {isArabic ? "تواصل بمستوى " : "Connect with"}
            </span>

            <br />

            <span className="text-[#EFF0F1]">
              {isArabic ? "من التميّز" : "Excellence"}
            </span>
          </>
        }
        cards={[
          {
            title: isArabic
              ? "رحلتك الاستراتيجية نحو السوق السعودي تبدأ بمحادثة واحدة."
              : "Your strategic entry into the Saudi market begins with a single conversation.",

            position: "center",
          },
        ]}
      />

      <ContactSection />

      <CTASection />

      <Footer />
    </>
  );
}
