type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-[34px] font-bold leading-[1.2] text-ink md:text-5xl">{title}</h2>
      <p className="mt-2 text-base leading-[1.2] text-soft md:text-[22px]">{subtitle}</p>
    </div>
  );
}
