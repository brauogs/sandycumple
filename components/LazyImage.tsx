'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function LazyImage({ src, alt, width, height, className = '' }: LazyImageProps) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={elementRef}
      className={`relative group overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform hover:z-10 shadow-lg ${className}`}
    >
      <div className="aspect-square md:aspect-auto">
        {isVisible && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            unoptimized
          />
        )}
      </div>
    </div>
  );
}

