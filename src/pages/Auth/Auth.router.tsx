import { lazy } from 'react';

import { routes } from '@core/routes';

import type { RouteObject } from 'react-router-dom';

const Signin = lazy(() => import('./Signin'));

export const authRoute: RouteObject[] = [
  {
    path: routes.auth.signin.root,
    element: <Signin />,
  },
];
