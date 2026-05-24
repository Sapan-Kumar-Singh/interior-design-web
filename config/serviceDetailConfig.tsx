// ================================
// types/serviceDetails.ts
// ================================

import { PageHeroConfig } from "@/types/pageHero";
import { ArrowUpRight, House } from "lucide-react";

import { ReactNode } from "react";

export interface ServiceOptions {
  title: string;
  slug: string;
}
export interface OtherServiceConfig{
   title:string;
   serviceOptions:ServiceOptions[];
}


export interface ServiceFeatureItem {
  title: string;
  description: string;
}

export interface ServiceBenefitItem {
  title: string;
}

export interface ServiceHelpCardConfig {
  title: string;
  description: string;
  button: {
    label: string;
    href?: string;
    icon?: ReactNode;
  };
  background: {
    src: string;
    alt: string;
  };
}

export interface ServiceHeroConfig {
  title: string;
  breadcrumbTitle: string;
  backgroundImage: string;
}

export interface ServiceContentConfig {
  heading: string;
  description: string[];
  heroImage: string;
  heroImageAlt: string;
}

export interface ServiceDetailsConfig {
  slug: string;
  pageHero: PageHeroConfig;
  content: ServiceContentConfig;
  featuresSection: {
    title: string;
    items: ServiceFeatureItem[];
  };
  benefitsSection: {
    title: string;
    items: ServiceBenefitItem[];
  };
}



// =====================================
// config/serviceDetailsConfig.tsx
// =====================================



export const otherServiceConfig:OtherServiceConfig={
    title:'Others Services',
    serviceOptions:[
      {
        title: "Kitchen Remodeling",
        slug: "kitchen-remodeling",
      },
      {
        title: "Custom Cabinetry",
        slug: "custom-cabinetry",
      },
      {
        title: "Bathroom Renovation",
        slug: "bathroom-renovation",
      },
      {
        title: "Tile & Flooring",
        slug: "tile-flooring",
      },
      {
        title: "Full Home Remodeling",
        slug: "full-home-remodeling",
      },
    ],
}

export const  serviceHelpCard:ServiceHelpCardConfig={
      title: "Need Help?",
      description: "Contact our team for expert advice and a free consultation.",

      background: {
        src: "/images/serviceDetails/contact_card_cover.jpg",
        alt: "Contact card background image",
      },

      button: {
        label: "Contact us",
        href: "/contact",
        icon: <ArrowUpRight size={16} />,
      },
    };

export const serviceDetailsConfig: Record<string,ServiceDetailsConfig> = {
  "kitchen-remodeling": {
    slug: "kitchen-remodeling",
    pageHero: {
      imgSrc:"/images/serviceDetails/kitchen_remodeling.jpg",
      title: "Kitchen Remodeling",
      breadcrumb:<>
      <House size={20} className="text-primary" />
      <span>Home</span>
          <span>|</span>
          <span>Service Details</span>
      </>
    },
   

    content: {
      heading: "Expert Kitchen Remodeling Solutions",

      heroImage: "/images/serviceDetails/kitchen_remodeling.jpg",

      heroImageAlt: "Kitchen remodeling",

      description: [
        `At Apex, we specialize in creating beautiful,
        functional kitchens tailored to your lifestyle.
        Whether you’re looking for a modern upgrade or
        a complete transformation, our team delivers
        high-quality craftsmanship and innovative design
        solutions.`,

        `From layout planning to final finishes, we ensure
        every detail is carefully executed to create a
        kitchen that is both stylish and practical.`,
      ],
    },

    featuresSection: {
      title: "What’s Included in Our Kitchen Remodeling",

      items: [
        {
          title: "Custom Kitchen Design",
          description:"Tailored kitchen layouts designed to match your lifestyle and preferences.",
        },
        {
          title: "Cabinet Installation",
          description:"Premium cabinet solutions with modern finishes and optimized storage.",
        },
        {
          title: "Countertops & Surfaces",
          description:"Durable and elegant countertop installations for a refined look.",
        },
        {
          title: "Appliances Integration",
          description:"Seamless integration of modern appliances into your kitchen space.",
        },
        {
          title: "Lighting Solutions",
          description:"Functional and aesthetic lighting setups to enhance the atmosphere.",
        },
        {
          title: "Flooring & Backsplash",
          description: "Stylish flooring and backsplash options to complete your kitchen.",
        },
      ],
    },

    benefitsSection: {
      title: "Benefits of Kitchen Remodeling",

      items: [
        {
          title: "Improved functionality and workflow",
        },

        {
          title: "Increased home value",
        },

        {
          title: "Modern and stylish appearance",
        },

        {
          title: "Better storage and organization",
        },

        {
          title: "Enhanced lighting and comfort",
        },
      ],
    },
  },

  // =====================================
  // ADD OTHER SERVICES SAME WAY
  // =====================================

//   "bathroom-renovation": {
//     slug: "bathroom-renovation",

//     hero: {
//       title: "Services",
//       breadcrumbTitle: "Bathroom Renovation",
//       backgroundImage: "/images/services/service_cover_bg.jpg",
//     },

//     sidebarServices: [],

//     helpCard: {
//       title: "Need Help?",

//       description:
//         "Contact our team for expert advice and a free consultation.",

//       background: {
//         src: "/images/serviceDetails/contact_card_cover.jpg",
//         alt: "Contact card background image",
//       },

//       button: {
//         label: "Contact us",
//         href: "/contact",
//         icon: <ArrowUpRight size={16} />,
//       },
//     },

//     content: {
//       heading: "Luxury Bathroom Renovation Services",

//       heroImage: "/images/serviceDetails/bathroom.jpg",

//       heroImageAlt: "Bathroom renovation",

//       description: [
//         "Modern bathroom remodeling crafted for comfort and elegance.",
//       ],
//     },

//     featuresSection: {
//       title: "What’s Included",

//       items: [],
//     },

//     benefitsSection: {
//       title: "Benefits",

//       items: [],
//     },
//   },
};