export interface ProcessStep {
  srNo: string;
  title: string;
  description: string;
}

export interface ProcessSectionBackground {
  src: string;
  alt: string;
}

export interface ProcessSectionContent {
  badge: string;
  title: string;
  description: string;
}

export interface ProcessSectionConfig {
  content: ProcessSectionContent;
  background: ProcessSectionBackground;
  steps: ProcessStep[];
}



export const processSectionConfig: ProcessSectionConfig = {
  content: {
    badge: "Our Process",
    title:"A Simple Process Designed for Perfect Results",
    description:"From the first consultation to the final reveal, we make your remodeling journey smooth, transparent, and stress-free",
  },

  background: {
    src: "/images/serviceProcess/service_process_cover_bg.jpg",
    alt: "Service process cover image",
  },

  steps: [
    {
      srNo: "01",
      title: "Consultation",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar",
    },
    {
      srNo: "02",
      title: "Design & Planning",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar",
    },
    {
      srNo: "03",
      title: "Construction",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar",
    },
    {
      srNo: "04",
      title: "Final Delivery",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar",
    },
  ],
};