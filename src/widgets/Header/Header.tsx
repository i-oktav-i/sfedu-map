import { ThemeSelect } from '@features/ThemeSelect';
import { Box, Grid, Text } from '@radix-ui/themes';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Grid
      asChild
      columns={'20% 1fr 20%'}
      rows={'auto'}
      justify={'between'}
      align={'center'}
      py={'3'}
      px={'6'}
    >
      <header>
        <Box asChild width={'40px'} height={'40px'} style={{ borderRadius: '50%' }}>
          <img src={'/favicon.svg'} alt={'logo'} />
        </Box>

        <Text asChild align={'center'}>
          <h1>Карта кампусов</h1>
        </Text>

        <ThemeSelect />
      </header>
    </Grid>
  );
};
