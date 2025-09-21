import { useEffect, useRef } from 'react';

// Simple scroll hook for navigation
export const useThrottledScroll = (callback: (scrollY: number) => void) => {
  const rafId = useRef<number>();
  
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        callback(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [callback]);
};