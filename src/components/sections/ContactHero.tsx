import Image from "next/image";
import { assets } from "@/lib/assets";
import { IconImage } from "@/components/ui/IconImage";

export function ContactHero() {
  return (
    <section className="relative flex min-h-[646px] items-center justify-center overflow-hidden px-6 pb-16 pt-20 md:min-h-[836px] md:px-16">
      <Image alt="" className="object-cover opacity-90" fill priority src={assets.contactAura} unoptimized />
      <div className="relative z-10 mx-auto flex max-w-[992px] flex-col items-center gap-16 text-center">
        <div className="w-full">
          <h1 className="text-[52px] font-bold leading-[1.2] text-ink md:text-[80px]">
            Connect with
            <br />
            Excellence
          </h1>
          <div className="mt-8 rounded-[32px] border-2 border-accent bg-[#ebf1ff]/10 px-8 py-8 backdrop-blur-[32px] md:px-32">
            <p className="text-[24px] font-bold leading-[1.2] text-ink md:text-[32px]">
              Your strategic entry into the Saudi market begins with a single conversation.
            </p>
          </div>
        </div>

        <button className="flex flex-col items-center gap-2 text-[22px] font-bold leading-[1.2] text-[#f5f5f5]" type="button">
          Let’s Connect
          <IconImage name="arrowDown" size={24} />
        </button>
      </div>
    </section>
  );
}
