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

  const handleScrollDown = () => {
    const allSections = Array.from(document.querySelectorAll("section"));
    const currentSection = document.querySelector("section");
    const currentIndex = allSections.findIndex(
      (section) => section === currentSection,
    );
    const nextSection = allSections[currentIndex + 1];

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#14263D] pb-12 md:pb-24">
      {/* Glow */}
      <div className="absolute left-1/2 top-[55%] h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px]" />

      {/* Bottom Arc Glow */}
      <div className="absolute bottom-[-550px] left-1/2 z-[1] h-[1100px] w-[1409px] -translate-x-1/2 rounded-full border-t-[120px] border-[#acbef8] blur-[75px]" />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <div className="px-4 pt-4 sm:px-6 md:px-16 md:pt-4">
          <Header
            active={activeNav as "Home" | "About" | "Services" | "Projects"}
          />
        </div>

        {/* Hero Content */}
        <div
          className={`relative text-center ${
            isProjects
              ? "pt-14 sm:pt-20 md:pt-48"
              : "pt-12 sm:pt-16 md:pt-28"
          }`}
        >
          {/* Heading */}
          <h1 className="mx-auto max-w-[900px] px-4 text-[32px] font-bold leading-[1.1] sm:px-6 sm:text-[48px] md:text-[56px] lg:text-[64px] md:leading-[1.05]">
            {title}
          </h1>

          {/* ── Cards ── */}
          {isProjects ? (
            <div className="relative mx-auto mt-8 flex items-center justify-center px-4 sm:mt-10 sm:px-6">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="
                    relative flex w-full max-w-[1152px]
                    items-center justify-center rounded-[24px]
                    border-2 border-[#B9C7E4] bg-[#EBF1FF1A]
                    px-5 py-6 text-center backdrop-blur-[64px]
                    sm:rounded-[32px] sm:px-10 sm:py-8
                    md:min-h-[120px]
                  "
                >
                  <h3 className="max-w-[900px] text-[18px] font-bold leading-[1.7] text-white sm:text-[24px] md:text-[28px] md:leading-[1.4]">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* ── Mobile & small tablets: stacked ── */}
              <div className="mt-8 flex flex-col items-center gap-4 px-4 sm:px-6 md:hidden">
                {cards.map((card) => (
                  <div
                    key={card.title}
                    className="
                      w-full max-w-[480px] rounded-[24px]
                      border-2 border-[#B9C7E4] bg-[#EBF1FF1A]
                      p-5 backdrop-blur-[64px]
                    "
                  >
                    <h3 className="text-[22px] font-bold text-white">
                      {card.title}
                    </h3>

                    {card.description && (
                      <p className="mt-3 text-base leading-[1.6] text-white/65">
                        {card.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* ── md+: original absolute layout ── */}
              <div className="relative mx-auto mt-10 hidden h-[320px] max-w-[1152px] items-center justify-center md:flex">
                {cards.map((card) => {
                  const isCenter = card.position === "center";

                  return (
                    <div
                      key={card.title}
                      className={`
                        absolute flex flex-col justify-center
                        rounded-[28px] border-2 border-[#B9C7E4]
                        bg-[#EBF1FF1A] backdrop-blur-[64px]
                        transition duration-500 hover:z-20 hover:scale-[1.05]

                        ${
                          isCenter
                            ? "relative z-10 h-[220px] w-[540px] p-5"
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

                        ${card.position === "center" ? "relative" : ""}
                      `}
                    >
                      <h3
                        className={`font-bold text-white ${
                          isCenter ? "text-[42px]" : "text-[30px]"
                        }`}
                      >
                        {card.title}
                      </h3>

                      {card.description && (
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
            </>
          )}

          {/* Explore */}
          <div className="mt-8 flex justify-center md:mt-4">
            <button
              onClick={handleScrollDown}
              className="group flex flex-col items-center text-center text-white"
            >
              <span className="text-[16px] font-semibold tracking-[-0.02em] sm:text-[18px] md:text-[22px]">
                {exploreText}
              </span>

              <span className="mt-2 flex animate-float-arrow items-center justify-center text-white/80 transition duration-300 group-hover:text-white">
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

