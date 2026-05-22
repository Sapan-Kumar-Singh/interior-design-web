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
    first: "Modern Kitchen And Bathroom",
    highlight: "Renovations",
    second: "built for Living",
  },

  description:
    "Bathora is dedicated to transforming kitchens and bathrooms into elegant, functional spaces that elevate everyday living. With years of experience and a passion for design, we bring creativity, precision, and quality into every project we undertake. From concept to completion, our team works closely with homeowners to understand their vision.",

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
      title: "Customized Design Solutions",
      content:
        "We tailor every project to your lifestyle, preferences, and budget with precision.",
    },
    {
      icon: <Wrench size={20}/>,
      title: "Premium Materials & Finishes",
      content:
        "Only the finest materials make it into your home — beauty that lasts decades.",
    },
    {
      icon: <NotebookText size={20}/>,
      title: "Transparent Pricing & Planning",
      content:
        "No surprises. Clear quotes, honest timelines, and full accountability.",
    },
  ],
};