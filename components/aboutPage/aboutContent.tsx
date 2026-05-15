"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight, Layers, NotebookText, Wrench } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import Stats from "../stats";
import VideoPlayer from "../videoPlayer";

import {
    fadeRightReveal,
    slideUp,
    imageReveal,
    staggerContainer,
    staggerContainerSlow,
} from "../../lib/animation";

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

const features = [
    {
        icon: <Layers size={18} />,
        title: "Customized Design Solutions",
        content:
            "We tailor every project to your lifestyle, preferences, and budget with precision.",
    },
    {
        icon: <Wrench size={18} />,
        title: "Premium Materials & Finishes",
        content:
            "Only the finest materials make it into your home — beauty that lasts decades.",
    },
    {
        icon: <NotebookText size={18} />,
        title: "Transparent Pricing & Planning",
        content:
            "No surprises. Clear quotes, honest timelines, and full accountability.",
    },
];

const AboutContent = () => {
    return (
        <section className="bg-white w-full py-12 px-6 sm:px-10 lg:px-20 overflow-hidden">

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
                        About Us
                    </motion.h1>

                    <motion.h2
                        variants={slideUp}
                        className="font-semibold text-2xl sm:text-3xl lg:text-3xl font-serif"
                    >
                        Modern Kitchen And Bathroom{" "}
                        <em className="italic text-gold-dark">Renovations</em>{" "}
                        built for Living
                    </motion.h2>

                    <motion.p
                        variants={slideUp}
                        className="text-[14px] text-obsidian max-w-xl"
                    >
                        Bathora is dedicated to transforming kitchens and bathrooms into elegant, functional spaces that elevate everyday living. With years of experience and a passion for design, we bring creativity, precision, and quality into every project we undertake. From concept to completion, our team works closely with homeowners to understand their vision
                    </motion.p>

                    {/* VIDEO + STATS + BUTTON */}
                    <motion.div variants={fadeRightReveal}>

                        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-stretch">

                            {/* VIDEO */}
                            <div>
                                <VideoPlayer
                                    src="/videos/about-content.mp4"
                                    posterSrc="/images/thumbnail.jpg"
                                />
                            </div>

                            {/* STATS + BUTTON */}
                            <div className="flex flex-col justify-start gap-4">

                                <Stats
                                    stats={[
                                        {
                                            end: 15,
                                            suffix: "+",
                                            label: "Years of Experience",
                                        },
                                    ]}
                                />

                                <motion.div
                                    variants={slideUp}
                                    className="flex justify-center w-full lg:justify-start"
                                >
                                    <Button>
                                        Discover our story <ArrowUpRight size={14} />
                                    </Button>
                                </motion.div>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

                {/* ═════════ RIGHT SIDE ═════════ */}
                <motion.div
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-8 relative will-change-transform"
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
                            src="/images/about/about-content.jpg"
                            alt="Kitchen"
                            fill
                            className="object-cover"
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
                            relative
                            lg:-ml-[260px]
                            xl:-ml-[260px]
                            mt-6
                        "
                    >
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                variants={featureItem(i)}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.25 },
                                }}
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

export default AboutContent;