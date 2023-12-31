import { useMainLayoutStore } from '@core/stores';
import cl from 'classnames';

import { ActionsSection } from './ActionsSection';
import { SearchSection } from './SearchSection';

import type { MainLayoutStore } from '@core/stores';

import styles from './Header.module.scss';

const mainLayoutSelector = (state: MainLayoutStore) => [state.isCollapsed] as const;

export const Header = () => {
  const [isCollapsed] = useMainLayoutStore(mainLayoutSelector);

  const classes = cl(styles.header, {
    [styles.headerCollapsed]: isCollapsed,
  });

  return (
    <div className={classes}>
      <SearchSection />
      <ActionsSection />
    </div>
  );
};
