"use client"

import { imageReveal, slideUp, staggerContainerSlow, } from "@/lib/animation"

import { motion, useInView, } from "framer-motion";

import React, { useRef } from "react"

import Image from "next/image"

import { ChevronLeft, ChevronRight, } from "lucide-react"

import { Button } from "../ui/button"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "../ui/carousel"

import MasterReviewCard from "./masterReviewCard"
import ReviewCard from "./reviewCard"

import Autoplay from "embla-carousel-autoplay"
import { testimonialsConfig } from "@/config/testimonialsConfig";

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
                    src={testimonialsConfig.background.src}
                    alt={testimonialsConfig.background.alt}
                    fill
                    priority
                    className="object-cover"
                     sizes="
               (max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw
             "
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
                            {testimonialsConfig.badge}
                        </motion.h1>

                        <motion.h2
                            variants={slideUp}
                            className="text-xl sm:text-2xl lg:text-3xl 
                            font-bold leading-tight tracking-[-0.02em]">
                            {testimonialsConfig.title.firstLine}
                            <br className="hidden sm:block" />
                            {testimonialsConfig.title.secondLine}
                        </motion.h2>
                    </div>

                    {/* RIGHT */}
                    <div
                        className=" flex flex-col items-start lg:items-end  gap-5   w-full lg:w-[40%]">
                        <motion.p
                            variants={slideUp}
                            className="text-sm sm:text-base  leading-relaxed  text-cream/90 lg:text-right">
                            {testimonialsConfig.description.firstLine}
                            <br className="hidden sm:block" />
                            {testimonialsConfig.description.secondLine}
                        </motion.p>

                        {/* OPTIONAL CUSTOM BUTTONS */}
                        {/* <motion.div
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
                        </motion.div> */}
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
                            <MasterReviewCard
                                title={testimonialsConfig.masterReview.title}
                                rating={testimonialsConfig.masterReview.rating}
                                description={testimonialsConfig.masterReview.description}
                            />
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
                                {
                                    testimonialsConfig.reviews.map((reviewDetail) => {
                                        return (
                                            <CarouselItem key={reviewDetail.name} className="pl-4 basis-full md:basis-1/2">
                                                <ReviewCard
                                                    imgSrc={reviewDetail.imgSrc}
                                                    name={reviewDetail.name}
                                                    rating={reviewDetail.rating}
                                                    review={reviewDetail.review}
                                                    role={reviewDetail.role} />
                                            </CarouselItem>
                                        )
                                    })
                                }
                            </CarouselContent>

                            {/* BUILT-IN NAVIGATION */}
                            
                        </Carousel>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials