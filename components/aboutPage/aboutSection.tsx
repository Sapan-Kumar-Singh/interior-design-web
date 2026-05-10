import CoverBackground from '@/components/coverBackground'
import CoverImageText from '@/components/coverImageText'
import { House } from 'lucide-react'
import AboutContent from './aboutContent'
import MissionPage from '../missionPage'
import WhyChooseUs from '../whyChooseUs'
import TeamMembers from '../teamMembers'

const AboutSection = () => {
  return (
    <>
      <CoverBackground>
        <CoverImageText title='About us' breadcrumbelement={<>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>About</span>
        </>} />
      </CoverBackground>
       <div className='py-12 bg-white'> 
       <AboutContent />
       </div>
      <MissionPage />
      <WhyChooseUs />
      <TeamMembers />
    </>
  )
}

export default AboutSection