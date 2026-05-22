import DynamicBackground from '@/components/dynamicBackground';
import HeroContent from './heroContent';
import Stats from '@/components/stats';
import AboutPreview from '../aboutPreview';
import ServicePreview from '../servicePreview';
import GetEstimatePreview from '../getEstimatePreview';
import ProjectsPreview from '../projectsPreview';
import WhyChooseUsPreview from '../whyChooseUsPreview';
import TestimonialsPreview from '../testimonialPreview';
import TransformationShowcasePreview from '../transformationShowcasePreview';
import { statsDetails } from '@/config/homeCofig';

const HeroSection = () => {


    return (
        <main className="overflow-x-hidden bg-cream">
            <DynamicBackground>
                {/* Content */}
                <div className=" relative z-20 flex-1
                   px-6 sm:px-10 md:px-14 lg:px-20
                   pt-28 md:pt-32 lg:pt-40 pb-12
                   flex items-start lg:items-center">
                    <div className="
                        w-full
                        grid grid-cols-1
                        lg:grid-cols-[1fr_400px]
                        xl:grid-cols-[1fr_420px]
                        gap-10 lg:gap-16
                        items-start lg:items-center ">
                        <HeroContent />
                    </div>
                </div>
            </DynamicBackground>
            <div className="bg-white pt-8  px-6 sm:px-10 md:px-14 lg:px-20">
                <Stats stats={statsDetails} className='bg-cream-dark p-4 m-4 rounded-md' />
            </div>
            <AboutPreview />
            <ServicePreview />
            <GetEstimatePreview />
            <ProjectsPreview />
            <WhyChooseUsPreview />
            <TestimonialsPreview />
            <TransformationShowcasePreview />
        </main>
    )

}

export default HeroSection
