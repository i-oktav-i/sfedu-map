import { container, inset } from '@shared/theme';
import { style } from '@vanilla-extract/css';

export const content = style([
  container({ display: { initial: 'contents', sm: 'block' } }),
  inset({ position: 'relative' }),
  { width: '30%', minWidth: '400px', maxWidth: '800px' },
]);
