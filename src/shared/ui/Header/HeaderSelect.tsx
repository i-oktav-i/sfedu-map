import { Box, Flex, Select } from '@radix-ui/themes';
import { ReactNode } from 'react';

export type HeaderSelectProps<Option extends string> = {
  options: { value: Option; label: string }[];
  value: Option;
  onChange: (value: Option) => void;
  icons: Record<Option, ReactNode>;
};

export const HeaderSelect = <Option extends string>({
  options,
  value,
  onChange,
  icons,
}: HeaderSelectProps<Option>) => {
  const selectedOption = options.find((option) => option.value === value);

  if (!selectedOption) return null;

  return (
    <Select.Root defaultValue={value} onValueChange={onChange}>
      <Select.Trigger>
        <Flex as="span" align="center" gap="2">
          {icons[value]}

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
