export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        invert: {
          css: {
            h1: {
              fontSize: theme('fontSize.4xl'),
              fontWeight: '800',
              color: theme('colors.amber.400'),
              marginBottom: theme('spacing.6'),
            },
            h2: {
              fontSize: theme('fontSize.3xl'),
              fontWeight: '700',
              color: theme('colors.amber.300'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.4'),
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: '700',
            },
          },
        },
      }),
      colors: {
        'brand-dark-blue': '#1A237E',
        'brand-gray': '#4A5568',
        'brand-gold': '#BFA36F',
        'brand-light-gray': '#F7FAFC',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
