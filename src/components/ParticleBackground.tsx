import { useMemo, memo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ParticleBackground = memo(() => {
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    })), []
  );

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
  });

  return (
    <div 
      ref={elementRef}
      className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
    >
      {isIntersecting && particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-400/40 to-purple-600/40 rounded-full animate-pulse gpu-accelerated"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;