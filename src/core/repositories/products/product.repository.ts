import { HttpService } from '@core/services/HttpService';

import type { FilterProductsDto, SearchProductQueryDto } from '@core/repositories/products/dto';
import type { PaginationEntity, ProductEntity } from '@core/repositories/products/entity';

class ProductRepository {
  private http = new HttpService('products');

  getAll = (query?: FilterProductsDto) => {
    return this.http.get<
      {
        products: ProductEntity[];
      } & PaginationEntity
    >('', undefined, query);
  };

  getAllCategories = () => {
    return this.http.get<string[]>('categories');
  };

  getProductsByCategory = (category: string, query?: FilterProductsDto) => {
    return this.http.get<
      {
        products: ProductEntity[];
      } & PaginationEntity
    >('category', category, query);
  };

  getSingle = (id: number) => {
    return this.http.get<ProductEntity>(``, id);
  };

  search = (query?: SearchProductQueryDto) => {
    return this.http.get<
      {
        products: ProductEntity[];
      } & PaginationEntity
    >('search', undefined, query);
  };
}

export const productRepository = new ProductRepository();
