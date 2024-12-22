import { Box, Flex, Select } from '@radix-ui/themes';
import { HeaderThemeSelectProps } from '@shared/contracts';
import { FC } from 'react';

export const HeaderThemeSelect: FC<HeaderThemeSelectProps> = ({ options, value, onChange }) => {
  const selectedOption = options.find((option) => option.value === value);

  if (!selectedOption) return null;

  return (
    <Select.Root defaultValue={value} onValueChange={onChange}>
      <Select.Trigger>
        <Flex as="span" align="center" gap="2">
          {selectedOption.icon}

          <Box as="span" display={{ initial: 'none', sm: 'inline' }}>
            {selectedOption.label}
          </Box>
        </Flex>
      </Select.Trigger>

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
