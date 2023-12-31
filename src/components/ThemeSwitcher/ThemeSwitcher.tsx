import { useThemeStore } from '@core/stores';
import { MoonIcon } from '@shared/UI';
import cl from 'classnames';

import type { ThemeStore } from '@core/stores';

import styles from './ThemeSwitcher.module.scss';

const themeSelector = (state: ThemeStore) => [state.currentTheme, state.setCurrentTheme] as const;

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useThemeStore(themeSelector);

  const classes = cl(styles.themeSwitcher, {
    [styles.themeSwitcherActive]: currentTheme === 'dark',
  });

  const handleTheme = () => {
    const theme = currentTheme === 'dark' ? 'light' : 'dark';

    setCurrentTheme(theme);
  };

  return (
    <div className={classes}>
      <span className={styles.themeSwitcherButton} onClick={handleTheme}>
        <MoonIcon />
      </span>
    </div>
  );
};
