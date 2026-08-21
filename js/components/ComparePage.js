// Dedicated 4-Way Side-by-Side University Comparison Full Page Component
window.ComparePage = function({
  compareList,
  onAddUniversity,
  onRemoveUniversity,
  onOpenLeadModal,
  onOpenUniversityPage
}) {
  const allUniversities = window.UNIVERSITIES_DATA || [];
  const [selectedDegree, setSelectedDegree] = React.useState('MBA');
  const [highlightDiff, setHighlightDiff] = React.useState(false);

  // If less than 2 universities are selected, auto-populate with top 3 for instant rich comparison
  React.useEffect(() => {
    if (compareList.length < 2) {
      const top3 = allUniversities.slice(0, 3);
      top3.forEach(u => {
        if (!compareList.find(item => item.id === u.id)) {
          onAddUniversity(u);
        }
      });
    }
  }, []);

  const comparisonRows = window.helpers.getComparisonDifferences(compareList, selectedDegree);

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '2.5rem 0 4.5rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => window.location.hash = '#/'}>Home</span>
          <span>/</span>
          <span style={{ color: 'var(--orange-500)', fontWeight: '700' }}>Side-by-Side University Comparison</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2.4rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
              Compare Top Indian Online Universities Side-by-Side
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '800px' }}>
              Select up to 4 UGC-DEB approved universities to compare genuine semester fees, NAAC grades, 0% EMI monthly installments, average placement CTC, and online proctored exam features.
            </p>
          </div>

          {/* Highlight differences toggle */}
          <div style={{ background: '#ffffff', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-xs)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer', color: 'var(--navy-900)' }}>
              <input 
                type="checkbox"
                checked={highlightDiff}
                onChange={(e) => setHighlightDiff(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--orange-500)' }}
              />
              <span>Highlight Differences Only</span>
            </label>
          </div>
        </div>

        {/* Degree Selector Tab */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--navy-900)' }}>Comparing Course:</span>
          {['MBA', 'MCA', 'BBA', 'BCA', 'M.Sc'].map(deg => (
            <button
              key={deg}
              className={`btn btn-sm ${selectedDegree === deg ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedDegree(deg)}
            >
              Online {deg}
            </button>
          ))}
        </div>

        {/* Comparison Table Box */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', marginBottom: '2.5rem' }}>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ minWidth: '180px', width: '20%' }}>Comparison Parameters</th>
                  {compareList.map(uni => (
                    <th key={uni.id} style={{ minWidth: '220px', textAlign: 'center', verticalAlign: 'top', position: 'relative' }}>
                      <button 
                        onClick={() => onRemoveUniversity(uni.id)}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: '#fee2e2',
                          color: '#ef4444',
                          border: 'none',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                          fontWeight: '700',
                          fontSize: '12px'
                        }}
                        title="Remove from comparison"
                      >
                        ✕
                      </button>

                      <div 
                        style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: `2px solid ${uni.logoColor}`,
                          color: uni.logoColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          fontSize: '0.85rem',
                          margin: '0 auto 0.5rem auto',
                          cursor: 'pointer'
                        }}
                        onClick={() => onOpenUniversityPage(uni)}
                      >
                        {uni.logoText}
                      </div>

                      <div 
                        style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--navy-900)', cursor: 'pointer' }}
                        onClick={() => onOpenUniversityPage(uni)}
                      >
                        {uni.shortName}
                      </div>

                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                        📍 {uni.city}, {uni.state}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <button 
                          className="btn btn-primary btn-sm btn-block"
                          onClick={() => onOpenLeadModal({
                            title: `Apply to ${uni.shortName}`,
                            university: uni.name,
                            course: `Online ${selectedDegree}`,
                            source: 'Comparison Page CTA'
                          })}
                        >
                          Apply for Admission
                        </button>

                        <button 
                          className="btn btn-secondary btn-sm btn-block"
                          onClick={() => onOpenUniversityPage(uni)}
                        >
                          Full Profile →
                        </button>
                      </div>
                    </th>
                  ))}

                  {/* Add University Placeholder Column if < 4 */}
                  {compareList.length < 4 && (
                    <th style={{ minWidth: '200px', textAlign: 'center', verticalAlign: 'middle', background: 'var(--bg-surface-alt)', border: '2px dashed var(--border-light)' }}>
                      <div style={{ padding: '1.5rem 0.5rem' }}>
                        <span style={{ fontSize: '2rem' }}>➕</span>
                        <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--navy-900)' }}>Add Another College</h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.25rem 0 0.75rem 0' }}>
                          Select from remaining universities
                        </p>
                        <select 
                          style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}
                          onChange={(e) => {
                            const found = allUniversities.find(u => u.id === e.target.value);
                            if (found) onAddUniversity(found);
                            e.target.value = '';
                          }}
                          defaultValue=""
                        >
                          <option value="" disabled>+ Choose University...</option>
                          {allUniversities.filter(u => !compareList.find(c => c.id === u.id)).map(u => (
                            <option key={u.id} value={u.id}>{u.shortName}</option>
                          ))}
                        </select>
                      </div>
                    </th>
                  )}
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, idx) => {
                  const isHighlighted = highlightDiff && row.highlight;
                  return (
                    <tr key={idx} className={isHighlighted ? 'diff-highlight' : ''}>
                      <td style={{ fontWeight: '700', color: 'var(--navy-900)' }}>
                        <div>{row.label}</div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                          {row.category}
                        </span>
                      </td>

                      {row.values.map((valObj, vIdx) => (
                        <td key={vIdx} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                          {valObj.badge ? (
                            <span className={`badge ${valObj.badge}`}>
                              {valObj.val}
                            </span>
                          ) : (
                            <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>
                              {valObj.val}
                            </div>
                          )}

                          {valObj.subtext && (
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                              {valObj.subtext}
                            </div>
                          )}
                        </td>
                      ))}

                      {compareList.length < 4 && <td style={{ background: 'var(--bg-surface-alt)' }} />}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Consultation Banner */}
        <div style={{ background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.6rem', marginBottom: '0.35rem' }}>
              Still Confused Which College Suits Your Profile Best?
            </h3>
            <p style={{ color: '#fed7aa', margin: 0, fontSize: '0.95rem' }}>
              Speak with a senior academic counselor for a 100% unbiased comparative review.
            </p>
          </div>

          <button 
            className="btn btn-primary btn-lg"
            onClick={() => onOpenLeadModal({
              title: 'Get Free Comparative Evaluation Call',
              notes: `Comparing: ${compareList.map(u => u.shortName).join(' vs ')}`,
              source: 'Compare Page Bottom CTA'
            })}
          >
            🎯 Request Free Comparative Call →
          </button>
        </div>
      </div>
    </div>
  );
};
