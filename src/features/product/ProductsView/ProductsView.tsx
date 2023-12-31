import { useEffect } from 'react';

import { GridCardContainer, ProductCard } from '@components';
import { useCartStore, useProductsStore } from '@core/stores';
import { Loader } from '@shared/UI';

import { LoadMoreButton } from './LoadMoreButton';
import { ProductCategories } from './ProductCategories';

import type { CartStore, ProductsStore } from '@core/stores';

import styles from './ProductsView.module.scss';

const productsSelector = (state: ProductsStore) =>
  [state.products, state.isLoadingProducts, state.getProducts] as const;
const cartSelector = (state: CartStore) => [state.addProductToCart];

export const ProductsView = () => {
  const [products, isLoadingProducts, getProducts] = useProductsStore(productsSelector);
  const [addProductToCart] = useCartStore(cartSelector);

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoadingProducts && !products.length) {
    return <Loader />;
  }

  const mapProducts = products.map((product) => (
    <ProductCard key={product.id} product={product} onClickBuy={addProductToCart} />
  ));

  return (
    <Loader spinning={isLoadingProducts}>
      <div className={styles.productsView}>
        <ProductCategories />
        <GridCardContainer className={styles.cardContainer}>{mapProducts}</GridCardContainer>

        <LoadMoreButton />
      </div>
    </Loader>
  );
};
