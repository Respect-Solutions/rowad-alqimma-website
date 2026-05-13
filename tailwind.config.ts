import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#14263D",
        card: "#27354C",
        accent: "#B9C7E4",
        mist: "#EBF1FF",
        ink: "#EFF0F1",
        soft: "#BEC1C4",
        muted: "#A3A7AC",
        dim: "#7C8288",
        graphite: "#44494E"
      },
      fontFamily: {
        plex: ["var(--font-ibm-plex)", "IBM Plex Sans", "sans-serif"]
      },
      boxShadow: {
        figma: "0 24px 80px rgba(20, 38, 61, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
