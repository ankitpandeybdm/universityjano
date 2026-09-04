// Filter Sidebar Component for Multi-Facet University Searching
window.FilterSidebar = function({
  selectedDegree,
  onSelectDegree,
  selectedNaac,
  onSelectNaac,
  maxBudget,
  onBudgetChange,
  onlyOnlineExam,
  onToggleOnlineExam,
  onlyEmi,
  onToggleEmi,
  onResetFilters
}) {
  const degrees = [
    { id: 'All', label: 'All Degrees' },
    { id: 'MBA', label: 'Online MBA' },
    { id: 'MCA', label: 'Online MCA' },
    { id: 'BBA', label: 'Online BBA' },
    { id: 'BCA', label: 'Online BCA' },
    { id: 'M.Sc', label: 'Online M.Sc (Data Science)' },
    { id: 'B.Com', label: 'Online B.Com' },
    { id: 'M.Tech', label: 'M.Tech (Working Execs)' }
  ];

  const naacGrades = ['All', 'A++', 'A+'];

  return (
    <aside className="filter-card">
      <div className="filter-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.1rem' }}>⚙️</span>
          <h4 style={{ margin: 0 }}>Filter Colleges</h4>
        </div>
        <button 
          onClick={onResetFilters}
          style={{ background: 'none', border: 'none', color: 'var(--primary-600)', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' }}
        >
          Reset All
        </button>
      </div>

      {/* Filter 1: Degree Level */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Degree Program</span>
        </div>
        <div className="filter-options">
          {degrees.map(d => (
            <label key={d.id} className="filter-label">
              <input 
                type="radio" 
                name="degreeRadio"
                checked={selectedDegree === d.id}
                onChange={() => onSelectDegree(d.id)}
              />
              <span>{d.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter 2: Max Budget Range */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Maximum Total Fee</span>
          <span style={{ color: 'var(--primary-600)' }}>{window.helpers.formatINR(maxBudget)}</span>
        </div>
        <div className="slider-container">
          <input 
            type="range"
            min="40000"
            max="300000"
            step="10000"
            value={maxBudget}
            onChange={(e) => onBudgetChange(Number(e.target.value))}
            className="slider-input"
          />
          <div className="slider-val-display">
            <span>₹40,000</span>
            <span>₹3.0 Lakhs</span>
          </div>
        </div>
      </div>

      {/* Filter 3: NAAC Accreditation */}
      <div className="filter-group">
        <div className="filter-title">
          <span>NAAC Grade</span>
        </div>
        <div className="filter-options">
          {naacGrades.map(grade => (
            <label key={grade} className="filter-label">
              <input 
                type="radio" 
                name="naacRadio"
                checked={selectedNaac === grade}
                onChange={() => onSelectNaac(grade)}
              />
              <span>{grade === 'All' ? 'All Accredited' : `NAAC ${grade} Rated Only`}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter 4: Exam & Payment Features */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Preferences & Features</span>
        </div>
        <div className="filter-options">
          <label className="filter-label">
            <input 
              type="checkbox"
              checked={onlyOnlineExam}
              onChange={(e) => onToggleOnlineExam(e.target.checked)}
            />
            <span>🏠 100% Online Exam (At Home)</span>
          </label>

          <label className="filter-label">
            <input 
              type="checkbox"
              checked={onlyEmi}
              onChange={(e) => onToggleEmi(e.target.checked)}
            />
            <span>💳 0% Interest Monthly EMI</span>
          </label>
        </div>
      </div>

      {/* Quick Assistance Box */}
      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: 'var(--primary-50)',
        borderRadius: 'var(--radius-md)',
        border: '1px dashed var(--primary-200)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>👨‍🏫</div>
        <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--primary-900)' }}>
          Need Expert Recommendation?
        </strong>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.35rem 0 0.75rem 0' }}>
          Talk to our senior admission counselors for free.
        </p>
        <button 
          className="btn btn-primary btn-sm btn-block"
          onClick={() => window.open('https://wa.me/919876543210?text=Hi%20UniversityJano,%20I%20need%20help%20choosing%20an%20online%20degree', '_blank')}
        >
          💬 WhatsApp Counselor
        </button>
      </div>
    </aside>
  );
};
