import { bentoCards } from "@/data/site";
import { IconImage } from "@/components/ui/IconImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WhoWeAre() {
  return (
    <section className="rounded-[48px] bg-main px-6 py-16 md:px-16">
      <div className="mx-auto max-w-[1152px]">
        <SectionTitle
          title="Who We Are"
          subtitle="We don’t just provide legal support we design, execute, and scale business infrastructure."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {bentoCards.map((card) => {
            const isLight = "light" in card && card.light;
            const className = "className" in card ? card.className : "";

            return (
              <article
                className={`flex min-h-[280px] flex-col justify-center rounded-3xl border-2 p-8 ${
                  isLight ? "border-transparent bg-accent text-main" : "border-white/10 bg-card/70 text-ink"
                } ${className}`}
                key={card.title}
              >
                <h3 className={`text-[32px] font-bold leading-[1.2] ${isLight ? "text-main" : "text-ink"}`}>
                  {card.title}
                </h3>
                <p className={`mt-4 text-lg leading-[1.2] ${isLight ? "text-graphite" : "text-soft"}`}>
                  {card.body}
                </p>
                {"action" in card ? (
                <a className="mt-8 flex items-center gap-2 text-base font-bold leading-[1.2] text-ink" href="#">
                  <span className="flex-1">{card.action}</span>
                  <IconImage name="arrowRight" size={14} />
                </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
