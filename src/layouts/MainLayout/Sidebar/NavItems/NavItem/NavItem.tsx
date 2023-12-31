import { CustomNavLink } from '@components';
import cl from 'classnames';

import type { CustomNavLinkProps } from '@components';
import type { ReactNode } from 'react';

import styles from './NavItem.module.scss';

type NavItemProps = Pick<CustomNavLinkProps, 'to'> & {
  icon?: ReactNode;
  label: ReactNode;
};

export const NavItem = (props: NavItemProps) => {
  const { to, label, icon } = props;

  const classes: CustomNavLinkProps['className'] = ({ isActive }) => {
    return cl(styles.navItem, { [styles.navItemActive]: isActive });
  };

  return (
    <CustomNavLink to={to} className={classes}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </CustomNavLink>
  );
};
