"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenText,
  Target,
  Telescope,
} from "lucide-react";

import {
  missionItem,
  textContainer,
  textItem,
} from "./animationConfig/journeyAnimationConfig";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";

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

const MissionPage = () => {
  return (
    <main className="bg-cream-dark">

      {/* TOP CONTENT */}
      <section className="max-w-5xl py-8 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-0">

        {/* TEXT CONTENT */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-5"
        >
          <motion.h1
            variants={textItem}
            className="text-gold text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide"
          >
            Our Story, Mission & Vision
          </motion.h1>

          <motion.h2
            variants={textItem}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-[-0.02em] max-w-3xl"
          >
            Our Journey and What Drives Us Forward
          </motion.h2>

          <motion.p
            variants={textItem}
            className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl"
          >
            Bathora was founded with a passion for transforming everyday spaces
            into beautifully designed, functional environments.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-8"
        >
          {missionCards.map((f, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                variants={missionItem(i)}
                className={`flex ${!isEven ? "lg:mt-10" : ""}`}
              >
                <Card
                  className={`
                    rounded-lg text-cream shadow-sm w-full border-0
                    transition-all duration-300 m-auto 
                    ${isEven ? "bg-obsidian" : "bg-gold-dark"}
                  `}
                >
                  <CardHeader className="">
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
      <section
        className="
          relative
          w-full
          h-[260px]
          sm:h-[360px]
          md:h-[500px]
          lg:h-[650px]
          overflow-hidden
          mt-14
        "
      >
        <Image
          src="/images/mission/cover-bg.jpg"
          alt="Journey Background"
          fill
          priority
          
          className="object-cover min-h-[300px]"
        />

        <div className="absolute inset-0 bg-black/45" />

        {/* ANIMATED CONTENT */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 flex h-full items-center justify-center px-4 text-center"
        >
          <div className="max-w-3xl">

            <motion.h2
              variants={textItem}
              className="
                text-white
                font-semibold
                leading-tight
                text-2xl
                sm:text-3xl
                md:text-5xl
              "
            >
              Turn Your Vision Into a Space You’ll Love Every Day
            </motion.h2>

            <motion.p
              variants={textItem}
              className="
                mt-4
                text-cream
                text-sm
                sm:text-base
                md:text-lg
                max-w-2xl
                mx-auto
              "
            >
              Let Bathora bring your vision to life with expert design,
              premium materials, and flawless execution.
            </motion.p>

            <motion.div
              variants={textItem}
              className="mt-6 flex justify-center"
            >
              <Button
                className="
                  hover:bg-gold/80 text-cream
                  
                  text-[12px]
                  py-4 
                  rounded-sm
                "
              >
                Request Free Estimate
                <ArrowUpRight size={14} />
              </Button>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default MissionPage;