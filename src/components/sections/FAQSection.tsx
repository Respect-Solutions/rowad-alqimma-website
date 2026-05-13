import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-[#14263D]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          alt=""
          className="object-cover object-center"
          fill
          priority
          src="/assets/home-hero-bg.jpg"
        />

        {/* Single clean overlay — أخف من الأول عشان الصورة تظهر */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(360deg, rgba(4, 29, 60, 0.75) 5.29%, rgba(33, 57, 93, 0.623798) 18.75%, rgba(37, 61, 98, 0.606516) 25.48%, rgba(43, 66, 103, 0.584296) 37.02%, rgba(55, 78, 117, 0.531119) 49.52%, rgba(180, 197, 255, 0) 100%),
              linear-gradient(270deg, rgba(102, 102, 102, 0) 0%, rgba(20, 38, 60, 0.75) 100%),
              linear-gradient(270deg, rgba(20, 38, 60, 0.75) 0%, rgba(20, 38, 60, 0) 100%),
              linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #00132A 100%)
            `,
          }}
        />

        {/* Blue glow bloom — الـ light الأزرق اللي في منتص الفيجما */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "38%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(100, 140, 255, 0.18) 0%, rgba(100, 140, 255, 0) 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>
      <div className="absolute bottom-[-1100px] left-1/2 z-[1] h-[1585px] w-[1409px] -translate-x-1/2 rounded-full border-t-[120px] border-[#acbef8] blur-[75px]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Navbar */}
        <header className="px-6 pt-10 md:px-16 md:pt-10">
          <nav className="mx-auto flex max-w-[1152px] items-center justify-between">
            {/* Logo */}
            <Link
              aria-label="Rowad Elqimma home"
              className="block shrink-0"
              href="/"
            >
              <Image
                alt="Rowad Elqimma logo"
                height={62}
                src="/assets/navLogo.png"
                width={56}
              />
            </Link>

            {/* Nav links */}
            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <Link
                  className={`rounded-lg px-5 py-2 text-base font-medium leading-[1.4] transition ${
                    item.label === "Home"
                      ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA button */}
            <Link
              className="hidden h-[44px] w-[180px] shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm font-semibold leading-[1.2] text-white backdrop-blur-sm transition hover:bg-white/15 md:flex"
              href="/projects"
            >
              Book Consultation
            </Link>
          </nav>
        </header>

        {/* Hero content — في النص بالظبط */}
        <div className="mt-auto px-6 pb-24 text-center md:px-8">
          <div className="mx-auto">
            <h1 className="text-[40px] font-bold leading-[1.15] text-white md:text-[56px]">
              Build, Operate, and Scale Your Business
              <br className="hidden md:block" />
              Legally and Strategically.
            </h1>

            <p className="mx-auto mt-6 text-base leading-[1.6] text-white/80 md:text-lg">
              We go beyond legal consulting. We execute, structure, and support
              your business from setup to growth in Saudi Arabia.
            </p>

            {/* Buttons */}
            <div className="mx-auto mt-10 grid max-w-[640px] gap-4 md:grid-cols-2">
              <Link
                className="flex h-[62px] items-center justify-center rounded-[14px] bg-white text-sm font-bold leading-[1.2] text-[#00132A] transition hover:bg-white/90"
                href="/projects"
              >
                Start Your Company
              </Link>

              <Link
                className="flex h-[62px] items-center justify-center rounded-[14px] border border-white/20 bg-white/10 text-sm font-bold leading-[1.2] text-white backdrop-blur-sm transition hover:bg-white/15"
                href="/projects"
              >
                Start Your Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
