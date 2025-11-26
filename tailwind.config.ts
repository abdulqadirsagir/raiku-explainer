import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Scan EVERY possible folder to ensure files are found
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // 2. Use 'extend' to KEEP standard colors (slate, cyan, white)
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      // 3. We ensure your specific fonts are recognized
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-orbitron)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
