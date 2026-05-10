"use client"
import { motion } from 'framer-motion'
import React, { ReactElement, ReactNode } from 'react';

interface CoverImageTextProps{
    title?:string;
    breadcrumbelement:ReactElement;
}
const CoverImageText = ({title,breadcrumbelement}:CoverImageTextProps) => {

 const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
} as const;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center z-10">

      {/* Breadcrumb */}
      {breadcrumbelement &&  (
         <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 text-lg font-semibold capitalize text-muted"
      >
        {breadcrumbelement}
      </motion.div>
      )}
     

      {/* Title */}
      {title &&  <motion.h2
       initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,   // 👈 delay added here
          duration: 0.8,
          ease: "easeOut"
        }}
        className="text-4xl md:text-5xl font-bold mt-2"
      >
        {title}
      </motion.h2>}
     

    </div>
  )
}

export default CoverImageText
