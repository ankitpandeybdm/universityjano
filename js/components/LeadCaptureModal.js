// High-Converting Lead Capture Modal Component (Counselling & Prospectus)
window.LeadCaptureModal = function({ initialData = {}, onClose, onSuccess }) {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    course: initialData.course || 'Online MBA',
    university: initialData.university || 'All UGC-DEB Universities',
    notes: initialData.notes || '',
    source: initialData.source || 'General Enquire'
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    const newLead = window.leadStore.addLead({
      name: formData.name || 'Enquiry Student',
      phone: formData.phone,
      email: formData.email,
      city: formData.city || 'India',
      course: formData.course,
      interestedUniversities: formData.university ? [formData.university] : [],
      source: formData.source,
      notes: formData.notes
    });

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(newLead);
    }, 500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog modal-md" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="badge badge-success" style={{ marginBottom: '0.25rem' }}>
              ✓ 100% Free & Unbiased
            </span>
            <h3 style={{ margin: 0 }}>{initialData.title || 'Book 1-on-1 Free Expert Counselling'}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                {initialData.type === 'prospectus' 
                  ? 'Fill your details to get the official fee structure, brochure, and syllabus PDF directly on WhatsApp & Email.'
                  : 'Talk to an expert counselor to compare UGC approvals, fee waivers, EMI options, and admission procedures.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                    WhatsApp / Mobile Number *
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ padding: '0.75rem', background: '#e2e8f0', borderRadius: '8px', fontWeight: '600' }}>+91</span>
                    <input 
                      type="tel"
                      required
                      placeholder="98765 43210"
                      style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                      Email Address
                    </label>
                    <input 
                      type="email"
                      placeholder="vikram@example.com"
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                      City / State
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. Pune, Maharashtra"
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                    Interested Degree Course
                  </label>
                  <select 
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#fff' }}
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    <option value="Online MBA">Online MBA (Master of Business Administration)</option>
                    <option value="Online MCA">Online MCA (Master of Computer Applications)</option>
                    <option value="Online BBA">Online BBA (Bachelor of Business Administration)</option>
                    <option value="Online BCA">Online BCA (Bachelor of Computer Applications)</option>
                    <option value="Online M.Sc">Online M.Sc (Data Science / AI)</option>
                    <option value="Online B.Com">Online B.Com (Honours / General)</option>
                    <option value="Executive MBA / M.Tech">Executive MBA / M.Tech (WILP)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem' }}>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block btn-lg"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : initialData.type === 'prospectus' ? '📥 Download Brochure Now' : '⚡ Request Free Callback & Roadmap'}
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                  🔒 100% Confidential • Zero Agent Brokerage • UniversityJano.com Official
                </span>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
              <h3 style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>Request Submitted Successfully!</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Thank you, <strong>{formData.name || 'Student'}</strong>! Our senior online education counselor is reviewing your profile and will connect with you via WhatsApp / Call within <strong>15 minutes</strong> with the official prospectus and fee waivers.
              </p>

              <div style={{ padding: '1rem', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #a7f3d0', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#065f46' }}>
                📱 <strong>WhatsApp Confirmation:</strong> A copy of the syllabus & scholarship voucher has been queued for <strong>+91 {formData.phone}</strong>.
              </div>

              <button 
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close & Continue Browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
