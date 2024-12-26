import { GlobeIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Box } from '@radix-ui/themes';
import { AppThemeMode, useAppTheme } from '@shared/AppTheme';
import { HeaderProps } from '@shared/contracts';
import { Locale, useLocale, useLocaleType } from '@shared/locale';
import { FC, useMemo } from 'react';
import enFlag from './icons/en.svg';
import ruFlag from './icons/ru.svg';

export type HeaderDataProviderProps = {
  Layout: FC<HeaderProps>;
};

export const HeaderDataProvider: FC<HeaderDataProviderProps> = ({ Layout }) => {
  const { themeMode, setThemeMode } = useAppTheme();
  const { locale, setLocale } = useLocaleType();
  const { interpolate } = useLocale();

  const themeSelectOptions = useMemo(
    () => [
      {
        value: AppThemeMode.LIGHT,
        label: interpolate('header.themeSelect.light'),
        icon: <SunIcon />,
      },
      {
        value: AppThemeMode.DARK,
        label: interpolate('header.themeSelect.dark'),
        icon: <MoonIcon />,
      },
      {
        value: AppThemeMode.AUTO,
        label: interpolate('header.themeSelect.auto'),
        icon: <GlobeIcon />,
      },
    ],
    [],
  );

  const localeSelectOptions = useMemo(
    () => [
      {
        value: Locale.en,
        label: interpolate('header.localeSelect.en'),
        icon: (
          <Box width="16px" height="16px" asChild>
            <img src={enFlag} alt="en" />
          </Box>
        ),
      },
      {
        value: Locale.ru,
        label: interpolate('header.localeSelect.ru'),
        icon: (
          <Box width="16px" height="16px" asChild>
            <img src={ruFlag} alt="ru" />
          </Box>
        ),
      },
    ],
    [],
  );

  const themeSelectProps = useMemo(
    () => ({
      options: themeSelectOptions,
      value: themeMode,
      onChange: setThemeMode,
    }),
    [themeMode, setThemeMode, themeSelectOptions],
  );

  const localeSelectProps = useMemo(
    () => ({
      options: localeSelectOptions,
      value: locale,
      onChange: setLocale,
    }),
    [locale, setLocale, localeSelectOptions],
  );

  return (
    <Layout
      title={interpolate('header.pageTitle')}
      themeSelectProps={themeSelectProps}
      localeSelectProps={localeSelectProps}
    />
  );
};
