import { HeaderWidget } from '@widgets/HeaderWidget';
import cn from 'classnames';
import { FC } from 'react';
import { Outlet } from 'react-router';

import { Box, Flex, Theme } from '@radix-ui/themes';
import { useAppTheme, useAppThemeClassName } from '@shared/AppTheme';
import { PORTAL_ID } from '@shared/config';
import { baseClassName } from '@shared/theme';

export const Layout: FC = () => {
  const { theme } = useAppTheme();
  const themeClassName = useAppThemeClassName();

  return (
    <Theme
      appearance={theme === 'DARK' ? 'dark' : 'light'}
      className={cn(baseClassName, themeClassName)}
      asChild
    >
      <Flex direction={'column'} width={'100%'} height={'100%'}>
        <HeaderWidget />

        <Box asChild flexGrow="1" overflow="hidden">
          <main>
            <Outlet />
          </main>
        </Box>

        <Box id={PORTAL_ID} position={'absolute'} />
      </Flex>
    </Theme>
  );
};
