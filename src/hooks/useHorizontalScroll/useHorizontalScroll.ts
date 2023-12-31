import { useEffect, useRef } from 'react';

import type { WheelEvent } from 'react';

export function useHorizontalScroll<T extends HTMLElement>() {
  const elRef = useRef<T>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent<T>) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el?.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'auto',
        });
      };
      el.addEventListener('wheel', onWheel as any);
      return () => el.removeEventListener('wheel', onWheel as any);
    }
  }, []);
  return elRef;
}
