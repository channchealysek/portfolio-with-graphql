/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'nature-green': "url('./assets/cover/header_bg.png')",
      'gitHubIcon': "url('./assets/images/github.png')",
    },
    extend: {},
  },
  plugins: [],
};
