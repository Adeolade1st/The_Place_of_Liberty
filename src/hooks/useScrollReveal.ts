import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
