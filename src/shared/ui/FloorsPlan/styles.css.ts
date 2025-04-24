import { globalStyle, style } from '@vanilla-extract/css';

import { config, container } from '@shared/theme';

export const floorsPlansContainer = style([
  container({
    width: 'full',
    boxSizing: 'border-box',
    gap: 'x3',
  }),
  {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 300px',
  },
]);

export const planContainer = style([
  container({ size: 'full', display: 'flex', placeItems: 'center' }),
]);

export const title = style({
  gridColumn: 'span 2',
});

export const loadingText = style([
  container({ display: 'flex', placeItems: 'center' }),
  {
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },
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
