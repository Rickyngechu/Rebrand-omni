/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#e67e22",
        "tint-1": "#fdf2e9",
        "tint-2": "#fae5d3",
        "tint-3": "#eb984e",
        "tint-4": "#E88A36",

        "shade-1": "#cf711f",
        "shade-2": "#45260a",

        "grey-1": "#888",
        "grey-2": "#555",
        "grey-3": "#333",

        "light-grey-1": "#767676 ",
        "light-grey-2": "#CCCCCC",
      },
      boxShadow: {
        main: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);",
      },
      maxWidth: {
        cont: "90rem",
      },
      gridTemplateColumns: {
        calltoaction: "60fr 40fr",
      },
    },
  },
  plugins: [],
};
