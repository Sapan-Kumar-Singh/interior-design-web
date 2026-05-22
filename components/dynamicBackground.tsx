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
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={slidesImages[index].src}
              alt={slidesImages[index]?.alt ?? "Background image"}
              fill
              priority
              sizes="100vw"
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