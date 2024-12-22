import { AppThemeMode } from '@shared/AppTheme';

export type HeaderProps = {
  title: string;
  themeSelectProps: HeaderThemeSelectProps;
};

export type HeaderThemeSelectProps = {
  options: { value: AppThemeMode; label: string }[];
  value: AppThemeMode;
  onChange: (value: AppThemeMode) => void;
};
