module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('/background.png')",
        'wave': "url('/wave.svg')",
      },
      fontFamily: {
        'dancing-script': "'Dancing Script'",
      },
      keyframes: {
        'left-to-right': {
          '0%': { transform: 'translateX(-100%) scale(0)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
        'right-to-left': {
          '0%': { transform: 'translateX(100%) scale(0)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
        'scale': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(0) rotateY(-360deg)' },
          '65%': { transform: 'scale(1) rotateY(0)' },
          '86%': { transform: 'scale(1) rotateY(0)' },
          '100%': { transform: 'scale(0) rotateY(360deg)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0)', transformOrigin: '50% 0%' },
          '100%': { transform: 'scale(100%)', transformOrigin: '50% 0%' },
        },
        'wave': {
          '0%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'text-shadow': {
          '0%': { transform: 'translateX(0) translateY(0)', textShadow: '0 0 black, 0 0 red, 0 0 orange, 0 0 yellow, 0 0 green, 0 0 skyblue, 0 0 blue, 0 0 white' },
          '50%': { transform: 'translateX(8px) translateY(8px)', textShadow: '-1px -1px black, -3px -3px red, -5px -5px orange, -7px -7px yellow, -9px -9px green, -11px -11px skyblue, -13px -13px blue, -15px -15px white' },
          '100%': { transform: 'translateX(0) translateY(0)', textShadow: '0 0 black, 0 0 red, 0 0 orange, 0 0 yellow, 0 0 green, 0 0 skyblue, 0 0 blue, 0 0 white' },
        },
      },
      animation: {
        'left-to-right': 'left-to-right 1s linear',
        'right-to-left': 'right-to-left 1s linear',
        'scale': 'scale 6s linear infinite',
        'zoom-in': 'zoom-in 2s ease',
        'wave': 'wave 10s linear infinite',
        'text-shadow': 'text-shadow 5s infinite',
      },
    },
  },
  plugins: [],
}
