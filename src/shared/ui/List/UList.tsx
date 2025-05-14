import { Flex, FlexProps } from '@radix-ui/themes';
import { FC } from 'react';

export type UListProps = FlexProps;

export const UList: FC<UListProps> = ({ children, ...props }) => {
  return (
    <Flex asChild direction="column" gap="2" {...props} width="100%" height="100%">
      <ul>{children}</ul>
    </Flex>
  );
};
