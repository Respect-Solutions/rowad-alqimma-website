import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactHero } from "@/components/sections/ContactHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { InquirySection } from "@/components/sections/InquirySection";

export function ProjectsPage() {
  return (
    <main className="mx-auto overflow-hidden rounded-[32px] bg-main">
      <div className="relative">
        <Header active="Projects" lightButton />
        <div className="-mt-[190px]">
          <ContactHero />
        </div>
      </div>
      <InquirySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
