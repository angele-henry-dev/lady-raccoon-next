'use client';

import './sitemap.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Types
interface SiteMapNode {
  title: string;
  url: string;
  children: SiteMapNode[];
}

export default function SitemapPage() {
  // State
  const [urlsSitemap, setUrlsSitemap] = useState<SiteMapNode[]>([]);

  // Fetch Sitemap on mount
  useEffect(() => {
    fetch('/sitemap.xml')
      .then((response) => response.text())
      .then((xmlText) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'application/xml');
        setUrlsSitemap(convertSitemapToJSON(xml));
      })
      .catch((error) => console.error('Error fetching XML:', error));
  });

  // Methods
  function convertSitemapToJSON(xml: Document): SiteMapNode[] {
    const urls = Array.from(xml.getElementsByTagName('loc')).map(
      (node: Element) => node.textContent as string
    );

    const baseUrl = urls[0]; // Assuming the first URL is the root (home page)
    const rootObject: SiteMapNode = {
      title: 'Home',
      url: baseUrl,
      children: [],
    };

    urls.slice(1).forEach((url) => {
      const title = generateTitleFromUrl(url);
      rootObject.children.push({
        title: title,
        url: url,
        children: [],
      });
    });

    return [rootObject];
  }

  function generateTitleFromUrl(url: string) {
    const pathSegments = url.split('/').filter((segment) => segment);
    let title = pathSegments[pathSegments.length - 1]
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

    const dotIndex = title.lastIndexOf('.');
    if (dotIndex !== -1) {
      title = title.slice(0, dotIndex);
    }
    return title;
  }

  return (
    <section className="sitemap w-5/6 flex flex-col my-5 mx-auto">
      <h1>Sitemap</h1>
      <div>
        <ul>
          {urlsSitemap.map((item, i) => (
            <li key={i}>
              <Link href={item.url} target="_self">
                {item.title}
              </Link>
              {item.children.length > 0 && (
                <ul>
                  {item.children.map((child, j) => (
                    <li key={j}>
                      <Link href={child.url} target="_self">
                        {child.title}
                      </Link>
                      {child.children.length > 0 && (
                        <ul>
                          {child.children.map((childBis, k) => (
                            <li key={k}>
                              <Link href={childBis.url} target="_self">
                                {childBis.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
