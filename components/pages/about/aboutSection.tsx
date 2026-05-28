import PageHero from '@/components/pageHero'
import PageHeroContent from '@/components/pageHeroContent'
import { House } from 'lucide-react'
import AboutUs from './aboutUs'
import MissionPage from '../../missionPage'
import WhyChooseUs from '../../whyChooseUs'
import TeamMembers from '../../teamMembers'
import { pageHeroConfig } from '@/config/aboutConfig'
import GetEstimateSection from '@/components/getEstimateSection'
import { Suspense } from 'react'
import PageHeroSkeleton from '@/components/skeleton/pageHeroSkeleton'

const AboutSection = () => {
  return (
    <>
      <Suspense fallback={<PageHeroSkeleton />}>
        <PageHero imgSrc={pageHeroConfig.imgSrc}>
          <PageHeroContent title={pageHeroConfig.title} breadcrumb={pageHeroConfig.breadcrumb} />
        </PageHero>
      </Suspense>

      <AboutUs />

      <MissionPage />
      <GetEstimateSection />
      <WhyChooseUs />
      {/* <TeamMembers /> */}
    </>
  )
}

export default AboutSection