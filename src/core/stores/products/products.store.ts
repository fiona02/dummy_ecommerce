import { productRepository } from '@core/repositories/products';
import { create } from '@core/stores/_utils';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { FilterProductsDto, ProductEntity } from '@core/repositories/products';

type FilterState = {
  limit: number;
  total: number;
  skip: number;
  category: string;
  noMore: boolean;
};

type Store = {
  products: ProductEntity[];

  filter: FilterState;

  categories: string[];

  searchQuery: string;

  total: number;

  isLoadingProducts: boolean;
};

type Actions = {
  getProducts: () => Promise<ProductEntity[]>;

  getProductsByCategory: (category: string) => Promise<ProductEntity[]>;

  getMoreProducts: () => Promise<ProductEntity[]>;

  getCategories: () => Promise<string[]>;

  reset: () => void;
};

export type ProductsStore = Store & Actions;

const initialState: Store = {
  products: [],
  categories: [],

  filter: {
    limit: 9,
    total: 0,
    skip: 0,
    category: 'all',
    noMore: false,
  },
  searchQuery: '',
  isLoadingProducts: false,

  total: 0,
};

export const useProductsStore = create<ProductsStore>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      getProducts: async () => {
        set({ isLoadingProducts: true });
        try {
          const filter = {
            limit: get().filter.limit,
            skip: get().filter.skip,
          };

          const res = await productRepository.getAll(filter);

          set((state) => {
            state.products = res.data.products;
            state.total = res.data.total;
            state.filter.skip = res.data.skip;
            state.filter.noMore = res.data.total <= (filter.skip || filter.limit);
          });

          return res.data.products;
        } catch (e) {
          return await Promise.reject(e);
        } finally {
          set({ isLoadingProducts: false });
        }
      },

      getMoreProducts: async () => {
        set((state) => {
          state.isLoadingProducts = true;
        });
        try {
          const filter = get().filter;

          const filterDTO: FilterProductsDto = {
            limit: filter.limit,
            skip: filter.skip + filter.limit,
          };

          let res: Awaited<ReturnType<typeof productRepository.getAll>>;

          if (filter.category === 'all') {
            res = await productRepository.getAll(filterDTO);
          } else {
            res = await productRepository.getProductsByCategory(filter.category, filterDTO);
          }

          set((state) => {
            state.products = [...state.products, ...res.data.products];
            state.total = res.data.total;
            state.filter.skip = res.data.skip;
            state.filter.noMore = res.data.total <= filter.skip;
          });

          return res.data.products;
        } catch (e) {
          return await Promise.reject(e);
        } finally {
          set((state) => {
            state.isLoadingProducts = false;
          });
        }
      },

      getProductsByCategory: async (category: string) => {
        set((state) => {
          state.isLoadingProducts = true;
        });

        try {
          if (category === 'all') {
            const products = await get().getProducts();

            set((state) => {
              state.filter.category = 'all';
            });

            return products;
          }

          const res = await productRepository.getProductsByCategory(category);

          set((state) => {
            state.products = res.data.products;
            state.total = res.data.total;
            state.filter.skip = res.data.skip;
            state.filter.category = category;
            state.filter.noMore =
              res.data.total <= state.filter.skip || res.data.total <= state.filter.limit;
          });

          return res.data.products;
        } catch (e) {
          return await Promise.reject(e);
        } finally {
          set((state) => {
            state.isLoadingProducts = false;
          });
        }
      },

      getCategories: async () => {
        try {
          const res = await productRepository.getAllCategories();

          set((state) => {
            state.categories = res.data;
          });

          return res.data;
        } catch (e) {
          return Promise.reject(e);
        }
      },

      reset: () => {
        set(initialState);
      },
    })),
    { name: 'ProductsStore' }
  )
);
