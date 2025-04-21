import { Box, Flex } from '@radix-ui/themes';

import { provideDefaultProps } from '@shared/utils';

import { planContainer } from './styles.css';

export const FloorsPlansContainer = provideDefaultProps(Flex, {
  width: '100%',
  height: '300px',
  align: 'center',
  justify: 'center',
  gap: '2',
});

export const FloorPlanContainer = provideDefaultProps(Box, {
  className: planContainer,
});
