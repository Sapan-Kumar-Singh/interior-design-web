import DynamicBackground from '@/components/dynamicBackground';
import React from 'react'
import HeroSectionForm from './heroSectionForm';
import HeroContent from './heroContent';
import Stats from '@/components/stats';
import AboutPreview from '../aboutPreview';
import ServicePreview from '../servicePreview';
import GetEstimatePreview from '../getEstimatePreview';
import ProjectsPreview from '../projectsPreview';
import WhyChooseUsPreview from '../whyChooseUsPreview';
import TestimonialsPreview from '../testimonialPreview';
import TransformationShowcasePreview from '../transformationShowcasePreview';


const HeroSection = () => {
    const stats = [
      { end: 500, suffix: "+", label: "Projects Completed" },
      { end: 99, suffix: "%", label: "Client Satisfaction" },
      { end: 100, suffix: "%", label: "Quality Craftsmanship" },
    ];

    return (
        <main className="overflow-x-hidden bg-cream">
            <DynamicBackground>
                {/* Content */}


                <div className="relative z-20 flex-1 flex flex-col justify-start lg:justify-center">
                    <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-28 lg:pt-60">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start lg:items-center h-full">

                            {/* LEFT — headline */}
                            <HeroContent />

                            {/* RIGHT — floating form */}
                            <HeroSectionForm />

                        </div>
                    </div>
                </div>
            </DynamicBackground>
            <div className="bg-white pt-16 md:pt-16  px-6 sm:px-10 md:px-14 lg:px-20">
                 <Stats stats={stats} className='bg-cream-dark p-4 m-4 rounded-lg'/>
            </div>
            <AboutPreview/>
            <ServicePreview/>
            <GetEstimatePreview/>
            <ProjectsPreview/>
            <WhyChooseUsPreview/>
            <TestimonialsPreview/>
            <TransformationShowcasePreview/>
        </main>
    )

}

export default HeroSection
