import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_URL, canonicalUrl, findRoute } from "@/lib/routes";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets the title, description, canonical link and link-preview tags for the current page from src/lib/routes.ts.
 * The prerender step captures these, so each page's HTML carries its own tags.
 */
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
    const route = findRoute(path);
    const personal = route?.section === "personal";
    const siteName = personal ? "Brandon Zweifel" : "Zweifel Tech LLC";
    const title = route?.title ?? "Page not found · Zweifel Tech LLC";
    const description =
      route?.description ?? "This page doesn't exist or has moved. Zweifel Tech LLC: software architecture and AI-enabled delivery.";
    const url = route ? canonicalUrl(route.path) : null;
    const image = `${SITE_URL}${route?.ogImage ?? DEFAULT_OG_IMAGE}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", route ? "index, follow" : "noindex");
    setCanonical(url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url ?? SITE_URL);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
  }, [pathname]);
}

const PageMeta = () => {
  usePageMeta();
  return null;
};

export default PageMeta;
