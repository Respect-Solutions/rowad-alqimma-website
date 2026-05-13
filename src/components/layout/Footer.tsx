import { footerColumns } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="rounded-t-3xl border-2 border-white/10 bg-main px-6 py-12 md:px-16 md:py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-0">
          <div>
            <h2 className="text-lg font-bold leading-[1.2] text-ink">Rowad Elqama</h2>
            <p className="mt-3 max-w-[283px] text-sm leading-[1.2] text-soft">
              Building the legal foundations for the future of trade and innovation in Saudi Arabia.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div className="flex flex-col gap-3" key={column.title}>
              <h3 className="text-lg font-bold leading-[1.2] text-ink">{column.title}</h3>
              {column.links.map((link, index) => (
                <a className="text-sm leading-[1.2] text-soft transition hover:text-ink" href="#" key={`${link}-${index}`}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-base font-bold leading-[1.2] text-ink">
          © 2024 NEOM Justice. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
