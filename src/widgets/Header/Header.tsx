import { ThemeSelect } from '@features/ThemeSelect';
import { Box, Flex } from '@radix-ui/themes';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Flex asChild justify={'between'} align={'center'} py={'3'} px={'6'}>
      <header>
        <Box asChild width={'40px'} height={'40px'} style={{ borderRadius: '50%' }}>
          <img src={'/favicon.svg'} alt={'logo'} />
        </Box>

        <ThemeSelect />
      </header>
    </Flex>
  );
};
