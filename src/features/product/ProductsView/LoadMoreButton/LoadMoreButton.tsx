import { useProductsStore } from '@core/stores';
import { Button } from '@shared/UI';

import type { ProductsStore } from '@core/stores';

import styles from './LoadMoreButton.module.scss';

const productSelector = (state: ProductsStore) =>
  [state.filter.noMore, state.isLoadingProducts, state.getMoreProducts] as const;

export const LoadMoreButton = () => {
  const [noMore, isLoadingProducts, getMoreProducts] = useProductsStore(productSelector);

  return (
    <div className={styles.loadMore}>
      <Button
        disabled={noMore || isLoadingProducts}
        size="md"
        className={styles.loadMoreButton}
        onClick={getMoreProducts}
      >
        Load more
      </Button>
    </div>
  );
};
