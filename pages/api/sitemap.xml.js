import { format } from 'date-fns';
const SITE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000'
  : 'https://koinos.io';

// Define core pages with their last significant update dates
const pages = [
  {
    url: '/',
    lastmod: '2024-10-31'
  },
  {
    url: '/whitepaper',
    lastmod: '2024-10-31'
  },
  {
    url: '/faqs',
    lastmod: '2024-10-31'
  },
  {
    url: '/ecosystem',
    lastmod: '2024-10-31'
  },
  {
    url: '/team',
    lastmod: '2024-10-31'
  }
];

/**
 * Escapes special characters in XML
 * @param {string} unsafe - The string to be escaped
 * @returns {string} - The escaped string
 */
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

/**
 * Generates the XML sitemap
 * @returns {string} - The XML sitemap content
 */
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ url, lastmod }) => {
          const loc = `${SITE_URL}${url}`;
          return `
            <url>
              <loc>${escapeXml(loc)}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `;
        })
        .join('')}
    </urlset>`;
}

/**
 * API route handler for the sitemap
 * @param {object} req - Next.js API request object
 * @param {object} res - Next.js API response object
 */
export default function handler(req, res) {
  // Set cache control for CDNs and browsers
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate' // Cache for 24 hours
  );
  
  res.setHeader('Content-Type', 'text/xml');
  
  const sitemap = generateSiteMap();
  res.write(sitemap);
  res.end();
} 