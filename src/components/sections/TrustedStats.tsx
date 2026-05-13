import { Stats } from "./Stats";

const stats = [
  {
    value: "10B+",
    label: "Companies",
  },
  {
    value: "500+",
    label: "Years",
  },
  {
    value: "15+",
    label: "Global Offices",
  },
  {
    value: "99%",
    label: "Success Rate",
  },
];

export function TrustedStats() {
  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-14">
      <div className="mx-auto max-w-[1152px]">
        
        {/* Heading */}
        <h2 className="text-center text-[56px] font-bold leading-none text-[#B9C7E4]">
          Trusted by Businesses Across Saudi Arabia
        </h2>

        {/* Stats */}
        <Stats/>
      </div>
    </section>
  );
}
;
