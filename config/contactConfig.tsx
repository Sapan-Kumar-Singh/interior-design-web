// ========================================
// types
// =================================
import { InputFormConfig } from "@/types/form";
import { PageHeroConfig } from "@/types/pageHero";
import { ReactNode } from "react";

import {
  AlarmClock,
  Mail,
  MapPin,
  PhoneCall,
  House
} from "lucide-react";


export interface ContactOption {
  icon: ReactNode;
  label: string;
  value: string;
}

export interface ContactHeroConfig {
  badge: string;
  title: string;
  description: string;
}

export interface ContactImageConfig {
  src: string;
  alt: string;
}

export interface ContactMapConfig {
  mapUrl: string;
}

export interface ContactConfig {
  hero: ContactHeroConfig;

  contactOptions: ContactOption[];

  contactImage: ContactImageConfig;

  formConfig: InputFormConfig;

  map: ContactMapConfig;
}





// ========================================
// config
// ========================================


export const pageHeroConfig:PageHeroConfig = {
    imgSrc:'/images/contact/contact_cover_bg.jpg',
    title: 'Contact',
    breadcrumb: <>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Contact</span>
        </>
}

export const contactConfig: ContactConfig = {
  hero: {
    badge: "Contact Us",

    title: "Let’s Start Your Dream Project",

    description:
      "Get in touch with Apex to discuss your kitchen or bathroom remodeling needs. We’re here to help you every step of the way.",
  },

  contactOptions: [
    {
      icon: <PhoneCall size={18} />,
      label: "Call Now",
      value: "+91 9667675127",
    },

    {
      icon: <Mail size={18} />,
      label: "Email Us",
      value: "info@apex.com",
    },

    {
      icon: <MapPin size={18} />,
      label: "Office Location",
      value: "MCC Signature Heights, Raj Nagar Extension, Ghaziabad",
    },

    {
      icon: <AlarmClock size={18} />,
      label: "Working Hours",
      value: "Mon – Fri: 9 AM – 6 PM",
    },
  ],

  contactImage: {
    src: "/images/contact/contact_form_card.jpg",

    alt: "Contact form image",
  },

  formConfig: {
    title: "Send Us a Message",

    description:
      "Fill out the form below and our team will get back to you as soon as possible.",

    inputFields: [
      {
        field: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Your Name",
      },

      {
        field: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Your Email Address",
        flex: 0.5,
      },

      {
        field: "phoneNumber",
        label: "Phone Number",
        type: "text",
        required: true,
        placeholder: "Your Phone Number",
        flex: 0.5,
      },

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
        label: "Message",
        type: "textarea",
        rows: 5,
        required: true,
        placeholder: "Tell us about your project...",
      },
    ],

    submitButtonText: "Send Message",
  },

 map: {
  mapUrl:
    "https://maps.google.com/maps?width=675&height=400&hl=en&q=MCC Signature Heights, Raj Nagar Extension, Ghaziabad&t=&z=14&ie=UTF8&iwloc=B&output=embed",
},
};