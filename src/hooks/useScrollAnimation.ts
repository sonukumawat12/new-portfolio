import { useEffect, useRef } from 'react';

export const useScrollAnimation = (callback: (scrollY: number) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      callback(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};

export const useThrottledScroll = (callback: (scrollY: number) => void, delay: number = 100) => {
  const lastCall = useRef(0);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        callback(window.scrollY);
      } else {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
          lastCall.current = Date.now();
          callback(window.scrollY);
        }, delay - (now - lastCall.current));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
};