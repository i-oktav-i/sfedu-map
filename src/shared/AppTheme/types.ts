export type AppThemeMode = keyof typeof AppThemeMode;
export const AppThemeMode = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  AUTO: 'AUTO',
} as const;

export type AppTheme = keyof typeof AppTheme;
export const AppTheme = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
} as const;
