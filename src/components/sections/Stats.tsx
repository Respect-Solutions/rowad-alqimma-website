import { stats } from "@/data/site";
import { Container } from "@/components/ui/Container";

type StatsProps = {
  variant?: "default" | "secondary";
};

export function Stats({
  variant = "default",
}: StatsProps) {
  const isSecondary = variant === "secondary";

  return (
    <section
      className={`
        px-6
        md:px-16
        ${isSecondary ? "py-24 " : ""}
      `}
    >
      <Container
        className={`
          rounded-3xl
          ${
            isSecondary
              ? "bg-[#27354C] py-20"
              : "py-12"
          }
        `}
      >
        <div
          className={`
            grid
            text-center
            sm:grid-cols-2
            lg:grid-cols-4
            ${
              isSecondary
                ? "gap-10"
                : "gap-6"
            }
          `}
        >
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong
                className={`
                  block
                  font-bold
                  leading-[1.2]
                  text-ink
                  ${
                    isSecondary
                      ? "text-6xl"
                      : "text-5xl"
                  }
                `}
              >
                {value}
              </strong>

              <span
                className={`
                  block
                  leading-[1.2]
                  text-soft
                  ${
                    isSecondary
                      ? "mt-2 text-xl"
                      : "mt-0.5 text-lg"
                  }
                `}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
