/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/js/**/*.{js,vue}",
        "./templates/**/*.html",
    ],
    theme: {
        extend: {},
        screens: {
            xl: '1279px',
            lg: '1023px',
            md: '767px',
            sm: '639px',
            xs: '425px',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
