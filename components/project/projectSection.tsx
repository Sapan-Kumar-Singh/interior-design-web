import React from 'react'
import PageHero from '../pageHero'
import PageHeroContent from '../pageHeroContent'
import { House } from 'lucide-react'
import OurProjects from './ourProjects'
import Testimonials from '../testimonials/testimonials'
import TransformationShowcase from './transformationShowcase'
import RemodelingBanner from '../services/remodelingBanner'
import ProjectDetails from './projectDetails'


const ProjectSection = () => {
  return (
    // <>
    //  <PageHero imgSrc='/images/projects/project_cover_bg.jpg'>
    //     <PageHeroContent title='Our Remodeling Projects' breadcrumb={<>
    //       <House size={14} className="text-primary" />
    //       <span>Home</span>
    //       <span>|</span>
    //       <span>Projects</span>
    //     </>} />
    //   </PageHero>
    //   <OurProjects/>
    //   <Testimonials/>
    //   <TransformationShowcase/>
    //   <div className='bg-white pb-8 px-16 m-auto'>
    //     <RemodelingBanner />
    //    </div>
    // </>
    <>
    <ProjectDetails/>
    </>
  )
}

export default ProjectSection
