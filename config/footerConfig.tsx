
import { ReactNode } from "react";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/customIcons";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface SocialIconItem {
  key: string;
  icon: ReactNode;
  href: string;
}

export interface ContactInfoItem {
  icon: ReactNode;
  label: string;
}

export interface FooterContent {
  newsletterTitle: string;
  newsletterDescription: string;
  brandDescription: string;
  companyTitle: string;
  servicesTitle: string;
  contactTitle: string;
  copyright: string;
  privacyText: string;
  termsText: string;
  subscribeButtonText: string;
}

export interface FooterConfig {
  content: FooterContent;
  quickLinks: FooterLink[];
  services: FooterLink[];
  socialIcons: SocialIconItem[];
  contactInfo: ContactInfoItem[];
}


export const footerConfig: FooterConfig = {
  content: {
    newsletterTitle: "Build Your Dream Interior With Apex",

    newsletterDescription:
      "Get the latest interior design ideas, renovation insights, and exclusive updates from our kitchen and bathroom remodeling experts.",


    brandDescription:
      "Apex specializes in premium kitchen and bathroom renovations, delivering modern, elegant, and functional spaces tailored to your lifestyle. We focus on quality craftsmanship, innovative design, and customer satisfaction.",

    companyTitle: "Company",

    servicesTitle: "Services",

    contactTitle: "Get In Touch",

    subscribeButtonText: "Subscribe",

    copyright: `© ${new Date().getFullYear()} Apex. All rights reserved.`,

    privacyText: "Privacy Policy",

    termsText: "Terms & Conditions",
  },

  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],

  services: [
    { label: "Kitchen Remodeling", href: "/services/kitchen" },
    { label: "Bathroom Renovation", href: "/services/bathroom" },
    { label: "Custom Cabinetry", href: "/services/cabinetry" },
    { label: "Tile & Flooring", href: "/services/flooring" },
    { label: "Lighting & Fixtures", href: "/services/lighting" },
  ],

  socialIcons: [
    {
      key: "facebook",
      icon: <FacebookIcon />,
      href: "#",
    },
    {
      key: "twitter",
      icon: <TwitterIcon />,
      href: "#",
    },
    {
      key: "youtube",
      icon: <YoutubeIcon />,
      href: "#",
    },
    {
      key: "instagram",
      icon: <InstagramIcon />,
      href: "#",
    },
  ],

  contactInfo: [
    {
      icon: <MapPin size={14} className="text-primary" />,
      label: "123 Modern Lane, Design City, USA",
    },
    {
      icon: <Phone size={14} className="text-primary" />,
      label: "+91-333344455",
    },
    {
      icon: <Mail size={14} className="text-primary" />,
      label: "info@apex.com",
    },
    {
      icon: <Clock size={14} className="text-primary" />,
      label: "Mon – Fri: 9 AM – 6 PM",
    },
  ],
};
