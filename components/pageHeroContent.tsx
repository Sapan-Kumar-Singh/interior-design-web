"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { slideUp, staggerContainer } from "../lib/animation";

interface PageHeroContentProps {
  title?: string;
  breadcrumb?: ReactNode;
}

const PageHeroContent = ({
  title,
  breadcrumb,
}: PageHeroContentProps) => {
  return (
    <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="
    absolute inset-0 z-10
    flex flex-col items-center justify-center
    text-center text-cream
    px-6
  "
>
  {/* Breadcrumb */}
  {breadcrumb && (
    <motion.div
      variants={slideUp}
      className="
        flex flex-wrap items-center justify-center gap-2
        text-sm md:text-base
        font-semibold
        capitalize
        text-cream
      "
    >
      {breadcrumb}
    </motion.div>
  )}

  {/* Title */}
  {title && (
    <motion.h1
      variants={slideUp}
      className="
        mt-3
        text-2xl md:text-4xl lg:text-5xl
        font-bold
        leading-tight
      "
    >
      {title}
    </motion.h1>
  )}
</motion.div>
  );
};

export default PageHeroContent;