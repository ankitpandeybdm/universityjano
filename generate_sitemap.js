const fs = require('fs');
const path = require('path');

global.window = {};
require('./data/universities.js');
const universities = window.UNIVERSITIES_DATA || [];

const today = new Date().toISOString().split('T')[0];
const SITE_URL = 'https://universityjano.com';

const staticPages = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${SITE_URL}/universities/index.html`, priority: '0.95', changefreq: 'daily' },
  { loc: `${SITE_URL}/compare.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/roi-calculator.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/emi-calculator.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/ugc-verifier.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/blog/index.html`, priority: '0.85', changefreq: 'daily' }
];

const blogDir = path.join(__dirname, 'blog');
let blogPages = [];
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html') && f !== 'index.html');
  blogPages = files.map(f => ({
    loc: `${SITE_URL}/blog/${f}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));
}

const uniPages = universities.map(u => ({
  loc: `${SITE_URL}/universities/${u.slug}.html`,
  priority: '0.85',
  changefreq: 'weekly'
}));

const allUrls = [...staticPages, ...uniPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log(`✅ Generated sitemap.xml with ${allUrls.length} total URLs!`);
