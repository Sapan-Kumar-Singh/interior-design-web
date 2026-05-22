import { House } from "lucide-react"
import CoverBackground from "../coverBackground/coverBackground"
import CoverText from "../coverBackground/coverText"
import ContactContent from "./contactContent"

const ContactSection = () => {
  return (
    <>
      <CoverBackground imgSrc='/images/contact/contact_cover_bg.jpg'>
        <CoverText title='Contact' breadcrumbelement={<>
          <House size={14} className="text-primary" />
          <span>Home</span>
          <span>|</span>
          <span>Contact</span>
        </>} />
      </CoverBackground>
      <ContactContent/>
    </>
  )
}

export default ContactSection