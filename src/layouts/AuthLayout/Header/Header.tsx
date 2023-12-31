import { ThemeSwitcher } from '@components';
import { LogoIcon } from '@shared/UI';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <LogoIcon />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
