// src/app/data/portfolio.ts

export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  fullDescription: string;
};

// ✅ Local portfolio images
import ecommerceImg from "../../assets/portfolio/E-Commerce.png";
import healthcareImg from "../../assets/portfolio/Healthcare.png";
import saasImg from "../../assets/portfolio/SaaS.png";
import financialImg from "../../assets/portfolio/Financial.png";
import seoImg from "../../assets/portfolio/seo.jpg";
import professionalsImg from "../../assets/portfolio/Our Professionals.png";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Marketplace Platform",
    description:
      "Enterprise-grade marketplace architecture supporting 100K+ products",
    category: "Web Application",
    image: ecommerceImg,
    fullDescription:
      "Designed and developed a scalable full-stack e-commerce marketplace using modern React architecture, Node.js microservices, and MongoDB. The platform supports high-volume transactions, real-time inventory synchronization, secure payment gateway integrations (Stripe/Razorpay), advanced search with filtering, order lifecycle automation, and analytics dashboards. Built with performance optimization, security best practices, and horizontal scalability in mind.",
  },
  {
    id: 2,
    title: "Healthcare Telemedicine Application",
    description:
      "Secure telehealth platform for digital patient consultations",
    category: "Mobile Application",
    image: healthcareImg,
    fullDescription:
      "A HIPAA-compliant telemedicine solution enabling secure video consultations, appointment scheduling, electronic prescriptions, and digital health records management. Built with scalable backend APIs, encrypted communication channels, and role-based access control to ensure patient data security and compliance. Designed to support high availability and real-time interactions across devices.",
  },
  {
    id: 3,
    title: "SaaS Business Intelligence Dashboard",
    description:
      "Real-time analytics system with AI-driven insights",
    category: "SaaS Platform",
    image: saasImg,
    fullDescription:
      "Developed a cloud-based SaaS analytics platform capable of processing millions of data points in real-time. Features include dynamic dashboards, custom reporting engines, API integrations, predictive analytics modules, and scalable multi-tenant architecture. Optimized for performance, reliability, and enterprise-level data security standards.",
  },
  {
    id: 4,
    title: "Financial Technology Platform",
    description:
      "Secure digital banking & investment management system",
    category: "FinTech",
    image: financialImg,
    fullDescription:
      "A comprehensive financial platform offering digital banking operations, investment portfolio management, automated financial planning tools, and real-time transaction monitoring. Built with secure API architecture, encrypted data handling, and compliance-focused workflows. Designed for high reliability, audit tracking, and seamless third-party integrations.",
  },
  {
    id: 5,
    title: "Digital Growth & SEO Strategy Platform",
    description:
      "Data-driven SEO, PPC & performance marketing system",
    category: "Digital Marketing",
    image: seoImg,
    fullDescription:
      "Implemented a full-scale digital marketing ecosystem leveraging SEO optimization, Google Ads management, content strategy, conversion tracking, and analytics reporting. Campaigns were structured with keyword research, competitor analysis, funnel optimization, and performance monitoring dashboards. Result-driven approach focused on organic traffic growth, lead generation, and measurable ROI improvement.",
  },
  {
    id: 6,
    title: "Advanced SMM Engagement System",
    description:
      "Automated social media growth & engagement platform",
    category: "Social Media Marketing",
    image: professionalsImg,
    fullDescription:
      "Built a scalable Social Media Marketing (SMM) engagement platform enabling automated order management for social growth services including followers, likes, views, and engagement metrics. Integrated secure payment systems, API-based service providers, analytics tracking, and high-performance order processing infrastructure. Designed for reliability, automation efficiency, and global service scalability.",
  },
];
