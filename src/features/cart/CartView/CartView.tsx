import { CompletePurchase } from './CompletePurchase';
import { Products } from './Products';
import { TotalInfo } from './TotalInfo';

import styles from './CartView.module.scss';

export const CartView = () => {
  return (
    <div>
      <div className={styles.header}>
        <TotalInfo />
        <CompletePurchase />
      </div>
      <Products />
    </div>
  );
};
