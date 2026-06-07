"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { slideLeft } from "../lib/animation";
import Link from "next/link";
import { ServiceItem } from "@/config/serviceConfig";


// ─── Overlay Card ───────────────────────────────────────────
const OverlayCard = ({slug,title,description,image}:ServiceItem) => { 
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
 
  return (
    <div ref={ref} className="overflow-hidden rounded-lg">
  <motion.div
    variants={slideLeft}
    animate={isInView ? "show" : "hidden"}
    initial="hidden"
    transition={{ delay: 0.8 }}
    className="relative w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]"
  >
    <div className="absolute inset-0">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
         sizes="
               (max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw
             "
      />
    </div>

    <div className="absolute inset-0 bg-obsidian/20" />

    {/* Gradient for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent" />

    <div className="relative z-10 flex flex-col justify-end h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] p-4 sm:p-5">
      <h2 className="text-cream text-2xl sm:text-3xl font-semibold leading-tight">
        {title}
      </h2>
      <p className="text-cream font-medium text-xs sm:text-sm leading-relaxed mt-2 mb-4 max-w-sm">
        {description}
      </p>

          <Link href={`/services/${slug}`}
            className="inline-flex items-center gap-1.5 text-cream hover:text-gold text-sm font-medium underline underline-offset-4"
          >
            View Details <ArrowUpRight size={14} />
          </Link>
    </div>
  </motion.div>
</div>
  );
};
 
 

export default OverlayCard;