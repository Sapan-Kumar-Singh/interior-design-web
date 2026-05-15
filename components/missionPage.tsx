"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpenText,
  Target,
  Telescope,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import GetEstimateSection from "./getEstimateSection";

import {
  staggerContainer,
  slideUp,
  staggerSlideUpItem
} from "../lib/animation";

const missionCards = [
  {
    icon: <BookOpenText size={40} />,
    title: "Our Journey",
    content:
      "We tailor every project to your lifestyle, preferences, and budget with precision.",
  },

  {
    icon: <Target size={40} />,
    title: "Our Mission",
    content:
      "Only the finest materials make it into your home — beauty that lasts decades.",
  },

  {
    icon: <Telescope size={40} />,
    title: "Our Vision",
    content:
      "No surprises. Clear quotes, honest timelines, and full accountability.",
  },
];

const staggerContainerSmooth = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
} as const;

const MissionPage = () => {
  return (
    <main className="bg-cream-dark">

      {/* TOP CONTENT */}
      <section className="max-w-5xl py-8 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-0">

        {/* TEXT CONTENT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex flex-col items-center text-center
            gap-3 sm:gap-4 md:gap-5
            will-change-transform
          "
        >

          <motion.h1
            variants={slideUp}
            className="
              text-gold text-xs sm:text-sm md:text-base
              font-semibold uppercase tracking-wide
            "
          >
            Our Story, Mission & Vision
          </motion.h1>

          <motion.h2
            variants={slideUp}
            className="
              text-xl sm:text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl
              font-semibold leading-tight
              tracking-[-0.02em]
              max-w-3xl
            "
          >
            Our Journey and What Drives Us Forward
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="
              text-sm md:text-base text-gray-600
              leading-relaxed
              max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
            "
          >
            Bathora was founded with a passion for transforming everyday spaces
            into beautifully designed, functional environments.
          </motion.p>

        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={staggerContainerSmooth}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-4 sm:gap-5 lg:gap-6
            mt-8
            will-change-transform
          "
        >

          {missionCards.map((f, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                variants={staggerSlideUpItem(i)}
                className={`flex ${!isEven ? "lg:mt-10" : ""}`}
              >

                <Card
                  className={`
                    rounded-lg text-cream shadow-sm
                    w-full border-0
                    transition-all duration-300
                    m-auto
                    ${isEven ? "bg-obsidian" : "bg-gold-dark"}
                  `}
                >

                  <CardHeader>

                    <div
                      className={`
                        flex items-center justify-center
                        w-12 h-12 mx-auto
                        ${isEven ? "text-gold" : "text-white"}
                      `}
                    >
                      {f.icon}
                    </div>

                    <CardTitle className="text-center pb-2">
                      {f.title}
                    </CardTitle>

                  </CardHeader>

                  <CardContent className="pt-1">

                    <CardDescription className="text-cream text-center leading-6">
                      {f.content}
                    </CardDescription>

                  </CardContent>

                </Card>

              </motion.div>
            );
          })}

        </motion.div>

      </section>

      {/* BANNER SECTION */}
      <GetEstimateSection />

    </main>
  );
};

export default MissionPage;