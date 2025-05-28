/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'scrollLeft': 'scrollLeft 60s linear infinite',
        'bounceSlow': 'bounceSlow 3s ease-in-out infinite',
      },
      screens: {
        xxs: "360px",
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "2560px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'semi-white': 'rgba(255, 255, 255, 0.5)',
        'semii-white': 'rgba(255, 255, 255, 0.6)',
        'policy-text' :'rgba(255, 255, 255, 0.7)',
        'nav-bar-text':'rgba(255, 255, 255, 0.8)',
        'dark': '#0f0f0f',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        helveticaneue: ['Helvetica Neue', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        glock: ['Glock', 'sans-serif'], 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-66.66%)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
