"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

import {
  slideUp,
  staggerContainerSlow,
} from "../lib/animation";

import { estimateSectionConfig } from "@/config/getEstimateConfig";
import { useRouter } from "next/navigation";

const GetEstimateSection = () => {
  const router=useRouter();
  return (
    <section
      className="
        relative
        w-full
        min-h-[220px]
        sm:min-h-[280px]
        md:min-h-[340px]
        lg:min-h-[400px]
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <Image
        src={estimateSectionConfig.background.src}
        alt={estimateSectionConfig.background.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-obsidian/60" />

      {/* CONTENT */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          relative z-10
          flex h-full items-center justify-center
          px-4 sm:px-6 md:px-10 lg:px-16
          py-10 sm:py-12 md:py-16
          text-center
        "
      >
        <div className="w-full max-w-3xl mx-auto">

          {/* TITLE */}
          <motion.h1
            variants={slideUp}
            className="
              text-cream
              font-semibold
              leading-tight
              text-2xl
              sm:text-3xl
              md:text-5xl
            "
          >
            {estimateSectionConfig.title}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={slideUp}
            className="
              mt-4
              text-cream
              text-sm sm:text-base md:text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            {estimateSectionConfig.description}
          </motion.p>

          {/* BUTTON */}
          <motion.div
            variants={slideUp}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <Button onClick={()=>router.push('/contact')}>
              {estimateSectionConfig.button.label}

              {estimateSectionConfig.button.icon}
            </Button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default GetEstimateSection;