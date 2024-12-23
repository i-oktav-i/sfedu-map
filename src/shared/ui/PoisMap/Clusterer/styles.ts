import { Flex } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';

export const MarkerContainer = provideDefaultProps(Flex, {
  align: 'center',
  justify: 'center',
  width: '32px',
  height: '32px',
  style: {
    background: 'var(--color-panel-solid)',
    borderRadius: '50%',
    boxShadow: 'var(--shadow-1)',
  },
});

export const ClusterContainer = provideDefaultProps(Flex, {
  align: 'center',
  justify: 'center',
  width: '40px',
  height: '40px',
  style: {
    background: 'var(--color-panel-solid)',
    borderRadius: '50%',
    boxShadow: 'var(--shadow-1)',
  },
});
