import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        example: {
          100:'#0FB2AF',
          200:'#25255C',
          300:'#815406',
          400:'#79674A',
          500:'#794A72',
          600:'#00716E',
          700:'#04D7D2'

        },
      },
    },
  },
  plugins: [],
};
export default config;
