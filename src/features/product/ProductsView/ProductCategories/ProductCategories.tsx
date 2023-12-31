import { useEffect } from 'react';

import { CategoryItem } from '@components';
import { useProductsStore } from '@core/stores';
import { useHorizontalScroll } from '@hooks';

import type { ProductsStore } from '@core/stores';

import styles from './ProductCategories.module.scss';

const productsSelector = (state: ProductsStore) =>
  [
    state.categories,
    state.filter.category,
    state.getCategories,
    state.getProductsByCategory,
  ] as const;
export const ProductCategories = () => {
  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  const [categories, currentCategory, getCategories, getProductsByCategory] =
    useProductsStore(productsSelector);

  const updatedCategories = ['all', ...categories];

  useEffect(() => {
    getCategories();
  }, []);

  const handleClickCategory = (category: string) => {
    getProductsByCategory(category);
  };

  const renderCategories = updatedCategories.map((category) => {
    return (
      <CategoryItem
        category={category}
        key={category}
        isActive={category === currentCategory}
        onClick={handleClickCategory}
      />
    );
  });

  return (
    <div className={styles.productCategories}>
      <div ref={scrollRef} className={styles.categoriesList}>
        {renderCategories}
      </div>
    </div>
  );
};
