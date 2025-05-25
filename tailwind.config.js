/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      maxWidth : {
        "container" : "1240px"
      },
      colors: {
        primary: '#1E40AF',   // blue-800
        secondary: '#F59E0B', // amber-500
        accent: '#10B981',    // emerald-500
        brand: "#00df9a" // Green
      },
    },
  },
  plugins: [],
}

