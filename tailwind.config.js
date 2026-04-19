/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta patrimonial de Baracoa
        'oro': '#C9A03D',
        'terracota': '#B85C38',
        'verde-yara': '#2D6A4F',
        'azul-caribe': '#1B4965',
        'beige-colonial': '#F5E6D3',
        'gris-piedra': '#4A4A4A',
        'marfil': '#FAF9F6',
        'madera-antigua': '#6B3E1B',
        
        // Colores adicionales para categorías
        'categoria-fundacion': '#C9A03D',
        'categoria-patrimonio': '#2D6A4F',
        'categoria-cultura': '#B85C38',
        'categoria-naturaleza': '#1B4965',
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'papel-viejo': "url('/images/papel-viejo-bg.jpg')",
        'piedra-caliza': "url('/images/piedra-caliza-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}