/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins",
        secondary: "Rubik",
      },
      textColor: {
        placeholder: "#D9D9D9",
      },
      backgroundColor: {
        primary: "#FFFFFF",
        seconndary: "#EFEFEF",
        buttonColor: "#D9D9D9",
      },
      borderColor: {
        primary: "#A4A2A2",
      },
    },
  },
  plugins: [],
};
