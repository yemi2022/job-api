/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: { max: "950px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      tb: { max: "1023px" },

      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
