// Utility & Helper functions for UniversityJano.com

window.helpers = {
  // Format currency in Indian Lakhs / Crores or thousands with symbol
  formatINR: function(amount) {
    if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
    if (amount === 0) return 'Free / Nil';
    return '₹' + amount.toLocaleString('en-IN');
  },

  // Format LPA (Lakhs Per Annum)
  formatLPA: function(val) {
    if (!val) return 'N/A';
    if (typeof val === 'string' && val.includes('LPA')) return val;
    return val + ' LPA';
  },

  // Format short number for display (e.g., 45000 -> 45k+)
  formatShortNumber: function(num) {
    if (!num) return '0';
    if (num >= 10000000) return (num / 10000000).toFixed(1) + ' Cr+';
    if (num >= 100000) return (num / 100000).toFixed(1) + ' Lakh+';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'k+';
    return num.toString();
  },

  // Calculate Monthly 0% EMI
  calculateEMI: function(principal, months = 24) {
    if (!principal || principal <= 0 || !months) return 0;
    return Math.round(principal / months);
  },

  // Calculate Estimated Salary Hike & ROI Payback Period
  calculateCareerROI: function(currentSalaryLPA, targetDegree, experienceYears = 2) {
    const current = parseFloat(currentSalaryLPA) || 4.0;
    let multiplier = 1.6;
    let avgDegreeFee = 160000;

    switch(targetDegree) {
      case 'MBA':
        multiplier = 1.95;
        avgDegreeFee = 175000;
        break;
      case 'MCA':
        multiplier = 1.85;
        avgDegreeFee = 145000;
        break;
      case 'M.Sc':
        multiplier = 1.90;
        avgDegreeFee = 180000;
        break;
      case 'BBA':
        multiplier = 1.40;
        avgDegreeFee = 120000;
        break;
      case 'BCA':
        multiplier = 1.45;
        avgDegreeFee = 120000;
        break;
      case 'M.Tech':
        multiplier = 2.10;
        avgDegreeFee = 260000;
        break;
      default:
        multiplier = 1.70;
        avgDegreeFee = 150000;
    }

    const estimatedNewSalary = Math.round((current * multiplier) * 10) / 10;
    const salaryGainAnnual = (estimatedNewSalary - current) * 100000;
    const monthlyGain = salaryGainAnnual / 12;
    const paybackMonths = monthlyGain > 0 ? Math.max(1, Math.round(avgDegreeFee / monthlyGain)) : 12;
    const fiveYearGain = Math.round(((estimatedNewSalary - current) * 5) * 10) / 10;

    return {
      currentSalary: current,
      estimatedNewSalary: estimatedNewSalary,
      salaryGainAnnual: salaryGainAnnual,
      percentageHike: Math.round(((estimatedNewSalary - current) / current) * 100),
      paybackMonths: paybackMonths,
      fiveYearGainLakhs: fiveYearGain,
      avgDegreeFee: avgDegreeFee
    };
  },

  // AI Matching algorithm for 2-Minute College Finder Wizard
  calculateCollegeMatchScore: function(university, preferences) {
    let score = 70; // baseline score

    const budgetMax = preferences.budget ? parseInt(preferences.budget) : 250000;
    const targetDegree = preferences.degree || 'MBA';
    const course = university.popularCourses.find(c => c.degree === targetDegree);

    if (course) {
      score += 15;
      // Budget match
      if (course.totalFee <= budgetMax) {
        score += 10;
      } else if (course.totalFee <= budgetMax * 1.25) {
        score += 5;
      }

      // Specialization match
      if (preferences.specialization && course.specializations) {
        const specMatch = course.specializations.some(s => 
          s.toLowerCase().includes(preferences.specialization.toLowerCase()) ||
          preferences.specialization.toLowerCase().includes(s.toLowerCase())
        );
        if (specMatch) score += 5;
      }
    }

    // NAAC score bonus
    if (university.accreditations.naacGrade === 'A++') score += 5;
    else if (university.accreditations.naacGrade === 'A+') score += 3;

    // Exam mode preference
    if (preferences.examMode === 'online' && university.examMode.includes('100% Online')) {
      score += 5;
    }

    return Math.min(99, Math.max(72, score));
  },

  // Highlight differences between selected universities
  getComparisonDifferences: function(universitiesList, degreeFilter = 'MBA') {
    if (!universitiesList || universitiesList.length < 2) return [];

    const rows = [
      {
        key: 'ugcDeb',
        label: 'UGC-DEB Government Approval',
        category: 'Accreditation',
        values: universitiesList.map(u => ({
          val: u.accreditations.ugcDeb ? '100% Entitled & Approved' : 'Under Process',
          badge: u.accreditations.ugcDeb ? 'badge-success' : 'badge-warning',
          highlight: false
        }))
      },
      {
        key: 'naacGrade',
        label: 'NAAC Grade & Score',
        category: 'Accreditation',
        values: universitiesList.map(u => ({
          val: `${u.accreditations.naacGrade} (${u.accreditations.naacScore})`,
          badge: u.accreditations.naacGrade === 'A++' ? 'badge-purple' : 'badge-blue',
          highlight: true
        }))
      },
      {
        key: 'nirfRank',
        label: 'NIRF Ranking',
        category: 'Accreditation',
        values: universitiesList.map(u => ({
          val: u.accreditations.nirfRank || 'Participated',
          highlight: false
        }))
      },
      {
        key: 'totalFee',
        label: `Total Fee (${degreeFilter})`,
        category: 'Fees & Budget',
        values: universitiesList.map(u => {
          const c = u.popularCourses.find(item => item.degree === degreeFilter) || u.popularCourses[0];
          return {
            val: c ? window.helpers.formatINR(c.totalFee) : '₹1,50,000 Approx',
            subtext: c ? `${window.helpers.formatINR(c.perSemFee)} / Semester` : '',
            highlight: true
          };
        })
      },
      {
        key: 'monthlyEmi',
        label: '0% Monthly EMI (24 Mo)',
        category: 'Fees & Budget',
        values: universitiesList.map(u => {
          const c = u.popularCourses.find(item => item.degree === degreeFilter) || u.popularCourses[0];
          return {
            val: c ? `${window.helpers.formatINR(c.monthlyEmi || Math.round(c.totalFee / 24))}/mo` : '₹3,500/mo',
            badge: u.emiAvailable ? 'badge-success' : 'badge-danger',
            highlight: true
          };
        })
      },
      {
        key: 'highestCtc',
        label: 'Highest Placement CTC',
        category: 'Placements',
        values: universitiesList.map(u => ({
          val: u.metrics.highestCtc,
          highlight: true
        }))
      },
      {
        key: 'avgCtc',
        label: 'Average Placement CTC',
        category: 'Placements',
        values: universitiesList.map(u => ({
          val: u.metrics.avgCtc,
          highlight: true
        }))
      },
      {
        key: 'examMode',
        label: 'Semester Exam Mode',
        category: 'Examinations',
        values: universitiesList.map(u => ({
          val: u.examMode,
          badge: u.examMode.includes('100% Online') ? 'badge-success' : 'badge-warning',
          highlight: true
        }))
      },
      {
        key: 'wesRecognized',
        label: 'WES & Global Acceptance',
        category: 'Accreditation',
        values: universitiesList.map(u => ({
          val: u.accreditations.wesRecognized ? 'Accepted Worldwide (USA/Canada)' : 'National Valid',
          highlight: false
        }))
      },
      {
        key: 'topRecruiters',
        label: 'Top Hiring Partners',
        category: 'Placements',
        values: universitiesList.map(u => ({
          val: u.topRecruiters.slice(0, 4).join(', ') + ' & more',
          highlight: false
        }))
      }
    ];

    return rows;
  }
};
