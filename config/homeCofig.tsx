import { Star } from "lucide-react";
import { InputFormConfig } from "@/types/form";

interface StatsDetails {
  end: number;
  suffix: string;
  label?: string;
}

interface HeroContent {
  badge: string;
  title: {
    first: string;
    highlight: string;
    second: string;
  };
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };

}

export const statsDetails: StatsDetails[] = [
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
  { end: 100, suffix: "%", label: "Quality Craftsmanship" },
];

export const heroContent: HeroContent = {
  badge: "Award-Winning Interior Design",

  title: {
    first: "Transform Your Space",
    highlight: "Into",
    second: "Timeless Luxury",
  },

  description:
    "We craft beautifully designed interiors that blend style, comfort, and functionality — tailored to how you live and dream.",

  primaryButton: {
    label: "Get Free Estimate",
    href: "#",
  },
  secondaryButton: {

    label: "View Our Projects",
    href: "/projects",
  },
};


export const formConfig: InputFormConfig = {
  title: "Get A Free Quote",

  description:
    "Start your design journey with a personalized consultation tailored to your vision.",

  inputFields: [
    {
      field: "name",
      type: "text",
      placeholder: "Your Name",
      required: true,
    },
    {
      field: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      flex: 1,
    },
    {
      field: "phone",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
      flex: 1,
    },
    // Parent Select
    {
      field: "serviceType",
      type: "select",
      placeholder: "Select Service Type",
      required: true,
      flex:0.5,
      options: [
        {
          label: "Interior Design",
          value: "interior-design",
        },

        {
          label: "Engineering / Structural",
          value: "engineering-structural",
        },
      ],
    },
    {
      field: "serviceName",
      type: "select",
      placeholder: "Select Service",
      required: true,
      dependsOn: "serviceType",
      flex:0.5,
      dependentOptions: {
        "interior-design": [
          {
            label: "Residential",
            value: "residential",
          },

          {
            label: "Modulor kitchen",
            value: "modulor-kitchen",
          },

          {
            label: "Bedroom interior",
            value: "bedroom-interior",
          },

          {
            label: "Office interior",
            value: "office-interior",
          },
           {
            label: "Wordrobe design",
            value: "wardrobe-design",
          },
          {
            label: "False celling design",
            value: "false-celling-design",
          },
            {
            label: "Restourent / Cafe interior",
            value: "restourent/cafe-inetrior",
          },
        ],

        "engineering-structural": [
          {
            label: "Structural design",
            value: "structural-design",
          },

          {
            label: "Building planning",
            value: "building-planning",
          },

          {
            label: "Foundation design",
            value: "foundation-design",
          },

          {
            label: "BOQ & Estimation",
            value: "BOQ-estimation",
          }, {
            label: "Site supervision",
            value: "site-supervision",
          }, {
            label: "Construction consulting",
            value: "construction-consulting",
          },
        ],
      },
    },

    {
      field: "message",
      type: "textarea",
      placeholder: "Tell us about your project...",
      rows: 4,
    },
  ],

  submitButtonText: "Request Free Estimate",

  footer: (
    <p className="text-xs text-body  flex items-center gap-2 mt-2">
      <Star className="w-3.5 h-3.5 fill-gold stroke-gold shrink-0" />
      Rated 5 Stars by Homeowners
    </p>
  ),
};