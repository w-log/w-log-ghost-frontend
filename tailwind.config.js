/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            spacing: {
                20: `4.625rem`,
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': '#0F1521',
                        '--tw-prose-headings': '#022650',
                        '--tw-prose-bold': '#022650',
                        '--tw-prose-invert-body': '#E5E9F2',
                        '--tw-prose-invert-headings': '#E5E9F2',
                    },
                },
            }),
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            sans: `DM Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;`,
        },
        colors: {
            'primary-1': '#0F1521',
            'primary-2': '#022650',
            sencondary: '#E5E9F2',
            'typo-1': '#8D6A4C',
            'typo-2': '#5E341B',
            white: '#fff',
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
