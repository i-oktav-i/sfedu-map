import { Box, Flex, Grid, Heading } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';
import { headerContainer, headerWrapper } from './styles.css';

export const HeaderWrapper = provideDefaultProps(Box, { className: headerWrapper });

export const GridContainer = provideDefaultProps(Grid, {
  m: 'auto',
  columns: '1fr 1fr 1fr',
  rows: 'auto',
  justify: 'between',
  align: 'center',
  py: '3',
  px: '6',
  className: headerContainer,
});

export const LogoContainer = provideDefaultProps(Box, {
  width: '40px',
  height: '40px',
  style: { borderRadius: '50%' },
});

export const Title = provideDefaultProps(Heading, {
  as: 'h1',
  size: { initial: '1', sm: '5' },
  align: 'center',
});

export const SelectsContainer = provideDefaultProps(Flex, {
  gap: '4',
  justify: 'end',
});
