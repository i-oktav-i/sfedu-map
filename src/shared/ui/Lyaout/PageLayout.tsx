import { Box, Flex } from '@radix-ui/themes';
import { FC, ReactNode } from 'react';

import { content } from './styles.css';

type PageLayoutProps = {
  map: ReactNode;
  list: ReactNode;
  info: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ map, list, info }) => {
  return (
    <Flex position={'relative'} width="100%" height="100%">
      <Box width={'400px'} height="100%" className={content}>
        {list}
        {info}
      </Box>

      <Box position={'relative'} width="100%" height="100%">
        <Box position={'absolute'} inset={'0'}>
          {map}
        </Box>
      </Box>
    </Flex>
  );
};
