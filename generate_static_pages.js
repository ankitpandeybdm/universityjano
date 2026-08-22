// generate_static_pages.js
// Generates real, crawlable HTML pages for:
//   /universities/index.html          - list of all universities
//   /universities/<slug>.html         - one page per university (13 pages)
//   /roi-calculator.html
//   /emi-calculator.html
//   /ugc-verifier.html
//   /compare.html
// All pages use the SAME real site header/footer (_includes/site-header.html,
// _includes/site-footer.html) and CSS files as the blog and homepage, so
// the whole site looks and feels like one consistent website.
// Run any time UNIVERSITIES_DATA changes:
//   node generate_static_pages.js
//
const fs = require('fs');
const path = require('path');

global.window = {};
const bundleSrc = fs.readFileSync(path.join(__dirname, 'js/bundle.js'), 'utf8');
const marker = 'window.UNIVERSITIES_DATA = [';
const startIdx = bundleSrc.indexOf(marker);
if (startIdx === -1) throw new Error('UNIVERSITIES_DATA not found in bundle.js');
const sub = bundleSrc.slice(startIdx);
let i = sub.indexOf('['), depth = 0, endIdx = -1;
for (let j = i; j < sub.length; j++) {
  if (sub[j] === '[') depth++;
  if (sub[j] === ']') { depth--; if (depth === 0) { endIdx = j; break; } }
}
const arrStr = sub.slice(i, endIdx + 1);
eval('window.UNIVERSITIES_DATA = ' + arrStr);
const universities = window.UNIVERSITIES_DATA;

const SITE_URL = 'https://universityjano.com';

