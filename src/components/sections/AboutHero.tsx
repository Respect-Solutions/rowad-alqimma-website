import Image from "next/image";
import Link from "next/link";
import { aboutFeatures, navItems } from "@/data/site";
import { assets } from "@/lib/assets";
import { IconImage } from "@/components/ui/IconImage";

export function AboutHero() {
  return (
    <section className="px-6 pb-16 pt-10 md:px-16 md:pt-16">
      {/* Navbar */}
      <header>
        <nav className="mx-auto flex max-w-[1152px] items-center justify-between">
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

          {/* Nav links */}
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                className={`rounded-lg px-6 py-2 text-base font-medium leading-[1.4] transition ${
                  item.label === "About"
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
            className="hidden h-[49px] w-[180px] shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm font-semibold leading-[1.2] text-white backdrop-blur-sm transition hover:bg-white/15 md:flex"
            href="/projects"
          >
            Book Consultation
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="mx-auto mt-16 grid max-w-[1152px] items-center gap-12 lg:grid-cols-[1fr_528px]">
        <div>
          <div className="py-6">
            <h1 className="max-w-[576px] text-[36px] font-bold leading-[1.2] text-ink md:text-[40px]">
              Navigating Regulations with Precision
            </h1>

            <p className="mt-4 max-w-[576px] text-lg leading-[1.2] text-muted">
              ROAD ELQAMA Consultancy stands at the intersection of traditional
              Saudi values and modern global business standards. We provide the
              structural backbone for foreign and domestic investors to thrive
              within Vision 2030’s framework.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-8 py-6">
            {aboutFeatures.map((feature) => (
              <div className="flex items-center" key={feature.label}>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#ebf1ff]/10">
                  <IconImage name={feature.icon} size={22} />
                </span>

                <span className="pl-6 text-[22px] font-bold leading-[1.2] text-soft">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-[544px] overflow-hidden rounded-[32px]">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            src={assets.heroPerson}
            unoptimized
          />

          <div className="relative mt-auto flex h-[211px] w-full items-center justify-center rounded-[32px] border-l border-t border-white/10 bg-gradient-to-b from-[#5b7cb2]/0 to-[#27354c]/25 p-12 text-center backdrop-blur-[32px]">
            <p className="text-[28px] leading-[1.2] text-ink md:text-[32px]">
              "We don't just consult;
              <br />
              we execute the vision of
              <br />
              your enterprise."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
