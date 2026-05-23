"use client"
import { slideUp, staggerContainer } from '@/lib/animation'
import { motion } from 'framer-motion'
import { projectsConfig } from '@/config/projectConfig';
import ProjectViewCard from '../../projectViewCard';


const OurProjects = () => {
 
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
              {projectsConfig.badge}
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
             {projectsConfig.title}
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="
              text-sm md:text-base text-gray-600
              leading-relaxed
              max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
            "
            >
            {projectsConfig.description}
            </motion.p>

          </motion.div>

        </section>
        {/* Replace the <section className="pb-12"> block with this */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projectsConfig.projects.map((project) => (
                <ProjectViewCard
                  key={project.slug}
                  slug={project.slug}
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
