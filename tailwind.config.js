/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xlx": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xlx: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        xxl: { max: "1110px" },
        // => @media (max-width: 1279px) { ... }

        lgx: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        llgx: { max: "900px" },
        // => @media (max-width: 1023px) { ... }

        mdx: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smx: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xsx: { max: "480px" },

        xxsx: { max: "445px" },
      },
      fontFamily: {
        avenir: ['Avenir'],
        avenir_light: ['Avenir-light'],
        avenir_bold: ['Avenir-bold']
      }
    },
  },
  plugins: [],
};
