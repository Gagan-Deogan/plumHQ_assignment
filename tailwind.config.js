module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#E06358",
        },
        secondary: {
          500: "#CCC4BA",
        },
        grey: {
          900: "#000A26",
          800: "#182639",
          500: "#55657D",
          400: "#8C98AB",
          600: "#2D3D54",
          100: "#F2F0ED",
        },
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "18.2px"],
        base: ["16px", "21.12px"],
        md: ["18px", "23.4px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        "2xl": ["32px", "38.4px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
