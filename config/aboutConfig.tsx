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

  description:
  "At Apex Interiors and Engineering, we create modern interior and architectural spaces that combine aesthetics, functionality, and structural excellence. Founded by experienced civil engineers, we specialize in interior design, architectural planning, structural design, drafting, and project execution tailored to residential and commercial needs. Our approach focuses on delivering elegant, practical, and durable environments through thoughtful planning, premium craftsmanship, and attention to detail. We are committed to transforming ideas into refined spaces that reflect modern lifestyles while maintaining the highest standards of quality, professionalism, and engineering precision.",
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
    icon: <Layers size={20} />,
    title: "Customized Interior & Engineering Solutions",
    content:
      "We design intelligent and functional spaces tailored to your lifestyle, combining creativity, comfort, and structural precision in every project.",
  },

  {
    icon: <Wrench size={20} />,
    title: "Premium Materials & Modern Finishes",
    content:
      "We use high-quality materials and refined finishes to deliver durable, elegant, and visually modern interior and engineering solutions.",
  },

  {
    icon: <NotebookText size={20} />,
    title: "Transparent Planning & Reliable Execution",
    content:
      "Our process focuses on clear communication, honest project planning, and timely execution to ensure a smooth client experience.",
  },
],
};