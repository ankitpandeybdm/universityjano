// Dedicated UGC-DEB Government Approval & Degree Validity Full Page Component
window.UGCVerifierPage = function({ onOpenCounselling }) {
  const data = window.ACCREDITATIONS_DATA;

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '2.5rem 0 4.5rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}>Home</span>
          <span>/</span>
          <span style={{ color: 'var(--orange-500)', fontWeight: '700' }}>UGC-DEB Government Approvals & Legal Validity</span>
        </div>

        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag green">🛡️ 100% Genuine & Legitimate</span>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
            UGC-DEB Government Approval & Degree Validity Inspector
          </h1>
          <p className="section-subtitle">
            Understand how online degrees are officially recognized by the Government of India, UPSC, Corporate MNCs, and Global WES Evaluation.
          </p>
        </div>

        {/* UGC Gazette Card */}
        <div style={{
          background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          color: '#ffffff',
          marginBottom: '3rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>
              📜 Official Gazette of India Mandate
            </span>
            <span style={{ fontSize: '0.85rem', color: '#fed7aa' }}>
              {data.ugcDebNotice.source}
            </span>
          </div>

          <blockquote style={{
            fontSize: '1.25rem',
            fontStyle: 'italic',
            lineHeight: '1.6',
            color: '#f8fafc',
            borderLeft: '4px solid var(--orange-500)',
            paddingLeft: '1.5rem',
            margin: '1.5rem 0'
          }}>
            "{data.ugcDebNotice.officialGazetteQuote}"
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>
              ⚖️ <strong>Legal Summary:</strong> Online degrees awarded by UGC-DEB recognized universities carry 100% identical legal validity as on-campus degrees.
            </div>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => onOpenCounselling({
                title: 'Verify University UGC-DEB Entitlement Letter',
                source: 'UGC Page Gazette Header CTA'
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
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-xs)'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--orange-50)',
                color: 'var(--orange-600)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                marginBottom: '1rem'
              }}>
                {idx === 0 ? '🏛️' : idx === 1 ? '🏢' : idx === 2 ? '🌐' : '💻'}
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--navy-900)' }}>
                {pt.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {pt.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accreditation Bodies Overview */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.75rem', color: 'var(--navy-900)' }}>
            Key Regulatory Pillars to Verify Before Enrolling
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {data.accreditationTypes.map(acc => (
              <div 
                key={acc.code}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <span className="badge" style={{ backgroundColor: acc.badgeColor, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {acc.code}
                </span>
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--navy-900)', margin: '0.35rem 0' }}>
                  {acc.fullName}
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  {acc.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div style={{ maxWidth: '880px', margin: '0 auto', background: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.75rem', color: 'var(--navy-900)' }}>
            Frequently Asked Questions on Online Degrees
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.frequentlyAskedQuestions.map((faq, fIdx) => (
              <div 
                key={fIdx}
                style={{
                  background: 'var(--bg-surface-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}
              >
                <h4 style={{ fontSize: '1rem', color: 'var(--navy-900)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>❓</span> {faq.q}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
