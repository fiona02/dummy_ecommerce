import { StarIcon } from '@shared/UI';
import { calculateDiscount } from '@shared/utils';

import styles from './Description.module.scss';

export type DescriptionProps = {
  title: string;

  brand: string;

  discount: number;

  price: number;

  rating: number;

  stock: number;
};

export const Description = (props: DescriptionProps) => {
  const { title, brand, discount, price, rating, stock } = props;

  const priceWithDiscount = +calculateDiscount(price, discount);

  return (
    <div className={styles.description}>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.brand}>{brand}</p>
      </div>

      <div className={styles.priceWrapper}>
        <span className={styles.discountPrice}>${priceWithDiscount}</span>
        <span className={styles.price}>${price}</span>
      </div>

      <div className={styles.ratingWrapper}>
        <span className={styles.stock}>{stock} in stock</span>

        <span className={styles.ratingIcon}>
          <StarIcon />
        </span>
        <span className={styles.ratingNumber}>{rating}</span>
      </div>
    </div>
  );
};
