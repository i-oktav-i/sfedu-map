import { GlobeIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Box } from '@radix-ui/themes';
import { ReactNode } from 'react';

import { AppThemeMode } from '@shared/AppTheme';
import { Locale } from '@shared/locale';

import enFlag from './icons/en.svg';
import ruFlag from './icons/ru.svg';

export const themeIconsMap: Record<AppThemeMode, ReactNode> = {
  [AppThemeMode.LIGHT]: <SunIcon />,
  [AppThemeMode.DARK]: <MoonIcon />,
  [AppThemeMode.AUTO]: <GlobeIcon />,
};

export const localeIconsMap: Record<Locale, ReactNode> = {
  [Locale.en]: (
    <Box width="16px" height="16px" asChild>
      <img src={enFlag} alt="en" />
    </Box>
  ),
  [Locale.ru]: (
    <Box width="16px" height="16px" asChild>
      <img src={ruFlag} alt="ru" />
    </Box>
  ),
};
