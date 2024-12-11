import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scans all files in app
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scans all other files in src
    "./src/app/page.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
    },
  },
  plugins: [],
};

export default config;
