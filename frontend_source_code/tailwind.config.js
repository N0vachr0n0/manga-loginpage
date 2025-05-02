/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        manga: {
          primary: '#FF4081', // Vibrant pink
          secondary: '#651FFF', // Deep purple
          accent: '#FFEA00', // Bright yellow
          background: '#F5F5F5', // Light gray
          dark: '#2D2D2D', // Dark gray
          success: '#00E676', // Vibrant green
          warning: '#FFAB00', // Amber
          error: '#FF1744', // Red
        },
      },
      fontFamily: {
        'manga': ['Bangers', 'cursive', 'system-ui', 'sans-serif'],
        'manga-body': ['Nunito', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'manga-pattern': "url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'manga-dots': "url('https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      boxShadow: {
        'manga': '0 4px 0 0 #2D2D2D',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};