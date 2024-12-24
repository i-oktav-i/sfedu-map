import { Box, Flex, Text } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';

const indent = { initial: '0', sm: '4' };

export const Container = provideDefaultProps(Flex, {
  position: 'absolute',
  top: indent,
  left: indent,
  bottom: indent,
  style: { zIndex: 1000 },
  width: { initial: '100%', sm: '400px' },
});

export const ListWrapper = provideDefaultProps(Box, {
  flexGrow: '1',
  width: { initial: '100%', sm: '400px' },
  overflow: 'auto',
  style: {
    background: 'var(--color-panel-solid)',
    borderRadius: 'var(--radius-5)',
    boxShadow: 'var(--shadow-6)',
    listStyle: 'none',
    padding: '0',
  },
});

export const PoiName = provideDefaultProps(Text, {
  weight: 'bold',
  size: '4',
  wrap: 'balance',
});

export const PoiAddress = provideDefaultProps(Text, {
  color: 'gray',
  size: '2',
  wrap: 'balance',
});

export const ButtonWrapper = provideDefaultProps(Flex, {
  direction: 'column',
  gap: '2',
});
