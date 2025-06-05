/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          400: '#636363',
          300: '#848484',
          200: '#415BE6',
        },
        static: {
          100: '#FFFFFF',
          400: '#000000',
        },
        primary: {
          DEFAULT: '#00352F',
          600: '#066959',
          500: '#0A5749',
          400: '#0B5145',
        },
        secondary: {
          100: '#FBFAF4',
          accent: '#FFED89',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'body': '16px',
        'h2': '24px',
      },
    },
  },
  plugins: [],
}
