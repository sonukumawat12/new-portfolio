import { useMemo } from 'react';

const ParticleBackground = () => {
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
      {particles.map((particle) => (
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
};

export default ParticleBackground;