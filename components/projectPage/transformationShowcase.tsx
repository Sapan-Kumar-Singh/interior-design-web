"use client"

import { slideUp, staggerContainer } from '@/lib/animation'
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../beforeAfterSlider';


const TransformationShowcase = () => {
    return (
        <>
            <main className="bg-white overflow-hidden">

                {/* TOP CONTENT */}
                <section className="max-w-5xl py-8 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-0">

                    {/* TEXT CONTENT */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-col items-center text-center
                             gap-3 sm:gap-4 md:gap-5 will-change-transform">

                        <motion.h1
                            variants={slideUp}
                            className="text-gold text-xs sm:text-sm md:text-base font-semibold  tracking-wide">
                            Before & After
                        </motion.h1>

                        <motion.h2
                            variants={slideUp}
                            className="text-xl sm:text-2xl md:text-3xl  
                            lg:text-4xl xl:text-5xl font-semibold leading-tight
                           tracking-[-0.02em]  max-w-3xl capitalize">
                            Real transformations, real impact
                        </motion.h2>

                        <motion.p
                            variants={slideUp}
                            className="text-sm md:text-base text-obsidian/80 leading-relaxed
                                max-w-xs sm:max-w-md md:max-w-xl">
                            Watch outdated spaces turn into stunning modern interiors with our expert remodeling solutions.
                        </motion.p>

                    </motion.div>

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 2.5 }}
                        className="mt-10"
                    >
                        <BeforeAfterSlider />
                    </motion.div>
                </section>

            </main>
        </>
    )
}

export default TransformationShowcase
