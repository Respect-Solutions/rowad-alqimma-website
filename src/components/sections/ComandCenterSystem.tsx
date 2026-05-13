import Image from "next/image";

const phases = [
  {
    id: "01",
    title: "Analysis",
    description:
      "Regulatory feasibility and structural scoping.",
    icon: "/icons/analysis.svg",
  },
  {
    id: "02",
    title: "Licensing",
    description:
      "Securing MISA investment certificates.",
    icon: "/icons/licensing.svg",
  },
  {
    id: "03",
    title: "Banking",
    description:
      "Local capital account structuring.",
    icon: "/icons/banking.svg",
  },
  {
    id: "04",
    title: "Operational",
    description:
      "Visas, office space, and GOSI registration.",
    icon: "/icons/operational.svg",
  },
  {
    id: "05",
    title: "Continuity",
    description:
      "Ongoing compliance and annual renewals.",
    icon: "/icons/continuity.svg",
  },
];

const features = [
  "REGULATORY CONTROL",
  "OWNERSHIP PROTECTION",
  "COMPLIANCE CONTINUITY",
  "STRUCTURAL STABILITY",
];

export function CommandCenterSystem() {
  return (
    <section className="relative overflow-hidden bg-[#14263D] py-32">
      <div className=" rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1B2F4B_100%)] px-8 py-14 shadow-[0_0_120px_rgba(201,214,255,0.08)]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[56px] font-bold leading-[1.1] text-white">
            The Command Center System
          </h2>

          <p className="mt-4 text-lg font-medium text-[#B4C5FF]/70">
            Five distinct phases of institutional transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5 mx-auto max-w-[1152px]">
          {phases.map(
            (phase) =>
<div
  key={phase.id}
  className="
    group
    relative
    flex
    min-h-[130px]
    flex-col
    justify-between
    gap-4
    rounded-[12px]
    border-2
    border-white/10
    bg-[#27354C]
    p-4
    backdrop-blur-[12px]
    transition
    duration-300
    hover:border-[#B4C5FF]/30
    text-center
  "
>
  <div>
    <h3 className="text-[20px] font-bold text-white">
      {phase.title}
    </h3>

    <p className="mt-4 text-sm leading-[1.6] text-[#B4C5FF]/65">
      {phase.description}
    </p>
  </div>

  <div className="flex items-center justify-between">
    <Image
      src={phase.icon}
      alt={phase.title}
      width={24}
      height={24}
    />

    <span className="text-[24px] font-bold text-[#D7C29A]">
      {phase.id}
    </span>
  </div>
</div>
,
          )}
        </div>

        {/* Bottom Features */}
        <div className="mt-10 rounded-[18px] border border-white/10 bg-white/[0.02] px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full bg-[#D7C29A]" />

                <span className="text-sm font-semibold tracking-[0.08em] text-white/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
