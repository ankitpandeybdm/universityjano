// Floating Widgets: WhatsApp Counselor, Sticky Mobile Bar & Exit-Intent Scholarship Modal
window.FloatingWidgets = function({ onOpenCounselling, onOpenWizard }) {
  const [showExitModal, setShowExitModal] = React.useState(false);
  const [hasTriggeredExit, setHasTriggeredExit] = React.useState(false);

  React.useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasTriggeredExit) {
        setShowExitModal(true);
        setHasTriggeredExit(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggeredExit]);

  return (
    <>
      {/* Floating WhatsApp Quick Action Button */}
      <div 
        className="floating-whatsapp-btn"
        onClick={() => window.open('https://wa.me/919876543210?text=Hi%20UniversityJano,%20I%20need%20help%20choosing%20an%20online%20degree%20program', '_blank')}
        title="Chat with Senior Counselor on WhatsApp"
      >
        <span style={{ fontSize: '1.75rem' }}>💬</span>
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div className="mobile-sticky-bar">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Confused about college?</span>
          <strong style={{ fontSize: '0.85rem', color: 'var(--primary-900)' }}>100% Free Expert Advice</strong>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            className="btn btn-amber btn-sm"
            onClick={onOpenWizard}
          >
            ⚡ AI Quiz
          </button>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => onOpenCounselling({
              title: 'Speak to Senior Admission Counselor',
              source: 'Mobile Sticky Bottom Bar'
            })}
          >
            Free Call
          </button>
        </div>
      </div>

      {/* Exit-Intent Scholarship Modal */}
      {showExitModal && (
        <div className="modal-overlay" onClick={() => setShowExitModal(false)}>
          <div className="modal-dialog modal-md" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🎁</span>
                <h3 style={{ margin: 0, color: '#ffffff' }}>Wait! Don't Leave Without Your ₹10,000 Waiver!</h3>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setShowExitModal(false)}
                style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff' }}
              >
                ✕
              </button>
            </div>

            <div className="modal-body" style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                Unlock an <strong>Exclusive Early-Bird Fee Concession of ₹10,000</strong> on top UGC-DEB approved online universities before admissions close this week!
              </p>

              <div style={{
                background: '#fffbeb',
                border: '2px dashed #f59e0b',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#b45309', fontWeight: '600', textTransform: 'uppercase' }}>
                  Your Scholarship Voucher Code:
                </span>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#b45309', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                  UJANO-2026-EARLY
                </div>
              </div>

              <button 
                className="btn btn-amber btn-lg btn-block"
                onClick={() => {
                  setShowExitModal(false);
                  onOpenCounselling({
                    title: 'Claim ₹10,000 Early Bird Scholarship Voucher',
                    notes: 'Claimed Voucher: UJANO-2026-EARLY',
                    source: 'Exit Intent Scholarship Modal'
                  });
                }}
              >
                🎉 Claim My ₹10,000 Scholarship Coupon Now →
              </button>

              <button 
                style={{ background: 'none', border: 'none', color: 'var(--text-subtle)', fontSize: '0.8rem', marginTop: '1rem', cursor: 'pointer' }}
                onClick={() => setShowExitModal(false)}
              >
                No thanks, I will pay full admission fee
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
