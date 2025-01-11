import type { Config } from "tailwindcss";

export default {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [],
} satisfies Config;
