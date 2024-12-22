import { AppThemeMode, useAppTheme } from '@shared/AppTheme';
import { HeaderProps } from '@shared/contracts';
import { useLocale } from '@shared/locale';
import { FC, useMemo } from 'react';

export type HeaderDataProviderProps = {
  Layout: FC<HeaderProps>;
};

export const HeaderDataProvider: FC<HeaderDataProviderProps> = ({ Layout }) => {
  const { themeMode, setThemeMode } = useAppTheme();
  const { interpolate } = useLocale();

  const themeSelectOptions = useMemo(
    () => [
      { value: AppThemeMode.LIGHT, label: interpolate('header.themeSelect.light') },
      { value: AppThemeMode.DARK, label: interpolate('header.themeSelect.dark') },
      { value: AppThemeMode.AUTO, label: interpolate('header.themeSelect.auto') },
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

  return <Layout title={interpolate('header.pageTitle')} themeSelectProps={themeSelectProps} />;
};
