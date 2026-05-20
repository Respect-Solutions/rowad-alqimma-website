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
    <motion.header initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-50 px-4 py-5 sm:px-6 md:px-12 md:py-8 lg:px-16" >
      <nav className="mx-auto grid max-w-[1152px] grid-cols-[1fr_auto] items-center md:grid-cols-[90px_1fr_190px]">
        
        {/* Logo */}
        <div className="flex justify-start">
          <Link
            aria-label="Rowad Elqimma home"
            className="flex shrink-0 items-center transition duration-300 hover:scale-[1.03]"
            href={`/${locale}`}
          >
            <IconImage
              name={lightButton ? "logoContact" : "logoAbout"}
              width={56}
              height={62}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden justify-center md:flex">
          <div className="flex items-center justify-center gap-6 lg:gap-7">
            {navItems.map((item, index) => {
              const translatedLabel =
                labels[item.label as keyof typeof labels];

              return item.label === active ? (
                <Link
                  className="rounded-lg border-2 border-white/10 bg-white/10 px-5 lg:px-8 py-2 text-base lg:text-lg font-medium leading-[1.2] text-[#f6f4ef] backdrop-blur-md transition duration-300 hover:bg-white/15"
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
                  className="relative text-base lg:text-lg font-medium leading-[1.2] text-soft transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
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
        <div className="hidden items-center justify-end gap-3 lg:gap-4 md:flex">
          <Link href={`/${locale}/contact-us`}>
            <Button
              className={`h-[49px] whitespace-nowrap rounded-lg px-4 lg:px-5 py-0 text-sm transition duration-300 hover:scale-[1.03] ${
                isContact
                  ? "bg-white text-[#14263D] hover:bg-white/90"
                  : lightButton
                    ? "bg-accent text-main"
                    : ""
              }`}
              variant={
                isContact
                  ? "light"
                  : lightButton
                    ? "light"
                    : "ghost"
              }
            >
              {isArabic
                ? "احجز استشارة"
                : "Book Consultation"}
            </Button>
          </Link>

          <div className="transition duration-300 hover:scale-105">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="transition duration-300 hover:scale-105">
            <LanguageSwitcher />
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle Menu"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md transition duration-300 hover:bg-white/20 active:scale-95"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  isMenuOpen
                    ? "rotate-45"
                    : "-translate-y-[6px]"
                }`}
              />

              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  isMenuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-300 ${
                  isMenuOpen
                    ? "-rotate-45"
                    : "translate-y-[6px]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "mt-6 max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[28px] border border-white/10 bg-[#1D2D46]/95 p-6 shadow-2xl backdrop-blur-2xl">
          
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => {
              const translatedLabel =
                labels[item.label as keyof typeof labels];

              return item.label === active ? (
                <Link
                  key={item.label}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-center text-lg font-medium text-white transition duration-300 hover:bg-white/15"
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
                  className="rounded-xl px-5 py-3 text-center text-lg font-medium text-white/75 transition duration-300 hover:bg-white/5 hover:text-white"
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
                className="mt-2 h-[54px] w-full rounded-xl text-sm transition duration-300 hover:scale-[1.01]"
                variant="light"
              >
                {isArabic
                  ? "احجز استشارة"
                  : "Book Consultation"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
