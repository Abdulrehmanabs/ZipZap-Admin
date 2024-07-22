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
        "sidebar-green": "#0D8812",
        "sidebar-white": "#FFFFFF",
        "button-success-bg": "#E1FFDC",
        "button-success-text": "#5F8D4E",
        "button-error-bg": "#FFE2E5",
        "button-error-text": "#F64E60",
      },
    },
  },
  plugins: [],
};
export default config;
