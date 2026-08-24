// generate_static_pages.js
// Generates luxury, fully-responsive, SEO-rich HTML pages for all 25+ UGC-DEB Indian Online Universities
// and dedicated tool pages (compare.html, roi-calculator.html, emi-calculator.html, ugc-verifier.html, universities/index.html)
// All pages share the unified design system, headers, footers, mobile drawer, and interactive React components.

const fs = require('fs');
const path = require('path');

// Load Universities Data from data/universities.js
global.window = {};
const dataFile = path.join(__dirname, 'data/universities.js');
let universities = [];
if (fs.existsSync(dataFile)) {
  const content = fs.readFileSync(dataFile, 'utf8');
  eval(content);
  universities = window.UNIVERSITIES_DATA || [];
} else {
  // Fallback to bundle.js
  const bundleSrc = fs.readFileSync(path.join(__dirname, 'js/bundle.js'), 'utf8');
  const marker = 'window.UNIVERSITIES_DATA = [';
  const startIdx = bundleSrc.indexOf(marker);
  if (startIdx === -1) throw new Error('UNIVERSITIES_DATA not found');
  const sub = bundleSrc.slice(startIdx);
  let i = sub.indexOf('['), depth = 0, endIdx = -1;
  for (let j = i; j < sub.length; j++) {
    if (sub[j] === '[') depth++;
    if (sub[j] === ']') { depth--; if (depth === 0) { endIdx = j; break; } }
  }
  const arrStr = sub.slice(i, endIdx + 1);
  eval('window.UNIVERSITIES_DATA = ' + arrStr);
  universities = window.UNIVERSITIES_DATA;
}

console.log(`Loaded ${universities.length} universities from database.`);

const SITE_URL = 'https://universityjano.com';

const escapeHtml = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function pageShell({ title, metaDescription, canonical, ogImage, bodyContent, permalink }) {
  return `---
layout: null
permalink: ${permalink}
title: "${title.replace(/"/g, '\\"')}"
---
<!DOCTYPE html>
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
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage || `${SITE_URL}/images/logo.png`}">
<meta property="og:site_name" content="UniversityJano.com">

<link rel="icon" href="{{ '/images/logo.png' | relative_url }}">
<link rel="stylesheet" href="{{ '/css/design-system.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/css/components.css' | relative_url }}">
</head>
<body>
{% include site-header.html %}
${bodyContent}
{% include site-footer.html %}
<script src="{{ '/js/bundle.js' | relative_url }}"></script>
</body>
</html>
`;
}

// ---------------------------------------------------------------------
// 1. Generate /universities/<slug>.html — Rich Dedicated Profile for Each University
// ---------------------------------------------------------------------
const uniDir = path.join(__dirname, 'universities');
if (!fs.existsSync(uniDir)) fs.mkdirSync(uniDir);

