/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.php",
    "./partials/**/*.php",
    "./sections/**/*.php",
    "./public/**/*.html",
    "./public/assets/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Paleta tri-cor do projeto
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        black: "#000000",
        white: "#ffffff",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "pulse-slow": "pulse 3s infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
