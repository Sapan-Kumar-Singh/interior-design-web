
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
  newsletterDescription?: string;
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
    newsletterTitle: "Build Your Dream Interior With Apex Interiors & Engineering",

    brandDescription:
      "Apex Interiors & Engineering Creating inspiring spaces through thoughtful design, quality craftsmanship, and attention to detail.",

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
    { label: "Interior Design & Planning", href: "/services/interior-design-planning" },
    { label: "Turnkey Interior Solutions", href: "/services/turnkey-interior-solutions" },
    { label: "Engineering & Technical Services", href: "/services/engineering-technical-services" },
    { label: "Renovation & Remodeling", href: "/services/renovation-remodeling" },
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
      label: "MCC Signature Heights, Raj Nagar Extension, Ghaziabad",
    },
    {
      icon: <Phone size={14} className="text-primary" />,
      label: "+91-9667675127",
    },
    {
      icon: <Mail size={14} className="text-primary" />,
      label: "info.apexied@gmail.com",
    },
    {
      icon: <Clock size={14} className="text-primary" />,
      label: "Mon – Fri: 9 AM – 6 PM",
    },
  ],
};
