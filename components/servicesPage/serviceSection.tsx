import { House } from 'lucide-react';
import CoverBackground from '../coverBackground/coverBackground';
import RemodelingBanner from './remodelingBanner';
import ServiceContent from './serviceContent';
import ServiceProcess from './serviceProcess';
import CoverText from '../coverBackground/coverText';
import WhyChooseUs from '../whyChooseUs';

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
      <div >
        <ServiceContent/>
      </div>
      <div >
       <ServiceProcess/>
      </div>
      <div>
        <WhyChooseUs/>
      </div>
       <div className='bg-white py-12'>
        <RemodelingBanner/>
       </div>
    </>
  )
}

export default ServiceSection;
