import { memo, ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  rootMargin?: string;
}

const ScrollAnimationWrapper = memo(({
  children,
  className = '',
  animationClass = 'animate-fade-in-up',
  threshold = 0.1,
  rootMargin = '50px',
}: ScrollAnimationWrapperProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef}
      className={`
        transition-all duration-800 ease-out
        ${isIntersecting ? `opacity-100 ${animationClass}` : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{
        willChange: isIntersecting ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
});

ScrollAnimationWrapper.displayName = 'ScrollAnimationWrapper';

export default ScrollAnimationWrapper;
