import { PageHeroConfig } from "@/types/pageHero";
import {
  Layers,
  NotebookText,
  Wrench,
  House,
} from "lucide-react";
import React from "react";

export interface AboutFeature {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export interface AboutStat {
  end: number;
  suffix?: string;
  label: string;
}

export interface AboutButton {
  label: string;
  href?: string;
}

export interface AboutVideo {
  src: string;
  posterSrc?: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutTitle {
  first: string;
  highlight?: string;
  second?: string;
}

export interface AboutUsConfig {
  badge: string;
  title: AboutTitle;
  description: string;
  video: AboutVideo;
  stats: AboutStat[];
  button: AboutButton;
  image: AboutImage;
  features: AboutFeature[];
}

export const pageHeroConfig:PageHeroConfig = {
    imgSrc:"/images/about/page_hero_bg.jpg",
    title: 'About us',
    breadcrumb: <>
          <House size={20} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>About</span>
        </>
}




export const aboutUsConfig:AboutUsConfig = {
  badge: "About Us",
  title: {
    first: "Building ",
    highlight: "Inspired Spaces",
    second: "For Modern Lifestyles",
  },

  description:"At Apex Interiors and Engineering, we specialize in creating modern spaces that combine innovative interior design with strong engineering and architectural planning. Founded by a team of passionate civil engineers, our company is dedicated to delivering creative, functional, and structurally efficient solutions tailored to the unique needs of every client. From interior designing, space planning, and architectural concepts to structural design, drafting, and project execution, we bring creativity, technical expertise, and attention to detail into every project we undertake. We believe that great spaces are not only visually impressive but also practical, comfortable, durable, and thoughtfully engineered for everyday living and working. Our goal is to transform ideas into elegant and well-planned environments that reflect modern lifestyles while maintaining the highest standards of quality, precision, and professionalism.",

  video: {
    src: "/videos/about-content.mp4",
    posterSrc: "/images/thumbnail.jpg",
  },

  stats: [
    {
      end: 15,
      suffix: "+",
      label: "Years of Experience",
    },
  ],

  button: {
    label: "Discover our story",
    href: "/about",
  },

  image: {
    src: "/images/about/about_us_kitchen.jpg",
    alt: "Kitchen",
  },

  features: [
    {
      icon: <Layers size={20}/>,
      title: "Customized Interior & Engineering Solutions",
      content:"We craft intelligent interior spaces and engineering designs tailored to your lifestyle, vision, and functional needs — blending creativity, comfort, and structural precision in every project.",
    },
    {
      icon: <Wrench size={20}/>,
      title: "Premium Quality Materials & Modern Finishes",
      content:"From elegant interiors to durable engineering execution",
    },
    {
      icon: <NotebookText size={20}/>,
      title: "Transparent Planning & Reliable Execution",
      content:"We believe in clear communication, honest pricing, and timely project delivery",
    },
  ],
};