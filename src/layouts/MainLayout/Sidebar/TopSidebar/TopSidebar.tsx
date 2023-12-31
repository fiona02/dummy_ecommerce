import { memo } from 'react';

import { CustomNavLink } from '@components';
import { useMainLayoutStore } from '@core/stores';
import { Divider, LogoIcon, SidebarHandlerIcon } from '@shared/UI';
import cl from 'classnames';

import styles from './TopSidebar.module.scss';

export const TopSidebar = memo(() => {
  const [isCollapsed, toggleSidebar] = useMainLayoutStore((state) => [
    state.isCollapsed,
    state.toggleCollapsed,
  ]);

  const classes = cl(styles.topSidebar, {
    [styles.topSidebarCollapsed]: isCollapsed,
  });

  return (
    <div className={classes}>
      <CustomNavLink to="/" replace className={styles.logo}>
        <LogoIcon />
      </CustomNavLink>

      <Divider type="vertical" className={styles.divider} />

      <span className={styles.collapseHandler} onClick={toggleSidebar}>
        <SidebarHandlerIcon />
      </span>
    </div>
  );
});
