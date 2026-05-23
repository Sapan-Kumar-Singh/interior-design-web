"use client";

import { motion } from "framer-motion";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";


import {
  staggerContainer,
  slideUp,
  staggerSlideUpItem,
  staggerContainerSlow
} from "../lib/animation";
import { missionConfig } from "@/config/missionConfig";


const MissionPage = () => {

  return (
    <main className="bg-cream-dark">

      {/* TOP CONTENT */}
      <section className="max-w-5xl py-12 px-6 sm:px-10 lg:px-16 overflow-hidden">

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
           {missionConfig.sectionTitle.badge}
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
            {missionConfig.sectionTitle.heading}
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="
              text-sm md:text-base text-gray-600
              leading-relaxed
              max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
            "
          >
           {missionConfig.sectionTitle.description}
          </motion.p>

        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={staggerContainerSlow}
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

          {missionConfig.highlightCards.map((f, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                variants={staggerSlideUpItem(i)}
                className={`flex ${!isEven ? "lg:mt-16" : ""}`}
              >

                <Card
                  className={`
                    rounded-lg text-cream shadow-sm p-4
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
                        ${isEven ? "text-gold" : "text-cream"}
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
    </main>
  );
};

export default MissionPage;