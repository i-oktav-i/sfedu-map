import { createGlobalTheme, createTheme, createVar, globalStyle } from '@vanilla-extract/css';

import * as radixColors from '@radix-ui/colors';
import { colorsContract } from './colorsContract.css';

// biome-ignore lint/suspicious/noExplicitAny:
type Convert<T extends Record<string, any>> = {
  [Key in keyof T]: T[Key] extends Record<string, string> ? Convert<T[Key]> : string;
};

type RadixColors = Convert<typeof radixColors>;

const baseSize = createVar();

globalStyle(':root', {
  vars: {
    [baseSize]: '4px',
  },
});

export const tokensConfig = createGlobalTheme(':root', {
  typography: {
    fontFamily: 'Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSize: {
      s: '16px',
      m: '18px',
      l: '20px',
    },
    lineHeight: {
      s: '20px',
      m: '20px',
      l: '24px',
    },
    fontWeight: {
      semiBold: '550',
      regular: '400',
    },
  },
  space: {
    x0: `calc(${baseSize} * 0)`,
    x1: `calc(${baseSize} * 1)`,
    x2: `calc(${baseSize} * 2)`,
    x3: `calc(${baseSize} * 3)`,
    x4: `calc(${baseSize} * 4)`,
    x5: `calc(${baseSize} * 5)`,
    x6: `calc(${baseSize} * 6)`,
    x7: `calc(${baseSize} * 7)`,
    x8: `calc(${baseSize} * 8)`,
    x9: `calc(${baseSize} * 9)`,
    x10: `calc(${baseSize} * 10)`,
    x11: `calc(${baseSize} * 11)`,
    x12: `calc(${baseSize} * 12)`,
  },
  radii: {
    infinity: '50%',
    x0: `calc(${baseSize} * 0)`,
    x1: `calc(${baseSize} * 1)`,
    x2: `calc(${baseSize} * 2)`,
    x3: `calc(${baseSize} * 3)`,
    x4: `calc(${baseSize} * 4)`,
  },
  radixColors: radixColors as RadixColors,
  zIndex: {
    base: '0',
    dropdown: '1000',
    sticky: '2000',
    navigation: '3000',
    modal: '4000',
    overlay: '5000',
    tooltip: '6000',
    notification: '7000',
    aboveAll: '99999',
  },
});

export const [themeDependentTokensClassName, themeDependentTokensConfig] = createTheme({
  borders: {
    primary: `1px solid ${colorsContract.colors.border.primary}`,
    active: `1px solid ${colorsContract.colors.border.active}`,
    none: 'none',
  },
});
