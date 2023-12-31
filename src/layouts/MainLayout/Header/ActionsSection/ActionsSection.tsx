import { ThemeSwitcher } from '@components';

import { CartAction } from './CartAction';
import { LogoutAction } from './LogoutAction';

import styles from './ActionsSection.module.scss';

export const ActionsSection = () => {
  return (
    <div className={styles.actionsSection}>
      <ThemeSwitcher />
      <CartAction />
      <LogoutAction />
    </div>
  );
};
