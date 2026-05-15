"use client"
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react';
import { slideUp } from '../../lib/animation';

interface CoverImageTextProps{
    title?:string;
    breadcrumbelement:ReactElement;
}
const CoverText = ({title,breadcrumbelement}:CoverImageTextProps) => {


  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center z-10">

      {/* Breadcrumb */}
      {breadcrumbelement &&  (
         <motion.div
        variants={slideUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 text-lg font-semibold capitalize text-muted"
      >
        {breadcrumbelement}
      </motion.div>
      )}
     

      {/* Title */}
      {title &&  <motion.h2
      variants={slideUp}
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

export default CoverText
