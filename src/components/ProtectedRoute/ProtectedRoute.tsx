import { Navigate } from 'react-router-dom';

import { routes } from '@core/routes';
import { useAuthStore } from '@core/stores';
import { useAppLocation } from '@hooks';

import type { AuthState } from '@core/stores';
import type { AppLocationState } from '@shared/types';
import type { ReactNode } from 'react';

export type ProtectedRouteProps = { children: ReactNode };

const authSelector = (state: AuthState) => [state.isLoggedIn];
export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;

  const [isLoggedIn] = useAuthStore(authSelector);

  const location = useAppLocation();

  const state: AppLocationState = {
    from: location.pathname,
  };

  if (!isLoggedIn) {
    return <Navigate to={routes.auth.signin.root} state={state} />;
  }

  return <>{children}</>;
};
