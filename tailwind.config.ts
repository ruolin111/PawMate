import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#173149",
        muted: "#657383",
        cream: "#FAF7F1",
        paper: "#FFFDF9",
        clay: "#D9664F",
        sage: "#87A990",
        peach: "#F4D5C4",
        mist: "#DBE9E7",
        butter: "#F6E5AE",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 49, 73, 0.08)",
        card: "0 8px 24px rgba(23, 49, 73, 0.07)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
