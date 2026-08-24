// Header & Navigation Component with App-Like Mobile Drawer & Bottom Dock
window.Header = function({ 
  onOpenWizard, 
  onOpenCounselling, 
  onOpenAdminCRM, 
  compareList, 
  onOpenCompare,
  activePage,
  onNavigate 
}) {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const handleNavClick = (page) => {
    setIsMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header>
      {/* Top Ticker Notification */}
      <div className="top-notice-bar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="notice-pill">🔥 2026 Admissions Open</span>
            <span>UGC-DEB Approved Online Universities • Zero Cost 0% EMI Available</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#fed7aa' }}>
              📞 Helpline: <a href="tel:18008905266" style={{ color: '#fff', fontWeight: '700', textDecoration: 'none' }}>1800-890-5266</a>
            </span>
            <button 
              onClick={onOpenAdminCRM}
              className="btn btn-sm"
              style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
              title="Admin CRM for Website Owner"
            >
              📊 Leads CRM ({window.leadStore ? window.leadStore.getLeads().length : 0})
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="header-nav">
        <div className="container header-container">
          {/* Logo & Brand Image */}
          <div className="brand-logo-wrap" onClick={() => handleNavClick('home')}>
            <img 
              src="images/logo.png" 
              alt="UniversityJano.com - Explore Compare Choose" 
              className="brand-logo-img"
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="header-menu">
            <li>
              <span 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                🏠 Home
              </span>
            </li>
            <li>
              <a 
                href="/universities/index.html"
                className={`nav-link ${activePage === 'universities' ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                🏫 All Universities
              </a>
            </li>
            <li>
              <a 
                href="/compare.html"
                className={`nav-link ${activePage === 'compare' ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                ⚖️ Compare Colleges {compareList && compareList.length > 0 && <span className="badge badge-orange" style={{ marginLeft: '4px' }}>{compareList.length}</span>}
              </a>
            </li>
            <li>
              <a 
                href="/roi-calculator.html"
                className={`nav-link ${activePage === 'roi-calculator' ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                📈 Salary & ROI
              </a>
            </li>
            <li>
              <a 
                href="/emi-calculator.html"
                className={`nav-link ${activePage === 'emi-calculator' ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                💳 0% EMI Planner
              </a>
            </li>
            <li>
              <a 
                href="/ugc-verifier.html"
                className={`nav-link ${activePage === 'ugc-verifier' ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                🛡️ UGC Approvals
              </a>
            </li>
            <li>
              <a 
                href="/blog/"
                className="nav-link"
                style={{ textDecoration: 'none' }}
              >
                ✍️ Blog
              </a>
            </li>
          </ul>

          {/* Actions */}
          <div className="header-actions">
            <button 
              className="btn btn-primary btn-sm"
              onClick={onOpenWizard}
            >
              ⚡ 2-Min Match
            </button>
            <a 
              href="https://wa.me/919599128500?text=Hi%2C%20I%20want%20free%20counselling%20for%20Online%20Degrees"
              target="_blank"
              rel="noopener"
              className="btn btn-sm"
              style={{ background: '#25D366', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: '700' }}
            >
              <span>💬</span> WhatsApp
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              className={`mobile-menu-toggle ${isMobileOpen ? 'is-active' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-nav-overlay ${isMobileOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Slide-Over Drawer */}
      <div className={`mobile-nav-drawer ${isMobileOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="images/logo.png" alt="UniversityJano Logo" style={{ height: '38px', width: 'auto' }} />
          <button className="mobile-drawer-close" onClick={() => setIsMobileOpen(false)}>✕</button>
        </div>

        <div className="mobile-drawer-body">
          <div className="mobile-drawer-section-title">Navigation Menu</div>
          <ul className="mobile-drawer-links">
            <li>
              <a href="/" className="mobile-drawer-link" onClick={() => setIsMobileOpen(false)}>
                <span className="link-icon">🏠</span> Home
              </a>
            </li>
            <li>
              <a href="/universities/index.html" className="mobile-drawer-link">
                <span className="link-icon">🏫</span> All 25+ Online Universities
                <span className="mobile-drawer-badge">Directory</span>
              </a>
            </li>
            <li>
              <a href="/compare.html" className="mobile-drawer-link">
                <span className="link-icon">⚖️</span> Compare Colleges
                <span className="mobile-drawer-badge" style={{ background: '#1a56db' }}>4-Way</span>
              </a>
            </li>
            <li>
              <a href="/roi-calculator.html" className="mobile-drawer-link">
                <span className="link-icon">📈</span> Salary Jump &amp; ROI Calculator
              </a>
            </li>
            <li>
              <a href="/emi-calculator.html" className="mobile-drawer-link">
                <span className="link-icon">💳</span> 0% Interest EMI Budget Planner
              </a>
            </li>
            <li>
              <a href="/ugc-verifier.html" className="mobile-drawer-link">
                <span className="link-icon">🛡️</span> UGC-DEB Government Approvals
              </a>
            </li>
            <li>
              <a href="/blog/" className="mobile-drawer-link">
                <span className="link-icon">✍️</span> Career &amp; Degree Blogs
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-section-title" style={{ marginTop: '1.25rem' }}>Popular Online Degrees</div>
          <ul className="mobile-drawer-links">
            <li><a href="/universities/index.html?degree=MBA" className="mobile-drawer-link"><span className="link-icon">🎓</span> Online MBA Programs</a></li>
            <li><a href="/universities/index.html?degree=MCA" className="mobile-drawer-link"><span className="link-icon">💻</span> Online MCA Programs</a></li>
            <li><a href="/universities/index.html?degree=BBA" className="mobile-drawer-link"><span className="link-icon">📊</span> Online BBA Programs</a></li>
            <li><a href="/universities/index.html?degree=BCA" className="mobile-drawer-link"><span className="link-icon">⚡</span> Online BCA Programs</a></li>
          </ul>
        </div>

        <div className="mobile-drawer-footer">
          <a href="https://wa.me/919599128500?text=Hi%2C%20I%20want%20free%20counselling%20for%20Online%20Degrees" target="_blank" rel="noopener" className="btn btn-primary btn-block" style={{ background: '#25D366', borderColor: '#25D366', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: '700' }}>
            <span>💬</span> WhatsApp Direct (Instant)
          </a>
          <a href="tel:18008905266" className="btn btn-secondary btn-block" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: '700' }}>
            <span>📞</span> Call Helpline (1800-890-5266)
          </a>
        </div>
      </div>

      {/* App-Like Mobile Bottom Navigation Dock */}
      <div className="mobile-bottom-dock">
        <a href="/" className={`dock-item ${activePage === 'home' ? 'is-active' : ''}`}>
          <span className="dock-icon">🏠</span>
          <span className="dock-label">Home</span>
        </a>
        <a href="/universities/index.html" className="dock-item">
          <span className="dock-icon">🏫</span>
          <span className="dock-label">Colleges</span>
        </a>
        <a href="/compare.html" className="dock-item">
          <span className="dock-icon">⚖️</span>
          <span className="dock-label">Compare</span>
          {compareList && compareList.length > 0 && <span className="dock-badge">{compareList.length}</span>}
        </a>
        <a href="/roi-calculator.html" className="dock-item">
          <span className="dock-icon">📈</span>
          <span className="dock-label">ROI / EMI</span>
        </a>
        <a href="https://wa.me/919599128500?text=Hi%2C%20I%20want%20free%20counselling%20for%20Online%20Degrees" target="_blank" rel="noopener" className="dock-item" style={{ color: '#25D366' }}>
          <span className="dock-icon">💬</span>
          <span className="dock-label">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};
