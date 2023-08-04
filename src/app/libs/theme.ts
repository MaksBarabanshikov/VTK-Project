import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { InputStyles as Input } from '@/app/libs/themeConponents/InputStyles.ts';
import { ButtonStyles as Button } from '@/app/libs/themeConponents/ButtonStyles.ts';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  disableTransitionOnChange: false,
};

const appTheme = extendTheme({
  config,
  fonts: {
    body: "'Monserrat', sans-serif",
    heading: "'Monserrat', sans-serif",
  },
  fontSizes: {
    '14': '14px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '36': '36px',
    '40': '40px',
    '45': '45px',
    '5xl': '40px',
    '6xl': '50px',
    '70': '70px',
    '100': '60px',
  },
  colors: {
    base: {
      light: '#fff',
      dark: '#151E3B',
    },
    primary: {
      900: '#424141',
      800: 'rgba(30, 30, 30, 0.70)',
      700: '#3E3E3E',
      600: '#1E1E1E',
      500: 'rgba(66, 65, 65, 0.90)',
    },
    blue: {
      '0.90': 'rgba(0, 131, 214, 0.90)',
      100: '#0083D6',
    },
    gray: {
      100: '#D2D2D2',
      200:'#F0F0F0',
      300: '#FAFAFA',
      400: '#BBB',
    },
    red: {
      'base': '#F43434',
      '200': '#F43434',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        transitionProperty: 'all',
        transitionDuration: 'normal',
        bg: mode('rgba(217, 217, 217, 0.30)', '#1c1d26')(props),
      },
    }),
  },
  components: {
    Input,
    Button,
  },
  breakpoints: {
    xs: '460px',
    sm: '560px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    xxl: '1600px',
    '2xl': '1900px',
    '3xl': '2100px',
  },
});

export default appTheme;
