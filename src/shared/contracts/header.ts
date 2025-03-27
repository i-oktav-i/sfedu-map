import { AppThemeMode } from '@shared/AppTheme';
import { Locale } from '@shared/locale';

export type HeaderProps = {
  title: string;
  themeSelectProps: HeaderThemeSelectProps;
  localeSelectProps: HeaderLocaleSelectProps;
};

export type HeaderThemeSelectProps = {
  options: { value: AppThemeMode; label: string }[];
  value: AppThemeMode;
  onChange: (value: AppThemeMode) => void;
};

export type HeaderLocaleSelectProps = {
  options: { value: Locale; label: string }[];
  value: Locale;
  onChange: (value: Locale) => void;
};
