/* =====================================================
   PORTFOLIO DATA FILE
   Users should customize most content here.
   Add more projects or case studies by copying one object.
   ===================================================== */

const projects = [
  {
    title: "Jumia Customer Experience & Loyalty Insights Analysis",
    description:
      "Analyzed customer experience, operational performance, and customer loyalty patterns using customer feedback and operational data representing Jumia Nigeria. Built an interactive Power BI dashboard to transform raw customer data into actionable Business Intelligence (BI) insights and support data-driven decision-making around customer satisfaction, retention, delivery performance, and complaint resolution.",
    image: "assets/images/viz jumia dashboard 1.png",
    tags: ["Power BI", "DAX", "Feature Engineering", "Data Modelling", "Excel"],
    metric: "+77% Customer Loyalty Recovery",
    impact: "56% Repeat Customer Rate",
    link: "https://example.com",
  },
  {
    title: "Nigeria-education-analysis",
    description:
      "End-to-end data analysis of Nigeria's education crisis using 65 years of World Bank data | DIG Framework | Python | Chart.js.",
    image: "assets/images/Nigeria_Education_Analysis.jpg",
    tags: ["Excel", "HTML", "Python"],
    metric: "$17.6B Annual Education Funding Gap",
    impact: "90% Collapse in Public Education Investment",
    link: "https://github.com/Oyinlola-Kayode/Nigeria-education-analysis",
  },
  {
    title: "Pharmacy-Sales-Customer-Insights-Analysis",
    description:
      "Analyzed pharmacy sales, customers, and product performance to uncover revenue trends, buying behaviour, and product concentration risks, translating the findings into inventory, marketing, and operational recommendations.",
    image: "assets/images/Customers_overview.jpg",
    tags: ["Power Query", "DAX", "Power BI", "Data Modelling", "Excel"],
    metric: "₦5.2M Antibiotic Revenue Concentration",
    impact: "+17.66% Revenue Decline Exposed",
    link: "https://github.com/Oyinlola-Kayode/Pharmacy-Sales-Customer-Insights-Analysis",
 },
  {
    title: "Sales Performance Command Center",
    description:
      "Analyzed patient visits, doctor performance, treatment patterns, and satisfaction to uncover service-quality trends and support workload, scheduling, and patient-experience decisions.",
    image: "assets/images/Clinic Visit Trends and Doctors Performance Overview.jpeg",
    tags: ["Power Query", "VBA", "DAX", "Power Pivot", "Excel"],
    metric: "4 Patient Segments Profiled",
    impact: "+34% Service Quality Improvement",
    link: "https://github.com/Oyinlola-Kayode/Clinic-Visit-Trends-and-Doctors-Performance-Overview",
  },
];

const services = [
  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="6" height="6"/>
      <rect x="14" y="4" width="6" height="6"/>
      <rect x="4" y="14" width="6" height="6"/>
      <rect x="14" y="14" width="6" height="6"/>
    </svg>
    `,
    title: "Business Intelligence & Dashboard Solutions",
    text: "Interactive Power BI and Excel dashboards that bring KPIs, trends, and performance into one clear decision-making view.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 3v4"/>
      <path d="M12 17v4"/>
      <path d="M4.9 4.9l2.8 2.8"/>
      <path d="M16.3 16.3l2.8 2.8"/>
      <path d="M3 12h4"/>
      <path d="M17 12h4"/>
      <path d="M4.9 19.1l2.8-2.8"/>
      <path d="M16.3 7.7l2.8-2.8"/>
    </svg>
    `,
    title: "Customer & Marketing Analytics",
    text: "Analysis that helps businesses understand customer behaviour, engagement, satisfaction, retention, and marketing performance.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 18L10 12L14 15L20 8"/>
      <path d="M20 8v5"/>
      <path d="M20 8h-5"/>
    </svg>
    `,
    title: "KPI & Performance Analysis",
    text: "Identifying and tracking the metrics that matter, so teams can see what is improving, what is declining, and where attention is needed.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="16" height="16"/>
      <path d="M4 10h16"/>
      <path d="M10 4v16"/>
    </svg>
    `,
    title: "Data Cleaning, Transformation & Modeling",
    text: "Turning messy, disconnected data into structured, reliable datasets ready for analysis, reporting, and decision-making.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82"/>
      <path d="M4.6 9a1.65 1.65 0 0 0-.33-1.82"/>
      <path d="M9 4.6a1.65 1.65 0 0 0-1.82-.33"/>
      <path d="M15 19.4a1.65 1.65 0 0 0 1.82.33"/>
    </svg>
    `,
    title: "Operational Reporting & Automation",
    text: "Building reporting systems that reduce repetitive work, improve visibility, and make day-to-day performance easier to monitor.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 8l8-4l8 4"/>
      <path d="M6 10v5"/>
      <path d="M18 10v5"/>
      <path d="M4 8v8l8 4l8-4V8"/>
    </svg>
    `,
    title: "Analytics Training & Mentorship",
    text: "Practical Excel, SQL, and Power BI training for individuals and teams, using real business problems and hands-on projects.",
  },
];
