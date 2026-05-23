
import PageHero from "../../pageHero"
import PageHeroContent from "../../pageHeroContent"
import ContactContent from "./contactContent"
import { pageHeroConfig } from "@/config/contactConfig"
const ContactSection = () => {
  return (
    <>
      <PageHero imgSrc={pageHeroConfig.imgSrc}>
        <PageHeroContent title={pageHeroConfig.title} breadcrumb={pageHeroConfig.breadcrumb}/>
      </PageHero>
      <ContactContent/>
    </>
  )
}

export default ContactSection