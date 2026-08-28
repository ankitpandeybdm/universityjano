// ============================================================================
// UniversityJano.com — publish.js
// ============================================================================
// ONE command does everything. Run this every time you add/edit a blog post:
//
//     node publish.js
//
// It reads every file in blog-posts/*.txt, and automatically:
//   1. Regenerates js/blog-data.js       (used by the website's blog page)
//   2. Regenerates blog/<slug>.html      (one real, Google-crawlable page per post)
//   3. Regenerates blog/index.html       (the blog listing page)
//   4. Regenerates sitemap.xml           (homepage + tools + universities + ALL blog posts)
//
// You never need to touch js/blog-data.js, blog/*.html, or sitemap.xml by
// hand again — this script rebuilds them fresh from blog-posts/ every time,
// so nothing can get out of sync or go missing.
//
// TO ADD A NEW BLOG POST:
//   1. Copy blog-posts/_TEMPLATE.txt to blog-posts/your-post-name.txt
//   2. Fill in the fields at the top and write your content below the ---
//   3. Run: node publish.js
//   4. git add -A && git commit -m "new blog post" && git push
//      (or upload the changed files to your host if you don't use git)
//
// That's it. Slug, id, read time, and meta title are all filled in
// automatically if you leave them blank.
// ============================================================================

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://universityjano.com';
const POSTS_DIR = path.join(__dirname, 'blog-posts');
const BLOG_OUT_DIR = path.join(__dirname, 'blog');
const DEFAULT_COVER = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';

if (!fs.existsSync(BLOG_OUT_DIR)) fs.mkdirSync(BLOG_OUT_DIR);
if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR);

// ----------------------------------------------------------------------------
// 1. Read & parse every blog-posts/*.txt file
// ----------------------------------------------------------------------------
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Very small markdown-lite -> HTML converter. Supports:
//   ## Heading        -> <h2>
//   ### Heading       -> <h3>
//   - list item        -> <ul><li>
//   1. list item        -> <ol><li>
//   **bold**            -> <strong>
//   [text](url)          -> <a href="url">text</a>
//   blank-line-separated paragraphs -> <p>
//   a line already starting with '<' is passed through untouched (raw HTML)
function inline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdownLiteToHtml(md) {
  const blocks = md.trim().split(/\n\s*\n/);
  const html = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return trimmed; // raw HTML passthrough
    if (trimmed.startsWith('### ')) return `<h3>${inline(trimmed.slice(4))}</h3>`;
    if (trimmed.startsWith('## ')) return `<h2>${inline(trimmed.slice(3))}</h2>`;
    const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.every(l => l.startsWith('- '))) {
      return `<ul>${lines.map(l => `<li>${inline(l.slice(2))}</li>`).join('')}</ul>`;
    }
    if (lines.every(l => /^\d+\.\s/.test(l))) {
      return `<ol>${lines.map(l => `<li>${inline(l.replace(/^\d+\.\s/, ''))}</li>`).join('')}</ol>`;
    }
    return `<p>${inline(lines.join(' '))}</p>`;
  });
  return html.filter(Boolean).join('\n  ');
}

function parsePostFile(filePath, filename) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const sepIndex = raw.indexOf('\n---\n');
  if (sepIndex === -1) {
    console.warn(`⚠️  Skipping ${filename} — missing the "---" separator line between fields and content.`);
    return null;
  }
  const frontMatterRaw = raw.slice(0, sepIndex);
  const bodyRaw = raw.slice(sepIndex + 5);

  const fields = {};
  frontMatterRaw.split('\n').forEach(line => {
    const m = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (m) fields[m[1].trim().toLowerCase()] = m[2].trim();
  });

  if (!fields.title) {
    console.warn(`⚠️  Skipping ${filename} — "title" field is required.`);
    return null;
  }

  const slug = fields.slug ? slugify(fields.slug) : slugify(fields.title);
  const contentHtml = markdownLiteToHtml(bodyRaw);
  const plainWordCount = bodyRaw.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const readTime = fields.readtime || `${Math.max(1, Math.ceil(plainWordCount / 200))} min read`;

  return {
    id: slug,
    slug,
    title: fields.title,
    metaTitle: fields.metatitle || fields.title,
    excerpt: fields.excerpt || '',
    category: fields.category || 'General',
    tags: fields.tags ? fields.tags.split(',').map(t => t.trim()).filter(Boolean) : [fields.category || 'General'],
    author: fields.author || 'Team UniversityJano',
    date: fields.date || new Date().toISOString().slice(0, 10),
    readTime,
    coverImage: fields.coverimage || DEFAULT_COVER,
    content: contentHtml,
    _sourceFile: filename
  };
}

const postFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.txt') && !f.startsWith('_'));
const posts = postFiles
  .map(f => parsePostFile(path.join(POSTS_DIR, f), f))
  .filter(Boolean)
  .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

if (posts.length === 0) {
  console.error('❌ No valid posts found in blog-posts/. Nothing to publish.');
  process.exit(1);
}

// ----------------------------------------------------------------------------
// 2. Write js/blog-data.js (JSON-based — cannot break the React app with a
//    typo, unlike the old hand-edited JS-string-concatenation version)
// ----------------------------------------------------------------------------
const blogDataForOutput = posts.map(({ _sourceFile, ...rest }) => rest);
const blogDataJs =
  `// AUTO-GENERATED by publish.js — do not edit this file by hand.\n` +
  `// To change blog content, edit files in blog-posts/ and run: node publish.js\n\n` +
  `window.BLOG_DATA = ${JSON.stringify(blogDataForOutput, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'js', 'blog-data.js'), blogDataJs);
console.log('✅ Wrote js/blog-data.js (' + posts.length + ' posts)');

// ----------------------------------------------------------------------------
// 3. Write blog/<slug>.html for every post + blog/index.html
// ----------------------------------------------------------------------------
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
    "author": { "@type": "Organization", "name": post.author },
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

// Remove stale post HTML files (posts that were deleted from blog-posts/)
const currentSlugs = new Set(posts.map(p => p.slug));
if (fs.existsSync(BLOG_OUT_DIR)) {
  fs.readdirSync(BLOG_OUT_DIR)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .forEach(f => {
      const slug = f.replace(/\.html$/, '');
      if (!currentSlugs.has(slug)) {
        fs.unlinkSync(path.join(BLOG_OUT_DIR, f));
        console.log('🗑️  Removed old page blog/' + f + ' (no longer in blog-posts/)');
      }
    });
}

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
    title: `${post.metaTitle} | UniversityJano.com`,
    metaDescription: post.excerpt,
    canonical: url,
    ogImage: post.coverImage,
    bodyContent: body
  });

  fs.writeFileSync(path.join(BLOG_OUT_DIR, `${post.slug}.html`), html);
  console.log('✅ Wrote blog/' + post.slug + '.html');
});

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
fs.writeFileSync(path.join(BLOG_OUT_DIR, 'index.html'), indexHtml);
console.log('✅ Wrote blog/index.html (' + posts.length + ' posts listed)');

// ----------------------------------------------------------------------------
// 4. Write a complete sitemap.xml — static pages + universities + every post
// ----------------------------------------------------------------------------
global.window = {};
try { require('./data/universities.js'); } catch (e) { /* ignore if missing */ }
const universities = (global.window && global.window.UNIVERSITIES_DATA) || [];

const today = new Date().toISOString().split('T')[0];
const staticPages = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'daily' },
  { loc: `${SITE_URL}/universities/index.html`, priority: '0.95', changefreq: 'daily' },
  { loc: `${SITE_URL}/compare.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/roi-calculator.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/emi-calculator.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/ugc-verifier.html`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${SITE_URL}/blog/index.html`, priority: '0.85', changefreq: 'daily' }
];
const uniPages = universities.map(u => ({
  loc: `${SITE_URL}/universities/${u.slug}.html`,
  priority: '0.85',
  changefreq: 'weekly'
}));
const blogPages = posts.map(p => ({
  loc: `${SITE_URL}/blog/${p.slug}.html`,
  priority: '0.8',
  changefreq: 'monthly'
}));

const allUrls = [...staticPages, ...uniPages, ...blogPages];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml);
console.log(`✅ Wrote sitemap.xml (${allUrls.length} total URLs — ${staticPages.length} static, ${uniPages.length} universities, ${blogPages.length} blog posts)`);

console.log('\n🎉 Done! Now commit & push (or upload): js/blog-data.js, blog/, sitemap.xml');
