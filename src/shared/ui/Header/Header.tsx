import { Box, Grid, Heading } from '@radix-ui/themes';
import { HeaderProps } from '@shared/contracts';
import { FC } from 'react';
import { HeaderThemeSelect } from './HeaderThemeSelect';

export const Header: FC<HeaderProps> = ({ title, themeSelectProps }) => {
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

        <Heading as="h1" align={'center'} size={{ initial: '1', sm: '5' }}>
          {title}
        </Heading>

        <HeaderThemeSelect {...themeSelectProps} />
      </header>
    </Grid>
  );
};
