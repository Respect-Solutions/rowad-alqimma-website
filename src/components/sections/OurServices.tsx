import Image from "next/image";

const services = [
  {
    title: "Business Setup",
    icon: "/icons/business-setup.svg",
  },
  {
    title: "Legal Consulting",
    icon: "/icons/legal-consulting.svg",
  },
  {
    title: "Business Consulting",
    icon: "/icons/business-consulting.svg",
  },
  {
    title: "Marketing Services",
    icon: "/icons/marketing-services.svg",
  },
];

export function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[#14263D] py-28">
      <div className=" rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1B2F4B_100%)] px-6 py-12 md:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[48px] font-bold leading-[1.1] text-white">
            Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-[1.7] text-white/55">
            Each service is designed to support a specific layer of your
            business from legal setup to market execution and growth.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr] mx-auto max-w-[1152px]">
          {/* Featured Card */}
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[20px] border border-[#B4C5FF]/40 bg-[#10233D] px-8 text-center shadow-[0_0_80px_rgba(180,197,255,0.06)]">
            <div className="flex h-[96px] w-[96px] items-center justify-center">
              <Image
                src="/icons/market-entry.svg"
                alt="Market Entry Strategy"
                width={84}
                height={84}
              />
            </div>

            <h3 className="mt-8 text-[42px] font-bold leading-[1.1] text-white">
              Market Entry Strategy
            </h3>

            <p className="mt-4 max-w-[420px] text-base leading-[1.7] text-white/60">
              We help you understand and enter the Saudi market successfully.
            </p>
          </div>

          {/* Service List */}
          <div className="flex flex-col gap-4">
            {services.map((service) => (
              <button
                key={service.title}
                className="
                  flex
                  h-[84px]
                  items-center
                  gap-4
                  rounded-[14px]
                  border
                  border-white/10
                  bg-[#27354C]
                  px-6
                  text-left
                  backdrop-blur-[12px]
                  transition
                  duration-300
                  hover:border-[#B4C5FF]/30
                  hover:bg-[#31425D]
                "
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                />

                <span className="text-[26px] font-semibold text-white">
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
