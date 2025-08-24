import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Performance-optimized animations using GPU-accelerated transforms
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      opacity: { duration: 0.6 },
      scale: { duration: 0.7 },
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.8,
    },
  },
};

export const scaleIn = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    rotateX: -15,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      scale: { duration: 0.7 },
      opacity: { duration: 0.6 },
    },
  },
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const cardHover = {
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.4,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
};

export const iconHover = {
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: {
      duration: 0.3,
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
      staggerChildren: 0.12,
      delayChildren: 0.1,
      duration: 0.8,
    },
  },
};

// Smooth counter animation
export const counterAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};