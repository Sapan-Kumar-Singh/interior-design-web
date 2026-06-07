"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { slidesImages } from "@/config/dynamicBgConfig";

interface DynamicBackgroundProps {
  children: ReactNode;
}

export default function DynamicBackground({
  children,
}: DynamicBackgroundProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slidesImages?.length) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesImages.length);
    }, 4500);

    return () => clearInterval(id);
  }, [slidesImages]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={{
              opacity: 1,
              scale: 1.5,
            }}
            exit={{
              opacity: 0,
              scale: 1.5, // keep same scale on exit
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 6,
                ease: "linear",
              },
            }}
          >
            <Image
              src={slidesImages[index].src}
              alt={slidesImages[index]?.alt ?? "Background image"}
              fill
              priority
              sizes="
               (max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw
             "
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-obsidian/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        {children}
      </div>
    </section>
  );
}