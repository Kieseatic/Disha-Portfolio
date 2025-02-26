/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
      secondary: "var(--font-roboto)",
      recoleta: ['Recoleta', 'sans-serif'],
      copper:['Copper-Black'],
      delius:['Delius'],
      montserrat:['Montserrat'],
      poppins:['Poppins'],
      roboto:['Roboto'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      milan: ['Milan'],
    },
    extend: {
      colors: {
        primary: "#1e1f22",
        secondary: "#2b2d31",
        orange:"#e43c08",
        blue:"4F6d7a",
        brown:"#964B00",
        accent: {
          DEFAULT: "#57ebd7",
          hover: "#45bcac",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
