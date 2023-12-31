import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProtectedRoute } from '@components';
import { routes } from '@core/routes';
import { AuthLayout, MainLayout } from '@layouts';

import { authRoute } from './Auth';
import { cartRouter } from './Cart';
import { productRoute } from './Product';

const router = createBrowserRouter([
  {
    path: routes.home.root,
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),

    children: [
      productRoute,
      cartRouter,
      {
        path: '/favorite',
        element: <h1>Favorite</h1>,
      },
    ],
  },

  {
    path: routes.auth.root,
    element: <AuthLayout />,

    children: authRoute,
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
