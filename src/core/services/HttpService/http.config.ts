import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const authInterceptor = (config: any) => {
  return config;
};

export const requestInterceptor = http.interceptors.request.use(authInterceptor, (error) => {
  return Promise.reject(error);
});
