type ButtonProps = {
  children: React.ReactNode;
  variant?: "dark" | "light" | "ghost";
  className?: string;
};

const variants = {
  dark: "bg-main text-ink border-white/10",
  light: "bg-accent text-main border-[#ebf1ff]/10",
  ghost: "bg-[#ebf1ff]/10 text-ink border-[#ebf1ff]/10 backdrop-blur-[2px]"
};

export function Button({ children, variant = "ghost", className = "" }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl border-2 px-8 py-5 text-sm font-bold leading-[1.2] transition duration-200 hover:scale-[1.01] ${variants[variant]} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
