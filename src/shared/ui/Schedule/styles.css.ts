import { container } from '@shared/theme';
import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  container({
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
    gap: 'x4',
  }),
  {
    minHeight: 300,
  },
]);
