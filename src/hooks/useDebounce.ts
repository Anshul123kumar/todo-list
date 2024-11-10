import { useCallback, useEffect, useRef } from "react";

export const useDebounce = (callback: any, delay: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounce = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);
  return debounce;
};
