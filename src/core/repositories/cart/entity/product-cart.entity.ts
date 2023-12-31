import type { ProductEntity } from '@core/repositories/products';

export type ProductCartEntity = {
  count: number;

  isAvailable: boolean;

  product: ProductEntity;
};
