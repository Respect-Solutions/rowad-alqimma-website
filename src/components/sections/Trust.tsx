import Image from "next/image";
import { assets } from "@/lib/assets";
import { IconImage } from "@/components/ui/IconImage";
import { Button } from "@/components/ui/Button";

function TestimonialCard() {
  return (
    <article className="w-[560px] shrink-0 rounded-3xl border-2 border-white/10 bg-card p-[34px]">
      <p className="text-lg leading-[1.2] text-soft">
        "NEOM Justice provided the clarity we needed to navigate a multi-billion dollar joint venture. Their technical
        expertise is matched only by their local strategic foresight."
      </p>
      <div className="mt-4 flex items-center gap-4">
        <span className="relative size-12 overflow-hidden rounded-xl">
          <Image alt="" fill src={assets.testimonialAvatar} unoptimized />
        </span>
        <span>
          <strong className="block text-sm font-bold leading-[1.2] text-ink">Alexander Vance</strong>
          <span className="block text-xs leading-[1.2] text-soft">CEO, Global Tech Infrastructure</span>
        </span>
      </div>
    </article>
  );
}

export function Trust() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-16">
      <div className="absolute left-1/2 top-6 size-[732px] -translate-x-1/2 rounded-full  blur-[75px]" />
      <div className="relative mx-auto max-w-[1152px]">
        <div className="flex items-end gap-2">
          <IconImage name="quoteMark" width={26} height={18} />
          <h2 className="text-5xl font-bold leading-[1.2] text-ink">Sovereign Trust</h2>
        </div>
        <div className="mt-8 flex gap-4 overflow-hidden rounded-2xl">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
