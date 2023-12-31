const home = {
  root: '/',
  key: 'root',
} as const;

const cart = {
  root: '/cart',
  key: 'cart',
} as const;

const auth = {
  root: '/auth',
  key: 'auth',

  signin: {
    root: '/auth/signin',
    key: 'signin',
  },
} as const;

export const routes = {
  home,
  cart,
  auth,
} as const;
