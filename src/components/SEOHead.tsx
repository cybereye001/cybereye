import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  pathname: string;
  breadcrumbLabel?: string;
}

const SITE_URL = "https://cybereye.co.in";

const SEOHead = ({ title, description, keywords, pathname, breadcrumbLabel }: SEOHeadProps) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Helper to set/create meta tag
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set/create OG meta tag
    const setOGMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);

    // Update OG tags
    setOGMeta("og:title", title);
    setOGMeta("og:description", description);
    setOGMeta("og:url", `${SITE_URL}${pathname}`);

    // Update Twitter tags
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${pathname}`);

    // Inject BreadcrumbList JSON-LD for inner pages
    let scriptEl: HTMLScriptElement | null = null;
    if (breadcrumbLabel && pathname !== "/") {
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.id = "breadcrumb-jsonld";
      scriptEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": breadcrumbLabel,
            "item": `${SITE_URL}${pathname}`,
          },
        ],
      });
      // Remove existing one first
      const existing = document.getElementById("breadcrumb-jsonld");
      if (existing) existing.remove();
      document.head.appendChild(scriptEl);
    }

    return () => {
      // Cleanup breadcrumb JSON-LD
      const el = document.getElementById("breadcrumb-jsonld");
      if (el) el.remove();
    };
  }, [title, description, keywords, pathname, breadcrumbLabel]);

  return null;
};

export default SEOHead;
