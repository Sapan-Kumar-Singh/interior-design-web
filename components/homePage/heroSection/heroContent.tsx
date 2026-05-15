"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { slideLeft, slideRight, slideUp, staggerContainer } from "@/lib/animation";



export default function HeroContent() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-white max-w-2xl"
        >
            <motion.p
                variants={slideUp}
                className="flex items-center gap-2 text-gold font-sans
                       text-sm  font-semibold tracking-[0.28em]  mb-5"
            >
                Award-Winning Interior Design
            </motion.p>

            <motion.h1
                variants={slideUp}
                className="font-serif font-normal leading-[1.05]
                       text-[40px] sm:text-5xl md:text-6xl lg:text-[50px]
                       mb-6 text-white"
            >
                Transform Your Space{" "}
                <span className="italic text-gold-light">Into</span>
                <br className="hidden sm:block" /> Timeless Luxury
            </motion.h1>

            <motion.p
                variants={slideUp}
                className="font-sans font-normal text-white/70
                       text-sm leading-relaxed mb-8 max-w-lg"
            >
                We craft beautifully designed interiors that blend
                style, comfort, and functionality — tailored to how
                you live and dream.
            </motion.p>

            <div className="flex flex-wrap gap-4 sm:gap-5 items-center">

                {/* LEFT → CENTER */}
                <div className="overflow-hidden inline-block">
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="inline-block"
                    >
                        <Button>
                            Get Free Estimate <ArrowUpRight size={12} />
                        </Button>
                    </motion.div>
                </div>

                {/* RIGHT → CENTER */}
                <div className="overflow-hidden inline-block">
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="inline-block"
                    >
                        <Button>
                            View Our Projects <ArrowUpRight size={12} />
                        </Button>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
}