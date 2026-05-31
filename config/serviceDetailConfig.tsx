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
        title: "Interior Design & Planning",
        slug: "interior-design-planning",
      },
      {
        title: "Turnkey Interior Solutions",
        slug: "turnkey-interior-solutions",
      },
      {
        title: "Engineering & Technical Services",
        slug: "engineering-technical-services",
      },
      {
        title: "Renovation & Remodeling",
        slug: "renovation-remodeling",
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

export const serviceDetailsConfig: Record<string, ServiceDetailsConfig> = {
  "interior-design-planning": {
    slug: "interior-design-planning",

    pageHero: {
      imgSrc: "/images/serviceDetails/interior_design.jpeg",

      title: "Interior Design & Planning",

      breadcrumb: (
        <>
          <House size={20} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Service Details</span>
        </>
      ),
    },

    content: {
      heading: "Creative Interior Design & Space Planning",
      heroImage:"/images/serviceDetails/interior_design.jpeg",
      heroImageAlt: "Interior design planning",

      description: [
        `We create personalized interior spaces that combine aesthetics, comfort, and functionality. Our design approach focuses on understanding your lifestyle, space requirements, and visual preferences.`,

        `From concept development and space planning to material selection and furniture layouts, we ensure every element works together seamlessly to create inspiring interiors.`,
      ],
    },

    featuresSection: {
      title: "What’s Included in Interior Design & Planning",

      items: [
        {
          title: "Space Planning",
          description:
            "Optimized layouts for better functionality and flow.",
        },
        {
          title: "Concept Development",
          description:
            "Creative themes and mood boards tailored to your vision.",
        },
        {
          title: "Furniture Layout",
          description:
            "Efficient furniture arrangements for comfort and aesthetics.",
        },
        {
          title: "Material Selection",
          description:
            "Carefully selected finishes, textures, and materials.",
        },
        {
          title: "Lighting Design",
          description:
            "Layered lighting solutions for ambience and functionality.",
        },
        {
          title: "Color Consultation",
          description:
            "Balanced color palettes that elevate your interiors.",
        },
      ],
    },

    benefitsSection: {
      title: "Benefits of Interior Design & Planning",

      items: [
        {
          title: "Improved space functionality",
        },
        {
          title: "Modern and cohesive interiors",
        },
        {
          title: "Better lighting and ambience",
        },
        {
          title: "Efficient use of available space",
        },
        {
          title: "Enhanced comfort and lifestyle",
        },
      ],
    },
  },

  "turnkey-interior-solutions": {
    slug: "turnkey-interior-solutions",

    pageHero: {
      imgSrc: "/images/serviceDetails/turnkey_interior.png",

      title: "Turnkey Interior Solutions",

      breadcrumb: (
        <>
          <House size={20} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Service Details</span>
        </>
      ),
    },

    content: {
      heading: "Complete Turnkey Interior Execution",

      heroImage: "/images/serviceDetails/turnkey_interior.png",

      heroImageAlt: "Turnkey interior solutions",

      description: [
        `Our turnkey interior solutions provide end-to-end project execution, ensuring a seamless and stress-free experience from concept to completion.`,

        `We manage everything including planning, procurement, execution, site coordination, custom furnishings, and final finishing while maintaining quality and timelines.`,
      ],
    },

    featuresSection: {
      title: "What’s Included in Turnkey Interior Solutions",

      items: [
        {
          title: "End-to-End Execution",
          description:
            "Complete project management from design to handover.",
        },
        {
          title: "Custom Furniture",
          description:
            "Tailor-made furniture solutions for your interiors.",
        },
        {
          title: "False Ceiling & Lighting",
          description:
            "Modern ceiling designs with integrated lighting.",
        },
        {
          title: "Wall & Paint Finishes",
          description:
            "Premium wall textures, wallpapers, and paint finishes.",
        },
        {
          title: "Modular Installations",
          description:
            "Efficient modular kitchen and storage solutions.",
        },
        {
          title: "Site Supervision",
          description:
            "Dedicated monitoring for quality and timely execution.",
        },
      ],
    },

    benefitsSection: {
      title: "Benefits of Turnkey Interior Solutions",

      items: [
        {
          title: "Single point of responsibility",
        },
        {
          title: "Faster project completion",
        },
        {
          title: "Consistent quality execution",
        },
        {
          title: "Stress-free project management",
        },
        {
          title: "Cost and time efficiency",
        },
      ],
    },
  },

  "engineering-technical-services": {
    slug: "engineering-technical-services",

    pageHero: {
      imgSrc: "/images/serviceDetails/engineering_technical_service.png",

      title: "Engineering & Technical Services",

      breadcrumb: (
        <>
          <House size={20} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Service Details</span>
        </>
      ),
    },

    content: {
      heading: "Reliable Engineering & Technical Expertise",

      heroImage:
        "/images/serviceDetails/engineering_technical_service.png",

      heroImageAlt: "Engineering and technical services",

      description: [
        `We provide technical and engineering support services that ensure structural safety, construction accuracy, and efficient project execution.`,

        `Our expertise includes drafting, structural planning, site supervision, technical consultation, and detailed project coordination for residential and commercial spaces.`,
      ],
    },

    featuresSection: {
      title: "What’s Included in Engineering Services",

      items: [
        {
          title: "Structural Planning",
          description:
            "Safe and efficient structural layout solutions.",
        },
        {
          title: "Technical Drawings",
          description:
            "Detailed engineering and construction drawings.",
        },
        {
          title: "Site Supervision",
          description:
            "Regular monitoring of project execution quality.",
        },
        {
          title: "Drafting Services",
          description:
            "Professional CAD drafting and technical documentation.",
        },
        {
          title: "Project Coordination",
          description:
            "Smooth coordination between teams and contractors.",
        },
        {
          title: "Construction Support",
          description:
            "Technical guidance throughout project execution.",
        },
      ],
    },

    benefitsSection: {
      title: "Benefits of Engineering Services",

      items: [
        {
          title: "Improved construction accuracy",
        },
        {
          title: "Better structural safety",
        },
        {
          title: "Efficient project execution",
        },
        {
          title: "Reduced technical errors",
        },
        {
          title: "Professional project management",
        },
      ],
    },
  },

  "renovation-remodeling": {
    slug: "renovation-remodeling",

    pageHero: {
      imgSrc: "/images/serviceDetails/renovation_remodeling.png",

      title: "Renovation & Remodeling",

      breadcrumb: (
        <>
          <House size={20} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Service Details</span>
        </>
      ),
    },

    content: {
      heading: "Modern Renovation & Remodeling Solutions",

      heroImage:
         "/images/serviceDetails/renovation_remodeling.png",
      heroImageAlt: "Renovation and remodeling",

      description: [
        `We transform outdated spaces into modern, stylish, and functional environments through innovative renovation and remodeling services.`,

        `Whether it’s a kitchen upgrade, bathroom renovation, living room makeover, or complete property remodeling, we deliver quality craftsmanship with attention to detail.`,
      ],
    },

    featuresSection: {
      title: "What’s Included in Renovation & Remodeling",

      items: [
        {
          title: "Kitchen Remodeling",
          description:
            "Modern kitchen upgrades with improved functionality.",
        },
        {
          title: "Bathroom Renovation",
          description:
            "Elegant and practical bathroom transformations.",
        },
        {
          title: "Flooring Solutions",
          description:
            "Premium flooring installations for modern interiors.",
        },
        {
          title: "False Ceiling Works",
          description:
            "Stylish ceiling designs with lighting integration.",
        },
        {
          title: "Wall Renovation",
          description:
            "Fresh wall textures, paints, and decorative finishes.",
        },
        {
          title: "Complete Space Makeover",
          description:
            "End-to-end renovation for homes and commercial spaces.",
        },
      ],
    },

    benefitsSection: {
      title: "Benefits of Renovation & Remodeling",

      items: [
        {
          title: "Enhanced property value",
        },
        {
          title: "Modernized living spaces",
        },
        {
          title: "Improved functionality",
        },
        {
          title: "Better comfort and aesthetics",
        },
        {
          title: "Long-lasting interior upgrades",
        },
      ],
    },
  },
};