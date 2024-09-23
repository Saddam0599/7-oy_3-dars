/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.1': '0.1px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        aeonik: ['Aeonik Pro', 'sans-serif'],
      },
      colors: {
        "main-black":"#000000",
        "main-white":"#ffffff",
        "main-language":"#0f0f0f",
        "main-language0":"#262626",
        "main-language1":"#C2C2C2",
        "main-redt":"#C61F1F",  
        "main-footer": "rgba(161, 161, 161, 1",  
             
      }
    },
  },
  plugins: [],
}


