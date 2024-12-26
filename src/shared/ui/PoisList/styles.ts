import { Box, Flex, Text } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';

export const Container = provideDefaultProps(Flex, {
  width: { initial: '100%', sm: '400px' },
  direction: 'column',
});

export const ListWrapper = provideDefaultProps(Box, {
  flexGrow: '1',
  width: { initial: '100%', sm: '400px' },
  overflow: 'auto',
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
