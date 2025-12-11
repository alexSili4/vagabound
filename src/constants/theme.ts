declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: Record<'white', string>;
  breakpoints: Record<'desk', number>;
  fontFamily: Record<
    'rubik' | 'cormorantGaramond' | 'pica' | 'soul' | 'viaoda',
    string
  >;
  transitionDurationAndFunc: string;
  transitionWithDelay: string;
  transition800: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
  },
  fontFamily: {
    rubik: 'Rubik',
    cormorantGaramond: 'Cormorant Garamond',
    pica: 'IM FELL DW Pica',
    soul: 'Soul Adventures Cyr',
    viaoda: 'Viaoda Libre',
  },
  breakpoints: { desk: 1440 },
  transitionDurationAndFunc: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  transitionWithDelay: '400ms cubic-bezier(0.4, 0, 0.2, 1) 500ms',
  transition800: '800ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
