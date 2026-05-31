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
      title: "Concept & Consultation",
      description:"We start with a detailed discussion to understand your vision, requirements, and budget constraints.",
    },
    {
      srNo: "02",
      title: "Design & Space Planning",
      description:"Our team creates 2D/3D layouts, selects materials, and finalizes the blueprints for your approval.",
    },
    {
      srNo: "03",
      title: "Execution & Construction",
      description:"Skilled professionals bring the approved designs to life with high-quality materials and strict timely supervision.",
    },
    {
      srNo: "04",
      title: "Final Delivery",
      description:"we perform a rigorous quality inspection before successfully handing over your beautifully finished dream space.",
    },
  ],
};