import '@radix-ui/themes/styles.css';
import { FC } from 'react';
import { RouterProvider } from 'react-router';

import { router } from './router';
import './index.css';
import { RecoilRoot } from 'recoil';

export const App: FC = () => (
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
