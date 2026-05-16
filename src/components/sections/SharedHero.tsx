"use client";

import { Header } from "../layout/Header";
import { useLocale } from "@/hooks/useLocale";

type HeroCard = {
  title: string;
  description?: string;
  position?: "left" | "center" | "right";
};

type SharedHeroProps = {
  activeNav: string;
  title: React.ReactNode;
  exploreText: string;
  cards: HeroCard[];
  variant?: "services" | "projects";
};

export function SharedHero({
  activeNav,
  title,
  exploreText,
  cards,
  variant = "services",
}: SharedHeroProps) {
  const isProjects = variant === "projects";

  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] pb-24">
      
      {/* Glow */}
      <div className="absolute left-1/2 top-[55%] h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px]" />

      {/* Bottom Arc Glow */}
      <div className="absolute bottom-[-550px] left-1/2 z-[1] h-[1100px] w-[1409px] -translate-x-1/2 rounded-full border-t-[120px] border-[#acbef8] blur-[75px]" />

      <div className="relative z-10 flex flex-1 flex-col">
        
        {/* Header */}
        <div className="px-6 pt-4 md:px-16 md:pt-4">
          <Header
            active={
              activeNav as
                | "Home"
                | "About"
                | "Services"
                | "Projects"
            }
          />
        </div>

        {/* Hero Content */}
        <div
          className={`relative text-center ${
            isProjects ? "pt-48" : "pt-28"
          }`}
        >
          
          {/* Heading */}
          <h1 className="mx-auto max-w-[900px] text-[64px] font-bold leading-[1.05]">
            {title}
          </h1>

          {/* Cards */}
          <div
            className={`relative mx-auto mt-10 flex items-center justify-center ${
              isProjects
                ? "h-[180px]"
                : "h-[320px] max-w-[1152px]"
            }`}
          >
            {cards.map((card) => {
              const isCenter =
                card.position === "center";

              return (
                <div
                  key={card.title}
                  className={
                    isProjects
                      ? `
                        relative
                        flex
                        h-[120px]
                        w-full
                        max-w-[1152px]
                        items-center
                        justify-center
                        rounded-[32px]
                        border-2
                        border-[#B9C7E4]
                        bg-[#EBF1FF1A]
                        px-10
                        text-center
                        backdrop-blur-[64px]
                      `
                      : `
                        absolute
                        flex
                        flex-col
                        justify-center
                        rounded-[28px]
                        border-2
                        border-[#B9C7E4]
                        bg-[#EBF1FF1A]
                        backdrop-blur-[64px]
                        transition
                        duration-500
                        hover:z-20
                        hover:scale-[1.05]

                        ${
                          isCenter
                            ? "z-10 h-[220px] w-[540px] p-5"
                            : "h-[180px] w-[360px] p-5"
                        }

                        ${
                          card.position === "left"
                            ? isArabic
                              ? "right-0 top-1/2 -translate-y-1/2 rotate-[4deg]"
                              : "left-0 top-1/2 -translate-y-1/2 -rotate-[-4deg]"
                            : ""
                        }

                        ${
                          card.position === "right"
                            ? isArabic
                              ? "left-0 top-1/2 -translate-y-1/2 -rotate-[4deg]"
                              : "right-0 top-1/2 -translate-y-1/2 rotate-[-4deg]"
                            : ""
                        }

                        ${
                          card.position === "center"
                            ? "relative"
                            : ""
                        }
                      `
                  }
                >
                  <h3
                    className={`font-bold text-white ${
                      isProjects
                        ? "max-w-[900px] text-[28px] leading-[1.4]"
                        : isCenter
                          ? "text-[42px]"
                          : "text-[30px]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {!isProjects &&
                    card.description && (
                      <p
                        className={`mt-4 text-white/65 ${
                          isCenter
                            ? "text-lg leading-[1.7]"
                            : "text-base leading-[1.6]"
                        }`}
                      >
                        {card.description}
                      </p>
                    )}
                </div>
              );
            })}
          </div>

          {/* Explore */}
          <div className="mt-10 flex justify-center">
            <button className="group flex flex-col items-center text-center text-white">
              <span className="text-[22px] font-semibold tracking-[-0.02em]">
                {exploreText}
              </span>

              {/* Arrow */}
              <span className="mt-4 flex animate-float-arrow items-center justify-center text-white/80 transition duration-300 group-hover:text-white">
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L11 11L21 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
