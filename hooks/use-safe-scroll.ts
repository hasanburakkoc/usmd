import { useEffect } from "react";

export function useSafeScroll(): void {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Preserves graceful behavior if browser doesn't support smooth scrolling.
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
}
