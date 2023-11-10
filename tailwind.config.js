/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "public/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'gray':"#7C7C7C",
        'mid-green':'#122A34'
      }
    },
    fontFamily: {
      mazz: ['mazz', "sans-serif"]
    }
  },
  plugins: [],
}

