"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandName } from "@/config/navbarConfig";

import { slideUp, staggerContainer } from "@/lib/animation";

interface BrandNameProps {
  showLogo?: boolean;
}

const BrandName = ({
  showLogo = true,
}: BrandNameProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex items-center gap-3"
    >
      {/* OPTIONAL LOGO */}
      {showLogo && (
        <motion.div
          variants={slideUp}
          className="relative w-11 h-11 shrink-0"
        >
          <Image
            src="/images/website_logo_removebg.png"
            fill
            alt="Apex Interiors & Engineering Logo"
            className="object-contain"
            priority
          />
        </motion.div>
      )}

      {/* BRAND TEXT */}
      <div className="flex flex-col leading-none">
        {/* MAIN BRAND */}
        <motion.span
          variants={slideUp}
          className="
            text-cream
            text-lg
            lg:text-xl
            font-semibold
            tracking-[0.18em]
            uppercase
          "
        >
          {brandName.main}
        </motion.span>

        {/* SUB BRAND */}
        <motion.span
          variants={slideUp}
          className="
            mt-1
            text-[10px]
            lg:text-xs
            tracking-[0.35em]
            uppercase
            text-cream/60
            font-light
          "
        >
          {brandName.sub}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default BrandName;