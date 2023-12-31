import { LocalStorageService } from '@shared/services';

import type { CartEntity } from '@core/repositories/cart/entity';

class CartRepository {
  private storage = new LocalStorageService();

  private storageKey = 'cart';

  getCart = (): CartEntity => {
    const cart = this.storage.getItem<CartEntity>(this.storageKey);

    if (!cart) {
      return {
        totalPrice: 0,
        totalDiscounted: 0,
        products: [],
        totalCount: 0, // Add this line
      };
    } 
    return cart;
  };

  setCart = (value: CartEntity) => {
    this.storage.setItem(this.storageKey, JSON.stringify(value));
  };
}

export const cartRepository = new CartRepository();
