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
    title: "Expert Remodeling Services for Every Space",
    description:"At Apex, we offer a complete range of kitchen and bathroom remodeling services designed to enhance both style and functionality.",
    button: {
      label: "Contact us",
      href: "/contact",
      icon: <ArrowUpRight size={14} />,
    },
  },

  services: [
    {
      slug:'kitchen-remodeling',
      title: "Kitchen Remodeling",
      description:"Transform your kitchen into a culinary haven. From custom cabinetry to premium countertops, we craft spaces that blend beauty with function.",

      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",

      type: "overlay",
    },

    {
      slug:'bathroom-renovation',
      title: "Bathroom Renovation",
      description:
        "Elevate your daily ritual with spa-inspired bathroom designs. Every fixture, tile, and fitting chosen for enduring elegance.",

      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",

      type:"content",
    },

    {
      slug:'living-room-design',

      title: "Living Room Design",

      description:
        "Create living spaces that breathe. Open layouts, natural light, and artful furniture arrangements for the modern home.",

      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",

      type: "overlay",
    },

    {
      slug:'outdoor-spaces',
      title: "Outdoor Spaces",

      description:
        "Extend your living area outdoors with seamless patios, decks, and garden retreats designed for year-round enjoyment.",

      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",

      type:"content",
    },
  ],
};