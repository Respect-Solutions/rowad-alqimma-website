"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "../layout/Header";
import { useLocale } from "@/hooks/useLocale";

export function HomeHero() {
  const { isArabic, locale } = useLocale();

  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-[#14263D]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          alt=""
          className="object-cover object-center brightness-75"
          fill
          priority
          src="/assets/home-hero-bg.jpg"
        />

        {/* Dark overlay to match Figma image darkness */}
        <div className="absolute inset-0 bg-[#00132A]/25" />

        {/* Figma gradient — exact values, single div, no extra opacity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(360deg, rgba(4, 29, 60, 0.75) 5.29%, rgba(33, 57, 93, 0.623798) 18.75%, rgba(37, 61, 98, 0.606516) 25.48%, rgba(43, 66, 103, 0.584296) 37.02%, rgba(55, 78, 117, 0.531119) 49.52%, rgba(180, 197, 255, 0) 100%), linear-gradient(270deg, rgba(102, 102, 102, 0) 0%, rgba(20, 38, 60, 0.75) 100%), linear-gradient(270deg, rgba(20, 38, 60, 0.75) 0%, rgba(20, 38, 60, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #00132A 100%)",
          }}
        />
      </div>

      <div className="absolute bottom-[-1100px] left-1/2 z-[1] h-[1585px] w-[1409px] -translate-x-1/2 rounded-full border-t-[120px] border-[#acbef8] blur-[75px]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Navbar */}
        <div className="px-6 pt-4 md:px-16 md:pt-4">
          <Header active="Home" />
        </div>

        {/* Hero content */}
        <div className="mt-auto px-6 pb-24 text-center md:px-8">
          <div className="mx-auto">
            <h1 className="text-[40px] font-bold leading-[1.15] text-white md:text-[56px]">
              {isArabic ? (
                <>
                  ابنِ وأدر وطوّر أعمالك
                  <br className="hidden md:block" />
                  قانونيًا واستراتيجيًا
                </>
              ) : (
                <>
                  Build, Operate, and Scale Your Business
                  <br className="hidden md:block" />
                  Legally and Strategically.
                </>
              )}
            </h1>

            <p className="mx-auto mt-6 text-base leading-[1.6] text-white/80 md:text-lg">
              {isArabic
                ? "نحن لا نقدم الاستشارات القانونية فقط، بل ننفذ ونبني وندعم أعمالك من التأسيس وحتى النمو داخل المملكة العربية السعودية."
                : "We go beyond legal consulting. We execute, structure, and support your business from setup to growth in Saudi Arabia."}
            </p>

            {/* Buttons */}
            <div className="mx-auto mt-10 grid max-w-[640px] gap-4 md:grid-cols-2">
              <Link
                className="flex h-[62px] items-center justify-center rounded-[14px] bg-white text-sm font-bold leading-[1.2] text-[#00132A] transition hover:bg-white/90"
                href={`/${locale}/projects`}
              >
                {isArabic
                  ? "ابدأ شركتك"
                  : "Start Your Company"}
              </Link>

              <Link
                className="flex h-[62px] items-center justify-center rounded-[14px] border border-white/20 bg-white/10 text-sm font-bold leading-[1.2] text-white backdrop-blur-sm transition hover:bg-white/15"
                href={`/${locale}/projects`}
              >
                {isArabic
                  ? "استكشف خدماتنا"
                  : "Explore Our Services"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
