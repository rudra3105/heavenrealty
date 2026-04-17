/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#053246',
        brandBlueDark: '#042532',
        brandGold: '#d4af37',
        brandCream: '#f8f6f0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        premium: '0 20px 45px rgba(5, 50, 70, 0.18)'
      }
    }
  },
  plugins: []
};
