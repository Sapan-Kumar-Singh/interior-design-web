import PageHero from '@/components/pageHero'
import PageHeroContent from '@/components/pageHeroContent'
import { House } from 'lucide-react'
import AboutUs from './aboutUs'
import MissionPage from '../../missionPage'
import WhyChooseUs from '../../whyChooseUs'
import TeamMembers from '../../teamMembers'
import { pageHeroConfig } from '@/config/aboutConfig'
import GetEstimateSection from '@/components/getEstimateSection'

const AboutSection = () => {
  return (
    <>
      <PageHero imgSrc={pageHeroConfig.imgSrc}>
        <PageHeroContent title={pageHeroConfig.title} breadcrumb={pageHeroConfig.breadcrumb} />
      </PageHero>
      <AboutUs />
       
      <MissionPage />
      <GetEstimateSection/>
      <WhyChooseUs />
      {/* <TeamMembers /> */}
    </>
  )
}

export default AboutSection