// University Card Component
window.UniversityCard = function({ 
  university, 
  selectedDegree, 
  onViewDetails, 
  onOpenLeadModal, 
  onToggleCompare, 
  isComparing 
}) {
  const currentCourse = university.popularCourses.find(c => selectedDegree === 'All' ? true : c.degree === selectedDegree) || university.popularCourses[0];

  return (
    <div className="uni-card">
      {/* Featured ribbon or popular badge */}
      {university.badge && (
        <div style={{
          position: 'absolute',
          top: 0,
          right: '1.5rem',
          background: university.featured ? 'linear-gradient(135deg, #ff7a00, #ff9100)' : 'var(--navy-800)',
          color: '#ffffff',
          padding: '0.2rem 0.75rem',
          borderBottomLeftRadius: '6px',
          borderBottomRightRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: '700',
          boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
          zIndex: 2
        }}>
          ⭐ {university.badge}
        </div>
      )}

      <div className="uni-card-body">
        {/* Column 1: Logo & Rating */}
        <div className="uni-logo-col">
          <div 
            className="uni-logo-box" 
            style={{ borderColor: university.logoColor, color: university.logoColor }}
            onClick={() => onViewDetails(university)}
            role="button"
            tabIndex={0}
          >
            {university.logoText}
          </div>

          <div className="uni-rating-tag">
            <span>★ {university.metrics.rating}</span>
            <span style={{ color: 'var(--text-subtle)', fontWeight: '400', fontSize: '0.75rem' }}>
              ({university.metrics.reviewCount})
            </span>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>
              ✓ UGC-DEB Verified
            </span>
          </div>
        </div>

        {/* Column 2: University & Course Details */}
        <div className="uni-info-col">
          <h3 onClick={() => onViewDetails(university)}>
            {university.name}
          </h3>

          <div className="uni-meta-location">
            <span>📍 {university.city}, {university.state}</span>
            <span>•</span>
            <span>Est. {university.foundedYear}</span>
            <span>•</span>
            <span style={{ color: 'var(--blue-600)', fontWeight: '600' }}>{university.universityType}</span>
          </div>

          {/* Accreditations Badges */}
          <div className="uni-accreditations-row">
            <span className="badge badge-purple">
              🏆 NAAC {university.accreditations.naacGrade} ({university.accreditations.naacScore})
            </span>
            <span className="badge badge-blue">
              📜 {university.accreditations.nirfRank}
            </span>
            {university.accreditations.wesRecognized && (
              <span className="badge badge-orange">
                🌐 WES (USA/Canada)
              </span>
            )}
            {university.accreditations.aicteApproved && (
              <span className="badge badge-success">
                ⚙️ AICTE Approved
              </span>
            )}
          </div>

          {/* Perks list */}
          <ul className="uni-perks-list">
            <li>
              <span>💻</span> {university.examMode.includes('100% Online') ? '100% Online Exam from Home' : 'Center Exam'}
            </li>
            <li>
              <span>⚡</span> {currentCourse.specializations ? `${currentCourse.specializations.length}+ Specializations` : 'Industry Curriculum'}
            </li>
            <li>
              <span>🤝</span> {university.metrics.hiringPartnersCount} Hiring Partners
            </li>
          </ul>
        </div>

        {/* Column 3: Fees & Placement CTC */}
        <div className="uni-stats-col">
          <div className="stat-metric-block">
            <div className="metric-label">Course: Online {currentCourse.degree}</div>
            <div className="metric-value price">
              {window.helpers.formatINR(currentCourse.totalFee)}
            </div>
            <div className="metric-sub">
              {window.helpers.formatINR(currentCourse.perSemFee)} / Semester
            </div>
          </div>

          <div className="stat-metric-block">
            <div className="metric-label">Placement Record</div>
            <div className="metric-value">
              ₹{university.metrics.highestCtc} <span style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-muted)' }}>Highest</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Avg: ₹{university.metrics.avgCtc}
            </div>
          </div>
        </div>

        {/* Column 4: CTAs & Compare Toggle */}
        <div className="uni-actions-col">
          <button 
            className="btn btn-primary btn-block"
            onClick={() => onOpenLeadModal({ 
              title: `Apply to ${university.shortName}`, 
              university: university.name, 
              course: `Online ${currentCourse.degree}`,
              source: 'University Card - Apply Button'
            })}
          >
            Apply for Admission
          </button>

          <button 
            className="btn btn-secondary btn-block btn-sm"
            onClick={() => onOpenLeadModal({ 
              title: `Download ${university.shortName} Prospectus & Syllabus`, 
              university: university.name, 
              course: `Online ${currentCourse.degree}`,
              type: 'prospectus',
              source: 'University Card - Download Brochure'
            })}
          >
            📥 Download Prospectus
          </button>

          <button 
            className="btn btn-sm"
            style={{ background: 'transparent', color: 'var(--orange-600)', border: 'none', padding: '0.25rem', fontWeight: '700' }}
            onClick={() => onViewDetails(university)}
          >
            Explore Full University Page →
          </button>

          {/* Add to comparison */}
          <label className="compare-checkbox-label">
            <input 
              type="checkbox"
              checked={isComparing}
              onChange={() => onToggleCompare(university)}
            />
            <span>{isComparing ? '✓ Comparing' : '+ Add to Compare'}</span>
          </label>
        </div>
      </div>
    </div>
  );
};
