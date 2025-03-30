import { container, inset } from '@shared/theme';
import { recipe } from '@vanilla-extract/recipes';

export const card = recipe({
  base: [
    {
      boxShadow: 'var(--shadow-6)',
      transition: 'max-height 0.2s',
    },
    container({
      borderRadius: { initial: 'x4', sm: 'x0' },
      zIndex: { initial: 'modal', sm: 'base' },
      backgroundColor: 'primary',
    }),
    inset({
      position: { initial: 'absolute', sm: 'static' },
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
