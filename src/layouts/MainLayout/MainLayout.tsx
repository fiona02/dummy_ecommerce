import { Outlet } from 'react-router-dom';

import { useMainLayoutStore } from '@core/stores';
import cl from 'classnames';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

import type { MainLayoutStore } from '@core/stores';

import styles from './MainLayout.module.scss';

const mainLayoutSelector = (state: MainLayoutStore) => [state.isCollapsed] as const;

export const MainLayout = () => {
  const [isCollapsed] = useMainLayoutStore(mainLayoutSelector);

  const classes = cl(styles.mainLayout, {
    [styles.mainLayoutCollapsed]: isCollapsed,
  });

  return (
    <div className={classes}>
      <Sidebar />

      <div className={styles.middleSection}>
        <Header />
        <div className={styles.contentSection}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
