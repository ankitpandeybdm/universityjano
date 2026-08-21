// Dedicated ROI & Salary Growth Calculator Full Page Component
window.ROICalculatorPage = function({ onOpenCounselling }) {
  const [currentSalary, setCurrentSalary] = React.useState(5.0);
  const [targetDegree, setTargetDegree] = React.useState('MBA');
  const [yearsExp, setYearsExp] = React.useState(2);
  const [targetDomain, setTargetDomain] = React.useState('FinTech & Analytics');

  const roi = window.helpers.calculateCareerROI(currentSalary, targetDegree, yearsExp);

  const domainSalaryTrends = [
    { domain: "FinTech & Banking Analytics", startingAvg: "₹9.5 LPA", jump: "+140%", hiring: ["Deloitte", "HDFC", "Morgan Stanley", "KPMG"] },
    { domain: "AI & Machine Learning / Data Science", startingAvg: "₹12.0 LPA", jump: "+180%", hiring: ["Google", "Microsoft", "Amazon", "Schneider"] },
    { domain: "Cloud Computing & DevOps Architecture", startingAvg: "₹11.0 LPA", jump: "+160%", hiring: ["AWS", "IBM", "TCS", "Accenture"] },
    { domain: "Digital Marketing & Performance Growth", startingAvg: "₹8.5 LPA", jump: "+130%", hiring: ["Nykaa", "Flipkart", "Reliance Jio"] },
    { domain: "Supply Chain & Operations Leadership", startingAvg: "₹9.0 LPA", jump: "+120%", hiring: ["Shell", "Tata Motors", "Adani", "Amazon"] },
    { domain: "Healthcare & Hospital Administration", startingAvg: "₹8.0 LPA", jump: "+110%", hiring: ["Cipla", "Max Healthcare", "Apollo Hospitals"] }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '2.5rem 0 4.5rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => window.location.hash = '#/'}>Home</span>
          <span>/</span>
          <span style={{ color: 'var(--orange-500)', fontWeight: '700' }}>Course ROI & Salary Growth Calculator</span>
        </div>

        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag green">📈 Official Career Analytics</span>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
            Online Degree ROI & Career Jump Calculator
          </h1>
          <p className="section-subtitle">
            Evaluate your expected salary increment, course fee payback period in months, and 5-year career wealth gain before investing in an online degree.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="calc-card-container" style={{ marginBottom: '3.5rem' }}>
          <div className="calc-grid">
            {/* Left Sliders */}
            <div>
              {/* Target Degree */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--navy-900)' }}>
                  1. Target Online Degree Program:
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
                  <label style={{ fontWeight: '700', color: 'var(--navy-900)' }}>
                    2. Your Current Annual CTC (in LPA):
                  </label>
                  <strong style={{ color: 'var(--orange-600)', fontSize: '1.2rem' }}>
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
                  <label style={{ fontWeight: '700', color: 'var(--navy-900)' }}>
                    3. Total Professional Experience:
                  </label>
                  <strong style={{ color: 'var(--orange-600)', fontSize: '1.2rem' }}>
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

              <div style={{ padding: '0.85rem 1rem', background: 'var(--orange-50)', borderRadius: 'var(--radius-md)', fontSize: '0.825rem', color: 'var(--text-muted)', border: '1px solid var(--orange-100)' }}>
                💡 <em>Projections calibrated against verified placement reports of 45,000+ online alumni in India (2024-2026).</em>
              </div>
            </div>

            {/* Right Output Box */}
            <div className="calc-result-box">
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fed7aa', fontWeight: '600' }}>
                Projected Post-Degree CTC
              </span>
              
              <div className="calc-result-number">
                ₹{roi.estimatedNewSalary.toFixed(1)} LPA
              </div>

              <div style={{ display: 'inline-block', padding: '0.25rem 0.85rem', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.875rem' }}>
                🚀 +{roi.percentageHike}% Expected Salary Hike
              </div>

              <div className="calc-stats-breakdown">
                <div className="calc-stat-sub">
                  <label>Payback Period</label>
                  <strong>~{roi.paybackMonths} Months</strong>
                </div>
                <div className="calc-stat-sub">
                  <label>5-Year Extra Wealth</label>
                  <strong>+₹{roi.fiveYearGainLakhs.toFixed(1)} Lakhs</strong>
                </div>
                <div className="calc-stat-sub">
                  <label>Approx Course Fee</label>
                  <strong>{window.helpers.formatINR(roi.avgDegreeFee)}</strong>
                </div>
                <div className="calc-stat-sub">
                  <label>Zero Work Break</label>
                  <strong>100% Online</strong>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-block"
                style={{ marginTop: '1.5rem', fontWeight: '700' }}
                onClick={() => onOpenCounselling({
                  title: `Get Personalized Career Roadmap for Online ${targetDegree}`,
                  course: `Online ${targetDegree}`,
                  notes: `Current CTC: ₹${currentSalary} LPA -> Projected CTC: ₹${roi.estimatedNewSalary} LPA`,
                  source: 'Dedicated ROI Page CTA'
                })}
              >
                Get Personalized Career Transition Plan →
              </button>
            </div>
          </div>
        </div>

        {/* Domain Salary Trends Table */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
            Highest-Paying Online Specializations & Industry Hiring Demand (2026)
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.925rem' }}>
            Average starting salary packages offered during corporate placement drives for UGC-approved online degrees.
          </p>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Domain / Specialization</th>
                  <th>Average CTC (Post Online Degree)</th>
                  <th>Average Salary Jump</th>
                  <th>Top Hiring Companies</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {domainSalaryTrends.map((d, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong style={{ color: 'var(--navy-900)' }}>{d.domain}</strong>
                    </td>
                    <td>
                      <span className="badge badge-orange" style={{ fontSize: '0.85rem' }}>{d.startingAvg}</span>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--accent-emerald)' }}>{d.jump}</strong>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {d.hiring.join(', ')}
                      </div>
                    </td>
                    <td>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => onOpenCounselling({
                          title: `Explore Colleges for ${d.domain}`,
                          specialization: d.domain,
                          source: 'ROI Specialization Table CTA'
                        })}
                      >
                        Explore Colleges →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
