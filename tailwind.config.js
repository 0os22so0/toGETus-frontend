module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'paper-texture': "url('images/paper-texture.png')",
      },
      colors: {
        'togetus-emoji': '#FCCC45',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'wave-hand': 'wave 2s infinite',
      },
    },
    screens: {
      sm: '375px', // 스맛폰
      md: '768px',
      lg: '100%',
    },
    container: {
      center: true,
      // padding: "2rem",
    },
  },
  plugins: [],
};
