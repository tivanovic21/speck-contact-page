import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        'heywow': ['HeyWow', 'sans-serif'],
        'garibaldi': ['Garibaldi', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'speck-red': '#BF3939',
        'speck-footer-bg': '#212129', 
        'speck-footer-label': '#83838F',
        'speck-ligt-siva': '#CBD3D6'
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
export default config;
