import React from 'react';

import { CustomNavLink } from '@components';
import { routes } from '@core/routes';
import { useCartStore } from '@core/stores'; 
import { CartIcon } from '@shared/UI';
import cl from 'classnames';

import type { CustomNavLinkProps } from '@components';

import styles from './CartAction.module.scss';


export const CartAction = () => {
  const classes: CustomNavLinkProps['className'] = ({ isActive }) => {
    return cl(styles.cartAction, {
      [styles.cartActionActive]: isActive,
    });
  };

  const { totalCount } = useCartStore(); // Get the total count from your cart store

  return (
    <CustomNavLink to={routes.cart.root} className={classes}>
      <CartIcon />
      {totalCount > 0 && ( // Render the count if there are items in the cart
        <span className={styles.itemCount}>{totalCount}</span>
      )}
    </CustomNavLink>
  );
};
