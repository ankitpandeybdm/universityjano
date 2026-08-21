// Header & Navigation Component with Multi-Page Navigation
window.Header = function({ 
  onOpenWizard, 
  onOpenCounselling, 
  onOpenAdminCRM, 
  compareList, 
  onOpenCompare,
  activePage,
  onNavigate 
}) {
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
              📞 Helpline: <strong>1800-890-5266</strong> (Toll Free)
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
          <div className="brand-logo-wrap" onClick={() => onNavigate('home')}>
            <img 
              src="images/logo.png" 
              alt="UniversityJano.com - Explore Compare Choose" 
              className="brand-logo-img"
            />
          </div>

          {/* Nav Links */}
          <ul className="header-menu">
            <li>
              <span 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => onNavigate('home')}
              >
                🏠 Home
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'universities' ? 'active' : ''}`}
                onClick={() => onNavigate('universities')}
              >
                🏫 All Universities
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'compare' ? 'active' : ''}`}
                onClick={() => onNavigate('compare')}
              >
                ⚖️ Compare Colleges {compareList.length > 0 && <span className="badge badge-orange" style={{ marginLeft: '4px' }}>{compareList.length}</span>}
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'roi-calculator' ? 'active' : ''}`}
                onClick={() => onNavigate('roi-calculator')}
              >
                📈 Salary & ROI
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'emi-calculator' ? 'active' : ''}`}
                onClick={() => onNavigate('emi-calculator')}
              >
                💳 0% EMI Planner
              </span>
            </li>
            <li>
              <span 
                className={`nav-link ${activePage === 'ugc-verifier' ? 'active' : ''}`}
                onClick={() => onNavigate('ugc-verifier')}
              >
                🛡️ UGC Approvals
              </span>
            </li>
          </ul>

          {/* Actions */}
          <div className="header-actions">
            <button 
              className="btn btn-primary btn-sm"
              onClick={onOpenWizard}
            >
              ⚡ Suggest College in 2 Mins
            </button>
            <button 
              className="btn btn-navy btn-sm"
              onClick={() => onOpenCounselling({ title: 'Book 1-on-1 Free Expert Counselling', source: 'Header CTA' })}
            >
              Free Counselling
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
