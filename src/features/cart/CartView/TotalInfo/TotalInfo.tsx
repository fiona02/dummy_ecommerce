import { useCartStore } from '@core/stores';

import type { CartStore } from '@core/stores';

import styles from './TotalInfo.module.scss';

const cartSelector = (state: CartStore) => [state.totalPrice, state.totalDiscounted];

export const TotalInfo = () => {
  const [totalPrice, totalDiscounted] = useCartStore(cartSelector);

  return (
    <div className={styles.totalInfo}>
      <span className={styles.title}>Total Price: </span>
      <span className={styles.discounted}>${totalDiscounted}</span>
      <span className={styles.price}>${totalPrice}</span>
    </div>
  );
};
