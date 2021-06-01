module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#12E7B4",
          DEFAULT: "#45A4E9",
          dark: "#E71212",
        }
      },
      fontFamily: {
        headline: "Tangerine",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
}
