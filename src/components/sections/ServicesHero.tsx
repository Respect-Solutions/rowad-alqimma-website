import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 pt-6 pb-24 md:px-16">
      {/* Glow */}
      <div className="absolute left-1/2 top-[55%] h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px]" />

      {/* Bottom Arc Glow */}
      <div className="absolute bottom-[-550px] left-1/2 z-[1] h-[1100px] w-[1409px] -translate-x-1/2 rounded-full border-t-[120px] border-[#acbef8] blur-[75px]" />

      <div className="relative z-10 mx-auto max-w-[1152px]">
        {/* Navbar */}
        <header className="pt-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              aria-label="Rowad Elqimma home"
              className="block shrink-0"
              href="/"
            >
              <Image
                width={56}
                height={62}
                alt="Rowad Elqimma logo"
                src="/assets/navLogo.png"
              />
            </Link>

            {/* Nav Links */}
            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-6 py-2 text-base font-medium leading-[1.4] transition ${
                    item.label === "Services"
                      ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* CTA */}
              <Link
                href="/projects"
                className="hidden h-[49px] w-[180px] items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm font-semibold leading-[1.2] text-white backdrop-blur-sm transition hover:bg-white/15 md:flex"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative pt-28 text-center">
          {/* Heading */}
          <h1 className="mx-auto max-w-[900px] text-[64px] font-bold leading-[1.05]">
            <span className="text-[#B9C7E4]">Comprehensive</span>

            <br />

            <span className="text-[#EFF0F1]">Business Services</span>
          </h1>
          {/* Cards */}
          <div className="relative mx-auto mt-10 flex h-[320px] max-w-[1152px] items-center justify-center">
            {/* Left Card */}
            <div className="absolute p-5 left-0 top-1/2 z-[1] flex h-[180px] w-[360px] -translate-y-1/2 -rotate-[-4deg] flex-col justify-center rounded-[28px] border-2 border-[#B9C7E4] bg-[#EBF1FF1A] backdrop-blur-[64px] transition duration-500 hover:z-20 hover:scale-[1.1]">
              <h3 className="text-[30px] font-bold text-white">
                Market & Growth
              </h3>

              <p className="mt-4 text-base leading-[1.6] text-white/65">
                We help you enter the Saudi market, build your brand, and scale
                your operations.
              </p>
            </div>

            {/* Center Card */}
            <div className="relative z-10 flex h-[220px] w-[540px] flex-col justify-center rounded-[32px] border-2 border-[#B9C7E4] bg-[#EBF1FF1A] p-5 backdrop-blur-[64px] shadow-[0_0_80px_rgba(201,214,255,0.15)] transition duration-500 hover:z-20 hover:scale-[1.1]">
              <h3 className="text-[42px] font-bold text-white">
                We Build Your Business
              </h3>

              <p className="mt-5 text-lg leading-[1.7] text-white/75">
                We don’t just consult — we execute and support your business
                from setup to growth.
              </p>
            </div>

            {/* Right Card */}
            <div className="absolute right-0 top-1/2 z-[1] flex h-[180px] w-[360px] -translate-y-1/2 rotate-[-4deg] flex-col justify-center rounded-[28px] border-2 border-[#B9C7E4] bg-[#EBF1FF1A] p-5 backdrop-blur-[64px] transition duration-500 hover:z-20 hover:scale-[1.1] ">
              <h3 className="text-[30px] font-bold text-white">
                Legal Foundation
              </h3>

              <p className="mt-4 text-base leading-[1.6] text-white/65">
                We handle all legal procedures to establish your business with
                full compliance and confidence.
              </p>
            </div>
          </div>
          {/* Explore */}
          <div className="mt-10 flex justify-center">
            <button className="group flex flex-col items-center text-center text-white">
              <span className="text-[22px] font-semibold tracking-[-0.02em]">
                Explore Our Services
              </span>

              {/* Arrow */}
              <span className="mt-4 flex animate-float-arrow items-center justify-center text-white/80 transition duration-300 group-hover:text-white">
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L11 11L21 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
