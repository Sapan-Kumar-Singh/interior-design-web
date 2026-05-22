"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import OverlayCard from './overlayCard'
import SideCard from './sideCard'
import { slideLeft, staggerContainerSlow } from '../../lib/animation'

const services = [
  {
    id: 1,
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into a culinary haven. From custom cabinetry to premium countertops, we craft spaces that blend beauty with function.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    type: "overlay",
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    description:
      "Elevate your daily ritual with spa-inspired bathroom designs. Every fixture, tile, and fitting chosen for enduring elegance.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    type: "side",
  },
  {
    id: 3,
    title: "Living Room Design",
    description:
      "Create living spaces that breathe. Open layouts, natural light, and artful furniture arrangements for the modern home.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    type: "overlay",
  },
  {
    id: 4,
    title: "Outdoor Spaces",
    description:
      "Extend your living area outdoors with seamless patios, decks, and garden retreats designed for year-round enjoyment.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    type: "side",
  },
];

const ServiceContent = () => {
  return (
    // ✅ REMOVED overflow-hidden from section — it blocks IntersectionObserver
    // If you need to clip horizontal scroll, wrap the whole page in overflow-x-hidden instead
    <section className="bg-cream w-full py-12 px-6 sm:px-10 lg:px-20 overflow-hidden">

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
              Our Services
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              variants={slideLeft}
              className="font-semibold text-2xl sm:text-3xl lg:text-3xl font-serif"
            >
              Expert Remodeling Services for Every Space
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
              At Bathora, we offer a complete range of kitchen and bathroom
              remodeling services designed to enhance both style and functionality.
            </motion.p>
          </div>

          <div className="overflow-hidden w-fit">
            <motion.div variants={slideLeft}>
              <Button>
                Contact us <ArrowUpRight size={14} />
              </Button>
            </motion.div>
          </div>
        </motion.div>

      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4">
        {services.map((service, idx) => 
          service.type === "overlay" ? (
            <OverlayCard key={service.id} service={service} />
          ) : (
            <SideCard key={service.id} service={service}/>
          )
        )}
      </div>

    </section>
  )
}

export default ServiceContent