// app/loading.tsx

"use client"

import { brandName } from "@/config/navbarConfig"
import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian">
      
      {/* Animated Logo / Brand */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl text-cream  font-semibold tracking-[0.3em] uppercase"
      >
       {brandName.main}
      </motion.h1>
       <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" mt-1
            text-[10px]
            lg:text-xs
            tracking-[0.35em]
            uppercase
            text-cream/60
            font-light"
      >
       {brandName.sub}
      </motion.h2>
      {/* Loader Line */}
      <div className="mt-10 h-[1px] w-48 overflow-hidden bg-white/20">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="h-full w-1/2 bg-amber-400"
        />
      </div>

      {/* Loading Text */}
      <div className="mt-6 flex items-center text-sm tracking-[0.4em] text-white/60">
      <span>Loading</span>

      <div className="ml-1 flex">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: dot * 0.4,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            .
          </motion.span>
        ))}
      </div>
    </div>
    </div>
  )
}

