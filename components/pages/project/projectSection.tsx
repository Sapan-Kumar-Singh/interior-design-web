import React from 'react'
import PageHero from '../../pageHero'
import PageHeroContent from '../../pageHeroContent';
import OurProjects from './ourProjects'
import Testimonials from '../../testimonials/testimonials'
import TransformationShowcase from '../../transformationShowcase'
import RemodelingBanner from '../../remodelingBanner'
import { pageHeroConfig } from '@/config/projectConfig'


const ProjectSection = () => {
  return (
    <>
     <PageHero imgSrc={pageHeroConfig.imgSrc}>
        <PageHeroContent title={pageHeroConfig.title} breadcrumb={pageHeroConfig.breadcrumb} />
      </PageHero>
      <OurProjects/>
      <Testimonials/>
      <TransformationShowcase/>
      <div className='bg-white pb-8 px-4  md:px-18 lg:px-24 m-auto'>
        <RemodelingBanner />
       </div>
    </>
   
  )
}

export default ProjectSection
