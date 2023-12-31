import { lazy } from 'react';

import type { RouteObject } from 'react-router-dom';

const ProductList = lazy(() => import('./ProductList'));

export const productRoute: RouteObject = {
  index: true,
  element: <ProductList />,
};
