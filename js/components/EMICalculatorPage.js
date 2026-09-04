// Dedicated 0% Monthly EMI & Budget Planner Full Page Component
window.EMICalculatorPage = function({ onOpenCounselling }) {
  const [courseFee, setCourseFee] = React.useState(160000);
  const [tenure, setTenure] = React.useState(24);
  const [scholarshipPercent, setScholarshipPercent] = React.useState(10);

  const discountAmount = (courseFee * scholarshipPercent) / 100;
  const netPayable = courseFee - discountAmount;
  const monthlyEmi = Math.round(netPayable / tenure);

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '2.5rem 0 4.5rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}>Home</span>
          <span>/</span>
          <span style={{ color: 'var(--orange-500)', fontWeight: '700' }}>0% Interest EMI & Budget Planner</span>
        </div>

        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">💳 Zero Financial Burden</span>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
            0% Interest Monthly EMI & Fee Budget Planner
          </h1>
          <p className="section-subtitle">
            Pursue your degree from top accredited universities without taking heavy loans. Calculate zero-cost monthly installments and check instant scholarship eligibility.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="calc-card-container" style={{ marginBottom: '3.5rem' }}>
          <div className="calc-grid">
            {/* Left Inputs */}
            <div>
              {/* Fee Slider */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <label style={{ fontWeight: '700', color: 'var(--navy-900)' }}>
                    1. University Course Fee (Total):
                  </label>
                  <strong style={{ color: 'var(--orange-600)', fontSize: '1.2rem' }}>
                    {window.helpers.formatINR(courseFee)}
                  </strong>
                </div>
                <input 
                  type="range"
                  min="50000"
                  max="350000"
                  step="10000"
                  value={courseFee}
                  onChange={(e) => setCourseFee(parseInt(e.target.value))}
                  className="slider-input"
                />
                <div className="slider-val-display">
                  <span>₹50,000</span>
                  <span>₹3.5 Lakhs</span>
                </div>
              </div>

              {/* Tenure Selector */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--navy-900)' }}>
                  2. Select 0% Interest EMI Tenure:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  {[6, 12, 24, 36].map(m => (
                    <button
                      key={m}
                      type="button"
                      className={`btn btn-sm ${tenure === m ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => setTenure(m)}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Scholarship Coupon Discount */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--navy-900)' }}>
                  3. Early Bird / Merit Scholarship Discount:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[0, 10, 15, 25].map(p => (
                    <button
                      key={p}
                      type="button"
                      className={`btn btn-sm ${scholarshipPercent === p ? 'btn-accent' : 'btn-secondary'}`}
                      onClick={() => setScholarshipPercent(p)}
                      style={{ flex: 1 }}
                    >
                      {p === 0 ? 'No Coupon' : `${p}% Off`}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #a7f3d0', fontSize: '0.825rem', color: '#065f46' }}>
                <span>✓</span>
                <span>Pre-approved NBFC partners: <strong>Propelld, Eduvanz, GrayQuest</strong> (Zero Credit Card Required).</span>
              </div>
            </div>

            {/* Right Output Box */}
            <div className="calc-result-box" style={{ background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fed7aa', fontWeight: '600' }}>
                Your Monthly 0% EMI
              </span>
              
              <div className="calc-result-number" style={{ color: '#ffffff' }}>
                ₹{monthlyEmi.toLocaleString('en-IN')}<span style={{ fontSize: '1.1rem', fontWeight: '500' }}>/mo</span>
              </div>

              <div style={{ display: 'inline-block', padding: '0.25rem 0.85rem', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.85rem' }}>
                🎉 Zero Hidden Charges • 0% Interest Rate
              </div>

              <div className="calc-stats-breakdown" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="calc-stat-sub">
                  <label style={{ color: '#fed7aa' }}>Original Fee</label>
                  <strong>{window.helpers.formatINR(courseFee)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label style={{ color: '#fed7aa' }}>Scholarship Saved</label>
                  <strong style={{ color: '#fef08a' }}>- {window.helpers.formatINR(discountAmount)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label style={{ color: '#fed7aa' }}>Net Payable</label>
                  <strong>{window.helpers.formatINR(netPayable)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label style={{ color: '#fed7aa' }}>Tenure</label>
                  <strong>{tenure} Months</strong>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-block"
                style={{ marginTop: '1.5rem', fontWeight: '700' }}
                onClick={() => onOpenCounselling({
                  title: 'Apply for Instant 0% EMI Approval',
                  notes: `Requested EMI: ₹${monthlyEmi}/mo for ${tenure} months on ${window.helpers.formatINR(courseFee)} fee`,
                  source: 'Dedicated EMI Calculator Page CTA'
                })}
              >
                Apply for 0% EMI Approval →
              </button>
            </div>
          </div>
        </div>

        {/* How 0% EMI Works 3-Step Guide */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-900)', textAlign: 'center', marginBottom: '2rem' }}>
            How 0% Interest Education EMI Works at UniversityJano.com
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
              <h4 style={{ color: 'var(--navy-900)', marginBottom: '0.35rem' }}>1. Choose University & Plan</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Select your desired online degree and choose an installment tenure from 6 to 36 months.
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
              <h4 style={{ color: 'var(--navy-900)', marginBottom: '0.35rem' }}>2. Instant 10-Min Approval</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Basic Aadhaar/PAN KYC verification without credit cards or collateral security.
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎓</div>
              <h4 style={{ color: 'var(--navy-900)', marginBottom: '0.35rem' }}>3. Start Studying Today</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Get immediate access to university LMS and lectures while paying comfortable zero-interest EMIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
