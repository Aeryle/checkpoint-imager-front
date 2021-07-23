import { MutableRefObject, useEffect, useState } from "react";

export const useInView = (
  ref: MutableRefObject<HTMLElement | null>,
  onChange?: (_inView: boolean) => void
): boolean => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) {
        return;
      }

      const elementHeight = ref.current.offsetHeight;
      const offsetTop = ref.current.getBoundingClientRect().top;
      const isVisible =
        offsetTop + elementHeight > 0 && offsetTop < window.innerHeight;

      if (isVisible && !inView) {
        setInView(isVisible);

        onChange && onChange(isVisible);
      } else if (!isVisible && inView) {
        setInView(isVisible);

        onChange && onChange(isVisible);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, onChange, inView]);

  return inView;
};
