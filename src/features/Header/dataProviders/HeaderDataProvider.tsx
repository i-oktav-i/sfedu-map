import { AppThemeMode, useAppTheme } from '@shared/AppTheme';
import { HeaderProps } from '@shared/contracts';
import { Locale, useLocale, useLocaleType } from '@shared/locale';
import { FC, useMemo } from 'react';

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
      },
      {
        value: AppThemeMode.DARK,
        label: interpolate('header.themeSelect.dark'),
      },
      {
        value: AppThemeMode.AUTO,
        label: interpolate('header.themeSelect.auto'),
      },
    ],
    [interpolate],
  );

  const localeSelectOptions = useMemo(
    () => [
      {
        value: Locale.en,
        label: interpolate('header.localeSelect.en'),
      },
      {
        value: Locale.ru,
        label: interpolate('header.localeSelect.ru'),
      },
    ],
    [interpolate],
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
