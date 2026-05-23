import { PageHeroConfig } from "@/types/pageHero";
import { House } from "lucide-react";

// ======================================
// types/project.ts
// ======================================

export type ProjectAnimationDirection = "left" | "right" | "top"| "bottom";

export interface ProjectItem {
  slug: string;
  title: string;
  imgSrc: string;
  animationDirection: ProjectAnimationDirection;
}

export interface ProjectsSectionConfig {
  badge: string;
  title: string;
  description: string;
  projects: ProjectItem[];
}

export const pageHeroConfig:PageHeroConfig = {
    imgSrc:'/images/projects/project_cover_bg.jpg',
    title: 'Our Remodeling Projects',
    breadcrumb: <>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Projects</span>
        </>
}


// ======================================
// config/projectsConfig.ts
// ======================================

export const projectsConfig: ProjectsSectionConfig ={
  badge: "Our Projects",
  title:"Transformations That Speak for Themselves",
  description:"Explore our latest kitchen and bathroom remodeling projects, where design, craftsmanship, and attention to detail come together beautifully",

  projects: [
    {
      slug:'modern-luxury-kitchen',
      title: "Modern Luxury Kitchen",
      imgSrc:"/images/projects/modern_luxury_kitchen.jpg",
      animationDirection: "left",
    },
    {
      slug:'spa-inspired-bathroom',
      title: "Spa-Inspired Bathroom",
      imgSrc:"/images/projects/spa_inspired_bathroom.jpg",
      animationDirection: "top",
    },
    {
      slug:'contemporary-kitchen-upgrade',
      title: "Contemporary Kitchen Upgrade",
      imgSrc:"/images/projects/contemporary_kitchen_upgrade.jpg",
      animationDirection: "right",
    },
    {
      slug:'elegant-bathroom-makeover',
      title: "Elegant Bathroom Makeover",
      imgSrc:"/images/projects/elegant_bathroom_makeover.jpg",
      animationDirection: "left",
    },
    {
      slug:'luxury-living-space-redesign',
      title: "Luxury Living Space Redesign",
      imgSrc:"/images/projects/luxury_living_space_redesign.jpg",
      animationDirection: "bottom",
    },

    {
      slug:'premium-library-design',
      title: "Premium Library Design",
      imgSrc:"/images/projects/premium_library_design.jpg",
      animationDirection: "right",
    },
  ],
};