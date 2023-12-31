import { create } from '@core/stores/_utils';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Size = {
  sidebar: {
    width: number;
    collapsedWidth: number;
  };
  header: {
    height: number;
    gap: number;
  };
};

interface State {
  isCollapsed: boolean;

  size: 'sm' | 'lg';

  sizeMap: Size;
}

interface Actions {
  toggleCollapsed: () => void;

  setIsCollapsed: (isCollapsed: boolean) => void;

  onChangeSize: (size: 'sm' | 'lg') => void;
}

const collapsedSidebarWidth = 60;

const initialState: State = {
  isCollapsed: window?.innerWidth <= 991,
  size: window?.innerWidth <= 991 ? 'sm' : 'lg',
  sizeMap: {
    sidebar: {
      width: 260,
      collapsedWidth: collapsedSidebarWidth,
    },
    header: {
      height: 44,
      gap: 14,
    },
  },
};

export type MainLayoutStore = State & Actions;

export const useMainLayoutStore = create<MainLayoutStore>()(
  devtools(
    immer((set) => ({
      ...initialState,
      onChangeSize: (size) => {
        set(() => ({ size }));
      },
      toggleCollapsed: () => {
        set((state) => ({
          isCollapsed: !state.isCollapsed,
        }));
      },
      setIsCollapsed: (isCollapsed) => {
        set(() => ({ isCollapsed }));
      },
    })),
    { name: 'MainLayoutStore' }
  )
);
