/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 15px 15px rgba(238, 144, 3, 0.5)",
      },
    },
  },
  plugins: [],
};
