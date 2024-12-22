import '@radix-ui/themes/styles.css';
import { FC } from 'react';
import { RouterProvider } from 'react-router';

import { router } from './router';

export const App: FC = () => <RouterProvider router={router} />;
