"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
window.UNIVERSITIES_DATA = [{
  id: "manipal-online",
  name: "Online Manipal (Manipal University Jaipur)",
  shortName: "Manipal Online",
  slug: "online-manipal",
  badge: "Most Popular for MBA & Tech",
  featured: true,
  tagline: "Legacy of 70+ years of Academic Excellence now 100% Online",
  city: "Jaipur",
  state: "Rajasthan",
  foundedYear: 2011,
  parentGroup: "Manipal Education Group (MAHE)",
  universityType: "Private Deemed-to-be University",
  logoText: "MANIPAL",
  logoColor: "#EE4326",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.28 CGPA",
    nirfRank: "Ranked among Top 100",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Top Ranked"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 3840,
    studentEnrolled: "45,000+",
    highestCtc: "18.0 LPA",
    avgCtc: "7.5 LPA",
    placementPercentage: "92%",
    hiringPartnersCount: "500+"
  },
  topRecruiters: ["Amazon", "Deloitte", "Microsoft", "Accenture", "KPMG", "Google", "Infosys", "EY", "Capgemini", "Tata Consultancy Services"],
  examMode: "100% Online Proctored (Take from Home)",
  learningPedagogy: "Live Weekend Masterclasses + 24/7 Recorded HD Lectures on Coursera & LMS",
  emiAvailable: true,
  minMonthlyEmi: 3750,
  scholarships: "Up to 30% for Defense, Merit, & Divyangjan",
  brochureUrl: "#",
  popularCourses: [{
    id: "mu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Master of Business Administration)",
    duration: "2 Years (4 Semesters)",
    eligibility: "10+2+3 (Graduation with min 50% marks, 45% for reserved category)",
    totalFee: 175000,
    perSemFee: 43750,
    monthlyEmi: 4375,
    specializations: ["FinTech & BFSI", "Data Science & Analytics", "Digital Marketing", "Finance Management", "Marketing Management", "Human Resource Management", "Operations Management", "International Business", "Information Technology", "Supply Chain Management"],
    highestCtc: "18 LPA",
    avgCtc: "8.2 LPA",
    keyHighlights: ["Free access to 10,000+ Coursera courses", "Dedicated placement drive with top MNCs", "Harvard Business Publishing simulation & case studies", "100% Online Proctored Semester Exams"]
  }, {
    id: "mu-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (Master of Computer Applications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / B.Sc (IT/CS) / Graduation with Mathematics at 10+2 or Degree level with 50% marks",
    totalFee: 158000,
    perSemFee: 39500,
    monthlyEmi: 3950,
    specializations: ["Cloud Computing", "Full Stack Development", "Data Science & Machine Learning", "Cybersecurity", "Artificial Intelligence"],
    highestCtc: "16 LPA",
    avgCtc: "7.8 LPA",
    keyHighlights: ["Industry capstone projects in AWS & Python", "Hands-on coding labs on browser", "Google Cloud & Microsoft cert preparation", "Resume building & live mock coding interviews"]
  }, {
    id: "mu-online-bba",
    degree: "BBA",
    level: "Undergraduate",
    name: "Online BBA (Bachelor of Business Administration)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 from a recognized board with min 45% marks",
    totalFee: 135000,
    perSemFee: 22500,
    monthlyEmi: 2250,
    specializations: ["Digital Marketing", "Finance & Banking", "Marketing", "Human Resources"],
    highestCtc: "9 LPA",
    avgCtc: "4.5 LPA",
    keyHighlights: ["Foundational business case studies", "Internship opportunities via virtual job fair"]
  }, {
    id: "mu-online-bca",
    degree: "BCA",
    level: "Undergraduate",
    name: "Online BCA (Bachelor of Computer Applications)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 in any stream (Mathematics/Computer preferred) with min 45% marks",
    totalFee: 135000,
    perSemFee: 22500,
    monthlyEmi: 2250,
    specializations: ["Data Analytics", "Cloud Architecture", "Web & Mobile App Development"],
    highestCtc: "10 LPA",
    avgCtc: "5.0 LPA",
    keyHighlights: ["Practical coding from Semester 1", "GitHub portfolio creation support"]
  }],
  pros: ["Prestigious Manipal legacy and globally accepted degree", "Coursera enterprise license bundled with no extra charge", "Robust career assistance with 500+ top recruiters", "Zero travel needed - 100% proctored online exams"],
  cons: ["Slightly higher fee than state open universities"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.9,
    placementSupport: 4.7,
    valueForMoney: 4.8
  }
}, {
  id: "amity-online",
  name: "Amity University Online",
  shortName: "Amity Online",
  slug: "amity-online",
  badge: "India's 1st UGC-Approved Online University",
  featured: true,
  tagline: "Global Exposure with QS Ranked Online Degree Programs",
  city: "Noida",
  state: "Uttar Pradesh",
  foundedYear: 2005,
  parentGroup: "Amity Education Group",
  universityType: "Private University",
  logoText: "AMITY",
  logoColor: "#FFA000",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.27 CGPA",
    nirfRank: "Ranked Top 35 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Ranked #1 Online MBA in India"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 4210,
    studentEnrolled: "60,000+",
    highestCtc: "18.5 LPA",
    avgCtc: "7.2 LPA",
    placementPercentage: "91%",
    hiringPartnersCount: "450+"
  },
  topRecruiters: ["Deloitte", "HCL", "IBM", "American Express", "TCS", "Accenture", "Genpact", "Wipro", "Reliance Jio", "Flipkart"],
  examMode: "100% Online Remote Proctored Exams",
  learningPedagogy: "Amigo LMS Platform with Live Masterclasses & 1-on-1 Mentorship",
  emiAvailable: true,
  minMonthlyEmi: 3300,
  scholarships: "Up to 25% Merit & Sports Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "amity-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Global & Dual Specializations)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation in any stream with min 40% marks",
    totalFee: 179000,
    perSemFee: 44750,
    monthlyEmi: 4475,
    specializations: ["Data Analytics", "Digital Marketing", "International Business", "Finance & Accounting", "HR Management", "Information Technology", "Supply Chain & Logistics"],
    highestCtc: "18.5 LPA",
    avgCtc: "7.9 LPA",
    keyHighlights: ["QS World ranked #1 Online MBA in India", "Dual Specialization options without extra charge"]
  }, {
    id: "amity-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (Master of Computer Applications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / Bachelor Degree in CS with min 50% marks",
    totalFee: 160000,
    perSemFee: 40000,
    monthlyEmi: 4000,
    specializations: ["Cloud Computing", "Machine Learning & AI", "AR & VR Technologies"],
    highestCtc: "15 LPA",
    avgCtc: "7.1 LPA",
    keyHighlights: ["Industry projects with IBM and AWS", "Live masterclasses by international professors"]
  }, {
    id: "amity-online-bba",
    degree: "BBA",
    level: "Undergraduate",
    name: "Online BBA (Bachelor of Business Administration)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 from recognized board",
    totalFee: 150000,
    perSemFee: 25000,
    monthlyEmi: 2500,
    specializations: ["Digital Marketing", "International Finance", "HR"],
    highestCtc: "8.5 LPA",
    avgCtc: "4.2 LPA",
    keyHighlights: ["Global curriculum exposure", "Internship prep & corporate grooming"]
  }],
  pros: ["Top-tier brand recognition worldwide", "Ranked #1 Online MBA by QS in India", "Massive alumni base"],
  cons: ["Strict semester exam schedule"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.8,
    placementSupport: 4.6,
    valueForMoney: 4.7
  }
}, {
  id: "chandigarh-university-online",
  name: "Chandigarh University Online (CU Online)",
  shortName: "Chandigarh University",
  slug: "chandigarh-university-online",
  badge: "Highest NAAC A+ Score & Best ROI",
  featured: true,
  tagline: "India's Youngest University with NAAC A+ & QS World Ranking",
  city: "Mohali / Chandigarh",
  state: "Punjab",
  foundedYear: 2012,
  parentGroup: "Chandigarh University",
  universityType: "Private State University",
  logoText: "CU ONLINE",
  logoColor: "#C62828",
  heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.28 CGPA",
    nirfRank: "NIRF Rank #27 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Top Ranked #1 Private University in India"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3450,
    studentEnrolled: "50,000+",
    highestCtc: "17.0 LPA",
    avgCtc: "6.8 LPA",
    placementPercentage: "90%",
    hiringPartnersCount: "400+"
  },
  topRecruiters: ["Microsoft", "Google", "Amazon", "IBM", "Dell", "Capgemini", "Wipro", "Cognizant", "Mindtree", "Tech Mahindra"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Blackboard Ultra LMS with Live Doubt Sessions & Video Lectures",
  emiAvailable: true,
  minMonthlyEmi: 2800,
  scholarships: "Up to 30% CUCET / Merit Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "cu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks (45% for SC/ST)",
    totalFee: 150000,
    perSemFee: 37500,
    monthlyEmi: 3750,
    specializations: ["International Business", "Finance", "Marketing", "HR", "IT", "Banking"],
    highestCtc: "17 LPA",
    avgCtc: "7.5 LPA",
    keyHighlights: ["Affordable tuition fee with top-tier NAAC A+ accreditation", "Live weekend interactive lectures"]
  }, {
    id: "cu-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (Master of Computer Applications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA/B.Sc CS/IT or Bachelor's with Mathematics with 50% marks",
    totalFee: 130000,
    perSemFee: 32500,
    monthlyEmi: 3250,
    specializations: ["Cloud Computing", "AI & Machine Learning", "Full Stack Development"],
    highestCtc: "15 LPA",
    avgCtc: "6.9 LPA",
    keyHighlights: ["Coding labs on cloud", "Capstone project evaluated by tech leads"]
  }],
  pros: ["Incredible value for money — low fees with NAAC A+ accreditation", "Ranked #1 Private University in India by QS Asia"],
  cons: ["High number of applicants per batch"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.8,
    valueForMoney: 4.9
  }
}, {
  id: "jain-university-online",
  name: "Jain (Deemed-to-be-University) Online",
  shortName: "Jain Online",
  slug: "jain-university-online",
  badge: "NAAC A++ Graded & Tech Hub Silicon Valley Vibe",
  featured: true,
  tagline: "Bangalore's Premier NAAC A++ University with 70+ Electives",
  city: "Bangalore",
  state: "Karnataka",
  foundedYear: 1990,
  parentGroup: "JGI Group",
  universityType: "Deemed-to-be University",
  logoText: "JAIN ONLINE",
  logoColor: "#1565C0",
  heroImage: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.71 CGPA (Highest Category)",
    nirfRank: "NIRF Top 68 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS World Ranked University"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 3120,
    studentEnrolled: "38,000+",
    highestCtc: "21.5 LPA",
    avgCtc: "8.0 LPA",
    placementPercentage: "93%",
    hiringPartnersCount: "500+"
  },
  topRecruiters: ["Google", "Amazon", "Infosys", "KPMG", "PwC", "Schneider Electric", "Johnson Controls", "Honeywell", "Flipkart", "PhonePe"],
  examMode: "100% Online AI-Proctored Exams",
  learningPedagogy: "LEARN LMS with Live Masterclasses & LinkedIn Learning Access",
  emiAvailable: true,
  minMonthlyEmi: 3500,
  scholarships: "Early Bird & Corporate Sponsorship Waivers",
  brochureUrl: "#",
  popularCourses: [{
    id: "jain-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Global Electives & Certifications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation with min 50% marks (45% for reserved)",
    totalFee: 160000,
    perSemFee: 40000,
    monthlyEmi: 4000,
    specializations: ["FinTech", "Business Analytics", "Digital Marketing", "Banking & Finance", "IT", "HR"],
    highestCtc: "21.5 LPA",
    avgCtc: "8.6 LPA",
    keyHighlights: ["Highest NAAC A++ (3.71 CGPA) Accreditation", "Bangalore startup and MNC ecosystem networking"]
  }, {
    id: "jain-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (with Specializations in Cloud, AI, & Cyber)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA/B.Sc IT/CS or Bachelor's with Maths with min 50% marks",
    totalFee: 140000,
    perSemFee: 35000,
    monthlyEmi: 3500,
    specializations: ["Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Full Stack Development"],
    highestCtc: "18 LPA",
    avgCtc: "8.1 LPA",
    keyHighlights: ["Curriculum co-designed with top tech architects", "Live code reviews and hackathons"]
  }],
  pros: ["Top-tier NAAC A++ (3.71 CGPA) rating", "Deep ties to Bangalore IT/Startup hiring corridor"],
  cons: ["Demands dedicated weekly time for projects"],
  studentReviewsRatingBreakdown: {
    faculty: 4.9,
    lms: 4.9,
    placementSupport: 4.8,
    valueForMoney: 4.8
  }
}, {
  id: "nmims-online",
  name: "NMIMS Centre for Distance & Online Education (CDOE)",
  shortName: "NMIMS Online",
  slug: "nmims-online",
  badge: "India's #1 Management Brand",
  featured: true,
  tagline: "SVKM's NMIMS Legacy — Gold Standard for Corporate Management Degrees",
  city: "Mumbai",
  state: "Maharashtra",
  foundedYear: 1981,
  parentGroup: "SVKM's NMIMS",
  universityType: "Deemed-to-be University (Category 1 Autonomy)",
  logoText: "NMIMS CDOE",
  logoColor: "#990000",
  heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.59 CGPA",
    nirfRank: "NIRF Top 21 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked Top B-School"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 4900,
    studentEnrolled: "85,000+",
    highestCtc: "22.0 LPA",
    avgCtc: "9.2 LPA",
    placementPercentage: "94%",
    hiringPartnersCount: "600+"
  },
  topRecruiters: ["Morgan Stanley", "J.P. Morgan", "Deloitte", "HDFC Bank", "ICICI Bank", "Amazon", "KPMG", "Accenture", "Kotak Mahindra", "Tata Motors"],
  examMode: "100% Online Computer-Based Exam (At Home / Exam Centers)",
  learningPedagogy: "NMIMS Student Portal & Mobile App with Case Studies from Harvard & Ivey",
  emiAvailable: true,
  minMonthlyEmi: 4200,
  scholarships: "Special Concessions for Armed Forces & Divyang",
  brochureUrl: "#",
  popularCourses: [{
    id: "nmims-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (General & Specialized)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in any discipline with min 50% marks",
    totalFee: 196000,
    perSemFee: 49000,
    monthlyEmi: 4900,
    specializations: ["Business Analytics", "Banking & Finance", "Marketing Management", "HR", "Operations", "IT"],
    highestCtc: "19 LPA",
    avgCtc: "8.9 LPA",
    keyHighlights: ["Unmatched brand equity in corporate India", "Dedicated Career Services (Job Search, Placement assistance)"]
  }],
  pros: ["Top-tier reputation: The most recognized management brand in India", "Exceptional corporate hiring network"],
  cons: ["Premium fee structure"],
  studentReviewsRatingBreakdown: {
    faculty: 4.9,
    lms: 4.9,
    placementSupport: 4.9,
    valueForMoney: 4.8
  }
}, {
  id: "symbiosis-online",
  name: "Symbiosis Online (SSODL / SCDL)",
  shortName: "Symbiosis Online",
  slug: "symbiosis-online",
  badge: "Pioneer in Distance & Online Education",
  featured: true,
  tagline: "World Class Management Degrees from Pune's Premier Brand",
  city: "Pune",
  state: "Maharashtra",
  foundedYear: 2001,
  parentGroup: "Symbiosis International University",
  universityType: "Deemed University",
  logoText: "SYMBIOSIS",
  logoColor: "#B71C1C",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.58 CGPA",
    nirfRank: "NIRF Top 32 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked Premier Institution"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3900,
    studentEnrolled: "65,000+",
    highestCtc: "16.5 LPA",
    avgCtc: "7.4 LPA",
    placementPercentage: "89%",
    hiringPartnersCount: "420+"
  },
  topRecruiters: ["Cognizant", "Infosys", "Wipro", "Bosch", "Tata Motors", "Barclays", "Vodafone", "Capgemini", "Aditya Birla"],
  examMode: "100% Online Computer-Based Exam (On-Demand Examination)",
  learningPedagogy: "Symbiosis Interactive E-Learning Portal with Virtual Classrooms & E-Books",
  emiAvailable: true,
  minMonthlyEmi: 2900,
  scholarships: "Special Fee Discounts for Armed Forces & Police Personnel",
  brochureUrl: "#",
  popularCourses: [{
    id: "symbiosis-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA / PGDBA",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in any discipline",
    totalFee: 140000,
    perSemFee: 35000,
    monthlyEmi: 3500,
    specializations: ["HR", "Finance", "Marketing", "Operations", "International Business", "Banking"],
    highestCtc: "16.5 LPA",
    avgCtc: "7.8 LPA",
    keyHighlights: ["Symbiosis brand recognition across corporate giants", "On-Demand Exam slot booking flexibility"]
  }],
  pros: ["Famous Symbiosis brand trust", "Flexible on-demand exam slots"],
  cons: ["LMS UI is classical"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.6,
    placementSupport: 4.7,
    valueForMoney: 4.8
  }
}, {
  id: "dy-patil-online",
  name: "Dr. D.Y. Patil Vidyapeeth Centre for Online Learning (DPU COL)",
  shortName: "D.Y. Patil Online",
  slug: "dy-patil-online",
  badge: "NAAC A++ with NIRF Top 46 Ranking",
  featured: true,
  tagline: "Pune's Prestigious Deemed University with Global Digital Learning Ecosystem",
  city: "Pune",
  state: "Maharashtra",
  foundedYear: 1984,
  parentGroup: "Dr. D.Y. Patil Pratishthan",
  universityType: "Deemed-to-be University",
  logoText: "DPU ONLINE",
  logoColor: "#0D47A1",
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.64 CGPA",
    nirfRank: "NIRF Rank #46 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked University"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 2890,
    studentEnrolled: "32,000+",
    highestCtc: "16.0 LPA",
    avgCtc: "7.0 LPA",
    placementPercentage: "90%",
    hiringPartnersCount: "380+"
  },
  topRecruiters: ["Amazon", "Cognizant", "Tech Mahindra", "Bajaj Finserv", "Cipla", "HCL", "Reliance", "Zensar", "L&T Infotech"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "DPU Learn LMS with Mobile App & Recorded Lectures",
  emiAvailable: true,
  minMonthlyEmi: 3100,
  scholarships: "Up to 15% Early Enrollment Fee Waivers",
  brochureUrl: "#",
  popularCourses: [{
    id: "dpu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in any discipline with min 50% marks",
    totalFee: 140000,
    perSemFee: 35000,
    monthlyEmi: 3500,
    specializations: ["Hospital & Healthcare Management", "FinTech", "Digital Marketing", "Finance", "HR", "Marketing"],
    highestCtc: "16 LPA",
    avgCtc: "7.6 LPA",
    keyHighlights: ["Top rated in Hospital & Healthcare Management", "Dual Specialization option included"]
  }],
  pros: ["NAAC A++ accreditation with high CGPA (3.64)", "Market leader in Healthcare MBA"],
  cons: ["Fewer technical degree offerings"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.7,
    valueForMoney: 4.8
  }
}, {
  id: "upes-online",
  name: "UPES Online (University of Petroleum & Energy Studies)",
  shortName: "UPES Online",
  slug: "upes-online",
  badge: "Leader in Oil & Gas, Power, Supply Chain & Tech MBA",
  featured: true,
  tagline: "Industry-First Domain Focused Online Degrees from Dehradun",
  city: "Dehradun",
  state: "Uttarakhand",
  foundedYear: 2003,
  parentGroup: "UPES",
  universityType: "Private University",
  logoText: "UPES ON",
  logoColor: "#E65100",
  heroImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A",
    naacScore: "3.10 CGPA",
    nirfRank: "NIRF Rank #52 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS 5-Star Rating for Employability"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 2450,
    studentEnrolled: "25,000+",
    highestCtc: "19.0 LPA",
    avgCtc: "8.2 LPA",
    placementPercentage: "91%",
    hiringPartnersCount: "350+"
  },
  topRecruiters: ["Shell", "Schlumberger", "Reliance Industries", "ONGC", "L&T", "Adani Power", "Tata Power", "Deloitte", "Amazon"],
  examMode: "100% Online Proctored Semester Exams",
  learningPedagogy: "UPES ON Campus Cloud LMS with Industry Masterclasses",
  emiAvailable: true,
  minMonthlyEmi: 3600,
  scholarships: "Special Corporate & Women in STEM fee waivers",
  brochureUrl: "#",
  popularCourses: [{
    id: "upes-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Energy, Oil & Gas, Logistics, & Tech)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation in any discipline with min 50% marks",
    totalFee: 165000,
    perSemFee: 41250,
    monthlyEmi: 4125,
    specializations: ["Oil & Gas Management", "Power Management", "Logistics & Supply Chain", "Digital Business"],
    highestCtc: "19 LPA",
    avgCtc: "8.8 LPA",
    keyHighlights: ["Niche specialization in Energy, Power & Oil/Gas with high market demand", "QS 5-star rating"]
  }],
  pros: ["Top domain leadership in Energy & Supply Chain", "QS 5-star rating for employability"],
  cons: ["Technical curriculum is dense"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.8,
    valueForMoney: 4.7
  }
}, {
  id: "lpu-online",
  name: "Lovely Professional University Online (LPU Online)",
  shortName: "LPU Online",
  slug: "lpu-online",
  badge: "Budget-Friendly with Huge Placement Drive",
  featured: true,
  tagline: "Ranked among World's Top Universities with Highly Affordable Fees",
  city: "Jalandhar",
  state: "Punjab",
  foundedYear: 2005,
  parentGroup: "Lovely Professional University",
  universityType: "Private University",
  logoText: "LPU ONLINE",
  logoColor: "#D81B60",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.68 CGPA",
    nirfRank: "NIRF Rank #38 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "THE World University Ranked"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3650,
    studentEnrolled: "55,000+",
    highestCtc: "16.0 LPA",
    avgCtc: "6.5 LPA",
    placementPercentage: "90%",
    hiringPartnersCount: "500+"
  },
  topRecruiters: ["Cognizant", "Capgemini", "Amazon", "Wipro", "TCS", "Tech Mahindra", "DXC Technology", "Bosch", "HDFC Bank"],
  examMode: "100% Online AI-Proctored Exams",
  learningPedagogy: "LPU e-Connect Learning Portal with Live Classes & Mobile App",
  emiAvailable: true,
  minMonthlyEmi: 2200,
  scholarships: "Up to 25% LPUNEST and Merit Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "lpu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Multiple Specializations)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's Degree with min 50% marks",
    totalFee: 120000,
    perSemFee: 30000,
    monthlyEmi: 3000,
    specializations: ["Data Science", "Digital Marketing", "Finance", "Marketing", "HR", "Operations", "IT"],
    highestCtc: "16 LPA",
    avgCtc: "7.0 LPA",
    keyHighlights: ["Super affordable fee (₹30,000/sem) with NAAC A++ accreditation", "Free access to workshops"]
  }],
  pros: ["Super affordable fee structure", "NAAC A++ accreditation"],
  cons: ["Large batch size"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.8,
    placementSupport: 4.7,
    valueForMoney: 5.0
  }
}, {
  id: "uttaranchal-university-online",
  name: "Uttaranchal University Online",
  shortName: "Uttaranchal Online",
  slug: "uttaranchal-university-online",
  badge: "NAAC A+ with Lowest Cost Online MBA & MCA",
  featured: false,
  tagline: "UGC-DEB Approved Degree Programs with Best ROI for Students",
  city: "Dehradun",
  state: "Uttarakhand",
  foundedYear: 2013,
  parentGroup: "Uttaranchal University",
  universityType: "Private University",
  logoText: "UTTARANCHAL",
  logoColor: "#00695C",
  heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.30 CGPA",
    nirfRank: "Ranked among Top 100",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Recognized Quality Education"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 1850,
    studentEnrolled: "20,000+",
    highestCtc: "14.0 LPA",
    avgCtc: "6.0 LPA",
    placementPercentage: "88%",
    hiringPartnersCount: "250+"
  },
  topRecruiters: ["TCS", "Wipro", "Tech Mahindra", "Infosys", "Bajaj Auto", "HDFC Life", "ICICI Bank"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Learning Management Portal with Live & Recorded Lectures",
  emiAvailable: true,
  minMonthlyEmi: 2100,
  scholarships: "Up to 20% Domicile & Merit Discounts",
  brochureUrl: "#",
  popularCourses: [{
    id: "uu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's Degree with min 50% marks",
    totalFee: 104000,
    perSemFee: 26000,
    monthlyEmi: 2600,
    specializations: ["Marketing", "Finance", "HR", "IT", "International Business", "Digital Marketing"],
    highestCtc: "14 LPA",
    avgCtc: "6.5 LPA",
    keyHighlights: ["Extremely economical fee at only ₹26,000 per semester", "Dual Specialization included"]
  }],
  pros: ["Lowest fee for NAAC A+ accredited MBA in India", "Direct admissions"],
  cons: ["Fewer international hiring drives"],
  studentReviewsRatingBreakdown: {
    faculty: 4.6,
    lms: 4.6,
    placementSupport: 4.5,
    valueForMoney: 4.9
  }
}, {
  id: "srm-online",
  name: "SRM Institute of Science and Technology Online",
  shortName: "SRM Online",
  slug: "srm-online",
  badge: "Top Engineering & Tech University with NAAC A++",
  featured: false,
  tagline: "South India's Renowned Deemed University with High Industry Acceptance",
  city: "Chennai",
  state: "Tamil Nadu",
  foundedYear: 1985,
  parentGroup: "SRM Group",
  universityType: "Deemed-to-be University",
  logoText: "SRM ONLINE",
  logoColor: "#1A237E",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.55 CGPA",
    nirfRank: "NIRF Rank #18 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked University"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 2150,
    studentEnrolled: "28,000+",
    highestCtc: "18.0 LPA",
    avgCtc: "7.4 LPA",
    placementPercentage: "92%",
    hiringPartnersCount: "400+"
  },
  topRecruiters: ["Amazon", "Cisco", "Siemens", "TCS", "Cognizant", "Infosys", "EY", "Ford", "Standard Chartered"],
  examMode: "100% Online Remote-Proctored Exams",
  learningPedagogy: "SRM e-Campus LMS with Live Expert Webinars",
  emiAvailable: true,
  minMonthlyEmi: 3200,
  scholarships: "Merit & South India Regional Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "srm-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Tech & Management Electives)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 150000,
    perSemFee: 37500,
    monthlyEmi: 3750,
    specializations: ["Business Analytics", "Digital Marketing", "Finance", "HR", "Marketing", "Operations"],
    highestCtc: "18 LPA",
    avgCtc: "7.8 LPA",
    keyHighlights: ["NIRF #18 institution in India with NAAC A++ score", "Strong alumni presence"]
  }],
  pros: ["Top NIRF #18 rank with stellar engineering reputation", "NAAC A++ accreditation"],
  cons: ["Semester exam slots require prompt booking"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.8,
    valueForMoney: 4.7
  }
}, {
  id: "bits-pilani-wilp",
  name: "BITS Pilani WILP (Work Integrated Learning Programmes)",
  shortName: "BITS Pilani WILP",
  slug: "bits-pilani-wilp",
  badge: "India's #1 Technical Institution for Working Professionals",
  featured: true,
  tagline: "Premier Institute of Eminence Degrees for Employed Engineers & Techies",
  city: "Pilani",
  state: "Rajasthan",
  foundedYear: 1964,
  parentGroup: "Birla Institute of Technology and Science",
  universityType: "Deemed University / Institute of Eminence (IoE)",
  logoText: "BITS PILANI",
  logoColor: "#004D40",
  heroImage: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved by UGC for Working Professionals",
    naacGrade: "A",
    naacScore: "3.45 CGPA",
    nirfRank: "NIRF Top 20 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Top Ranked Institute of Eminence"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 3800,
    studentEnrolled: "40,000+",
    highestCtc: "35.0 LPA",
    avgCtc: "16.5 LPA",
    placementPercentage: "96%",
    hiringPartnersCount: "600+"
  },
  topRecruiters: ["Google", "Microsoft", "Amazon", "Apple", "Qualcomm", "Intel", "NVIDIA", "Cisco", "Oracle", "Goldman Sachs"],
  examMode: "Online Remote Proctored Exams + Digital Labs",
  learningPedagogy: "Live Weekend Lectures with BITS Pilani Professors & Remote Virtual Cloud Labs",
  emiAvailable: true,
  minMonthlyEmi: 5500,
  scholarships: "Corporate Sponsorships & Employee Tuition Assistance",
  brochureUrl: "#",
  popularCourses: [{
    id: "bits-wilp-mtech-ai",
    degree: "M.Tech",
    level: "Postgraduate",
    name: "M.Tech in Artificial Intelligence & Machine Learning",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Tech/BE/MCA/M.Sc with min 60% marks + Minimum 1 year of relevant work experience",
    totalFee: 268000,
    perSemFee: 67000,
    monthlyEmi: 6700,
    specializations: ["Deep Learning & NLP", "Computer Vision", "Reinforcement Learning"],
    highestCtc: "35 LPA",
    avgCtc: "18.5 LPA",
    keyHighlights: ["Prestige of BITS Pilani Institute of Eminence degree", "Advanced remote GPU cloud clusters"]
  }],
  pros: ["Top-tier BITS Pilani pedigree and gold standard curriculum", "Massive salary jump for engineers"],
  cons: ["Mandatory minimum work experience required"],
  studentReviewsRatingBreakdown: {
    faculty: 5.0,
    lms: 4.9,
    placementSupport: 4.8,
    valueForMoney: 4.9
  }
}, {
  id: "ignou-online",
  name: "IGNOU (Indira Gandhi National Open University)",
  shortName: "IGNOU",
  slug: "ignou-online",
  badge: "World's Largest Central Open University & Lowest Fee",
  featured: false,
  tagline: "India's Pioneer Central University with Government Recognized Open Degrees",
  city: "New Delhi",
  state: "Delhi",
  foundedYear: 1985,
  parentGroup: "Government of India Central University",
  universityType: "Central University",
  logoText: "IGNOU",
  logoColor: "#0D47A1",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Central University Act Approved",
    naacGrade: "A++",
    naacScore: "3.56 CGPA",
    nirfRank: "India's Premier Open University",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Recognized Worldwide"
  },
  metrics: {
    rating: 4.5,
    reviewCount: 6500,
    studentEnrolled: "3,000,000+",
    highestCtc: "10.0 LPA",
    avgCtc: "4.5 LPA",
    placementPercentage: "75%",
    hiringPartnersCount: "150+"
  },
  topRecruiters: ["State Bank of India", "Govt Sector Departments", "TCS", "Wipro", "Tech Mahindra", "Amazon"],
  examMode: "Pen & Paper Term-End Exam at Designated Study Centers Across India",
  learningPedagogy: "e-GyanKosh Digital Repository + Printed Books + Swayam Prabha TV Lectures",
  emiAvailable: false,
  minMonthlyEmi: 0,
  scholarships: "SC/ST Free Fee Exemption as per Govt of India Norms",
  brochureUrl: "#",
  popularCourses: [{
    id: "ignou-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Master of Business Administration (Online & ODL)",
    duration: "2 Years (Max 4 Years)",
    eligibility: "Bachelor's degree with min 50% marks (45% for reserved category)",
    totalFee: 62000,
    perSemFee: 15500,
    monthlyEmi: 0,
    specializations: ["HR", "Financial Management", "Marketing", "Operations", "Services Management"],
    highestCtc: "10 LPA",
    avgCtc: "5.0 LPA",
    keyHighlights: ["100% valid for all Government Jobs, UPSC, SSC, Banking", "Lowest fee structure in India"]
  }],
  pros: ["100% accepted across all Govt exams", "Lowest tuition fee in India", "SC/ST fee exemption"],
  cons: ["Physical pen-and-paper exams at study centers"],
  studentReviewsRatingBreakdown: {
    faculty: 4.4,
    lms: 4.2,
    placementSupport: 3.9,
    valueForMoney: 5.0
  }
}];
window.COURSES_DATA = [{
  degree: "MBA",
  fullName: "Master of Business Administration",
  level: "Postgraduate",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹7.5 - 12.0 LPA",
  highestSalaryObserved: "₹24 LPA",
  salaryHikePercentage: "70% - 130%",
  icon: "briefcase",
  description: "India's #1 in-demand postgraduate online degree for working professionals seeking managerial, leadership, and CXO trajectory.",
  eligibility: "Graduation in any discipline with min 45-50% marks",
  specializations: [{
    name: "FinTech & Banking",
    demand: "Very High",
    avgCtc: "9.5 LPA",
    hiringRoles: ["Financial Analyst", "FinTech Product Manager", "Risk Consultant"]
  }, {
    name: "Data Science & Business Analytics",
    demand: "Ultra High",
    avgCtc: "11.0 LPA",
    hiringRoles: ["Business Intelligence Lead", "Data Analytics Manager", "Strategy Consultant"]
  }, {
    name: "Digital Marketing & E-Commerce",
    demand: "High",
    avgCtc: "8.5 LPA",
    hiringRoles: ["Growth Marketer", "Digital Brand Manager", "Performance Marketer"]
  }, {
    name: "Finance Management",
    demand: "High",
    avgCtc: "8.8 LPA",
    hiringRoles: ["Corporate Finance Manager", "Investment Associate", "Credit Analyst"]
  }, {
    name: "Human Resource Management (HR)",
    demand: "Medium-High",
    avgCtc: "7.2 LPA",
    hiringRoles: ["HR Business Partner", "Talent Acquisition Lead", "People Ops Manager"]
  }, {
    name: "Operations & Supply Chain",
    demand: "High",
    avgCtc: "9.0 LPA",
    hiringRoles: ["Supply Chain Director", "Logistics Planner", "Plant Operations Lead"]
  }, {
    name: "Healthcare & Hospital Management",
    demand: "High",
    avgCtc: "8.0 LPA",
    hiringRoles: ["Hospital Administrator", "Healthcare Consultant", "Operations Head"]
  }, {
    name: "Information Technology (IT)",
    demand: "Very High",
    avgCtc: "10.5 LPA",
    hiringRoles: ["IT Project Manager", "Scrum Master", "Enterprise Solutions Architect"]
  }]
}, {
  degree: "MCA",
  fullName: "Master of Computer Applications",
  level: "Postgraduate",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹7.0 - 11.5 LPA",
  highestSalaryObserved: "₹18 LPA",
  salaryHikePercentage: "80% - 150%",
  icon: "code",
  description: "Accelerate your tech career with modern software architecture, cloud platforms, full-stack development, and artificial intelligence.",
  eligibility: "BCA / B.Sc CS/IT or Bachelor's with Mathematics with min 50% marks",
  specializations: [{
    name: "Artificial Intelligence & Machine Learning",
    demand: "Ultra High",
    avgCtc: "12.0 LPA",
    hiringRoles: ["AI Engineer", "ML Ops Engineer", "NLP Scientist"]
  }, {
    name: "Cloud Computing & DevOps",
    demand: "Very High",
    avgCtc: "10.8 LPA",
    hiringRoles: ["Cloud Solutions Architect", "DevOps Engineer", "Site Reliability Engineer"]
  }, {
    name: "Full Stack Development",
    demand: "High",
    avgCtc: "9.2 LPA",
    hiringRoles: ["Lead Frontend/Backend Developer", "Tech Lead", "Software Architect"]
  }, {
    name: "Cybersecurity & Information Defense",
    demand: "Very High",
    avgCtc: "10.0 LPA",
    hiringRoles: ["Security Analyst", "Ethical Hacker", "SOC Specialist"]
  }, {
    name: "Data Engineering",
    demand: "High",
    avgCtc: "10.5 LPA",
    hiringRoles: ["Big Data Engineer", "Data Pipeline Architect", "ETL Specialist"]
  }]
}, {
  degree: "BBA",
  fullName: "Bachelor of Business Administration",
  level: "Undergraduate",
  typicalDuration: "3 Years",
  avgStartingSalary: "₹4.0 - 6.5 LPA",
  highestSalaryObserved: "₹10 LPA",
  salaryHikePercentage: "Direct Corporate Entry",
  icon: "award",
  description: "Build robust foundational business, finance, management, and leadership acumen right after 10+2.",
  eligibility: "10+2 in any stream from recognized board with min 45-50% marks",
  specializations: [{
    name: "Digital Marketing & Social Media",
    demand: "High",
    avgCtc: "4.8 LPA",
    hiringRoles: ["Digital Executive", "SEO Strategist", "Social Media Associate"]
  }, {
    name: "Banking & Financial Services",
    demand: "Medium-High",
    avgCtc: "5.0 LPA",
    hiringRoles: ["Relationship Manager", "Branch Associate", "Credit Officer"]
  }, {
    name: "Sales & Marketing",
    demand: "High",
    avgCtc: "4.5 LPA",
    hiringRoles: ["Business Development Executive", "Territory Sales Officer", "Account Specialist"]
  }, {
    name: "Human Resource Management",
    demand: "Medium",
    avgCtc: "4.0 LPA",
    hiringRoles: ["HR Coordinator", "Recruitment Executive"]
  }]
}, {
  degree: "BCA",
  fullName: "Bachelor of Computer Applications",
  level: "Undergraduate",
  typicalDuration: "3 Years",
  avgStartingSalary: "₹4.5 - 7.5 LPA",
  highestSalaryObserved: "₹12 LPA",
  salaryHikePercentage: "Direct IT Industry Entry",
  icon: "terminal",
  description: "Launch an in-demand software engineering or web development career from home with top accredited universities.",
  eligibility: "10+2 in any stream (Maths / Computer preferred) with min 45-50% marks",
  specializations: [{
    name: "Data Analytics & Python",
    demand: "High",
    avgCtc: "5.8 LPA",
    hiringRoles: ["Junior Data Analyst", "BI Associate", "SQL Developer"]
  }, {
    name: "Cloud & Web Applications",
    demand: "High",
    avgCtc: "5.5 LPA",
    hiringRoles: ["Junior Web Developer", "React Developer", "QA Automation Tester"]
  }, {
    name: "Cybersecurity & Networks",
    demand: "Medium-High",
    avgCtc: "5.2 LPA",
    hiringRoles: ["Junior Security Analyst", "Network Administrator"]
  }]
}, {
  degree: "M.Sc",
  fullName: "Master of Science (Data Science / AI / IT)",
  level: "Postgraduate",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹9.0 - 15.0 LPA",
  highestSalaryObserved: "₹24 LPA",
  salaryHikePercentage: "90% - 160%",
  icon: "database",
  description: "Specialized analytical degrees designed for quantitative graduates and techies aiming for high-impact AI/Data roles.",
  eligibility: "Bachelor's degree with Mathematics, Statistics, CS, or Engineering",
  specializations: [{
    name: "Data Science & Big Data",
    demand: "Ultra High",
    avgCtc: "12.5 LPA",
    hiringRoles: ["Data Scientist", "Predictive Modeler", "Analytics Consultant"]
  }, {
    name: "Applied Machine Learning & AI",
    demand: "Ultra High",
    avgCtc: "13.2 LPA",
    hiringRoles: ["Deep Learning Engineer", "Computer Vision Specialist"]
  }]
}, {
  degree: "B.Com",
  fullName: "Bachelor of Commerce (Honours / General)",
  level: "Undergraduate",
  typicalDuration: "3 Years",
  avgStartingSalary: "₹3.8 - 6.0 LPA",
  highestSalaryObserved: "₹8 LPA",
  salaryHikePercentage: "Corporate Finance Entry",
  icon: "calculator",
  description: "Comprehensive financial accounting, taxation, auditing, and corporate law foundation with ACCA integrations.",
  eligibility: "10+2 from recognized board",
  specializations: [{
    name: "International Finance & ACCA",
    demand: "High",
    avgCtc: "5.5 LPA",
    hiringRoles: ["Audit Associate", "Tax Analyst", "Junior Financial Planner"]
  }, {
    name: "Corporate Accounting & GST",
    demand: "Medium",
    avgCtc: "4.2 LPA",
    hiringRoles: ["Accountant", "Accounts Executive", "Compliance Officer"]
  }]
}, {
  degree: "M.Tech",
  fullName: "Master of Technology (Executive / WILP)",
  level: "Postgraduate (Executive)",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹15.0 - 25.0 LPA",
  highestSalaryObserved: "₹38 LPA",
  salaryHikePercentage: "80% - 150%",
  icon: "cpu",
  description: "Elite technical master's for working engineers from institutes like BITS Pilani to advance to Principal Engineer or Tech Director.",
  eligibility: "B.Tech/BE with min 60% marks and 1+ year industry experience",
  specializations: [{
    name: "Software Systems & Cloud Architecture",
    demand: "Ultra High",
    avgCtc: "18.5 LPA",
    hiringRoles: ["Principal Software Engineer", "Chief Architect"]
  }, {
    name: "Artificial Intelligence & Robotics",
    demand: "Ultra High",
    avgCtc: "20.0 LPA",
    hiringRoles: ["AI Research Scientist", "Robotics Lead"]
  }]
}];
window.REVIEWS_DATA = [{
  id: "rev-1",
  studentName: "Rahul Sharma",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (FinTech)",
  university: "Online Manipal (Manipal University Jaipur)",
  universityId: "manipal-online",
  batch: "2024-2026",
  previousRole: "Junior Associate at HDFC Bank (₹4.2 LPA)",
  currentRole: "FinTech Product Consultant at Deloitte (₹11.5 LPA)",
  salaryHike: "173% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "Best decision of my career — 100% online exams & got placed at Deloitte!",
  comment: "I was hesitant between taking a 2-year career break for a regular MBA vs an online degree. UniversityJano's counselor guided me towards Online Manipal. The Coursera access and Harvard case studies were brilliant. The dedicated placement cell arranged mock interviews, and within 3 months of completion, I bagged an 11.5 LPA package at Deloitte without quitting my job!",
  date: "14 July 2026"
}, {
  id: "rev-2",
  studentName: "Priya Venkatesh",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  course: "Online MCA (Cloud & AI)",
  university: "Jain (Deemed-to-be-University) Online",
  universityId: "jain-university-online",
  batch: "2023-2025",
  previousRole: "Support Engineer (₹3.5 LPA)",
  currentRole: "Cloud DevOps Specialist at Schneider Electric (₹9.8 LPA)",
  salaryHike: "180% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "NAAC A++ degree opened doors to top tech companies in Bangalore",
  comment: "The hands-on cloud labs and live coding sessions were outstanding. Because Jain University has NAAC A++ (3.71 CGPA), MNC recruiters treated my degree with the exact same weight as a regular on-campus MCA. The 0% EMI option made payment effortless at ₹3,500/month.",
  date: "28 June 2026"
}, {
  id: "rev-3",
  studentName: "Ankit Verma",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (Business Analytics)",
  university: "NMIMS Centre for Distance & Online Education",
  universityId: "nmims-online",
  batch: "2024-2026",
  previousRole: "Operations Lead (₹6.0 LPA)",
  currentRole: "Senior Analytics Manager at Morgan Stanley (₹15.2 LPA)",
  salaryHike: "153% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "NMIMS brand value in the corporate world is unbeatable",
  comment: "NMIMS is the gold standard in India for management. The live lectures and portal interface are ultra smooth. The degree helped me transition from traditional operations to high-paying strategic analytics at Morgan Stanley.",
  date: "02 August 2026"
}, {
  id: "rev-4",
  studentName: "Sneha Mukherjee",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (Digital Marketing)",
  university: "Amity University Online",
  universityId: "amity-online",
  batch: "2023-2025",
  previousRole: "Content Creator (₹3.2 LPA)",
  currentRole: "Performance Marketing Lead at Nykaa (₹8.6 LPA)",
  salaryHike: "168% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "QS Asia #1 Online MBA lives up to the reputation",
  comment: "The global masterclasses with international faculty gave me practical insights into omnichannel e-commerce. The Amigo LMS app made it easy to study during my daily commute.",
  date: "19 July 2026"
}, {
  id: "rev-5",
  studentName: "Karan Johri",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (Dual Specialization - Marketing & HR)",
  university: "Chandigarh University Online (CU Online)",
  universityId: "chandigarh-university-online",
  batch: "2024-2026",
  previousRole: "Executive Assistant (₹2.8 LPA)",
  currentRole: "Assistant Manager - HR & Strategy (₹7.2 LPA)",
  salaryHike: "157% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "Highest ROI university in India — Top NAAC A+ degree at lowest fee!",
  comment: "At just ₹37,500 per semester, CU Online is a steal. The quality of lectures, professors, and case studies matches universities charging 3x more. Highly recommend comparing universities on UniversityJano before paying any agent!",
  date: "25 July 2026"
}, {
  id: "rev-6",
  studentName: "Deepak Choudhary",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  course: "M.Tech in Artificial Intelligence & ML (WILP)",
  university: "BITS Pilani WILP",
  universityId: "bits-pilani-wilp",
  batch: "2023-2025",
  previousRole: "Senior Software Engineer (₹14 LPA)",
  currentRole: "Staff AI Engineer at Qualcomm (₹31 LPA)",
  salaryHike: "121% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "The gold standard for working software engineers",
  comment: "The depth of math, deep neural network architecture, and distributed GPU labs at BITS Pilani are world-class. It gave me the technical authority to crack Tier-1 US tech company interviews.",
  date: "10 August 2026"
}];
window.ACCREDITATIONS_DATA = {
  ugcDebNotice: {
    title: "UGC (University Grants Commission) & DEB (Distance Education Bureau) Online Degree Equivalence",
    officialGazetteQuote: "Degrees/Diplomas/Certificates awarded for programmes conducted through Open and Distance Learning mode and Online mode by Higher Educational Institutions recognized by the UGC shall be treated as equivalent to corresponding awards of Degree/Diploma offered in Conventional (Regular/On-Campus) mode.",
    source: "UGC Notification F.No. 1-9/2018 (DEB-I) & Public Notice on Equivalence of Degrees",
    validityPoints: [{
      title: "100% Valid for All Government Jobs & Competitive Exams",
      description: "UGC-DEB approved online degrees are fully recognized for Union Public Service Commission (UPSC Civil Services), SSC CGL, State PSCs, RBI, SBI, IBPS Banking, Railways, and Defense exams.",
      icon: "shield-check"
    }, {
      title: "Accepted by Top Global & Indian MNCs",
      description: "Leading corporate recruiters including Google, Amazon, Microsoft, Deloitte, TCS, and HDFC treat UGC-approved online degrees with equal weight during campus drives and lateral hiring.",
      icon: "building"
    }, {
      title: "Valid for Overseas Higher Education & Immigration (WES Approved)",
      description: "NAAC A+ / A++ accredited online universities in India receive Canadian & US WES (World Education Services) ECA credentials and are accepted for PR/visa applications and master's/PhD abroad.",
      icon: "globe"
    }, {
      title: "100% Online Proctored Semester Exams",
      description: "Take all exams comfortably from home with 360-degree AI proctoring and webcam monitoring without travelling to any physical test center.",
      icon: "monitor"
    }]
  },
  accreditationTypes: [{
    code: "UGC-DEB",
    fullName: "University Grants Commission - Distance Education Bureau",
    importance: "Mandatory (Legal License to award online degrees)",
    badgeColor: "#1E40AF",
    description: "Statutory body governing all higher education in India. Without UGC-DEB authorization, an online degree is considered legally invalid."
  }, {
    code: "NAAC A++ / A+",
    fullName: "National Assessment and Accreditation Council",
    importance: "Quality Benchmark (A++ is CGPA 3.51 - 4.00)",
    badgeColor: "#059669",
    description: "Autonomous body grading university teaching standards, research, infrastructure, and learning resources."
  }, {
    code: "AICTE",
    fullName: "All India Council for Technical Education",
    importance: "Required for MBA, MCA & Engineering Degrees",
    badgeColor: "#D97706",
    description: "Statutory council responsible for quality assurance in technical and management programs."
  }, {
    code: "NIRF",
    fullName: "National Institutional Ranking Framework (Govt of India)",
    importance: "Official Ministry of Education Ranking",
    badgeColor: "#7C3AED",
    description: "Annual ranking framework established by the Ministry of Education, Govt. of India."
  }, {
    code: "WES & AIU",
    fullName: "World Education Services & Association of Indian Universities",
    importance: "Global & Overseas Degree Equivalence",
    badgeColor: "#0891B2",
    description: "Ensures international evaluation for Canadian PR, US H-1B, and foreign university admissions."
  }],
  frequentlyAskedQuestions: [{
    q: "Is an online MBA or MCA degree equal to a regular on-campus degree in India?",
    a: "Yes! According to the UGC Gazette Notification F.No. 1-9/2018 (DEB-I), online degrees awarded by UGC-DEB entitled universities are 100% equivalent to conventional on-campus degrees in curriculum value, employment rights, and government eligibility."
  }, {
    q: "Will 'Online' be written on my degree certificate?",
    a: "As per UGC regulations, the degree certificate mentions the program name (e.g., 'Master of Business Administration') along with the delivery mode 'Online' as mandated by UGC guidelines, which confirms legal UGC compliance."
  }, {
    q: "Can I apply for UPSC, SSC, Banking, or State PSC government jobs with an online degree?",
    a: "Absolutely! All government recruitment notifications require a Bachelor's or Master's degree from a recognized university. Since all universities on UniversityJano.com are UGC-DEB approved, you are 100% eligible to appear in UPSC, SSC, Bank PO, and State exams."
  }, {
    q: "How do semester exams work in online degrees?",
    a: "Most top universities (Manipal, Amity, Jain, Chandigarh, NMIMS, DPU, UPES, LPU) conduct 100% online remote-proctored exams where you give the exam on your laptop with a webcam and microphone from home. A few universities like IGNOU conduct pen-paper exams at local study centers."
  }, {
    q: "How does 0% Interest EMI work for tuition fees?",
    a: "UniversityJano partners with educational NBFCs (like Propelld, Eduvanz, GrayQuest) to offer zero-cost monthly EMI options where the semester or full fee is divided equally into 6, 12, or 24 monthly installments without any interest charges."
  }, {
    q: "Why should I use UniversityJano.com instead of consulting unverified agents?",
    a: "UniversityJano offers 100% unbiased, free, and direct comparison of all UGC-DEB approved universities with transparent fees, real NAAC scores, genuine placement stats, and direct university admission support with zero agent brokerage or hidden markups."
  }]
};
window.helpers = {
  formatINR: function formatINR(amount) {
    if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
    if (amount === 0) return 'Free / Nil';
    return '₹' + amount.toLocaleString('en-IN');
  },
  formatLPA: function formatLPA(val) {
    if (!val) return 'N/A';
    if (typeof val === 'string' && val.includes('LPA')) return val;
    return val + ' LPA';
  },
  formatShortNumber: function formatShortNumber(num) {
    if (!num) return '0';
    if (num >= 10000000) return (num / 10000000).toFixed(1) + ' Cr+';
    if (num >= 100000) return (num / 100000).toFixed(1) + ' Lakh+';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'k+';
    return num.toString();
  },
  calculateEMI: function calculateEMI(principal) {
    var months = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    if (!principal || principal <= 0 || !months) return 0;
    return Math.round(principal / months);
  },
  calculateCareerROI: function calculateCareerROI(currentSalaryLPA, targetDegree) {
    var experienceYears = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var current = parseFloat(currentSalaryLPA) || 4.0;
    var multiplier = 1.6;
    var avgDegreeFee = 160000;
    switch (targetDegree) {
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
    var estimatedNewSalary = Math.round(current * multiplier * 10) / 10;
    var salaryGainAnnual = (estimatedNewSalary - current) * 100000;
    var monthlyGain = salaryGainAnnual / 12;
    var paybackMonths = monthlyGain > 0 ? Math.max(1, Math.round(avgDegreeFee / monthlyGain)) : 12;
    var fiveYearGain = Math.round((estimatedNewSalary - current) * 5 * 10) / 10;
    return {
      currentSalary: current,
      estimatedNewSalary: estimatedNewSalary,
      salaryGainAnnual: salaryGainAnnual,
      percentageHike: Math.round((estimatedNewSalary - current) / current * 100),
      paybackMonths: paybackMonths,
      fiveYearGainLakhs: fiveYearGain,
      avgDegreeFee: avgDegreeFee
    };
  },
  calculateCollegeMatchScore: function calculateCollegeMatchScore(university, preferences) {
    var score = 70;
    var budgetMax = preferences.budget ? parseInt(preferences.budget) : 250000;
    var targetDegree = preferences.degree || 'MBA';
    var course = university.popularCourses.find(function (c) {
      return c.degree === targetDegree;
    });
    if (course) {
      score += 15;
      if (course.totalFee <= budgetMax) {
        score += 10;
      } else if (course.totalFee <= budgetMax * 1.25) {
        score += 5;
      }
      if (preferences.specialization && course.specializations) {
        var specMatch = course.specializations.some(function (s) {
          return s.toLowerCase().includes(preferences.specialization.toLowerCase()) || preferences.specialization.toLowerCase().includes(s.toLowerCase());
        });
        if (specMatch) score += 5;
      }
    }
    if (university.accreditations.naacGrade === 'A++') score += 5;else if (university.accreditations.naacGrade === 'A+') score += 3;
    if (preferences.examMode === 'online' && university.examMode.includes('100% Online')) {
      score += 5;
    }
    return Math.min(99, Math.max(72, score));
  },
  getComparisonDifferences: function getComparisonDifferences(universitiesList) {
    var degreeFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MBA';
    if (!universitiesList || universitiesList.length < 2) return [];
    var rows = [{
      key: 'ugcDeb',
      label: 'UGC-DEB Government Approval',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: u.accreditations.ugcDeb ? '100% Entitled & Approved' : 'Under Process',
          badge: u.accreditations.ugcDeb ? 'badge-success' : 'badge-warning',
          highlight: false
        };
      })
    }, {
      key: 'naacGrade',
      label: 'NAAC Grade & Score',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: "".concat(u.accreditations.naacGrade, " (").concat(u.accreditations.naacScore, ")"),
          badge: u.accreditations.naacGrade === 'A++' ? 'badge-purple' : 'badge-blue',
          highlight: true
        };
      })
    }, {
      key: 'nirfRank',
      label: 'NIRF Ranking',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: u.accreditations.nirfRank || 'Participated',
          highlight: false
        };
      })
    }, {
      key: 'totalFee',
      label: "Total Fee (".concat(degreeFilter, ")"),
      category: 'Fees & Budget',
      values: universitiesList.map(function (u) {
        var c = u.popularCourses.find(function (item) {
          return item.degree === degreeFilter;
        }) || u.popularCourses[0];
        return {
          val: c ? window.helpers.formatINR(c.totalFee) : '₹1,50,000 Approx',
          subtext: c ? "".concat(window.helpers.formatINR(c.perSemFee), " / Semester") : '',
          highlight: true
        };
      })
    }, {
      key: 'monthlyEmi',
      label: '0% Monthly EMI (24 Mo)',
      category: 'Fees & Budget',
      values: universitiesList.map(function (u) {
        var c = u.popularCourses.find(function (item) {
          return item.degree === degreeFilter;
        }) || u.popularCourses[0];
        return {
          val: c ? "".concat(window.helpers.formatINR(c.monthlyEmi || Math.round(c.totalFee / 24)), "/mo") : '₹3,500/mo',
          badge: u.emiAvailable ? 'badge-success' : 'badge-danger',
          highlight: true
        };
      })
    }, {
      key: 'highestCtc',
      label: 'Highest Placement CTC',
      category: 'Placements',
      values: universitiesList.map(function (u) {
        return {
          val: u.metrics.highestCtc,
          highlight: true
        };
      })
    }, {
      key: 'avgCtc',
      label: 'Average Placement CTC',
      category: 'Placements',
      values: universitiesList.map(function (u) {
        return {
          val: u.metrics.avgCtc,
          highlight: true
        };
      })
    }, {
      key: 'examMode',
      label: 'Semester Exam Mode',
      category: 'Examinations',
      values: universitiesList.map(function (u) {
        return {
          val: u.examMode,
          badge: u.examMode.includes('100% Online') ? 'badge-success' : 'badge-warning',
          highlight: true
        };
      })
    }, {
      key: 'wesRecognized',
      label: 'WES & Global Acceptance',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: u.accreditations.wesRecognized ? 'Accepted Worldwide (USA/Canada)' : 'National Valid',
          highlight: false
        };
      })
    }, {
      key: 'topRecruiters',
      label: 'Top Hiring Partners',
      category: 'Placements',
      values: universitiesList.map(function (u) {
        return {
          val: u.topRecruiters.slice(0, 4).join(', ') + ' & more',
          highlight: false
        };
      })
    }];
    return rows;
  }
};
window.leadStore = {
  STORAGE_KEY: 'uj_captured_leads_v1',
  getLeads: function getLeads() {
    try {
      var data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error reading leads from storage', e);
    }
    var initialLeads = [{
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
    }, {
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
    }, {
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
    }];
    this.saveLeads(initialLeads);
    return initialLeads;
  },
  saveLeads: function saveLeads(leads) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error('Error saving leads', e);
    }
  },
  addLead: function addLead(leadData) {
    var leads = this.getLeads();
    var newLead = {
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
    fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLead)
    })["catch"](function (err) {
      console.log('Local server offline or mock mode', err);
    });
    return newLead;
  },
  updateLeadStatus: function updateLeadStatus(leadId, newStatus) {
    var leads = this.getLeads();
    var lead = leads.find(function (l) {
      return l.id === leadId;
    });
    if (lead) {
      lead.status = newStatus;
      this.saveLeads(leads);
    }
    return leads;
  },
  exportToCSV: function exportToCSV() {
    var leads = this.getLeads();
    if (!leads.length) {
      alert('No leads available to export.');
      return;
    }
    var headers = ["Lead ID", "Date", "Name", "Phone", "Email", "City", "Course", "Specialization", "Budget", "Universities", "Source", "Status", "Priority"];
    var csvRows = [];
    csvRows.push(headers.join(','));
    leads.forEach(function (l) {
      var row = ["\"".concat(l.id, "\""), "\"".concat(new Date(l.createdAt).toLocaleDateString('en-IN'), "\""), "\"".concat((l.name || '').replace(/"/g, '""'), "\""), "\"".concat((l.phone || '').replace(/"/g, '""'), "\""), "\"".concat((l.email || '').replace(/"/g, '""'), "\""), "\"".concat((l.city || '').replace(/"/g, '""'), "\""), "\"".concat((l.course || '').replace(/"/g, '""'), "\""), "\"".concat((l.specialization || '').replace(/"/g, '""'), "\""), "\"".concat((l.budget || '').replace(/"/g, '""'), "\""), "\"".concat((Array.isArray(l.interestedUniversities) ? l.interestedUniversities.join('; ') : l.interestedUniversities || '').replace(/"/g, '""'), "\""), "\"".concat((l.source || '').replace(/"/g, '""'), "\""), "\"".concat((l.status || '').replace(/"/g, '""'), "\""), "\"".concat((l.priority || '').replace(/"/g, '""'), "\"")];
      csvRows.push(row.join(','));
    });
    var csvContent = "data:text/csv;charset=utf-8," + csvRows.join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "UniversityJano_Leads_".concat(new Date().toISOString().slice(0, 10), ".csv"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
window.Header = function (_ref) {
  var onOpenWizard = _ref.onOpenWizard,
    onOpenCounselling = _ref.onOpenCounselling,
    onOpenAdminCRM = _ref.onOpenAdminCRM,
    compareList = _ref.compareList,
    onOpenCompare = _ref.onOpenCompare,
    activePage = _ref.activePage,
    onNavigate = _ref.onNavigate;
  return React.createElement("header", null, React.createElement("div", {
    className: "top-notice-bar"
  }, React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      flexWrap: 'wrap',
      gap: '0.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("span", {
    className: "notice-pill"
  }, "\uD83D\uDD25 2026 Admissions Open"), React.createElement("span", null, "UGC-DEB Approved Online Universities \u2022 Zero Cost 0% EMI Available")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: '#fed7aa'
    }
  }, "\uD83D\uDCDE Helpline: ", React.createElement("strong", null, "1800-890-5266"), " (Toll Free)"), React.createElement("button", {
    onClick: onOpenAdminCRM,
    className: "btn btn-sm",
    style: {
      padding: '0.2rem 0.6rem',
      fontSize: '0.75rem',
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.3)'
    },
    title: "Admin CRM for Website Owner"
  }, "\uD83D\uDCCA Leads CRM (", window.leadStore ? window.leadStore.getLeads().length : 0, ")")))), React.createElement("nav", {
    className: "header-nav"
  }, React.createElement("div", {
    className: "container header-container"
  }, React.createElement("div", {
    className: "brand-logo-wrap",
    onClick: function onClick() {
      return onNavigate('home');
    }
  }, React.createElement("img", {
    src: "images/logo.png",
    alt: "UniversityJano.com - Explore Compare Choose",
    className: "brand-logo-img"
  })), React.createElement("ul", {
    className: "header-menu"
  }, React.createElement("li", null, React.createElement("span", {
    className: "nav-link ".concat(activePage === 'home' ? 'active' : ''),
    onClick: function onClick() {
      return onNavigate('home');
    }
  }, "\uD83C\uDFE0 Home")), React.createElement("li", null, React.createElement("a", {
    href: "universities/index.html",
    className: "nav-link ".concat(activePage === 'universities' ? 'active' : ''),
    style: { textDecoration: 'none' }
  }, "\uD83C\uDFEB All Universities")), React.createElement("li", null, React.createElement("a", {
    href: "compare.html",
    className: "nav-link ".concat(activePage === 'compare' ? 'active' : ''),
    style: { textDecoration: 'none' }
  }, "\u2696\uFE0F Compare Colleges ", compareList.length > 0 && React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginLeft: '4px'
    }
  }, compareList.length))), React.createElement("li", null, React.createElement("a", {
    href: "roi-calculator.html",
    className: "nav-link ".concat(activePage === 'roi-calculator' ? 'active' : ''),
    style: { textDecoration: 'none' }
  }, "\uD83D\uDCC8 Salary & ROI")), React.createElement("li", null, React.createElement("a", {
    href: "emi-calculator.html",
    className: "nav-link ".concat(activePage === 'emi-calculator' ? 'active' : ''),
    style: { textDecoration: 'none' }
  }, "\uD83D\uDCB3 0% EMI Planner")), React.createElement("li", null, React.createElement("a", {
    href: "ugc-verifier.html",
    className: "nav-link ".concat(activePage === 'ugc-verifier' ? 'active' : ''),
    style: { textDecoration: 'none' }
  }, "\uD83D\uDEE1\uFE0F UGC Approvals")), React.createElement("li", null, React.createElement("a", {
    href: "blog/index.html",
    className: "nav-link ".concat(activePage === 'blog' || activePage === 'blog-post' ? 'active' : ''),
    style: { textDecoration: 'none' }
  }, "\u270D\uFE0F Blog"))), React.createElement("div", {
    className: "header-actions"
  }, React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: onOpenWizard
  }, "\u26A1 Suggest College in 2 Mins"), React.createElement("button", {
    className: "btn btn-navy btn-sm",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Book 1-on-1 Free Expert Counselling',
        source: 'Header CTA'
      });
    }
  }, "Free Counselling")))));
};
window.HeroSection = function (_ref2) {
  var searchQuery = _ref2.searchQuery,
    onSearchChange = _ref2.onSearchChange,
    selectedDegree = _ref2.selectedDegree,
    onSelectDegree = _ref2.onSelectDegree,
    onOpenWizard = _ref2.onOpenWizard,
    onOpenCounselling = _ref2.onOpenCounselling;
  var degrees = ['All', 'MBA', 'MCA', 'BBA', 'BCA', 'M.Sc', 'B.Com', 'M.Tech'];
  return React.createElement("section", {
    className: "hero-wrapper"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", null, React.createElement("div", {
    className: "hero-badge-tag"
  }, React.createElement("span", null, "\uD83C\uDDEE\uD83C\uDDF3 India's #1 AI-Powered Online Degree Portal")), React.createElement("h1", {
    className: "hero-title"
  }, "Sahi University Jano, ", React.createElement("br", null), React.createElement("span", {
    className: "text-gradient-orange"
  }, "Sahi Career Chuno!")), React.createElement("p", {
    className: "hero-desc"
  }, "Compare 25+ UGC-DEB approved top Indian online universities. Discover authentic fees, NAAC grades, 0% EMI plans, and placement records. 100% unbiased & free guidance."), React.createElement("div", {
    className: "hero-search-box"
  }, React.createElement("div", {
    className: "search-input-wrap"
  }, React.createElement("span", {
    style: {
      fontSize: '1.25rem'
    }
  }, "\uD83D\uDD0D"), React.createElement("input", {
    type: "text",
    placeholder: "Search by University (e.g. Manipal, NMIMS) or Degree (e.g. Online MBA)...",
    value: searchQuery,
    onChange: function onChange(e) {
      return onSearchChange(e.target.value);
    }
  })), React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      var el = document.getElementById('universities-section');
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, "Search Universities")), React.createElement("div", {
    className: "hero-degree-pills"
  }, React.createElement("span", null, "Popular Degrees:"), degrees.map(function (deg) {
    return React.createElement("button", {
      key: deg,
      className: "degree-pill-btn ".concat(selectedDegree === deg ? 'active' : ''),
      onClick: function onClick() {
        return onSelectDegree(deg);
      }
    }, deg === 'All' ? '⚡ All Degrees' : "Online ".concat(deg));
  }))), React.createElement("div", null, React.createElement("div", {
    className: "hero-interactive-card"
  }, React.createElement("div", {
    className: "hero-card-header"
  }, React.createElement("div", null, React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginBottom: '0.4rem'
    }
  }, "\u26A1 100% Free AI Tool"), React.createElement("h3", {
    className: "hero-card-title"
  }, "Confused Which Online University to Choose?"))), React.createElement("p", {
    style: {
      color: '#e2e8f0',
      fontSize: '0.925rem',
      marginBottom: '1rem'
    }
  }, "Don't waste weeks talking to unverified agents. Answer 4 quick questions and get an instant AI-matched shortlist with exact fees & placement data."), React.createElement("div", {
    className: "hero-trust-chips"
  }, React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDEE1\uFE0F"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "100% UGC-DEB"), React.createElement("span", null, "Govt. Entitled"))), React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDCB3"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "Zero-Cost EMI"), React.createElement("span", null, "Start @ \u20B92,200/mo"))), React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDCCA"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "Side-by-Side"), React.createElement("span", null, "Compare 4 Colleges"))), React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDCBC"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "Placement Cell"), React.createElement("span", null, "Top MNC Drives")))), React.createElement("button", {
    className: "btn btn-primary btn-lg btn-block",
    onClick: onOpenWizard,
    style: {
      fontWeight: '700'
    }
  }, "\u2728 Suggest Me A College in 2 Mins \u2192"), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '0.85rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.775rem',
      color: '#cbd5e1'
    }
  }, "\uD83D\uDD12 50,000+ Indian students already guided \u2022 Zero spam guarantee")))))));
};
window.UniversityCard = function (_ref3) {
  var university = _ref3.university,
    selectedDegree = _ref3.selectedDegree,
    onViewDetails = _ref3.onViewDetails,
    onOpenLeadModal = _ref3.onOpenLeadModal,
    onToggleCompare = _ref3.onToggleCompare,
    isComparing = _ref3.isComparing;
  var currentCourse = university.popularCourses.find(function (c) {
    return selectedDegree === 'All' ? true : c.degree === selectedDegree;
  }) || university.popularCourses[0];
  return React.createElement("div", {
    className: "uni-card"
  }, university.badge && React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: '1.5rem',
      background: university.featured ? 'linear-gradient(135deg, #ff7a00, #ff9100)' : 'var(--navy-800)',
      color: '#ffffff',
      padding: '0.2rem 0.75rem',
      borderBottomLeftRadius: '6px',
      borderBottomRightRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '700',
      boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
      zIndex: 2
    }
  }, "\u2B50 ", university.badge), React.createElement("div", {
    className: "uni-card-body"
  }, React.createElement("div", {
    className: "uni-logo-col"
  }, React.createElement("a", {
    className: "uni-logo-box",
    href: "universities/".concat(university.slug, ".html"),
    style: {
      borderColor: university.logoColor,
      color: university.logoColor,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, university.logoText), React.createElement("div", {
    className: "uni-rating-tag"
  }, React.createElement("span", null, "\u2605 ", university.metrics.rating), React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontWeight: '400',
      fontSize: '0.75rem'
    }
  }, "(", university.metrics.reviewCount, ")")), React.createElement("div", {
    style: {
      marginTop: '0.5rem'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.7rem'
    }
  }, "\u2713 UGC-DEB Verified"))), React.createElement("div", {
    className: "uni-info-col"
  }, React.createElement("h3", {
    style: { cursor: 'pointer' }
  }, React.createElement("a", {
    href: "universities/".concat(university.slug, ".html"),
    style: { color: 'inherit', textDecoration: 'none' }
  }, university.name)), React.createElement("div", {
    className: "uni-meta-location"
  }, React.createElement("span", null, "\uD83D\uDCCD ", university.city, ", ", university.state), React.createElement("span", null, "\u2022"), React.createElement("span", null, "Est. ", university.foundedYear), React.createElement("span", null, "\u2022"), React.createElement("span", {
    style: {
      color: 'var(--blue-600)',
      fontWeight: '600'
    }
  }, university.universityType)), React.createElement("div", {
    className: "uni-accreditations-row"
  }, React.createElement("span", {
    className: "badge badge-purple"
  }, "\uD83C\uDFC6 NAAC ", university.accreditations.naacGrade, " (", university.accreditations.naacScore, ")"), React.createElement("span", {
    className: "badge badge-blue"
  }, "\uD83D\uDCDC ", university.accreditations.nirfRank), university.accreditations.wesRecognized && React.createElement("span", {
    className: "badge badge-orange"
  }, "\uD83C\uDF10 WES (USA/Canada)"), university.accreditations.aicteApproved && React.createElement("span", {
    className: "badge badge-success"
  }, "\u2699\uFE0F AICTE Approved")), React.createElement("ul", {
    className: "uni-perks-list"
  }, React.createElement("li", null, React.createElement("span", null, "\uD83D\uDCBB"), " ", university.examMode.includes('100% Online') ? '100% Online Exam from Home' : 'Center Exam'), React.createElement("li", null, React.createElement("span", null, "\u26A1"), " ", currentCourse.specializations ? "".concat(currentCourse.specializations.length, "+ Specializations") : 'Industry Curriculum'), React.createElement("li", null, React.createElement("span", null, "\uD83E\uDD1D"), " ", university.metrics.hiringPartnersCount, " Hiring Partners"))), React.createElement("div", {
    className: "uni-stats-col"
  }, React.createElement("div", {
    className: "stat-metric-block"
  }, React.createElement("div", {
    className: "metric-label"
  }, "Course: Online ", currentCourse.degree), React.createElement("div", {
    className: "metric-value price"
  }, window.helpers.formatINR(currentCourse.totalFee)), React.createElement("div", {
    className: "metric-sub"
  }, window.helpers.formatINR(currentCourse.perSemFee), " / Semester")), React.createElement("div", {
    className: "stat-metric-block"
  }, React.createElement("div", {
    className: "metric-label"
  }, "Placement Record"), React.createElement("div", {
    className: "metric-value"
  }, "\u20B9", university.metrics.highestCtc, " ", React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      fontWeight: '500',
      color: 'var(--text-muted)'
    }
  }, "Highest")), React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Avg: \u20B9", university.metrics.avgCtc))), React.createElement("div", {
    className: "uni-actions-col"
  }, React.createElement("button", {
    className: "btn btn-primary btn-block",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Apply to ".concat(university.shortName),
        university: university.name,
        course: "Online ".concat(currentCourse.degree),
        source: 'University Card - Apply Button'
      });
    }
  }, "Apply for Admission"), React.createElement("button", {
    className: "btn btn-secondary btn-block btn-sm",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Download ".concat(university.shortName, " Prospectus & Syllabus"),
        university: university.name,
        course: "Online ".concat(currentCourse.degree),
        type: 'prospectus',
        source: 'University Card - Download Brochure'
      });
    }
  }, "\uD83D\uDCE5 Download Prospectus"), React.createElement("a", {
    className: "btn btn-sm",
    href: "universities/".concat(university.slug, ".html"),
    style: {
      background: 'transparent',
      color: 'var(--orange-600)',
      border: 'none',
      padding: '0.25rem',
      fontWeight: '700',
      textDecoration: 'none'
    }
  }, "Explore Full University Page \u2192"), React.createElement("label", {
    className: "compare-checkbox-label"
  }, React.createElement("input", {
    type: "checkbox",
    checked: isComparing,
    onChange: function onChange() {
      return onToggleCompare(university);
    }
  }), React.createElement("span", null, isComparing ? '✓ Comparing' : '+ Add to Compare')))));
};
window.FilterSidebar = function (_ref4) {
  var selectedDegree = _ref4.selectedDegree,
    onSelectDegree = _ref4.onSelectDegree,
    selectedNaac = _ref4.selectedNaac,
    onSelectNaac = _ref4.onSelectNaac,
    maxBudget = _ref4.maxBudget,
    onBudgetChange = _ref4.onBudgetChange,
    onlyOnlineExam = _ref4.onlyOnlineExam,
    onToggleOnlineExam = _ref4.onToggleOnlineExam,
    onlyEmi = _ref4.onlyEmi,
    onToggleEmi = _ref4.onToggleEmi,
    onResetFilters = _ref4.onResetFilters;
  var degrees = [{
    id: 'All',
    label: 'All Degrees'
  }, {
    id: 'MBA',
    label: 'Online MBA'
  }, {
    id: 'MCA',
    label: 'Online MCA'
  }, {
    id: 'BBA',
    label: 'Online BBA'
  }, {
    id: 'BCA',
    label: 'Online BCA'
  }, {
    id: 'M.Sc',
    label: 'Online M.Sc (Data Science)'
  }, {
    id: 'B.Com',
    label: 'Online B.Com'
  }, {
    id: 'M.Tech',
    label: 'M.Tech (Working Execs)'
  }];
  var naacGrades = ['All', 'A++', 'A+'];
  return React.createElement("aside", {
    className: "filter-card"
  }, React.createElement("div", {
    className: "filter-header"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.1rem'
    }
  }, "\u2699\uFE0F"), React.createElement("h4", {
    style: {
      margin: 0
    }
  }, "Filter Colleges")), React.createElement("button", {
    onClick: onResetFilters,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--primary-600)',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  }, "Reset All")), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "Degree Program")), React.createElement("div", {
    className: "filter-options"
  }, degrees.map(function (d) {
    return React.createElement("label", {
      key: d.id,
      className: "filter-label"
    }, React.createElement("input", {
      type: "radio",
      name: "degreeRadio",
      checked: selectedDegree === d.id,
      onChange: function onChange() {
        return onSelectDegree(d.id);
      }
    }), React.createElement("span", null, d.label));
  }))), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "Maximum Total Fee"), React.createElement("span", {
    style: {
      color: 'var(--primary-600)'
    }
  }, window.helpers.formatINR(maxBudget))), React.createElement("div", {
    className: "slider-container"
  }, React.createElement("input", {
    type: "range",
    min: "40000",
    max: "300000",
    step: "10000",
    value: maxBudget,
    onChange: function onChange(e) {
      return onBudgetChange(Number(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B940,000"), React.createElement("span", null, "\u20B93.0 Lakhs")))), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "NAAC Grade")), React.createElement("div", {
    className: "filter-options"
  }, naacGrades.map(function (grade) {
    return React.createElement("label", {
      key: grade,
      className: "filter-label"
    }, React.createElement("input", {
      type: "radio",
      name: "naacRadio",
      checked: selectedNaac === grade,
      onChange: function onChange() {
        return onSelectNaac(grade);
      }
    }), React.createElement("span", null, grade === 'All' ? 'All Accredited' : "NAAC ".concat(grade, " Rated Only")));
  }))), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "Preferences & Features")), React.createElement("div", {
    className: "filter-options"
  }, React.createElement("label", {
    className: "filter-label"
  }, React.createElement("input", {
    type: "checkbox",
    checked: onlyOnlineExam,
    onChange: function onChange(e) {
      return onToggleOnlineExam(e.target.checked);
    }
  }), React.createElement("span", null, "\uD83C\uDFE0 100% Online Exam (At Home)")), React.createElement("label", {
    className: "filter-label"
  }, React.createElement("input", {
    type: "checkbox",
    checked: onlyEmi,
    onChange: function onChange(e) {
      return onToggleEmi(e.target.checked);
    }
  }), React.createElement("span", null, "\uD83D\uDCB3 0% Interest Monthly EMI")))), React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: 'var(--primary-50)',
      borderRadius: 'var(--radius-md)',
      border: '1px dashed var(--primary-200)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.25rem'
    }
  }, "\uD83D\uDC68\u200D\uD83C\uDFEB"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      color: 'var(--primary-900)'
    }
  }, "Need Expert Recommendation?"), React.createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      margin: '0.35rem 0 0.75rem 0'
    }
  }, "Talk to our senior admission counselors for free."), React.createElement("button", {
    className: "btn btn-primary btn-sm btn-block",
    onClick: function onClick() {
      return window.open('https://wa.me/919876543210?text=Hi%20UniversityJano,%20I%20need%20help%20choosing%20an%20online%20degree', '_blank');
    }
  }, "\uD83D\uDCAC WhatsApp Counselor")));
};
window.CompareModal = function (_ref5) {
  var compareList = _ref5.compareList,
    onClose = _ref5.onClose,
    onRemoveUniversity = _ref5.onRemoveUniversity,
    onOpenLeadModal = _ref5.onOpenLeadModal,
    _ref5$selectedDegree = _ref5.selectedDegree,
    selectedDegree = _ref5$selectedDegree === void 0 ? 'MBA' : _ref5$selectedDegree;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    highlightDiff = _React$useState2[0],
    setHighlightDiff = _React$useState2[1];
  var _React$useState3 = React.useState(selectedDegree === 'All' ? 'MBA' : selectedDegree),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    activeDegree = _React$useState4[0],
    setActiveDegree = _React$useState4[1];
  if (!compareList || compareList.length === 0) {
    return null;
  }
  var comparisonRows = window.helpers.getComparisonDifferences(compareList, activeDegree);
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-xl",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("span", {
    className: "badge badge-purple"
  }, "\u2696\uFE0F Side-by-Side Comparison"), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Comparing ", compareList.length, " of 4 Universities")), React.createElement("h3", {
    style: {
      marginTop: '0.35rem'
    }
  }, "Detailed University Comparison Matrix")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked: highlightDiff,
    onChange: function onChange(e) {
      return setHighlightDiff(e.target.checked);
    },
    style: {
      width: '16px',
      height: '16px',
      accentColor: 'var(--primary-600)'
    }
  }), React.createElement("span", null, "Highlight Differences")), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715"))), React.createElement("div", {
    className: "modal-body",
    style: {
      padding: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: 'var(--text-muted)'
    }
  }, "Comparing Course:"), ['MBA', 'MCA', 'BBA', 'BCA', 'M.Sc'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      className: "btn btn-sm ".concat(activeDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setActiveDegree(deg);
      }
    }, "Online ", deg);
  })), React.createElement("div", {
    className: "comparison-table-wrapper"
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      minWidth: '180px',
      width: '20%'
    }
  }, "Key Parameters"), compareList.map(function (uni) {
    return React.createElement("th", {
      key: uni.id,
      style: {
        minWidth: '220px',
        textAlign: 'center',
        verticalAlign: 'top',
        position: 'relative'
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return onRemoveUniversity(uni.id);
      },
      style: {
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
      },
      title: "Remove from comparison"
    }, "\u2715"), React.createElement("div", {
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '10px',
        background: '#f8fafc',
        border: "2px solid ".concat(uni.logoColor),
        color: uni.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.75rem',
        margin: '0 auto 0.5rem auto'
      }
    }, uni.logoText), React.createElement("div", {
      style: {
        fontWeight: '700',
        fontSize: '0.95rem',
        color: 'var(--primary-900)'
      }
    }, uni.shortName), React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginBottom: '0.75rem'
      }
    }, "\uD83D\uDCCD ", uni.city, ", ", uni.state), React.createElement("button", {
      className: "btn btn-primary btn-sm btn-block",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Apply to ".concat(uni.shortName),
          university: uni.name,
          course: "Online ".concat(activeDegree),
          source: 'Comparison Matrix CTA'
        });
      }
    }, "Enquire / Apply"));
  }))), React.createElement("tbody", null, comparisonRows.map(function (row, idx) {
    var isHighlighted = highlightDiff && row.highlight;
    return React.createElement("tr", {
      key: idx,
      className: isHighlighted ? 'diff-highlight' : ''
    }, React.createElement("td", {
      style: {
        fontWeight: '600',
        color: 'var(--primary-900)'
      }
    }, React.createElement("div", null, row.label), React.createElement("span", {
      style: {
        fontSize: '0.7rem',
        color: 'var(--text-subtle)',
        textTransform: 'uppercase'
      }
    }, row.category)), row.values.map(function (valObj, vIdx) {
      return React.createElement("td", {
        key: vIdx,
        style: {
          textAlign: 'center',
          verticalAlign: 'middle'
        }
      }, valObj.badge ? React.createElement("span", {
        className: "badge ".concat(valObj.badge)
      }, valObj.val) : React.createElement("div", {
        style: {
          fontWeight: '600',
          color: 'var(--text-main)'
        }
      }, valObj.val), valObj.subtext && React.createElement("div", {
        style: {
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: '2px'
        }
      }, valObj.subtext));
    }));
  })))), React.createElement("div", {
    style: {
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
    }
  }, React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--primary-900)'
    }
  }, "Still undecided between these options?"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.85rem'
    }
  }, "Schedule a 10-minute free profile evaluation with our senior academic advisor.")), React.createElement("button", {
    className: "btn btn-accent btn-sm",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: 'Get Free Comparative Evaluation from Senior Counselor',
        course: "Online ".concat(activeDegree),
        notes: "Comparing: ".concat(compareList.map(function (u) {
          return u.shortName;
        }).join(' vs ')),
        source: 'Comparison Matrix Bottom CTA'
      });
    }
  }, "Get Free Comparative Call")))));
};
window.AIWizardModal = function (_ref6) {
  var onClose = _ref6.onClose,
    onCompleteShortlist = _ref6.onCompleteShortlist,
    onOpenLeadModal = _ref6.onOpenLeadModal;
  var _React$useState5 = React.useState(1),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    step = _React$useState6[0],
    setStep = _React$useState6[1];
  var _React$useState7 = React.useState({
      qualification: 'Graduation Completed',
      degree: 'MBA',
      specialization: 'FinTech & Analytics',
      budget: 180000,
      learningMode: '100% Online with Live Weekend Classes',
      emiNeeded: 'Yes, need 0% EMI',
      name: '',
      phone: '',
      email: '',
      city: ''
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    preferences = _React$useState8[0],
    setPreferences = _React$useState8[1];
  var _React$useState9 = React.useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    matchedResults = _React$useState10[0],
    setMatchedResults = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    submitting = _React$useState12[0],
    setSubmitting = _React$useState12[1];
  var qualifications = ['10+2 / Intermediate', 'Graduation Completed (BA/B.Sc/B.Com/BBA)', 'Engineering / B.Tech / BCA Graduate', 'Working Professional (2+ Yrs Experience)'];
  var degreesList = [{
    id: 'MBA',
    name: 'Online MBA',
    icon: '💼'
  }, {
    id: 'MCA',
    name: 'Online MCA',
    icon: '💻'
  }, {
    id: 'BBA',
    name: 'Online BBA',
    icon: '📈'
  }, {
    id: 'BCA',
    name: 'Online BCA',
    icon: '⚡'
  }, {
    id: 'M.Sc',
    name: 'Online M.Sc (Data Science)',
    icon: '📊'
  }, {
    id: 'M.Tech',
    name: 'M.Tech for Working Execs',
    icon: '⚙️'
  }];
  var handleNext = function handleNext() {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmitAndRecommend();
    }
  };
  var handleSubmitAndRecommend = function handleSubmitAndRecommend() {
    if (!preferences.phone || preferences.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number to generate your AI match report.');
      return;
    }
    setSubmitting(true);
    window.leadStore.addLead({
      name: preferences.name || 'AI Quiz Student',
      phone: preferences.phone,
      email: preferences.email,
      city: preferences.city || 'India',
      course: "Online ".concat(preferences.degree),
      specialization: preferences.specialization,
      budget: "\u20B9".concat(preferences.budget.toLocaleString('en-IN')),
      source: 'AI 2-Min Wizard Funnel'
    });
    var allUnis = window.UNIVERSITIES_DATA || [];
    var scored = allUnis.map(function (u) {
      var matchScore = window.helpers.calculateCollegeMatchScore(u, preferences);
      var course = u.popularCourses.find(function (c) {
        return c.degree === preferences.degree;
      }) || u.popularCourses[0];
      return _objectSpread(_objectSpread({}, u), {}, {
        matchScore: matchScore,
        matchedCourse: course
      });
    });
    scored.sort(function (a, b) {
      return b.matchScore - a.matchScore;
    });
    setTimeout(function () {
      setMatchedResults(scored.slice(0, 3));
      setSubmitting(false);
      setStep(5);
    }, 600);
  };
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-lg",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("span", {
    className: "badge badge-amber"
  }, "\u26A1 AI Matchmaker"), React.createElement("h3", {
    style: {
      margin: 0
    }
  }, step <= 4 ? 'Suggest Me A College in 2 Mins' : '🎯 Your Personalized AI University Shortlist')), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715")), React.createElement("div", {
    className: "modal-body"
  }, step <= 4 && React.createElement("div", null, React.createElement("div", {
    className: "wizard-progress-bar"
  }, [1, 2, 3, 4].map(function (s) {
    return React.createElement("div", {
      key: s,
      className: "wizard-step-node ".concat(step === s ? 'active' : step > s ? 'completed' : '')
    }, step > s ? '✓' : s);
  })), step === 1 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "1. What is your current highest qualification?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "This helps our AI check your eligibility across NAAC A++ universities."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }
  }, qualifications.map(function (q) {
    return React.createElement("div", {
      key: q,
      className: "wizard-option-card ".concat(preferences.qualification === q ? 'selected' : ''),
      onClick: function onClick() {
        return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
          qualification: q
        }));
      }
    }, React.createElement("span", {
      style: {
        fontSize: '1.25rem'
      }
    }, "\uD83C\uDF93"), React.createElement("strong", {
      style: {
        fontSize: '0.95rem'
      }
    }, q));
  }))), step === 2 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "2. Which online degree are you planning to pursue?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "Select your target program to compare curriculum & specializations."), React.createElement("div", {
    className: "wizard-options-grid"
  }, degreesList.map(function (d) {
    return React.createElement("div", {
      key: d.id,
      className: "wizard-option-card ".concat(preferences.degree === d.id ? 'selected' : ''),
      onClick: function onClick() {
        return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
          degree: d.id
        }));
      }
    }, React.createElement("span", {
      style: {
        fontSize: '1.5rem'
      }
    }, d.icon), React.createElement("div", null, React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '1rem'
      }
    }, d.name), React.createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "UGC-DEB Entitled")));
  }))), step === 3 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "3. What is your total budget for the degree?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "All listed universities offer monthly zero-interest EMI financing."), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--primary-50)',
      borderRadius: 'var(--radius-lg)',
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: '600'
    }
  }, "Your Budget Cap:"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.25rem'
    }
  }, window.helpers.formatINR(preferences.budget))), React.createElement("input", {
    type: "range",
    min: "50000",
    max: "300000",
    step: "10000",
    value: preferences.budget,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        budget: Number(e.target.value)
      }));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B950,000"), React.createElement("span", null, "\u20B93.0 Lakhs"))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem'
    }
  }, React.createElement("div", {
    className: "wizard-option-card ".concat(preferences.emiNeeded.includes('Yes') ? 'selected' : ''),
    onClick: function onClick() {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        emiNeeded: 'Yes, need 0% EMI'
      }));
    },
    style: {
      flex: 1
    }
  }, React.createElement("span", null, "\uD83D\uDCB3"), React.createElement("div", null, React.createElement("strong", null, "Need 0% EMI"), React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Pay \u20B92,500 - \u20B94,500/mo"))), React.createElement("div", {
    className: "wizard-option-card ".concat(preferences.emiNeeded.includes('Full') ? 'selected' : ''),
    onClick: function onClick() {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        emiNeeded: 'Full payment per semester'
      }));
    },
    style: {
      flex: 1
    }
  }, React.createElement("span", null, "\uD83D\uDCB5"), React.createElement("div", null, React.createElement("strong", null, "Pay Per Semester"), React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Standard semester fees"))))), step === 4 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "4. Where should we send your AI Shortlist & Fee Report?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "Receive instant PDF prospectus and personalized scholarships on WhatsApp."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Full Name *"), React.createElement("input", {
    type: "text",
    placeholder: "e.g. Rahul Sharma",
    className: "btn-secondary",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.name,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        name: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "WhatsApp / Mobile Number *"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      padding: '0.75rem',
      background: '#e2e8f0',
      borderRadius: '8px',
      fontWeight: '600'
    }
  }, "+91"), React.createElement("input", {
    type: "tel",
    placeholder: "98765 43210",
    style: {
      flex: 1,
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.phone,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        phone: e.target.value
      }));
    }
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Email Address"), React.createElement("input", {
    type: "email",
    placeholder: "rahul@example.com",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.email,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        email: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "City"), React.createElement("input", {
    type: "text",
    placeholder: "e.g. Pune / Delhi / Bangalore",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.city,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        city: e.target.value
      }));
    }
  }))))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
      paddingTop: '1.25rem',
      borderTop: '1px solid var(--border-light)'
    }
  }, step > 1 ? React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: function onClick() {
      return setStep(step - 1);
    }
  }, "\u2190 Back") : React.createElement("div", null), React.createElement("button", {
    className: "btn btn-amber",
    onClick: handleNext,
    disabled: submitting
  }, submitting ? '🤖 Computing Matches...' : step === 4 ? '✨ Generate My College Matches →' : 'Continue Next →'))), step === 5 && React.createElement("div", null, React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '2rem'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.85rem',
      padding: '0.35rem 0.85rem'
    }
  }, "\uD83C\uDF89 Match Report Ready"), React.createElement("h3", {
    style: {
      marginTop: '0.5rem'
    }
  }, "Top 3 Recommended Universities for Online ", preferences.degree), React.createElement("p", {
    style: {
      fontSize: '0.9rem'
    }
  }, "Matched based on your budget of ", window.helpers.formatINR(preferences.budget), ", qualification, and NAAC ratings.")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }
  }, matchedResults.map(function (uni, idx) {
    return React.createElement("div", {
      key: uni.id,
      style: {
        border: idx === 0 ? '2px solid var(--accent-emerald)' : '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        background: idx === 0 ? 'linear-gradient(to right, #f0fdf4, #ffffff)' : '#ffffff',
        position: 'relative'
      }
    }, idx === 0 && React.createElement("div", {
      style: {
        position: 'absolute',
        top: '-12px',
        left: '1.5rem',
        background: 'var(--accent-emerald)',
        color: '#ffffff',
        padding: '0.2rem 0.75rem',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.75rem',
        fontWeight: '700'
      }
    }, "\uD83D\uDC51 #1 Best Overall Match"), React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }
    }, React.createElement("div", {
      style: {
        width: '56px',
        height: '56px',
        borderRadius: '12px',
        background: '#ffffff',
        border: "2px solid ".concat(uni.logoColor),
        color: uni.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.85rem'
      }
    }, uni.logoText), React.createElement("div", null, React.createElement("h4", {
      style: {
        margin: 0,
        fontSize: '1.15rem'
      }
    }, uni.name), React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.5rem',
        marginTop: '0.25rem'
      }
    }, React.createElement("span", {
      className: "badge badge-purple"
    }, "NAAC ", uni.accreditations.naacGrade), React.createElement("span", {
      className: "badge badge-blue"
    }, "Highest CTC \u20B9", uni.metrics.highestCtc)))), React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, React.createElement("div", {
      style: {
        fontSize: '1.5rem',
        fontWeight: '800',
        color: 'var(--accent-emerald)'
      }
    }, uni.matchScore, "% Match"), React.createElement("span", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }
    }, "Total: ", window.helpers.formatINR(uni.matchedCourse.totalFee)))), React.createElement("div", {
      style: {
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px dashed var(--border-light)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }
    }, React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }
    }, "\u2713 ", uni.pros[0]), React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.5rem'
      }
    }, React.createElement("button", {
      className: "btn btn-secondary btn-sm",
      onClick: function onClick() {
        onClose();
        onOpenLeadModal({
          title: "Download ".concat(uni.shortName, " Prospectus"),
          university: uni.name,
          course: "Online ".concat(preferences.degree),
          type: 'prospectus',
          source: 'AI Wizard Results'
        });
      }
    }, "\uD83D\uDCE5 Prospectus"), React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: function onClick() {
        onClose();
        onOpenLeadModal({
          title: "Confirm Admission at ".concat(uni.shortName),
          university: uni.name,
          course: "Online ".concat(preferences.degree),
          source: 'AI Wizard Match Top CTA'
        });
      }
    }, "Apply Now \u2192"))));
  })), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '2rem'
    }
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onClose
  }, "Explore All Universities in Directory"))))));
};
window.ROICalculator = function (_ref7) {
  var onOpenCounselling = _ref7.onOpenCounselling;
  var _React$useState13 = React.useState(4.5),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    currentSalary = _React$useState14[0],
    setCurrentSalary = _React$useState14[1];
  var _React$useState15 = React.useState('MBA'),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    targetDegree = _React$useState16[0],
    setTargetDegree = _React$useState16[1];
  var _React$useState17 = React.useState(2),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    yearsExp = _React$useState18[0],
    setYearsExp = _React$useState18[1];
  var roi = window.helpers.calculateCareerROI(currentSalary, targetDegree, yearsExp);
  return React.createElement("section", {
    id: "roi-calc-section",
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-surface)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83D\uDCC8 Smart Career Analytics"), React.createElement("h2", {
    className: "section-title"
  }, "Online Degree ROI & Salary Growth Calculator"), React.createElement("p", {
    className: "section-subtitle"
  }, "Calculate your expected salary jump, course fee payback period in months, and 5-year career earnings before enrolling.")), React.createElement("div", {
    className: "calc-card-container"
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--primary-900)'
    }
  }, "1. Target Online Degree:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem'
    }
  }, ['MBA', 'MCA', 'M.Sc', 'BBA', 'BCA', 'M.Tech'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      type: "button",
      className: "btn btn-sm ".concat(targetDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTargetDegree(deg);
      }
    }, deg);
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--primary-900)'
    }
  }, "2. Current Annual CTC (LPA):"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.15rem'
    }
  }, "\u20B9", currentSalary.toFixed(1), " LPA")), React.createElement("input", {
    type: "range",
    min: "2.0",
    max: "20.0",
    step: "0.5",
    value: currentSalary,
    onChange: function onChange(e) {
      return setCurrentSalary(parseFloat(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B92.0 LPA"), React.createElement("span", null, "\u20B920.0 LPA"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--primary-900)'
    }
  }, "3. Current Work Experience:"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.15rem'
    }
  }, yearsExp, " ", yearsExp === 1 ? 'Year' : 'Years')), React.createElement("input", {
    type: "range",
    min: "0",
    max: "10",
    step: "1",
    value: yearsExp,
    onChange: function onChange(e) {
      return setYearsExp(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "0 Yrs (Fresher)"), React.createElement("span", null, "10+ Yrs"))), React.createElement("div", {
    style: {
      padding: '0.85rem 1rem',
      background: 'var(--primary-50)',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.825rem',
      color: 'var(--text-muted)'
    }
  }, "\uD83D\uDCA1 ", React.createElement("em", null, "Analytics based on placement reports from 25+ UGC-DEB approved universities in India over 2024-2026."))), React.createElement("div", {
    className: "calc-result-box"
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#93c5fd',
      fontWeight: '600'
    }
  }, "Estimated Post-Degree CTC"), React.createElement("div", {
    className: "calc-result-number"
  }, "\u20B9", roi.estimatedNewSalary.toFixed(1), " LPA"), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(52, 211, 153, 0.2)',
      color: '#34d399',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.875rem'
    }
  }, "\uD83D\uDE80 +", roi.percentageHike, "% Expected Salary Hike"), React.createElement("div", {
    className: "calc-stats-breakdown"
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Payback Period"), React.createElement("strong", null, "~", roi.paybackMonths, " Months")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "5-Year Extra Earnings"), React.createElement("strong", null, "+\u20B9", roi.fiveYearGainLakhs.toFixed(1), " Lakhs")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Approx Course Fee"), React.createElement("strong", null, window.helpers.formatINR(roi.avgDegreeFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Study Flexibility"), React.createElement("strong", null, "100% Online"))), React.createElement("button", {
    className: "btn btn-amber btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: "Career Roadmap for Online ".concat(targetDegree),
        course: "Online ".concat(targetDegree),
        notes: "Current CTC: \u20B9".concat(currentSalary, " LPA -> Target: \u20B9").concat(roi.estimatedNewSalary, " LPA"),
        source: 'ROI Calculator Results CTA'
      });
    }
  }, "Get Personalized Career Transition Plan \u2192"))))));
};
window.EMICalculator = function (_ref8) {
  var onOpenCounselling = _ref8.onOpenCounselling;
  var _React$useState19 = React.useState(160000),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    courseFee = _React$useState20[0],
    setCourseFee = _React$useState20[1];
  var _React$useState21 = React.useState(24),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    tenure = _React$useState22[0],
    setTenure = _React$useState22[1];
  var _React$useState23 = React.useState(10),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    scholarshipPercent = _React$useState24[0],
    setScholarshipPercent = _React$useState24[1];
  var discountAmount = courseFee * scholarshipPercent / 100;
  var netPayable = courseFee - discountAmount;
  var monthlyEmi = Math.round(netPayable / tenure);
  return React.createElement("section", {
    id: "emi-calc-section",
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-main)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag amber"
  }, "\uD83D\uDCB3 Zero Financial Stress"), React.createElement("h2", {
    className: "section-title"
  }, "0% Interest Monthly EMI & Budget Planner"), React.createElement("p", {
    className: "section-subtitle"
  }, "Study now and pay comfortably in equal zero-cost monthly installments without any credit card or security deposits.")), React.createElement("div", {
    className: "calc-card-container"
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--primary-900)'
    }
  }, "1. University Course Fee (Total):"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.15rem'
    }
  }, window.helpers.formatINR(courseFee))), React.createElement("input", {
    type: "range",
    min: "50000",
    max: "350000",
    step: "10000",
    value: courseFee,
    onChange: function onChange(e) {
      return setCourseFee(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B950,000"), React.createElement("span", null, "\u20B93.5 Lakhs"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--primary-900)'
    }
  }, "2. Select 0% EMI Tenure:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '0.5rem'
    }
  }, [6, 12, 24, 36].map(function (m) {
    return React.createElement("button", {
      key: m,
      type: "button",
      className: "btn btn-sm ".concat(tenure === m ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTenure(m);
      }
    }, m, " Months");
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--primary-900)'
    }
  }, "3. Early Bird / Merit Scholarship Discount:"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, [0, 10, 15, 25].map(function (p) {
    return React.createElement("button", {
      key: p,
      type: "button",
      className: "btn btn-sm ".concat(scholarshipPercent === p ? 'btn-accent' : 'btn-secondary'),
      onClick: function onClick() {
        return setScholarshipPercent(p);
      },
      style: {
        flex: 1
      }
    }, p === 0 ? 'No Coupon' : "".concat(p, "% Off"));
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0',
      fontSize: '0.8rem',
      color: '#065f46'
    }
  }, React.createElement("span", null, "\u2713"), React.createElement("span", null, "Pre-approved NBFC partners: ", React.createElement("strong", null, "Propelld, Eduvanz, GrayQuest"), " (Zero Processing Fees)."))), React.createElement("div", {
    className: "calc-result-box",
    style: {
      background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#a7f3d0',
      fontWeight: '600'
    }
  }, "Your Monthly 0% EMI"), React.createElement("div", {
    className: "calc-result-number",
    style: {
      color: '#ffffff'
    }
  }, "\u20B9", monthlyEmi.toLocaleString('en-IN'), React.createElement("span", {
    style: {
      fontSize: '1.1rem',
      fontWeight: '500'
    }
  }, "/month")), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.85rem'
    }
  }, "\uD83C\uDF89 Zero Hidden Charges \u2022 0% Interest Rate"), React.createElement("div", {
    className: "calc-stats-breakdown",
    style: {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    }
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Original Fee"), React.createElement("strong", null, window.helpers.formatINR(courseFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Scholarship Saved"), React.createElement("strong", {
    style: {
      color: '#fef08a'
    }
  }, "- ", window.helpers.formatINR(discountAmount))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Net Payable"), React.createElement("strong", null, window.helpers.formatINR(netPayable))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Tenure"), React.createElement("strong", null, tenure, " Months"))), React.createElement("button", {
    className: "btn btn-amber btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Check 0% EMI & Scholarship Eligibility',
        notes: "Requested EMI: \u20B9".concat(monthlyEmi, "/mo for ").concat(tenure, " months on ").concat(window.helpers.formatINR(courseFee), " fee"),
        source: 'EMI Planner Tool CTA'
      });
    }
  }, "Apply for 0% EMI Approval \u2192"))))));
};
window.UGCVerifier = function (_ref9) {
  var onOpenCounselling = _ref9.onOpenCounselling;
  var _React$useState25 = React.useState('validity'),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    activeTab = _React$useState26[0],
    setActiveTab = _React$useState26[1];
  var data = window.ACCREDITATIONS_DATA;
  return React.createElement("section", {
    id: "ugc-section",
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-surface)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag"
  }, "\uD83D\uDEE1\uFE0F 100% Genuine & Legitimate"), React.createElement("h2", {
    className: "section-title"
  }, "UGC-DEB Government Approval & Degree Validity Inspector"), React.createElement("p", {
    className: "section-subtitle"
  }, "Understand how online degrees are recognized by the Government of India, UPSC, Corporate MNCs, and Global WES Evaluation.")), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0a1128 0%, #1e3a8a 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      marginBottom: '3rem',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.85rem'
    }
  }, "\uD83D\uDCDC Official Gazette of India Mandate"), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: '#93c5fd'
    }
  }, data.ugcDebNotice.source)), React.createElement("blockquote", {
    style: {
      fontSize: '1.25rem',
      fontStyle: 'italic',
      lineHeight: '1.6',
      color: '#f8fafc',
      borderLeft: '4px solid #34d399',
      paddingLeft: '1.5rem',
      margin: '1.5rem 0'
    }
  }, "\"", data.ugcDebNotice.officialGazetteQuote, "\""), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.9rem',
      color: '#93c5fd'
    }
  }, "\u2696\uFE0F ", React.createElement("strong", null, "Legal Summary:"), " Online degrees awarded by UGC-DEB recognized universities carry 100% identical legal validity as on-campus degrees."), React.createElement("button", {
    className: "btn btn-accent btn-sm",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Verify University UGC-DEB Letter with Expert',
        source: 'UGC Gazette Header CTA'
      });
    }
  }, "Verify University Approval Letter"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem'
    }
  }, data.ugcDebNotice.validityPoints.map(function (pt, idx) {
    return React.createElement("div", {
      key: idx,
      style: {
        background: 'var(--bg-surface-alt)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        border: '1px solid var(--border-light)'
      }
    }, React.createElement("div", {
      style: {
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        background: 'var(--primary-100)',
        color: 'var(--primary-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        marginBottom: '1rem'
      }
    }, idx === 0 ? '🏛️' : idx === 1 ? '🏢' : idx === 2 ? '🌐' : '💻'), React.createElement("h4", {
      style: {
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
        color: 'var(--primary-900)'
      }
    }, pt.title), React.createElement("p", {
      style: {
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: '1.5'
      }
    }, pt.description));
  })), React.createElement("div", {
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("h3", {
    style: {
      textAlign: 'center',
      marginBottom: '1.75rem'
    }
  }, "Accreditation Pillars to Check Before Enrolling"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.25rem'
    }
  }, data.accreditationTypes.map(function (acc) {
    return React.createElement("div", {
      key: acc.code,
      style: {
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("span", {
      className: "badge",
      style: {
        backgroundColor: acc.badgeColor,
        color: '#ffffff',
        marginBottom: '0.5rem'
      }
    }, acc.code), React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '0.95rem',
        color: 'var(--primary-900)',
        margin: '0.35rem 0'
      }
    }, acc.fullName), React.createElement("p", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }
    }, acc.description));
  }))), React.createElement("div", {
    style: {
      maxWidth: '840px',
      margin: '0 auto'
    }
  }, React.createElement("h3", {
    style: {
      textAlign: 'center',
      marginBottom: '1.5rem'
    }
  }, "Frequently Asked Questions on Online Degrees"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, data.frequentlyAskedQuestions.map(function (faq, fIdx) {
    return React.createElement("div", {
      key: fIdx,
      style: {
        background: 'var(--bg-main)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem'
      }
    }, React.createElement("h4", {
      style: {
        fontSize: '1rem',
        color: 'var(--primary-900)',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }
    }, React.createElement("span", null, "\u2753"), " ", faq.q), React.createElement("p", {
      style: {
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        margin: 0,
        paddingLeft: '1.5rem'
      }
    }, faq.a));
  })))));
};
window.LeadCaptureModal = function (_ref10) {
  var _ref10$initialData = _ref10.initialData,
    initialData = _ref10$initialData === void 0 ? {} : _ref10$initialData,
    onClose = _ref10.onClose,
    onSuccess = _ref10.onSuccess;
  var _React$useState27 = React.useState({
      name: '',
      phone: '',
      email: '',
      city: '',
      course: initialData.course || 'Online MBA',
      university: initialData.university || 'All UGC-DEB Universities',
      notes: initialData.notes || '',
      source: initialData.source || 'General Enquire'
    }),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    formData = _React$useState28[0],
    setFormData = _React$useState28[1];
  var _React$useState29 = React.useState(false),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    submitted = _React$useState30[0],
    setSubmitted = _React$useState30[1];
  var _React$useState31 = React.useState(false),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    loading = _React$useState32[0],
    setLoading = _React$useState32[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    var newLead = window.leadStore.addLead({
      name: formData.name || 'Enquiry Student',
      phone: formData.phone,
      email: formData.email,
      city: formData.city || 'India',
      course: formData.course,
      interestedUniversities: formData.university ? [formData.university] : [],
      source: formData.source,
      notes: formData.notes
    });
    setTimeout(function () {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(newLead);
    }, 500);
  };
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-md",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", null, React.createElement("span", {
    className: "badge badge-success",
    style: {
      marginBottom: '0.25rem'
    }
  }, "\u2713 100% Free & Unbiased"), React.createElement("h3", {
    style: {
      margin: 0
    }
  }, initialData.title || 'Book 1-on-1 Free Expert Counselling')), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715")), React.createElement("div", {
    className: "modal-body"
  }, !submitted ? React.createElement("form", {
    onSubmit: handleSubmit
  }, React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, initialData.type === 'prospectus' ? 'Fill your details to get the official fee structure, brochure, and syllabus PDF directly on WhatsApp & Email.' : 'Talk to an expert counselor to compare UGC approvals, fee waivers, EMI options, and admission procedures.'), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Full Name *"), React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. Vikram Malhotra",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.name,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        name: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "WhatsApp / Mobile Number *"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      padding: '0.75rem',
      background: '#e2e8f0',
      borderRadius: '8px',
      fontWeight: '600'
    }
  }, "+91"), React.createElement("input", {
    type: "tel",
    required: true,
    placeholder: "98765 43210",
    style: {
      flex: 1,
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.phone,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        phone: e.target.value
      }));
    }
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Email Address"), React.createElement("input", {
    type: "email",
    placeholder: "vikram@example.com",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.email,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        email: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "City / State"), React.createElement("input", {
    type: "text",
    placeholder: "e.g. Pune, Maharashtra",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.city,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        city: e.target.value
      }));
    }
  }))), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Interested Degree Course"), React.createElement("select", {
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)',
      background: '#fff'
    },
    value: formData.course,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        course: e.target.value
      }));
    }
  }, React.createElement("option", {
    value: "Online MBA"
  }, "Online MBA (Master of Business Administration)"), React.createElement("option", {
    value: "Online MCA"
  }, "Online MCA (Master of Computer Applications)"), React.createElement("option", {
    value: "Online BBA"
  }, "Online BBA (Bachelor of Business Administration)"), React.createElement("option", {
    value: "Online BCA"
  }, "Online BCA (Bachelor of Computer Applications)"), React.createElement("option", {
    value: "Online M.Sc"
  }, "Online M.Sc (Data Science / AI)"), React.createElement("option", {
    value: "Online B.Com"
  }, "Online B.Com (Honours / General)"), React.createElement("option", {
    value: "Executive MBA / M.Tech"
  }, "Executive MBA / M.Tech (WILP)")))), React.createElement("div", {
    style: {
      marginTop: '1.75rem'
    }
  }, React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block btn-lg",
    disabled: loading
  }, loading ? 'Submitting...' : initialData.type === 'prospectus' ? '📥 Download Brochure Now' : '⚡ Request Free Callback & Roadmap')), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '1rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-subtle)'
    }
  }, "\uD83D\uDD12 100% Confidential \u2022 Zero Agent Brokerage \u2022 UniversityJano.com Official"))) : React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '1.5rem 0'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '3rem',
      marginBottom: '0.75rem'
    }
  }, "\uD83C\uDF89"), React.createElement("h3", {
    style: {
      color: 'var(--accent-emerald)',
      marginBottom: '0.5rem'
    }
  }, "Request Submitted Successfully!"), React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, "Thank you, ", React.createElement("strong", null, formData.name || 'Student'), "! Our senior online education counselor is reviewing your profile and will connect with you via WhatsApp / Call within ", React.createElement("strong", null, "15 minutes"), " with the official prospectus and fee waivers."), React.createElement("div", {
    style: {
      padding: '1rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0',
      marginBottom: '1.5rem',
      fontSize: '0.85rem',
      color: '#065f46'
    }
  }, "\uD83D\uDCF1 ", React.createElement("strong", null, "WhatsApp Confirmation:"), " A copy of the syllabus & scholarship voucher has been queued for ", React.createElement("strong", null, "+91 ", formData.phone), "."), React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onClose
  }, "Close & Continue Browsing")))));
};
window.LeadDashboardModal = function (_ref11) {
  var onClose = _ref11.onClose;
  var _React$useState33 = React.useState([]),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    leads = _React$useState34[0],
    setLeads = _React$useState34[1];
  var _React$useState35 = React.useState(''),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    searchTerm = _React$useState36[0],
    setSearchTerm = _React$useState36[1];
  var _React$useState37 = React.useState('All'),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    filterStatus = _React$useState38[0],
    setFilterStatus = _React$useState38[1];
  React.useEffect(function () {
    setLeads(window.leadStore.getLeads());
  }, []);
  var handleStatusChange = function handleStatusChange(leadId, newStatus) {
    var updated = window.leadStore.updateLeadStatus(leadId, newStatus);
    setLeads(_toConsumableArray(updated));
  };
  var handleExportCSV = function handleExportCSV() {
    window.leadStore.exportToCSV();
  };
  var filteredLeads = leads.filter(function (l) {
    var matchesSearch = !searchTerm || l.name && l.name.toLowerCase().includes(searchTerm.toLowerCase()) || l.phone && l.phone.includes(searchTerm) || l.course && l.course.toLowerCase().includes(searchTerm.toLowerCase()) || l.city && l.city.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesStatus = filterStatus === 'All' || l.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-xl",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    className: "badge badge-purple"
  }, "\uD83D\uDC51 UniversityJano Admin"), React.createElement("span", {
    className: "badge badge-success"
  }, "Lead Generation CRM")), React.createElement("h3", {
    style: {
      margin: '0.35rem 0 0 0'
    }
  }, "Captured Student Leads (", leads.length, " Total)")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("button", {
    className: "btn btn-accent btn-sm",
    onClick: handleExportCSV
  }, "\uD83D\uDCE5 Export to CSV (Excel)"), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715"))), React.createElement("div", {
    className: "modal-body",
    style: {
      padding: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.25rem',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flex: 1,
      minWidth: '240px'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1rem'
    }
  }, "\uD83D\uDD0D"), React.createElement("input", {
    type: "text",
    placeholder: "Search leads by name, mobile, course, or city...",
    style: {
      width: '100%',
      padding: '0.5rem 0.85rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  })), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: '600'
    }
  }, "Status:"), React.createElement("select", {
    style: {
      padding: '0.5rem 0.85rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)',
      background: '#fff'
    },
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    }
  }, React.createElement("option", {
    value: "All"
  }, "All Statuses"), React.createElement("option", {
    value: "New Lead"
  }, "New Lead"), React.createElement("option", {
    value: "Contacted"
  }, "Contacted"), React.createElement("option", {
    value: "Counselled"
  }, "Counselled"), React.createElement("option", {
    value: "Admitted"
  }, "Admitted (Enrolled)")))), React.createElement("div", {
    className: "comparison-table-wrapper",
    style: {
      maxHeight: '500px',
      overflowY: 'auto'
    }
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Student Info"), React.createElement("th", null, "Contact"), React.createElement("th", null, "Target Course"), React.createElement("th", null, "Source / Lead Magnet"), React.createElement("th", null, "Date & Time"), React.createElement("th", null, "CRM Status"))), React.createElement("tbody", null, filteredLeads.length > 0 ? filteredLeads.map(function (lead) {
    return React.createElement("tr", {
      key: lead.id
    }, React.createElement("td", null, React.createElement("strong", null, lead.name), React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "\uD83D\uDCCD ", lead.city || 'India')), React.createElement("td", null, React.createElement("div", {
      style: {
        fontWeight: '600',
        color: 'var(--primary-600)'
      }
    }, "\uD83D\uDCF1 ", lead.phone), lead.email && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "\u2709\uFE0F ", lead.email)), React.createElement("td", null, React.createElement("span", {
      className: "badge badge-blue"
    }, lead.course), lead.specialization && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: '2px'
      }
    }, lead.specialization), lead.budget && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--accent-emerald)',
        fontWeight: '600'
      }
    }, "Budget: ", lead.budget)), React.createElement("td", null, React.createElement("span", {
      className: "badge badge-amber"
    }, lead.source), lead.interestedUniversities && lead.interestedUniversities.length > 0 && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: '2px'
      }
    }, Array.isArray(lead.interestedUniversities) ? lead.interestedUniversities.join(', ') : lead.interestedUniversities)), React.createElement("td", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }
    }, new Date(lead.createdAt).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })), React.createElement("td", null, React.createElement("select", {
      style: {
        padding: '0.35rem 0.6rem',
        borderRadius: '6px',
        border: '1px solid var(--border-light)',
        fontSize: '0.8rem',
        fontWeight: '600',
        background: lead.status === 'New Lead' ? '#fef3c7' : lead.status === 'Admitted' ? '#dcfce7' : '#f1f5f9',
        color: lead.status === 'New Lead' ? '#b45309' : lead.status === 'Admitted' ? '#15803d' : '#334155'
      },
      value: lead.status,
      onChange: function onChange(e) {
        return handleStatusChange(lead.id, e.target.value);
      }
    }, React.createElement("option", {
      value: "New Lead"
    }, "New Lead"), React.createElement("option", {
      value: "Contacted"
    }, "Contacted"), React.createElement("option", {
      value: "Counselled"
    }, "Counselled"), React.createElement("option", {
      value: "Admitted"
    }, "Admitted"))));
  }) : React.createElement("tr", null, React.createElement("td", {
    colSpan: "6",
    style: {
      textAlign: 'center',
      padding: '2rem',
      color: 'var(--text-muted)'
    }
  }, "No matching leads found."))))))));
};
window.TestimonialsSection = function (_ref12) {
  var onOpenCounselling = _ref12.onOpenCounselling;
  var reviews = window.REVIEWS_DATA || [];
  return React.createElement("section", {
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-surface-alt)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83C\uDF1F Real Career Impact"), React.createElement("h2", {
    className: "section-title"
  }, "50,000+ Students Transformed Their Careers"), React.createElement("p", {
    className: "section-subtitle"
  }, "Read real, verified experiences from working professionals who accelerated their careers with UGC-approved online degrees.")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '1.75rem',
      marginBottom: '3rem'
    }
  }, reviews.map(function (rev) {
    return React.createElement("div", {
      key: rev.id,
      style: {
        background: '#ffffff',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }
    }, React.createElement("img", {
      src: rev.avatar,
      alt: rev.studentName,
      style: {
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }), React.createElement("div", null, React.createElement("strong", {
      style: {
        fontSize: '1.05rem',
        display: 'block',
        color: 'var(--primary-900)'
      }
    }, rev.studentName), React.createElement("span", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--primary-600)',
        fontWeight: '600'
      }
    }, rev.course), React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, rev.university))), React.createElement("div", {
      style: {
        background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
        border: '1px solid #a7f3d0',
        borderRadius: 'var(--radius-md)',
        padding: '0.75rem 1rem',
        marginBottom: '1rem'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, React.createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: '#065f46',
        fontWeight: '600',
        textTransform: 'uppercase'
      }
    }, "Career Transition"), React.createElement("span", {
      style: {
        fontSize: '0.85rem',
        fontWeight: '800',
        color: '#059669'
      }
    }, "\uD83D\uDE80 ", rev.salaryHike)), React.createElement("div", {
      style: {
        fontSize: '0.8rem',
        color: '#1f2937',
        marginTop: '0.35rem'
      }
    }, React.createElement("div", {
      style: {
        textDecoration: 'line-through',
        color: '#6b7280'
      }
    }, "Before: ", rev.previousRole), React.createElement("div", {
      style: {
        fontWeight: '700',
        color: '#065f46'
      }
    }, "After: ", rev.currentRole))), React.createElement("p", {
      style: {
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: '1.6',
        fontStyle: 'italic'
      }
    }, "\"", rev.comment, "\"")), React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1.25rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--border-subtle)',
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, React.createElement("span", {
      style: {
        color: 'var(--accent-emerald)',
        fontWeight: '600'
      }
    }, "\u2713 Verified Alumni"), React.createElement("span", null, rev.date)));
  })), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0a1128 0%, #1e40af 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      textAlign: 'center'
    }
  }, React.createElement("h3", {
    style: {
      color: '#ffffff',
      fontSize: '1.85rem',
      marginBottom: '0.5rem'
    }
  }, "Ready to Write Your Career Transformation Story?"), React.createElement("p", {
    style: {
      color: '#93c5fd',
      maxWidth: '650px',
      margin: '0 auto 1.5rem auto'
    }
  }, "Book a free 1-on-1 counseling session with India's top online education counselors. No fees, no obligations."), React.createElement("button", {
    className: "btn btn-amber btn-lg",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Get Free Career Consultation & University Shortlist',
        source: 'Testimonials Bottom CTA'
      });
    }
  }, "\uD83C\uDFAF Book Free Counselling Now \u2192"))));
};
window.FloatingWidgets = function (_ref13) {
  var onOpenCounselling = _ref13.onOpenCounselling,
    onOpenWizard = _ref13.onOpenWizard;
  var _React$useState39 = React.useState(false),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    showExitModal = _React$useState40[0],
    setShowExitModal = _React$useState40[1];
  var _React$useState41 = React.useState(false),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    hasTriggeredExit = _React$useState42[0],
    setHasTriggeredExit = _React$useState42[1];
  React.useEffect(function () {
    var handleMouseLeave = function handleMouseLeave(e) {
      if (e.clientY <= 0 && !hasTriggeredExit) {
        setShowExitModal(true);
        setHasTriggeredExit(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return function () {
      return document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggeredExit]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "floating-whatsapp-btn",
    onClick: function onClick() {
      return window.open('https://wa.me/919876543210?text=Hi%20UniversityJano,%20I%20need%20help%20choosing%20an%20online%20degree%20program', '_blank');
    },
    title: "Chat with Senior Counselor on WhatsApp"
  }, React.createElement("span", {
    style: {
      fontSize: '1.75rem'
    }
  }, "\uD83D\uDCAC")), React.createElement("div", {
    className: "mobile-sticky-bar"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Confused about college?"), React.createElement("strong", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--primary-900)'
    }
  }, "100% Free Expert Advice")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, React.createElement("button", {
    className: "btn btn-amber btn-sm",
    onClick: onOpenWizard
  }, "\u26A1 AI Quiz"), React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Speak to Senior Admission Counselor',
        source: 'Mobile Sticky Bottom Bar'
      });
    }
  }, "Free Call"))), showExitModal && React.createElement("div", {
    className: "modal-overlay",
    onClick: function onClick() {
      return setShowExitModal(false);
    }
  }, React.createElement("div", {
    className: "modal-dialog modal-md",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header",
    style: {
      background: 'linear-gradient(135deg, #d97706, #f59e0b)',
      color: '#ffffff'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\uD83C\uDF81"), React.createElement("h3", {
    style: {
      margin: 0,
      color: '#ffffff'
    }
  }, "Wait! Don't Leave Without Your \u20B910,000 Waiver!")), React.createElement("button", {
    className: "modal-close-btn",
    onClick: function onClick() {
      return setShowExitModal(false);
    },
    style: {
      background: 'rgba(255,255,255,0.2)',
      color: '#ffffff'
    }
  }, "\u2715")), React.createElement("div", {
    className: "modal-body",
    style: {
      textAlign: 'center'
    }
  }, React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--text-main)',
      marginBottom: '1.25rem'
    }
  }, "Unlock an ", React.createElement("strong", null, "Exclusive Early-Bird Fee Concession of \u20B910,000"), " on top UGC-DEB approved online universities before admissions close this week!"), React.createElement("div", {
    style: {
      background: '#fffbeb',
      border: '2px dashed #f59e0b',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: '#b45309',
      fontWeight: '600',
      textTransform: 'uppercase'
    }
  }, "Your Scholarship Voucher Code:"), React.createElement("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#b45309',
      letterSpacing: '0.1em',
      marginTop: '0.25rem'
    }
  }, "UJANO-2026-EARLY")), React.createElement("button", {
    className: "btn btn-amber btn-lg btn-block",
    onClick: function onClick() {
      setShowExitModal(false);
      onOpenCounselling({
        title: 'Claim ₹10,000 Early Bird Scholarship Voucher',
        notes: 'Claimed Voucher: UJANO-2026-EARLY',
        source: 'Exit Intent Scholarship Modal'
      });
    }
  }, "\uD83C\uDF89 Claim My \u20B910,000 Scholarship Coupon Now \u2192"), React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-subtle)',
      fontSize: '0.8rem',
      marginTop: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setShowExitModal(false);
    }
  }, "No thanks, I will pay full admission fee")))));
};
window.Footer = function (_ref14) {
  var onNavigate = _ref14.onNavigate,
    onOpenWizard = _ref14.onOpenWizard,
    onOpenCounselling = _ref14.onOpenCounselling;
  return React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "ugc-disclaimer-box"
  }, React.createElement("strong", {
    style: {
      color: '#ffffff',
      display: 'block',
      marginBottom: '0.35rem'
    }
  }, "\u2696\uFE0F Regulatory Compliance & Disclaimer (UGC-DEB):"), "UniversityJano.com is an independent educational technology discovery and comparison portal. All university names, logos, and trademarks displayed belong to their respective statutory institutions and universities. UniversityJano assists students with unbiased information, counseling, fee structures, and transparent comparison as per University Grants Commission (Open and Distance Learning Programmes and Online Programmes) Regulations. Degrees offered are awarded directly by the respective UGC-DEB recognized universities."), React.createElement("div", {
    className: "footer-grid"
  }, React.createElement("div", {
    className: "footer-col"
  }, React.createElement("div", {
    style: {
      background: '#ffffff',
      padding: '0.4rem 0.85rem',
      borderRadius: '10px',
      display: 'inline-block',
      marginBottom: '1.25rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return onNavigate('home');
    }
  }, React.createElement("img", {
    src: "images/logo.png",
    alt: "UniversityJano.com Logo",
    style: {
      height: '44px',
      width: 'auto',
      display: 'block'
    }
  })), React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: '#94a3b8',
      lineHeight: '1.6',
      marginBottom: '1.25rem'
    }
  }, "India's #1 AI-powered online degree and college discovery platform. Sahi University Jano, Sahi Career Chuno!"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      fontSize: '0.85rem'
    }
  }, React.createElement("span", null, "\uD83D\uDCDE Student Helpline: ", React.createElement("strong", null, "1800-890-5266")), React.createElement("span", null, "\u2709\uFE0F Admissions: ", React.createElement("strong", null, "help@universityjano.com")), React.createElement("span", null, "\uD83D\uDCCD Head Office: Knowledge Park, New Delhi & Tech Corridor, Bangalore"))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Online Postgraduate Degrees"), React.createElement("ul", {
    className: "footer-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online MBA in FinTech")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online MBA in Business Analytics")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online MCA in Cloud & AI")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online M.Sc in Data Science")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Executive MBA for Working Professionals")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online M.Com & Corporate Finance")))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Online Undergraduate Degrees"), React.createElement("ul", {
    className: "footer-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online BBA (Digital Marketing)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online BCA (Software Engineering)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online B.Com (Honours)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online B.A. (Journalism & Mass Comm)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "0% EMI Student Loan Plans")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Scholarship Waiver Program")))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Free Student Engagement Tools"), React.createElement("ul", {
    className: "footer-links"
  }, React.createElement("li", null, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: onOpenWizard
  }, "\u26A1 2-Minute AI College Finder")), React.createElement("li", null, React.createElement("a", {
    href: "roi-calculator.html",
    style: { textDecoration: 'none', color: 'inherit' }
  }, "\uD83D\uDCC8 Salary & ROI Jump Calculator")), React.createElement("li", null, React.createElement("a", {
    href: "emi-calculator.html",
    style: { textDecoration: 'none', color: 'inherit' }
  }, "\uD83D\uDCB3 0% Monthly EMI Budget Planner")), React.createElement("li", null, React.createElement("a", {
    href: "ugc-verifier.html",
    style: { textDecoration: 'none', color: 'inherit' }
  }, "\uD83D\uDEE1\uFE0F UGC-DEB Degree Validity Inspector")), React.createElement("li", null, React.createElement("a", {
    href: "blog/index.html",
    style: { textDecoration: 'none', color: 'inherit' }
  }, "\u270D\uFE0F Read Our Blog")), React.createElement("li", null, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Book Free 1-on-1 Counselling'
      });
    }
  }, "\uD83C\uDFAF 1-on-1 Free Expert Counselling"))))), React.createElement("div", {
    className: "footer-bottom"
  }, React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " UniversityJano.com \u2014 All Rights Reserved. Sahi University Jano, Sahi Career Chuno."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.5rem'
    }
  }, React.createElement("a", {
    href: "#privacy",
    style: {
      color: '#64748b'
    }
  }, "Privacy Policy"), React.createElement("a", {
    href: "#terms",
    style: {
      color: '#64748b'
    }
  }, "Terms of Service"), React.createElement("a", {
    href: "#ugc-disclaimer",
    style: {
      color: '#64748b'
    }
  }, "UGC-DEB Compliance")))));
};
window.AllUniversitiesPage = function (_ref15) {
  var universities = _ref15.universities,
    searchQuery = _ref15.searchQuery,
    onSearchChange = _ref15.onSearchChange,
    selectedDegree = _ref15.selectedDegree,
    onSelectDegree = _ref15.onSelectDegree,
    selectedNaac = _ref15.selectedNaac,
    onSelectNaac = _ref15.onSelectNaac,
    maxBudget = _ref15.maxBudget,
    onBudgetChange = _ref15.onBudgetChange,
    onlyOnlineExam = _ref15.onlyOnlineExam,
    onToggleOnlineExam = _ref15.onToggleOnlineExam,
    onlyEmi = _ref15.onlyEmi,
    onToggleEmi = _ref15.onToggleEmi,
    onResetFilters = _ref15.onResetFilters,
    sortBy = _ref15.sortBy,
    onSortChange = _ref15.onSortChange,
    onOpenUniversityPage = _ref15.onOpenUniversityPage,
    _onOpenLeadModal = _ref15.onOpenLeadModal,
    onToggleCompare = _ref15.onToggleCompare,
    compareList = _ref15.compareList;
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "All UGC-DEB Approved Online Universities")), React.createElement("h1", {
    style: {
      fontSize: '2.4rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Directory of All UGC-DEB Approved Online Universities in India"), React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-muted)',
      maxWidth: '850px'
    }
  }, "Compare official accreditations (UGC-DEB, NAAC A++, NIRF), transparent course fees, 0% EMI options, placement records, and examination formats across all recognized Indian universities offering online degrees.")), React.createElement("div", {
    className: "catalog-layout"
  }, React.createElement(window.FilterSidebar, {
    selectedDegree: selectedDegree,
    onSelectDegree: onSelectDegree,
    selectedNaac: selectedNaac,
    onSelectNaac: onSelectNaac,
    maxBudget: maxBudget,
    onBudgetChange: onBudgetChange,
    onlyOnlineExam: onlyOnlineExam,
    onToggleOnlineExam: onToggleOnlineExam,
    onlyEmi: onlyEmi,
    onToggleEmi: onToggleEmi,
    onResetFilters: onResetFilters
  }), React.createElement("div", null, React.createElement("div", {
    className: "catalog-content-header"
  }, React.createElement("div", {
    className: "results-count"
  }, "Showing ", React.createElement("strong", null, universities.length), " UGC-DEB Approved Universities", selectedDegree !== 'All' && React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " for Online ", selectedDegree)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Sort by:"), React.createElement("select", {
    className: "sort-select",
    value: sortBy,
    onChange: function onChange(e) {
      return onSortChange(e.target.value);
    }
  }, React.createElement("option", {
    value: "featured"
  }, "Featured & Popular"), React.createElement("option", {
    value: "rating"
  }, "Highest Student Rating"), React.createElement("option", {
    value: "highestCtc"
  }, "Highest Placement CTC"), React.createElement("option", {
    value: "feeLowToHigh"
  }, "Fee: Low to High")))), universities.length > 0 ? React.createElement("div", {
    className: "university-grid"
  }, universities.map(function (uni) {
    return React.createElement(window.UniversityCard, {
      key: uni.id,
      university: uni,
      selectedDegree: selectedDegree,
      onViewDetails: function onViewDetails(u) {
        return onOpenUniversityPage(u);
      },
      onOpenLeadModal: function onOpenLeadModal(data) {
        return _onOpenLeadModal(data);
      },
      onToggleCompare: onToggleCompare,
      isComparing: !!compareList.find(function (item) {
        return item.id === uni.id;
      })
    });
  })) : React.createElement("div", {
    style: {
      padding: '3rem',
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      border: '1px dashed var(--border-light)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '2.5rem'
    }
  }, "\uD83D\uDD0D"), React.createElement("h3", {
    style: {
      marginTop: '0.5rem'
    }
  }, "No universities matched your selected filters"), React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: '1.25rem'
    }
  }, "Try expanding your budget slider or clearing specific filters."), React.createElement("button", {
    className: "btn btn-primary",
    onClick: onResetFilters
  }, "Reset Filters"))))));
};
window.UniversityDetailPage = function (_ref16) {
  var university = _ref16.university,
    onBack = _ref16.onBack,
    onOpenLeadModal = _ref16.onOpenLeadModal,
    onToggleCompare = _ref16.onToggleCompare,
    isComparing = _ref16.isComparing,
    onSelectUniversity = _ref16.onSelectUniversity;
  var _React$useState43 = React.useState('courses'),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    activeTab = _React$useState44[0],
    setActiveTab = _React$useState44[1];
  var allUniversities = window.UNIVERSITIES_DATA || [];
  var similarUniversities = allUniversities.filter(function (u) {
    return u.id !== university.id;
  }).slice(0, 3);
  if (!university) return null;
  return React.createElement("div", {
    className: "uni-detail-page"
  }, React.createElement("div", {
    className: "uni-hero-banner",
    style: {
      backgroundImage: "url(".concat(university.heroImage, ")")
    }
  }, React.createElement("div", {
    className: "container",
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    className: "uni-hero-content"
  }, React.createElement("div", {
    className: "uni-hero-left"
  }, React.createElement("div", {
    className: "uni-hero-avatar",
    style: {
      color: university.logoColor,
      borderColor: university.logoColor
    }
  }, university.logoText), React.createElement("div", {
    className: "uni-hero-text"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '0.4rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    className: "badge badge-success"
  }, "\u2713 UGC-DEB Approved"), React.createElement("span", {
    className: "badge badge-purple"
  }, "NAAC ", university.accreditations.naacGrade, " (", university.accreditations.naacScore, ")"), React.createElement("span", {
    className: "badge badge-blue"
  }, university.accreditations.nirfRank), university.accreditations.wesRecognized && React.createElement("span", {
    className: "badge badge-orange"
  }, "WES Recognized")), React.createElement("h1", null, university.name), React.createElement("p", null, "\uD83D\uDCCD ", university.city, ", ", university.state, " \u2022 Est. ", university.foundedYear, " \u2022 ", university.universityType))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: function onClick() {
      return onToggleCompare(university);
    }
  }, isComparing ? '✓ In Comparison List' : '+ Add to Compare'), React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Apply to ".concat(university.shortName),
        university: university.name,
        source: 'University Page Hero CTA'
      });
    }
  }, "\u26A1 Apply for Admission"))))), React.createElement("div", {
    className: "uni-page-nav-bar"
  }, React.createElement("div", {
    className: "container uni-page-nav-inner"
  }, React.createElement("button", {
    className: "btn btn-sm",
    style: {
      marginRight: '1rem',
      background: 'var(--bg-surface-alt)',
      border: '1px solid var(--border-light)'
    },
    onClick: onBack
  }, "\u2190 Back to Directory"), [{
    id: 'courses',
    label: "\uD83C\uDF93 Courses & Fees (".concat(university.popularCourses.length, ")")
  }, {
    id: 'about',
    label: '🏛️ About University'
  }, {
    id: 'placements',
    label: '💼 Placements & Recruiters'
  }, {
    id: 'approvals',
    label: '📜 Accreditations'
  }, {
    id: 'pedagogy',
    label: '💻 LMS & Exams'
  }, {
    id: 'reviews',
    label: "\u2B50 Student Reviews (".concat(university.metrics.rating, "/5)")
  }, {
    id: 'similar',
    label: '⚖️ Similar Universities'
  }].map(function (tab) {
    return React.createElement("button", {
      key: tab.id,
      className: "uni-nav-btn ".concat(activeTab === tab.id ? 'active' : ''),
      onClick: function onClick() {
        setActiveTab(tab.id);
        var el = document.getElementById("uni-sec-".concat(tab.id));
        if (el) el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, tab.label);
  }))), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "uni-detail-layout"
  }, React.createElement("div", {
    className: "uni-detail-main"
  }, React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-about"
  }, React.createElement("h2", null, "\uD83C\uDFDB\uFE0F About ", university.name), React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: '1.7',
      color: 'var(--text-main)',
      marginBottom: '1.5rem'
    }
  }, university.tagline, ". ", university.name, " is one of India's premier higher education institutions, fully entitled by the University Grants Commission (UGC) and Distance Education Bureau (DEB) to offer online degree programs with 100% online examinations and worldwide recognition."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-subtle)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "NAAC Grade"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--navy-900)'
    }
  }, university.accreditations.naacGrade), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, university.accreditations.naacScore)), React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--orange-50)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--orange-600)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "Highest Package"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--orange-600)'
    }
  }, "\u20B9", university.metrics.highestCtc), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Placement Drive")), React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--accent-emerald-bg)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--accent-emerald)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "Average CTC"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--accent-emerald)'
    }
  }, "\u20B9", university.metrics.avgCtc), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Across Programs")), React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--blue-50)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--blue-600)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "Learners"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--blue-600)'
    }
  }, university.metrics.studentEnrolled), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Active Network")))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-courses"
  }, React.createElement("h2", null, "\uD83C\uDF93 Online Courses Offered & Complete Fee Structure"), React.createElement("p", {
    style: {
      fontSize: '0.925rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, "All fee plans include study material, LMS access, online examinations, and dedicated placement assistance with 0% interest monthly EMI."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }
  }, university.popularCourses.map(function (course) {
    return React.createElement("div", {
      key: course.id,
      style: {
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        background: '#ffffff',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '1rem'
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '0.4rem'
      }
    }, React.createElement("span", {
      className: "badge badge-blue"
    }, course.level), React.createElement("span", {
      className: "badge badge-orange"
    }, course.duration), React.createElement("span", {
      className: "badge badge-success"
    }, "Proctored Online Exam")), React.createElement("h3", {
      style: {
        fontSize: '1.35rem',
        color: 'var(--navy-900)'
      }
    }, course.name), React.createElement("p", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginTop: '0.35rem'
      }
    }, React.createElement("strong", null, "Eligibility Criteria:"), " ", course.eligibility)), React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, React.createElement("div", {
      style: {
        fontSize: '1.5rem',
        fontWeight: '800',
        color: 'var(--orange-500)'
      }
    }, window.helpers.formatINR(course.totalFee)), React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }
    }, window.helpers.formatINR(course.perSemFee), " / Semester"), course.monthlyEmi > 0 && React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--accent-emerald)',
        fontWeight: '700',
        marginTop: '2px'
      }
    }, "0% EMI @ \u20B9", course.monthlyEmi.toLocaleString('en-IN'), "/month"))), course.specializations && React.createElement("div", {
      style: {
        marginTop: '1.25rem',
        paddingTop: '1rem',
        borderTop: '1px dashed var(--border-light)'
      }
    }, React.createElement("strong", {
      style: {
        fontSize: '0.85rem',
        display: 'block',
        marginBottom: '0.5rem',
        color: 'var(--navy-900)'
      }
    }, "Available Specializations (", course.specializations.length, "):"), React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem'
      }
    }, course.specializations.map(function (spec) {
      return React.createElement("span", {
        key: spec,
        style: {
          padding: '0.25rem 0.65rem',
          background: 'var(--bg-surface-alt)',
          borderRadius: '4px',
          fontSize: '0.8rem',
          color: 'var(--text-main)',
          border: '1px solid var(--border-light)'
        }
      }, "\u2022 ", spec);
    }))), course.keyHighlights && React.createElement("div", {
      style: {
        marginTop: '1rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.5rem',
        fontSize: '0.825rem',
        color: 'var(--text-muted)'
      }
    }, course.keyHighlights.map(function (h, i) {
      return React.createElement("span", {
        key: i
      }, "\u2713 ", h);
    })), React.createElement("div", {
      style: {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '0.75rem',
        flexWrap: 'wrap'
      }
    }, React.createElement("button", {
      className: "btn btn-secondary btn-sm",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Download ".concat(course.name, " Syllabus & Fees"),
          university: university.name,
          course: course.name,
          type: 'prospectus',
          source: 'University Page - Syllabus Button'
        });
      }
    }, "\uD83D\uDCE5 Download Syllabus PDF"), React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Enroll in ".concat(course.name, " at ").concat(university.shortName),
          university: university.name,
          course: course.name,
          source: 'University Page - Enroll Course Button'
        });
      }
    }, "Apply for Admission \u2192")));
  }))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-placements"
  }, React.createElement("h2", null, "\uD83D\uDCBC Placement Assistance & Top Hiring Partners"), React.createElement("p", {
    style: {
      fontSize: '0.925rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, "Students of ", university.name, " participate in virtual job fairs and receive 1-on-1 interview preparation support."), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: '1.75rem'
    }
  }, university.topRecruiters.map(function (rec) {
    return React.createElement("span", {
      key: rec,
      style: {
        padding: '0.6rem 1.2rem',
        background: '#ffffff',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        fontWeight: '700',
        fontSize: '0.925rem',
        color: 'var(--navy-900)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, "\uD83C\uDFE2 ", rec);
  })), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)'
    }
  }, React.createElement("h4", {
    style: {
      marginBottom: '0.75rem'
    }
  }, "\uD83C\uDFAF Dedicated Career Support Features:"), React.createElement("ul", {
    style: {
      paddingLeft: '1.25rem',
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem'
    }
  }, React.createElement("li", null, "Resume Building & LinkedIn profile optimization workshops with industry HR leads"), React.createElement("li", null, "Access to Job Portal with 500+ active job openings updated weekly"), React.createElement("li", null, "Mock technical interviews and communication grooming sessions"), React.createElement("li", null, "Exclusive virtual placement drives with leading MNCs and Fortune 500 companies")))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-approvals"
  }, React.createElement("h2", null, "\uD83D\uDCDC Accreditations & Legal Government Approvals"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.25rem',
      marginTop: '1.25rem'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      marginBottom: '0.5rem'
    }
  }, "UGC-DEB"), React.createElement("strong", null, university.accreditations.ugcDebYear), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "100% entitled for online degrees equivalent to regular on-campus degrees.")), React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-purple",
    style: {
      marginBottom: '0.5rem'
    }
  }, "NAAC Grade"), React.createElement("strong", null, "Grade ", university.accreditations.naacGrade, " (", university.accreditations.naacScore, ")"), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "National Assessment & Accreditation Council premier certification.")), React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-blue",
    style: {
      marginBottom: '0.5rem'
    }
  }, "NIRF Rank"), React.createElement("strong", null, university.accreditations.nirfRank), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "Ranked by the Ministry of Education, Government of India.")), university.accreditations.wesRecognized && React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginBottom: '0.5rem'
    }
  }, "WES (USA/Canada)"), React.createElement("strong", null, "Global Recognition"), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "Valid for Canadian PR and international higher education.")))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-pedagogy"
  }, React.createElement("h2", null, "\uD83D\uDCBB Learning Management System & Exam Mode"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginTop: '1rem'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--orange-50)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--orange-100)'
    }
  }, React.createElement("h4", {
    style: {
      color: 'var(--orange-600)',
      marginBottom: '0.5rem'
    }
  }, "\uD83C\uDFE0 100% Online Examination"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }
  }, university.examMode), React.createElement("ul", {
    style: {
      paddingLeft: '1.25rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginTop: '0.5rem'
    }
  }, React.createElement("li", null, "Take exams comfortably from home on your laptop"), React.createElement("li", null, "AI & Human webcam proctoring for integrity"), React.createElement("li", null, "Flexible slot selection on weekends"))), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--blue-50)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--blue-100)'
    }
  }, React.createElement("h4", {
    style: {
      color: 'var(--blue-600)',
      marginBottom: '0.5rem'
    }
  }, "\uD83D\uDCF1 Mobile LMS & Masterclasses"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }
  }, university.learningPedagogy), React.createElement("ul", {
    style: {
      paddingLeft: '1.25rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginTop: '0.5rem'
    }
  }, React.createElement("li", null, "24/7 access to recorded HD video lectures"), React.createElement("li", null, "Downloadable e-books & study notes"), React.createElement("li", null, "Live weekend doubt solving sessions"))))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-reviews"
  }, React.createElement("h2", null, "\u2B50 Student Reviews & Verified Ratings"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '1.5rem',
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: '2.75rem',
      color: 'var(--orange-500)',
      margin: 0
    }
  }, "\u2605 ", university.metrics.rating), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Based on ", university.metrics.reviewCount, " Verified Reviews")), React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Faculty Quality:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.faculty, " / 5.0")), React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "LMS Portal:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.lms, " / 5.0")), React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Placement Cell:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.placementSupport, " / 5.0")), React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Value for Money:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.valueForMoney, " / 5.0"))))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-similar"
  }, React.createElement("h2", null, "\u2696\uFE0F Compare with Alternative Online Universities"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '1.25rem',
      marginTop: '1.25rem'
    }
  }, similarUniversities.map(function (alt) {
    return React.createElement("div", {
      key: alt.id,
      style: {
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.75rem'
      }
    }, React.createElement("div", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: '#f8fafc',
        border: "1px solid ".concat(alt.logoColor),
        color: alt.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.75rem'
      }
    }, alt.logoText), React.createElement("div", null, React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '0.95rem',
        color: 'var(--navy-900)'
      }
    }, alt.shortName), React.createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "NAAC ", alt.accreditations.naacGrade))), React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '0.75rem'
      }
    }, "Starting Fee: ", React.createElement("strong", null, window.helpers.formatINR(alt.popularCourses[0].totalFee)))), React.createElement("button", {
      className: "btn btn-secondary btn-sm btn-block",
      onClick: function onClick() {
        return onSelectUniversity(alt);
      }
    }, "View ", alt.shortName, " \u2192"));
  })))), React.createElement("div", {
    className: "uni-sticky-sidebar"
  }, React.createElement("div", {
    className: "sidebar-lead-card"
  }, React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginBottom: '0.5rem'
    }
  }, "\u26A1 Free Expert Consultation"), React.createElement("h3", {
    style: {
      fontSize: '1.3rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Talk to ", university.shortName, " Advisor"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '1.25rem'
    }
  }, "Get answers regarding eligibility, batch start dates, scholarship fee waivers, and EMI approvals."), React.createElement("button", {
    className: "btn btn-primary btn-block btn-lg",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Apply to ".concat(university.shortName),
        university: university.name,
        source: 'University Page Sticky Sidebar'
      });
    }
  }, "Apply for Admission \u2192"), React.createElement("button", {
    className: "btn btn-secondary btn-block",
    style: {
      marginTop: '0.75rem'
    },
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Download ".concat(university.shortName, " Official Prospectus"),
        university: university.name,
        type: 'prospectus',
        source: 'University Page Sticky Prospectus'
      });
    }
  }, "\uD83D\uDCE5 Download Prospectus PDF"), React.createElement("div", {
    style: {
      marginTop: '1.25rem',
      paddingTop: '1.25rem',
      borderTop: '1px solid var(--border-light)',
      textAlign: 'center'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-subtle)'
    }
  }, "\uD83D\uDCDE Helpline: ", React.createElement("strong", null, "1800-890-5266"), " (Toll-Free)")))))));
};
window.ComparePage = function (_ref17) {
  var compareList = _ref17.compareList,
    onAddUniversity = _ref17.onAddUniversity,
    onRemoveUniversity = _ref17.onRemoveUniversity,
    onOpenLeadModal = _ref17.onOpenLeadModal,
    onOpenUniversityPage = _ref17.onOpenUniversityPage;
  var allUniversities = window.UNIVERSITIES_DATA || [];
  var _React$useState45 = React.useState('MBA'),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    selectedDegree = _React$useState46[0],
    setSelectedDegree = _React$useState46[1];
  var _React$useState47 = React.useState(false),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    highlightDiff = _React$useState48[0],
    setHighlightDiff = _React$useState48[1];
  React.useEffect(function () {
    if (compareList.length < 2) {
      var top3 = allUniversities.slice(0, 3);
      top3.forEach(function (u) {
        if (!compareList.find(function (item) {
          return item.id === u.id;
        })) {
          onAddUniversity(u);
        }
      });
    }
  }, []);
  var comparisonRows = window.helpers.getComparisonDifferences(compareList, selectedDegree);
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "Side-by-Side University Comparison")), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '1.5rem',
      marginBottom: '2rem'
    }
  }, React.createElement("div", null, React.createElement("h1", {
    style: {
      fontSize: '2.4rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Compare Top Indian Online Universities Side-by-Side"), React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '1rem',
      maxWidth: '800px'
    }
  }, "Select up to 4 UGC-DEB approved universities to compare genuine semester fees, NAAC grades, 0% EMI monthly installments, average placement CTC, and online proctored exam features.")), React.createElement("div", {
    style: {
      background: '#ffffff',
      padding: '0.75rem 1.25rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-xs)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: '700',
      cursor: 'pointer',
      color: 'var(--navy-900)'
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked: highlightDiff,
    onChange: function onChange(e) {
      return setHighlightDiff(e.target.checked);
    },
    style: {
      width: '18px',
      height: '18px',
      accentColor: 'var(--orange-500)'
    }
  }), React.createElement("span", null, "Highlight Differences Only")))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "Comparing Course:"), ['MBA', 'MCA', 'BBA', 'BCA', 'M.Sc'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      className: "btn btn-sm ".concat(selectedDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setSelectedDegree(deg);
      }
    }, "Online ", deg);
  })), React.createElement("div", {
    style: {
      background: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      padding: '2rem',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)',
      marginBottom: '2.5rem'
    }
  }, React.createElement("div", {
    className: "comparison-table-wrapper"
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      minWidth: '180px',
      width: '20%'
    }
  }, "Comparison Parameters"), compareList.map(function (uni) {
    return React.createElement("th", {
      key: uni.id,
      style: {
        minWidth: '220px',
        textAlign: 'center',
        verticalAlign: 'top',
        position: 'relative'
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return onRemoveUniversity(uni.id);
      },
      style: {
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
      },
      title: "Remove from comparison"
    }, "\u2715"), React.createElement("div", {
      style: {
        width: '54px',
        height: '54px',
        borderRadius: '12px',
        background: '#f8fafc',
        border: "2px solid ".concat(uni.logoColor),
        color: uni.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.85rem',
        margin: '0 auto 0.5rem auto',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return onOpenUniversityPage(uni);
      }
    }, uni.logoText), React.createElement("div", {
      style: {
        fontWeight: '800',
        fontSize: '1.05rem',
        color: 'var(--navy-900)',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return onOpenUniversityPage(uni);
      }
    }, uni.shortName), React.createElement("div", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        marginBottom: '0.85rem'
      }
    }, "\uD83D\uDCCD ", uni.city, ", ", uni.state), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem'
      }
    }, React.createElement("button", {
      className: "btn btn-primary btn-sm btn-block",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Apply to ".concat(uni.shortName),
          university: uni.name,
          course: "Online ".concat(selectedDegree),
          source: 'Comparison Page CTA'
        });
      }
    }, "Apply for Admission"), React.createElement("button", {
      className: "btn btn-secondary btn-sm btn-block",
      onClick: function onClick() {
        return onOpenUniversityPage(uni);
      }
    }, "Full Profile \u2192")));
  }), compareList.length < 4 && React.createElement("th", {
    style: {
      minWidth: '200px',
      textAlign: 'center',
      verticalAlign: 'middle',
      background: 'var(--bg-surface-alt)',
      border: '2px dashed var(--border-light)'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.5rem 0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '2rem'
    }
  }, "\u2795"), React.createElement("h4", {
    style: {
      fontSize: '1rem',
      marginTop: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "Add Another College"), React.createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      margin: '0.25rem 0 0.75rem 0'
    }
  }, "Select from remaining universities"), React.createElement("select", {
    style: {
      width: '100%',
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid var(--border-light)',
      fontSize: '0.85rem'
    },
    onChange: function onChange(e) {
      var found = allUniversities.find(function (u) {
        return u.id === e.target.value;
      });
      if (found) onAddUniversity(found);
      e.target.value = '';
    },
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "+ Choose University..."), allUniversities.filter(function (u) {
    return !compareList.find(function (c) {
      return c.id === u.id;
    });
  }).map(function (u) {
    return React.createElement("option", {
      key: u.id,
      value: u.id
    }, u.shortName);
  })))))), React.createElement("tbody", null, comparisonRows.map(function (row, idx) {
    var isHighlighted = highlightDiff && row.highlight;
    return React.createElement("tr", {
      key: idx,
      className: isHighlighted ? 'diff-highlight' : ''
    }, React.createElement("td", {
      style: {
        fontWeight: '700',
        color: 'var(--navy-900)'
      }
    }, React.createElement("div", null, row.label), React.createElement("span", {
      style: {
        fontSize: '0.7rem',
        color: 'var(--text-subtle)',
        textTransform: 'uppercase'
      }
    }, row.category)), row.values.map(function (valObj, vIdx) {
      return React.createElement("td", {
        key: vIdx,
        style: {
          textAlign: 'center',
          verticalAlign: 'middle'
        }
      }, valObj.badge ? React.createElement("span", {
        className: "badge ".concat(valObj.badge)
      }, valObj.val) : React.createElement("div", {
        style: {
          fontWeight: '600',
          color: 'var(--text-main)'
        }
      }, valObj.val), valObj.subtext && React.createElement("div", {
        style: {
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: '2px'
        }
      }, valObj.subtext));
    }), compareList.length < 4 && React.createElement("td", {
      style: {
        background: 'var(--bg-surface-alt)'
      }
    }));
  }))))), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem'
    }
  }, React.createElement("div", null, React.createElement("h3", {
    style: {
      color: '#ffffff',
      fontSize: '1.6rem',
      marginBottom: '0.35rem'
    }
  }, "Still Confused Which College Suits Your Profile Best?"), React.createElement("p", {
    style: {
      color: '#fed7aa',
      margin: 0,
      fontSize: '0.95rem'
    }
  }, "Speak with a senior academic counselor for a 100% unbiased comparative review.")), React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: 'Get Free Comparative Evaluation Call',
        notes: "Comparing: ".concat(compareList.map(function (u) {
          return u.shortName;
        }).join(' vs ')),
        source: 'Compare Page Bottom CTA'
      });
    }
  }, "\uD83C\uDFAF Request Free Comparative Call \u2192"))));
};
window.ROICalculatorPage = function (_ref18) {
  var onOpenCounselling = _ref18.onOpenCounselling;
  var _React$useState49 = React.useState(5.0),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    currentSalary = _React$useState50[0],
    setCurrentSalary = _React$useState50[1];
  var _React$useState51 = React.useState('MBA'),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    targetDegree = _React$useState52[0],
    setTargetDegree = _React$useState52[1];
  var _React$useState53 = React.useState(2),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    yearsExp = _React$useState54[0],
    setYearsExp = _React$useState54[1];
  var _React$useState55 = React.useState('FinTech & Analytics'),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    targetDomain = _React$useState56[0],
    setTargetDomain = _React$useState56[1];
  var roi = window.helpers.calculateCareerROI(currentSalary, targetDegree, yearsExp);
  var domainSalaryTrends = [{
    domain: "FinTech & Banking Analytics",
    startingAvg: "₹9.5 LPA",
    jump: "+140%",
    hiring: ["Deloitte", "HDFC", "Morgan Stanley", "KPMG"]
  }, {
    domain: "AI & Machine Learning / Data Science",
    startingAvg: "₹12.0 LPA",
    jump: "+180%",
    hiring: ["Google", "Microsoft", "Amazon", "Schneider"]
  }, {
    domain: "Cloud Computing & DevOps Architecture",
    startingAvg: "₹11.0 LPA",
    jump: "+160%",
    hiring: ["AWS", "IBM", "TCS", "Accenture"]
  }, {
    domain: "Digital Marketing & Performance Growth",
    startingAvg: "₹8.5 LPA",
    jump: "+130%",
    hiring: ["Nykaa", "Flipkart", "Reliance Jio"]
  }, {
    domain: "Supply Chain & Operations Leadership",
    startingAvg: "₹9.0 LPA",
    jump: "+120%",
    hiring: ["Shell", "Tata Motors", "Adani", "Amazon"]
  }, {
    domain: "Healthcare & Hospital Administration",
    startingAvg: "₹8.0 LPA",
    jump: "+110%",
    hiring: ["Cipla", "Max Healthcare", "Apollo Hospitals"]
  }];
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "Course ROI & Salary Growth Calculator")), React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: '2.5rem'
    }
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83D\uDCC8 Official Career Analytics"), React.createElement("h1", {
    style: {
      fontSize: '2.5rem',
      color: 'var(--navy-900)',
      marginBottom: '0.75rem'
    }
  }, "Online Degree ROI & Career Jump Calculator"), React.createElement("p", {
    className: "section-subtitle"
  }, "Evaluate your expected salary increment, course fee payback period in months, and 5-year career wealth gain before investing in an online degree.")), React.createElement("div", {
    className: "calc-card-container",
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "1. Target Online Degree Program:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem'
    }
  }, ['MBA', 'MCA', 'M.Sc', 'BBA', 'BCA', 'M.Tech'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      type: "button",
      className: "btn btn-sm ".concat(targetDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTargetDegree(deg);
      }
    }, deg);
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "2. Your Current Annual CTC (in LPA):"), React.createElement("strong", {
    style: {
      color: 'var(--orange-600)',
      fontSize: '1.2rem'
    }
  }, "\u20B9", currentSalary.toFixed(1), " LPA")), React.createElement("input", {
    type: "range",
    min: "2.0",
    max: "20.0",
    step: "0.5",
    value: currentSalary,
    onChange: function onChange(e) {
      return setCurrentSalary(parseFloat(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B92.0 LPA"), React.createElement("span", null, "\u20B920.0 LPA"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "3. Total Professional Experience:"), React.createElement("strong", {
    style: {
      color: 'var(--orange-600)',
      fontSize: '1.2rem'
    }
  }, yearsExp, " ", yearsExp === 1 ? 'Year' : 'Years')), React.createElement("input", {
    type: "range",
    min: "0",
    max: "10",
    step: "1",
    value: yearsExp,
    onChange: function onChange(e) {
      return setYearsExp(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "0 Yrs (Fresher)"), React.createElement("span", null, "10+ Yrs"))), React.createElement("div", {
    style: {
      padding: '0.85rem 1rem',
      background: 'var(--orange-50)',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.825rem',
      color: 'var(--text-muted)',
      border: '1px solid var(--orange-100)'
    }
  }, "\uD83D\uDCA1 ", React.createElement("em", null, "Projections calibrated against verified placement reports of 45,000+ online alumni in India (2024-2026)."))), React.createElement("div", {
    className: "calc-result-box"
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#fed7aa',
      fontWeight: '600'
    }
  }, "Projected Post-Degree CTC"), React.createElement("div", {
    className: "calc-result-number"
  }, "\u20B9", roi.estimatedNewSalary.toFixed(1), " LPA"), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.875rem'
    }
  }, "\uD83D\uDE80 +", roi.percentageHike, "% Expected Salary Hike"), React.createElement("div", {
    className: "calc-stats-breakdown"
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Payback Period"), React.createElement("strong", null, "~", roi.paybackMonths, " Months")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "5-Year Extra Wealth"), React.createElement("strong", null, "+\u20B9", roi.fiveYearGainLakhs.toFixed(1), " Lakhs")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Approx Course Fee"), React.createElement("strong", null, window.helpers.formatINR(roi.avgDegreeFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Zero Work Break"), React.createElement("strong", null, "100% Online"))), React.createElement("button", {
    className: "btn btn-primary btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: "Get Personalized Career Roadmap for Online ".concat(targetDegree),
        course: "Online ".concat(targetDegree),
        notes: "Current CTC: \u20B9".concat(currentSalary, " LPA -> Projected CTC: \u20B9").concat(roi.estimatedNewSalary, " LPA"),
        source: 'Dedicated ROI Page CTA'
      });
    }
  }, "Get Personalized Career Transition Plan \u2192")))), React.createElement("div", {
    style: {
      background: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: '1.6rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Highest-Paying Online Specializations & Industry Hiring Demand (2026)"), React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: '1.5rem',
      fontSize: '0.925rem'
    }
  }, "Average starting salary packages offered during corporate placement drives for UGC-approved online degrees."), React.createElement("div", {
    className: "comparison-table-wrapper"
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Domain / Specialization"), React.createElement("th", null, "Average CTC (Post Online Degree)"), React.createElement("th", null, "Average Salary Jump"), React.createElement("th", null, "Top Hiring Companies"), React.createElement("th", null, "Action"))), React.createElement("tbody", null, domainSalaryTrends.map(function (d, idx) {
    return React.createElement("tr", {
      key: idx
    }, React.createElement("td", null, React.createElement("strong", {
      style: {
        color: 'var(--navy-900)'
      }
    }, d.domain)), React.createElement("td", null, React.createElement("span", {
      className: "badge badge-orange",
      style: {
        fontSize: '0.85rem'
      }
    }, d.startingAvg)), React.createElement("td", null, React.createElement("strong", {
      style: {
        color: 'var(--accent-emerald)'
      }
    }, d.jump)), React.createElement("td", null, React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }
    }, d.hiring.join(', '))), React.createElement("td", null, React.createElement("button", {
      className: "btn btn-secondary btn-sm",
      onClick: function onClick() {
        return onOpenCounselling({
          title: "Explore Colleges for ".concat(d.domain),
          specialization: d.domain,
          source: 'ROI Specialization Table CTA'
        });
      }
    }, "Explore Colleges \u2192")));
  })))))));
};
window.EMICalculatorPage = function (_ref19) {
  var onOpenCounselling = _ref19.onOpenCounselling;
  var _React$useState57 = React.useState(160000),
    _React$useState58 = _slicedToArray(_React$useState57, 2),
    courseFee = _React$useState58[0],
    setCourseFee = _React$useState58[1];
  var _React$useState59 = React.useState(24),
    _React$useState60 = _slicedToArray(_React$useState59, 2),
    tenure = _React$useState60[0],
    setTenure = _React$useState60[1];
  var _React$useState61 = React.useState(10),
    _React$useState62 = _slicedToArray(_React$useState61, 2),
    scholarshipPercent = _React$useState62[0],
    setScholarshipPercent = _React$useState62[1];
  var discountAmount = courseFee * scholarshipPercent / 100;
  var netPayable = courseFee - discountAmount;
  var monthlyEmi = Math.round(netPayable / tenure);
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "0% Interest EMI & Budget Planner")), React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: '2.5rem'
    }
  }, React.createElement("span", {
    className: "section-tag"
  }, "\uD83D\uDCB3 Zero Financial Burden"), React.createElement("h1", {
    style: {
      fontSize: '2.5rem',
      color: 'var(--navy-900)',
      marginBottom: '0.75rem'
    }
  }, "0% Interest Monthly EMI & Fee Budget Planner"), React.createElement("p", {
    className: "section-subtitle"
  }, "Pursue your degree from top accredited universities without taking heavy loans. Calculate zero-cost monthly installments and check instant scholarship eligibility.")), React.createElement("div", {
    className: "calc-card-container",
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "1. University Course Fee (Total):"), React.createElement("strong", {
    style: {
      color: 'var(--orange-600)',
      fontSize: '1.2rem'
    }
  }, window.helpers.formatINR(courseFee))), React.createElement("input", {
    type: "range",
    min: "50000",
    max: "350000",
    step: "10000",
    value: courseFee,
    onChange: function onChange(e) {
      return setCourseFee(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B950,000"), React.createElement("span", null, "\u20B93.5 Lakhs"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "2. Select 0% Interest EMI Tenure:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '0.5rem'
    }
  }, [6, 12, 24, 36].map(function (m) {
    return React.createElement("button", {
      key: m,
      type: "button",
      className: "btn btn-sm ".concat(tenure === m ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTenure(m);
      }
    }, m, " Months");
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "3. Early Bird / Merit Scholarship Discount:"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, [0, 10, 15, 25].map(function (p) {
    return React.createElement("button", {
      key: p,
      type: "button",
      className: "btn btn-sm ".concat(scholarshipPercent === p ? 'btn-accent' : 'btn-secondary'),
      onClick: function onClick() {
        return setScholarshipPercent(p);
      },
      style: {
        flex: 1
      }
    }, p === 0 ? 'No Coupon' : "".concat(p, "% Off"));
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.85rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0',
      fontSize: '0.825rem',
      color: '#065f46'
    }
  }, React.createElement("span", null, "\u2713"), React.createElement("span", null, "Pre-approved NBFC partners: ", React.createElement("strong", null, "Propelld, Eduvanz, GrayQuest"), " (Zero Credit Card Required)."))), React.createElement("div", {
    className: "calc-result-box",
    style: {
      background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#fed7aa',
      fontWeight: '600'
    }
  }, "Your Monthly 0% EMI"), React.createElement("div", {
    className: "calc-result-number",
    style: {
      color: '#ffffff'
    }
  }, "\u20B9", monthlyEmi.toLocaleString('en-IN'), React.createElement("span", {
    style: {
      fontSize: '1.1rem',
      fontWeight: '500'
    }
  }, "/mo")), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.85rem'
    }
  }, "\uD83C\uDF89 Zero Hidden Charges \u2022 0% Interest Rate"), React.createElement("div", {
    className: "calc-stats-breakdown",
    style: {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    }
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Original Fee"), React.createElement("strong", null, window.helpers.formatINR(courseFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Scholarship Saved"), React.createElement("strong", {
    style: {
      color: '#fef08a'
    }
  }, "- ", window.helpers.formatINR(discountAmount))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Net Payable"), React.createElement("strong", null, window.helpers.formatINR(netPayable))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Tenure"), React.createElement("strong", null, tenure, " Months"))), React.createElement("button", {
    className: "btn btn-primary btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Apply for Instant 0% EMI Approval',
        notes: "Requested EMI: \u20B9".concat(monthlyEmi, "/mo for ").concat(tenure, " months on ").concat(window.helpers.formatINR(courseFee), " fee"),
        source: 'Dedicated EMI Calculator Page CTA'
      });
    }
  }, "Apply for 0% EMI Approval \u2192")))), React.createElement("div", {
    style: {
      background: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: '1.6rem',
      color: 'var(--navy-900)',
      textAlign: 'center',
      marginBottom: '2rem'
    }
  }, "How 0% Interest Education EMI Works at UniversityJano.com"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
    }
  }, "\uD83D\uDCDD"), React.createElement("h4", {
    style: {
      color: 'var(--navy-900)',
      marginBottom: '0.35rem'
    }
  }, "1. Choose University & Plan"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Select your desired online degree and choose an installment tenure from 6 to 36 months.")), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
    }
  }, "\u26A1"), React.createElement("h4", {
    style: {
      color: 'var(--navy-900)',
      marginBottom: '0.35rem'
    }
  }, "2. Instant 10-Min Approval"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Basic Aadhaar/PAN KYC verification without credit cards or collateral security.")), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
    }
  }, "\uD83C\uDF93"), React.createElement("h4", {
    style: {
      color: 'var(--navy-900)',
      marginBottom: '0.35rem'
    }
  }, "3. Start Studying Today"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Get immediate access to university LMS and lectures while paying comfortable zero-interest EMIs."))))));
};
window.UGCVerifierPage = function (_ref20) {
  var onOpenCounselling = _ref20.onOpenCounselling;
  var data = window.ACCREDITATIONS_DATA;
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "UGC-DEB Government Approvals & Legal Validity")), React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: '2.5rem'
    }
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83D\uDEE1\uFE0F 100% Genuine & Legitimate"), React.createElement("h1", {
    style: {
      fontSize: '2.5rem',
      color: 'var(--navy-900)',
      marginBottom: '0.75rem'
    }
  }, "UGC-DEB Government Approval & Degree Validity Inspector"), React.createElement("p", {
    className: "section-subtitle"
  }, "Understand how online degrees are officially recognized by the Government of India, UPSC, Corporate MNCs, and Global WES Evaluation.")), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      marginBottom: '3rem',
      boxShadow: 'var(--shadow-lg)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.85rem'
    }
  }, "\uD83D\uDCDC Official Gazette of India Mandate"), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: '#fed7aa'
    }
  }, data.ugcDebNotice.source)), React.createElement("blockquote", {
    style: {
      fontSize: '1.25rem',
      fontStyle: 'italic',
      lineHeight: '1.6',
      color: '#f8fafc',
      borderLeft: '4px solid var(--orange-500)',
      paddingLeft: '1.5rem',
      margin: '1.5rem 0'
    }
  }, "\"", data.ugcDebNotice.officialGazetteQuote, "\""), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      color: '#e2e8f0'
    }
  }, "\u2696\uFE0F ", React.createElement("strong", null, "Legal Summary:"), " Online degrees awarded by UGC-DEB recognized universities carry 100% identical legal validity as on-campus degrees."), React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Verify University UGC-DEB Entitlement Letter',
        source: 'UGC Page Gazette Header CTA'
      });
    }
  }, "Verify University Approval Letter"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem'
    }
  }, data.ugcDebNotice.validityPoints.map(function (pt, idx) {
    return React.createElement("div", {
      key: idx,
      style: {
        background: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("div", {
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'var(--orange-50)',
        color: 'var(--orange-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        marginBottom: '1rem'
      }
    }, idx === 0 ? '🏛️' : idx === 1 ? '🏢' : idx === 2 ? '🌐' : '💻'), React.createElement("h3", {
      style: {
        fontSize: '1.15rem',
        marginBottom: '0.5rem',
        color: 'var(--navy-900)'
      }
    }, pt.title), React.createElement("p", {
      style: {
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: '1.6'
      }
    }, pt.description));
  })), React.createElement("div", {
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("h2", {
    style: {
      textAlign: 'center',
      marginBottom: '1.75rem',
      color: 'var(--navy-900)'
    }
  }, "Key Regulatory Pillars to Verify Before Enrolling"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.25rem'
    }
  }, data.accreditationTypes.map(function (acc) {
    return React.createElement("div", {
      key: acc.code,
      style: {
        background: '#ffffff',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("span", {
      className: "badge",
      style: {
        backgroundColor: acc.badgeColor,
        color: '#ffffff',
        marginBottom: '0.5rem'
      }
    }, acc.code), React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '1rem',
        color: 'var(--navy-900)',
        margin: '0.35rem 0'
      }
    }, acc.fullName), React.createElement("p", {
      style: {
        fontSize: '0.825rem',
        color: 'var(--text-muted)'
      }
    }, acc.description));
  }))), React.createElement("div", {
    style: {
      maxWidth: '880px',
      margin: '0 auto',
      background: '#ffffff',
      padding: '2.5rem',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-light)'
    }
  }, React.createElement("h2", {
    style: {
      textAlign: 'center',
      marginBottom: '1.75rem',
      color: 'var(--navy-900)'
    }
  }, "Frequently Asked Questions on Online Degrees"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, data.frequentlyAskedQuestions.map(function (faq, fIdx) {
    return React.createElement("div", {
      key: fIdx,
      style: {
        background: 'var(--bg-surface-alt)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem'
      }
    }, React.createElement("h4", {
      style: {
        fontSize: '1rem',
        color: 'var(--navy-900)',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }
    }, React.createElement("span", null, "\u2753"), " ", faq.q), React.createElement("p", {
      style: {
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        margin: 0,
        paddingLeft: '1.5rem',
        lineHeight: '1.6'
      }
    }, faq.a));
  })))));
};
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo;
function App() {
  var _useState = useState('home'),
    _useState2 = _slicedToArray(_useState, 2),
    activePage = _useState2[0],
    setActivePage = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    viewingUniversity = _useState4[0],
    setViewingUniversity = _useState4[1];
  var _useStateBlogPost = useState(null),
    _useStateBlogPost2 = _slicedToArray(_useStateBlogPost, 2),
    viewingBlogPost = _useStateBlogPost2[0],
    setViewingBlogPost = _useStateBlogPost2[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchQuery = _useState6[0],
    setSearchQuery = _useState6[1];
  var _useState7 = useState('All'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedDegree = _useState8[0],
    setSelectedDegree = _useState8[1];
  var _useState9 = useState('All'),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedNaac = _useState10[0],
    setSelectedNaac = _useState10[1];
  var _useState11 = useState(300000),
    _useState12 = _slicedToArray(_useState11, 2),
    maxBudget = _useState12[0],
    setMaxBudget = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    onlyOnlineExam = _useState14[0],
    setOnlyOnlineExam = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    onlyEmi = _useState16[0],
    setOnlyEmi = _useState16[1];
  var _useState17 = useState('featured'),
    _useState18 = _slicedToArray(_useState17, 2),
    sortBy = _useState18[0],
    setSortBy = _useState18[1];
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    compareList = _useState20[0],
    setCompareList = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showCompareModal = _useState22[0],
    setShowCompareModal = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showWizardModal = _useState24[0],
    setShowWizardModal = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    leadModalData = _useState26[0],
    setLeadModalData = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showAdminCRM = _useState28[0],
    setShowAdminCRM = _useState28[1];
  var universities = window.UNIVERSITIES_DATA || [];
  useEffect(function () {
    var handleHashChange = function handleHashChange() {
      var hash = window.location.hash || '#/';
      if (hash.startsWith('#/university/')) {
        var slug = hash.replace('#/university/', '');
        var found = universities.find(function (u) {
          return u.slug === slug || u.id === slug;
        });
        if (found) {
          setViewingUniversity(found);
          setActivePage('university');
        } else {
          setActivePage('universities');
        }
      } else if (hash === '#/universities') {
        setViewingUniversity(null);
        setActivePage('universities');
      } else if (hash === '#/compare') {
        setViewingUniversity(null);
        setActivePage('compare');
      } else if (hash === '#/roi-calculator') {
        setViewingUniversity(null);
        setActivePage('roi-calculator');
      } else if (hash === '#/emi-calculator') {
        setViewingUniversity(null);
        setActivePage('emi-calculator');
      } else if (hash === '#/ugc-verifier') {
        setViewingUniversity(null);
        setActivePage('ugc-verifier');
      } else if (hash.indexOf('#/blog/') === 0) {
        var blogSlug = hash.replace('#/blog/', '');
        var blogPosts = window.BLOG_DATA || [];
        var foundPost = blogPosts.find(function (p) {
          return p.slug === blogSlug;
        });
        setViewingUniversity(null);
        setViewingBlogPost(foundPost || null);
        setActivePage('blog-post');
      } else if (hash === '#/blog') {
        setViewingUniversity(null);
        setViewingBlogPost(null);
        setActivePage('blog');
      } else {
        setViewingUniversity(null);
        setActivePage('home');
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return function () {
      return window.removeEventListener('hashchange', handleHashChange);
    };
  }, [universities]);
  var navigateTo = function navigateTo(pageName) {
    var uni = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (pageName === 'university' && uni) {
      setViewingUniversity(uni);
      window.location.hash = "#/university/".concat(uni.slug);
    } else if (pageName === 'universities') {
      window.location.hash = "#/universities";
    } else if (pageName === 'compare') {
      window.location.hash = "#/compare";
    } else if (pageName === 'roi-calculator') {
      window.location.hash = "#/roi-calculator";
    } else if (pageName === 'emi-calculator') {
      window.location.hash = "#/emi-calculator";
    } else if (pageName === 'ugc-verifier') {
      window.location.hash = "#/ugc-verifier";
    } else if (pageName === 'blog-post' && uni) {
      window.location.hash = "#/blog/".concat(uni.slug);
    } else if (pageName === 'blog') {
      window.location.hash = "#/blog";
    } else {
      window.location.hash = "#/";
    }
  };
  var filteredUniversities = useMemo(function () {
    return universities.filter(function (uni) {
      if (searchQuery.trim()) {
        var q = searchQuery.toLowerCase();
        var matchesName = uni.name.toLowerCase().includes(q) || uni.shortName.toLowerCase().includes(q);
        var matchesLocation = uni.city.toLowerCase().includes(q) || uni.state.toLowerCase().includes(q);
        var matchesCourse = uni.popularCourses.some(function (c) {
          return c.name.toLowerCase().includes(q) || c.degree.toLowerCase().includes(q) || c.specializations && c.specializations.some(function (s) {
            return s.toLowerCase().includes(q);
          });
        });
        if (!matchesName && !matchesLocation && !matchesCourse) return false;
      }
      if (selectedDegree !== 'All') {
        var hasDegree = uni.popularCourses.some(function (c) {
          return c.degree === selectedDegree;
        });
        if (!hasDegree) return false;
      }
      if (selectedNaac !== 'All') {
        if (!uni.accreditations.naacGrade.includes(selectedNaac)) return false;
      }
      var relevantCourse = uni.popularCourses.find(function (c) {
        return selectedDegree === 'All' ? true : c.degree === selectedDegree;
      }) || uni.popularCourses[0];
      if (relevantCourse && relevantCourse.totalFee > maxBudget) {
        return false;
      }
      if (onlyOnlineExam && !uni.examMode.includes('100% Online')) {
        return false;
      }
      if (onlyEmi && !uni.emiAvailable) {
        return false;
      }
      return true;
    }).sort(function (a, b) {
      if (sortBy === 'rating') return b.metrics.rating - a.metrics.rating;
      if (sortBy === 'highestCtc') return parseFloat(b.metrics.highestCtc) - parseFloat(a.metrics.highestCtc);
      if (sortBy === 'feeLowToHigh') {
        var aFee = a.popularCourses[0] ? a.popularCourses[0].totalFee : 0;
        var bFee = b.popularCourses[0] ? b.popularCourses[0].totalFee : 0;
        return aFee - bFee;
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [universities, searchQuery, selectedDegree, selectedNaac, maxBudget, onlyOnlineExam, onlyEmi, sortBy]);
  var handleToggleCompare = function handleToggleCompare(university) {
    var exists = compareList.find(function (u) {
      return u.id === university.id;
    });
    if (exists) {
      setCompareList(compareList.filter(function (u) {
        return u.id !== university.id;
      }));
    } else {
      if (compareList.length >= 4) {
        alert('You can compare up to 4 universities at a time. Please remove one first.');
        return;
      }
      setCompareList([].concat(_toConsumableArray(compareList), [university]));
    }
  };
  var handleAddCompare = function handleAddCompare(university) {
    if (!compareList.find(function (u) {
      return u.id === university.id;
    }) && compareList.length < 4) {
      setCompareList([].concat(_toConsumableArray(compareList), [university]));
    }
  };
  var handleRemoveCompare = function handleRemoveCompare(uniId) {
    setCompareList(compareList.filter(function (u) {
      return u.id !== uniId;
    }));
  };
  var handleResetFilters = function handleResetFilters() {
    setSelectedDegree('All');
    setSelectedNaac('All');
    setMaxBudget(300000);
    setOnlyOnlineExam(false);
    setOnlyEmi(false);
    setSearchQuery('');
  };
  return React.createElement("div", {
    className: "app-root"
  }, React.createElement(window.Header, {
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data || {
        title: 'Book 1-on-1 Free Expert Counselling'
      });
    },
    onOpenAdminCRM: function onOpenAdminCRM() {
      return setShowAdminCRM(true);
    },
    compareList: compareList,
    onOpenCompare: function onOpenCompare() {
      return navigateTo('compare');
    },
    activePage: activePage,
    onNavigate: navigateTo
  }), activePage === 'university' && viewingUniversity && React.createElement(window.UniversityDetailPage, {
    university: viewingUniversity,
    onBack: function onBack() {
      return navigateTo('universities');
    },
    onOpenLeadModal: function onOpenLeadModal(data) {
      return setLeadModalData(data);
    },
    onToggleCompare: handleToggleCompare,
    isComparing: !!compareList.find(function (item) {
      return item.id === viewingUniversity.id;
    }),
    onSelectUniversity: function onSelectUniversity(u) {
      return navigateTo('university', u);
    }
  }), activePage === 'universities' && React.createElement(window.AllUniversitiesPage, {
    universities: filteredUniversities,
    searchQuery: searchQuery,
    onSearchChange: setSearchQuery,
    selectedDegree: selectedDegree,
    onSelectDegree: setSelectedDegree,
    selectedNaac: selectedNaac,
    onSelectNaac: setSelectedNaac,
    maxBudget: maxBudget,
    onBudgetChange: setMaxBudget,
    onlyOnlineExam: onlyOnlineExam,
    onToggleOnlineExam: setOnlyOnlineExam,
    onlyEmi: onlyEmi,
    onToggleEmi: setOnlyEmi,
    onResetFilters: handleResetFilters,
    sortBy: sortBy,
    onSortChange: setSortBy,
    onOpenUniversityPage: function onOpenUniversityPage(u) {
      return navigateTo('university', u);
    },
    onOpenLeadModal: function onOpenLeadModal(data) {
      return setLeadModalData(data);
    },
    onToggleCompare: handleToggleCompare,
    compareList: compareList
  }), activePage === 'compare' && React.createElement(window.ComparePage, {
    compareList: compareList,
    onAddUniversity: handleAddCompare,
    onRemoveUniversity: handleRemoveCompare,
    onOpenLeadModal: function onOpenLeadModal(data) {
      return setLeadModalData(data);
    },
    onOpenUniversityPage: function onOpenUniversityPage(u) {
      return navigateTo('university', u);
    }
  }), activePage === 'roi-calculator' && React.createElement(window.ROICalculatorPage, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'emi-calculator' && React.createElement(window.EMICalculatorPage, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'ugc-verifier' && React.createElement(window.UGCVerifierPage, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'blog' && React.createElement(window.BlogListPage, {
    posts: window.BLOG_DATA || [],
    onOpenPost: function onOpenPost(post) {
      return navigateTo('blog-post', post);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'blog-post' && React.createElement(window.BlogPostPage, {
    post: viewingBlogPost,
    allPosts: window.BLOG_DATA || [],
    onBack: function onBack() {
      return navigateTo('blog');
    },
    onOpenPost: function onOpenPost(post) {
      return navigateTo('blog-post', post);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'home' && React.createElement(React.Fragment, null, React.createElement(window.HeroSection, {
    searchQuery: searchQuery,
    onSearchChange: setSearchQuery,
    selectedDegree: selectedDegree,
    onSelectDegree: function onSelectDegree(deg) {
      setSelectedDegree(deg);
      navigateTo('universities');
    },
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement("section", {
    className: "stats-bar-section"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "stats-grid"
  }, React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "25+"), React.createElement("p", null, "UGC-DEB Approved Universities")), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "50,000+"), React.createElement("p", null, "Students Counseled & Enrolled")), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "\u20B935 LPA"), React.createElement("p", null, "Highest Placement CTC")), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "100% Free"), React.createElement("p", null, "Zero Agent Brokerage"))))), React.createElement("section", {
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-main)',
      paddingBottom: '2rem'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "tools-showcase-grid"
  }, React.createElement("div", {
    className: "tool-feature-card",
    onClick: function onClick() {
      return setShowWizardModal(true);
    },
    style: {
      cursor: 'pointer'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "tool-icon-wrap",
    style: {
      background: '#fff7ed',
      color: '#ff7a00'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\u26A1")), React.createElement("h3", null, "AI College Finder Wizard"), React.createElement("p", null, "Confused between 20+ universities? Answer 4 quick questions and get an instant AI match score.")), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700',
      fontSize: '0.9rem'
    }
  }, "Launch 2-Min Wizard \u2192")), React.createElement("div", {
    className: "tool-feature-card",
    onClick: function onClick() {
      return navigateTo('roi-calculator');
    },
    style: {
      cursor: 'pointer'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "tool-icon-wrap",
    style: {
      background: '#ecfdf5',
      color: '#059669'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\uD83D\uDCC8")), React.createElement("h3", null, "Course ROI & Salary Jump"), React.createElement("p", null, "Calculate your estimated post-degree salary hike, payback period, and 5-year career returns.")), React.createElement("span", {
    style: {
      color: '#059669',
      fontWeight: '700',
      fontSize: '0.9rem'
    }
  }, "Go to ROI Calculator Page \u2192")), React.createElement("div", {
    className: "tool-feature-card",
    onClick: function onClick() {
      return navigateTo('emi-calculator');
    },
    style: {
      cursor: 'pointer'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "tool-icon-wrap",
    style: {
      background: '#eff6ff',
      color: '#1a56db'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\uD83D\uDCB3")), React.createElement("h3", null, "0% Monthly EMI Planner"), React.createElement("p", null, "Calculate zero-cost monthly installments and check instant scholarship eligibility.")), React.createElement("span", {
    style: {
      color: '#1a56db',
      fontWeight: '700',
      fontSize: '0.9rem'
    }
  }, "Go to EMI Planner Page \u2192"))))), React.createElement("section", {
    id: "universities-section",
    className: "section-padding"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag"
  }, "\uD83C\uDFEB Top Online Universities"), React.createElement("h2", {
    className: "section-title"
  }, "Explore Top UGC-DEB Approved Online Universities"), React.createElement("p", {
    className: "section-subtitle"
  }, "Authentic NAAC grades, verified fee breakdowns, 0% EMI options, and real placement records.")), React.createElement("div", {
    className: "catalog-layout"
  }, React.createElement(window.FilterSidebar, {
    selectedDegree: selectedDegree,
    onSelectDegree: setSelectedDegree,
    selectedNaac: selectedNaac,
    onSelectNaac: setSelectedNaac,
    maxBudget: maxBudget,
    onBudgetChange: setMaxBudget,
    onlyOnlineExam: onlyOnlineExam,
    onToggleOnlineExam: setOnlyOnlineExam,
    onlyEmi: onlyEmi,
    onToggleEmi: setOnlyEmi,
    onResetFilters: handleResetFilters
  }), React.createElement("div", null, React.createElement("div", {
    className: "catalog-content-header"
  }, React.createElement("div", {
    className: "results-count"
  }, "Showing ", React.createElement("strong", null, filteredUniversities.length), " Universities", selectedDegree !== 'All' && React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " for Online ", selectedDegree)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("a", {
    className: "btn btn-secondary btn-sm",
    href: "universities/index.html",
    style: { textDecoration: 'none' }
  }, "View All Universities Page \u2192"))), React.createElement("div", {
    className: "university-grid"
  }, filteredUniversities.slice(0, 6).map(function (uni) {
    return React.createElement(window.UniversityCard, {
      key: uni.id,
      university: uni,
      selectedDegree: selectedDegree,
      onViewDetails: function onViewDetails(u) {
        return navigateTo('university', u);
      },
      onOpenLeadModal: function onOpenLeadModal(data) {
        return setLeadModalData(data);
      },
      onToggleCompare: handleToggleCompare,
      isComparing: !!compareList.find(function (item) {
        return item.id === uni.id;
      })
    });
  })), filteredUniversities.length > 6 && React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '2.5rem'
    }
  }, React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "universities/index.html",
    style: { textDecoration: 'none' }
  }, "\u26A1 View All ", filteredUniversities.length, " Universities on Dedicated Page \u2192")))))), React.createElement(window.ROICalculator, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement(window.EMICalculator, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement(window.UGCVerifier, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement(window.TestimonialsSection, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  })), React.createElement(window.Footer, {
    onNavigate: navigateTo,
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data || {
        title: 'Book 1-on-1 Free Expert Counselling'
      });
    }
  }), React.createElement("div", {
    className: "compare-floating-tray ".concat(compareList.length > 0 ? 'active' : '')
  }, React.createElement("div", {
    className: "compare-tray-thumbnails"
  }, compareList.map(function (u) {
    return React.createElement("div", {
      key: u.id,
      className: "compare-thumb",
      title: u.name
    }, u.shortName.slice(0, 3).toUpperCase(), React.createElement("div", {
      className: "compare-thumb-remove",
      onClick: function onClick(e) {
        e.stopPropagation();
        handleRemoveCompare(u.id);
      }
    }, "\u2715"));
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: '0.9rem',
      fontWeight: '700'
    }
  }, compareList.length, " / 4 Selected"), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: '#cbd5e1'
    }
  }, compareList.length < 2 ? 'Add 1 more to compare' : 'Ready to compare side-by-side')), React.createElement("button", {
    className: "btn btn-primary btn-sm",
    disabled: compareList.length < 2,
    onClick: function onClick() {
      return navigateTo('compare');
    }
  }, "Compare Now (", compareList.length, ") \u2192")), React.createElement(window.FloatingWidgets, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    },
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    }
  }), showWizardModal && React.createElement(window.AIWizardModal, {
    onClose: function onClose() {
      return setShowWizardModal(false);
    },
    onOpenLeadModal: function onOpenLeadModal(data) {
      setShowWizardModal(false);
      setLeadModalData(data);
    }
  }), leadModalData && React.createElement(window.LeadCaptureModal, {
    initialData: leadModalData,
    onClose: function onClose() {
      return setLeadModalData(null);
    },
    onSuccess: function onSuccess() {}
  }), showAdminCRM && React.createElement(window.LeadDashboardModal, {
    onClose: function onClose() {
      return setShowAdminCRM(false);
    }
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));