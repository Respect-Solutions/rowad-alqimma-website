const readinessData = [
  {
    title: "Capital Requirement Audit",
    value: 95,
  },
  {
    title: "Regulatory Alignment",
    value: 80,
  },
  {
    title: "Operational Viability",
    value: 65,
  },
];

export function MarketReadinessIndex() {
  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-16">
      <div className="mx-auto max-w-[1152px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1D304A_100%)] px-10 py-12">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-[52px] font-bold leading-none text-white">
            Market Readiness Index
          </h2>

          <span className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
            Analysis Engine
          </span>
        </div>

        {/* Progress Bars */}
        <div className="mt-14 flex flex-col gap-10">
          {readinessData.map((item) => (
            <div key={item.title}>
              
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">
                  {item.title}
                </span>

                <span className="text-sm font-semibold text-white/70">
                  {item.value}%
                </span>
              </div>

              {/* Track */}
              <div className="h-[4px] w-full overflow-hidden rounded-full bg-white/10">
                
                {/* Fill */}
                <div
                  className="h-full rounded-full bg-[#C9D6FF]"
                  style={{
                    width: `${item.value}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button
            className="
              flex
              h-[64px]
              items-center
              justify-center
              rounded-full
              bg-white
              px-10
              text-sm
              font-bold
              text-[#14263D]
              transition
              hover:bg-white/90
            "
          >
            Calculate Your Readiness
          </button>
        </div>
      </div>
    </section>
  );
}
