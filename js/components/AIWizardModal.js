// 4-Step 2-Minute AI College Recommender Wizard Modal Component
window.AIWizardModal = function({ onClose, onCompleteShortlist, onOpenLeadModal }) {
  const [step, setStep] = React.useState(1);
  const [preferences, setPreferences] = React.useState({
    qualification: 'Graduation Completed',
    degree: 'MBA',
    specialization: 'FinTech & Analytics',
    budget: 180000,
    learningMode: '100% Online with Live Weekend Classes',
    emiNeeded: 'Yes, need 0% EMI',
    name: '',
    phone: '',
    email: '',
    city: ''
  });

  const [matchedResults, setMatchedResults] = React.useState([]);
  const [submitting, setSubmitting] = React.useState(false);

  const qualifications = [
    '10+2 / Intermediate',
    'Graduation Completed (BA/B.Sc/B.Com/BBA)',
    'Engineering / B.Tech / BCA Graduate',
    'Working Professional (2+ Yrs Experience)'
  ];

  const degreesList = [
    { id: 'MBA', name: 'Online MBA', icon: '💼' },
    { id: 'MCA', name: 'Online MCA', icon: '💻' },
    { id: 'BBA', name: 'Online BBA', icon: '📈' },
    { id: 'BCA', name: 'Online BCA', icon: '⚡' },
    { id: 'M.Sc', name: 'Online M.Sc (Data Science)', icon: '📊' },
    { id: 'M.Tech', name: 'M.Tech for Working Execs', icon: '⚙️' }
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmitAndRecommend();
    }
  };

  const handleSubmitAndRecommend = () => {
    if (!preferences.phone || preferences.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number to generate your AI match report.');
      return;
    }

    setSubmitting(true);

    // Save lead into LeadStore
    window.leadStore.addLead({
      name: preferences.name || 'AI Quiz Student',
      phone: preferences.phone,
      email: preferences.email,
      city: preferences.city || 'India',
      course: `Online ${preferences.degree}`,
      specialization: preferences.specialization,
      budget: `₹${preferences.budget.toLocaleString('en-IN')}`,
      source: 'AI 2-Min Wizard Funnel'
    });

    // Compute match scores across all universities
    const allUnis = window.UNIVERSITIES_DATA || [];
    const scored = allUnis.map(u => {
      const matchScore = window.helpers.calculateCollegeMatchScore(u, preferences);
      const course = u.popularCourses.find(c => c.degree === preferences.degree) || u.popularCourses[0];
      return {
        ...u,
        matchScore: matchScore,
        matchedCourse: course
      };
    });

    scored.sort((a, b) => b.matchScore - a.matchScore);

    setTimeout(() => {
      setMatchedResults(scored.slice(0, 3));
      setSubmitting(false);
      setStep(5); // Step 5 is results view
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-amber">⚡ AI Matchmaker</span>
            <h3 style={{ margin: 0 }}>
              {step <= 4 ? 'Suggest Me A College in 2 Mins' : '🎯 Your Personalized AI University Shortlist'}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {step <= 4 && (
            <div>
              {/* Progress Steps */}
              <div className="wizard-progress-bar">
                {[1, 2, 3, 4].map(s => (
                  <div 
                    key={s} 
                    className={`wizard-step-node ${step === s ? 'active' : step > s ? 'completed' : ''}`}
                  >
                    {step > s ? '✓' : s}
                  </div>
                ))}
              </div>

              {/* Step 1: Qualification & Goal */}
              {step === 1 && (
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    1. What is your current highest qualification?
                  </h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    This helps our AI check your eligibility across NAAC A++ universities.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {qualifications.map(q => (
                      <div 
                        key={q}
                        className={`wizard-option-card ${preferences.qualification === q ? 'selected' : ''}`}
                        onClick={() => setPreferences({ ...preferences, qualification: q })}
                      >
                        <span style={{ fontSize: '1.25rem' }}>🎓</span>
                        <strong style={{ fontSize: '0.95rem' }}>{q}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Target Degree */}
              {step === 2 && (
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    2. Which online degree are you planning to pursue?
                  </h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    Select your target program to compare curriculum & specializations.
                  </p>

                  <div className="wizard-options-grid">
                    {degreesList.map(d => (
                      <div 
                        key={d.id}
                        className={`wizard-option-card ${preferences.degree === d.id ? 'selected' : ''}`}
                        onClick={() => setPreferences({ ...preferences, degree: d.id })}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{d.icon}</span>
                        <div>
                          <strong style={{ display: 'block', fontSize: '1rem' }}>{d.name}</strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>UGC-DEB Entitled</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Budget & EMI Preference */}
              {step === 3 && (
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    3. What is your total budget for the degree?
                  </h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    All listed universities offer monthly zero-interest EMI financing.
                  </p>

                  <div style={{ padding: '1.5rem', background: 'var(--primary-50)', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600' }}>Your Budget Cap:</span>
                      <strong style={{ color: 'var(--primary-600)', fontSize: '1.25rem' }}>
                        {window.helpers.formatINR(preferences.budget)}
                      </strong>
                    </div>

                    <input 
                      type="range"
                      min="50000"
                      max="300000"
                      step="10000"
                      value={preferences.budget}
                      onChange={(e) => setPreferences({ ...preferences, budget: Number(e.target.value) })}
                      className="slider-input"
                    />
                    <div className="slider-val-display">
                      <span>₹50,000</span>
                      <span>₹3.0 Lakhs</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div 
                      className={`wizard-option-card ${preferences.emiNeeded.includes('Yes') ? 'selected' : ''}`}
                      onClick={() => setPreferences({ ...preferences, emiNeeded: 'Yes, need 0% EMI' })}
                      style={{ flex: 1 }}
                    >
                      <span>💳</span>
                      <div>
                        <strong>Need 0% EMI</strong>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pay ₹2,500 - ₹4,500/mo</span>
                      </div>
                    </div>

                    <div 
                      className={`wizard-option-card ${preferences.emiNeeded.includes('Full') ? 'selected' : ''}`}
                      onClick={() => setPreferences({ ...preferences, emiNeeded: 'Full payment per semester' })}
                      style={{ flex: 1 }}
                    >
                      <span>💵</span>
                      <div>
                        <strong>Pay Per Semester</strong>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Standard semester fees</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Personalized Report */}
              {step === 4 && (
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    4. Where should we send your AI Shortlist & Fee Report?
                  </h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    Receive instant PDF prospectus and personalized scholarships on WhatsApp.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Full Name *</label>
                      <input 
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="btn-secondary"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                        value={preferences.name}
                        onChange={(e) => setPreferences({ ...preferences, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>WhatsApp / Mobile Number *</label>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span style={{ padding: '0.75rem', background: '#e2e8f0', borderRadius: '8px', fontWeight: '600' }}>+91</span>
                        <input 
                          type="tel"
                          placeholder="98765 43210"
                          style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                          value={preferences.phone}
                          onChange={(e) => setPreferences({ ...preferences, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>Email Address</label>
                        <input 
                          type="email"
                          placeholder="rahul@example.com"
                          style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                          value={preferences.email}
                          onChange={(e) => setPreferences({ ...preferences, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>City</label>
                        <input 
                          type="text"
                          placeholder="e.g. Pune / Delhi / Bangalore"
                          style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                          value={preferences.city}
                          onChange={(e) => setPreferences({ ...preferences, city: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Wizard Footer Controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                {step > 1 ? (
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setStep(step - 1)}
                  >
                    ← Back
                  </button>
                ) : <div />}

                <button 
                  className="btn btn-amber"
                  onClick={handleNext}
                  disabled={submitting}
                >
                  {submitting ? '🤖 Computing Matches...' : step === 4 ? '✨ Generate My College Matches →' : 'Continue Next →'}
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Recommended AI Matches */}
          {step === 5 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="badge badge-success" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>
                  🎉 Match Report Ready
                </span>
                <h3 style={{ marginTop: '0.5rem' }}>
                  Top 3 Recommended Universities for Online {preferences.degree}
                </h3>
                <p style={{ fontSize: '0.9rem' }}>
                  Matched based on your budget of {window.helpers.formatINR(preferences.budget)}, qualification, and NAAC ratings.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {matchedResults.map((uni, idx) => (
                  <div 
                    key={uni.id}
                    style={{
                      border: idx === 0 ? '2px solid var(--accent-emerald)' : '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.5rem',
                      background: idx === 0 ? 'linear-gradient(to right, #f0fdf4, #ffffff)' : '#ffffff',
                      position: 'relative'
                    }}
                  >
                    {idx === 0 && (
                      <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '1.5rem',
                        background: 'var(--accent-emerald)',
                        color: '#ffffff',
                        padding: '0.2rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
                        fontWeight: '700'
                      }}>
                        👑 #1 Best Overall Match
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '12px',
                          background: '#ffffff',
                          border: `2px solid ${uni.logoColor}`,
                          color: uni.logoColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          fontSize: '0.85rem'
                        }}>
                          {uni.logoText}
                        </div>

                        <div>
                          <h4 style={{ margin: 0, fontSize: '1.15rem' }}>{uni.name}</h4>
                          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                            <span className="badge badge-purple">NAAC {uni.accreditations.naacGrade}</span>
                            <span className="badge badge-blue">Highest CTC ₹{uni.metrics.highestCtc}</span>
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-emerald)' }}>
                          {uni.matchScore}% Match
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          Total: {window.helpers.formatINR(uni.matchedCourse.totalFee)}
                        </span>
                      </div>
                    </div>

                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        ✓ {uni.pros[0]}
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            onClose();
                            onOpenLeadModal({
                              title: `Download ${uni.shortName} Prospectus`,
                              university: uni.name,
                              course: `Online ${preferences.degree}`,
                              type: 'prospectus',
                              source: 'AI Wizard Results'
                            });
                          }}
                        >
                          📥 Prospectus
                        </button>

                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => {
                            onClose();
                            onOpenLeadModal({
                              title: `Confirm Admission at ${uni.shortName}`,
                              university: uni.name,
                              course: `Online ${preferences.degree}`,
                              source: 'AI Wizard Match Top CTA'
                            });
                          }}
                        >
                          Apply Now →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Explore All Universities in Directory
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
