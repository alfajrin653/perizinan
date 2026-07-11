/**
 * tailwind.config.js
 * Tailwind configuration and custom design tokens for One Stop Business Hub
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A56DB',
        secondary: '#0EA5E9',
        accent: '#F59E0B',
        dark: '#111827',
        muted: '#6B7280',
        surface: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      borderRadius: {
        card: '12px',
        pill: '50px'
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.16)'
      }
    }
  },
  plugins: []
}
