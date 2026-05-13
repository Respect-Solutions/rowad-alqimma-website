import Image from "next/image";

const features = [
  {
    title: "Foreign Investment",
    description:
      "We don’t stop at consulting, we implement and deliver results.",
    icon: "/icons/foreign-investment.svg",
  },
  {
    title: "Beyond Legal Support",
    description:
      "We combine legal expertise with business strategy and operational execution.",
    icon: "/icons/legal-support.svg",
  },
  {
    title: "One Integrated System",
    description:
      "Everything your business needs under one structured framework.",
    icon: "/icons/integrated-system.svg",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-24">
      <div className="mx-auto max-w-[1152px] rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1D304A_100%)] px-10 py-10">
        
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-[52px] font-bold leading-none text-white">
                Why Choose Us
              </h2>

              <span className="mt-2 text-sm font-medium text-white/45">
                The Future of Legal Architecture
              </span>
            </div>

            <p className="mt-5 max-w-[820px] text-sm leading-[1.8] text-white/55">
              We provide hyper-specialized legal services for the world’s most
              ambitious projects. From the heart of Riyadh to the frontiers of
              NEOM.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                flex
                min-h-[120px]
                flex-col
                justify-between
                rounded-[12px]
                border
                border-white/10
                bg-[#27354C]
                p-5
                backdrop-blur-[12px]
              "
            >
              <div className="flex items-start gap-4">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-[#31425D]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={22}
                    height={22}
                  />
                </div>

                <div>
                  <h3 className="text-[20px] font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-[1.7] text-white/55">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
;
