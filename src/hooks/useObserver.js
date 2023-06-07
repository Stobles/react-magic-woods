import { useEffect, useRef } from 'react';

export const useObserver = (ref, callbackObserve, callbackUnobserve) => {
  const observer = useRef();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    const cb = (entries) => {
      if (!entries[0].isIntersecting) {
        callbackObserve();
      } else {
        callbackUnobserve();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, []);
};
