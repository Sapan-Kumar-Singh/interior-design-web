"use client"

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { container, item } from './animationConfig/home';
import { Card } from './ui/card';

interface Stats {
  end: number;
  suffix?: string;
  label?: string;
}
interface StatsProps {
  stats: Stats[];
  className?: string;
}

// ── Animated counter ────────────────────────────────────────────
function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}


const Stats = ({ stats, className }: StatsProps) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);
  const gridColsMap: Record<number, string> = {
    1: "grid-cols-1",

    2: "grid-cols-1 sm:grid-cols-2",

    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",

    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",

    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",

    6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  const gridCols = gridColsMap[stats.length] ?? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";


  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={statsRef}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={`grid gap-6 sm:gap-8 ${gridCols}`}
      >
        {stats.map(({ end, suffix, label }, index) => (
          <motion.div key={label} variants={item}>
            <div
              className={`flex flex-col items-center justify-center text-center  py-4 ${className ?? ""}`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gold leading-none">
                {startCount ? <Counter end={end} /> : 0}
                {suffix}
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-semibold tracking-wide text-obsidian">
                {label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats
