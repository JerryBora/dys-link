// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        animation: {
          scan: 'scan 4s linear infinite',
        },
        keyframes: {
          scan: {
            '0%': { backgroundPosition: '0 -100%' },
            '100%': { backgroundPosition: '0 100%' },
          }
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }