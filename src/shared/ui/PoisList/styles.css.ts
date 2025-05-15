import { container, inset } from '@shared/theme';
import { style } from '@vanilla-extract/css';
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
      true: [container({ height: 'full' }), inset({ bottom: { initial: 'x0', sm: 'x4' } })],
      false: [
        container({
          height: { initial: 'auto', sm: 'full' },
        }),
        inset({ bottom: { initial: 'unset', sm: 'x4' } }),
      ],
    },
  },
});

export const toggler = container({
  display: { sm: 'none' },
  flex: 'none',
});

export const listWrapper = recipe({
  base: [container({ padding: 'x0', flexDirection: 'column', size: 'full' })],
  variants: {
    visible: {
      true: container({ display: 'flex' }),
      false: container({ display: { initial: 'none', sm: 'flex' } }),
    },
  },
});

export const listItemContainer = container({ size: 'full' });

export const searchInputContainer = style([
  inset({
    position: 'sticky',
    top: 'x0',
  }),
  container({ zIndex: 'sticky', padding: 'x2' }),
  { backdropFilter: 'blur(10px)' },
]);

export const searchInputForm = container({ size: 'full' });
