import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#173333",
        secondary: "#afc9c0",
        tertiary: "#5aa95d",
        imageBackground: "#cedfbe",
        greenText: "#205139",
        footertext: "#CEDFBE",
        darkGreen: "#197675",
        darkGreenText: "#205139",
      },
      BackgroundImage: {
        "footer-texture": "url('/public/footer-design.png')",
      },
      fontFamily: {
        Loos: ["Loos", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
