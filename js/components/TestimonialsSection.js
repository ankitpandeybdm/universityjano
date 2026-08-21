// Student Testimonials & Career Transformation Stories Component
window.TestimonialsSection = function({ onOpenCounselling }) {
  const reviews = window.REVIEWS_DATA || [];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag green">🌟 Real Career Impact</span>
          <h2 className="section-title">50,000+ Students Transformed Their Careers</h2>
          <p className="section-subtitle">
            Read real, verified experiences from working professionals who accelerated their careers with UGC-approved online degrees.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3rem'
        }}>
          {reviews.map(rev => (
            <div 
              key={rev.id}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header: Student Info & University */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img 
                    src={rev.avatar} 
                    alt={rev.studentName}
                    style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <strong style={{ fontSize: '1.05rem', display: 'block', color: 'var(--primary-900)' }}>
                      {rev.studentName}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary-600)', fontWeight: '600' }}>
                      {rev.course}
                    </span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                      {rev.university}
                    </div>
                  </div>
                </div>

                {/* Salary Jump Metric Pill */}
                <div style={{
                  background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                  border: '1px solid #a7f3d0',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: '#065f46', fontWeight: '600', textTransform: 'uppercase' }}>
                      Career Transition
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#059669' }}>
                      🚀 {rev.salaryHike}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#1f2937', marginTop: '0.35rem' }}>
                    <div style={{ textDecoration: 'line-through', color: '#6b7280' }}>
                      Before: {rev.previousRole}
                    </div>
                    <div style={{ fontWeight: '700', color: '#065f46' }}>
                      After: {rev.currentRole}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Footer info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: '600' }}>
                  ✓ Verified Alumni
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0a1128 0%, #1e40af 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          color: '#ffffff',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.85rem', marginBottom: '0.5rem' }}>
            Ready to Write Your Career Transformation Story?
          </h3>
          <p style={{ color: '#93c5fd', maxWidth: '650px', margin: '0 auto 1.5rem auto' }}>
            Book a free 1-on-1 counseling session with India's top online education counselors. No fees, no obligations.
          </p>
          <button 
            className="btn btn-amber btn-lg"
            onClick={() => onOpenCounselling({
              title: 'Get Free Career Consultation & University Shortlist',
              source: 'Testimonials Bottom CTA'
            })}
          >
            🎯 Book Free Counselling Now →
          </button>
        </div>
      </div>
    </section>
  );
};
