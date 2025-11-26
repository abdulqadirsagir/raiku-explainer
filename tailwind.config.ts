import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this line exists
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // Ensure this line exists
  ],
  theme: {
    extend: {
      // your theme settings
    },
  },
  plugins: [],
};
export default config;
