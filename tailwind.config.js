/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1220px'
      },
    },
    extend: {
      boxShadow: {
        'xl': ' 0px 4px 24px rgba(0, 0, 0, 0.15)',
        'focus':'0px 2px 6px rgba(0, 0, 0, 0.1);'
      },
      colors: {
        'purple': '#707AC9',
        grayTr: {
          450: "rgba(0,0,0,.3)",
        },
        customGray: {
          10: "#bbb",
          20: "#ccc",
          30:"#F0F0F0",
          40:"#F5F6F8",
          50:'#666',
          60:'#F5F5F5'
        },
        blue:{
          10:'#182485'
        }
      },
      spacing: {
        '772': '772px',
      }
    },

  },
  plugins: [
    require('@vueform/slider/tailwind'),
  ]
}
