import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        large: "80%",
        1366: "1095px",
        tablet: "880px",
      },
      backgroundImage: {
        "full-bg": "url('/images/BG-Image.png')",
        "tech-bg": "url('/images/Techno.png')",
        "soon-bg": "url('/images/Contact Us Bg.png')",
        "tab-bg": "url('/images/tab.png')",
        "mobile-bg": "url('/images/bg-mobile.png')",
        Mobile: "url('/images/Card1.png')",
        Power: "url('/images/Card2.png')",
        Laptop: "url('/images/Card3.png')",
        Gaming: "url('/images/Card4.png')",
        Headphone: "url('/images/HeadphoneBackground.png')",
        Smartwatch: "url('/images/SmartwatchBackground.png')",
        Fitness: "url('/images/FitnessBackground.png')",
        Major: "url('/images/MajorBackground.png')",
        About: "url('/images/AboutBackground.png')",
        Contact: "url('/images/count.png')",
        "open-bg": "url('/images/open1.png')",
        "close-bg": "url('/images/close1.png')",
      },
      backgroundClip: {
        text: "text",
      },
      dropShadow: {
        "3xl": "0 4px 84px rgba(0, 0, 0, 0.25)",
        "4xl": "0px 0px 100px rgba(0, 0, 0, 0.15)",
        "5xl": "0px 4.979px 29.872px rgba(0, 0, 0, 0.25)",
        header: "0px 7px 14px 0px #00000014",
      },
      boxShadow: {
        "6xl": "-11px -4px 11px 20px #f9f9f9",
      },
      screens: {
        s: "320px",

        sm: "580px",

        md: "680px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",

        "3xl": "1980px",

        "4xl": "2570px",
      },
    },
  },
  plugins: [],
} satisfies Config;
