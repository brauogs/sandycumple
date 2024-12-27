import { useRef, useState, useEffect } from 'react';

export function useIntersectionObserver() {
  const elementRef = useRef<HTMLDivElement | null>(null); // Específico a HTMLDivElement
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
}