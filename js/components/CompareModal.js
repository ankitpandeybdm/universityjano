// 4-Way Side-by-Side Comparison Matrix Modal Component
window.CompareModal = function({ 
  compareList, 
  onClose, 
  onRemoveUniversity, 
  onOpenLeadModal,
  selectedDegree = 'MBA' 
}) {
  const [highlightDiff, setHighlightDiff] = React.useState(false);
  const [activeDegree, setActiveDegree] = React.useState(selectedDegree === 'All' ? 'MBA' : selectedDegree);

  if (!compareList || compareList.length === 0) {
    return null;
  }

  const comparisonRows = window.helpers.getComparisonDifferences(compareList, activeDegree);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog modal-xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="badge badge-purple">⚖️ Side-by-Side Comparison</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Comparing {compareList.length} of 4 Universities
              </span>
            </div>
            <h3 style={{ marginTop: '0.35rem' }}>
              Detailed University Comparison Matrix
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Highlight Differences Toggle */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>
              <input 
                type="checkbox"
                checked={highlightDiff}
                onChange={(e) => setHighlightDiff(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: 'var(--primary-600)' }}
              />
              <span>Highlight Differences</span>
            </label>

            <button className="modal-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ padding: '1.5rem' }}>
          {/* Degree Selector Tab for Comparison */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Comparing Course:</span>
            {['MBA', 'MCA', 'BBA', 'BCA', 'M.Sc'].map(deg => (
              <button
                key={deg}
                className={`btn btn-sm ${activeDegree === deg ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveDegree(deg)}
              >
                Online {deg}
              </button>
            ))}
          </div>

          {/* Matrix Table */}
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ minWidth: '180px', width: '20%' }}>Key Parameters</th>
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
                          width: '22px',
                          height: '22px',
                          cursor: 'pointer',
                          fontWeight: '700',
                          fontSize: '11px'
                        }}
                        title="Remove from comparison"
                      >
                        ✕
                      </button>

                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        background: '#f8fafc',
                        border: `2px solid ${uni.logoColor}`,
                        color: uni.logoColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '800',
                        fontSize: '0.75rem',
                        margin: '0 auto 0.5rem auto'
                      }}>
                        {uni.logoText}
                      </div>

                      <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--primary-900)' }}>
                        {uni.shortName}
                      </div>

                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        📍 {uni.city}, {uni.state}
                      </div>

                      <button 
                        className="btn btn-primary btn-sm btn-block"
                        onClick={() => onOpenLeadModal({
                          title: `Apply to ${uni.shortName}`,
                          university: uni.name,
                          course: `Online ${activeDegree}`,
                          source: 'Comparison Matrix CTA'
                        })}
                      >
                        Enquire / Apply
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, idx) => {
                  const isHighlighted = highlightDiff && row.highlight;
                  return (
                    <tr key={idx} className={isHighlighted ? 'diff-highlight' : ''}>
                      <td style={{ fontWeight: '600', color: 'var(--primary-900)' }}>
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Bottom Trust Advice */}
          <div style={{
            marginTop: '1.5rem',
            padding: '1.25rem',
            backgroundColor: 'var(--primary-50)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--primary-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <strong style={{ color: 'var(--primary-900)' }}>Still undecided between these options?</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>
                Schedule a 10-minute free profile evaluation with our senior academic advisor.
              </p>
            </div>
            <button 
              className="btn btn-accent btn-sm"
              onClick={() => onOpenLeadModal({
                title: 'Get Free Comparative Evaluation from Senior Counselor',
                course: `Online ${activeDegree}`,
                notes: `Comparing: ${compareList.map(u => u.shortName).join(' vs ')}`,
                source: 'Comparison Matrix Bottom CTA'
              })}
            >
              Get Free Comparative Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
