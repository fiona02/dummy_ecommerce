import { Suspense, useEffect } from 'react';

import { useThemeStore } from '@core/stores';
import { localStorageService } from '@shared/services';
import { Loader } from '@shared/UI';

import { Root } from './pages';

import type { ThemeStore } from '@core/stores';

const themeSelector = (state: ThemeStore) => [state.setCurrentTheme];

export function App() {
  const [setCurrentTheme] = useThemeStore(themeSelector);

  useEffect(() => {
    const themeFromLocalStorage = localStorageService.getItem<'dark' | 'light'>('current_theme');

    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (themeFromLocalStorage) {
      setCurrentTheme(themeFromLocalStorage);
    } else {
      setCurrentTheme(theme);
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Root />
    </Suspense>
  );
}
