// Lead Generation & CRM Management Module for UniversityJano.com
window.leadStore = {
  STORAGE_KEY: 'uj_captured_leads_v1',

  // Get all leads from LocalStorage (and merge with default demo leads if empty)
  getLeads: function() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error reading leads from storage', e);
    }

    // Default seeded sample leads for instant demonstration
    const initialLeads = [
      {
        id: "lead_1723701234001",
        name: "Vikram Malhotra",
        phone: "+91 98765 43210",
        email: "vikram.malhotra@gmail.com",
        city: "Pune",
        state: "Maharashtra",
        course: "Online MBA",
        specialization: "FinTech",
        budget: "₹1,50,000 - ₹2,00,000",
        interestedUniversities: ["Online Manipal", "NMIMS Online"],
        source: "AI 2-Min Wizard",
        status: "New Lead",
        priority: "High",
        createdAt: "2026-08-15T09:30:00Z"
      },
      {
        id: "lead_1723701234002",
        name: "Pooja Deshmukh",
        phone: "+91 98234 56789",
        email: "pooja.d@yahoo.com",
        city: "Mumbai",
        state: "Maharashtra",
        course: "Online MCA",
        specialization: "Cloud Computing",
        budget: "Under ₹1,50,000",
        interestedUniversities: ["Jain Online", "Chandigarh University"],
        source: "Prospectus Download",
        status: "Contacted",
        priority: "Urgent",
        createdAt: "2026-08-15T08:15:00Z"
      },
      {
        id: "lead_1723701234003",
        name: "Amitabh Sen",
        phone: "+91 97112 34567",
        email: "amitabh.sen@outlook.com",
        city: "Kolkata",
        state: "West Bengal",
        course: "Online MBA",
        specialization: "Digital Marketing",
        budget: "₹1,00,000 - ₹1,50,000",
        interestedUniversities: ["Amity Online"],
        source: "1-on-1 Free Counselling Modal",
        status: "Counselled",
        priority: "Medium",
        createdAt: "2026-08-14T17:45:00Z"
      }
    ];

    this.saveLeads(initialLeads);
    return initialLeads;
  },

  saveLeads: function(leads) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error('Error saving leads', e);
    }
  },

  // Save new lead
  addLead: function(leadData) {
    const leads = this.getLeads();
    const newLead = {
      id: 'lead_' + Date.now(),
      name: leadData.name || 'Anonymous Student',
      phone: leadData.phone || '',
      email: leadData.email || '',
      city: leadData.city || 'India',
      state: leadData.state || '',
      course: leadData.course || 'Online MBA',
      specialization: leadData.specialization || 'General',
      budget: leadData.budget || 'Flexible',
      interestedUniversities: leadData.interestedUniversities || [],
      source: leadData.source || 'Direct Website Enquire',
      notes: leadData.notes || '',
      status: 'New Lead',
      priority: 'High',
      createdAt: new Date().toISOString()
    };

    leads.unshift(newLead);
    this.saveLeads(leads);

    // Also push to backend server endpoint asynchronously
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLead)
    }).catch(err => {
      console.log('Local server offline or mock mode', err);
    });

    return newLead;
  },

  // Update lead status (e.g. "Contacted", "Counselled", "Admitted", "Lost")
  updateLeadStatus: function(leadId, newStatus) {
    const leads = this.getLeads();
    const lead = leads.find(l => l.id === leadId);
    if (lead) {
      lead.status = newStatus;
      this.saveLeads(leads);
    }
    return leads;
  },

  // Export leads to CSV file for Excel / Google Sheets
  exportToCSV: function() {
    const leads = this.getLeads();
    if (!leads.length) {
      alert('No leads available to export.');
      return;
    }

    const headers = ["Lead ID", "Date", "Name", "Phone", "Email", "City", "Course", "Specialization", "Budget", "Universities", "Source", "Status", "Priority"];
    
    const csvRows = [];
    csvRows.push(headers.join(','));

    leads.forEach(l => {
      const row = [
        `"${l.id}"`,
        `"${new Date(l.createdAt).toLocaleDateString('en-IN')}"`,
        `"${(l.name || '').replace(/"/g, '""')}"`,
        `"${(l.phone || '').replace(/"/g, '""')}"`,
        `"${(l.email || '').replace(/"/g, '""')}"`,
        `"${(l.city || '').replace(/"/g, '""')}"`,
        `"${(l.course || '').replace(/"/g, '""')}"`,
        `"${(l.specialization || '').replace(/"/g, '""')}"`,
        `"${(l.budget || '').replace(/"/g, '""')}"`,
        `"${(Array.isArray(l.interestedUniversities) ? l.interestedUniversities.join('; ') : l.interestedUniversities || '').replace(/"/g, '""')}"`,
        `"${(l.source || '').replace(/"/g, '""')}"`,
        `"${(l.status || '').replace(/"/g, '""')}"`,
        `"${(l.priority || '').replace(/"/g, '""')}"`
      ];
      csvRows.push(row.join(','));
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `UniversityJano_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
