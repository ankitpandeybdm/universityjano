// Interactive Course ROI & Salary Growth Calculator Component
window.ROICalculator = function({ onOpenCounselling }) {
  const [currentSalary, setCurrentSalary] = React.useState(4.5);
  const [targetDegree, setTargetDegree] = React.useState('MBA');
  const [yearsExp, setYearsExp] = React.useState(2);

  const roi = window.helpers.calculateCareerROI(currentSalary, targetDegree, yearsExp);

  return (
    <section id="roi-calc-section" className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag green">📈 Smart Career Analytics</span>
          <h2 className="section-title">Online Degree ROI & Salary Growth Calculator</h2>
          <p className="section-subtitle">
            Calculate your expected salary jump, course fee payback period in months, and 5-year career earnings before enrolling.
          </p>
        </div>

        <div className="calc-card-container">
          <div className="calc-grid">
            {/* Input Controls */}
            <div>
              {/* Target Degree */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary-900)' }}>
                  1. Target Online Degree:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {['MBA', 'MCA', 'M.Sc', 'BBA', 'BCA', 'M.Tech'].map(deg => (
                    <button
                      key={deg}
                      type="button"
                      className={`btn btn-sm ${targetDegree === deg ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => setTargetDegree(deg)}
                    >
                      {deg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Salary Slider */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <label style={{ fontWeight: '700', color: 'var(--primary-900)' }}>
                    2. Current Annual CTC (LPA):
                  </label>
                  <strong style={{ color: 'var(--primary-600)', fontSize: '1.15rem' }}>
                    ₹{currentSalary.toFixed(1)} LPA
                  </strong>
                </div>
                <input 
                  type="range"
                  min="2.0"
                  max="20.0"
                  step="0.5"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(parseFloat(e.target.value))}
                  className="slider-input"
                />
                <div className="slider-val-display">
                  <span>₹2.0 LPA</span>
                  <span>₹20.0 LPA</span>
                </div>
              </div>

              {/* Experience Slider */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <label style={{ fontWeight: '700', color: 'var(--primary-900)' }}>
                    3. Current Work Experience:
                  </label>
                  <strong style={{ color: 'var(--primary-600)', fontSize: '1.15rem' }}>
                    {yearsExp} {yearsExp === 1 ? 'Year' : 'Years'}
                  </strong>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={yearsExp}
                  onChange={(e) => setYearsExp(parseInt(e.target.value))}
                  className="slider-input"
                />
                <div className="slider-val-display">
                  <span>0 Yrs (Fresher)</span>
                  <span>10+ Yrs</span>
                </div>
              </div>

              <div style={{ padding: '0.85rem 1rem', background: 'var(--primary-50)', borderRadius: 'var(--radius-md)', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                💡 <em>Analytics based on placement reports from 25+ UGC-DEB approved universities in India over 2024-2026.</em>
              </div>
            </div>

            {/* Results Output Box */}
            <div className="calc-result-box">
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#93c5fd', fontWeight: '600' }}>
                Estimated Post-Degree CTC
              </span>
              
              <div className="calc-result-number">
                ₹{roi.estimatedNewSalary.toFixed(1)} LPA
              </div>

              <div style={{ display: 'inline-block', padding: '0.25rem 0.85rem', background: 'rgba(52, 211, 153, 0.2)', color: '#34d399', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.875rem' }}>
                🚀 +{roi.percentageHike}% Expected Salary Hike
              </div>

              <div className="calc-stats-breakdown">
                <div className="calc-stat-sub">
                  <label>Payback Period</label>
                  <strong>~{roi.paybackMonths} Months</strong>
                </div>
                <div className="calc-stat-sub">
                  <label>5-Year Extra Earnings</label>
                  <strong>+₹{roi.fiveYearGainLakhs.toFixed(1)} Lakhs</strong>
                </div>
                <div className="calc-stat-sub">
                  <label>Approx Course Fee</label>
                  <strong>{window.helpers.formatINR(roi.avgDegreeFee)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label>Study Flexibility</label>
                  <strong>100% Online</strong>
                </div>
              </div>

              <button 
                className="btn btn-amber btn-block"
                style={{ marginTop: '1.5rem', fontWeight: '700' }}
                onClick={() => onOpenCounselling({
                  title: `Career Roadmap for Online ${targetDegree}`,
                  course: `Online ${targetDegree}`,
                  notes: `Current CTC: ₹${currentSalary} LPA -> Target: ₹${roi.estimatedNewSalary} LPA`,
                  source: 'ROI Calculator Results CTA'
                })}
              >
                Get Personalized Career Transition Plan →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
