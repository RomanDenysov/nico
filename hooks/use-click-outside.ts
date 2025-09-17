import { useEffect } from "react";

type UseClickOutsideProps = {
  ref: React.RefObject<HTMLElement | null>;
  callback: () => void;
};

export function useClickOutside({ ref, callback }: UseClickOutsideProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
}
