/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGray: "hsl(0, 0%, 63%)",
          veryDarkGray: "hsl(0, 0%, 27%)",
          black: "hsl(0, 0%, 0%)",
          white: "hsl(0, 0%, 100%)",
        },
        secondary: {
          100: "#EE9972",
          200: "#FBDABB",
          300: "#EDEFEE",
          400: "#333333",
        },
      },
      fontFamily: {
        primary: ["Markazi Text, serif"],
        secondary: ["Karla, sans-serif"],
      },
      gridTemplateColumns: {
        categoryCol: "repeat(8,minmax(70px, 1fr))",
        filteredCol: "repeat(8,22.63em)",
        productCol: "repeat(auto-fit,minmax(22.63em, 1fr))",
      },
      gridTemplateRows: {
        categoryRow: "repeat(4,minmax(30px, 60px))",
        // productRow: "repeat(auto-fit,minmax(280px, 280px))",
        productRow: "repeat(auto-fit,minmax(220px, 220px))",
      },
      gridAutoRows: {
        productAutoRow: "280px",
      },
      borderColor: "#495E57",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
