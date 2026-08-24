const fs = require('fs');
const path = require('path');
const https = require('https');

const filesToBundle = [
  'data/universities.js',
  'data/courses.js',
  'data/reviews.js',
  'data/accreditations.js',
  'js/utils/helpers.js',
  'js/utils/leadStore.js',
  'js/components/Header.js',
  'js/components/HeroSection.js',
  'js/components/UniversityCard.js',
  'js/components/FilterSidebar.js',
  'js/components/CompareModal.js',
  'js/components/AIWizardModal.js',
  'js/components/ROICalculator.js',
  'js/components/EMICalculator.js',
  'js/components/UGCVerifier.js',
  'js/components/LeadCaptureModal.js',
  'js/components/LeadDashboardModal.js',
  'js/components/TestimonialsSection.js',
  'js/components/FloatingWidgets.js',
  'js/components/Footer.js',
  'js/components/AllUniversitiesPage.js',
  'js/components/UniversityDetailPage.js',
  'js/components/ComparePage.js',
  'js/components/ROICalculatorPage.js',
  'js/components/EMICalculatorPage.js',
  'js/components/UGCVerifierPage.js',
  'js/app.js'
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function build() {
  try {
    console.log('Downloading React 18 production libraries for 100% self-contained bundle...');
    const reactCode = await download('https://unpkg.com/react@18.2.0/umd/react.production.min.js');
    const reactDomCode = await download('https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js');
    const babelCode = await download('https://unpkg.com/@babel/standalone@7.23.10/babel.min.js');

    // Run Babel in node sandbox
    const babelSandbox = {};
    const fn = new Function('window', 'self', 'globalThis', babelCode);
    fn(babelSandbox, babelSandbox, babelSandbox);
    const Babel = babelSandbox.Babel;

    console.log('Concatenating application source code...');
    let fullJsxCode = '';

    for (const file of filesToBundle) {
      const filePath = path.join(__dirname, file);
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // If app.js, make sure render runs when DOM is ready
        if (file === 'js/app.js') {
          content = content.replace(
            "ReactDOM.createRoot(document.getElementById('root')).render(<App />);",
            `
function initApp() {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    ReactDOM.createRoot(rootEl).render(<App />);
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
            `
          );
        }
        fullJsxCode += `\n/* --- ${file} --- */\n` + content + '\n';
      } else {
        console.warn(`File not found: ${file}`);
      }
    }

    console.log('Transpiling JSX to pure JavaScript...');
    const transpiledApp = Babel.transform(fullJsxCode, {
      presets: ['react', 'env'],
      comments: false
    }).code;

    // Combine React + ReactDOM + Transpiled Application into a SINGLE self-contained bundle
    const finalBundle = `
/* =======================================================
   UniversityJano.com - Production Self-Contained Bundle
   Includes React 18 + ReactDOM + Complete Application
   Zero External Dependencies • 100% Offline & ISP Safe
   ======================================================= */
${reactCode}
${reactDomCode}
${transpiledApp}
`;

    const bundlePath = path.join(__dirname, 'js', 'bundle.js');
    fs.writeFileSync(bundlePath, finalBundle, 'utf8');
    console.log(`✅ Complete Self-Contained Bundle Created: ${bundlePath} (${(finalBundle.length / 1024).toFixed(1)} KB)`);

  } catch (err) {
    console.error('Build error:', err);
  }
}

build();
