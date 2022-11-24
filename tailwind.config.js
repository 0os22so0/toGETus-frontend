const path = require("path");

module.exports = {
  content: [
    path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {},
    screens: {
      sm: "465px",
      md: "768px",
      lg: "1024px",
      xl: "1640px",
    },
  },
  plugins: [],
};
