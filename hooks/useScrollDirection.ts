import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollYDirection = window.scrollY;
      const direction: any = scrollYDirection > lastScrollY ? "down" : "top";
      if (
        direction !== scrollDirection &&
        (scrollYDirection - lastScrollY > 10 ||
          scrollYDirection - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollYDirection > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
