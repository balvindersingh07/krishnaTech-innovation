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
    description: "Custom software, enterprise systems, scalable solutions",
    details:
      "We build robust, scalable software solutions tailored to your business needs. From enterprise systems to custom applications, our development team delivers quality code with best practices and modern technologies.",
  },
  {
    id: "web-mobile",
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "Responsive websites + mobile apps with premium UI",
    details:
      "Create stunning web and mobile experiences that engage users and drive conversions. We design and develop responsive websites and native mobile applications with beautiful, intuitive interfaces.",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, paid ads, content strategy, lead generation",
    details:
      "Accelerate your growth with data-driven digital marketing strategies. We offer comprehensive services including SEO optimization, paid advertising campaigns, content marketing, and lead generation that deliver measurable results.",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Management",
    description: "Organic growth + analytics",
    details:
      "Build your brand presence across social platforms with strategic content and community management. We help you grow organically, engage your audience, and track performance with detailed analytics.",
  },
];
