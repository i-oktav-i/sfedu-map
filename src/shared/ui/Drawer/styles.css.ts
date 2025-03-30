import { container, inset } from '@shared/theme';
import { recipe } from '@vanilla-extract/recipes';

export const drawerContainer = recipe({
  base: [
    container({
      width: 'full',
      height: 'full',
      backgroundColor: 'primary',
      border: { initial: 'none', sm: 'primary' },
      zIndex: 'modal',
      padding: 'x4',
      boxSizing: 'border-box',
    }),
    inset({ position: 'absolute', inset: 'x0' }),
    {
      transition: 'transform 0.3s ease-in-out',
      transform: 'translateX(0)',

      // @ts-ignore
      '@starting-style': {
        transform: 'translateX(-100%)',
      },
    },
  ],
  variants: {
    visible: {
      // true: {
      //   transform: 'translateX(0)',
      // },
      false: {
        transform: 'translateX(-100%)',
      },
    },
  },
});

export const title = container({ paddingBottom: 'x8' });

export const closeButton = inset({ position: 'absolute', top: 'x4', right: 'x4' });
