import { Select } from '@radix-ui/themes';
import { AppThemeMode, useAppTheme } from '@shared/AppTheme';
import { FC } from 'react';

export const ThemeSelect: FC = () => {
  const { themeMode, setThemeMode } = useAppTheme();

  return (
    <Select.Root defaultValue={themeMode} onValueChange={setThemeMode}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value={AppThemeMode.LIGHT}>Light</Select.Item>
        <Select.Item value={AppThemeMode.DARK}>Dark</Select.Item>
        <Select.Item value={AppThemeMode.AUTO}>System</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
