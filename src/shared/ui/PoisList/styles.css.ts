import { config } from '@shared/theme';
import { style } from '@vanilla-extract/css';

export const container = style({ zIndex: 1000 });

export const listWrapper = style({
  background: config.colors.background.primary,
  borderRadius: config.radii.x4,
  boxShadow: 'var(--shadow-6)',
  listStyle: 'none',
  padding: 0,
});
