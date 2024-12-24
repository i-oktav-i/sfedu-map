import { Box, Flex, Text } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';
import { container, listWrapper } from './styles.css';

const indent = { initial: '0', sm: '4' };

export const Container = provideDefaultProps(Flex, {
  position: 'absolute',
  top: indent,
  left: indent,
  bottom: indent,
  width: { initial: '100%', sm: '400px' },
  className: container,
});

export const ListWrapper = provideDefaultProps(Box, {
  flexGrow: '1',
  width: { initial: '100%', sm: '400px' },
  overflow: 'auto',
  className: listWrapper,
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
