import { createTheme } from '@vanilla-extract/css';

import { tokensConfig } from './base.css';
import { colorsContract } from './colorsContract.css';

export const darkThemeClassName = createTheme(colorsContract, {
  colors: {
    text: {
      primary: tokensConfig.radixColors.grayDark.gray12,
      secondary: tokensConfig.radixColors.grayDark.gray11,
    },
    background: {
      primary: tokensConfig.radixColors.grayDark.gray1,
      secondary: tokensConfig.radixColors.grayDark.gray2,
      backdrop: tokensConfig.radixColors.grayDark.gray7,
    },
    border: {
      primary: tokensConfig.radixColors.slateDark.slate7,
      active: tokensConfig.radixColors.blueDark.blue9,
    },
    status: {
      error: tokensConfig.radixColors.tomatoDark.tomato9,
    },
  },
});
