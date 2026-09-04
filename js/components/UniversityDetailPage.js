// Dedicated Full University Profile Page Component
window.UniversityDetailPage = function({ 
  university, 
  onBack, 
  onOpenLeadModal, 
  onToggleCompare, 
  isComparing,
  onSelectUniversity 
}) {
  const [activeTab, setActiveTab] = React.useState('courses');
  const allUniversities = window.UNIVERSITIES_DATA || [];
  
  // Find similar alternative universities
  const similarUniversities = allUniversities.filter(u => u.id !== university.id).slice(0, 3);

  if (!university) return null;

  return (
    <div className="uni-detail-page">
      {/* Campus Hero Cover Banner */}
      <div 
        className="uni-hero-banner" 
        style={{ backgroundImage: `url(${university.heroImage})` }}
      >
        <div className="container" style={{ height: '100%' }}>
          <div className="uni-hero-content">
            <div className="uni-hero-left">
              {/* University Logo Box */}
              <div 
                className="uni-hero-avatar"
                style={{ color: university.logoColor, borderColor: university.logoColor }}
              >
                {university.logoText}
              </div>

              {/* Text Info */}
              <div className="uni-hero-text">
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-success">✓ UGC-DEB Approved</span>
                  <span className="badge badge-purple">NAAC {university.accreditations.naacGrade} ({university.accreditations.naacScore})</span>
                  <span className="badge badge-blue">{university.accreditations.nirfRank}</span>
                  {university.accreditations.wesRecognized && (
                    <span className="badge badge-orange">WES Recognized</span>
                  )}
                </div>

                <h1>{university.name}</h1>
                <p>
                  📍 {university.city}, {university.state} • Est. {university.foundedYear} • {university.universityType}
                </p>
              </div>
            </div>

            {/* Top Right Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => onToggleCompare(university)}
              >
                {isComparing ? '✓ In Comparison List' : '+ Add to Compare'}
              </button>

              <button 
                className="btn btn-primary"
                onClick={() => onOpenLeadModal({
                  title: `Apply to ${university.shortName}`,
                  university: university.name,
                  source: 'University Page Hero CTA'
                })}
              >
                ⚡ Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky In-Page Sub-Navigation Bar */}
      <div className="uni-page-nav-bar">
        <div className="container uni-page-nav-inner">
          <button 
            className="btn btn-sm"
            style={{ marginRight: '1rem', background: 'var(--bg-surface-alt)', border: '1px solid var(--border-light)' }}
            onClick={onBack}
          >
            ← Back to Directory
          </button>

          {[
            { id: 'courses', label: `🎓 Courses & Fees (${university.popularCourses.length})` },
            { id: 'about', label: '🏛️ About University' },
            { id: 'placements', label: '💼 Placements & Recruiters' },
            { id: 'approvals', label: '📜 Accreditations' },
            { id: 'pedagogy', label: '💻 LMS & Exams' },
            { id: 'reviews', label: `⭐ Student Reviews (${university.metrics.rating}/5)` },
            { id: 'similar', label: '⚖️ Similar Universities' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`uni-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab.id);
                const el = document.getElementById(`uni-sec-${tab.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Page Layout Grid */}
      <div className="container">
        <div className="uni-detail-layout">
          {/* Main Left Column */}
          <div className="uni-detail-main">
            {/* Section 1: Key Highlights & Quick Stats */}
            <div className="uni-detail-section-card" id="uni-sec-about">
              <h2>🏛️ About {university.name}</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                {university.tagline}. {university.name} is one of India's premier higher education institutions, fully entitled by the University Grants Commission (UGC) and Distance Education Bureau (DEB) to offer online degree programs with 100% online examinations and worldwide recognition.
              </p>

              {/* Quick Metrics 4-Box */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: '600' }}>NAAC Grade</span>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--navy-900)' }}>{university.accreditations.naacGrade}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{university.accreditations.naacScore}</span>
                </div>

                <div style={{ padding: '1rem', background: 'var(--orange-50)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--orange-600)', textTransform: 'uppercase', fontWeight: '600' }}>Highest Package</span>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--orange-600)' }}>₹{university.metrics.highestCtc}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Placement Drive</span>
                </div>

                <div style={{ padding: '1rem', background: 'var(--accent-emerald-bg)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', textTransform: 'uppercase', fontWeight: '600' }}>Average CTC</span>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--accent-emerald)' }}>₹{university.metrics.avgCtc}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Across Programs</span>
                </div>

                <div style={{ padding: '1rem', background: 'var(--blue-50)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--blue-600)', textTransform: 'uppercase', fontWeight: '600' }}>Learners</span>
                  <strong style={{ display: 'block', fontSize: '1.25rem', color: 'var(--blue-600)' }}>{university.metrics.studentEnrolled}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Network</span>
                </div>
              </div>
            </div>

            {/* Section 2: Complete Courses & Fees Breakdown */}
            <div className="uni-detail-section-card" id="uni-sec-courses">
              <h2>🎓 Online Courses Offered & Complete Fee Structure</h2>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                All fee plans include study material, LMS access, online examinations, and dedicated placement assistance with 0% interest monthly EMI.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {university.popularCourses.map(course => (
                  <div 
                    key={course.id}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.75rem',
                      background: '#ffffff',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                          <span className="badge badge-blue">{course.level}</span>
                          <span className="badge badge-orange">{course.duration}</span>
                          <span className="badge badge-success">Proctored Online Exam</span>
                        </div>
                        <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)' }}>{course.name}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                          <strong>Eligibility Criteria:</strong> {course.eligibility}
                        </p>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--orange-500)' }}>
                          {window.helpers.formatINR(course.totalFee)}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          {window.helpers.formatINR(course.perSemFee)} / Semester
                        </div>
                        {course.monthlyEmi > 0 && (
                          <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: '700', marginTop: '2px' }}>
                            0% EMI @ ₹{course.monthlyEmi.toLocaleString('en-IN')}/month
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Specializations */}
                    {course.specializations && (
                      <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-light)' }}>
                        <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem', color: 'var(--navy-900)' }}>
                          Available Specializations ({course.specializations.length}):
                        </strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {course.specializations.map(spec => (
                            <span key={spec} style={{
                              padding: '0.25rem 0.65rem',
                              background: 'var(--bg-surface-alt)',
                              borderRadius: '4px',
                              fontSize: '0.8rem',
                              color: 'var(--text-main)',
                              border: '1px solid var(--border-light)'
                            }}>
                              • {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Course Highlights */}
                    {course.keyHighlights && (
                      <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                        {course.keyHighlights.map((h, i) => (
                          <span key={i}>✓ {h}</span>
                        ))}
                      </div>
                    )}

                    {/* Action buttons */}
                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => onOpenLeadModal({
                          title: `Download ${course.name} Syllabus & Fees`,
                          university: university.name,
                          course: course.name,
                          type: 'prospectus',
                          source: 'University Page - Syllabus Button'
                        })}
                      >
                        📥 Download Syllabus PDF
                      </button>

                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => onOpenLeadModal({
                          title: `Enroll in ${course.name} at ${university.shortName}`,
                          university: university.name,
                          course: course.name,
                          source: 'University Page - Enroll Course Button'
                        })}
                      >
                        Apply for Admission →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Placements & Top Recruiters */}
            <div className="uni-detail-section-card" id="uni-sec-placements">
              <h2>💼 Placement Assistance & Top Hiring Partners</h2>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Students of {university.name} participate in virtual job fairs and receive 1-on-1 interview preparation support.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {university.topRecruiters.map(rec => (
                  <span key={rec} style={{
                    padding: '0.6rem 1.2rem',
                    background: '#ffffff',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: '700',
                    fontSize: '0.925rem',
                    color: 'var(--navy-900)',
                    boxShadow: 'var(--shadow-xs)'
                  }}>
                    🏢 {rec}
                  </span>
                ))}
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>🎯 Dedicated Career Support Features:</h4>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>Resume Building & LinkedIn profile optimization workshops with industry HR leads</li>
                  <li>Access to Job Portal with 500+ active job openings updated weekly</li>
                  <li>Mock technical interviews and communication grooming sessions</li>
                  <li>Exclusive virtual placement drives with leading MNCs and Fortune 500 companies</li>
                </ul>
              </div>
            </div>

            {/* Section 4: Accreditations & Approvals */}
            <div className="uni-detail-section-card" id="uni-sec-approvals">
              <h2>📜 Accreditations & Legal Government Approvals</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', background: '#ffffff' }}>
                  <span className="badge badge-success" style={{ marginBottom: '0.5rem' }}>UGC-DEB</span>
                  <strong>{university.accreditations.ugcDebYear}</strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    100% entitled for online degrees equivalent to regular on-campus degrees.
                  </p>
                </div>

                <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', background: '#ffffff' }}>
                  <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>NAAC Grade</span>
                  <strong>Grade {university.accreditations.naacGrade} ({university.accreditations.naacScore})</strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    National Assessment & Accreditation Council premier certification.
                  </p>
                </div>

                <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', background: '#ffffff' }}>
                  <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>NIRF Rank</span>
                  <strong>{university.accreditations.nirfRank}</strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Ranked by the Ministry of Education, Government of India.
                  </p>
                </div>

                {university.accreditations.wesRecognized && (
                  <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', background: '#ffffff' }}>
                    <span className="badge badge-orange" style={{ marginBottom: '0.5rem' }}>WES (USA/Canada)</span>
                    <strong>Global Recognition</strong>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      Valid for Canadian PR and international higher education.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Section 5: LMS & Proctored Examination */}
            <div className="uni-detail-section-card" id="uni-sec-pedagogy">
              <h2>💻 Learning Management System & Exam Mode</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ padding: '1.5rem', background: 'var(--orange-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--orange-100)' }}>
                  <h4 style={{ color: 'var(--orange-600)', marginBottom: '0.5rem' }}>🏠 100% Online Examination</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {university.examMode}
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    <li>Take exams comfortably from home on your laptop</li>
                    <li>AI & Human webcam proctoring for integrity</li>
                    <li>Flexible slot selection on weekends</li>
                  </ul>
                </div>

                <div style={{ padding: '1.5rem', background: 'var(--blue-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--blue-100)' }}>
                  <h4 style={{ color: 'var(--blue-600)', marginBottom: '0.5rem' }}>📱 Mobile LMS & Masterclasses</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {university.learningPedagogy}
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    <li>24/7 access to recorded HD video lectures</li>
                    <li>Downloadable e-books & study notes</li>
                    <li>Live weekend doubt solving sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: Student Reviews & Ratings */}
            <div className="uni-detail-section-card" id="uni-sec-reviews">
              <h2>⭐ Student Reviews & Verified Ratings</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ fontSize: '2.75rem', color: 'var(--orange-500)', margin: 0 }}>★ {university.metrics.rating}</h2>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Based on {university.metrics.reviewCount} Verified Reviews</span>
                </div>

                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Faculty Quality:</span>
                    <strong> {university.studentReviewsRatingBreakdown.faculty} / 5.0</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LMS Portal:</span>
                    <strong> {university.studentReviewsRatingBreakdown.lms} / 5.0</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Placement Cell:</span>
                    <strong> {university.studentReviewsRatingBreakdown.placementSupport} / 5.0</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Value for Money:</span>
                    <strong> {university.studentReviewsRatingBreakdown.valueForMoney} / 5.0</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Similar Alternative Universities */}
            <div className="uni-detail-section-card" id="uni-sec-similar">
              <h2>⚖️ Compare with Alternative Online Universities</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                {similarUniversities.map(alt => (
                  <div 
                    key={alt.id}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem',
                      background: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: '#f8fafc',
                          border: `1px solid ${alt.logoColor}`,
                          color: alt.logoColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          fontSize: '0.75rem'
                        }}>
                          {alt.logoText}
                        </div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--navy-900)' }}>{alt.shortName}</strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>NAAC {alt.accreditations.naacGrade}</span>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        Starting Fee: <strong>{window.helpers.formatINR(alt.popularCourses[0].totalFee)}</strong>
                      </div>
                    </div>

                    <button 
                      className="btn btn-secondary btn-sm btn-block"
                      onClick={() => onSelectUniversity(alt)}
                    >
                      View {alt.shortName} →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Right Column: Admission & Lead Capture Box */}
          <div className="uni-sticky-sidebar">
            <div className="sidebar-lead-card">
              <span className="badge badge-orange" style={{ marginBottom: '0.5rem' }}>
                ⚡ Free Expert Consultation
              </span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                Talk to {university.shortName} Advisor
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Get answers regarding eligibility, batch start dates, scholarship fee waivers, and EMI approvals.
              </p>

              <button 
                className="btn btn-primary btn-block btn-lg"
                onClick={() => onOpenLeadModal({
                  title: `Apply to ${university.shortName}`,
                  university: university.name,
                  source: 'University Page Sticky Sidebar'
                })}
              >
                Apply for Admission →
              </button>

              <button 
                className="btn btn-secondary btn-block"
                style={{ marginTop: '0.75rem' }}
                onClick={() => onOpenLeadModal({
                  title: `Download ${university.shortName} Official Prospectus`,
                  university: university.name,
                  type: 'prospectus',
                  source: 'University Page Sticky Prospectus'
                })}
              >
                📥 Download Prospectus PDF
              </button>

              <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                  📞 Helpline: <strong>1800-890-5266</strong> (Toll-Free)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
