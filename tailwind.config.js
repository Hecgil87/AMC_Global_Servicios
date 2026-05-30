/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta corporativa según especificaciones
        brand: {
          'forest': '#1A3325',        // Verde Bosque 60% - Dominante
          'bronze': '#C49473',        // Oro Rosado/Bronce 30% - Secundario
          'sapphire': '#1C4375',      // Azul Zafiro - Apoyo
          'cream': '#EAE4D8',         // Crema/Marfil - Contraste
          'whatsapp': '#25D366',      // Verde WhatsApp 10% - Acento
        },
        // Mantener para compatibilidad retroactiva si es necesario
        corporate: {
          'blue': '#1A3325',
          'gold': '#C49473',
          'bronze': '#C49473',
          'sapphire': '#1C4375',
          'cream': '#EAE4D8',
          'neutral': '#F5F1ED'
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cinzel', 'Prata', 'serif'],
        'heading-alt': ['Montserrat', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Montserrat', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 8px 32px -2px rgba(26, 51, 37, 0.1)',
      },
      spacing: {
        'safe-bottom': 'max(env(safe-area-inset-bottom), 1rem)',
      },
      minHeight: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      }
    },
  },
  plugins: [],
}
