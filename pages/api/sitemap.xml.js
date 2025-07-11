export default function handler(req, res) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://doityourselfhq.com/</loc>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/about</loc>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/contact</loc>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/terms</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/privacy</loc>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/tools-gear</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/home-repair</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/renovation-remodeling</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/yard-garden-outdoor</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/beginner-diy-guides</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/smart-home-ai</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/automotive-diy</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/diy-business-side-hustles</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/diy-cleaning-maintenance</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://doityourselfhq.com/home-organization</loc>
      <priority>0.8</priority>
    </url>
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).end(sitemap);
}
