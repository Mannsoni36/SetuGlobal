import config from "../../../.astro/config.generated.json";

/**
 * Builds a two-level BreadcrumbList (Home > page) from the same title
 * rendered by the visible Breadcrumbs widget, so schema and UI never drift.
 */
export function buildBreadcrumbSchema(pageTitle: string, pathname: string) {
  const baseUrl = config.site.baseUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: pageTitle,
        item: `${baseUrl}${pathname}`,
      },
    ],
  };
}
