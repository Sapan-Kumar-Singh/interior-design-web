import { PageHeroConfig } from "@/types/pageHero";
import { House } from "lucide-react";

import { ReactNode } from "react";

export type ServiceCardVariant ="overlay" | "content";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  type?: ServiceCardVariant;
}

export interface ServicesSectionContent {
  badge: string;
  title: string;
  description: string;
  button: {
    label: string;
    href?: string;
    icon?: ReactNode;
  };
}

export interface ServicesSectionConfig {
  content: ServicesSectionContent;
  services: ServiceItem[];
}


export const pageHeroConfig:PageHeroConfig = {
    imgSrc:'/images/services/service_cover_bg.jpg',
    title: 'Services',
    breadcrumb: <>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Services</span>
        </>
}

import { ArrowUpRight } from "lucide-react";


export const servicesSectionConfig: ServicesSectionConfig = {
  content: {
    badge: "Our Services",

    title: "Expert Interior & Engineering Solutions",

    description: "At Apex Interiors and Engineering, we provide complete interior design, turnkey execution, and technical engineering services tailored to modern residential and commercial spaces.",

    button: {
      label: "Contact us",
      href: "/contact",
      icon: <ArrowUpRight size={14} />,
    },
  },

  services: [
    {
      slug: "interior-design-planning",
      title: "Interior Design & Planning",
      description:"We create thoughtful and functional interior concepts with space planning, material selection, lighting design, furniture layouts, and modern aesthetics tailored to your lifestyle and vision.",
      image:"/images/services/interior_design.jpeg",
      type: "overlay",
    },
    {
      slug: "turnkey-interior-solutions",
      title: "Turnkey Interior Solutions",
      description:"From concept to completion, we handle every aspect of your interior project including execution, site coordination, custom furnishings, finishing, and project management for a hassle-free experience.",
      image:"/images/services/turnkey_interior.png",
      type: "content",
    },
    {
      slug: "engineering-technical-services",
      title: "Engineering & Technical Services",
      description:"Our engineering services include structural planning, technical drawings, site supervision, drafting, and construction support to ensure safe, efficient, and high-quality project execution.",
      image:"/images/services/engineering_technical_service.png",

      type: "overlay",
    },

    {
      slug: "renovation-remodeling",

      title: "Renovation & Remodeling",

      description:
        "Upgrade your existing spaces with modern renovation solutions including kitchen remodeling, bathroom upgrades, false ceilings, wall finishes, flooring, and complete space transformations.",

      image:"/images/services/renovation_remodeling.png",

      type: "content",
    },
  ],
};