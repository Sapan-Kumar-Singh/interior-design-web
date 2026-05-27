import { BookOpenText, LucideIcon, Target, Telescope } from "lucide-react";

export interface StoryHighlightCard {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export interface StorySectionTitle {
  badge: string;
  heading: string;
  description: string;
}

export interface MissionConfig {
  sectionTitle: StorySectionTitle;
  highlightCards: StoryHighlightCard[];
}



export const missionConfig: MissionConfig = {
  sectionTitle: {
    badge: "Our Story, Mission & Vision",

    heading: "Creating Spaces That Reflect Modern Living",

    description:
      "At Apex Interiors and Engineering, we combine creative interior design with technical expertise to build spaces that are elegant, practical, and thoughtfully engineered.",
  },

  highlightCards: [
    {
      icon: <BookOpenText size={40} />,
      title: "Our Journey",
      content:"We don’t just design spaces, we build experiences that last.",
    },

    {
      icon: <Target size={40} />,
      title: "Our Mission",
      content:"Not Just Built for Today — Crafted for Generations.",
    },

    {
      icon: <Telescope size={40} />,
      title: "Our Vision",
      content:"Engineering Elegance Into Every Corner.",
    },
  ],
};

