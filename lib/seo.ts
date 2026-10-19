import type { Metadata } from "next";

export const SITE_URL = "https://www.skilllinknexus.com";
export const SITE_NAME = "SkillLink Nexus";

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "SkillLink Nexus: tech projects by vetted contractors. Nairobi, Kenya.",
};

/**
 * Full metadata for one page: title, description, canonical URL, Open Graph and Twitter tags.
 * Next.js merges metadata shallowly, so every page sets all of these together.
 * `title` is the page part only; " | SkillLink Nexus" is added unless `absoluteTitle` is set.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_KE",
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Organization structured data (JSON-LD) for search engines. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SkillLink Nexus Ltd",
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "hello@skilllinknexus.com",
  telephone: "+254 20 200 9009",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: ["https://www.linkedin.com/company/skilllinknexus/"],
};
