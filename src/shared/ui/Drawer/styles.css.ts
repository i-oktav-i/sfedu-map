import { container, inset } from '@shared/theme';
import { recipe } from '@vanilla-extract/recipes';

export const drawerContainer = recipe({
  base: [
    container({
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      height: 'full',
      backgroundColor: 'primary',
      border: { initial: 'none', sm: 'primary' },
      zIndex: 'modal',
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
      false: {
        transform: 'translateX(-100%)',
      },
    },
  },
});

export const title = container({ padding: 'x4', borderBottom: 'primary' });

export const contentContainer = container({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  padding: 'x4',
  paddingBottom: 'x8',
});

export const closeButton = inset({ position: 'absolute', top: 'x4', right: 'x4' });
