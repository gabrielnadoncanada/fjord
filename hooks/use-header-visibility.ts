import { useEffect, useState, useRef } from "react";

export function useHeaderVisibility(pathname: string) {
  const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

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
  }, [headerRef, isHomePage]);

  return { setHeaderRef };
}
