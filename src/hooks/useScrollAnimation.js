import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(threshold = 0.15, triggerOnce = true) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
}

export function useStaggerAnimation(threshold = 0.1) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const getDelay = (index) => index * 0.15;

  return { ref, inView, getDelay };
}
