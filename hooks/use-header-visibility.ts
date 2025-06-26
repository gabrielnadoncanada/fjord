import { useEffect, useState, useRef } from "react";

export function useHeaderVisibility() {
  const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = Math.min(window.scrollY, 12);
      if (headerRef) {
        headerRef.style.transform = `translateY(${-y}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  return { setHeaderRef };
}
