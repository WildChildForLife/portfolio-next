const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            ...colors,
            dark: colors.black,
            light: colors.white,
            lightGray: colors.gray['200'],
            darkGray: colors.slate['800'],
            disabled: colors.gray['400'],
            primary: colors.orange['500'],
            //secondary: colors.orange['300'],
            secondary: colors.orange['300'],
            tertiary: colors.cyan['300'],
            error: colors.red['500'],
            success: colors.green['500'],
        },
    },
    plugins: [],
    darkMode: 'class',
}
