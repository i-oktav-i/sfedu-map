import { createHashRouter, redirect } from 'react-router';
import { Layout } from './ui/Layout';

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
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
]);
