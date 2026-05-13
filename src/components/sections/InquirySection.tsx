import { IconImage } from "@/components/ui/IconImage";

function Field({ label, value, area = false }: { label: string; value: string; area?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase leading-4 tracking-[1.2px] text-accent">{label}</span>
      <span
        className={`mt-[8.5px] flex w-full rounded-2xl border border-accent bg-[#ebf1ff]/10 px-5 text-base leading-[1.2] text-dim ${
          area ? "min-h-[131px] items-start pt-5" : "h-[61px] items-center"
        }`}
      >
        {value}
      </span>
    </label>
  );
}

function ContactRow({ icon, children }: { icon: "location" | "phone" | "email"; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-main">
        <IconImage name={icon} size={24} />
      </span>
      <p className="text-lg font-medium leading-[1.2] text-ink">{children}</p>
    </div>
  );
}

export function InquirySection() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-[1152px] gap-8 lg:grid-cols-[682px_1fr]">
        <div className="rounded-3xl bg-card/70 p-8 md:p-12">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.2] text-ink">Strategic Inquiry</h2>
            <p className="mt-1 text-base leading-[1.2] text-muted">
              Confidential brief for our executive consulting team.
            </p>
          </div>

          <form className="mt-12 space-y-6">
            <Field label="FULL NAME" value="Khalid Bin Ahmed" />
            <div className="grid gap-8 md:grid-cols-2">
              <Field label="COMPANY" value="Global Corp" />
              <Field label="EMAIL ADDRESS" value="k.ahmed@corp.com" />
            </div>
            <Field label="YOUR STRATEGIC VISION" value="Describe your market entry or growth objectives..." area />
            <button
              className="h-[59px] w-full rounded-2xl bg-accent text-base font-bold leading-[1.2] text-card transition hover:scale-[1.01]"
              type="button"
            >
              TRANSMIT INQUIRY
            </button>
          </form>
        </div>

        <aside className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center text-[32px] font-bold leading-[1.2] text-ink">Riyadh Headquarters</h2>
            <div className="flex flex-col gap-6">
              <ContactRow icon="location">
                Al Faisaliyah Center, King Fahd Rd, Olaya, Riyadh 12212, Saudi Arabia
              </ContactRow>
              <ContactRow icon="phone">+966 11 000 0000</ContactRow>
              <ContactRow icon="email">executive@al-sultan.sa</ContactRow>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center text-[32px] font-bold leading-[1.2] text-ink">Global Reach</h2>
            <div className="grid w-full gap-2">
              <article className="rounded-[48px] border border-white/10 bg-card p-[33px]">
                <h3 className="text-lg font-bold leading-7 text-ink">Dubai Satellite</h3>
                <p className="mt-1 text-sm leading-[22.75px] text-muted">DIFC Gate Avenue, Level 15, UAE</p>
              </article>
              <article className="rounded-[48px] border border-white/10 bg-card p-[33px]">
                <h3 className="text-lg font-bold leading-7 text-ink">London Office</h3>
                <p className="mt-1 text-sm leading-[22.75px] text-muted">
                  Mayfair Strategic Hub, Curzon St, W1J 7GB
                </p>
              </article>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
