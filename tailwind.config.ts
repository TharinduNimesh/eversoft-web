/** @type {import('tailwindcss').Config} */
export default {
  content: ["presets/**/*.{js,vue,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bkg": "rgb(var(--primary-bkg) / <alpha-value>)",
        "secondary-bkg": "rgb(var(--secondary-bkg) / <alpha-value>)",
      },
      fontFamily: {
        recoleta: ["Recoleta"],
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
