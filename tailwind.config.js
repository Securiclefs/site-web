/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "certiclefs-blue": {
          400: "#3C8490",
          500: "#205776",
          600: "#173156",
        },
        "certiclefs-white": {
          100: "#ffffff",
          300: "#949494",
        },
        "certiclefs-black": {
          100: "#363636",
          300: "#1C1B1F",
          600: "#000000",
        },
      },
    },
    plugins: [],
  },
};
