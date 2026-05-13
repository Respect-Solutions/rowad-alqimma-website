import Image from "next/image";

export function VisionMission() {
  return (
    <section className="relative max-w-[1125px] mx-auto overflow-hidden bg-[#14263D] py-24">
      
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[1152px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_1fr]">
        
        {/* Vision Card */}
        <div className="relative min-h-[520px] rounded-[32px] border border-white/10 bg-[#27354C] px-10 py-10 backdrop-blur-[12px]">
          
          {/* Icon */}
          <div className="absolute right-10 top-10">
            <Image
              src="/icons/vision.svg"
              alt="Vision"
              width={34}
              height={34}
            />
          </div>

          <h2 className="text-[48px] font-bold text-white">
            Our Vision
          </h2>

          <p className="mt-10 max-w-[520px] text-[28px] leading-[1.5] text-white/80">
            To be the premier architect of commercial success in the Middle
            East, transforming the Saudi Arabian market into a global hub of
            seamless business integration and unparalleled innovation.
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex items-center">
          <div className="relative w-full rounded-[32px] border border-white/10 bg-[#27354C] px-10 py-10 backdrop-blur-[12px]">
            
            {/* Icon */}
            <div className="absolute right-10 top-10">
              <Image
                src="/icons/mission.svg"
                alt="Mission"
                width={34}
                height={34}
              />
            </div>

            <h2 className="text-[48px] font-bold text-white">
              Our Mission
            </h2>

            <p className="mt-8 max-w-[520px] text-[24px] leading-[1.7] text-white/70">
              Empowering global enterprises through rigorous legal strategy,
              transparent governance, and operational excellence, ensuring every
              client builds a foundation that is both permanent and profitable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
;
