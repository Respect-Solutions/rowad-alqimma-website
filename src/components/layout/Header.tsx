"use client";

import Link from "next/link";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { IconImage } from "@/components/ui/IconImage";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/hooks/useLocale";

type HeaderProps = {
  active?:
    | "Home"
    | "About"
    | "Services"
    | "Projects"
    | "Contact";

  lightButton?: boolean;
};

export function Header({
  active,
  lightButton = false,
}: HeaderProps) {
  const isContact = active === "Contact";

  const { locale, isArabic } = useLocale();

  return (
    <header className="relative z-20 px-6 py-8 md:px-12 lg:px-16 lg:py-8">
      <nav className="mx-auto flex max-w-[1152px] items-center gap-6 md:gap-[33px]">
        
        {/* Logo */}
        <Link
          aria-label="Rowad Elqimma home"
          className="flex shrink-0 items-center"
          href={`/${locale}`}
        >
          <IconImage
            name={lightButton ? "logoContact" : "logoAbout"}
            width={56}
            height={62}
          />
        </Link>

        {/* Nav links */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-10 md:flex">
          {navItems.map((item) => {
const labels = {
  Home: isArabic
    ? "الرئيسية"
    : "Home",

  About: isArabic
    ? "من نحن"
    : "About",

  Services: isArabic
    ? "الخدمات"
    : "Services",

  Projects: isArabic
    ? "المشاريع"
    : "Projects",
};

const translatedLabel =
  labels[item.label as keyof typeof labels];


            return item.label === active ? (
              <Link
                className="rounded-lg border-2 border-white/10 bg-white/10 px-8 py-2 text-lg font-medium leading-[1.2] text-[#f6f4ef]"
                href={`/${locale}${item.href}`}
                key={item.label}
              >
                {translatedLabel}
              </Link>
            ) : (
              <Link
                className="text-lg font-medium leading-[1.2] text-soft transition hover:text-ink"
                href={`/${locale}${item.href}`}
                key={item.label}
              >
                {translatedLabel}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* CTA */}
          <Link href={`/${locale}/contact-us`}>
            <Button
              className={`hidden h-[49px] rounded-lg px-6 py-0 text-sm md:inline-flex ${
                isContact
                  ? "bg-white text-[#14263D] hover:bg-white/90"
                  : lightButton
                    ? "bg-accent text-main"
                    : ""
              }`}
              variant={isContact ? "light" : lightButton ? "light" : "ghost"}
            >
              {isArabic
                ? "احجز استشارة"
                : "Book Consultation"}
            </Button>
          </Link>

          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
