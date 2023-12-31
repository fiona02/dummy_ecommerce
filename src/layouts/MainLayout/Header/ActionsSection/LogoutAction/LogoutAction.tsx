import { routes } from '@core/routes';
import { useAuthStore } from '@core/stores';
import { useAppNavigate } from '@hooks';
import { DoorExitIcon } from '@shared/UI';

import type { AuthState } from '@core/stores';

import styles from './LogoutAction.module.scss';

const authSelector = (state: AuthState) => [state.logout] as const;

export const LogoutAction = () => {
  const [logout] = useAuthStore(authSelector);

  const navigate = useAppNavigate();

  const handleLogout = () => {
    logout().then(() => {
      navigate(routes.auth.signin.root, { replace: true });
    });
  };

  return (
    <span className={styles.logoutAction} onClick={handleLogout}>
      <DoorExitIcon />
    </span>
  );
};
