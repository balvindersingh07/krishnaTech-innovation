import type { LucideIcon } from "lucide-react";
import { Code, Smartphone, TrendingUp, Share2 } from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
};

export const services: Service[] = [
  {
    id: "software-dev",
    icon: Code,
    title: "Software Development",
    description:
      "Enterprise-grade software engineered for performance, security & scale",
    details:
      "We design and develop high-performance custom software tailored to complex business needs. From enterprise systems and SaaS platforms to automation tools and scalable backend architectures, our solutions are secure, optimized, and built for long-term growth. We focus on clean architecture, maintainable code, and measurable business impact.",
  },
  {
    id: "web-mobile",
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Conversion-focused websites & cross-platform mobile apps with premium UX",
    details:
      "We build modern, responsive websites and powerful mobile applications that combine stunning UI with seamless user experience. Whether it’s a startup MVP or a large-scale product, we ensure fast performance, scalable architecture, and intuitive design that drives engagement and revenue growth.",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description:
      "SEO, SMO, Google Ads, ecommerce marketing & ROI-driven campaigns",
    details:
      "Our digital growth strategies are data-backed and performance-focused. We provide SEO, SMO, Google Ads (AdWords), ecommerce marketing, video marketing, content marketing, email automation, analytics & reporting. Every campaign is optimized for conversions, lead generation, and measurable ROI to scale your brand sustainably.",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media & Brand Strategy",
    description:
      "Strategic content, paid campaigns & analytics-driven audience growth",
    details:
      "We craft impactful social media strategies that increase brand visibility and engagement. From content planning and paid ad management to influencer collaboration and performance analytics, we help businesses build strong digital authority and consistent audience growth across platforms.",
  },
];
