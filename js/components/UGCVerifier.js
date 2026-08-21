// Interactive Government UGC-DEB & Degree Validity Inspector Component
window.UGCVerifier = function({ onOpenCounselling }) {
  const [activeTab, setActiveTab] = React.useState('validity');
  const data = window.ACCREDITATIONS_DATA;

  return (
    <section id="ugc-section" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🛡️ 100% Genuine & Legitimate</span>
          <h2 className="section-title">UGC-DEB Government Approval & Degree Validity Inspector</h2>
          <p className="section-subtitle">
            Understand how online degrees are recognized by the Government of India, UPSC, Corporate MNCs, and Global WES Evaluation.
          </p>
        </div>

        {/* UGC Gazette Quote Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0a1128 0%, #1e3a8a 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          color: '#ffffff',
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>
              📜 Official Gazette of India Mandate
            </span>
            <span style={{ fontSize: '0.85rem', color: '#93c5fd' }}>
              {data.ugcDebNotice.source}
            </span>
          </div>

          <blockquote style={{
            fontSize: '1.25rem',
            fontStyle: 'italic',
            lineHeight: '1.6',
            color: '#f8fafc',
            borderLeft: '4px solid #34d399',
            paddingLeft: '1.5rem',
            margin: '1.5rem 0'
          }}>
            "{data.ugcDebNotice.officialGazetteQuote}"
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ fontSize: '0.9rem', color: '#93c5fd' }}>
              ⚖️ <strong>Legal Summary:</strong> Online degrees awarded by UGC-DEB recognized universities carry 100% identical legal validity as on-campus degrees.
            </div>
            <button 
              className="btn btn-accent btn-sm"
              onClick={() => onOpenCounselling({
                title: 'Verify University UGC-DEB Letter with Expert',
                source: 'UGC Gazette Header CTA'
              })}
            >
              Verify University Approval Letter
            </button>
          </div>
        </div>

        {/* Validity Dimensions 4-Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {data.ugcDebNotice.validityPoints.map((pt, idx) => (
            <div 
              key={idx}
              style={{
                background: 'var(--bg-surface-alt)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'var(--primary-100)',
                color: 'var(--primary-600)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                marginBottom: '1rem'
              }}>
                {idx === 0 ? '🏛️' : idx === 1 ? '🏢' : idx === 2 ? '🌐' : '💻'}
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-900)' }}>
                {pt.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {pt.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accreditation Bodies Overview */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            Accreditation Pillars to Check Before Enrolling
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {data.accreditationTypes.map(acc => (
              <div 
                key={acc.code}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <span className="badge" style={{ backgroundColor: acc.badgeColor, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {acc.code}
                </span>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--primary-900)', margin: '0.35rem 0' }}>
                  {acc.fullName}
                </strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {acc.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Frequently Asked Questions on Online Degrees
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.frequentlyAskedQuestions.map((faq, fIdx) => (
              <div 
                key={fIdx}
                style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}
              >
                <h4 style={{ fontSize: '1rem', color: 'var(--primary-900)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>❓</span> {faq.q}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.5rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
