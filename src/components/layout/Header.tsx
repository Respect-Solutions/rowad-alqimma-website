"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { IconImage } from "@/components/ui/IconImage";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/hooks/useLocale";
import { motion } from "framer-motion";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const labels = {
    Home: isArabic ? "الرئيسية" : "Home",

    About: isArabic ? "من نحن" : "About",

    Services: isArabic ? "الخدمات" : "Services",

    Projects: isArabic ? "المشاريع" : "Projects",
  };

  // Prevent body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-50 px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6 lg:px-16 lg:py-8"
    >
      <nav className="mx-auto grid max-w-[1152px] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[90px_1fr_190px]">
        {/* Logo */}
        <div className="flex justify-start">
          <Link
            aria-label="Rowad Elqimma home"
            className="flex shrink-0 items-center transition duration-300 hover:scale-[1.03]"
            href={`/${locale}`}
          >
            <IconImage
              name={lightButton ? "logoContact" : "logoAbout"}
              width={52}
              height={58}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden justify-center lg:flex">
          <div className="flex items-center justify-center gap-6 lg:gap-7">
            {navItems.map((item, index) => {
              const translatedLabel = labels[item.label as keyof typeof labels];

              return item.label === active ? (
                <Link
                  className="rounded-lg border-2 border-white/10 bg-white/10 px-5 py-2 text-base font-medium leading-[1.2] text-[#f6f4ef] backdrop-blur-md transition duration-300 hover:bg-white/15 lg:px-8 lg:text-lg"
                  href={`/${locale}${item.href}`}
                  key={item.label}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {translatedLabel}
                </Link>
              ) : (
                <Link
                  className="relative text-base font-medium leading-[1.2] text-soft transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full lg:text-lg"
                  href={`/${locale}${item.href}`}
                  key={item.label}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {translatedLabel}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center justify-end gap-3 lg:flex lg:gap-4">
          <Link href={`/${locale}/contact-us`}>
            <Button
              className={`h-[49px] whitespace-nowrap rounded-lg px-4 py-0 text-sm transition duration-300 hover:scale-[1.03] lg:px-5 ${
                isContact
                  ? "bg-white text-[#14263D] hover:bg-white/90"
                  : lightButton
                    ? "bg-accent text-main"
                    : ""
              }`}
              variant={isContact ? "light" : lightButton ? "light" : "ghost"}
            >
              {isArabic ? "تحدث مع خبير" : "Talk to an Expert"}
            </Button>
          </Link>

          <div className="transition duration-300 hover:scale-105">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <div className="transition duration-300 hover:scale-105">
            <LanguageSwitcher />
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle Menu"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md transition duration-300 hover:bg-white/20 active:scale-95 sm:h-[46px] sm:w-[46px]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  isMenuOpen ? "rotate-45" : "-translate-y-[6px]"
                }`}
              />

              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  isMenuOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isMenuOpen ? "mt-5 max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[24px] border border-white/10 bg-[#1D2D46]/95 p-4 shadow-2xl backdrop-blur-2xl sm:rounded-[28px] sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            {navItems.map((item, index) => {
              const translatedLabel = labels[item.label as keyof typeof labels];

              return item.label === active ? (
                <Link
                  key={item.label}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-white/15 sm:py-4 sm:text-lg"
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  {translatedLabel}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-5 py-3 text-center text-base font-medium text-white/75 transition duration-300 hover:bg-white/5 hover:text-white sm:text-lg"
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  {translatedLabel}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href={`/${locale}/contact-us`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                className="mt-1 h-[52px] w-full rounded-xl text-sm transition duration-300 hover:scale-[1.01] sm:mt-2 sm:h-[56px]"
                variant="light"
              >
                {isArabic ? "احجز استشارة" : "Book Consultation"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

