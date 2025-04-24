import { Box, Text } from '@radix-ui/themes';

import { provideDefaultProps } from '@shared/utils';

import { floorsPlansContainer, loadingText, planContainer, title } from './styles.css';

export const FloorsPlansContainer = provideDefaultProps(Box, {
  className: floorsPlansContainer,
});

export const Title = provideDefaultProps(Text, {
  as: 'p',
  align: 'center',
  className: title,
});

export const LoadingText = provideDefaultProps(Title, {
  className: loadingText,
});

export const FloorPlanContainer = provideDefaultProps(Box, {
  className: planContainer,
});
