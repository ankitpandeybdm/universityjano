// Full University Deep-Dive Profile Modal Component
window.UniversityDetailModal = function({ university, onClose, onOpenLeadModal }) {
  const [activeTab, setActiveTab] = React.useState('courses');

  if (!university) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog modal-xl" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header" style={{ padding: '1.25rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              background: '#f8fafc',
              border: `2px solid ${university.logoColor}`,
              color: university.logoColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '0.9rem'
            }}>
              {university.logoText}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span className="badge badge-success">✓ UGC-DEB Approved</span>
                <span className="badge badge-purple">NAAC {university.accreditations.naacGrade}</span>
                <span className="badge badge-blue">{university.accreditations.nirfRank}</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{university.name}</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                📍 {university.city}, {university.state} • Est. {university.foundedYear} • {university.universityType}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => onOpenLeadModal({
                title: `Apply for Admission at ${university.shortName}`,
                university: university.name,
                source: 'University Detail Modal Header CTA'
              })}
            >
              Apply for Admission
            </button>
            <button className="modal-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Modal Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', padding: '0 2rem', background: 'var(--bg-surface-alt)' }}>
          {[
            { id: 'courses', label: `🎓 Courses & Fees (${university.popularCourses.length})` },
            { id: 'placements', label: '💼 Placements & Recruiters' },
            { id: 'accreditations', label: '📜 Approvals & Recognition' },
            { id: 'pedagogy', label: '💻 LMS & Exam Mode' },
            { id: 'reviews', label: `⭐ Student Reviews (${university.metrics.rating}/5)` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.9rem 1.25rem',
                border: 'none',
                background: 'none',
                fontWeight: activeTab === tab.id ? '700' : '600',
                color: activeTab === tab.id ? 'var(--primary-600)' : 'var(--text-muted)',
                borderBottom: activeTab === tab.id ? '3px solid var(--primary-600)' : '3px solid transparent',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="modal-body">
          {/* TAB 1: Courses & Fees */}
          {activeTab === 'courses' && (
            <div>
              <h4 style={{ marginBottom: '1.25rem' }}>Online Degree Programs Offered</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {university.popularCourses.map(course => (
                  <div 
                    key={course.id}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      background: 'var(--bg-surface)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem' }}>
                          <span className="badge badge-blue">{course.level}</span>
                          <span className="badge badge-amber">{course.duration}</span>
                        </div>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-900)' }}>{course.name}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                          <strong>Eligibility:</strong> {course.eligibility}
                        </p>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary-600)' }}>
                          {window.helpers.formatINR(course.totalFee)}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          {window.helpers.formatINR(course.perSemFee)} / Semester
                        </div>
                        {course.monthlyEmi > 0 && (
                          <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: '700', marginTop: '2px' }}>
                            0% EMI @ ₹{course.monthlyEmi.toLocaleString('en-IN')}/mo
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Specializations List */}
                    {course.specializations && (
                      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-light)' }}>
                        <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem', color: 'var(--primary-900)' }}>
                          Available Specializations ({course.specializations.length}):
                        </strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {course.specializations.map(spec => (
                            <span key={spec} style={{
                              padding: '0.2rem 0.6rem',
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

                    {/* Highlights */}
                    {course.keyHighlights && (
                      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                        {course.keyHighlights.map((h, i) => (
                          <span key={i}>✓ {h}</span>
                        ))}
                      </div>
                    )}

                    <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => onOpenLeadModal({
                          title: `Download ${course.name} Syllabus`,
                          university: university.name,
                          course: course.name,
                          type: 'prospectus',
                          source: 'University Detail - Syllabus CTA'
                        })}
                      >
                        📥 Download Syllabus PDF
                      </button>

                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => onOpenLeadModal({
                          title: `Enroll in ${course.name}`,
                          university: university.name,
                          course: course.name,
                          source: 'University Detail - Course Enroll CTA'
                        })}
                      >
                        Apply for this Course →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Placements */}
          {activeTab === 'placements' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1.5rem', background: 'var(--primary-50)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Highest CTC</span>
                  <h3 style={{ fontSize: '1.85rem', color: 'var(--primary-700)', margin: '0.25rem 0' }}>₹{university.metrics.highestCtc}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>International & Domestic</span>
                </div>

                <div style={{ padding: '1.5rem', background: 'var(--accent-emerald-bg)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Average CTC</span>
                  <h3 style={{ fontSize: '1.85rem', color: 'var(--accent-emerald)', margin: '0.25rem 0' }}>₹{university.metrics.avgCtc}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Across MBA & MCA batches</span>
                </div>

                <div style={{ padding: '1.5rem', background: 'var(--accent-amber-bg)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Hiring Partners</span>
                  <h3 style={{ fontSize: '1.85rem', color: 'var(--accent-amber)', margin: '0.25rem 0' }}>{university.metrics.hiringPartnersCount}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Fortune 500 & Unicorn Startups</span>
                </div>
              </div>

              <h4>Top Recruiting Companies</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1rem 0 2rem 0' }}>
                {university.topRecruiters.map(rec => (
                  <span key={rec} style={{
                    padding: '0.5rem 1rem',
                    background: '#ffffff',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    color: 'var(--primary-900)'
                  }}>
                    🏢 {rec}
                  </span>
                ))}
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Placement Assistance Services Included</h4>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>Dedicated Placement Cell with 1-on-1 career mapping</li>
                  <li>Virtual Job Fairs conducted twice a year with 300+ recruiters</li>
                  <li>Live AI-powered resume building & LinkedIn profile optimization</li>
                  <li>Technical & HR Mock Interviews with senior industry leaders</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: Accreditations */}
          {activeTab === 'accreditations' && (
            <div>
              <h4>Government Recognitions & Accreditations</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
                <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                  <span className="badge badge-success" style={{ marginBottom: '0.5rem' }}>UGC-DEB</span>
                  <strong>{university.accreditations.ugcDebYear}</strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    100% entitled to offer online degrees in accordance with UGC Regulations.
                  </p>
                </div>

                <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                  <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>NAAC Grade</span>
                  <strong>Grade {university.accreditations.naacGrade} ({university.accreditations.naacScore})</strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Accredited with premier grade ensuring highest institutional quality.
                  </p>
                </div>

                <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                  <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>NIRF Ranking</span>
                  <strong>{university.accreditations.nirfRank}</strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Official ranking by the Ministry of Education, Govt. of India.
                  </p>
                </div>

                {university.accreditations.wesRecognized && (
                  <div style={{ padding: '1.25rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                    <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>WES (USA/Canada)</span>
                    <strong>World Education Services Recognized</strong>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      Valid for Canadian PR, US visa, and global higher studies evaluation.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: Pedagogy & LMS */}
          {activeTab === 'pedagogy' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', background: 'var(--primary-50)', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ color: 'var(--primary-900)', marginBottom: '0.5rem' }}>🖥️ Examination Methodology</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {university.examMode}
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    <li>No need to visit any exam center</li>
                    <li>Dual-camera AI & human proctoring</li>
                    <li>Flexible weekend time slots</li>
                  </ul>
                </div>

                <div style={{ padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ color: 'var(--primary-900)', marginBottom: '0.5rem' }}>📱 Learning Pedagogy & LMS</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {university.learningPedagogy}
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    <li>Mobile App support for iOS & Android</li>
                    <li>Downloadable offline study notes</li>
                    <li>Weekly doubt clearing masterclasses</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Reviews */}
          {activeTab === 'reviews' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-amber)', margin: 0 }}>★ {university.metrics.rating}</h2>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Based on {university.metrics.reviewCount} Reviews</span>
                </div>

                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Faculty Quality:</span>
                    <strong> {university.studentReviewsRatingBreakdown.faculty} / 5.0</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LMS Experience:</span>
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

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => onOpenLeadModal({
                    title: `Speak with Alumni of ${university.shortName}`,
                    university: university.name,
                    source: 'Alumni Connect CTA'
                  })}
                >
                  💬 Connect with Alumni & Current Students
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
