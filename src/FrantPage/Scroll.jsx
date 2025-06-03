
// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const locationdata = useLocation();

  useEffect(() => {
    if (locationdata.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [locationdata.pathname]);

  return null;
};

export default ScrollToTop;
