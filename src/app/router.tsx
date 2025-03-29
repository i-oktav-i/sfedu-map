// import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, createHashRouter, redirect } from 'react-router';

import { MainPage } from '@pages/MainPage';
import { SomethingWrongWidget } from '@widgets/SomethingWrongWidget';

import { Layout } from './ui/Layout';

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Outlet />,
        ErrorBoundary: SomethingWrongWidget,
        children: [
          {
            path: '/',
            element: <MainPage />,
            ErrorBoundary: SomethingWrongWidget,
          },
          {
            path: '/404',
            element: (
              <div>
                <h1>404</h1>
              </div>
            ),
          },
          {
            path: '*',
            loader: () => redirect('/404'),
          },
        ],
      },
    ],
  },
]);
