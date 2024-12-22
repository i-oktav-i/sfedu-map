import { Select } from '@radix-ui/themes';
import { HeaderThemeSelectProps } from '@shared/contracts';
import { FC } from 'react';

export const HeaderThemeSelect: FC<HeaderThemeSelectProps> = ({ options, value, onChange }) => {
  return (
    <Select.Root defaultValue={value} onValueChange={onChange}>
      <Select.Trigger />

      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option.value} value={option.value}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};
