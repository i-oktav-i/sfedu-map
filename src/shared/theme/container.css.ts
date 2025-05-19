import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { themeDependentTokensConfig, tokensConfig } from './base.css';
import { colorsContract } from './colorsContract.css';
import { conditions } from './conditions.css';
import { indentProperties } from './indents.css';

const commonSizes = {
  third: 'calc(100% / 3)',
  twoThird: 'calc(100% / 3 * 2)',
  quarter: '25%',
  half: '50%',
  full: '100%',
  auto: 'auto',
  unset: 'unset',
  ['fit-content']: 'fit-content',
  ['max-content']: 'max-content',
  ['min-content']: 'min-content',
} as const;

const responsiveProperties = defineProperties({
  ...conditions,
  defaultCondition: 'initial',
  properties: {
    display: ['none', 'contents', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    flexWrap: ['nowrap', 'wrap'],
    flex: ['auto', 'none'],
    gap: tokensConfig.space,
    rowGap: tokensConfig.space,
    columnGap: tokensConfig.space,
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
    overflowX: ['visible', 'hidden', 'scroll', 'auto'],
    overflowY: ['visible', 'hidden', 'scroll', 'auto'],
    width: {
      ...commonSizes,
      ...tokensConfig.space,
      ...tokensConfig.breakpoints,
      viewport: '100dvw',
    },
    height: {
      ...commonSizes,
      ...tokensConfig.space,
      ...tokensConfig.breakpoints,
      viewport: '100dvh',
    },
    maxWidth: {
      ...commonSizes,
      ...tokensConfig.space,
      ...tokensConfig.breakpoints,
      viewport: '100dvw',
    },
    maxHeight: {
      ...commonSizes,
      ...tokensConfig.space,
      ...tokensConfig.breakpoints,
      viewport: '100dvh',
    },
    minWidth: {
      ...commonSizes,
      ...tokensConfig.space,
      ...tokensConfig.breakpoints,
      viewport: '100dvw',
    },
    minHeight: {
      ...commonSizes,
      ...tokensConfig.space,
      ...tokensConfig.breakpoints,
      viewport: '100dvh',
    },
    border: themeDependentTokensConfig.borders,
    borderTop: themeDependentTokensConfig.borders,
    borderBottom: themeDependentTokensConfig.borders,
    borderLeft: themeDependentTokensConfig.borders,
    borderRight: themeDependentTokensConfig.borders,
    borderRadius: tokensConfig.radii,
    zIndex: tokensConfig.zIndex,
    boxSizing: ['border-box', 'content-box'],
  },
  shorthands: {
    placeItems: ['justifyContent', 'alignItems'],
    size: ['width', 'height'],
    maxSize: ['maxWidth', 'maxHeight'],
    minSize: ['minWidth', 'minHeight'],
    borderX: ['borderLeft', 'borderRight'],
    borderY: ['borderTop', 'borderBottom'],
  },
});

const containerColorProperties = defineProperties({
  properties: {
    backgroundColor: { ...colorsContract.colors.background, transparent: '#ffffff00' },
  },
});

export const container = createSprinkles(
  indentProperties,
  responsiveProperties,
  containerColorProperties,
);

export type ContainerProps = Parameters<typeof container>[0];
