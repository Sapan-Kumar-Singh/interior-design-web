"use client"
import React from 'react'
import { Button } from '../../ui/button'
import { motion } from 'framer-motion'
import OverlayCard from '../../overlayCard'
import { slideLeft, staggerContainerSlow } from '../../../lib/animation'
import ContentCard from '../../contentCard'
import { servicesSectionConfig } from '@/config/serviceConfig'
import { useRouter } from 'next/navigation'

const ServiceContent = () => {
  const router=useRouter();
  return (

    <section className="bg-cream w-full py-8 px-6 sm:px-10 lg:px-20 overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">

        {/* Left column */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-7"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={slideLeft}
              className="flex items-center gap-3 text-gold text-lg font-semibold capitalize"
            >
              {servicesSectionConfig.content.badge}
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              variants={slideLeft}
              className="font-bold text-2xl"
            >
              {servicesSectionConfig.content.title}
            </motion.h2>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-7"
        >
          <div className="overflow-hidden">
            <motion.p
              variants={slideLeft}
              className="text-[14px] text-obsidian max-w-xl"
            >
              {servicesSectionConfig.content.description}
            </motion.p>
          </div>

          <div className="overflow-hidden w-fit">
            <motion.div variants={slideLeft}>
              <Button onClick={()=>{
                  const href=servicesSectionConfig?.content.button?.href;
                  if(href){
                    router.push(href);
                  }
                }}>
                {servicesSectionConfig.content.button.label} {servicesSectionConfig.content.button.icon}
              </Button>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4">
        {
          servicesSectionConfig.services.map((service) => {
            const { slug, title, image, description, type, } = service;

            return type === "overlay" ? (
              <OverlayCard
                key={slug}
                slug={slug}
                title={title}
                description={description}
                image={image}
              />
            ) : (
              <ContentCard
                key={slug}
                slug={slug}
                title={title}
                description={description}
                image={image}
              />
            );
          })
        }
      </div>

    </section>
  )
}

export default ServiceContent