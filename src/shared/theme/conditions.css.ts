export const conditions = {
  conditions: {
    initial: {},
    xs: { '@media': 'screen and (min-width: 480px)' },
    sm: { '@media': 'screen and (min-width: 768px)' },
    md: { '@media': 'screen and (min-width: 1024px)' },
    lg: { '@media': 'screen and (min-width: 1280px)' },
    xl: { '@media': 'screen and (min-width: 1640px)' },
  },
  defaultCondition: 'initial',
} as const;
