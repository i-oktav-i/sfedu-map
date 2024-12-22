import { InterpolationClient } from './InterpolationClient';

export const ruInterpolationClient = new InterpolationClient({
  resource: {
    header: {
      pageTitle: 'Карта кампусов',
      themeSelect: {
        light: 'Светлая',
        dark: 'Темная',
        auto: 'Системная',
      },
    },
  },
});
