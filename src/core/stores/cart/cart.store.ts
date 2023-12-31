import { create } from '@core/stores/_utils';
import { localStorageService } from '@shared/services';
import { calculateDiscount } from '@shared/utils';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { CartEntity, ProductCartEntity, ProductEntity } from '@core/repositories';

type Store = CartEntity;

type Action = {
  addProductToCart: (product: ProductEntity) => void;

  removeProductFromCart: (product: ProductEntity) => void;

  completePurchase: () => void;

  reset: () => void;
};

export type CartStore = Store & Action;

const initialState: Store = {
  totalPrice: 0,
  totalDiscounted: 0,
  totalCount: 0,
  products: [],
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        ...initialState,

        addProductToCart: (product) => {
          const isIncludeProduct = get().products.some((p) => p.product.id === product.id);
          let updatedProducts: ProductCartEntity[] = [];

          if (isIncludeProduct) {
            updatedProducts = get().products.map((p) => {
              if (p.product.id === product.id && p.count < product.stock) {
                return {
                  ...p,
                  count: p.count + 1,
                  isAvailable: p.count + 1 < product.stock,
                };
              }
              return p;
            });
          } else {
            updatedProducts = [
              ...get().products,
              {
                product,
                count: 1,
                isAvailable: true,
              },
            ];
          }

          set((state) => {
            state.products = updatedProducts;
            state.totalPrice = calculateTotalPrice(updatedProducts);
            state.totalDiscounted = calculateTotalDiscount(updatedProducts);
            state.totalCount = updatedProducts.reduce((total, product) => total + product.count, 0);
          });
        },


        removeProductFromCart: (product) => {
          const updatedProducts: ProductCartEntity[] = [];

          get().products.forEach((p) => {
            if (p.product.id !== product.id) {
              updatedProducts.push(p);
            }
            if (p.product.id === product.id && p.count > 1) {
              updatedProducts.push({
                ...p,
                count: p.count - 1,
                isAvailable: p.count - 1 < product.stock,
              });
            }
          });

          set((state) => {
            state.products = updatedProducts;
            state.totalPrice = calculateTotalPrice(updatedProducts);
            state.totalDiscounted = calculateTotalDiscount(updatedProducts);
            state.totalCount = updatedProducts.reduce((total, product) => total + product.count, 0);
          });
        },

        completePurchase: () => {
          set(initialState);
        },

        reset: () => {
          set(initialState);
          localStorageService.removeItem('cart');
        },
      })),
      {
        name: 'cart',
        version: 1,
      }
    ),
    { name: 'cart' }
  )
);

const calculateTotalPrice = (products: ProductCartEntity[]) => {
  return products.reduce((acc, product) => {
    return acc + product.product.price * product.count;
  }, 0);
};

const calculateTotalDiscount = (products: ProductCartEntity[]) => {
  return products.reduce((acc, product) => {
    const price = product.product.price * product.count;
    const totalProductDiscount = calculateDiscount(price, product.product.discountPercentage);

    return acc + Number(totalProductDiscount);
  }, 0);
};
