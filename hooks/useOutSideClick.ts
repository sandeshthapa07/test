// useOutsideClick.ts

import { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
type EventHandler = (event: MouseEvent | TouchEvent) => void;

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  handler: EventHandler
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;
