import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d95aa",
        secondary: "#f57c2b",

        white: "#ffffff",
        black: "#384a4d",
        danger: colors.red,
        warning: colors.orange,
        success: colors.green,
        info: colors.blue,
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
