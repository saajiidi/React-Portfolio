/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js, tsx}", // Matches all files ending with .html or .js inside the pages folder and its subdirectories
    "./components/**/*.{html,js, tsx}", // Similar pattern for components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

