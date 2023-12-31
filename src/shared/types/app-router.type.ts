import type { Location, NavigateOptions } from 'react-router-dom';

export type AppLocationState = {
  from: string;
  [key: string]: any;
};

export type AppLocation = Omit<Location, 'state'> & {
  state: AppLocationState;
};

export type AppNavigateOptions = Omit<NavigateOptions, 'state'> & {
  state?: AppLocationState;
};
