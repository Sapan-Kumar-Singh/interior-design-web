import { House } from 'lucide-react';
import CoverBackground from '../coverBackground/coverBackground';
import RemodelingBanner from './remodelingBanner';
import ServiceContent from './serviceContent';
import ServiceProcess from './serviceProcess';
import CoverText from '../coverBackground/coverText';
import WhyChooseUs from '../whyChooseUs';
import ServiceDetails from './serviceDetails';

const ServiceSection = () => {
    

  return (
    <>
    <CoverBackground imgSrc='/images/services/service_cover_bg.jpg'>
        <CoverText title='Services' breadcrumbelement={<>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Services</span>
        </>} />
      </CoverBackground>
        <ServiceContent/>
       <ServiceProcess/>
        <WhyChooseUs/>

       <div className='bg-white pb-8 px-12 m-auto'>
        <RemodelingBanner />
       </div>

       <ServiceDetails/>
    </>
    
  )
}

export default ServiceSection;
