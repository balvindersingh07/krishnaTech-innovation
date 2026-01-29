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
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with 100K+ products",
    category: "Web App",
    image: ecommerceImg,
    fullDescription:
      "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, advanced search, and analytics dashboard.",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    description: "Telemedicine platform for remote consultations",
    category: "Mobile App",
    image: healthcareImg,
    fullDescription:
      "HIPAA-compliant telemedicine application enabling secure video consultations, appointment scheduling, prescription management, and health records access.",
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    description: "Real-time business intelligence platform",
    category: "SaaS",
    image: saasImg,
    fullDescription:
      "Advanced analytics platform with real-time data visualization, custom reporting, and AI-powered insights. Handles millions of data points with lightning-fast performance.",
  },
  {
    id: 4,
    title: "Financial Tech Platform",
    description: "Digital banking and investment management",
    category: "FinTech",
    image: financialImg,
    fullDescription:
      "Secure digital banking platform with features including account management, real-time transfers, investment portfolios, and automated financial planning tools.",
  },
  {
    id: 5,
    title: "Digital Markerting",
    description: "Optimizing content to rank higher in search results",
    category: "SEO",
    image: seoImg,
    fullDescription:
      "Digital marketing promotes brands and connects with customers using the internet and digital channels like email, social media, search engines, and apps, employing strategies such as SEO, content marketing, PPC ads, and social media to drive awareness, leads, and sales through data-driven, personalized experiences.",
  },
  {
    id: 6,
    title: "SMM Panel",
    description:
      "Social Media Engagement Services",
    category: "SMM",
    image: professionalsImg,
    fullDescription:
      "An SMM (Social Media Marketing) panel is an online, self-service store that allows users to purchase social media engagement services—such as followers, likes, views, and comments—for platforms like Instagram, Facebook, YouTube",
  },
];
