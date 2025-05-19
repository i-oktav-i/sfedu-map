import { container } from '@shared/theme';
import { style } from '@vanilla-extract/css';

export const headerWrapper = style([
  container({ width: 'full', display: 'flex', justifyContent: 'center' }),
  { boxShadow: 'var(--shadow-1)' },
]);

export const headerContainer = container({ width: 'full', maxWidth: 'xl' });
