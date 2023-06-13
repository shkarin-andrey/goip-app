import { useEffect } from 'react';

export const useOutsideClick = (
  elementRef: React.RefObject<any>,
  handler: () => void,
  attached = true,
) => {
  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: MouseEvent) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        handler();
      }
    };

    if (!open) return;

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [elementRef, handler, attached]);
};
