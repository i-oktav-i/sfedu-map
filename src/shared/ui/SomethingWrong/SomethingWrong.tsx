import { Button, Flex, Heading } from '@radix-ui/themes';
import { FC } from 'react';

import { SomethingWrongProps } from '@shared/contracts';

export const SomethingWrong: FC<SomethingWrongProps> = ({ title, reloadButtonText, onReload }) => (
  <Flex direction="column" align="center" gap="9" p="4">
    <Heading as="h1" align="center">
      {title}
    </Heading>

    <Button onClick={onReload}>{reloadButtonText}</Button>
  </Flex>
);
