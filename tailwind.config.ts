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
        jumbotron: "url('/assets/image/enc-jumbotron.png')",
      },
      colors: {
        "enc-green": "#04AD7D",
        "enc-solid-dark": "#1E1E1E",
        "enc-black": "#000000",
        "enc-light-green": "#ECF1EB",
        "enc-light-grey": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