const escapeHtml = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// pageShell now uses Jekyll front matter + {% include %} tags, so these
// pages get rendered through the exact same header/footer as the blog.
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
<style>
  .static-wrap{max-width:1000px;margin:0 auto;padding:2.5rem 1.25rem 4rem;}
  .static-wrap h1{font-size:2rem;line-height:1.25;margin-bottom:0.5rem;color:#0b1b3d;}
  .static-wrap h2{margin-top:2rem;color:#0b1b3d;}
  .static-wrap p, .static-wrap li{line-height:1.75;color:#334155;}
  .static-wrap a.back-link{display:inline-block;margin-bottom:1.5rem;color:#0b1b3d;font-weight:600;text-decoration:none;}
  .uni-card{border:1px solid #e2e8f0;border-radius:12px;padding:1.25rem;margin-bottom:1.25rem;}
  .uni-card h3{margin:0 0 0.4rem;color:#0b1b3d;}
  .uni-card h3 a{color:inherit;text-decoration:none;}
  .uni-card .tag{display:inline-block;background:#eff6ff;color:#1d4ed8;font-size:0.78rem;padding:0.15rem 0.6rem;border-radius:999px;margin-right:0.4rem;}
  .fact-table{width:100%;border-collapse:collapse;margin:1rem 0;}
  .fact-table td{padding:0.5rem 0.75rem;border-bottom:1px solid #e2e8f0;font-size:0.92rem;}
  .fact-table td:first-child{color:#64748b;width:40%;}
  .course-block{border:1px solid #e2e8f0;border-radius:10px;padding:1rem;margin-bottom:1rem;}
  .cta-box{background:#f1f5f9;border-radius:12px;padding:1.25rem;margin-top:2rem;text-align:center;}
  .cta-box a{display:inline-block;background:#1d4ed8;color:#fff;padding:0.6rem 1.4rem;border-radius:8px;text-decoration:none;font-weight:600;margin-top:0.5rem;}
</style>
</head>
<body>
{% include site-header.html %}
${bodyContent}
{% include site-footer.html %}
</body>
</html>
`;
}

// ---------------------------------------------------------------------
// /universities/<slug>.html — one per university
// ---------------------------------------------------------------------
const uniDir = path.join(__dirname, 'universities');
if (!fs.existsSync(uniDir)) fs.mkdirSync(uniDir);

universities.forEach(u => {
  const url = `${SITE_URL}/universities/${u.slug}.html`;
  const acc = u.accreditations || {};
  const met = u.metrics || {};

  const coursesHtml = (u.popularCourses || []).map(c => `
    <div class="course-block">
      <h3 style="margin:0 0 0.4rem;">${escapeHtml(c.name)}</h3>
      <table class="fact-table">
        <tr><td>Duration</td><td>${escapeHtml(c.duration || '')}</td></tr>
        <tr><td>Eligibility</td><td>${escapeHtml(c.eligibility || '')}</td></tr>
        <tr><td>Total Fee</td><td>${c.totalFee ? '₹' + c.totalFee.toLocaleString('en-IN') : ''}</td></tr>
        <tr><td>Monthly EMI</td><td>${c.monthlyEmi ? '₹' + c.monthlyEmi.toLocaleString('en-IN') + '/month' : ''}</td></tr>
        <tr><td>Avg CTC</td><td>${escapeHtml(c.avgCtc || '')}</td></tr>
        <tr><td>Highest CTC</td><td>${escapeHtml(c.highestCtc || '')}</td></tr>
      </table>
      ${c.specializations ? `<p><strong>Specializations:</strong> ${c.specializations.map(escapeHtml).join(', ')}</p>` : ''}
    </div>`).join('\n');

  const recruitersHtml = (u.topRecruiters || []).map(escapeHtml).join(', ');
  const prosHtml = (u.pros || []).map(p => `<li>${escapeHtml(p)}</li>`).join('');
  const consHtml = (u.cons || []).map(c => `<li>${escapeHtml(c)}</li>`).join('');

  const metaDescription = `${u.name} — ${acc.ugcDeb ? 'UGC-DEB approved' : ''} online degrees. NAAC ${escapeHtml(acc.naacGrade || '')}, ${escapeHtml(met.placementPercentage || '')} placement, fees, EMI and course details.`.slice(0, 160);

  const body = `
<section class="static-wrap">
  <a class="back-link" href="{{ '/universities/index.html' | relative_url }}">&larr; All Universities</a>
  <h1>${escapeHtml(u.name)}</h1>
  <p style="color:#64748b;">${escapeHtml(u.tagline || '')} &middot; ${escapeHtml(u.city || '')}, ${escapeHtml(u.state || '')}</p>

  <table class="fact-table">
    <tr><td>University Type</td><td>${escapeHtml(u.universityType || '')}</td></tr>
    <tr><td>Founded</td><td>${escapeHtml(String(u.foundedYear || ''))}</td></tr>
    <tr><td>UGC-DEB Approved</td><td>${acc.ugcDeb ? 'Yes — ' + escapeHtml(acc.ugcDebYear || '') : 'Not specified'}</td></tr>
    <tr><td>NAAC Grade</td><td>${escapeHtml(acc.naacGrade || 'N/A')} ${acc.naacScore ? '(' + escapeHtml(acc.naacScore) + ')' : ''}</td></tr>
    <tr><td>NIRF Rank</td><td>${escapeHtml(acc.nirfRank || 'N/A')}</td></tr>
    <tr><td>Student Rating</td><td>${met.rating ? met.rating + ' / 5 (' + (met.reviewCount || 0) + ' reviews)' : 'N/A'}</td></tr>
    <tr><td>Students Enrolled</td><td>${escapeHtml(met.studentEnrolled || 'N/A')}</td></tr>
    <tr><td>Placement %</td><td>${escapeHtml(met.placementPercentage || 'N/A')}</td></tr>
    <tr><td>Average CTC</td><td>${escapeHtml(met.avgCtc || 'N/A')}</td></tr>
    <tr><td>Highest CTC</td><td>${escapeHtml(met.highestCtc || 'N/A')}</td></tr>
    <tr><td>Exam Mode</td><td>${escapeHtml(u.examMode || '')}</td></tr>
    <tr><td>EMI Available</td><td>${u.emiAvailable ? 'Yes, starting ₹' + (u.minMonthlyEmi || '') + '/month' : 'No'}</td></tr>
  </table>

  ${recruitersHtml ? `<h2>Top Recruiters</h2><p>${recruitersHtml}</p>` : ''}

  ${coursesHtml ? `<h2>Popular Courses</h2>${coursesHtml}` : ''}

  ${prosHtml ? `<h2>Pros</h2><ul>${prosHtml}</ul>` : ''}
  ${consHtml ? `<h2>Cons</h2><ul>${consHtml}</ul>` : ''}

  <div class="cta-box">
    <p>Want a personalised comparison and free counselling for ${escapeHtml(u.shortName || u.name)}?</p>
    <a href="{{ '/index.html' | relative_url }}#/university/${u.slug}">Open Interactive Details &amp; Free Counselling</a>
  </div>
</section>`;

  const html = pageShell({
    title: `${u.name} — Fees, Placements, UGC-DEB Approval | UniversityJano.com`,
    metaDescription,
    canonical: url,
    ogImage: u.heroImage,
    bodyContent: body,
    permalink: `/universities/${u.slug}.html`
  });
  fs.writeFileSync(path.join(uniDir, `${u.slug}.html`), html);
  console.log('Wrote universities/' + u.slug + '.html');
});

// ---------------------------------------------------------------------
// /universities/index.html — listing page
// ---------------------------------------------------------------------
const uniListHtml = universities.map(u => `
  <div class="uni-card">
    <h3><a href="${u.slug}.html">${escapeHtml(u.name)}</a></h3>
    <div>
      ${u.accreditations && u.accreditations.ugcDeb ? '<span class="tag">UGC-DEB Approved</span>' : ''}
      ${u.accreditations && u.accreditations.naacGrade ? `<span class="tag">NAAC ${escapeHtml(u.accreditations.naacGrade)}</span>` : ''}
      ${u.metrics && u.metrics.placementPercentage ? `<span class="tag">${escapeHtml(u.metrics.placementPercentage)} Placement</span>` : ''}
    </div>
    <p>${escapeHtml(u.tagline || '')} &mdash; ${escapeHtml(u.city || '')}, ${escapeHtml(u.state || '')}</p>
    <a href="${u.slug}.html" style="font-weight:600;color:#1d4ed8;text-decoration:none;">View full details &rarr;</a>
  </div>`).join('\n');

const uniIndexBody = `
<section class="static-wrap">
  <a class="back-link" href="{{ '/' | relative_url }}">&larr; Home</a>
  <h1>UGC-DEB Approved Online Universities in India</h1>
  <p style="color:#64748b;margin-bottom:2rem;">Compare fees, NAAC grades, placement records and EMI options across ${universities.length} online universities.</p>
  ${uniListHtml}
</section>`;

const uniIndexHtml = pageShell({
  title: 'Compare Online Universities in India | UniversityJano.com',
  metaDescription: `Compare ${universities.length} UGC-DEB approved online universities in India — fees, NAAC grades, placements and EMI options.`,
  canonical: `${SITE_URL}/universities/index.html`,
  bodyContent: uniIndexBody,
  permalink: '/universities/index.html'
});
fs.writeFileSync(path.join(uniDir, 'index.html'), uniIndexHtml);
console.log('Wrote universities/index.html');

// ---------------------------------------------------------------------
// Simple tool pages: roi-calculator, emi-calculator, ugc-verifier, compare
// ---------------------------------------------------------------------
const toolPages = [
  {
    file: 'roi-calculator.html',
    title: 'Online Degree Salary & ROI Calculator | UniversityJano.com',
    h1: 'Salary & ROI Jump Calculator',
    desc: 'Estimate the salary jump and return on investment (ROI) of an online MBA, MCA, BBA or BCA degree in India before you enroll.',
    body: `<p>Wondering if an online degree is worth the fee? Our ROI calculator compares your current salary against average placement outcomes across our ${universities.length} partner universities, factoring in course fees, duration, and typical post-degree salary jumps for MBA, MCA, BBA and BCA programmes.</p>
<h2>How it works</h2>
<ul>
<li>Enter your current salary and the course you're considering</li>
<li>We use real average and highest CTC data reported by each university</li>
<li>See an estimated payback period and 5-year earning difference</li>
</ul>`,
    hash: '#/roi-calculator'
  },
  {
    file: 'emi-calculator.html',
    title: '0% EMI Planner for Online Degrees | UniversityJano.com',
    h1: '0% EMI Budget Planner',
    desc: 'Calculate your monthly EMI for online MBA, MCA, BBA and BCA degrees across UGC-DEB approved Indian universities. Plan your budget before enrolling.',
    body: `<p>Most online degree programmes in India offer 0% (no-cost) EMI plans, spreading fees of ₹80,000 to ₹3,00,000+ across 6 to 24 months. Use this planner to estimate your monthly instalment for any of our ${universities.length} partner universities before you commit.</p>
<h2>What you can plan</h2>
<ul>
<li>Monthly EMI amount based on total course fee and tenure</li>
<li>Comparison across universities offering the same degree</li>
<li>Processing fee and total repayment estimate</li>
</ul>`,
    hash: '#/emi-calculator'
  },
  {
    file: 'ugc-verifier.html',
    title: 'UGC-DEB Degree Validity Checker | UniversityJano.com',
    h1: 'UGC-DEB Degree Validity Inspector',
    desc: 'Check if an online degree or university is UGC-DEB approved before you pay any admission fee. Free verification tool.',
    body: `<p>Under UGC (Open and Distance Learning Programmes and Online Programmes) Regulations, only degrees from UGC-DEB approved universities carry full legal recognition for jobs, higher education and government exams in India. Use this free tool to check a university's approval status before paying any admission fee.</p>
<h2>Why this matters</h2>
<ul>
<li>Some institutions claim "UGC recognised" without a specific DEB approval for online mode — a common red flag</li>
<li>Approval status can vary by programme and admission year</li>
<li>Verifying takes under a minute and can save years of regret</li>
</ul>`,
    hash: '#/ugc-verifier'
  },
  {
    file: 'compare.html',
    title: 'Compare Online Universities Side by Side | UniversityJano.com',
    h1: 'Compare Online Universities',
    desc: `Compare fees, NAAC grades, placements and EMI options side by side across ${universities.length} UGC-DEB approved online universities in India.`,
    body: `<p>Choosing between online universities? Compare fees, accreditations, placement percentages and EMI options side by side across our ${universities.length} partner universities, including ${universities.slice(0,5).map(u => escapeHtml(u.shortName || u.name)).join(', ')} and more.</p>`,
    hash: '#/compare'
  }
];

toolPages.forEach(tp => {
  const body = `
<section class="static-wrap">
  <a class="back-link" href="{{ '/' | relative_url }}">&larr; Home</a>
  <h1>${escapeHtml(tp.h1)}</h1>
  ${tp.body}
  <div class="cta-box">
    <p>Use the interactive version of this tool:</p>
    <a href="{{ '/index.html' | relative_url }}${tp.hash}">Open ${escapeHtml(tp.h1)}</a>
  </div>
</section>`;
  const html = pageShell({
    title: tp.title,
    metaDescription: tp.desc,
    canonical: `${SITE_URL}/${tp.file}`,
    bodyContent: body,
    permalink: `/${tp.file}`
  });
  fs.writeFileSync(path.join(__dirname, tp.file), html);
  console.log('Wrote ' + tp.file);
});

console.log('Done. jekyll-sitemap plugin will auto-include all these pages in sitemap.xml at build time.');
