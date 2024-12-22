import { HeaderWidget } from '@widgets/HeaderWidget';
import { FC } from 'react';
import { Outlet } from 'react-router';

import { Box, Flex, Theme } from '@radix-ui/themes';
import { useAppTheme } from '@shared/AppTheme';
import { PORTAL_ID } from '@shared/config';

export const Layout: FC = () => {
  const { theme } = useAppTheme();

  return (
    <Theme appearance={theme === 'DARK' ? 'dark' : 'light'} asChild>
      <Flex direction={'column'} width={'100%'} height={'100%'}>
        <HeaderWidget />

        <Box asChild flexGrow={'1'}>
          <main>
            <Outlet />
          </main>
        </Box>

        <Box id={PORTAL_ID} position={'absolute'} />
      </Flex>
    </Theme>
  );
};
