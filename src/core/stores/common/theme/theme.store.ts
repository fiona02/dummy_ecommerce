import { create } from '@core/stores/_utils';
import { localStorageService } from '@shared/services';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Store = {
  currentTheme: 'dark' | 'light';
};

type Action = {
  setCurrentTheme: (theme: 'dark' | 'light') => void;
};

export type ThemeStore = Store & Action;

const initialState: Store = {
  currentTheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
};

export const useThemeStore = create<ThemeStore>()(
  devtools(
    immer((set) => ({
      ...initialState,
      setCurrentTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorageService.setItem('current_theme', theme);
        set(() => ({ currentTheme: theme }));
      },
    })),
    { name: 'ThemeStore' }
  )
);
