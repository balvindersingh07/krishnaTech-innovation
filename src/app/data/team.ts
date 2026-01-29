// src/app/data/team.ts
import type { TeamMember } from "../sections/Team";

// ✅ Local images (folder: src/app/assets/team/)
import balvinderImg from "../../assets/team/balvindersinghsoni.png";
import ankitImg from "../../assets/team/ankit.png";
import alishaImg from "../../assets/team/alisha.png";
import nehaImg from "../../assets/team/neha.png";
import tanviImg from "../../assets/team/tanvi.png";
import kratiImg from "../../assets/team/krati.png";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Balvinder Singh Soni",
    role: "Founder & Owner | Head of Application Development",
    experience: "3+ Years Professional Experience",
    image: balvinderImg,
    summary:
      "Full Stack Developer and product-focused engineer experienced in building scalable web applications, REST APIs, admin panels, and production-ready deployments.",

    skills: [
      "React",
      "React Native",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Full-Stack (MEAN)",
      "Azure",
      "AWS",
      "CI/CD",
      "Security Best-Practices",
      "Performance Optimization",
      "Azure OpenAI (GPT)",
      "Prompt Engineering",
      "RAG Basics",
      "Vector Search (Basics)",
      "Cognitive Services",
      "Vercel",
      "Netlify",
      "Render",
      "DigitalOcean",
      "Heroku",
      "Excel",
      "Word",
      "Outlook",
      "Data Management",
      "Data Quality",
    ],

    certifications: [
      "Full Stack Web Development (Project-Based)",
      "REST API Development & Backend Architecture",
      "Cloud Deployment & CI/CD Fundamentals",
    ],

    projects: [
      "Doctor Appointment — Full stack web application with user booking, admin management, and deployment on Vercel.",
      "E-commerce App — Frontend-focused shopping application with responsive UI and product workflows.",
      "E-commerce Backend — REST API backend handling products, authentication, and order management.",
      "Travel Project — Responsive travel website deployed on Vercel.",
      "Midway — Web project focusing on layout structure, routing, and clean UI.",
      "Creative App — React-based application with modern UI and component-driven architecture.",
      "LocalPush — Event and creator platform frontend with booking and availability handling.",
      "Sharthi Frontend — Marketplace frontend with optimized build and Vercel configuration.",
      "BeautyLux — SPA project with optimized build output and rewrite rules.",
    ],

    work: [
      "Designed and developed end-to-end web applications from frontend to backend.",
      "Built secure REST APIs with authentication and role-based authorization.",
      "Implemented admin panels, dashboards, and data-driven UI components.",
      "Handled production deployments, environment configuration, and build optimizations.",
      "Maintained multiple live projects with continuous improvements and bug fixes.",
    ],
  },

  {
    id: 2,
    name: "Ankit Choudhary",
    role: "Co-Founder | Head of Web Development",
    experience: "2+ Years Professional Experience",
    image: ankitImg,

    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "Laravel",
      "MySQL",
      "Responsive Web Design",
      "UI Implementation",
    ],

    summary:
      "Frontend-focused web developer experienced in building responsive, user-friendly, and performance-optimized websites using modern web technologies.",

    work: [
      "Developed responsive websites with clean UI and cross-browser compatibility.",
      "Converted UI designs into pixel-perfect frontend implementations.",
      "Worked on backend integration using PHP & MySQL for dynamic web features.",
      "Improved website performance, structure, and maintainability.",
    ],

    projects: [
      "Business & portfolio websites with responsive layouts.",
      "Dynamic web applications using PHP, Laravel, and MySQL.",
      "Marketing and promotion landing pages with modern UI.",
    ],
  },

  {
    id: 3,
    name: "Alisha Satish Gadhave",
    role: "Head of Product Support",
    experience: "1.6 Years Professional Experience",
    image: alishaImg,

    summary:
      "Product Support Engineer with experience in SaaS platforms, technical troubleshooting, and multi-channel client support for international customers.",

    skills: [
      "SaaS Product Support",
      "SQL Troubleshooting",
      "Ticketing Systems",
      "Incident & Escalation Management",
      "Active Directory User Management",
      "Microsoft 365 Support",
      "Automation & Monitoring",
      "Client Communication",
    ],

    certifications: [
      "Jira Project Management Certification",
      "SQL Certification",
      "Zendesk Fundamentals",
      "Python Fundamentals",
      "Advanced Excel for Data Analysis",
    ],

    work: [
      "Provided multi-channel support (email, chat, calls) for SaaS applications.",
      "Resolved application and data issues using SQL and backend tools.",
      "Handled user access, permissions, and credential-related issues.",
      "Managed incidents, escalations, and support documentation.",
    ],
  },

  {
    id: 4,
    name: "Neha Katoch",
    role: "Head of Digital Marketing",
    experience: "5+ Years Professional Experience",
    image: nehaImg,

    summary:
      "SEO specialist with extensive experience in search engine optimization, website audits, keyword strategy, and performance analysis to improve organic visibility and rankings.",

    skills: [
      "Search Engine Optimization (SEO)",
      "On-page & Off-page SEO",
      "Keyword Research & Analysis",
      "Technical SEO Audits",
      "Google Analytics",
      "Google Search Console",
      "Competitor Analysis",
      "Link Building Strategies",
      "Content Optimization",
    ],

    certifications: [
      "Google Analytics Fundamentals",
      "SEO Optimization Training",
      "Web Analytics & Reporting",
    ],

    work: [
      "Led SEO optimization activities including on-page, off-page, and technical SEO improvements.",
      "Performed keyword research, competitor analysis, and backlink strategy execution.",
      "Tracked and analyzed SEO performance using Google Analytics and Search Console.",
      "Conducted website audits to identify and resolve technical SEO issues.",
      "Worked on multiple client websites to improve search rankings and organic traffic.",
    ],
  },

  {
    id: 5,
    name: "Tanvi Rastogi",
    role: "Head of Data Analytics",
    experience: "11+ Years Banking | 4+ Years Analytics",
    image: tanviImg,

    summary:
      "Banking & Data Analytics professional with 11+ years in credit risk, portfolio analysis, and customer operations, plus 4+ years of analytics experience using SQL, Python, Power BI, Tableau, and Excel to deliver KPI dashboards and investment insights for leadership decisions.",

    skills: [
      "Credit Risk Management",
      "Portfolio Analysis",
      "Financial KPI Tracking",
      "Market Intelligence",
      "Sector Benchmarking",
      "SQL",
      "Power BI",
      "Python (Pandas, NumPy)",
      "Tableau",
      "Excel (Advanced, VBA, Pivot)",
      "Data Cleaning & Transformation",
      "Data Storytelling",
    ],

    certifications: ["JAIIB (2015)"],

    projects: [
      {
        name: "Power BI Sales & Profit Dashboard",
        theme: "Interactive KPI dashboarding with drill-down insights",
        stack: ["Power BI", "Excel", "Data Modeling"],
        summary:
          "Built dashboards across 3 datasets to analyze Sales by month/category/sub-category, Profit trends, state-wise profit, and average order-to-shipment time.",
      },
      {
        name: "Orders & Returns Deep-Dive Analytics",
        theme: "Returns analysis + shipping performance breakdown",
        stack: ["Power BI", "EDA", "Waterfall", "Decomposition", "Ribbon Charts"],
        summary:
          "Created return analysis by year & category (waterfall), decomposed shipment time across region/state/category, analyzed shipment modes, salesperson drill-through, and profit insights.",
      },
      {
        name: "EDA Project Repository",
        theme: "Exploratory analysis using Python workflows",
        stack: ["Python", "Pandas", "NumPy", "EDA"],
        summary:
          "Maintains analytics work and EDA projects on GitHub for reproducible analysis and documentation.",
      },
    ],

    highlights: [
      "Managed credit portfolio reporting for SME & retail segments; monitored delinquency and branch KPIs using Power BI & Excel.",
      "Delivered thematic reports, market intelligence summaries, and leadership-ready dashboards to support lending and risk decisions.",
      "Improved credit health by analyzing repayment trends, optimizing NPA, and ensuring governance/accuracy in reporting.",
      "Streamlined loan workflow gaps via multi-source data aggregation; improved approval mechanisms and disbursement TAT.",
      "Led data-driven outreach contributing to ₹188 Cr government business and ₹338 Cr CASA growth with the team; onboarded 250+ payroll accounts via segmentation.",
    ],

    tools: ["SQL", "Power BI", "Tableau", "Python", "Excel (VBA/Pivot/Modeling)"],
  },

  {
    id: 6,
    name: "Krati Shrivastava",
    role: "Head of Testing",
    experience: "Entry-Level Professional",
    image: kratiImg,

    summary:
      "Data Analyst with hands-on experience in data cleaning, analysis, and visualization, focused on deriving actionable insights from structured datasets using Python and SQL.",

    skills: [
      "Python (Pandas, NumPy)",
      "SQL (Joins, Subqueries)",
      "Data Cleaning & EDA",
      "Data Visualization",
      "MS Excel (Pivot Tables, VLOOKUP)",
      "Analytical Problem Solving",
      "Data Validation & Reporting",
    ],

    certifications: [
      "Data Analytics Course – AlmaBetter",
      "Python Practice Certification",
      "SQL Certification",
      "Post Graduate Diploma in Computer Applications (PGDCA)",
    ],

    work: [
      "Performed data cleaning, transformation, and exploratory data analysis on structured datasets.",
      "Analyzed datasets using Python and SQL to identify trends and patterns.",
      "Built visual reports and dashboards to present insights clearly.",
      "Validated data accuracy and supported data-driven decision making.",
    ],
  },
];
