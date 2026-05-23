"use client"
import Image from "next/image";
import { Card, CardContent, CardDescription } from "../../ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cardReveal, slideUp, imageReveal, staggerContainerSlow } from "../../../lib/animation";
import { processSectionConfig, ProcessStep } from "@/config/serviceProcessConfig";




const ServiceProcess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const processConfig = [
    { srNo: "01", title: "Consultation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar" },
    { srNo: "02", title: "Design & Planning", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar" },
    { srNo: "03", title: "Construction", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar" },
    { srNo: "04", title: "Final Delivery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar" },
  ];

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden  p-12">

      {/* IMAGE — triggered independently since it's absolute */}
      <motion.div
        variants={imageReveal}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="absolute inset-0"
      >
        <Image
          src={processSectionConfig.background.src}
          alt={processSectionConfig.background.alt}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-obsidian/60" />

      {/* SINGLE PARENT — controls stagger for ALL children */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-cream"
      >
        {/* Each child just needs variants — no animate/whileInView needed */}
        <motion.h1
          variants={slideUp}
          className="text-base font-semibold text-cream mb-3"
        >
          {processSectionConfig.content.badge}
        </motion.h1>

        <motion.h2
          variants={slideUp}
          className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
        >
          {processSectionConfig.content.title}
        </motion.h2>

        <motion.p
          variants={slideUp}
          className="mt-4 text-sm sm:text-base text-cream/90"
        >
          {processSectionConfig.content.description}
        </motion.p>

        {/* Nested stagger container for cards */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 w-full gap-4 mt-10"
        >
          {processSectionConfig.steps.map((process:ProcessStep) => (
            <motion.div
              key={process.srNo}
              variants={slideUp}
            >
              <Card className="rounded-lg border-0 text-cream p-2 lg:p-4 bg-linear-to-t from-cream to-cream/80">
                <CardContent>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex gap-4 lg:gap-8 shrink-0">
                      <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-gold-dark">
                        {process.srNo}
                      </h3>
                      <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-gold-dark capitalize whitespace-nowrap">
                        {process.title}
                      </h4>
                    </div>
                    <CardDescription className="text-obsidian/90 leading-6 lg:max-w-[60%] lg:text-left">
                      {process.description}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default ServiceProcess;