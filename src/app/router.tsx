import { createHashRouter, redirect } from 'react-router';

export const router = createHashRouter([
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
]);
