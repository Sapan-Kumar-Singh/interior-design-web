import { House } from 'lucide-react';
import PageHero from '../../pageHero';
import RemodelingBanner from '../../remodelingBanner';
import ServiceContent from './serviceContent';
import ServiceProcess from './serviceProcess';
import PageHeroContent from '../../pageHeroContent';
import WhyChooseUs from '../../whyChooseUs';
import ServiceDetails from './serviceDetails';
import { pageHeroConfig } from '@/config/serviceConfig';

const ServiceSection = () => {
    

  return (
    <>
      <PageHero imgSrc={pageHeroConfig.imgSrc}>
        <PageHeroContent title={pageHeroConfig.title} breadcrumb={pageHeroConfig.breadcrumb} />
      </PageHero>
      <ServiceContent />
      <ServiceProcess />
      <WhyChooseUs />

      <div className='bg-white pb-8 px-12 m-auto'>
        <RemodelingBanner />
      </div>
    </>
    
  )
}

export default ServiceSection;
