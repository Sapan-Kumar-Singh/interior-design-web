"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { slideLeft } from "../../lib/animation";



type Service = {
  image: string;
  title: string;
  description: string;
};

// ─── Overlay Card ───────────────────────────────────────────
const OverlayCard = ({
  service,
}: {
  service: Service;
}) => { 
  // ✅ useInView watches the wrapper div — not blocked by overflow-hidden or parent clipping
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
 
  return (
    <div ref={ref} className="overflow-hidden rounded-lg">
  <motion.div
    variants={slideLeft}
    animate={isInView ? "show" : "hidden"}
    initial="hidden"
    transition={{ delay: 0.8 }}
    className="relative w-full cursor-pointer min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]"
  >
    <div className="absolute inset-0">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
        priority
      />
    </div>

    <div className="absolute inset-0 bg-obsidian/20" />

    {/* Gradient for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent" />

    <div className="relative z-10 flex flex-col justify-end h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] p-4 sm:p-5">
      <h2 className="text-cream text-2xl sm:text-3xl font-semibold leading-tight">
        {service.title}
      </h2>
      <p className="text-cream font-medium text-xs sm:text-sm leading-relaxed mt-2 mb-4 max-w-sm">
        {service.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-cream hover:text-gold text-sm font-medium underline underline-offset-4"
      >
        View Details <ArrowUpRight size={14} />
      </a>
    </div>
  </motion.div>
</div>
  );
};
 
 

export default OverlayCard;