/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "30rem",
      },
      maxWidth: {
        "8rem": "8rem",
      },
      colors: {
        primary: "#F5385D",
      },
    },
  },
  plugins: [],
};
