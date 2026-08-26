import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the current scroll position across navigations, which drops
 * you into the middle of the next page when the link you followed sits far down
 * a long one (the project carousel at the bottom of /portfolio, for example).
 * Reset to the top whenever the route changes.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
