import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppLocation } from '@hooks';

import type { AppNavigateOptions } from '@shared/types';

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const { pathname } = useAppLocation();

  return useCallback(
    (path: string, options?: AppNavigateOptions) => {
      const opt = {
        ...options,
        state: {
          ...options?.state,
          from: pathname,
        },
      };

      navigate(path, opt);
    },
    [pathname, navigate]
  );
};