universities.forEach(u => {
  const url = `${SITE_URL}/universities/${u.slug}.html`;
  const acc = u.accreditations || {};
  const met = u.metrics || {};

  const coursesCardsHtml = (u.popularCourses || []).map(c => `
    <div class="uni-course-item" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:1.75rem;margin-bottom:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1rem;">
        <div>
          <span class="badge badge-purple" style="font-size:0.75rem;margin-bottom:0.35rem;display:inline-block;">${escapeHtml(c.level || 'Degree')}</span>
          <h3 style="margin:0.25rem 0;color:#0b1b3d;font-size:1.35rem;">${escapeHtml(c.name)}</h3>
          <div style="color:#64748b;font-size:0.875rem;">⏳ Duration: ${escapeHtml(c.duration || '2 Years')} &bull; 📜 Eligibility: ${escapeHtml(c.eligibility || 'Graduation with 50%')}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.8rem;color:#64748b;">Total Course Fee</div>
          <div style="font-size:1.4rem;font-weight:800;color:#0b1b3d;">${c.totalFee ? '₹' + c.totalFee.toLocaleString('en-IN') : 'N/A'}</div>
          ${c.monthlyEmi ? `<div style="font-size:0.85rem;font-weight:700;color:#e06000;">0% EMI: ₹${c.monthlyEmi.toLocaleString('en-IN')}/mo</div>` : ''}
        </div>
      </div>

      ${c.specializations && c.specializations.length > 0 ? `
        <div style="margin:1rem 0;">
          <strong style="font-size:0.85rem;color:#0b1b3d;display:block;margin-bottom:0.4rem;">Specializations Offered:</strong>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
            ${c.specializations.map(s => `<span style="background:#f1f5f9;color:#334155;font-size:0.8rem;padding:0.25rem 0.65rem;border-radius:6px;border:1px solid #e2e8f0;">${escapeHtml(s)}</span>`).join('')}
          </div>
        </div>` : ''}

      ${c.keyHighlights && c.keyHighlights.length > 0 ? `
        <ul style="margin:0.75rem 0 1.25rem 1.25rem;color:#475569;font-size:0.875rem;line-height:1.6;">
          ${c.keyHighlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>` : ''}

      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;padding-top:1rem;border-top:1px solid #f1f5f9;">
        <a href="https://wa.me/918920199723?text=Hi%2C%20I%20want%20to%20apply%20for%20${encodeURIComponent(u.shortName + ' ' + c.name)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="text-decoration:none;font-weight:700;">
          Apply for 2026 Batch &rarr;
        </a>
        <a href="https://wa.me/918920199723?text=Please%20send%20me%20prospectus%20for%20${encodeURIComponent(u.shortName + ' ' + c.name)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="text-decoration:none;">
          📥 Download Syllabus &amp; Brochure
        </a>
      </div>
    </div>
  `).join('\n');

  const recruitersHtml = (u.topRecruiters || []).map(r => 
    `<span style="background:#eff6ff;color:#1a56db;font-weight:700;font-size:0.85rem;padding:0.4rem 0.85rem;border-radius:8px;border:1px solid #dbeafe;">${escapeHtml(r)}</span>`
  ).join(' ');

  const prosHtml = (u.pros || []).map(p => `<li style="margin-bottom:0.4rem;color:#334155;">✓ ${escapeHtml(p)}</li>`).join('');
  const consHtml = (u.cons || []).map(c => `<li style="margin-bottom:0.4rem;color:#64748b;">⚠ ${escapeHtml(c)}</li>`).join('');

  const metaDescription = `${u.name} — ${acc.ugcDeb ? 'UGC-DEB approved' : ''} online degree programs in India. NAAC ${escapeHtml(acc.naacGrade || '')}, ${escapeHtml(met.placementPercentage || '')} placement rate, exact fees, 0% EMI and syllabus.`.slice(0, 160);

  const body = `
<div style="background:#f8fafc;min-height:100vh;padding-bottom:4rem;">
  <!-- University Hero Campus Cover -->
  <div class="uni-hero-banner" style="background:linear-gradient(180deg, rgba(11,27,61,0.85) 0%, rgba(11,27,61,0.95) 100%), url('${u.heroImage || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'}') center/cover no-repeat;padding:3.5rem 0 2.5rem 0;color:#ffffff;">
    <div class="container">
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:#cbd5e1;margin-bottom:1.25rem;">
        <a href="{{ '/' | relative_url }}" style="color:#fed7aa;text-decoration:none;">Home</a>
        <span>/</span>
        <a href="{{ '/universities/index.html' | relative_url }}" style="color:#fed7aa;text-decoration:none;">Universities</a>
        <span>/</span>
        <span style="color:#ffffff;">${escapeHtml(u.name)}</span>
      </div>

      <div class="uni-hero-content" style="display:flex;gap:2rem;align-items:center;flex-wrap:wrap;">
        <div style="width:90px;height:90px;border-radius:20px;background:#ffffff;display:flex;align-items:center;justify-content:center;color:${u.logoColor || '#0b1b3d'};font-weight:900;font-size:1.2rem;border:3px solid #ffffff;box-shadow:0 10px 25px rgba(0,0,0,0.2);">
          ${escapeHtml(u.logoText || u.shortName.slice(0, 4))}
        </div>

        <div style="flex:1;min-width:280px;">
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem;">
            ${acc.ugcDeb ? '<span class="badge badge-success" style="font-size:0.75rem;">✓ UGC-DEB Approved</span>' : ''}
            ${acc.naacGrade ? `<span class="badge badge-purple" style="font-size:0.75rem;">🏆 NAAC ${escapeHtml(acc.naacGrade)} (${escapeHtml(acc.naacScore || '')})</span>` : ''}
            ${acc.nirfRank ? `<span class="badge badge-blue" style="font-size:0.75rem;">📜 ${escapeHtml(acc.nirfRank)}</span>` : ''}
          </div>
          <h1 style="font-size:2.2rem;margin:0 0 0.4rem 0;color:#ffffff;">${escapeHtml(u.name)}</h1>
          <p style="color:#fed7aa;font-size:1rem;margin:0 0 0.5rem 0;">${escapeHtml(u.tagline || '')}</p>
          <div style="font-size:0.875rem;color:#e2e8f0;display:flex;gap:1rem;flex-wrap:wrap;">
            <span>📍 ${escapeHtml(u.city || '')}, ${escapeHtml(u.state || '')}</span>
            <span>🏛️ Est. ${escapeHtml(String(u.foundedYear || ''))}</span>
            <span>🎓 ${escapeHtml(u.universityType || '')}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Profile Layout -->
  <div class="container" style="margin-top:2.5rem;">
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:2rem;" class="uni-detail-layout">
      <!-- Left Main Column -->
      <div>
        <!-- Key Metrics Cards -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:1rem;margin-bottom:2rem;">
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:1.25rem;border-radius:12px;text-align:center;">
            <div style="font-size:0.8rem;color:#64748b;margin-bottom:0.25rem;">Highest CTC</div>
            <strong style="font-size:1.25rem;color:#059669;">₹${escapeHtml(met.highestCtc || 'N/A')}</strong>
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:1.25rem;border-radius:12px;text-align:center;">
            <div style="font-size:0.8rem;color:#64748b;margin-bottom:0.25rem;">Average CTC</div>
            <strong style="font-size:1.25rem;color:#0b1b3d;">₹${escapeHtml(met.avgCtc || 'N/A')}</strong>
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:1.25rem;border-radius:12px;text-align:center;">
            <div style="font-size:0.8rem;color:#64748b;margin-bottom:0.25rem;">Placement Rate</div>
            <strong style="font-size:1.25rem;color:#1a56db;">${escapeHtml(met.placementPercentage || '90%')}</strong>
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:1.25rem;border-radius:12px;text-align:center;">
            <div style="font-size:0.8rem;color:#64748b;margin-bottom:0.25rem;">Student Rating</div>
            <strong style="font-size:1.25rem;color:#e06000;">★ ${met.rating || '4.8'} (${met.reviewCount || '2,000+'})</strong>
          </div>
        </div>

        <!-- Section 1: Courses & Fee Structure -->
        <div style="margin-bottom:2.5rem;">
          <h2 style="font-size:1.6rem;color:#0b1b3d;margin-bottom:1rem;display:flex;align-items:center;gap:0.5rem;">
            <span>🎓</span> Online Degree Courses &amp; Fee Breakdown
          </h2>
          ${coursesCardsHtml}
        </div>

        <!-- Section 2: Top Recruiting Partners -->
        <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:2rem;margin-bottom:2.5rem;">
          <h2 style="font-size:1.4rem;color:#0b1b3d;margin-bottom:1rem;">💼 Placement Partners &amp; Hiring Corporate Giants</h2>
          <p style="color:#64748b;font-size:0.9rem;margin-bottom:1.25rem;">Students graduating from ${escapeHtml(u.name)} are hired across Fortune 500 tech companies, consulting leaders, and BFSI giants.</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.65rem;">
            ${recruitersHtml}
          </div>
        </div>

        <!-- Section 3: Exam Mode & LMS Platform -->
        <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:2rem;margin-bottom:2.5rem;">
          <h2 style="font-size:1.4rem;color:#0b1b3d;margin-bottom:1rem;">💻 Online Exam Mode &amp; Learning Pedagogy</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;" class="calc-grid">
            <div style="background:#f8fafc;padding:1.25rem;border-radius:12px;border:1px solid #e2e8f0;">
              <strong style="color:#0b1b3d;display:block;margin-bottom:0.35rem;">📝 Examination Mode:</strong>
              <p style="color:#475569;font-size:0.875rem;margin:0;">${escapeHtml(u.examMode || '100% Online Remote-Proctored Examination from Home')}</p>
            </div>
            <div style="background:#f8fafc;padding:1.25rem;border-radius:12px;border:1px solid #e2e8f0;">
              <strong style="color:#0b1b3d;display:block;margin-bottom:0.35rem;">📱 LMS &amp; Lectures:</strong>
              <p style="color:#475569;font-size:0.875rem;margin:0;">${escapeHtml(u.learningPedagogy || 'Interactive LMS with 24/7 Recorded HD Lectures + Live Weekend Masterclasses')}</p>
            </div>
          </div>
        </div>

        <!-- Section 4: Pros & Cons -->
        <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:2rem;margin-bottom:2.5rem;">
          <h2 style="font-size:1.4rem;color:#0b1b3d;margin-bottom:1rem;">⚖️ Unbiased Evaluation &amp; Highlights</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;" class="calc-grid">
            <div>
              <strong style="color:#059669;display:block;margin-bottom:0.5rem;">Key Advantages:</strong>
              <ul style="list-style:none;padding:0;margin:0;font-size:0.875rem;">${prosHtml}</ul>
            </div>
            <div>
              <strong style="color:#d97706;display:block;margin-bottom:0.5rem;">Points to Note:</strong>
              <ul style="list-style:none;padding:0;margin:0;font-size:0.875rem;">${consHtml}</ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sticky Lead Sidebar -->
      <div>
        <div style="position:sticky;top:100px;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:2rem;box-shadow:0 10px 25px rgba(11,27,61,0.08);" class="uni-sticky-sidebar">
          <span class="badge badge-orange" style="font-size:0.75rem;margin-bottom:0.5rem;display:inline-block;">⚡ Free Direct Advisory</span>
          <h3 style="color:#0b1b3d;font-size:1.3rem;margin:0 0 0.5rem 0;">Talk to ${escapeHtml(u.shortName)} Advisor</h3>
          <p style="color:#64748b;font-size:0.85rem;line-height:1.5;margin-bottom:1.25rem;">Get complete fee structure, syllabus brochure, scholarship waivers, and 0% EMI eligibility.</p>

          <a href="https://wa.me/918920199723?text=Hi%2C%20I%20need%20expert%20guidance%20for%20admission%20in%20${encodeURIComponent(u.name)}" target="_blank" rel="noopener" class="btn btn-primary btn-block" style="background:#25D366;border-color:#25D366;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:0.5rem;font-weight:700;margin-bottom:0.75rem;">
            <span>💬</span> Chat on WhatsApp (Instant)
          </a>

          <a href="tel:18008905266" class="btn btn-secondary btn-block" style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:0.5rem;font-weight:700;margin-bottom:1.5rem;">
            <span>📞</span> Call 1800-890-5266
          </a>

          <div style="background:#eff6ff;padding:1rem;border-radius:10px;border:1px solid #dbeafe;font-size:0.8rem;color:#1e40af;">
            🛡️ <strong>100% Free Service:</strong> UniversityJano charges zero brokerage from students. All admissions are facilitated directly with UGC-DEB recognized universities.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  const html = pageShell({
    title: `${u.name} — Online Fees, Courses, Placements & Approvals | UniversityJano.com`,
    metaDescription,
    canonical: url,
    ogImage: u.heroImage,
    bodyContent: body,
    permalink: `/universities/${u.slug}.html`
  });
  fs.writeFileSync(path.join(uniDir, `${u.slug}.html`), html);
});

console.log(`Wrote all ${universities.length} university dedicated HTML pages.`);

// ---------------------------------------------------------------------
// 2. Generate /universities/index.html — Directory of All 25+ Online Universities
// ---------------------------------------------------------------------
const uniCardsGridHtml = universities.map(u => {
  const currentCourse = (u.popularCourses && u.popularCourses[0]) || {};
  return `
    <div class="uni-card" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:1.5rem;margin-bottom:1.25rem;box-shadow:0 1px 3px rgba(0,0,0,0.05);transition:all 0.2s ease;">
      <div class="uni-card-body" style="display:grid;grid-template-columns:100px 2fr 1.2fr 1fr;gap:1.5rem;align-items:center;">
        <!-- Logo Col -->
        <div style="text-align:center;">
          <div style="width:72px;height:72px;border-radius:14px;background:#f8fafc;border:2px solid ${u.logoColor || '#0b1b3d'};color:${u.logoColor || '#0b1b3d'};display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.9rem;margin:0 auto 0.4rem;">
            ${escapeHtml(u.logoText || u.shortName.slice(0, 4))}
          </div>
          <div style="font-size:0.8rem;font-weight:700;color:#e06000;">★ ${u.metrics ? u.metrics.rating : '4.8'}</div>
        </div>

        <!-- Info Col -->
        <div>
          <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.35rem;">
            <span class="badge badge-success" style="font-size:0.7rem;">✓ UGC-DEB</span>
            ${u.accreditations && u.accreditations.naacGrade ? `<span class="badge badge-purple" style="font-size:0.7rem;">NAAC ${escapeHtml(u.accreditations.naacGrade)}</span>` : ''}
            ${u.accreditations && u.accreditations.nirfRank ? `<span class="badge badge-blue" style="font-size:0.7rem;">${escapeHtml(u.accreditations.nirfRank)}</span>` : ''}
          </div>
          <h3 style="margin:0 0 0.25rem 0;color:#0b1b3d;font-size:1.25rem;">
            <a href="${u.slug}.html" style="color:inherit;text-decoration:none;">${escapeHtml(u.name)}</a>
          </h3>
          <div style="font-size:0.825rem;color:#64748b;margin-bottom:0.5rem;">
            📍 ${escapeHtml(u.city || '')}, ${escapeHtml(u.state || '')} &bull; Est. ${escapeHtml(String(u.foundedYear || ''))}
          </div>
          <div style="font-size:0.825rem;color:#334155;">
            💻 ${escapeHtml(u.examMode || '100% Online Exam')} &bull; 🤝 ${u.metrics ? u.metrics.hiringPartnersCount : '500+'} Recruiters
          </div>
        </div>

        <!-- Fee & Placement Col -->
        <div style="border-left:1px solid #f1f5f9;padding-left:1.25rem;">
          <div style="font-size:0.75rem;color:#64748b;">Course: Online ${escapeHtml(currentCourse.degree || 'Degree')}</div>
          <div style="font-size:1.2rem;font-weight:800;color:#0b1b3d;margin:0.15rem 0;">${currentCourse.totalFee ? '₹' + currentCourse.totalFee.toLocaleString('en-IN') : 'N/A'}</div>
          ${currentCourse.monthlyEmi ? `<div style="font-size:0.8rem;color:#e06000;font-weight:700;">EMI: ₹${currentCourse.monthlyEmi.toLocaleString('en-IN')}/mo</div>` : ''}
          <div style="font-size:0.8rem;color:#059669;font-weight:600;margin-top:0.35rem;">Highest CTC: ₹${u.metrics ? u.metrics.highestCtc : '18 LPA'}</div>
        </div>

        <!-- Action Buttons Col -->
        <div style="display:flex;flex-direction:column;gap:0.4rem;">
          <a href="${u.slug}.html" class="btn btn-primary btn-sm btn-block" style="text-decoration:none;text-align:center;font-weight:700;">
            Explore College &rarr;
          </a>
          <a href="https://wa.me/918920199723?text=Hi%2C%20I%20want%20to%20apply%20for%20${encodeURIComponent(u.name)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm btn-block" style="text-decoration:none;text-align:center;">
            Apply for Admission
          </a>
        </div>
      </div>
    </div>`;
}).join('\n');

const uniIndexBody = `
<div style="background:#f8fafc;min-height:100vh;padding:2.5rem 0 4.5rem 0;">
  <div class="container">
    <div style="margin-bottom:2rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:#64748b;margin-bottom:0.75rem;">
        <a href="{{ '/' | relative_url }}" style="color:#e06000;text-decoration:none;font-weight:700;">Home</a>
        <span>/</span>
        <span style="color:#0b1b3d;font-weight:700;">Directory of All Online Universities in India</span>
      </div>

      <h1 style="font-size:2.4rem;color:#0b1b3d;margin-bottom:0.5rem;">
        Directory of All UGC-DEB Approved Online Universities in India (${universities.length} Institutions)
      </h1>
      <p style="font-size:1.05rem;color:#64748b;max-width:850px;">
        Compare official accreditations (UGC-DEB, NAAC A++, NIRF), transparent course fees, 0% EMI options, placement records, and examination formats across all recognized Indian universities offering online degrees.
      </p>
    </div>

    <!-- University Listing Grid -->
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
        <div style="font-size:1rem;color:#0b1b3d;font-weight:700;">
          Showing all <strong>${universities.length}</strong> UGC-DEB Approved Universities
        </div>
        <a href="{{ '/compare.html' | relative_url }}" class="btn btn-secondary btn-sm" style="text-decoration:none;">
          ⚖️ Compare Colleges Side-by-Side &rarr;
        </a>
      </div>

      ${uniCardsGridHtml}
    </div>
  </div>
</div>`;

const uniIndexHtml = pageShell({
  title: 'All UGC-DEB Approved Online Universities in India (2026 Directory) | UniversityJano.com',
  metaDescription: `Exhaustive directory of all ${universities.length} UGC-DEB approved online universities in India — compare genuine fees, NAAC grades, 0% EMI and placements.`,
  canonical: `${SITE_URL}/universities/index.html`,
  bodyContent: uniIndexBody,
  permalink: '/universities/index.html'
});
fs.writeFileSync(path.join(uniDir, 'index.html'), uniIndexHtml);
console.log('Wrote universities/index.html');

// ---------------------------------------------------------------------
// 3. Generate Dedicated Tool Pages with Full Interactive UI Components
// ---------------------------------------------------------------------

// Page: compare.html
const compareHtml = pageShell({
  title: 'Compare Top Online Universities Side-by-Side | UniversityJano.com',
  metaDescription: 'Side-by-side comparison matrix comparing fees, NAAC grades, 0% EMI, placements and proctored exam features across top Indian online universities.',
  canonical: `${SITE_URL}/compare.html`,
  permalink: '/compare.html',
  bodyContent: `
    <div id="compare-app-root"></div>
    <script>
      (function() {
        function mountCompare() {
          var container = document.getElementById('compare-app-root');
          if (container && window.ComparePage && window.UNIVERSITIES_DATA) {
            ReactDOM.createRoot(container).render(
              React.createElement(window.ComparePage, {
                compareList: window.UNIVERSITIES_DATA.slice(0, 3),
                onAddUniversity: function(u) {},
                onRemoveUniversity: function(id) {},
                onOpenLeadModal: function(data) {
                  window.location.href = 'https://wa.me/918920199723?text=' + encodeURIComponent('Hi, I want counselling for ' + (data.title || 'Online Degree'));
                },
                onOpenUniversityPage: function(u) {
                  window.location.href = '/universities/' + u.slug + '.html';
                }
              })
            );
          } else {
            setTimeout(mountCompare, 50);
          }
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountCompare);
        else mountCompare();
      })();
    </script>
  `
});
fs.writeFileSync(path.join(__dirname, 'compare.html'), compareHtml);
console.log('Wrote compare.html');

// Page: roi-calculator.html
const roiHtml = pageShell({
  title: 'Online Degree Salary Jump & ROI Calculator | UniversityJano.com',
  metaDescription: 'Calculate expected salary hike, payback period in months, and 5-year career returns before investing in an online degree in India.',
  canonical: `${SITE_URL}/roi-calculator.html`,
  permalink: '/roi-calculator.html',
  bodyContent: `
    <div id="roi-app-root"></div>
    <script>
      (function() {
        function mountRoi() {
          var container = document.getElementById('roi-app-root');
          if (container && window.ROICalculatorPage) {
            ReactDOM.createRoot(container).render(
              React.createElement(window.ROICalculatorPage, {
                onOpenCounselling: function(data) {
                  window.location.href = 'https://wa.me/918920199723?text=' + encodeURIComponent('Hi, I want a career transition roadmap for ' + (data.course || 'Online Degree'));
                }
              })
            );
          } else {
            setTimeout(mountRoi, 50);
          }
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountRoi);
        else mountRoi();
      })();
    </script>
  `
});
fs.writeFileSync(path.join(__dirname, 'roi-calculator.html'), roiHtml);
console.log('Wrote roi-calculator.html');

// Page: emi-calculator.html
const emiHtml = pageShell({
  title: '0% Interest Monthly EMI & Fee Budget Planner | UniversityJano.com',
  metaDescription: 'Calculate zero-cost monthly installments, choose 6 to 36 month tenures, and check scholarship discount eligibility for Indian online degrees.',
  canonical: `${SITE_URL}/emi-calculator.html`,
  permalink: '/emi-calculator.html',
  bodyContent: `
    <div id="emi-app-root"></div>
    <script>
      (function() {
        function mountEmi() {
          var container = document.getElementById('emi-app-root');
          if (container && window.EMICalculatorPage) {
            ReactDOM.createRoot(container).render(
              React.createElement(window.EMICalculatorPage, {
                onOpenCounselling: function(data) {
                  window.location.href = 'https://wa.me/918920199723?text=' + encodeURIComponent('Hi, I want to apply for 0% EMI financing: ' + (data.notes || ''));
                }
              })
            );
          } else {
            setTimeout(mountEmi, 50);
          }
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountEmi);
        else mountEmi();
      })();
    </script>
  `
});
fs.writeFileSync(path.join(__dirname, 'emi-calculator.html'), emiHtml);
console.log('Wrote emi-calculator.html');

// Page: ugc-verifier.html
const ugcHtml = pageShell({
  title: 'UGC-DEB Government Approval & Legal Validity Inspector | UniversityJano.com',
  metaDescription: 'Official UGC-DEB recognition guide, Gazette of India mandate, UPSC/Govt job validity rules, and WES foreign equivalence verification.',
  canonical: `${SITE_URL}/ugc-verifier.html`,
  permalink: '/ugc-verifier.html',
  bodyContent: `
    <div id="ugc-app-root"></div>
    <script>
      (function() {
        function mountUgc() {
          var container = document.getElementById('ugc-app-root');
          if (container && window.UGCVerifierPage) {
            ReactDOM.createRoot(container).render(
              React.createElement(window.UGCVerifierPage, {
                onOpenCounselling: function(data) {
                  window.location.href = 'https://wa.me/918920199723?text=' + encodeURIComponent('Hi, I want to verify UGC-DEB entitlement for ' + (data.title || 'Online Degree'));
                }
              })
            );
          } else {
            setTimeout(mountUgc, 50);
          }
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountUgc);
        else mountUgc();
      })();
    </script>
  `
});
fs.writeFileSync(path.join(__dirname, 'ugc-verifier.html'), ugcHtml);
console.log('Wrote ugc-verifier.html');

console.log('✅ ALL static pages generated successfully with identical luxury CSS & zero hash routing!');
