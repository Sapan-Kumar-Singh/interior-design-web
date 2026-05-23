// types/transformationShowcase.ts

export interface TransformationSlide {
  beforeTransformationImgSrc: string;
  afterTransformationImgSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface TransformationShowcaseConfig {
  badge: string;
  title: string;
  description: string;
  transformations: TransformationSlide[];
}

export const transformationShowcaseConfig: TransformationShowcaseConfig = {
  badge: "Before & After",

  title: "Real transformations, real impact",

  description:
    "Watch outdated spaces turn into stunning modern interiors with our expert remodeling solutions.",

  transformations: [
    {
      beforeTransformationImgSrc:"/images/transformation/before_1.jpg",
      afterTransformationImgSrc:"/images/transformation/after_1.jpg",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  ],
};