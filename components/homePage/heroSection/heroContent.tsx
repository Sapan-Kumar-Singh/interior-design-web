"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { container, item } from "@/components/animationConfig/home";



export default function HeroContent() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-white max-w-2xl"
        >
            <motion.p
                variants={item}
                className="flex items-center gap-2 text-gold font-sans
                       text-sm  font-semibold tracking-[0.28em]  mb-5"
            >
                Award-Winning Interior Design
            </motion.p>

            <motion.h1
                variants={item}
                className="font-serif font-normal leading-[1.05]
                       text-[40px] sm:text-5xl md:text-6xl lg:text-[50px]
                       mb-6 text-white"
            >
                Transform Your Space{" "}
                <span className="italic text-gold-light">Into</span>
                <br className="hidden sm:block" /> Timeless Luxury
            </motion.h1>

            <motion.p
                variants={item}
                className="font-sans font-normal text-white/70
                       text-sm leading-relaxed mb-8 max-w-lg"
            >
                We craft beautifully designed interiors that blend
                style, comfort, and functionality — tailored to how
                you live and dream.
            </motion.p>

            <motion.div
                variants={item}
                className="flex flex-wrap gap-4 sm:gap-5 items-center"
            >
                {/* LEFT ENTER BUTTON */}
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                >
                    <Button
                        className="bg-primary hover:bg-primary/80 text-cream
           font-sans font-normal tracking-[0.16em]
           text-[11px]
           px-8 py-5
           rounded-sm
           flex items-center gap-2
           transition-all duration-300"
                    >
                        Get Free Estimate <ArrowUpRight size={12} />
                    </Button>
                </motion.div>

                {/* RIGHT ENTER BUTTON */}
                <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Button
                        variant="outline"
                        className="bg-transparent border border-white/30
           text-white hover:bg-white/10 hover:border-white
           hover:text-white font-sans font-normal tracking-[0.16em]
           text-[11px]
           px-7 py-5
           rounded-sm
           transition-all duration-300
           flex items-center gap-2"
                    >
                        View Our Projects <ArrowUpRight size={12} />
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}