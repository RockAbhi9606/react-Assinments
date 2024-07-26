/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      boxShadow: {
        'custom': '0 2px 8px -1px #00000080',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'blink-animation': 'blink 2s ease-in-out infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)',
      }
    },
  },
  plugins: [],
}

