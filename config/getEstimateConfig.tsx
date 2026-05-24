import { ArrowUpRight } from "lucide-react";

export interface EstimateSectionButton {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface EstimateSectionBackground {
  src: string;
  alt: string;
}

export interface EstimateSectionConfig {
  title: string;

  description: string;

  background: EstimateSectionBackground;

  button: EstimateSectionButton;
}



export const estimateSectionConfig: EstimateSectionConfig = {
  title: "Turn Your Vision Into a Space You’ll Love Every Day",

  description:
    "Let Apex bring your vision to life with expert design, premium materials, and flawless execution.",

  background: {
    src: "/images/estimation/estimate_cover_bg.jpg",
    alt: "Estimate cover background",
  },

  button: {
    label: "Request Free Estimate",
    href: "/contact",
    icon: <ArrowUpRight size={14} />,
  },
};