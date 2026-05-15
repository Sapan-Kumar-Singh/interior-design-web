import CoverBackground from '@/components/coverBackground/coverBackground'
import CoverText from '@/components/coverBackground/coverText'
import { House } from 'lucide-react'
import AboutContent from './aboutContent'
import MissionPage from '../missionPage'
import WhyChooseUs from '../whyChooseUs'
import TeamMembers from '../teamMembers'

const AboutSection = () => {
  return (
    <>
      <CoverBackground imgSrc='/images/about/about_cover_bg.jpg'>
        <CoverText title='About us' breadcrumbelement={<>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>About</span>
        </>} />
      </CoverBackground>
       <div className='bg-white'> 
       <AboutContent />
       </div>
      <MissionPage />
      <WhyChooseUs />
      <TeamMembers />
    </>
  )
}

export default AboutSection