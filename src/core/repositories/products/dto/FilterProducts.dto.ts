import type { ProductEntity } from '@core/repositories/products/entity';

export type FilterProductsDto = {
  limit?: number;

  skip?: number;

  select?: (keyof Omit<ProductEntity, 'id'>)[];
};
