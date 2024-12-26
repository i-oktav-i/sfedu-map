import { config, container, inset } from '@shared/theme';
import { recipe } from '@vanilla-extract/recipes';

export const card = recipe({
  base: [
    {
      zIndex: 1000,
      background: config.colors.background.primary,
      borderRadius: config.radii.x4,
      boxShadow: 'var(--shadow-6)',
      transition: 'max-height 0.2s',
    },
    inset({
      position: 'absolute',
      left: { initial: 'x0', sm: 'x4' },
      right: { initial: 'x0', sm: 'unset' },
      top: {
        initial: 'x0',
        sm: 'x4',
      },
    }),
  ],
  variants: {
    expanded: {
      true: [
        container({ height: { initial: 'full', sm: 'unset' } }),
        inset({ bottom: { initial: 'x0', sm: 'x4' } }),
      ],
      false: [
        container({
          height: { initial: 'auto', sm: 'unset' },
        }),
        inset({ bottom: { initial: 'unset', sm: 'x4' } }),
      ],
    },
  },
});

export const toggler = container({
  display: { sm: 'none' },
});

export const listWrapper = recipe({
  base: {
    listStyle: 'none',
    padding: 0,
  },
  variants: {
    visible: {
      false: container({ display: { initial: 'none', sm: 'block' } }),
    },
  },
});
