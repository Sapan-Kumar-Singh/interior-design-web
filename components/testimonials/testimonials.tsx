"use client"

import {
    imageReveal,
    slideUp,
    staggerContainerSlow,
} from "@/lib/animation"

import {
    motion,
    useInView,
} from "framer-motion"

import React, { useRef } from "react"

import Image from "next/image"

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

import { Button } from "../ui/button"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"

import MasterReviewCard from "./masterReviewCard"
import ReviewCard from "./reviewCard"

import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
    const sectionRef = useRef(null)

    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.15,
    })

    return (
        <section
            ref={sectionRef}
            className=" relative  w-full overflow-hidden   py-12 mx-auto px-4 sm:px-6 md:px-8  xl:px-0">
            {/* BACKGROUND IMAGE */}
            <motion.div
                variants={imageReveal}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="absolute inset-0"
            >
                <Image
                    src="/images/testimonial/testimonials_cover_bg.jpg"
                    alt="Testimonials background"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-obsidian/70" />

            {/* MAIN CONTAINER */}
            <div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* TOP CONTENT */}
                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="flex flex-col lg:flex-row  justify-between
                     items-start lg:items-end gap-8 lg:gap-12 text-cream">
                    {/* LEFT */}
                    <div className="w-full lg:w-[55%]">
                        <motion.h1
                            variants={slideUp}
                            className="text-sm sm:text-base  font-semibold text-cream  mb-3 tracking-wide">
                            Testimonials
                        </motion.h1>

                        <motion.h2
                            variants={slideUp}
                            className="text-xl sm:text-2xl lg:text-3xl 
                            font-bold leading-tight tracking-[-0.02em]">
                            What Our Clients Say
                            <br className="hidden sm:block" />
                            About Bathora
                        </motion.h2>
                    </div>

                    {/* RIGHT */}
                    <div
                        className=" flex flex-col items-start lg:items-end  gap-5   w-full lg:w-[40%]">
                        <motion.p
                            variants={slideUp}
                            className="text-sm sm:text-base  leading-relaxed  text-cream/90 lg:text-right">
                            Real feedback from homeowners who
                            <br className="hidden sm:block" />
                            trusted us to transform their spaces
                        </motion.p>

                        {/* OPTIONAL CUSTOM BUTTONS */}
                        <motion.div
                            variants={slideUp}
                            className="hidden lg:flex items-center gap-3">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full bg-cream hover:bg-cream/90 text-black">
                                <ChevronLeft size={18} />
                            </Button>

                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full bg-cream hover:bg-cream/90 text-black">
                                <ChevronRight size={18} />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* TESTIMONIAL SECTION */}
                <div
                    className="mt-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                    {/* LEFT CARD */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="w-full lg:w-[32%] flex">
                        <div className="w-full">
                            <MasterReviewCard />
                        </div>
                    </motion.div>

                    {/* RIGHT CAROUSEL */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="w-full lg:w-[68%] overflow-hidden">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 4000,
                                    stopOnInteraction: false,
                                }),
                            ]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                <CarouselItem
                                    className="pl-4 basis-full md:basis-1/2">
                                    <ReviewCard />
                                </CarouselItem>

                                <CarouselItem
                                    className="pl-4 basis-full md:basis-1/2">
                                    <ReviewCard />
                                </CarouselItem>

                                <CarouselItem
                                    className="pl-4 basis-full md:basis-1/2">
                                    <ReviewCard />
                                </CarouselItem>

                                <CarouselItem
                                    className=" pl-4 basis-full md:basis-1/2">
                                    <ReviewCard />
                                </CarouselItem>
                            </CarouselContent>

                            {/* BUILT-IN NAVIGATION */}
                            <CarouselPrevious
                                className="hidden lg:flex-left-5 bg-cream
                   text-black border-0 hover:bg-cream/90"/>

                            <CarouselNext
                                className="hidden lg:flex-right-5  bg-cream text-black border-0  hover:bg-cream/90"/>
                        </Carousel>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials