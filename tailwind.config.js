/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router (optional)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        'xs': '480px', // Extra small screens
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // 2XL screens
      },
    },
  },
  plugins: [
  ],
};
