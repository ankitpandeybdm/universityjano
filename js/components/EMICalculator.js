// 0% Interest Monthly EMI & Fee Budget Planner Component
window.EMICalculator = function({ onOpenCounselling }) {
  const [courseFee, setCourseFee] = React.useState(160000);
  const [tenure, setTenure] = React.useState(24);
  const [scholarshipPercent, setScholarshipPercent] = React.useState(10);

  const discountAmount = (courseFee * scholarshipPercent) / 100;
  const netPayable = courseFee - discountAmount;
  const monthlyEmi = Math.round(netPayable / tenure);

  return (
    <section id="emi-calc-section" className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag amber">💳 Zero Financial Stress</span>
          <h2 className="section-title">0% Interest Monthly EMI & Budget Planner</h2>
          <p className="section-subtitle">
            Study now and pay comfortably in equal zero-cost monthly installments without any credit card or security deposits.
          </p>
        </div>

        <div className="calc-card-container">
          <div className="calc-grid">
            {/* Input Controls */}
            <div>
              {/* Total Course Fee Slider */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <label style={{ fontWeight: '700', color: 'var(--primary-900)' }}>
                    1. University Course Fee (Total):
                  </label>
                  <strong style={{ color: 'var(--primary-600)', fontSize: '1.15rem' }}>
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

              {/* EMI Tenure Months */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary-900)' }}>
                  2. Select 0% EMI Tenure:
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
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary-900)' }}>
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #a7f3d0', fontSize: '0.8rem', color: '#065f46' }}>
                <span>✓</span>
                <span>Pre-approved NBFC partners: <strong>Propelld, Eduvanz, GrayQuest</strong> (Zero Processing Fees).</span>
              </div>
            </div>

            {/* Results Output Box */}
            <div className="calc-result-box" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#a7f3d0', fontWeight: '600' }}>
                Your Monthly 0% EMI
              </span>
              
              <div className="calc-result-number" style={{ color: '#ffffff' }}>
                ₹{monthlyEmi.toLocaleString('en-IN')}<span style={{ fontSize: '1.1rem', fontWeight: '500' }}>/month</span>
              </div>

              <div style={{ display: 'inline-block', padding: '0.25rem 0.85rem', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.85rem' }}>
                🎉 Zero Hidden Charges • 0% Interest Rate
              </div>

              <div className="calc-stats-breakdown" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="calc-stat-sub">
                  <label style={{ color: '#a7f3d0' }}>Original Fee</label>
                  <strong>{window.helpers.formatINR(courseFee)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label style={{ color: '#a7f3d0' }}>Scholarship Saved</label>
                  <strong style={{ color: '#fef08a' }}>- {window.helpers.formatINR(discountAmount)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label style={{ color: '#a7f3d0' }}>Net Payable</label>
                  <strong>{window.helpers.formatINR(netPayable)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label style={{ color: '#a7f3d0' }}>Tenure</label>
                  <strong>{tenure} Months</strong>
                </div>
              </div>

              <button 
                className="btn btn-amber btn-block"
                style={{ marginTop: '1.5rem', fontWeight: '700' }}
                onClick={() => onOpenCounselling({
                  title: 'Check 0% EMI & Scholarship Eligibility',
                  notes: `Requested EMI: ₹${monthlyEmi}/mo for ${tenure} months on ${window.helpers.formatINR(courseFee)} fee`,
                  source: 'EMI Planner Tool CTA'
                })}
              >
                Apply for 0% EMI Approval →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
