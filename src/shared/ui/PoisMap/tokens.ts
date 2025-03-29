import { Box } from '@radix-ui/themes';
import { provideDefaultProps } from '@shared/utils';

export const FallbackContainer = provideDefaultProps(Box, {
  width: '100%',
  height: '100%',
  position: 'relative',
});
