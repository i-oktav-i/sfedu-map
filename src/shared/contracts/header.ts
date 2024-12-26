import { AppThemeMode } from '@shared/AppTheme';
import { Locale } from '@shared/locale';
import { ReactNode } from 'react';

export type HeaderProps = {
  title: string;
  themeSelectProps: HeaderThemeSelectProps;
  localeSelectProps: HeaderLocaleSelectProps;
};

export type HeaderThemeSelectProps = {
  options: { value: AppThemeMode; label: string; icon: ReactNode }[];
  value: AppThemeMode;
  onChange: (value: AppThemeMode) => void;
};

export type HeaderLocaleSelectProps = {
  options: { value: Locale; label: string; icon: ReactNode }[];
  value: Locale;
  onChange: (value: Locale) => void;
};
