// Footer Component with Official Logo and UGC Compliance Disclaimer
window.Footer = function({ onNavigate, onOpenWizard, onOpenCounselling }) {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* UGC Regulatory Disclaimer */}
        <div className="ugc-disclaimer-box">
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.35rem' }}>
            ⚖️ Regulatory Compliance & Disclaimer (UGC-DEB):
          </strong>
          UniversityJano.com is an independent educational technology discovery and comparison portal. All university names, logos, and trademarks displayed belong to their respective statutory institutions and universities. UniversityJano assists students with unbiased information, counseling, fee structures, and transparent comparison as per University Grants Commission (Open and Distance Learning Programmes and Online Programmes) Regulations. Degrees offered are awarded directly by the respective UGC-DEB recognized universities.
        </div>

        {/* Footer Links Columns */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col">
            <div 
              style={{ background: '#ffffff', padding: '0.4rem 0.85rem', borderRadius: '10px', display: 'inline-block', marginBottom: '1.25rem', cursor: 'pointer' }}
              onClick={() => onNavigate('home')}
            >
              <img 
                src="images/logo.png" 
                alt="UniversityJano.com Logo" 
                style={{ height: '44px', width: 'auto', display: 'block' }}
              />
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              India's #1 AI-powered online degree and college discovery platform. Sahi University Jano, Sahi Career Chuno!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
              <span>📞 Student Helpline: <strong>1800-890-5266</strong></span>
              <span>✉️ Admissions: <strong>help@universityjano.com</strong></span>
              <span>📍 Head Office: Knowledge Park, New Delhi & Tech Corridor, Bangalore</span>
            </div>
          </div>

          {/* Col 2: Top Degrees */}
          <div className="footer-col">
            <h4>Online Postgraduate Degrees</h4>
            <ul className="footer-links">
              <li><a href="#universities-section">Online MBA in FinTech</a></li>
              <li><a href="#universities-section">Online MBA in Business Analytics</a></li>
              <li><a href="#universities-section">Online MCA in Cloud & AI</a></li>
              <li><a href="#universities-section">Online M.Sc in Data Science</a></li>
              <li><a href="#universities-section">Executive MBA for Working Professionals</a></li>
              <li><a href="#universities-section">Online M.Com & Corporate Finance</a></li>
            </ul>
          </div>

          {/* Col 3: Undergraduate Degrees */}
          <div className="footer-col">
            <h4>Online Undergraduate Degrees</h4>
            <ul className="footer-links">
              <li><a href="#universities-section">Online BBA (Digital Marketing)</a></li>
              <li><a href="#universities-section">Online BCA (Software Engineering)</a></li>
              <li><a href="#universities-section">Online B.Com (Honours)</a></li>
              <li><a href="#universities-section">Online B.A. (Journalism & Mass Comm)</a></li>
              <li><a href="#universities-section">0% EMI Student Loan Plans</a></li>
              <li><a href="#universities-section">Scholarship Waiver Program</a></li>
            </ul>
          </div>

          {/* Col 4: Interactive Tools */}
          <div className="footer-col">
            <h4>Free Student Engagement Tools</h4>
            <ul className="footer-links">
              <li><span style={{ cursor: 'pointer' }} onClick={onOpenWizard}>⚡ 2-Minute AI College Finder</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => onNavigate('roi-calc')}>📈 Salary & ROI Jump Calculator</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => onNavigate('emi-calc')}>💳 0% Monthly EMI Budget Planner</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => onNavigate('ugc')}>🛡️ UGC-DEB Degree Validity Inspector</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => onOpenCounselling({ title: 'Book Free 1-on-1 Counselling' })}>🎯 1-on-1 Free Expert Counselling</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} UniversityJano.com — All Rights Reserved. Sahi University Jano, Sahi Career Chuno.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ color: '#64748b' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: '#64748b' }}>Terms of Service</a>
            <a href="#ugc-disclaimer" style={{ color: '#64748b' }}>UGC-DEB Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
