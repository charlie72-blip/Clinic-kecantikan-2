module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nude: '#EDE6DF',
        cream: '#F8F5F2',
        gold: '#C6A75E',
        char: '#1E1E1E'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
