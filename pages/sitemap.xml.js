import { DOMAIN, chaptersData, URL_PREFIX } from "../config";
import { format } from 'date-fns';
export const runtime = 'experimental-edge';

const generateXmlSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${DOMAIN}</loc>
      <priority>1.0</priority>
      <changefreq>weekly</changefreq>
    </url>`;

  chaptersData.forEach((chapter, index) => {
    const chapterNumber = chapter.chapterNumber;
    const url = `${DOMAIN}/${URL_PREFIX}-${chapterNumber}`;
    const today = new Date();
    const chapterDate = format(new Date(today.getTime() + (index * 24 * 60 * 60 * 1000)), "yyyy-MM-dd");
    xml += `
      <url>
        <loc>${url}</loc>
        <priority>0.8</priority>
        <changefreq>monthly</changefreq>
      </url>`;
  });
  xml += '</urlset>';
  return xml;
};


export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateXmlSitemap());
  res.end();

  return { props: {} };
}


export default generateXmlSitemap;
