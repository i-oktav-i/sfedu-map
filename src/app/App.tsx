// Should be at the top of the imports
import '@radix-ui/themes/styles.css';

import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router';

import { SomethingWrongWidget } from '@widgets/SomethingWrongWidget';

import { router } from './router';
import './index.css';

export const App: FC = () => (
  <ErrorBoundary FallbackComponent={SomethingWrongWidget}>
    <RouterProvider router={router} />
  </ErrorBoundary>
);
