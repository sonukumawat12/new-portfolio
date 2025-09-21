import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const isCurrentlyIntersecting = entry.isIntersecting;

      if (isCurrentlyIntersecting && !hasTriggered) {
        setIsIntersecting(true);
        if (triggerOnce) {
          setHasTriggered(true);
        }
      } else if (!triggerOnce) {
        setIsIntersecting(isCurrentlyIntersecting);
      }
    },
    [hasTriggered, triggerOnce]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [handleIntersection, threshold, rootMargin]);

  return { elementRef, isIntersecting };
};

// Lightweight scroll-based animation hook
export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          element.classList.add('visible');
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
};

export default useIntersectionObserver;
