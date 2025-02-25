/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      animation: {
        wave: "wave 2s infinite linear",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px) scaleY(1.2)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    
  },
  plugins: [],
};
