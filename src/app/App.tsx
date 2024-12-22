import { FC } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { RouterProvider } from 'react-router';

import { router } from './router';

export const App: FC = () => (
  <Theme>
    <RouterProvider router={router} />
  </Theme>
);
