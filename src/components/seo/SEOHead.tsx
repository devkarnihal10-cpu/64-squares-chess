import React, { useEffect } from 'react';
import { PageSEO } from '../../data/seoData';

interface SEOHeadProps {
  seo: PageSEO;
  articlePublishedTime?: string;
  articleAuthor?: string;
  showInspector?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  seo,
  articlePublishedTime,
  articleAuthor = '64 Squares Editorial',
  showInspector = false,
}) => {
  useEffect(() => {
    // 1. Update Title Tag (50-60 characters)
    document.title = seo.title;

    // Helper to create or update meta tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for canonical link
    const setCanonicalLink = (url: string) => {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    // 2. Meta Description (150-160 characters)
    setMetaTag('name', 'description', seo.description);

    // 3. Keywords
    const allKeywords = [seo.primaryKeyword, ...seo.secondaryKeywords].join(', ');
    setMetaTag('name', 'keywords', allKeywords);

    // 4. OpenGraph tags
    const fullUrl = `${window.location.origin}/${seo.canonicalSlug}`;
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:type', seo.ogType || 'website');
    setMetaTag('property', 'og:site_name', '64 Squares');
    setMetaTag('property', 'og:image', `${window.location.origin}/assets/images/chess_hero_board.jpg`);

    // 5. Twitter tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image', `${window.location.origin}/assets/images/chess_hero_board.jpg`);

    // 6. Canonical Link
    setCanonicalLink(fullUrl);

    // 7. Schema.org JSON-LD
    let scriptTag = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const jsonLd = seo.ogType === 'article'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: seo.title,
          description: seo.description,
          url: fullUrl,
          author: {
            '@type': 'Organization',
            name: articleAuthor,
          },
          publisher: {
            '@type': 'Organization',
            name: '64 Squares',
            logo: {
              '@type': 'ImageObject',
              url: `${window.location.origin}/assets/images/chess_hero_board.jpg`,
            },
          },
          datePublished: articlePublishedTime || new Date().toISOString(),
          keywords: allKeywords,
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: '64 Squares',
          url: window.location.origin,
          description: seo.description,
          keywords: allKeywords,
        };

    scriptTag.text = JSON.stringify(jsonLd);

    return () => {
      // Keep state clean on unmount if needed
    };
  }, [seo, articlePublishedTime, articleAuthor]);

  return null;
};
