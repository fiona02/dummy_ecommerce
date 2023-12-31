import { Outlet } from 'react-router-dom';

import styles from './Content.module.scss';

export const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
