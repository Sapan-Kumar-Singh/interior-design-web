// ================================
// config/projectDetailsConfig.tsx
// ================================

import {
  AlarmClock,
  CircleCheck,
  House,
  MapPin,
  ShieldUser,
  Sprout,
} from "lucide-react";

// ================================
// types/projectDetails.ts
// ================================

import { ReactNode } from "react";
import { PageHeroConfig } from "@/types/pageHero";

export interface ProjectMetaItem {
  icon: ReactNode;
  title: string;
}

export interface ProjectListItem {
  icon?: ReactNode;
  label: string;
}

export interface ProjectMaterialItem {
  label: string;
  value: string;
}

export interface ProjectOverviewConfig {
  title: string;
  descriptions: string;
}

export interface ProjectSectionConfig {
  title: string;
  description: string;
  content: ProjectListItem[];
}

export interface ProjectMaterialsConfig {
  title: string;
  description: string;

  materialsAndFinishes: ProjectMaterialItem[];
}

export interface ProjectChallengesConfig {
  title: string;
  descriptions: string;
}

export interface ProjectTransformationConfig {
  beforeImage: string;
  afterImage: string;
  beforeLabel:string;
  afterLabel:string;
}

export interface ProjectDetailsConfig {
  slug: string;

  pageHero: PageHeroConfig;

  heroImage: {
    src: string;
    alt: string;
  };

  overview: ProjectOverviewConfig;

  projectMeta: ProjectMetaItem[];

  transformation: ProjectTransformationConfig;

  designDetails: ProjectSectionConfig;

  keyFeatures: ProjectSectionConfig;

  finishingDetails: ProjectMaterialsConfig;

  challenges: ProjectChallengesConfig;
}


export const pageHeroConfig:PageHeroConfig = {
    imgSrc:'/images/projects/project_cover_bg.jpg',
    title: 'Our Remodeling Projects',
    breadcrumb: <>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Project Details</span>
        </>
}

export const projectDetailsConfig: Record<
  string,
  ProjectDetailsConfig
> = {
  "modern-luxury-kitchen": {
    slug: "modern-luxury-kitchen",

    pageHero: {
      imgSrc:"/images/services/service_cover_bg.jpg",
      title: "Modern Luxury Kitchen",
      breadcrumb: (
        <>
          <House
            size={14}
            className="text-primary"
          />
          <span>Home</span>
          <span>|</span>
          <span>Project Details</span>
        </>
      ),
    },

    heroImage: {
      src:"/images/serviceDetails/kitchen_remodeling.jpg",
      alt: "Kitchen remodeling",
    },

    overview: {
      title: "Project Overview",

      descriptions: 
        `This project involved a complete transformation
        of an outdated kitchen into a sophisticated,
        modern space. The goal was to create an
        open-concept layout with improved functionality,
        sleek aesthetics, and high-end finishes.

        Our team focused on maximizing space,
        enhancing lighting, and integrating smart
        storage solutions to ensure both beauty
        and practicality.`,
    },

    projectMeta: [
      {
        icon: <Sprout size={18} />,
        title: "Kitchen Remodeling",
      },

      {
        icon: <ShieldUser size={18} />,
        title: "Private Homeowner",
      },

      {
        icon: <MapPin size={18} />,
        title: "New York, USA",
      },

      {
        icon: <AlarmClock size={18} />,
        title: "6 Weeks",
      },
    ],

    transformation: {
      beforeImage:"/images/transformation/before_1.jpg",

      afterImage:"/images/transformation/after_1.jpg",
       beforeLabel: "Before",
      afterLabel: "After",
    },

    designDetails: {
      title: "Design Concept",

      description:
        "The design concept centered around minimalism and luxury. A neutral color palette combined with warm textures creates a welcoming yet refined atmosphere.",

      content: [
        {
          icon: <CircleCheck size={18} />,
          label:
            "Clean lines and open space",
        },

        {
          icon: <CircleCheck size={18} />,
          label:
            "Custom cabinetry with soft-close features",
        },

        {
          icon: <CircleCheck size={18} />,
          label:
            "Marble countertops for a premium finish",
        },
      ],
    },

    keyFeatures: {
      title: "Key Features & Highlights",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",

      content: [
        {
          icon: <CircleCheck size={18} />,
          label:
            "Custom-built modern cabinetry",
        },

        {
          icon: <CircleCheck size={18} />,
          label:
            "High-end marble countertops",
        },

        {
          icon: <CircleCheck size={18} />,
          label:
            "Smart storage solutions",
        },

        {
          icon: <CircleCheck size={18} />,
          label:
            "Energy-efficient lighting system",
        },

        {
          icon: <CircleCheck size={18} />,
          label:
            "Premium appliances integration",
        },
      ],
    },

    finishingDetails: {
      title: "Materials & Finishes",

      description:
        "We selected high-quality materials to ensure durability and a luxurious look:",

      materialsAndFinishes: [
        {
          label: "Cabinetry",

          value:
            "Matte finish custom wood cabinets",
        },

        {
          label: "Countertops",

          value:
            "Natural marble stone",
        },

        {
          label: "Flooring",

          value:
            "Large-format porcelain tiles",
        },

        {
          label: "Backsplash",

          value:
            "Minimalist stone tile design",
        },
      ],
    },

    challenges: {
      title: "Challenges & Solutions",

      descriptions: `The original kitchen had limited space
        and poor lighting. Our team redesigned
        the layout to create an open flow and
        installed layered lighting to brighten
        the entire space.,We also introduced custom storage
        solutions to maximize usability
        without compromising aesthetics.`,
    },
  },
};