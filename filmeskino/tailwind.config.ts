import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-center',
    'text-left',
    'text-right',
    {pattern: /grid-cols-/},
    {pattern: /grid-rows-/}
  ],
  theme: {
    extend: {
      animation:{
        timer: 'wiggle 1s ease-in-out'
      },
      keyframes:{
        timer:{
          '0%': {width: '0'},
          '100%': {width: '100%'}
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        red: {
          kino: "#E50914"
        }
      }
    },
  },
  plugins: [],
};
export default config;
