/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      colors: {
        primary: '#FF7500',
        secondary: '#3D2D72',
        lightSecondary: '#463481',
        mainBlack: '#3C3C46',
        lightShade1: '#EDEDFF',
        lightShad2: '#F8F8FF',
        darkShade1: '#393737',
        darkShade2: '#5A5A5A',
        grey: '#949494',
        border: '#C2C2F0',
        error: '#DF3939',
      },
      screens: {
        xsm: '420px',
        xmd: '744px',
        '2xl': '1440px',
        '2xxl': '1512px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'key-features': "url('/svg/keyfeatures.svg')",
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase }: any) {
  const allColors = flattenColorPalette();
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}
