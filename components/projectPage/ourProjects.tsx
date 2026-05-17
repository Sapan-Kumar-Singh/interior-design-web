"use client"
import { slideUp, staggerContainer } from '@/lib/animation'
import { motion } from 'framer-motion'
import ProjectCard from './projectCard'

type Direction = "left" | "right" | "top" | "bottom";
interface projectConfigType {
title:string;
imgSrc:string;
animationDirection:Direction;
}

const OurProjects = () => {
    const projectsConfig :projectConfigType[]=[{
        title:'Modern luxury kitchen',
        imgSrc:'/images/projects/modern_luxury_kitchen.jpg',
        animationDirection:'left'
    },{
        title:'Spa-Inspired Bathroom',
        imgSrc:'/images/projects/spa_inspired_bathroom.jpg',
        animationDirection:'top'
    },{
        title:'Contemporary Kitchen Upgrade',
        imgSrc:'/images/projects/contemporary_kitchen_upgrade.jpg',
        animationDirection:'right'
    },{
        title:'Elegant Bathroom Makeover',
        imgSrc:'/images/projects/elegant_bathroom_makeover.jpg',
        animationDirection:'left'
    },{
        title:'Luxury Living Space Redesign',
        imgSrc:'/images/projects/luxury_living_space_redesign.jpg',
        animationDirection:'bottom'
    },{
        title:'Premium Library Design',
        imgSrc:'/images/projects/premium_library_design.jpg',
        animationDirection:'right'
    }]
  return (
    <>
       <main className="bg-white">

      {/* TOP CONTENT */}
      <section className="max-w-5xl py-8 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-0">

        {/* TEXT CONTENT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex flex-col items-center text-center
            gap-3 sm:gap-4 md:gap-5
            will-change-transform
          "
        >

          <motion.h1
            variants={slideUp}
            className="
              text-gold text-xs sm:text-sm md:text-base
              font-semibold  tracking-wide
            "
          >
            Our Projects
          </motion.h1>

          <motion.h2
            variants={slideUp}
            className="
              text-xl sm:text-2xl md:text-3xl
              lg:text-4xl xl:text-5xl
              font-semibold leading-tight
              tracking-[-0.02em]
              max-w-3xl
            "
          >
          Transformations That Speak for Themselves
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="
              text-sm md:text-base text-gray-600
              leading-relaxed
              max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
            "
          >
           Explore our latest kitchen and bathroom remodeling projects, where design, craftsmanship, and attention to detail come together beautifully
          </motion.p>

        </motion.div>
          
      </section>
     {/* Replace the <section className="pb-12"> block with this */}
<section className="pb-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {projectsConfig.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          imgSrc={project.imgSrc}
          animationDirection={project.animationDirection}
        />
      ))}
    </div>
  </div>
</section>
    </main>
    </>
  )
}

export default OurProjects
