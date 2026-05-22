"use client"
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { slideUp, staggerContainerSlow } from "../lib/animation";


const GetEstimateSection = () => {
  return (
    <>
       <section
        className="
          relative
          w-full
          h-[150px]
          sm:h-[200px]
          md:h-[300px]
          lg:h-[400px]
          overflow-hidden
          mt-14
        "
      >
        <Image
          src="/images/mission/cover-bg.jpg"
          alt="Estimate cover Background"
          fill
          priority
          className="object-cover min-h-[150px]"
        />

        <div className="absolute inset-0 bg-obsidian/60" />

        {/* ANIMATED CONTENT */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 flex h-full items-center justify-center px-4 text-center"
        >
          <div className="max-w-3xl">

            <motion.h2
              variants={slideUp }
              className="
                text-cream
                font-semibold
                leading-tight
                text-2xl
                sm:text-3xl
                md:text-5xl
              "
            >
              Turn Your Vision Into a Space You’ll Love Every Day
            </motion.h2>

            <motion.p
              variants={slideUp }
              className="
                mt-4
                text-cream
                text-sm
                sm:text-base
                md:text-lg
                max-w-2xl
                mx-auto
              "
            >
              Let Bathora bring your vision to life with expert design,
              premium materials, and flawless execution.
            </motion.p>

            <motion.div
              variants={slideUp }
              className="mt-6 flex justify-center"
            >
              <Button
              >
                Request Free Estimate
                <ArrowUpRight size={14} />
              </Button>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  )
}

export default GetEstimateSection
