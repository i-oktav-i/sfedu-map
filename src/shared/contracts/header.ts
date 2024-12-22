import { AppThemeMode } from '@shared/AppTheme';
import { ReactNode } from 'react';

export type HeaderProps = {
  title: string;
  themeSelectProps: HeaderThemeSelectProps;
};

export type HeaderThemeSelectProps = {
  options: { value: AppThemeMode; label: string; icon: ReactNode }[];
  value: AppThemeMode;
  onChange: (value: AppThemeMode) => void;
};
