import { Box, Flex, Grid, Heading } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';

export const GridContainer = provideDefaultProps(Grid, {
  columns: '1fr 1fr 1fr',
  rows: 'auto',
  justify: 'between',
  align: 'center',
  py: '3',
  px: '6',
  style: { boxShadow: 'var(--shadow-1)' },
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
