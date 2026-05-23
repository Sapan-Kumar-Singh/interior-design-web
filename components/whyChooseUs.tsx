"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "./stats";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";

import {
  fadeUpReveal,
  imageReveal,
  slideUp,
  staggerContainer,
  staggerContainerSlow,
} from "../lib/animation";
import { whyChooseUsConfig } from "@/config/whychooseUsConfig";

const WhyChooseUs = () => {
 
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[55%_45%] gap-8 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col space-y-4 will-change-transform"
          >
            {/* TEXT */}
            <div className="space-y-4">
              <motion.h1
                variants={slideUp}
                className="text-lg text-primary font-semibold capitalize"
              >
                {whyChooseUsConfig.content.badge}
              </motion.h1>

              <motion.h2
                variants={slideUp}
                className="text-obsidian font-semibold capitalize leading-[1.1] tracking-[-0.02em] text-3xl sm:text-2xl lg:text-4xl max-w-2xl"
              >
                 {whyChooseUsConfig.content.title}
              </motion.h2>

              <motion.p
                variants={slideUp}
                className="text-sm sm:text-base md:text-normal text-gray-600 leading-relaxed max-w-2xl"
              >
                 {whyChooseUsConfig.content.description}
              </motion.p>
            </div>

            {/* STATS */}
            <motion.div variants={staggerContainerSlow}>
              <Stats stats={whyChooseUsConfig.stats} />
            </motion.div>

            {/* IMAGE */}
            <motion.div
              variants={imageReveal}
              className="flex-1 min-h-[200px] will-change-transform"
            >
              <Image
                src={whyChooseUsConfig.leftImage.src}
                alt={whyChooseUsConfig.leftImage.alt}
                width={800}
                height={600}
                className="w-full object-cover rounded-2xl h-[200px] sm:h-[150px] md:h-[200px] lg:h-[220px] xl:h-[300px]"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full overflow-hidden rounded-xl min-h-[380px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[540px] xl:min-h-[590px] will-change-transform"
          >
            {/* MAIN IMAGE */}
            <Image
              src={whyChooseUsConfig.coverImage.src}
              alt={whyChooseUsConfig.coverImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-obsidian/20" />

            {/* BENEFITS CARD */}
            <motion.div
              variants={fadeUpReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="absolute inset-4 will-change-transform"
            >
              <Card className="w-full h-full border-0 bg-white backdrop-blur-sm rounded-xl shadow-2xl">
                <CardContent className="h-full flex flex-col justify-start p-4 sm:p-5 md:p-6">

                  <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5"
                  >
                    {whyChooseUsConfig.benefits.map((benefit, index) => (
                      <motion.div
                        variants={fadeUpReveal}
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 border-b border-gray-200 pb-2 sm:pb-3 last:border-0 last:pb-0"
                      >
                        {/* ICON */}
                        <div className="flex items-center justify-center min-w-7 h-7 sm:min-w-8 sm:h-8 md:min-w-9 md:h-9 lg:min-w-10 lg:h-10 rounded-full bg-gold/10 text-gold-dark shrink-0">
                          {benefit.icon}
                        </div>

                        {/* TEXT */}
                        <div>
                          <CardTitle className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-semibold text-obsidian leading-snug">
                            {benefit.title}
                          </CardTitle>

                          <CardDescription className="mt-0.5 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-relaxed text-gray-600">
                            {benefit.description}
                          </CardDescription>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;