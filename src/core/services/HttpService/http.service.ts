import { http } from './http.config';

import type { AxiosRequestConfig } from 'axios';

type QueryValue = string | number | boolean | (string | number | boolean)[];

type QueryParams<T> = Partial<Record<keyof T, QueryValue>>;

type Params = string | number | (string | number)[];

export class HttpService {
  constructor(public prefix: string) {}

  get = <Response = any, Query = any>(
    url: string,
    params?: Params,
    queryParams?: QueryParams<Query>,
    config?: AxiosRequestConfig
  ) => {
    return http.get<Response>(this.getUrl(url, params, queryParams), config);
  };

  post = <Response = any, Data = any, Query = any>(
    url: string,
    data: Data,
    params?: Params,
    queryParams?: QueryParams<Query>,
    config?: AxiosRequestConfig
  ) => {
    return http.post<Response>(this.getUrl(url, params, queryParams), data, config);
  };

  put = <Response = any, Data = any, Query = any>(
    url: string,
    data: Data,
    params?: Params,
    queryParams?: QueryParams<Query>,
    config?: AxiosRequestConfig
  ) => {
    return http.put<Response>(this.getUrl(url, params, queryParams), data, config);
  };

  delete = <Response = any, Query = any>(
    url: string,
    params?: Params,
    queryParams?: QueryParams<Query>,
    config?: AxiosRequestConfig
  ) => {
    return http.delete<Response>(this.getUrl(url, params, queryParams), config);
  };

  private getUrl = <Query = any>(
    url: string,
    params?: Params,
    queryParams?: QueryParams<Query>
  ) => {
    let resultUrl = `/${this.prefix}/${url}`;

    if (params && Array.isArray(params)) {
      resultUrl += params.map((param) => `/${param}`).join();
    }
    if (params && !Array.isArray(params)) {
      resultUrl += `/${params}`;
    }

    if (queryParams) {
      resultUrl += this.parseQueryParams(queryParams);
    }

    return resultUrl;
  };

  private parseQueryParams = <Query = any>(query: QueryParams<Query>) => {
    return Object.entries(query).reduce((acc, [key, value], idx) => {
      if (value === undefined) {
        return acc;
      }

      let formattedValue = '';
      if (Array.isArray(value)) {
        formattedValue = value.join(',');
      } else {
        formattedValue = `${value}`;
      }

      if (idx === 0) {
        acc += `?${key}=${formattedValue}`;
      } else {
        acc += `&${key}=${formattedValue}`;
      }

      return acc;
    }, '');
  };
}
