import { createTheme } from '@vanilla-extract/css';

import { tokensConfig } from './base.css';
import { colorsContract } from './colorsContract.css';

export const lightThemeClassName = createTheme(colorsContract, {
  colors: {
    text: {
      primary: tokensConfig.radixColors.gray.gray12,
      secondary: tokensConfig.radixColors.gray.gray11,
    },
    background: {
      primary: tokensConfig.radixColors.gray.gray1,
      secondary: tokensConfig.radixColors.gray.gray2,
      backdrop: tokensConfig.radixColors.gray.gray7,
    },
    border: {
      primary: tokensConfig.radixColors.slate.slate7,
      active: tokensConfig.radixColors.blue.blue9,
    },
    status: {
      error: tokensConfig.radixColors.tomato.tomato9,
    },
  },
});
