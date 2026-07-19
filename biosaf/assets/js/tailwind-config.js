/**
 * BIOSAF Enterprises — Tailwind CDN theme extension
 * Load immediately after https://cdn.tailwindcss.com
 */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    dark: '#051E11',
                    primary: '#0B331F',
                    secondary: '#1A5935',
                    light: '#F4F7F2',
                    accent: '#D3F340',
                    accentHover: '#E1FA5F',
                },
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                float: 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
};
