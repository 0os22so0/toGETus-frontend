module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "paper-texture": "url('images/paper-texture.png')",
      },
    },
    screens: {
      sm: "375px", // 스맛폰
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "100%",
      // lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      // xl: "1280px",
      // // => @media (min-width: 1280px) { ... }

      // "2xl": "1536px",
      // // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      // padding: "2rem",
    },
  },
  plugins: [],
};
