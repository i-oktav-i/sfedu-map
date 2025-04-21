import { globalStyle, style } from '@vanilla-extract/css';

import { config, container } from '@shared/theme';

export const planContainer = style([
  container({ size: 'full', display: 'flex', placeItems: 'center' }),
]);

globalStyle(`${planContainer} [data-interactive]`, {
  fill: 'transparent',
  stroke: 'transparent',
  strokeWidth: 0,
  cursor: 'pointer',
});

globalStyle(`${planContainer} [data-interactive]:is(:hover, :focus-visible)`, {
  fill: config.colors.border.active,
  opacity: 0.5,
  filter: 'brightness(0.8)',
});
