import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
export interface RemodelingBannerBackground {
  src: string;
  alt: string;
}

export interface RemodelingBannerButton {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface RemodelingBannerContent {
  title: string;
  description: string;
  button: RemodelingBannerButton;
}

export interface RemodelingBannerConfig {
  background: RemodelingBannerBackground;
  content: RemodelingBannerContent;
}



export const remodelingBannerConfig: RemodelingBannerConfig = {
  background: {
    src: "/images/remodeling/remodeling_cover.jpg",
    alt: "Remodeling cover image",
  },
  content: {
    title:"Ready to Start Your Remodeling Project?",
    description:"Let Bathora help you design and build a space you'll love for years to come",
    button: {
      label: "Request Free Estimate",
      href: "/contact",
      icon: <ArrowUpRight size={14} />,
    },
  },
};