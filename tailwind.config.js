/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1abc9c",
        darkGray: "#1a252f"
      },
      height: {
        'calc-full': 'calc(100vh - 30px)', // screenHeight - navbarHieght 
      },
      width: {
        '600px' : '600px',
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "900px" 
      }
    }
  },
  plugins: [],
}

