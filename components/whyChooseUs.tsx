"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "./stats";
import {
    Layers, Lightbulb, ReceiptText,
    SquareDashedKanban, Users,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyChooseUs = () => {
    const stats = [
        { end: 700, suffix: "+", label: "Dream Spaces Created" },
        { end: 30, suffix: "%", label: "Design Specialists" },
        { end: 96, suffix: "%", label: "Repeat Clients" },
    ];

    const keyBenefits = [
        {
            icon: <Layers size={14} />,
            title: "Premium Quality Materials",
            description: "Carefully selected premium materials built for durability and timeless aesthetics.",
        },
        {
            icon: <Users size={14} />,
            title: "Experienced Professionals",
            description: "A skilled team dedicated to delivering exceptional craftsmanship and service.",
        },
        {
            icon: <Lightbulb size={14} />,
            title: "Customized Design Solutions",
            description: "Tailored remodeling concepts designed around your lifestyle and preferences.",
        },
        {
            icon: <ReceiptText size={14} />,
            title: "Transparent Pricing",
            description: "Clear quotations and honest pricing with no hidden surprises.",
        },
        {
            icon: <SquareDashedKanban size={14} />,
            title: "On-Time Project Delivery",
            description: "Efficient project management that keeps your renovation on schedule.",
        },
    ];

    return (
        <section className="bg-white py-8 sm:py-12 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[55%_45%] gap-8 items-start">

                    {/* LEFT SIDE */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col space-y-4"
                    >
                        {/* TEXT */}
                        <div className="space-y-4">
                            <motion.h1
                                variants={item}
                                className="text-lg text-primary font-semibold capitalize"
                            >
                                Why Choose Us
                            </motion.h1>

                            <motion.h2
                                variants={item}
                                className="text-obsidian font-semibold capitalize leading-[1.1] tracking-[-0.02em] text-3xl sm:text-2xl lg:text-4xl max-w-2xl"
                            >
                                The Trusted Choice for Kitchen & Bathroom Remodeling
                            </motion.h2>

                            <motion.p
                                variants={item}
                                className="text-sm sm:text-base md:text-normal text-gray-600 leading-relaxed max-w-2xl"
                            >
                                We combine design expertise, quality craftsmanship,
                                and a client-first approach to deliver exceptional
                                remodeling experiences.
                            </motion.p>
                        </div>

                        {/* STATS */}
                        <motion.div variants={item}>
                            <Stats stats={stats} />
                        </motion.div>

                        {/* ✅ FIX 2: Image takes flex-1 so it fills remaining left-column height */}
                        <motion.div variants={item} className="flex-1 min-h-[200px]">
                            <Image
                                src="/images/why-choose-left.jpg"
                                alt="Kitchen"
                                width={800}
                                height={600}
                                className=" w-full object-cover rounded-2xl h-[200px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]"
                            />
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE
                         {/* ✅ overflow-hidden + rounded-xl moved HERE, off the Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full overflow-hidden  rounded-xl min-h-[380px]  sm:min-h-[500px]  md:min-h-[520px] lg:min-h-[540px] xl:min-h-[590px]"
                    >
                        {/* MAIN IMAGE */}
                        <Image
                            src="/images/cover-bg.jpg"
                            alt="Cover background"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/45" />

                        {/* BENEFITS CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="absolute inset-4"
                        >
                            <Card className="w-full h-full  border-0  bg-white/95  backdrop-blur-sm  rounded-xl shadow-2xl">

                                <CardContent className="h-full flex flex-col justify-start p-4 sm:p-5 md:p-6">
                                    {/* ✅ padding scales up with screen size */}
                                    <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 ">
                                        {/* ✅ gap between items scales too */}
                                        {keyBenefits.map((benefit, index) => (
                                            <motion.div
                                                key={index}
                                                // initial={{ opacity: 0, y: 80 }}
                                                // whileInView={{ opacity: 1, y: 0 }}
                                                // viewport={{ once: true, amount: 0.2 }}
                                                // transition={{
                                                //     duration: 0.7,
                                                //     delay: index * 0.12,
                                                //     ease: "easeOut",
                                                // }}
                                              //  whileHover={{ y: -4 }}
                                                className="  flex items-start   gap-2 sm:gap-3 border-b border-gray-200  pb-2 sm:pb-3 last:border-0 last:pb-0 " >
                                                {/* ICON */}
                                                <div className=" flex items-center justify-center   min-w-7 h-7     sm:min-w-8 sm:h-8    md:min-w-9 md:h-9   lg:min-w-10 lg:h-10 rounded-full   bg-gold/10 text-gold-dark  shrink-0 ">
                                                    {benefit.icon}
                                                </div>

                                                {/* TEXT */}
                                                <div>
                                                    <CardTitle className=" text-[11px]    sm:text-[13px]  md:text-[15px] lg:text-[17px] xl:text-[20px]   font-semibold   text-obsidian leading-snug ">
                                                        {benefit.title}
                                                    </CardTitle>

                                                    <CardDescription className="mt-0.5 text-[10px] sm:text-[11px] md:text-[12px]   lg:text-[13px] xl:text-[14px]  leading-relaxed text-gray-600">
                                                        {benefit.description}
                                                    </CardDescription>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
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