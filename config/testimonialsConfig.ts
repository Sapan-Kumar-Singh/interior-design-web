// types/testimonials.ts
import { ReactNode } from "react";

export interface TestimonialReview {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
  imgSrc?: string;
}

export interface MasterReviewConfig {
  title: string;
  rating: {
    value: string;
    totalReviewsText: string;
    stars: number;
  };
  description: string;
}

export interface TestimonialsConfig {
  background: {
    src: string;
    alt: string;
  };

  badge: string;

  title: {
    firstLine: string;
    secondLine: string;
  };

  description: {
    firstLine: string;
    secondLine: string;
  };

  reviews: TestimonialReview[];

  masterReview: MasterReviewConfig;
}

export const testimonialsConfig: TestimonialsConfig = {
  background: {
    src: "/images/testimonial/testimonials_cover_bg.jpg",
    alt: "Testimonials background",
  },

  badge: "Testimonials",

  title: {
    firstLine: "What Our Clients Say",
    secondLine: "About Bathora",
  },

  description: {
    firstLine: "Real feedback from homeowners who",
    secondLine: "trusted us to transform their spaces",
  },

  masterReview: {
    title: "Excellent Based on Client Reviews",
    rating: {
      value: "4.9 out of 5",
      totalReviewsText: "Based on 120+ Google Reviews",
      stars: 5,
    },

    description:
      "Homeowners consistently choose Bathora for our quality craftsmanship, attention to detail, and reliable service.",
  },

  reviews: [
    {
      id: 1,
      name: "Sophia Carter",
      role: "Homeowner",
      review:
        "Bathora completely transformed our kitchen. The team was professional, creative, and detail-oriented from start to finish.",
      rating: 5,
    },

    {
      id: 2,
      name: "Michael Brown",
      role: "Property Owner",
      review:
        "The bathroom renovation exceeded our expectations. Beautiful craftsmanship and excellent communication throughout the project.",
      rating: 5
    },

    {
      id: 3,
      name: "Emily Johnson",
      role: "Interior Client",
      review:
        "From design consultation to final delivery, everything felt smooth and stress-free. Highly recommended.",
      rating: 5,
    },

    {
      id: 4,
      name: "Daniel Wilson",
      role: "Apartment Owner",
      review:
        "Their attention to detail and premium finishes made our remodeling project feel truly luxurious.",
      rating: 5,
    },
  ],
};
