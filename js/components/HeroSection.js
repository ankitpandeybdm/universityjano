// Hero Section Component with High-Impact Value Proposition and Search Box
window.HeroSection = function({ 
  searchQuery, 
  onSearchChange, 
  selectedDegree, 
  onSelectDegree, 
  onOpenWizard, 
  onOpenCounselling 
}) {
  const degrees = ['All', 'MBA', 'MCA', 'BBA', 'BCA', 'M.Sc', 'B.Com', 'M.Tech'];

  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Text & Search Box */}
          <div>
            <div className="hero-badge-tag">
              <span>🇮🇳 India's #1 AI-Powered Online Degree Portal</span>
            </div>
            
            <h1 className="hero-title">
              Sahi University Jano, <br />
              <span className="text-gradient-orange">Sahi Career Chuno!</span>
            </h1>
            
            <p className="hero-desc">
              Compare 25+ UGC-DEB approved top Indian online universities. Discover authentic fees, NAAC grades, 0% EMI plans, and placement records. 100% unbiased & free guidance.
            </p>

            {/* Smart Search Bar */}
            <div className="hero-search-box">
              <div className="search-input-wrap">
                <span style={{ fontSize: '1.25rem' }}>🔍</span>
                <input 
                  type="text"
                  placeholder="Search by University (e.g. Manipal, NMIMS) or Degree (e.g. Online MBA)..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const el = document.getElementById('universities-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Search Universities
              </button>
            </div>

            {/* Quick Degree Filter Pills */}
            <div className="hero-degree-pills">
              <span>Popular Degrees:</span>
              {degrees.map(deg => (
                <button
                  key={deg}
                  className={`degree-pill-btn ${selectedDegree === deg ? 'active' : ''}`}
                  onClick={() => onSelectDegree(deg)}
                >
                  {deg === 'All' ? '⚡ All Degrees' : `Online ${deg}`}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: AI Matchmaker Interactive Prompt Card */}
          <div>
            <div className="hero-interactive-card">
              <div className="hero-card-header">
                <div>
                  <span className="badge badge-orange" style={{ marginBottom: '0.4rem' }}>⚡ 100% Free AI Tool</span>
                  <h3 className="hero-card-title">Confused Which Online University to Choose?</h3>
                </div>
              </div>

              <p style={{ color: '#e2e8f0', fontSize: '0.925rem', marginBottom: '1rem' }}>
                Don't waste weeks talking to unverified agents. Answer 4 quick questions and get an instant AI-matched shortlist with exact fees & placement data.
              </p>

              <div className="hero-trust-chips">
                <div className="trust-chip">
                  <div className="chip-icon">🛡️</div>
                  <div className="chip-text">
                    <strong>100% UGC-DEB</strong>
                    <span>Govt. Entitled</span>
                  </div>
                </div>

                <div className="trust-chip">
                  <div className="chip-icon">💳</div>
                  <div className="chip-text">
                    <strong>Zero-Cost EMI</strong>
                    <span>Start @ ₹2,200/mo</span>
                  </div>
                </div>

                <div className="trust-chip">
                  <div className="chip-icon">📊</div>
                  <div className="chip-text">
                    <strong>Side-by-Side</strong>
                    <span>Compare 4 Colleges</span>
                  </div>
                </div>

                <div className="trust-chip">
                  <div className="chip-icon">💼</div>
                  <div className="chip-text">
                    <strong>Placement Cell</strong>
                    <span>Top MNC Drives</span>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-lg btn-block"
                onClick={onOpenWizard}
                style={{ fontWeight: '700' }}
              >
                ✨ Suggest Me A College in 2 Mins →
              </button>

              <div style={{ textAlign: 'center', marginTop: '0.85rem' }}>
                <span style={{ fontSize: '0.775rem', color: '#cbd5e1' }}>
                  🔒 50,000+ Indian students already guided • Zero spam guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
