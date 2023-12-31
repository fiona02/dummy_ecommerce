import { lazy } from 'react';

import { routes } from '@core/routes';

import type { RouteObject } from 'react-router-dom';

const CartList = lazy(() => import('./CartList'));

export const cartRouter: RouteObject = {
  path: routes.cart.root,
  element: <CartList />,
};
