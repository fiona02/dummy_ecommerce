import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import type { AppLocation } from '@shared/types';

export const useAppLocation = (): AppLocation => {
  const location = useLocation();

  return useMemo(
    () => ({
      ...location,
      state: {
        ...location?.state,
        from: location?.state?.from || '/',
      },
    }),
    [location]
  );
};
