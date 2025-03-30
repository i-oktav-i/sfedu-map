import { Box, Flex } from '@radix-ui/themes';
import { FC, ReactNode } from 'react';

type PageLayoutProps = {
  map: ReactNode;
  list: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ map, list }) => {
  return (
    <Flex position={'relative'} width="100%" height="100%">
      {list}

      <Box position={'relative'} width="100%" height="100%">
        <Box position={'absolute'} inset={'0'}>
          {map}
        </Box>
      </Box>
    </Flex>
  );
};
