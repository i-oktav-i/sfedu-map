import { Box, Grid, Heading } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';

export const GridContainer = provideDefaultProps(Grid, {
  columns: '20% 1fr 20%',
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
