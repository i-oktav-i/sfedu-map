import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { tokensConfig } from './base.css';
import { conditions } from './conditions.css';

const additional = {
  third: 'calc(100% / 3)',
  twoThird: 'calc(100% / 3 * 2)',
  quarter: '25%',
  half: '50%',
  full: '100%',
  auto: 'auto',
  unset: 'unset',
} as const;

const insetProperties = defineProperties({
  ...conditions,
  properties: {
    position: ['relative', 'absolute', 'fixed', 'sticky', 'static'],
    top: { ...additional, ...tokensConfig.space },
    bottom: { ...additional, ...tokensConfig.space },
    left: { ...additional, ...tokensConfig.space },
    right: { ...additional, ...tokensConfig.space },
  },
  shorthands: {
    inset: ['top', 'bottom', 'left', 'right'],
    insetX: ['left', 'right'],
    insetY: ['top', 'bottom'],
  },
});

export const inset = createSprinkles(insetProperties);

export type InsetProps = Parameters<typeof inset>[0];
