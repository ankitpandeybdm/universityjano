// Admin CRM & Lead Management Dashboard Component for Website Owner
window.LeadDashboardModal = function({ onClose }) {
  const [leads, setLeads] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('All');

  React.useEffect(() => {
    setLeads(window.leadStore.getLeads());
  }, []);

  const handleStatusChange = (leadId, newStatus) => {
    const updated = window.leadStore.updateLeadStatus(leadId, newStatus);
    setLeads([...updated]);
  };

  const handleExportCSV = () => {
    window.leadStore.exportToCSV();
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch = !searchTerm || 
      (l.name && l.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (l.phone && l.phone.includes(searchTerm)) ||
      (l.course && l.course.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (l.city && l.city.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = filterStatus === 'All' || l.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog modal-xl" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-purple">👑 UniversityJano Admin</span>
              <span className="badge badge-success">Lead Generation CRM</span>
            </div>
            <h3 style={{ margin: '0.35rem 0 0 0' }}>Captured Student Leads ({leads.length} Total)</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              className="btn btn-accent btn-sm"
              onClick={handleExportCSV}
            >
              📥 Export to CSV (Excel)
            </button>
            <button className="modal-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ padding: '1.5rem' }}>
          {/* Top Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: '240px' }}>
              <span style={{ fontSize: '1rem' }}>🔍</span>
              <input 
                type="text"
                placeholder="Search leads by name, mobile, course, or city..."
                style={{ width: '100%', padding: '0.5rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Status:</span>
              <select 
                style={{ padding: '0.5rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#fff' }}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="New Lead">New Lead</option>
                <option value="Contacted">Contacted</option>
                <option value="Counselled">Counselled</option>
                <option value="Admitted">Admitted (Enrolled)</option>
              </select>
            </div>
          </div>

          {/* Leads Table */}
          <div className="comparison-table-wrapper" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Student Info</th>
                  <th>Contact</th>
                  <th>Target Course</th>
                  <th>Source / Lead Magnet</th>
                  <th>Date & Time</th>
                  <th>CRM Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredLeads.length > 0 ? (
                  filteredLeads.map(lead => (
                    <tr key={lead.id}>
                      <td>
                        <strong>{lead.name}</strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          📍 {lead.city || 'India'}
                        </div>
                      </td>

                      <td>
                        <div style={{ fontWeight: '600', color: 'var(--primary-600)' }}>
                          📱 {lead.phone}
                        </div>
                        {lead.email && (
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            ✉️ {lead.email}
                          </div>
                        )}
                      </td>

                      <td>
                        <span className="badge badge-blue">{lead.course}</span>
                        {lead.specialization && (
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {lead.specialization}
                          </div>
                        )}
                        {lead.budget && (
                          <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>
                            Budget: {lead.budget}
                          </div>
                        )}
                      </td>

                      <td>
                        <span className="badge badge-amber">{lead.source}</span>
                        {lead.interestedUniversities && lead.interestedUniversities.length > 0 && (
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {Array.isArray(lead.interestedUniversities) ? lead.interestedUniversities.join(', ') : lead.interestedUniversities}
                          </div>
                        )}
                      </td>

                      <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {new Date(lead.createdAt).toLocaleString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>

                      <td>
                        <select 
                          style={{
                            padding: '0.35rem 0.6rem',
                            borderRadius: '6px',
                            border: '1px solid var(--border-light)',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            background: lead.status === 'New Lead' ? '#fef3c7' : lead.status === 'Admitted' ? '#dcfce7' : '#f1f5f9',
                            color: lead.status === 'New Lead' ? '#b45309' : lead.status === 'Admitted' ? '#15803d' : '#334155'
                          }}
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        >
                          <option value="New Lead">New Lead</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Counselled">Counselled</option>
                          <option value="Admitted">Admitted</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                      No matching leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
