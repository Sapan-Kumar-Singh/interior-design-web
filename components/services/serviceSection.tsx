import { House } from 'lucide-react';
import PageHero from '../pageHero';
import RemodelingBanner from './remodelingBanner';
import ServiceContent from './serviceContent';
import ServiceProcess from './serviceProcess';
import PageHeroContent from '../pageHeroContent';
import WhyChooseUs from '../whyChooseUs';
import ServiceDetails from './serviceDetails';

const ServiceSection = () => {
    

  return (
    <>
    <PageHero imgSrc='/images/services/service_cover_bg.jpg'>
        <PageHeroContent title='Services' breadcrumb={<>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Services</span>
        </>} />
      </PageHero>
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
