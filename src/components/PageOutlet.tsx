import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageMeta from "./PageMeta";

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
  </div>
);

// The current page inside a layout: sets its meta tags, starts it at the top, and shows a spinner while it loads.
const PageOutlet = () => {
  const { pathname } = useLocation();

  // Start each page at the top; the router keeps the old scroll position otherwise
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <PageMeta />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default PageOutlet;
