/** @type {import('tailwindcss').Config} */

type ValidFontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type PxSize = `${number}px`;

function createFontSize(size: PxSize, fontWeight: ValidFontWeight) {
  const option: [string, { lineHeight: string; fontWeight: string }] = [
    size,
    { lineHeight: size, fontWeight: fontWeight }
  ];
  return option;
}

const fontSize = {
  title1: createFontSize('24px', '700'),
  title2: createFontSize('22px', '700'),
  title3: createFontSize('18px', '700'),
  body1: createFontSize('20px', '500'),
  body2: createFontSize('14px', '400'),
  body2Bold: createFontSize('14px', '700'),
  caption: createFontSize('16px', '400'),
  captionMedium: ['14px', { lineHeight: '22px', fontWeight: '500' }],
  small: createFontSize('10px', '400'),
  tinyMedium: ['8px', { lineHeight: '12px', fontWeight: '500' }]
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"']
      },
      colors: {
        palette: {
          primary: '#4880EE',
          red: '#E84118',
          gray: '#DADADA',
          lightGray: '#F2F4F6',
          white: '#FFFFFF',
          black: '#222222'
        },
        text: {
          primary: '#353C49',
          secondary: '#6D7582',
          subtitle: '#8D94A0'
        }
      },
      fontSize
    }
  },
  plugins: []
};
