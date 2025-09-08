import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP and fallback sources
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'original' = 'original') => {
    // For external URLs (like Pexels), use their optimization parameters
    if (originalSrc.startsWith('http')) {
      const url = new URL(originalSrc);
      if (format === 'webp') {
        url.searchParams.set('fm', 'webp');
      }
      url.searchParams.set('auto', 'compress');
      url.searchParams.set('cs', 'tinysrgb');
      if (width) url.searchParams.set('w', width.toString());
      if (height) url.searchParams.set('h', height.toString());
      return url.toString();
    }

    // For local images, return as-is (Vite will handle optimization)
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive sizes for different screen sizes
  const generateSrcSet = (src: string) => {
    if (src.startsWith('http')) {
      const baseUrl = new URL(src);
      baseUrl.searchParams.set('auto', 'compress');
      baseUrl.searchParams.set('cs', 'tinysrgb');
      
      const sizes = [400, 800, 1200, 1600];
      return sizes.map(size => {
        const url = new URL(baseUrl);
        url.searchParams.set('w', size.toString());
        return `${url.toString()} ${size}w`;
      }).join(', ');
    }
    return src;
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div 
      ref={placeholderRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder/Loading state */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center"
        >
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="" 
              className="w-full h-full object-cover opacity-50 blur-sm"
            />
          ) : (
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      )}

      {/* Optimized Image */}
      {isInView && (
        <picture>
          {/* WebP source for modern browsers */}
          <source
            srcSet={generateSrcSet(getOptimizedSrc(src, 'webp'))}
            sizes={sizes}
            type="image/webp"
          />
          
          {/* Fallback for older browsers */}
          <img
            ref={imgRef}
            src={getOptimizedSrc(src)}
            srcSet={generateSrcSet(src)}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`
              w-full h-full object-cover transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
              ${className}
            `}
            style={{
              willChange: isLoaded ? 'auto' : 'opacity',
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
