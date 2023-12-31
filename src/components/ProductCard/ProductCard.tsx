import { BuyButton } from './BuyButton';
import { Description } from './Description';
import { Image } from './Image';

import type { ProductEntity } from '@core/repositories/products';
import type { ReactNode } from 'react';

import styles from './ProductCard.module.scss';

interface CardProps {
  product: ProductEntity;

  onClickBuy?: (product: ProductEntity) => void;

  customButton?: ReactNode;
}

export const ProductCard = (props: CardProps) => {
  const { product, onClickBuy, customButton } = props;

  const handleClickBuy = () => {
    onClickBuy?.(product);
  };

  return (
    <div className={styles.productCard}>
      <Image imagePath={product.thumbnail} title={product.title} />

      <div className={styles.descriptionWrapper}>
        <Description
          title={product.title}
          brand={product.brand}
          discount={product.discountPercentage}
          price={product.price}
          rating={product.rating}
          stock={product.stock}
        />
        <div className={styles.buttonWrapper}>
          {customButton ? customButton : <BuyButton onClickBuy={handleClickBuy} />}
        </div>
      </div>
    </div>
  );
};
