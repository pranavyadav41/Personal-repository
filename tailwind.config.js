/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/assets/img/banner-bg.png')",
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
        }
      },
      animation: {
        updown: 'updown 3s linear infinite',
      }
    },
  },
  plugins: [],
}

