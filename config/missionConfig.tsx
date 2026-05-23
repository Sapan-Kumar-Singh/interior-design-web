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

    heading: "Our Journey and What Drives Us Forward",

    description:
      "Bathora was founded with a passion for transforming everyday spaces into beautifully designed, functional environments.",
  },

  highlightCards: [
    {
      icon: <BookOpenText size={40} />,

      title: "Our Journey",

      content:
        "We tailor every project to your lifestyle, preferences, and budget with precision.",
    },

    {
      icon: <Target size={40} />,

      title: "Our Mission",

      content:
        "Only the finest materials make it into your home — beauty that lasts decades.",
    },

    {
      icon: <Telescope size={40} />,

      title: "Our Vision",

      content:
        "No surprises. Clear quotes, honest timelines, and full accountability.",
    },
  ],
};

