import React from 'react'
import CoverBackground from '../coverBackground/coverBackground'
import CoverText from '../coverBackground/coverText'
import { House } from 'lucide-react'
import OurProjects from './ourProjects'
import Testimonials from '../testimonials/testimonials'
import TransformationShowcase from './transformationShowcase'
import RemodelingBanner from '../servicesPage/remodelingBanner'


const ProjectSection = () => {
  return (
    <>
     <CoverBackground imgSrc='/images/projects/project_cover_bg.jpg'>
        <CoverText title='Our Remodeling Projects' breadcrumbelement={<>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Projects</span>
        </>} />
      </CoverBackground>
      <OurProjects/>
      <Testimonials/>
      <TransformationShowcase/>
      <div className='bg-white pb-8 px-16 m-auto'>
        <RemodelingBanner />
       </div>
    </>
  )
}

export default ProjectSection
