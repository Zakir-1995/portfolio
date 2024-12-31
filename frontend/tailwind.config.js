/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      alabastar: "#f9f9f9",
      iron: "#dcdedd",
      spicymix: "#74483f",
      masala: "#4b4643",
    },
    extend: {
      fontFamily: {
        DM: ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
