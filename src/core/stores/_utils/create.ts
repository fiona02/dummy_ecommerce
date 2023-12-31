import { create as _create } from 'zustand';

import type { StateCreator } from 'zustand';

const resetters: (() => void)[] = [];

export const create = (<T extends unknown>(f: StateCreator<T> | undefined) => {
  if (f === undefined) return create;
  const store = _create(f);
  const initialState = store.getState();
  // @ts-ignore
  if ('reset' in initialState && typeof initialState.reset === 'function') {
    resetters.push(() => {
      // store.setState(initialState, true);
      // @ts-ignore
      initialState.reset();
    });
  }

  return store;
}) as typeof _create;

export const resetAllStores = () => {
  for (const resetter of resetters) {
    resetter();
  }
};
