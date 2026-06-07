"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ArrowUpRight, Layers, NotebookText, Wrench } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../ui/card";
import { motion } from "framer-motion";
import Stats from "../../stats";
import VideoPlayer from "../../videoPlayer";

import {
    fadeRightReveal,
    slideUp,
    imageReveal,
    staggerContainer,
    staggerContainerSlow,
} from "../../../lib/animation";
import { aboutUsConfig } from "@/config/aboutConfig";

// FEATURE CARDS
const featureItem = (i: number) => ({
    hidden: {
        opacity: 0,
        y: 40,
        x: i % 2 === 0 ? -25 : 25,
        scale: 0.98,
        filter: "blur(4px)",
    },

    show: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",

        transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
        },
    } as const,
});


const AboutUs = () => {
    return (
        <section className="bg-white w-full py-12 px-6 sm:px-10 lg:px-16 overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* ═════════ LEFT SIDE ═════════ */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-7 will-change-transform"
                >

                    <motion.h1
                        variants={slideUp}
                        className="flex items-center gap-3 text-gold text-lg font-semibold capitalize"
                    >
                        {aboutUsConfig.badge}
                    </motion.h1>

                    <motion.h2
                        variants={slideUp}
                        className="font-semibold text-2xl sm:text-3xl lg:text-3xl font-serif"
                    >
                        {aboutUsConfig.title.first}{" "}
                        <em className="italic text-gold-dark">{aboutUsConfig.title.highlight}</em>{" "}
                        {aboutUsConfig.title.second}
                    </motion.h2>

                    <motion.p
                        variants={slideUp}
                        className="text-[14px] text-obsidian max-w-xl"
                    >
                        {aboutUsConfig.description}
                    </motion.p>

                    {/* VIDEO + STATS + BUTTON */}
                    <motion.div variants={fadeRightReveal}>

                        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-stretch">

                            {/* VIDEO */}
                            <VideoPlayer src={aboutUsConfig.video.src} />

                            {/* STATS + BUTTON */}
                            {/* <div className="flex flex-col justify-start gap-4">

                                <Stats stats={aboutUsConfig.stats} />

                                <motion.div
                                    variants={slideUp}
                                    className="flex justify-center w-full lg:justify-start"
                                >
                                    <Button>
                                        {aboutUsConfig.button.label}<ArrowUpRight size={14} />
                                    </Button>
                                </motion.div>

                            </div> */}

                        </div>

                    </motion.div>

                </motion.div>

                {/* ═════════ RIGHT SIDE ═════════ */}
                <motion.div
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-8 relative will-change-transform md:mt-12"
                >

                    {/* IMAGE */}
                    <div
                        className="
                            relative h-[360px]
                            sm:h-[480px]
                            lg:h-[500px]
                            rounded-2xl overflow-hidden
                        "
                    >
                        <Image
                            src={aboutUsConfig.image.src}
                            alt={aboutUsConfig.image.alt}
                            fill
                            className="object-cover"
                             sizes="
               (max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw
             "
                        />
                    </div>

                    {/* FEATURES */}
                    <motion.div
                        variants={staggerContainerSlow}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="
                            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
                            relative lg:-ml-[225px] mt-6">
                        {aboutUsConfig.features.map((f, i) => (
                            <motion.div
                                key={i}
                                variants={featureItem(i)}
                            >
                                <Card className="rounded-sm bg-cream shadow-sm h-full">

                                    <CardHeader>

                                        <div className="w-10 h-10 bg-gold/10 flex items-center justify-center text-gold rounded-full">
                                            {f.icon}
                                        </div>

                                        <CardTitle className="text-[13px]">
                                            {f.title}
                                        </CardTitle>

                                    </CardHeader>

                                    <CardContent>

                                        <CardDescription className="text-[12px]">
                                            {f.content}
                                        </CardDescription>

                                    </CardContent>

                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
};

export default AboutUs;