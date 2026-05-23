"use client"
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRef } from 'react'
import { imageReveal, slideUp, staggerContainerSlow } from '../lib/animation'
import { remodelingBannerConfig } from '@/config/remodelingConfig'


const RemodelingBanner = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

    return (
        <>
            <section ref={sectionRef} className="relative w-full   overflow-hidden rounded-xl">

                {/* IMAGE — flows naturally to give section its height */}
                <motion.div
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 1 }}
                    animate={isInView ? "show" : "hidden"}
                >
                    <Image
                        src={remodelingBannerConfig.background.src}
                        alt={remodelingBannerConfig.background.alt}
                        width={800}
                        height={600}
                        className="w-full object-cover h-[250px] lg:h-[300px]"
                    />
                </motion.div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-obsidian/60" />

                {/* CONTENT — absolutely centered over image */}
                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 text-center text-cream"
                >
                    <motion.h1
                        variants={slideUp}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-cream mb-3"
                    >
                        {remodelingBannerConfig.content.title}
                    </motion.h1>

                    <motion.p
                        variants={slideUp}
                        className="text-sm sm:text-base text-cream/90 "
                    >
                       {remodelingBannerConfig.content.description}
                    </motion.p>

                    <div className="overflow-hidden inline-block">
                        <motion.div variants={slideUp}>
                            <Button className="mt-6">
                            {remodelingBannerConfig.content.button.label} {remodelingBannerConfig.content.button.icon}
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

            </section>
        </>
    )
}

export default RemodelingBanner
