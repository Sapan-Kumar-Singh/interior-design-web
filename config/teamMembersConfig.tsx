import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export type TeamMemberAnimationDirection ="left" | "right" | "bottom";

export interface TeamMemberSocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  animationDirection: TeamMemberAnimationDirection;
  social: TeamMemberSocialLinks;
}

export interface TeamSectionContent {
  badge: string;
  title: string;
  description: string;
  button: {
    label: string;
    href?: string;
    icon?: ReactNode;
  };
}

export interface TeamSectionConfig {
  content: TeamSectionContent;

  members: TeamMember[];
}

export const teamSectionConfig: TeamSectionConfig = {
  content: {
    badge: "Our Team",

    title: "The People Who Bring Your Vision to Life",

    description:
      "Behind every successful project is a dedicated team committed to quality craftsmanship and thoughtful design.",

    button: {
      label: "Meet our team",
      href: "/team",
      icon: <ArrowUpRight size={14} />,
    },
  },

  members: [
    {
      id: 1,
      name: "Alder Carter",
      role: "Lead Interior Designer",
      image: "/images/team/member-1.jpg",
      animationDirection: "left",
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
     {
      id: 2,
      name: "Sophia Miller",
      role: "Project Manager",
      image: "/images/team/member-2.jpg",
      animationDirection:"bottom",
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Michael Anderson",
      role: "Kitchen Remodeling Expert",
      image: "/images/team/member-3.jpg",
      animationDirection:"right",
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Emily Roberts",
      role: "Bathroom Design Specialist",
      image: "/images/team/member-4.jpg",
      animationDirection:"right",
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
  ],
};