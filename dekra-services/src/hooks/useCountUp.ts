import { useEffect, useState } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  isActive?: boolean;
}

export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  isActive = true,
}: UseCountUpProps): number => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    const range = end - start;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Utiliser une fonction d'easing pour une animation plus fluide
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.floor(start + range * easedProgress);
      setCount(currentCount);

      if (progress >= 1) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration, start, isActive]);

  return count;
};
