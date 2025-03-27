import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';
import { RecoilRoot } from 'recoil';

import { router } from './router';

import '@radix-ui/themes/styles.css';

import { SomethingWrongWidget } from '@widgets/SomethingWrongWidget';
import './index.css';

export const App: FC = () => (
  <RecoilRoot>
    <ErrorBoundary FallbackComponent={SomethingWrongWidget}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </RecoilRoot>
);
