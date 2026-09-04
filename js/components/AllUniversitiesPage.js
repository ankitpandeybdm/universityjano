// Dedicated All Universities Directory Full Page Component
window.AllUniversitiesPage = function({
  universities,
  searchQuery,
  onSearchChange,
  selectedDegree,
  onSelectDegree,
  selectedNaac,
  onSelectNaac,
  maxBudget,
  onBudgetChange,
  onlyOnlineExam,
  onToggleOnlineExam,
  onlyEmi,
  onToggleEmi,
  onResetFilters,
  sortBy,
  onSortChange,
  onOpenUniversityPage,
  onOpenLeadModal,
  onToggleCompare,
  compareList
}) {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '2.5rem 0 4.5rem 0' }}>
      <div className="container">
        {/* Breadcrumb & Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}>Home</span>
            <span>/</span>
            <span style={{ color: 'var(--orange-500)', fontWeight: '700' }}>All UGC-DEB Approved Online Universities</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
            Directory of All UGC-DEB Approved Online Universities in India
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '850px' }}>
            Compare official accreditations (UGC-DEB, NAAC A++, NIRF), transparent course fees, 0% EMI options, placement records, and examination formats across all recognized Indian universities offering online degrees.
          </p>
        </div>

        {/* Directory Layout */}
        <div className="catalog-layout">
          {/* Left Filter Sidebar */}
          <window.FilterSidebar 
            selectedDegree={selectedDegree}
            onSelectDegree={onSelectDegree}
            selectedNaac={selectedNaac}
            onSelectNaac={onSelectNaac}
            maxBudget={maxBudget}
            onBudgetChange={onBudgetChange}
            onlyOnlineExam={onlyOnlineExam}
            onToggleOnlineExam={onToggleOnlineExam}
            onlyEmi={onlyEmi}
            onToggleEmi={onToggleEmi}
            onResetFilters={onResetFilters}
          />

          {/* Right Main Grid */}
          <div>
            <div className="catalog-content-header">
              <div className="results-count">
                Showing <strong>{universities.length}</strong> UGC-DEB Approved Universities
                {selectedDegree !== 'All' && <span style={{ color: 'var(--orange-500)' }}> for Online {selectedDegree}</span>}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sort by:</span>
                <select 
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                >
                  <option value="featured">Featured & Popular</option>
                  <option value="rating">Highest Student Rating</option>
                  <option value="highestCtc">Highest Placement CTC</option>
                  <option value="feeLowToHigh">Fee: Low to High</option>
                </select>
              </div>
            </div>

            {/* University Cards */}
            {universities.length > 0 ? (
              <div className="university-grid">
                {universities.map(uni => (
                  <window.UniversityCard 
                    key={uni.id}
                    university={uni}
                    selectedDegree={selectedDegree}
                    onViewDetails={(u) => onOpenUniversityPage(u)}
                    onOpenLeadModal={(data) => onOpenLeadModal(data)}
                    onToggleCompare={onToggleCompare}
                    isComparing={!!compareList.find(item => item.id === uni.id)}
                  />
                ))}
              </div>
            ) : (
              <div style={{
                padding: '3rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                border: '1px dashed var(--border-light)'
              }}>
                <span style={{ fontSize: '2.5rem' }}>🔍</span>
                <h3 style={{ marginTop: '0.5rem' }}>No universities matched your selected filters</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Try expanding your budget slider or clearing specific filters.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={onResetFilters}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
