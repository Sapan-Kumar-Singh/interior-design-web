import { House } from "lucide-react"
import PageHero from "../../pageHero"
import PageHeroContent from "../../pageHeroContent"
import ContactContent from "./contactContent"

const ContactSection = () => {
  return (
    <>
      <PageHero imgSrc='/images/contact/contact_cover_bg.jpg'>
        <PageHeroContent title='Contact' breadcrumb={<>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Contact</span>
        </>} />
      </PageHero>
      <ContactContent/>
    </>
  )
}

export default ContactSection