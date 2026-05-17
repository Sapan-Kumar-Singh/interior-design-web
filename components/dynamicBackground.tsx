"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface DynamicBackgroundProps{
    children:ReactNode
}
export default function DynamicBackground({children}:DynamicBackgroundProps) {
  const [index, setIndex] = useState(0);

  // ── Slide data ──────────────────────────────────────────────────
const slides = [
  { src: "/images/home/bg-home-1.jpg", label: "Living Spaces" },
  { src: "/images/home/bg-home-2.jpg", label: "Dining Rooms" },
  { src: "/images/home/bg-home-3.jpg", label: "Bedroom Suites" },
  { src: "/images/home/bg-home-4.jpg", label: "Open Kitchens" },
];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src={slides[index].src}
              alt="dynamic background image"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-obsidian/20" />
      </div>

      {/* Content */}
      {children}
    </section>
  );
}