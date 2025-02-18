import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      callback();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};
