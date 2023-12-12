/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },

    container: {
      center: true,
    },

    extend: {
      colors: {
        blueBright: "hsl(231, 69%, 60%)",
        redBright: "hsl(0, 94%, 66%)",
        grealish: "hsl(229, 8%, 60%)",
        blueDark: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
