"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  rotateRevealRight,
  slideLeft,
  slideRight,
  slideUp,
  staggerContainer,
} from "@/lib/animation";

import { formConfig, heroContent } from "@/config/homeCofig";
import InputForm from "@/components/inputForm";

export default function HeroContent() {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-cream max-w-2xl w-full"
      >
        <motion.p
          variants={slideUp}
          className="flex items-center gap-2 text-gold font-sans
                       text-sm font-semibold tracking-[0.28em] mb-5"
        >
          {heroContent.badge}
        </motion.p>

        <motion.h1
          variants={slideUp}
          className="font-serif font-normal leading-[1.05]
                       text-[40px] sm:text-5xl md:text-6xl lg:text-[50px]
                       mb-6 text-cream"
        >
          {heroContent.title.first}{" "}
          <span className="italic text-gold-light">{heroContent.title.highlight}</span>
          <br className="hidden sm:block" />{" "}
          {heroContent.title.second}
        </motion.h1>

        <motion.p
          variants={slideUp}
          className="font-sans font-normal text-cream
                       text-sm leading-relaxed mb-8 max-w-lg"
        >
          {heroContent.description}
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
                {heroContent.primaryButton.label}{" "}
                <ArrowUpRight size={12} />
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
              <Button
                variant="outline"
                className="text-cream hover:text-cream bg-transparent hover:bg-transparent"
              >
                {heroContent.secondaryButton.label}
                <ArrowUpRight size={12} />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={rotateRevealRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-[420px] lg:max-w-none lg:self-end"
      >
        <InputForm
          title={formConfig.title}
          description={formConfig.description}
          inputFields={formConfig.inputFields}
          footer={formConfig.footer}
          submitButtonText={formConfig.submitButtonText}
        />
      </motion.div>
    </>
  );
}