/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                'spring-red': '#E63946',
                'gold-fortune': '#F4A460',
                'jade-green': '#06D6A0',
                'peach-blossom': '#FFB5A7',

                // Secondary Colors
                'deep-burgundy': '#A4243B',
                'cream-white': '#FFF8F0',
                'charcoal': '#2D3142',
                'light-gray': '#F8F9FA',

                // Accent Colors
                'lotus-pink': '#FFD6E8',
                'bamboo-green': '#7CB342',
                'sunrise-orange': '#FF6B35',
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
                'display': ['Roboto', 'Playfair Display', 'serif'],
                'heading': ['Roboto', 'Montserrat', 'sans-serif'],
                'body': ['Roboto', 'Inter', 'sans-serif'],
                'vietnamese': ['Roboto', 'Be Vietnam Pro', 'sans-serif'],
                'calligraphy': ['Dancing Script', 'cursive'],
            },
            backgroundImage: {
                'gradient-sunrise': 'linear-gradient(135deg, #FFB5A7 0%, #FF6B35 50%, #E63946 100%)',
                'gradient-fortune': 'linear-gradient(90deg, #F4A460 0%, #FFD700 100%)',
                'gradient-jade': 'linear-gradient(180deg, #06D6A0 0%, #1B998B 100%)',
                'gradient-sky': 'linear-gradient(to bottom, #87CEEB 0%, #FFF8F0 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,240,0.9) 100%)',
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                'neuo': '12px 12px 24px rgba(163, 177, 198, 0.3), -12px -12px 24px rgba(255, 255, 255, 0.8)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'swing': 'swing 3s ease-in-out infinite',
                'bounce-slow': 'bounce 3s infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                swing: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: [],
}
