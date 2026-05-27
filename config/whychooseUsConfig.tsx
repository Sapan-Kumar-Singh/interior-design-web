
import {
  Layers,
  Lightbulb,
  ReceiptText,
  SquareDashedKanban,
  Users,
} from "lucide-react";

export interface WhyChooseUsStat {
  end: number;
  suffix?: string;
  label: string;
}

export interface WhyChooseUsBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface WhyChooseUsImage {
  src: string;
  alt: string;
}

export interface WhyChooseUsContent {
  badge: string;
  title: string;
  description: string;
}

export interface WhyChooseUsConfig {
  content: WhyChooseUsContent;

  stats: WhyChooseUsStat[];

  leftImage: WhyChooseUsImage;

  coverImage: WhyChooseUsImage;

  benefits: WhyChooseUsBenefit[];
}


export const whyChooseUsConfig: WhyChooseUsConfig = {
  content: {
    badge: "Why Choose Apex Interiors & Engineering",
    title:"Delivering Modern Interior and Engineering Solutions with Quality, Precision, and Professional Expertise",
    description:"With years of industry experience, our skilled engineers and designers deliver premium interior and engineering solutions tailored to your needs. We focus on quality craftsmanship, budget-friendly execution, and on-time project delivery to create spaces that are both functional and visually refined.",
  },
  stats: [
    {
      end: 700,
      suffix: "+",
      label: "Dream Spaces Created",
    },
    {
      end: 30,
      suffix: "%",
      label: "Design Specialists",
    },
    {
      end: 96,
      suffix: "%",
      label: "Repeat Clients",
    },
  ],
  leftImage: {
    src: "/images/whyChooseUs/choose_us_kitchen.jpg",
    alt: "latest kitchen model",
  },
  coverImage: {
    src: "/images/whyChooseUs/card_cover_bg.jpg",
    alt: "Why choose us cover background",
  },
  benefits: [
    {
      icon: <Layers size={14}/>,
      title: "Premium Quality Materials",
      description:"Carefully selected premium materials built for durability and timeless aesthetics.",
    },
    {
      icon:  <Users size={14}/>,
      title: "Experienced Professionals",
      description:"A skilled team dedicated to delivering exceptional craftsmanship and service.",
    },
    {
      icon:  <Lightbulb size={14}/>,
      title: "Customized Design Solutions",
      description:"Tailored remodeling concepts designed around your lifestyle and preferences.",
    },
    {
      icon:  <ReceiptText size={14}/>,
      title: "Transparent Pricing",
      description:"Clear quotations and honest pricing with no hidden surprises.",
    },
    {
      icon:  <SquareDashedKanban size={14}/>,
      title: "On-Time Project Delivery",
      description:"Efficient project management that keeps your renovation on schedule.",
    },
  ],
};