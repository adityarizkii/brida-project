import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#009288",
        secondary: "#AB9564",
        neutral950: "#23272E",
        neutral500: "#64748B",
        black600: "#5D5D5D",
        black950: "#161616",
        info: "#0A77FF",
        input: "#F8F9FB",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
};
export default config;
