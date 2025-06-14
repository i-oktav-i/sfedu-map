import { Box, Card, Flex, Text } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';
import { listItemContainer, searchInputContainer, searchInputForm } from './styles.css';

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

export const ListItemContainer = provideDefaultProps(Card, { className: listItemContainer });

export const SearchInputContainer = provideDefaultProps('search', {
  className: searchInputContainer,
});

export const SearchInputForm = provideDefaultProps('form', { className: searchInputForm });
