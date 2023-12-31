import { items } from './items';
import { NavItem } from './NavItem';

import styles from './NavItems.module.scss';

export const NavItems = () => {
  const mapItems = items.map((item) => {
    return <NavItem key={item.key} to={item.to} label={item.label} icon={item.icon} />;
  });

  return <nav className={styles.navItems}>{mapItems}</nav>;
};
