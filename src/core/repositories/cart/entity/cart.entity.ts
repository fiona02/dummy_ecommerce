import type { ProductCartEntity } from './product-cart.entity';

export type CartEntity = {
  totalPrice: number;
  totalDiscounted: number;

  totalCount: number;

  products: ProductCartEntity[];
};
