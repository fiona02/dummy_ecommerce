import { GridCardContainer, ProductCard } from '@components';
import { useCartStore } from '@core/stores';
import { CountHandler } from '@shared/UI';

import type { ProductEntity } from '@core/repositories';
import type { CartStore } from '@core/stores';

import styles from './Products.module.scss';

const cartSelect = (state: CartStore) =>
  [state.products, state.addProductToCart, state.removeProductFromCart] as const;
export const Products = () => {
  const [products, add, remove] = useCartStore(cartSelect);

  const handleClickPlus = (product: ProductEntity) => {
    return () => add(product);
  };

  const handleClickMinus = (product: ProductEntity) => {
    return () => remove(product);
  };

  const mapProducts = products.map(({ product, count, isAvailable }) => (
    <ProductCard
      key={product.id}
      product={product}
      customButton={
        <CountHandler
          count={count}
          onClickMinus={handleClickMinus(product)}
          onClickPlus={handleClickPlus(product)}
          propsPlusButton={{ disabled: !isAvailable }}
        />
      }
    />
  ));

  return <GridCardContainer className={styles.container}>{mapProducts}</GridCardContainer>;
};
