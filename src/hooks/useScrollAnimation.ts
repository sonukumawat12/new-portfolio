import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useCallback } from 'react';

// Optimized scroll animation hook using CSS classes instead of Framer Motion
export const useScrollAnimation = (animationClass = 'animate-fade-in-up') => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-30px 0px',
  });

  const setRefs = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
    ref(node);
  }, [ref]);

  useEffect(() => {
    if (inView && elementRef.current) {
      const element = elementRef.current;
      // Add animation class when in view
      element.classList.add(animationClass);
      element.classList.add('animating');
      
      // Remove will-change after animation completes
      const handleAnimationEnd = () => {
        element.classList.remove('animating');
      };
      
      element.addEventListener('animationend', handleAnimationEnd, { once: true });
    }
  }, [inView, animationClass]);

  return { ref: setRefs, inView };
};

// Throttled scroll hook for better performance using requestAnimationFrame
export const useThrottledScroll = (callback: (scrollY: number) => void, delay = 16) => {
  const lastRun = useRef(Date.now());
  const rafId = useRef<number>();
  
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        if (Date.now() - lastRun.current >= delay) {
          callback(window.scrollY);
          lastRun.current = Date.now();
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [callback, delay]);
};

// Performance-optimized animations using GPU-accelerated transforms
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
      duration: 0.4,
    },
  },
};

export const scaleIn = {
  hidden: { 
    scale: 0.9, 
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
      scale: { duration: 0.4 },
      opacity: { duration: 0.3 },
    },
  },
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const cardHover = {
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const iconHover = {
  hover: {
    scale: 1.1,
    rotate: 3,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const textHover = {
  hover: {
    color: '#60A5FA', // blue-400
    transition: {
      duration: 0.3,
    },
  },
};

// Optimized stagger for grid items
export const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
      duration: 0.4,
    },
  },
};

// Smooth counter animation
export const counterAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};