import { Box, Flex, Select } from '@radix-ui/themes';
import { ReactNode } from 'react';

export type HeaderSelectProps<Option extends string> = {
  options: { value: Option; label: string; icon: ReactNode }[];
  value: Option;
  onChange: (value: Option) => void;
};

export const HeaderSelect = <Option extends string>({
  options,
  value,
  onChange,
}: HeaderSelectProps<Option>) => {
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
