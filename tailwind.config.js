/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},

        screens: {
            xl: '1280px',
            lg: { max: '1280px' },
            md: { max: '1023px' },
            sm: { max: '599px' },
        },
    },
    plugins: [],
};
