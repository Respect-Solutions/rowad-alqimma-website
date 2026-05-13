import { Button } from "../ui/Button";

export function CTASection() {
  return (
    <section className="px-6 py-16 md:px-16">
      <div className="mx-auto max-w-[1152px]">
        <div className="rounded-3xl border-2 border-white/10 bg-accent px-8 py-12 text-center">
              <h2 className="text-[34px] font-bold leading-[1.2] text-main md:text-5xl">
                Ready to Deploy Your Legal Infrastructure?
              </h2>
              <p className="mt-2 text-lg leading-[1.2] text-graphite">
                Don't just hire a lawyer. Install a system that scales with your ambition.
                <br />
                Connect with our architects today.
              </p>
              <Button className="mt-12 h-[62px] w-full max-w-[438px]" variant="dark">
                Start Your Company
              </Button>
            </div>
      </div>
    </section>
  );
}
