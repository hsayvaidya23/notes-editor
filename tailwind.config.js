/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#2563eb",
        "neutral-light": "#f5f5f5",
        "neutral-dark": "#1f2937",
      },
    },
  },
  plugins: [],
};
