import { useEffect } from 'react';

import { routes } from '@core/routes';
import { useAuthStore } from '@core/stores';
import { useAppLocation, useAppNavigate } from '@hooks';

import { Content } from './Content';
import { Header } from './Header';

import type { AuthState } from '@core/stores';

import styles from './Auth.module.scss';

const authSelector = (state: AuthState) => [state.isLoggedIn];

export const AuthLayout = () => {
  const [isLoggedIn] = useAuthStore(authSelector);

  const { pathname } = useAppLocation();
  const navigate = useAppNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.home.root);
      return;
    }

    if (routes.auth.root === pathname) {
      navigate(routes.auth.signin.root);
    }
  }, []);

  return (
    <div className={styles.authLayout}>
      <Header />
      <Content />
    </div>
  );
};
