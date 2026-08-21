# How to add a new blog post — no coding needed

1. On github.com, open your repo → go into the `_posts` folder.
2. Click "Add file" → "Create new file".
3. Name the file exactly like this (all lowercase, hyphens, no spaces):

   2026-08-21-my-new-post-title.md

   The date at the start MUST be today's date (or the date you want it
   published) in YYYY-MM-DD format. Everything after the date becomes
   the page URL, e.g. this file becomes:
   universityjano.com/blog/2026/08/21/my-new-post-title/

4. Paste this template into the file content box and fill in your own text:

---
layout: post
title: "Your Post Title Here"
metaTitle: "A slightly different, SEO-friendly title for Google (optional)"
excerpt: "A 1-2 sentence summary. This also becomes the Google search snippet, so keep it under 160 characters."
category: "Career Tips"
author: "Team UniversityJano"
readTime: "5 min read"
coverImage: "https://images.unsplash.com/photo-XXXXXXX?auto=format&fit=crop&w=1200&q=80"
---

Write your blog post here in plain text or simple HTML.

You can use plain paragraphs like this one, or basic HTML tags:

<h2>A subheading</h2>
<p>A paragraph.</p>
<ul>
  <li>A bullet point</li>
  <li>Another bullet point</li>
</ul>

5. Scroll down, click "Commit changes".
6. Wait 1-2 minutes — GitHub automatically builds and publishes the page.
   No script to run, nothing else to upload. It will also show up
   automatically on your /blog/ listing page and in your sitemap.xml.

That's it — you never need to touch blog-data.js, generate_blog_pages.js,
or re-upload the whole website again for a new blog post.
