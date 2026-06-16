/* =====================================================
   PORTFOLIO DATA FILE
   Students should customize most content here.
   Add more projects or case studies by copying one object.
   ===================================================== */

const projects = [
  {
    title: "Revenue Forecasting Engine",
    description:
      "Unified regional spreadsheets into a real-time Power BI forecasting model with DAX-powered trend analysis.",
    image: "assets/images/project-revenue.svg",
    tags: ["Power BI", "DAX", "Excel"],
    metric: "72h/mo saved",
    impact: "+18% accuracy",
    link: "https://example.com",
  },
  {
    title: "Inventory Optimization Dashboard",
    description:
      "Built a demand monitoring system that reduced stock issues across multiple retail locations.",
    image: "assets/images/project-inventory.svg",
    tags: ["Excel", "Power BI", "SQL"],
    metric: "24% less overstock",
    impact: "80+ branches",
    link: "https://example.com",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "Created cohort analysis that identified churn patterns and monthly attrition drivers.",
    image: "assets/images/project-churn.svg",
    tags: ["SQL", "Power BI", "DAX"],
    metric: "31% churn insight",
    impact: "5 segments",
    link: "https://example.com",
  },
  {
    title: "Sales Performance Command Center",
    description:
      "Designed an executive dashboard tracking revenue, margin and sales team performance.",
    image: "assets/images/project-sales.svg",
    tags: ["Power Query", "DAX", "UI UX"],
    metric: "$2.4M tracked",
    impact: "+34% clarity",
    link: "https://example.com",
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
    title: "Dashboard Design & Automation",
    text: "Custom Power BI and Excel dashboards that automate reporting and save hours weekly.",
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
    title: "Data Cleaning & Reporting",
    text: "Transform messy raw data into structured, analysis-ready datasets with clear reporting.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 18L10 12L14 15L20 8"/>
      <path d="M20 8v5"/>
      <path d="M20 8h-5"/>
    </svg>
    `,
    title: "Business Insights & KPI Reporting",
    text: "Track what matters with actionable KPI frameworks tailored to business goals.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="16" height="16"/>
      <path d="M4 10h16"/>
      <path d="M10 4v16"/>
    </svg>
    `,
    title: "Spreadsheet Development",
    text: "Advanced Excel, Power Query and Google Sheets systems built for efficiency.",
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
    title: "Operational Data Consulting",
    text: "Improve operations using analytics, workflow optimization and reporting systems.",
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
    title: "Power BI Coaching & Training",
    text: "Personalized mentoring from beginner level to advanced dashboard development.",
  },
];
