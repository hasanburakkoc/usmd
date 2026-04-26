import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        trust: {
          green: "#059669"
        },
        medical: {
          teal: "#0F766E"
        },
        clean: {
          white: "#F8FAFC"
        },
        slate: {
          gray: "#334155"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
