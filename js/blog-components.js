// ============================================================================
// UniversityJano.com — BLOG COMPONENTS
// Plain React (React.createElement) — no JSX/build step required, matches
// the rest of this site's "zero Babel dependency" production bundle.
// To add new posts, edit js/blog-data.js only — this file rarely needs to change.
// ============================================================================
(function () {
  var useState = React.useState;
  var useEffect = React.useEffect;
  var useMemo = React.useMemo;
  var h = React.createElement;

  function formatBlogDate(dateStr) {
    try {
      var d = new Date(dateStr + 'T00:00:00');
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    } catch (e) {
      return dateStr;
    }
  }

  function getBlogCategories(posts) {
    var set = {};
    posts.forEach(function (p) { set[p.category] = true; });
    return Object.keys(set);
  }

  // ---------------------------------------------------------------------
  // BlogCard — single card used in the grid
  // ---------------------------------------------------------------------
  window.BlogCard = function (props) {
    var post = props.post;
    var onOpenPost = props.onOpenPost;
    return h('div', { className: 'blog-card', onClick: function () { return onOpenPost(post); } },
      h('div', {
        className: 'blog-card-image',
        style: { backgroundImage: 'url(' + post.coverImage + ')' }
      },
        h('span', { className: 'blog-card-category' }, post.category)
      ),
      h('div', { className: 'blog-card-body' },
        h('div', { className: 'blog-card-meta' },
          h('span', null, formatBlogDate(post.date)),
          h('span', { className: 'blog-card-dot' }, '\u2022'),
          h('span', null, post.readTime)
        ),
        h('h3', { className: 'blog-card-title' }, post.title),
        h('p', { className: 'blog-card-excerpt' }, post.excerpt),
        h('span', { className: 'blog-card-readmore' }, 'Read Article \u2192')
      )
    );
  };

  // ---------------------------------------------------------------------
  // BlogListPage — /#/blog
  // ---------------------------------------------------------------------
  window.BlogListPage = function (props) {
    var posts = props.posts || [];
    var onOpenPost = props.onOpenPost;
    var onOpenCounselling = props.onOpenCounselling;

    var _search = useState('');
    var searchQuery = _search[0], setSearchQuery = _search[1];
    var _cat = useState('All');
    var activeCategory = _cat[0], setActiveCategory = _cat[1];

    useEffect(function () {
      document.title = 'Blog — Latest Online Degree Insights & Guides | UniversityJano.com';
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Read the latest guides on Online MBA, MCA, BBA & BCA programmes, UGC-DEB approvals, 0% EMI plans, and career tips from UniversityJano.com.');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    var categories = useMemo(function () { return ['All'].concat(getBlogCategories(posts)); }, [posts]);

    var filteredPosts = useMemo(function () {
      return posts.filter(function (p) {
        if (activeCategory !== 'All' && p.category !== activeCategory) return false;
        if (searchQuery.trim()) {
          var q = searchQuery.toLowerCase();
          var inTitle = p.title.toLowerCase().indexOf(q) !== -1;
          var inExcerpt = p.excerpt.toLowerCase().indexOf(q) !== -1;
          var inTags = (p.tags || []).some(function (t) { return t.toLowerCase().indexOf(q) !== -1; });
          if (!inTitle && !inExcerpt && !inTags) return false;
        }
        return true;
      });
    }, [posts, searchQuery, activeCategory]);

    return h('div', { className: 'blog-list-page' },
      h('section', { className: 'blog-hero-section' },
        h('div', { className: 'container' },
          h('span', { className: 'section-tag' }, '\u270D\uFE0F UniversityJano Blog'),
          h('h1', { className: 'blog-hero-title' }, 'Guides, Comparisons & Career Tips for Online Degrees'),
          h('p', { className: 'blog-hero-subtitle' }, 'Everything you need to know before choosing an online university \u2014 written by our research & counselling team.'),
          h('input', {
            type: 'text',
            className: 'blog-search-input',
            placeholder: '\uD83D\uDD0D Search articles, e.g. \u201Conline MBA\u201D or \u201CEMI\u201D',
            value: searchQuery,
            onChange: function (e) { return setSearchQuery(e.target.value); }
          })
        )
      ),
      h('section', { className: 'section-padding', style: { paddingTop: '2rem' } },
        h('div', { className: 'container' },
          h('div', { className: 'blog-category-filter' },
            categories.map(function (cat) {
              return h('span', {
                key: cat,
                className: 'blog-category-pill' + (activeCategory === cat ? ' active' : ''),
                onClick: function () { return setActiveCategory(cat); }
              }, cat);
            })
          ),
          filteredPosts.length === 0
            ? h('div', { className: 'blog-empty-state' },
                h('p', null, 'No articles matched your search yet. Try a different keyword or category.')
              )
            : h('div', { className: 'blog-grid' },
                filteredPosts.map(function (post) {
                  return h(window.BlogCard, { key: post.id, post: post, onOpenPost: onOpenPost });
                })
              )
        )
      ),
      h('section', { className: 'section-padding', style: { paddingTop: 0 } },
        h('div', { className: 'container' },
          h('div', { className: 'blog-cta-banner' },
            h('div', null,
              h('h3', null, 'Still confused which online degree is right for you?'),
              h('p', null, 'Talk to our free expert counsellors \u2014 no cost, no obligation.')
            ),
            h('button', {
              className: 'btn btn-primary btn-lg',
              onClick: function () { return onOpenCounselling({ title: 'Book 1-on-1 Free Expert Counselling', source: 'Blog Page CTA' }); }
            }, 'Get Free Counselling \u2192')
          )
        )
      )
    );
  };

  // ---------------------------------------------------------------------
  // BlogPostPage — /#/blog/:slug
  // ---------------------------------------------------------------------
  window.BlogPostPage = function (props) {
    var post = props.post;
    var allPosts = props.allPosts || [];
    var onOpenPost = props.onOpenPost;
    var onBack = props.onBack;
    var onOpenCounselling = props.onOpenCounselling;

    useEffect(function () {
      if (!post) return;
      var pageTitle = (post.metaTitle || post.title) + ' | UniversityJano.com';
      document.title = pageTitle;

      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

      var canonical = document.querySelector('link[rel="canonical"]');
      var canonicalUrl = 'https://universityjano.com/#/blog/' + post.slug;
      if (canonical) canonical.setAttribute('href', canonicalUrl);

      var scriptId = 'blog-jsonld-schema';
      var existing = document.getElementById(scriptId);
      if (existing) existing.remove();
      var schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Organization', name: post.author || 'UniversityJano.com' },
        publisher: { '@type': 'Organization', name: 'UniversityJano.com', logo: { '@type': 'ImageObject', url: 'https://universityjano.com/images/logo.png' } },
        image: post.coverImage,
        mainEntityOfPage: canonicalUrl
      };
      var scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.id = scriptId;
      scriptTag.text = JSON.stringify(schema);
      document.head.appendChild(scriptTag);

      window.scrollTo({ top: 0, behavior: 'smooth' });

      return function () {
        var s = document.getElementById(scriptId);
        if (s) s.remove();
      };
    }, [post]);

    if (!post) {
      return h('div', { className: 'container', style: { padding: '6rem 1rem', textAlign: 'center' } },
        h('h2', null, 'Article not found'),
        h('p', { style: { marginBottom: '1.5rem' } }, 'This blog post may have been moved or removed.'),
        h('button', { className: 'btn btn-primary', onClick: onBack }, '\u2190 Back to Blog')
      );
    }

    var relatedPosts = allPosts.filter(function (p) {
      return p.id !== post.id && p.category === post.category;
    }).slice(0, 3);

    if (relatedPosts.length === 0) {
      relatedPosts = allPosts.filter(function (p) { return p.id !== post.id; }).slice(0, 3);
    }

    return h('div', { className: 'blog-post-page' },
      h('div', { className: 'blog-post-hero', style: { backgroundImage: 'url(' + post.coverImage + ')' } },
        h('div', { className: 'blog-post-hero-overlay' })
      ),
      h('div', { className: 'container' },
        h('div', { className: 'blog-post-breadcrumb' },
          h('span', { onClick: onBack, style: { cursor: 'pointer' } }, 'Blog'),
          h('span', null, ' / '),
          h('span', null, post.category)
        ),
        h('div', { className: 'blog-post-layout' },
          h('article', { className: 'blog-post-main' },
            h('span', { className: 'blog-card-category', style: { position: 'static', display: 'inline-block', marginBottom: '1rem' } }, post.category),
            h('h1', { className: 'blog-post-title' }, post.title),
            h('div', { className: 'blog-post-meta-row' },
              h('span', null, '\u270D\uFE0F ', post.author),
              h('span', { className: 'blog-card-dot' }, '\u2022'),
              h('span', null, formatBlogDate(post.date)),
              h('span', { className: 'blog-card-dot' }, '\u2022'),
              h('span', null, post.readTime)
            ),
            h('div', {
              className: 'blog-post-content',
              dangerouslySetInnerHTML: { __html: post.content }
            }),
            h('div', { className: 'blog-post-tags' },
              (post.tags || []).map(function (tag) {
                return h('span', { key: tag, className: 'blog-tag-pill' }, '#' + tag.replace(/\s+/g, ''));
              })
            ),
            h('button', { className: 'btn btn-secondary', onClick: onBack, style: { marginTop: '2rem' } }, '\u2190 Back to All Articles')
          ),
          h('aside', { className: 'blog-post-sidebar' },
            h('div', { className: 'sidebar-lead-card' },
              h('h4', { style: { marginBottom: '0.5rem' } }, '\uD83C\uDFAF Confused about which university to choose?'),
              h('p', { style: { fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' } }, 'Get a free 1-on-1 session with our expert counsellors.'),
              h('button', {
                className: 'btn btn-primary',
                style: { width: '100%' },
                onClick: function () { return onOpenCounselling({ title: 'Book 1-on-1 Free Expert Counselling', source: 'Blog Post Sidebar' }); }
              }, 'Book Free Counselling'),
              h('button', {
                className: 'btn btn-secondary',
                style: { width: '100%', marginTop: '0.75rem' },
                onClick: onBack
              }, '\uD83D\uDCDA Explore All Universities')
            )
          )
        ),
        relatedPosts.length > 0 && h('div', { className: 'blog-related-section' },
          h('h2', { className: 'section-title', style: { fontSize: '1.5rem', marginBottom: '1.5rem' } }, 'Related Articles'),
          h('div', { className: 'blog-grid' },
            relatedPosts.map(function (p) {
              return h(window.BlogCard, { key: p.id, post: p, onOpenPost: onOpenPost });
            })
          )
        )
      )
    );
  };
})();
