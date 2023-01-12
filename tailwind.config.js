module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "paper-texture": "url('images/paper-texture.png')",
      },
      // colors: {},
    },
    screens: {
      sm: "375px", // 스맛폰
      md: "768px",
      lg: "100%",
    },
    container: {
      center: true,
      // padding: "2rem",
    },
  },
  plugins: [],
};
