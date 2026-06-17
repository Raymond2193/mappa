/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2563EB",
        "brand-dark": "#1D4ED8",
        surface: "#FFFFFF",
        "bg-base": "#F1F5F9",
        "border-subtle": "#E2E8F0",
      },
    },
  },
  plugins: [],
};
