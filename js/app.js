// UniversityJano.com - Main Application Router & Controller
const { useState, useEffect, useMemo } = React;

function App() {
  // Navigation Page State: 'home', 'universities', 'university', 'compare', 'roi-calculator', 'emi-calculator', 'ugc-verifier'
  const [activePage, setActivePage] = useState('home');
  const [viewingUniversity, setViewingUniversity] = useState(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('All');
  const [selectedNaac, setSelectedNaac] = useState('All');
  const [maxBudget, setMaxBudget] = useState(300000);
  const [onlyOnlineExam, setOnlyOnlineExam] = useState(false);
  const [onlyEmi, setOnlyEmi] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Comparison State
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Modals State
  const [showWizardModal, setShowWizardModal] = useState(false);
  const [leadModalData, setLeadModalData] = useState(null);
  const [showAdminCRM, setShowAdminCRM] = useState(false);

  const universities = window.UNIVERSITIES_DATA || [];

  // URL Hash-Based Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      
      if (hash.startsWith('#/university/')) {
        const slug = hash.replace('#/university/', '');
        const found = universities.find(u => u.slug === slug || u.id === slug);
        if (found) {
          setViewingUniversity(found);
          setActivePage('university');
        } else {
          setActivePage('universities');
        }
      } else if (hash === '#/universities') {
        setViewingUniversity(null);
        setActivePage('universities');
      } else if (hash === '#/compare') {
        setViewingUniversity(null);
        setActivePage('compare');
      } else if (hash === '#/roi-calculator') {
        setViewingUniversity(null);
        setActivePage('roi-calculator');
      } else if (hash === '#/emi-calculator') {
        setViewingUniversity(null);
        setActivePage('emi-calculator');
      } else if (hash === '#/ugc-verifier') {
        setViewingUniversity(null);
        setActivePage('ugc-verifier');
      } else {
        setViewingUniversity(null);
        setActivePage('home');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // On initial mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [universities]);

  const navigateTo = (pageName, uni = null) => {
    if (pageName === 'university' && uni) {
      setViewingUniversity(uni);
      window.location.hash = `#/university/${uni.slug}`;
    } else if (pageName === 'universities') {
      window.location.hash = `#/universities`;
    } else if (pageName === 'compare') {
      window.location.hash = `#/compare`;
    } else if (pageName === 'roi-calculator') {
      window.location.hash = `#/roi-calculator`;
    } else if (pageName === 'emi-calculator') {
      window.location.hash = `#/emi-calculator`;
    } else if (pageName === 'ugc-verifier') {
      window.location.hash = `#/ugc-verifier`;
    } else {
      window.location.hash = `#/`;
    }
  };

  // Filtered & Sorted Universities
  const filteredUniversities = useMemo(() => {
    return universities.filter(uni => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = uni.name.toLowerCase().includes(q) || uni.shortName.toLowerCase().includes(q);
        const matchesLocation = uni.city.toLowerCase().includes(q) || uni.state.toLowerCase().includes(q);
        const matchesCourse = uni.popularCourses.some(c => 
          c.name.toLowerCase().includes(q) || 
          c.degree.toLowerCase().includes(q) ||
          (c.specializations && c.specializations.some(s => s.toLowerCase().includes(q)))
        );
        if (!matchesName && !matchesLocation && !matchesCourse) return false;
      }

      // 2. Degree Filter
      if (selectedDegree !== 'All') {
        const hasDegree = uni.popularCourses.some(c => c.degree === selectedDegree);
        if (!hasDegree) return false;
      }

      // 3. NAAC Filter
      if (selectedNaac !== 'All') {
        if (!uni.accreditations.naacGrade.includes(selectedNaac)) return false;
      }

      // 4. Budget Filter
      const relevantCourse = uni.popularCourses.find(c => selectedDegree === 'All' ? true : c.degree === selectedDegree) || uni.popularCourses[0];
      if (relevantCourse && relevantCourse.totalFee > maxBudget) {
        return false;
      }

      // 5. 100% Online Exam Filter
      if (onlyOnlineExam && !uni.examMode.includes('100% Online')) {
        return false;
      }

      // 6. EMI Filter
      if (onlyEmi && !uni.emiAvailable) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.metrics.rating - a.metrics.rating;
      if (sortBy === 'highestCtc') return parseFloat(b.metrics.highestCtc) - parseFloat(a.metrics.highestCtc);
      if (sortBy === 'feeLowToHigh') {
        const aFee = a.popularCourses[0] ? a.popularCourses[0].totalFee : 0;
        const bFee = b.popularCourses[0] ? b.popularCourses[0].totalFee : 0;
        return aFee - bFee;
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [universities, searchQuery, selectedDegree, selectedNaac, maxBudget, onlyOnlineExam, onlyEmi, sortBy]);

  // Comparison Handlers
  const handleToggleCompare = (university) => {
    const exists = compareList.find(u => u.id === university.id);
    if (exists) {
      setCompareList(compareList.filter(u => u.id !== university.id));
    } else {
      if (compareList.length >= 4) {
        alert('You can compare up to 4 universities at a time. Please remove one first.');
        return;
      }
      setCompareList([...compareList, university]);
    }
  };

  const handleAddCompare = (university) => {
    if (!compareList.find(u => u.id === university.id) && compareList.length < 4) {
      setCompareList([...compareList, university]);
    }
  };

  const handleRemoveCompare = (uniId) => {
    setCompareList(compareList.filter(u => u.id !== uniId));
  };

  const handleResetFilters = () => {
    setSelectedDegree('All');
    setSelectedNaac('All');
    setMaxBudget(300000);
    setOnlyOnlineExam(false);
    setOnlyEmi(false);
    setSearchQuery('');
  };

  return (
    <div className="app-root">
      {/* Header Navigation */}
      <window.Header 
        onOpenWizard={() => setShowWizardModal(true)}
        onOpenCounselling={(data) => setLeadModalData(data || { title: 'Book 1-on-1 Free Expert Counselling' })}
        onOpenAdminCRM={() => setShowAdminCRM(true)}
        compareList={compareList}
        onOpenCompare={() => navigateTo('compare')}
        activePage={activePage}
        onNavigate={navigateTo}
      />

      {/* PAGE 1: DEDICATED SINGLE UNIVERSITY PAGE */}
      {activePage === 'university' && viewingUniversity && (
        <window.UniversityDetailPage 
          university={viewingUniversity}
          onBack={() => navigateTo('universities')}
          onOpenLeadModal={(data) => setLeadModalData(data)}
          onToggleCompare={handleToggleCompare}
          isComparing={!!compareList.find(item => item.id === viewingUniversity.id)}
          onSelectUniversity={(u) => navigateTo('university', u)}
        />
      )}

      {/* PAGE 2: DEDICATED ALL UNIVERSITIES DIRECTORY PAGE */}
      {activePage === 'universities' && (
        <window.AllUniversitiesPage 
          universities={filteredUniversities}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDegree={selectedDegree}
          onSelectDegree={setSelectedDegree}
          selectedNaac={selectedNaac}
          onSelectNaac={setSelectedNaac}
          maxBudget={maxBudget}
          onBudgetChange={setMaxBudget}
          onlyOnlineExam={onlyOnlineExam}
          onToggleOnlineExam={setOnlyOnlineExam}
          onlyEmi={onlyEmi}
          onToggleEmi={setOnlyEmi}
          onResetFilters={handleResetFilters}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onOpenUniversityPage={(u) => navigateTo('university', u)}
          onOpenLeadModal={(data) => setLeadModalData(data)}
          onToggleCompare={handleToggleCompare}
          compareList={compareList}
        />
      )}

      {/* PAGE 3: DEDICATED 4-WAY COMPARISON PAGE */}
      {activePage === 'compare' && (
        <window.ComparePage 
          compareList={compareList}
          onAddUniversity={handleAddCompare}
          onRemoveUniversity={handleRemoveCompare}
          onOpenLeadModal={(data) => setLeadModalData(data)}
          onOpenUniversityPage={(u) => navigateTo('university', u)}
        />
      )}

      {/* PAGE 4: DEDICATED ROI & SALARY GROWTH CALCULATOR PAGE */}
      {activePage === 'roi-calculator' && (
        <window.ROICalculatorPage 
          onOpenCounselling={(data) => setLeadModalData(data)}
        />
      )}

      {/* PAGE 5: DEDICATED 0% EMI & BUDGET PLANNER PAGE */}
      {activePage === 'emi-calculator' && (
        <window.EMICalculatorPage 
          onOpenCounselling={(data) => setLeadModalData(data)}
        />
      )}

      {/* PAGE 6: DEDICATED UGC-DEB APPROVALS & VALIDITY PAGE */}
      {activePage === 'ugc-verifier' && (
        <window.UGCVerifierPage 
          onOpenCounselling={(data) => setLeadModalData(data)}
        />
      )}

      {/* PAGE 7: HOMEPAGE */}
      {activePage === 'home' && (
        <>
          {/* Hero Section */}
          <window.HeroSection 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedDegree={selectedDegree}
            onSelectDegree={(deg) => {
              setSelectedDegree(deg);
              navigateTo('universities');
            }}
            onOpenWizard={() => setShowWizardModal(true)}
            onOpenCounselling={(data) => setLeadModalData(data)}
          />

          {/* Stats Bar */}
          <section className="stats-bar-section">
            <div className="container">
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>25+</h3>
                  <p>UGC-DEB Approved Universities</p>
                </div>
                <div className="stat-item">
                  <h3>50,000+</h3>
                  <p>Students Counseled & Enrolled</p>
                </div>
                <div className="stat-item">
                  <h3>₹35 LPA</h3>
                  <p>Highest Placement CTC</p>
                </div>
                <div className="stat-item">
                  <h3>100% Free</h3>
                  <p>Zero Agent Brokerage</p>
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated Tools Quick Navigation Cards */}
          <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)', paddingBottom: '2rem' }}>
            <div className="container">
              <div className="tools-showcase-grid">
                {/* Tool 1 */}
                <div className="tool-feature-card" onClick={() => setShowWizardModal(true)} style={{ cursor: 'pointer' }}>
                  <div>
                    <div className="tool-icon-wrap" style={{ background: '#fff7ed', color: '#ff7a00' }}>
                      <span style={{ fontSize: '1.5rem' }}>⚡</span>
                    </div>
                    <h3>AI College Finder Wizard</h3>
                    <p>Confused between 20+ universities? Answer 4 quick questions and get an instant AI match score.</p>
                  </div>
                  <span style={{ color: 'var(--orange-500)', fontWeight: '700', fontSize: '0.9rem' }}>
                    Launch 2-Min Wizard →
                  </span>
                </div>

                {/* Tool 2 */}
                <div className="tool-feature-card" onClick={() => navigateTo('roi-calculator')} style={{ cursor: 'pointer' }}>
                  <div>
                    <div className="tool-icon-wrap" style={{ background: '#ecfdf5', color: '#059669' }}>
                      <span style={{ fontSize: '1.5rem' }}>📈</span>
                    </div>
                    <h3>Course ROI & Salary Jump</h3>
                    <p>Calculate your estimated post-degree salary hike, payback period, and 5-year career returns.</p>
                  </div>
                  <span style={{ color: '#059669', fontWeight: '700', fontSize: '0.9rem' }}>
                    Go to ROI Calculator Page →
                  </span>
                </div>

                {/* Tool 3 */}
                <div className="tool-feature-card" onClick={() => navigateTo('emi-calculator')} style={{ cursor: 'pointer' }}>
                  <div>
                    <div className="tool-icon-wrap" style={{ background: '#eff6ff', color: '#1a56db' }}>
                      <span style={{ fontSize: '1.5rem' }}>💳</span>
                    </div>
                    <h3>0% Monthly EMI Planner</h3>
                    <p>Calculate zero-cost monthly installments and check instant scholarship eligibility.</p>
                  </div>
                  <span style={{ color: '#1a56db', fontWeight: '700', fontSize: '0.9rem' }}>
                    Go to EMI Planner Page →
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Universities Preview on Homepage */}
          <section id="universities-section" className="section-padding">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">🏫 Top Online Universities</span>
                <h2 className="section-title">Explore Top UGC-DEB Approved Online Universities</h2>
                <p className="section-subtitle">
                  Authentic NAAC grades, verified fee breakdowns, 0% EMI options, and real placement records.
                </p>
              </div>

              <div className="catalog-layout">
                {/* Left Filter Sidebar */}
                <window.FilterSidebar 
                  selectedDegree={selectedDegree}
                  onSelectDegree={setSelectedDegree}
                  selectedNaac={selectedNaac}
                  onSelectNaac={setSelectedNaac}
                  maxBudget={maxBudget}
                  onBudgetChange={setMaxBudget}
                  onlyOnlineExam={onlyOnlineExam}
                  onToggleOnlineExam={setOnlyOnlineExam}
                  onlyEmi={onlyEmi}
                  onToggleEmi={setOnlyEmi}
                  onResetFilters={handleResetFilters}
                />

                {/* Right University Cards */}
                <div>
                  <div className="catalog-content-header">
                    <div className="results-count">
                      Showing <strong>{filteredUniversities.length}</strong> Universities
                      {selectedDegree !== 'All' && <span style={{ color: 'var(--orange-500)' }}> for Online {selectedDegree}</span>}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigateTo('universities')}
                      >
                        View All Universities Page →
                      </button>
                    </div>
                  </div>

                  <div className="university-grid">
                    {filteredUniversities.slice(0, 6).map(uni => (
                      <window.UniversityCard 
                        key={uni.id}
                        university={uni}
                        selectedDegree={selectedDegree}
                        onViewDetails={(u) => navigateTo('university', u)}
                        onOpenLeadModal={(data) => setLeadModalData(data)}
                        onToggleCompare={handleToggleCompare}
                        isComparing={!!compareList.find(item => item.id === uni.id)}
                      />
                    ))}
                  </div>

                  {filteredUniversities.length > 6 && (
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                      <button 
                        className="btn btn-primary btn-lg"
                        onClick={() => navigateTo('universities')}
                      >
                        ⚡ View All {filteredUniversities.length} Universities on Dedicated Page →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Interactive ROI Calculator Section */}
          <window.ROICalculator 
            onOpenCounselling={(data) => setLeadModalData(data)}
          />

          {/* Interactive EMI Section */}
          <window.EMICalculator 
            onOpenCounselling={(data) => setLeadModalData(data)}
          />

          {/* Interactive UGC Section */}
          <window.UGCVerifier 
            onOpenCounselling={(data) => setLeadModalData(data)}
          />

          {/* Testimonials */}
          <window.TestimonialsSection 
            onOpenCounselling={(data) => setLeadModalData(data)}
          />
        </>
      )}

      {/* Footer */}
      <window.Footer 
        onNavigate={navigateTo}
        onOpenWizard={() => setShowWizardModal(true)}
        onOpenCounselling={(data) => setLeadModalData(data || { title: 'Book 1-on-1 Free Expert Counselling' })}
      />

      {/* Floating Compare Tray */}
      <div className={`compare-floating-tray ${compareList.length > 0 ? 'active' : ''}`}>
        <div className="compare-tray-thumbnails">
          {compareList.map(u => (
            <div key={u.id} className="compare-thumb" title={u.name}>
              {u.shortName.slice(0, 3).toUpperCase()}
              <div 
                className="compare-thumb-remove" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveCompare(u.id);
                }}
              >
                ✕
              </div>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>
            {compareList.length} / 4 Selected
          </div>
          <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
            {compareList.length < 2 ? 'Add 1 more to compare' : 'Ready to compare side-by-side'}
          </span>
        </div>

        <button 
          className="btn btn-primary btn-sm"
          disabled={compareList.length < 2}
          onClick={() => navigateTo('compare')}
        >
          Compare Now ({compareList.length}) →
        </button>
      </div>

      {/* Floating WhatsApp & Exit Popups */}
      <window.FloatingWidgets 
        onOpenCounselling={(data) => setLeadModalData(data)}
        onOpenWizard={() => setShowWizardModal(true)}
      />

      {/* MODALS */}
      {showWizardModal && (
        <window.AIWizardModal 
          onClose={() => setShowWizardModal(false)}
          onOpenLeadModal={(data) => {
            setShowWizardModal(false);
            setLeadModalData(data);
          }}
        />
      )}

      {leadModalData && (
        <window.LeadCaptureModal 
          initialData={leadModalData}
          onClose={() => setLeadModalData(null)}
          onSuccess={() => {}}
        />
      )}

      {showAdminCRM && (
        <window.LeadDashboardModal 
          onClose={() => setShowAdminCRM(false)}
        />
      )}
    </div>
  );
}

// Mount React Root
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
