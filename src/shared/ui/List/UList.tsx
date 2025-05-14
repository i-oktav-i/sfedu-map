import { Flex, FlexProps } from '@radix-ui/themes';
import { FC } from 'react';

export type UListProps = FlexProps;

export const UList: FC<UListProps> = ({ children, ...props }) => {
  return (
    <Flex asChild direction="column" gap="2" {...props}>
      <ul>{children}</ul>
    </Flex>
  );
};
