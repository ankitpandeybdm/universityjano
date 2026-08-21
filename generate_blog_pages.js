// generate_blog_pages.js
// Reads js/blog-data.js and outputs a real, standalone, crawlable HTML page
// for every blog post into /blog/<slug>.html, plus a /blog/index.html listing
// page. Run this any time you add a new post to blog-data.js:
//
//   node generate_blog_pages.js
//
const fs = require('fs');
const path = require('path');

global.window = {};
require('./js/blog-data.js');
const posts = window.BLOG_DATA;

const SITE_URL = 'https://universityjano.com';
const OUT_DIR = path.join(__dirname, 'blog');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

const escapeHtml = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function pageShell({ title, metaDescription, canonical, ogImage, bodyContent }) {
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(metaDescription)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonical}">

<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(metaDescription)}">
<meta property="og:type" content="article">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:site_name" content="UniversityJano.com">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(metaDescription)}">
<meta name="twitter:image" content="${ogImage}">

<link rel="icon" href="../images/logo.png">
<link rel="stylesheet" href="../css/design-system.css">
<link rel="stylesheet" href="../css/components.css">
<style>
  .blog-static-header{background:#0b1b3d;padding:1rem 0;}
  .blog-static-header .container{max-width:1100px;margin:0 auto;padding:0 1.25rem;display:flex;align-items:center;justify-content:space-between;}
  .blog-static-header img{height:40px;}
  .blog-static-header a.home-link{color:#fff;text-decoration:none;font-weight:600;font-size:0.95rem;}
  .blog-article{max-width:760px;margin:0 auto;padding:2.5rem 1.25rem 4rem;}
  .blog-article .meta{color:#64748b;font-size:0.9rem;margin-bottom:1.5rem;}
  .blog-article h1{font-size:2rem;line-height:1.25;margin-bottom:0.75rem;color:#0b1b3d;}
  .blog-article img.cover{width:100%;border-radius:12px;margin-bottom:1.5rem;}
  .blog-article h2{margin-top:2rem;color:#0b1b3d;}
  .blog-article p, .blog-article li{line-height:1.75;color:#334155;}
  .blog-article a.back-link{display:inline-block;margin-bottom:1.5rem;color:#0b1b3d;font-weight:600;text-decoration:none;}
  .blog-static-footer{background:#0b1b3d;color:#94a3b8;text-align:center;padding:2rem 1rem;font-size:0.85rem;margin-top:3rem;}
  .blog-static-footer a{color:#cbd5e1;}
</style>
</head>
<body>
<header class="blog-static-header">
  <div class="container">
    <a href="../index.html"><img src="../images/logo.png" alt="UniversityJano.com"></a>
    <a class="home-link" href="../index.html">&larr; Back to UniversityJano.com</a>
  </div>
</header>
${bodyContent}
<footer class="blog-static-footer">
  <div>&copy; ${new Date().getFullYear()} UniversityJano.com &mdash; All Rights Reserved.</div>
  <div style="margin-top:0.5rem;"><a href="../index.html">Home</a> &middot; <a href="index.html">All Blog Posts</a></div>
</footer>
</body>
</html>
`;
}

function articleJsonLd(post, url) {
  return `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.coverImage,
  "author": { "@type": "Organization", "name": post.author || "UniversityJano.com" },
  "datePublished": post.date,
  "publisher": {
    "@type": "Organization",
    "name": "UniversityJano.com",
    "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/logo.png` }
  },
  "mainEntityOfPage": url
}, null, 2)}
</script>`;
}

// ---- Individual post pages ----
posts.forEach(post => {
  const url = `${SITE_URL}/blog/${post.slug}.html`;
  const body = `
<article class="blog-article">
  <a class="back-link" href="index.html">&larr; All Blog Posts</a>
  <div class="meta">${escapeHtml(post.category)} &middot; ${escapeHtml(post.date)} &middot; ${escapeHtml(post.readTime)} &middot; By ${escapeHtml(post.author)}</div>
  <h1>${escapeHtml(post.title)}</h1>
  <img class="cover" src="${post.coverImage}" alt="${escapeHtml(post.title)}">
  ${post.content}
  ${articleJsonLd(post, url)}
</article>`;

  const html = pageShell({
    title: `${post.metaTitle || post.title} | UniversityJano.com`,
    metaDescription: post.excerpt,
    canonical: url,
    ogImage: post.coverImage,
    bodyContent: body
  });

  fs.writeFileSync(path.join(OUT_DIR, `${post.slug}.html`), html);
  console.log('Wrote blog/' + post.slug + '.html');
});

// ---- Blog index page ----
const listItemsHtml = posts.map(post => `
  <a href="${post.slug}.html" style="text-decoration:none;color:inherit;display:block;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid #e2e8f0;">
    <img src="${post.coverImage}" alt="${escapeHtml(post.title)}" style="width:100%;max-height:280px;object-fit:cover;border-radius:12px;margin-bottom:1rem;">
    <div style="color:#64748b;font-size:0.85rem;margin-bottom:0.4rem;">${escapeHtml(post.category)} &middot; ${escapeHtml(post.date)} &middot; ${escapeHtml(post.readTime)}</div>
    <h2 style="margin:0 0 0.5rem;color:#0b1b3d;">${escapeHtml(post.title)}</h2>
    <p style="color:#334155;margin:0;">${escapeHtml(post.excerpt)}</p>
  </a>`).join('\n');

const indexBody = `
<section class="blog-article" style="max-width:820px;">
  <h1>UniversityJano Blog</h1>
  <p style="color:#64748b;margin-bottom:2rem;">Guides on online degrees, UGC-DEB approval, fees, EMI plans and careers.</p>
  ${listItemsHtml}
</section>`;

const indexHtml = pageShell({
  title: 'Blog | UniversityJano.com',
  metaDescription: 'Guides and articles on online degrees, UGC-DEB approval, fees, 0% EMI plans, and career outcomes in India.',
  canonical: `${SITE_URL}/blog/index.html`,
  ogImage: `${SITE_URL}/images/logo.png`,
  bodyContent: indexBody
});
fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexHtml);
console.log('Wrote blog/index.html');

// ---- sitemap.xml ----
const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${SITE_URL}/blog/index.html`, priority: '0.9', changefreq: 'daily' },
  ...posts.map(p => ({ loc: `${SITE_URL}/blog/${p.slug}.html`, priority: '0.7', changefreq: 'monthly' }))
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
  <!-- Add a new <url> block here each time you publish a blog post, or just re-run generate_blog_pages.js -->
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log('Updated sitemap.xml with', urls.length, 'real URLs');
