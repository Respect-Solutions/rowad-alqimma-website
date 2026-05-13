import Link from "next/link";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { IconImage } from "@/components/ui/IconImage";

type HeaderProps = {
  active?: "Home" | "About" | "Services" | "Projects";
  lightButton?: boolean;
};

export function Header({ active, lightButton = false }: HeaderProps) {
  return (
    <header className="relative z-20 px-6 py-8 md:px-12 lg:px-16 lg:py-16">
      <nav className="mx-auto flex max-w-[1152px] items-center gap-6 md:gap-[33px]">
        <Link aria-label="Rowad Elqama home" className="flex w-[96px] items-center md:w-[164px]" href="/">
          <IconImage name={lightButton ? "logoContact" : "logoAbout"} width={56} height={62} />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-8 md:flex">
          {navItems.map((item) =>
            item.label === active ? (
              <Link
                className="rounded-lg border-2 border-white/10 bg-white/10 px-8 py-2 text-lg font-medium leading-[1.2] text-[#f6f4ef]"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                className="text-lg font-medium leading-[1.2] text-soft transition hover:text-ink"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <Link href="/projects">
          <Button
            className={`hidden h-[49px] w-[164px] rounded-lg px-0 py-0 text-sm md:inline-flex ${
              lightButton ? "bg-accent text-main" : ""
            }`}
            variant={lightButton ? "light" : "ghost"}
          >
            Book Consultation
          </Button>
        </Link>
      </nav>
    </header>
  );
}
