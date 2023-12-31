import { signinRepository } from '@core/repositories/auth';
import { tokenStorageService } from '@core/services/TokenStorage';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { create, resetAllStores } from '../_utils';

import type { SigninDto } from '@core/repositories/auth';

type State = {
  isLoginLoading: boolean;

  error: string | null;

  isLoggedIn: boolean;
};

type Action = {
  login: (dto: SigninDto) => Promise<void>;

  logout: () => Promise<void>;
};

export type AuthState = State & Action;

const initialState: State = {
  error: null,
  isLoginLoading: false,
  isLoggedIn: !!tokenStorageService.getToken(),
};

export const useAuthStore = create<AuthState>()(
  devtools(
    immer((set) => ({
      ...initialState,
      login: async (dto: SigninDto) => {
        try {
          const response = await signinRepository.signin(dto);
          tokenStorageService.setToken(response.data.token);
          set({ isLoginLoading: true, isLoggedIn: true });
        } catch (e) {
          set({ isLoginLoading: false, isLoggedIn: false });
        }
      },

      logout: async () => {
        tokenStorageService.removeToken();
        resetAllStores();
        set({ isLoggedIn: false });
        return Promise.resolve();
      },
    })),
    { name: 'AuthStore' }
  )
);
